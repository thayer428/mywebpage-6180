 # Build progress

- [x] User approved managed stack and detailed design direction.
- [x] Name and mission provided; remaining personal facts intentionally not fabricated.
- [x] App initialized and web/API references read.
- [x] Implement home, about, experience, journal, articles, contact, and project details.
- [x] Persist validated contact submissions in database; checked saved QA row and removed it.
- [x] Verify build/lint, desktop/tablet/mobile rendering, navigation, search, filters, forms, link copy, social dialog; no browser errors or horizontal overflow.
- [x] Deliver live website.

Remaining publication inputs: real portrait, approved bio/articles, career/education facts, actual social destinations. Email delivery not configured. Included SITE-NOTES.md and secret-free source archive for handoff.

## Browser-crash report
- User reported “a problem repeatedly occurred” on the Runable chat URL.
- Preview server responds HTTP 200; cannot reproduce the parent chat crash locally.
- Precautionary mitigation: bake original SVG hero into small WebP assets, remove live SVG blur and oversized mobile graphics layer; disable touch-device parallax/pointer effects and mobile backdrop/image filters.
- Build and lint pass. Desktop and high-density mobile Chromium route/scroll tests pass without errors. Mobile hero loads correct asset and has no transform/live SVG.
- Root cause not confirmed; need device/browser and whether whole chat or only website preview fails.

Scope: web only; packages/web. Shared design.md and styles.css. Database: contact_messages. API: contact.submit. No external email delivery or auth requested.