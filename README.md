# MATHISS Consulting Website

Responsive multi-page company profile website for **MATHISS Consulting**.

## Included Pages

- Home
- About Us
- Services
- Projects / Portfolio
- Impact & Legacy
- Testimonials / Case Study Themes
- Contact Us

## Design Direction Implemented

- Color palette: Navy Blue, Gold, White
- Typography: Montserrat, Lato, Roboto
- Tone: Professional, confident, inspiring, culturally aware, socially responsible
- Mobile-friendly responsive layout
- Basic SEO metadata on all pages

## Run Locally

```bash
npm install
npm start
```

Open your browser at:

`http://localhost:8080`

## Run Smoke Test

```bash
npm test
```

## Contact Form Email Configuration

The contact form now submits to `POST /api/contact` and sends an email from the Node server.

1. Copy `.env.example` to `.env`.
2. Fill in your SMTP values.
3. Run `npm start`.

Required/optional variables:

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `SMTP_SECURE` (`true` for SSL, typically port 465)
- `SMTP_FROM` (optional, sender address)
- `CONTACT_TO_EMAIL` (optional, destination inbox; defaults to `info@mathissconsulting.co.za`)
- `PORT` (optional, defaults to `8080`)

## Deploying to Vercel

This project uses static HTML pages and a serverless API endpoint at `api/contact.js`.

1. In Vercel Project Settings, ensure **Root Directory** is the repository root (`MathissConsulting`).
2. Add environment variables in **Settings → Environment Variables**:
	- `SMTP_HOST`
	- `SMTP_PORT`
	- `SMTP_USER`
	- `SMTP_PASS`
	- `SMTP_SECURE` (use `true` when `SMTP_PORT=465`)
	- `SMTP_FROM`
	- `CONTACT_TO_EMAIL`
3. Redeploy after saving environment variables.

If you change variables later, trigger a new deployment so the function picks up updated values.

## Notes for Final Production Content

- Confirm office address details in all footers: `22 Bickley Street, Meadowlands Zone 6, Johannesburg`.
- Add approved project photos to portfolio cards.
- Replace affiliate badge placeholders in `assets/affiliates/` with approved official logos if preferred.
