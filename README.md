# Khalil Lamrabet — Portfolio

Personal developer portfolio of **Khalil Lamrabet**, engineering student specializing in Big Data and Artificial Intelligence. Built with Next.js, TypeScript and Tailwind CSS.

## Content

Six projects are documented under `/projects`: **QCM Corrector**, **DataFlow**, **VisionAI**, **DocuMind**, a complaint-management CRM and a user-management web app (the last two built during internships). Each page follows the same structure: problem, solution, features, architecture, technical implementation, challenges, results and future improvements, with links to the source code where it is public.

Project descriptions state what is implemented and verified, and list open work under "Future improvements". Edit `data/projects.ts` to update them; keep claims limited to things you can demonstrate.

## Tech stack

| Area | Technology | Why |
| --- | --- | --- |
| Framework | Next.js 16 (App Router) | Static generation for every page (fast, cheap to host) with the App Router's built-in Metadata API for SEO/Open Graph — no extra SEO library needed. |
| Language | TypeScript (strict mode) | Catches broken links between `data/projects.ts` and the pages that render it at build time. |
| Styling | Tailwind CSS v4 | Utility-first, no runtime CSS-in-JS cost; the CSS-based `@theme` config in `app/globals.css` holds the whole design system (colors, fonts) in one place. |
| Fonts | `next/font` (IBM Plex Sans / IBM Plex Mono) | Self-hosted and optimized automatically by Next.js, no external font request at runtime. |
| Contact | `mailto:` / `tel:` links, no contact-form backend | A form would need a server or a third-party service to receive submissions, and would collect visitor data unnecessarily for a portfolio. A direct e-mail link is simpler and more reliable. |

## Project structure

```text
.
├── app/
│   ├── layout.tsx              # Fonts, global metadata, header/footer
│   ├── page.tsx                # Home: hero, featured project, skills preview
│   ├── globals.css             # Tailwind + design system (@theme)
│   ├── sitemap.ts / robots.ts  # SEO
│   ├── projects/
│   │   ├── page.tsx            # Project list with category filter
│   │   └── [slug]/page.tsx     # Project write-up template (13 sections)
│   ├── about/page.tsx          # Education, experience, skills, certifications, languages
│   └── contact/page.tsx
├── components/                 # SiteHeader, ProjectCard, Timeline, CodePanel, ...
├── data/
│   ├── profile.ts              # Contact info, education, experience, skills
│   ├── projects.ts             # The 6 projects — edit this to add content
│   └── types.ts
└── public/resume/              # CV PDF served at /resume/Khalil_Lamrabet_CV.pdf
```

## Getting started

Requires Node.js **20.9 or later**.

```bash
npm install
cp .env.example .env.local   # optional locally; required before deploying
npm run dev
```

Open <http://localhost:3000>.

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm start` | Serve the production build |
| `npm run lint` | Lint the code with ESLint |
| `npm run typecheck` | Type-check the project with TypeScript |

## Environment variables

| Variable | Default | Description |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | `http://localhost:3000` | Absolute site URL, used to build the sitemap and Open Graph URLs. Set it to your real domain before deploying. |

## Deploying to Vercel

1. Push this repository to GitHub.
2. On <https://vercel.com>, **Add New → Project** and import the repository (the Next.js preset is detected automatically).
3. Under **Environment Variables**, add `NEXT_PUBLIC_SITE_URL` with your future URL, e.g. `https://khalil-lamrabet.vercel.app`.
4. Click **Deploy**.
5. Once deployed, if the URL differs from what you set, update `NEXT_PUBLIC_SITE_URL` and redeploy (it is read at build time).

## Updating the CV

Replace `public/resume/Khalil_Lamrabet_CV.pdf` with a newer export, keeping the same file name, or update the path in `components/SiteHeader.tsx`, `app/page.tsx` and `app/contact/page.tsx` if you rename it.

## Accessibility & performance notes

- All pages are statically generated (`generateStaticParams` for project pages).
- No decorative or placeholder images are used; project cards rely on text and technology tags.
- Focus states are visible (`:focus-visible`), a skip-to-content link is provided, and `prefers-reduced-motion` is respected.
- Metadata (title, description, Open Graph, canonical URL) is set per page.
