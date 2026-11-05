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
- `profile.links.linkedin`: set your full profile URL (the one provided ended at `/in/`)
- `profile.photo`: drop an image in `/public`, set e.g. `"/me.jpg"` (hero shows it automatically)
- Resume: put your PDF at `public/resume.pdf` (the Resume button already points there)
- Project / competition `links`: set each `href` (empty ones render as "link soon")
- Hult Prize Campus Director: fill in dates and description in `leadership`
- Add more projects by copying the commented template at the bottom of `projects`
- `metadataBase` in `src/app/layout.tsx` once you have a domain

## Design
Impeccable is installed in `.claude/` (`npx impeccable install`). Product context is in `PRODUCT.md`. After reloading Claude Code, try `/impeccable critique`, `/impeccable polish`, `/impeccable audit`.

## Deploy
Import the GitHub repo at vercel.com/new; the defaults work.
