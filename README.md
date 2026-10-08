# Manikandan M: Portfolio

Personal portfolio built with Next.js 14 (App Router), React 18, TypeScript and Tailwind CSS 3.

## Architecture

**Fully static, zero configuration.** Every section is rendered at build time from typed data files, so the page is plain HTML with very little client JavaScript. There is no backend, no database, no domain requirement, no `.env` file and no secrets.

The contact form validates input in the browser and then opens the visitor's email app with a ready-to-send message addressed to you. Small client components handle the theme toggle, mobile menu, project dialog, form and scroll fade-in.

## Run locally

```bash
npm install
npm run dev                  # http://localhost:3000
```

## Build and run in production

```bash
npm run typecheck
npm run build
npm start
```

## Updating content

Everything is in `src/data/`: `profile.ts`, `skills.ts`, `experience.ts`, `projects.ts`, `achievements.ts`, `certifications.ts`, `education.ts`, `timeline.ts`.

- Project buttons: add `githubUrl` / `demoUrl` to a project and the buttons appear. Without them, they stay hidden.
- Project detail: add `result` and `futureImprovements` when you have real outcomes to report. They are hidden until set.
- Certifications: add `credentialUrl` only with a real verification link.
- Resume: replace `public/Manikandan_M_Resume.pdf` (keep the file name).
- Photo: replace `public/images/manikandan.webp` (square, about 800x800).

## Deploy to Vercel (free, no domain needed)

1. Push this folder to a GitHub repository.
2. In Vercel choose **Add New, Project**, import the repo and click **Deploy**. No settings or environment variables are required.
3. Vercel gives you a free address such as `your-project.vercel.app` with HTTPS.
4. Open `src/data/profile.ts`, set `siteUrl` to that address, commit, and it redeploys. This keeps the canonical URL, sitemap and social previews correct.

A custom domain is optional and can be added later under Project Settings, Domains.

## Security

- Strict security headers and a CSP in `next.config.mjs` (HSTS, frame denial, nosniff, referrer and permissions policies). The CSP allows inline scripts because Next.js needs them for hydration.
- No API routes, no secrets and no third-party scripts, so the attack surface is minimal.
- The contact form validates input, strips control characters before building the email link, and uses a honeypot field for bots.
- External links use `rel="noopener noreferrer"`.
- Run `npm audit` periodically and keep dependencies updated.

## Privacy note

The downloadable resume PDF contains your phone number and registration number. The website itself does not show your phone number. Use a version of the PDF without them if you do not want them public.
