# Ishan Yash Patel: Portfolio

One-page portfolio. Next.js (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion. Deploys on Vercel with zero config.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Editing content
All content lives in `src/data/portfolio.ts`. Components only render it.

### TODO (needs you)
- `profile.photo`: drop an image in `/public`, set e.g. `"/me.jpg"` (hero shows it automatically)
- Project / competition `links`: set each `href` (empty ones render as "link soon")
- Hult Prize Campus Director: fill in dates and description in `leadership`
- Add more projects by copying the commented template at the bottom of `projects`
- `metadataBase` in `src/app/layout.tsx` once you have a domain

## Contact form
The form posts to `/api/contact` (Next.js route handler) and emails you through [Resend](https://resend.com). To turn it on, add these in Vercel > Project > Settings > Environment Variables, then redeploy:
- `RESEND_API_KEY` (required)
- `CONTACT_TO_EMAIL` (optional, defaults to your email in `portfolio.ts`)
- `CONTACT_FROM_EMAIL` (optional, e.g. `Portfolio <hello@yourdomain.com>`; defaults to Resend's test sender, which can only deliver to your own Resend account email)

Until the key is set, the form shows a message asking visitors to email you directly.

## Logos
Logos live in `public/logos/` and are wired up through the `logo` field in `src/data/portfolio.ts`. NephroAI / Icertis and Insteasy still show initials: add their logo files and set `logo` to show them.

## Design
Impeccable is installed in `.claude/` (`npx impeccable install`). Product context is in `PRODUCT.md`. After reloading Claude Code, try `/impeccable critique`, `/impeccable polish`, `/impeccable audit`.

## Deploy
Import the GitHub repo at vercel.com/new; the defaults work.
