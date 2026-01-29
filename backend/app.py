"""
FAAB CABS - Backend API
Handles hero section booking form and sends WhatsApp template messages via Meta Graph API.
"""
import os
import re
from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app, origins=os.getenv("CORS_ORIGINS", "http://localhost:3000").split(","))

# WhatsApp Cloud API config (from Meta Developer / WhatsApp Business)
WHATSAPP_PHONE_ID = os.getenv("WHATSAPP_PHONE_ID")
WHATSAPP_ACCESS_TOKEN = os.getenv("WHATSAPP_ACCESS_TOKEN")
# Phone number that receives lead notifications (with country code, no +)
RECIPIENT_PHONE = os.getenv("RECIPIENT_PHONE")

# Template names as created in Meta Business Manager > WhatsApp > Message Templates
CAB_BOOKING_TEMPLATE_NAME = os.getenv("CAB_BOOKING_TEMPLATE_NAME", "template_booking_request")
CONTACT_TEMPLATE_NAME = os.getenv("CONTACT_TEMPLATE_NAME", "template_review_form")
TEMPLATE_LANGUAGE_CODE = os.getenv("TEMPLATE_LANGUAGE_CODE", "en_US")

# Dev/testing: set USE_WHATSAPP_TEMPLATES=false to send plain text instead of templates (no approval needed).
# Set FALLBACK_TO_TEXT_ON_TEMPLATE_ERROR=true to retry as text if template send fails (e.g. template not yet approved).
# Note: WhatsApp may only allow outbound text (non-template) within 24h of recipient's last message; templates work anytime.
USE_WHATSAPP_TEMPLATES = os.getenv("USE_WHATSAPP_TEMPLATES", "true").lower() == "true"
FALLBACK_TO_TEXT_ON_TEMPLATE_ERROR = os.getenv("FALLBACK_TO_TEXT_ON_TEMPLATE_ERROR", "false").lower() == "true"


def normalize_phone(phone: str) -> str:
    """Strip spaces and ensure digits only; add 91 if 10-digit Indian number."""
    digits = re.sub(r"\D", "", phone)
    if len(digits) == 10 and not digits.startswith("91"):
        return "91" + digits
    return digits


def build_category_label(trip_type: str, outstation_type: str | None, airport_type: str | None, local_package: str | None) -> str:
    """Build a single category string for the template."""
    if trip_type == "outstation":
        return f"Outstation - {outstation_type or 'One Way'}"
    if trip_type == "airport":
        return f"Airport - {airport_type or 'Pickup'}"
    if trip_type == "local":
        return f"Local - {local_package or 'Package not selected'}"
    return trip_type or "N/A"


def build_additional_info(trip_type: str, return_date: str | None, local_package: str | None) -> str:
    """Build extra line for return date or package."""
    parts = []
    if trip_type == "outstation" and return_date:
        parts.append(f"Return: {return_date}")
    if trip_type == "local" and local_package:
        parts.append(local_package)
    return " | ".join(parts) if parts else "—"


def send_whatsapp_text(to_phone: str, body: str) -> tuple[bool, str]:
    """
    Send a plain text WhatsApp message via Graph API (no template approval needed).
    Body max length 4096 characters.
    """
    if not WHATSAPP_PHONE_ID or not WHATSAPP_ACCESS_TOKEN:
        return False, "Server missing WhatsApp configuration (WHATSAPP_PHONE_ID / WHATSAPP_ACCESS_TOKEN)."
    body = (body or "").strip()
    if not body:
        return False, "Message body is empty."
    if len(body) > 4096:
        body = body[:4093] + "..."

    url = f"https://graph.facebook.com/v22.0/{WHATSAPP_PHONE_ID}/messages"
    headers = {
        "Authorization": f"Bearer {WHATSAPP_ACCESS_TOKEN}",
        "Content-Type": "application/json",
    }
    payload = {
        "messaging_product": "whatsapp",
        "to": to_phone.lstrip("+"),
        "type": "text",
        "text": {"body": body},
    }
    try:
        r = requests.post(url, json=payload, headers=headers, timeout=15)
        data = r.json() if r.text else {}
        if r.status_code == 200 and data.get("messages"):
            return True, ""
        err = data.get("error", {})
        return False, err.get("message", r.text or f"HTTP {r.status_code}")
    except requests.RequestException as e:
        return False, str(e)


def send_whatsapp_template(
    to_phone: str,
    template_name: str,
    language_code: str,
    body_variables: list[str],
) -> tuple[bool, str]:
    """
    Send a WhatsApp template message via Graph API.
    body_variables: list of strings matching the template body {{1}}, {{2}}, ... in order.
    """
    if not WHATSAPP_PHONE_ID or not WHATSAPP_ACCESS_TOKEN:
        return False, "Server missing WhatsApp configuration (WHATSAPP_PHONE_ID / WHATSAPP_ACCESS_TOKEN)."

    url = f"https://graph.facebook.com/v22.0/{WHATSAPP_PHONE_ID}/messages"
    headers = {
        "Authorization": f"Bearer {WHATSAPP_ACCESS_TOKEN}",
        "Content-Type": "application/json",
    }
    payload = {
        "messaging_product": "whatsapp",
        "to": to_phone.lstrip("+"),
        "type": "template",
        "template": {
            "name": template_name,
            "language": {"code": language_code},
            "components": [
                {
                    "type": "body",
                    "parameters": [{"type": "text", "text": v} for v in body_variables],
                }
            ],
        },
    }
    try:
        r = requests.post(url, json=payload, headers=headers, timeout=15)
        data = r.json() if r.text else {}
        if r.status_code == 200 and data.get("messages"):
            return True, ""
        err = data.get("error", {})
        return False, err.get("message", r.text or f"HTTP {r.status_code}")
    except requests.RequestException as e:
        return False, str(e)


def build_booking_text_body(
    category: str,
    from_label: str,
    to_label: str,
    date: str,
    time: str,
    phone: str,
    car_display: str,
    additional: str,
) -> str:
    """Build plain text body for booking (same structure as template)."""
    return (
        "New cab request from FAAB CABS website.\n\n"
        f"*Category:* {category}\n"
        f"*From:* {from_label}\n"
        f"*To:* {to_label}\n"
        f"*Date:* {date}\n"
        f"*Time:* {time}\n"
        f"*Customer phone:* {phone}\n"
        f"*Car:* {car_display}\n"
        f"*Additional:* {additional}"
    )


def build_contact_text_body(name: str, phone: str, email: str, message: str) -> str:
    """Build plain text body for contact/review form (same structure as template)."""
    return (
        'New message from FAAB CABS "Write to us" form.\n\n'
        f"*Name:* {name}\n"
        f"*Phone:* {phone}\n"
        f"*Email:* {email}\n"
        f"*Message:* {message}"
    )


@app.route("/health", methods=["GET"])
def health():
    return jsonify({"status": "ok"})


@app.route("/api/booking-request", methods=["POST"])
def booking_request():
    """
    Accept hero form payload and send a WhatsApp template to RECIPIENT_PHONE.
    Expects JSON with fields matching the hero form (tripType, fromCity, toCity, etc.).
    Template body must have 8 variables in this order (see WHATSAPP_TEMPLATE_BOOKING.md).
    """
    if not RECIPIENT_PHONE:
        return jsonify({"error": "RECIPIENT_PHONE not configured"}), 500

    try:
        body = request.get_json() or {}
    except Exception:
        return jsonify({"error": "Invalid JSON"}), 400

    trip_type = (body.get("tripType") or "outstation").lower()
    outstation_type = (body.get("outstationType") or "oneway").lower()
    airport_type = (body.get("airportType") or "pickup").lower()
    from_city = (body.get("fromCity") or "").strip()
    to_city = (body.get("toCity") or "").strip()
    airport_name = (body.get("airportName") or "").strip()
    date = (body.get("date") or "").strip()
    time = (body.get("time") or "10:00").strip()
    return_date = (body.get("returnDate") or "").strip()
    local_package = (body.get("localPackage") or "").strip()
    phone = normalize_phone(body.get("phone") or "")
    car_type = (body.get("carType") or "").strip()

    if not phone:
        return jsonify({"error": "Phone number is required"}), 400

    # Map "from" and "to" by category
    if trip_type == "airport":
        from_label = airport_name or "—"
        to_label = airport_type == "pickup" and "Airport pickup" or "Airport drop"
    else:
        from_label = from_city or "—"
        to_label = to_city or "—"

    category = build_category_label(trip_type, outstation_type, airport_type, local_package)
    additional = build_additional_info(trip_type, return_date, local_package)

    # Car display name
    car_display = car_type or "Not selected"

    body_variables = [
        category,
        from_label,
        to_label,
        date,
        time,
        phone,
        car_display,
        additional,
    ]
    text_body = build_booking_text_body(
        category, from_label, to_label, date, time, phone, car_display, additional
    )

    if not USE_WHATSAPP_TEMPLATES:
        ok, err = send_whatsapp_text(RECIPIENT_PHONE, text_body)
    else:
        ok, err = send_whatsapp_template(
            to_phone=RECIPIENT_PHONE,
            template_name=CAB_BOOKING_TEMPLATE_NAME,
            language_code=TEMPLATE_LANGUAGE_CODE,
            body_variables=body_variables,
        )
        if not ok and FALLBACK_TO_TEXT_ON_TEMPLATE_ERROR:
            ok, err = send_whatsapp_text(RECIPIENT_PHONE, text_body)

    if not ok:
        return jsonify({"error": "Failed to send WhatsApp message", "detail": err}), 502

    return jsonify({"success": True, "message": "Booking request sent."}), 200


@app.route("/api/contact-request", methods=["POST"])
def contact_request():
    """
    Accept "Write to us" contact form and send a WhatsApp template to RECIPIENT_PHONE.
    Expects JSON: name, phone, email, message.
    Template body must have 4 variables in this order (see WHATSAPP_TEMPLATE_CONTACT.md).
    """
    if not RECIPIENT_PHONE:
        return jsonify({"error": "RECIPIENT_PHONE not configured"}), 500

    try:
        body = request.get_json() or {}
    except Exception:
        return jsonify({"error": "Invalid JSON"}), 400

    name = (body.get("name") or "").strip()
    phone = normalize_phone(body.get("phone") or "")
    email = (body.get("email") or "").strip()
    message = (body.get("message") or "").strip()

    if not name:
        return jsonify({"error": "Name is required"}), 400
    if not phone:
        return jsonify({"error": "Phone number is required"}), 400
    if not email:
        return jsonify({"error": "Email is required"}), 400
    if not message:
        return jsonify({"error": "Message is required"}), 400

    body_variables = [name, phone, email, message]
    text_body = build_contact_text_body(name, phone, email, message)

    if not USE_WHATSAPP_TEMPLATES:
        ok, err = send_whatsapp_text(RECIPIENT_PHONE, text_body)
    else:
        ok, err = send_whatsapp_template(
            to_phone=RECIPIENT_PHONE,
            template_name=CONTACT_TEMPLATE_NAME,
            language_code=TEMPLATE_LANGUAGE_CODE,
            body_variables=body_variables,
        )
        if not ok and FALLBACK_TO_TEXT_ON_TEMPLATE_ERROR:
            ok, err = send_whatsapp_text(RECIPIENT_PHONE, text_body)

    if not ok:
        return jsonify({"error": "Failed to send WhatsApp message", "detail": err}), 502

    return jsonify({"success": True, "message": "Contact request sent."}), 200


if __name__ == "__main__":
    port = int(os.getenv("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=os.getenv("FLASK_DEBUG", "false").lower() == "true")
