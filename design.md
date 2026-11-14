# Colby K. Clark — Design

Web-only cinematic editorial personal site exploring education and innovative technology.

## Identity
Inter 400–800, pure black base, #0a0a0a surfaces, #015FFC blue, white text, #888 muted. Oversized tightly tracked display headings with tiny widely tracked uppercase labels. Sharp corners, hairline rules, expansive margins, images without card containers.

## Pages
Home: transparent header; full-height abstract SVG electric-blue orbital ribbon; enormous name and supplied mission; discovery cue; manifesto; grayscale portrait; three image-led exploration cards; contact teaser.
About: editorial narrative draft, pull quote, philosophy.
Experience: clean blue-node timeline without invented credentials.
Journal: cinematic featured story, searchable/filterable three-column grid, sticky resources sidebar. Articles: sticky TOC, full original draft body, sharing.
Contact: accessible validated form. Exploration detail pages: concept scope and related writing.

## Motion and accessibility
400ms transitions, IntersectionObserver reveals, subtle scroll parallax and pointer-reactive hero. Grayscale-to-color imagery. Mobile drawer, 3/2/1 responsive cards, reduced-motion support, visible keyboard focus, semantic landmarks.

## Content integrity
User supplied name and mission only. Remaining narrative and articles marked draft; portrait labeled stock placeholder. Experience does not fabricate career dates, institutions, or degrees. Projects labeled concepts. Unconfigured social profiles explained in a dialog.

## Architecture
React/Wouter frontend, shared styles.css, oRPC contact.submit, Drizzle contact_messages table. Contact records saved, not sent via email. No auth or payments.
