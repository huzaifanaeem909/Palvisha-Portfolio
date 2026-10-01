# Palvisha Agha — Portfolio

One-page portfolio for [Palvisha Agha](https://palvisha-agha.vercel.app), a professional content writer. The site covers services, selected work, experience, an FAQ, and a contact form.

## Stack

- [Next.js](https://nextjs.org) 16 (App Router) and React 19
- TypeScript
- Tailwind CSS 4
- [Motion](https://motion.dev) for section animation
- [next-themes](https://github.com/pacocoursey/next-themes) for light and dark mode
- [Resend](https://resend.com) and [Zod](https://zod.dev) for the contact form

## Getting started

Requires [pnpm](https://pnpm.io) 10.

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

The site renders without email credentials. The contact form returns an error until the Resend variables below are set.

## Environment

Copy `.env.example` to `.env.local`:

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Resend API key used to send contact messages |
| `RESEND_FROM_EMAIL` | Verified sender address |
| `CONTACT_TO_EMAIL` | Inbox that receives enquiries |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL for metadata, sitemap, and Open Graph |

## Scripts

| Command | What it does |
| --- | --- |
| `pnpm dev` | Start the development server |
| `pnpm build` | Production build |
| `pnpm start` | Serve the production build |
| `pnpm lint` | Run ESLint |
| `pnpm typecheck` | Run the TypeScript compiler |
| `pnpm test` | Run contact-form tests |

## Editing content

Site identity, SEO, navigation, and social links live in `src/data/site.ts`. Services, projects, experience, process steps, and FAQ answers live in `src/data/content.ts`.

Page sections are composed in `src/app/page.tsx`.
