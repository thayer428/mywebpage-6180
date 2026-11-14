 # Colby K. Clark — site handoff

## Pages
`/` Home · `/about` About · `/experience` Experience & Education · `/blog` Journal · `/blog/:slug` Articles · `/contact` Contact · `/work/:slug` Explorations.

## Stack and organization
Approved managed React 19 / Wouter / Vite frontend with Bun / Hono / oRPC API and Drizzle database. Routes replace separate HTML files. Shared styling: `packages/web/src/web/styles.css`. Page components: `packages/web/src/web/pages/`. Shared interactions and forms: `components/site.tsx`. Draft articles and concepts: `lib/content.ts`. Assets: `packages/web/public/images/`.

## Run
Install dependencies with `bun install`, configure the root `.env` from `.env.template`, apply the database schema with `bun run db:push`, and run `bun run dev`. Ports are managed by `__ports.cjs`. Use `bun run build` and `bun run lint` for verification. The archive excludes secrets, dependencies, and generated build output.

## Before publishing
- Replace the labeled stock portrait with Colby's actual portrait.
- Review the draft biography, values, six articles, and three exploration concepts.
- Add verified roles, institutions, degree details, and dates to the experience page.
- Configure the actual social profiles and newsletter destination in `SocialLinks`.
- Contact forms save records privately in `contact_messages`; they do not send email. Add email notifications and an authenticated inbox if needed.
- Add stronger spam/rate-limit protection before promoting the public contact form. The current form has validation and a honeypot.

## Verification
Production compilation and lint pass. Browser-tested desktop (1440px), tablet (768px), and mobile (390px): all routes, no horizontal overflow, blog category/search/empty state, mobile navigation, social dialog with Escape, article link copying, and contact submission. Database persistence was checked; automated test record removed.

## Images
Editorial stock imagery sourced from Unsplash search results (portrait, library, architecture, abstract light, ocean). These are placeholder editorial assets, not evidence of Colby's biography or client projects.