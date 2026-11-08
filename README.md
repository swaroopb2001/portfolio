# swaroop.dev — portfolio

Personal portfolio and resume for S Swaroop Bharadwaj. Built with Next.js (App Router, React Server Components), TypeScript and Tailwind CSS v4, deployed on Vercel.

## Develop

```bash
nvm use          # Node 22 (see .nvmrc)
npm install
npm run dev      # http://localhost:3000
```

## Editing content

All content — experience, projects, research, skills and the condensed resume bullets — lives in [`src/content/profile.ts`](src/content/profile.ts). Both the home page and `/resume` read from it.

> This repo and site are public. Don't add internal ticket IDs, internal service names, internal links or incident details.

## Resume PDF

Open `/resume` and click **Download PDF** (or Cmd+P) → "Save as PDF". In the print dialog, turn off "Headers and footers".

## Pages

| Route | What |
| --- | --- |
| `/` | Portfolio |
| `/resume` | Printable one-page resume |
| `/opengraph-image` | Generated social preview |
| `/sitemap.xml`, `/robots.txt` | SEO |
