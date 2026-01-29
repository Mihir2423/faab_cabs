# WhatsApp template for hero booking form

Create this template in **Meta Business Manager** → **WhatsApp Manager** → **Message templates** so the backend can send booking requests to your WhatsApp number.

## Template name and language

- **Name:** `template_booking_request` (or set `CAB_BOOKING_TEMPLATE_NAME` in `.env`)
- **Language:** English (US) – `en_US` (or set `TEMPLATE_LANGUAGE_CODE` in `.env`)
- **Category:** Marketing or Utility (as per your use case)

## Body (8 variables)

Use exactly these placeholders in the body. Order must match.

```
New cab request from FAAB CABS website.

*Category:* {{1}}
*From:* {{2}}
*To:* {{3}}
*Date:* {{4}}
*Time:* {{5}}
*Customer phone:* {{6}}
*Car:* {{7}}
*Additional:* {{8}}
```

### Variable mapping

| # | Parameter   | Description / example values |
|---|-------------|------------------------------|
| 1 | Category    | e.g. "Outstation - One Way", "Local - 4 hrs / 40 km", "Airport - Pickup" |
| 2 | From        | From city or airport name |
| 3 | To          | To city, or "Airport pickup" / "Airport drop" for airport trips |
| 4 | Date        | Trip date (YYYY-MM-DD) |
| 5 | Time        | Trip time (e.g. 10:00) |
| 6 | Customer phone | Customer's phone number |
| 7 | Car         | e.g. "Sedan", "Innova Crysta", "Tempo Traveller" |
| 8 | Additional  | Return date for round trip, or local package (e.g. "4 hrs / 40 km"), or "—" |

## Sample for approval

When submitting the template in Meta, use sample values so the template is approved, for example:

- {{1}} = Outstation - One Way  
- {{2}} = Patna  
- {{3}} = Ranchi  
- {{4}} = 2025-02-01  
- {{5}} = 10:00  
- {{6}} = 9876543210  
- {{7}} = Innova Crysta  
- {{8}} = Return: 2025-02-03  

After approval, the backend will replace these with real form data when sending the message.
