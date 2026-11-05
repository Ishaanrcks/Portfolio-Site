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
- `profile.links.linkedin`: add your profile slug
- `profile.photo`: drop an image in `/public`, set e.g. `"/me.jpg"` (hero shows it automatically)
- `profile.links.resume`: add `/public/resume.pdf` and set `"/resume.pdf"`
- `education[0].note`: CGPA (your CVs list 8.54, 7.63, 8.23) and confirm graduation year (2027 vs 2028)
- Deakin period: confirm "Sept 2025 – Present"
- Project `links` / `stack`: add GitHub and demo links; copy the commented template at the bottom of `projects`
- `metadataBase` in `src/app/layout.tsx` once you have a domain

## Design
Impeccable is installed in `.claude/` (`npx impeccable install`). Product context is in `PRODUCT.md`. After reloading Claude Code, try `/impeccable critique`, `/impeccable polish`, `/impeccable audit`.

## Deploy
Import the GitHub repo at vercel.com/new; the defaults work.
