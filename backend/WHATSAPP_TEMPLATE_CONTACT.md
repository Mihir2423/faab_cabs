# WhatsApp template for "Write to us" contact form

Create this template in **Meta Business Manager** → **WhatsApp Manager** → **Message templates** so the backend can send contact form submissions to your WhatsApp number.

## Template name and language

- **Name:** `template_review_form` (or set `CONTACT_TEMPLATE_NAME` in `.env`)
- **Language:** English (US) – `en_US` (or set `TEMPLATE_LANGUAGE_CODE` in `.env`)
- **Category:** Marketing or Utility (as per your use case)

## Body (4 variables)

Use exactly these placeholders in the body. Order must match.

```
New message from FAAB CABS "Write to us" form.

*Name:* {{1}}
*Phone:* {{2}}
*Email:* {{3}}
*Message:* {{4}}
```

### Variable mapping

| # | Parameter | Description / example values |
|---|-----------|-----------------------------|
| 1 | Name      | Sender's name |
| 2 | Phone     | Sender's phone (with country code) |
| 3 | Email     | Sender's email |
| 4 | Message   | Message content |

## Sample for approval

When submitting the template in Meta, use sample values so the template is approved, for example:

- {{1}} = John Doe  
- {{2}} = 919876543210  
- {{3}} = john@example.com  
- {{4}} = I would like to know more about your cab services.  

After approval, the backend will replace these with real form data when sending the message.
