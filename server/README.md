# Sri Ayurveda Backend

The Express backend verifies phone.email contact data and saves appointment requests to monthly Excel files in `data/`.

## Local development

Install server dependencies and start the API:

```bash
cd server
npm install
npm start
```

The backend listens on port `5000` by default. Set `PORT` to override it. The root frontend dev server proxies `/api` requests to this port.

## Production configuration

Set `NODE_ENV=production` and optionally `PORT` in the hosting platform's environment settings. Do not commit `.env` files. The phone.email widget client IDs are public frontend configuration; no phone.email server secret is required.

## API

### `POST /api/verify-contact`

Accepts the phone.email verification type and one-time JSON URL. The server restricts the URL to HTTPS phone.email hosts, fetches the verification data, and temporarily records the verified email or phone for the contact submission.

### `POST /api/contact-submit`

Accepts the appointment request after both email and phone have been verified. The request is stored in `data/YYYY-MM.xlsx`. Automated email notifications are currently disabled.

### `GET /api/health`

Returns `{ "status": "ok" }` when the server is running.

WhatsApp requests are prefilled in the user's browser; the user must press **Send** in WhatsApp. The website does not send WhatsApp messages automatically.
