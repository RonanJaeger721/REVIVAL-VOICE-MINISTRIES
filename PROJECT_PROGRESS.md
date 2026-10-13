# Revival Voice Ministries

Implemented Next.js App Router website with the five original supplied portraits, nine principal pages, privacy page, demonstration teaching detail routes and an event detail handler that returns 404 until confirmed event records exist.

Content is sourced from the client brief. No recordings, event dates, testimonials, credentials or social accounts were invented. The referenced Tony Robbins screenshot was not attached.

Interactions: responsive scroll-direction navigation, ministry foundation tabs, teaching carousel, search and category filters, SIIP information accordions, contextual WhatsApp links and a consent-based prayer message review/handoff.

Configuration: `NEXT_PUBLIC_SITE_URL` and optional `NEXT_PUBLIC_SIIP_GROUP_URL`. No database, email submission, admin or analytics is configured. No direct SIIP invitation was supplied. Official recordings, dated events, approved testimonies, logo and social URLs await client input.

QA and release evidence will be appended after validation.
`Design direction: reverent confidence through navy and restrained gold, editorial typography and authentic portraits. Considered portrait arch, typographic declaration and gallery hero; selected portrait arch for immediate leader recognition and mobile legibility. Signature interaction links Word → Prayer → Revival to ministry destinations.`
QA: production build passed with two workers and webpack after a host memory limit affected Turbopack. Browser checked homepage overflow at 320, 360, 375, 390, 430, 768, 1024, 1366, 1440 and 1920; checked principal routes and teaching details. A shorter interaction run passed menu routing, foundation tabs, teaching search/filter/reset, consent-based prayer review and correct WhatsApp URL, unpublished event 404 and reduced motion with zero page errors. Original photos remain unaltered; next/image optimises delivery.

## S-tier 2.0 — local redesign

Scope: local preview only. Do not push/deploy until approved. Live release remains 447c17b.

Reference audit (13 October 2026): visually inspected Smartview, Home & Garden Pro, and Inner Living in Chrome at 1440 and 390 pixels. Smartview: floating glass navigation, clear CTA hierarchy, editorial sections. Home & Garden Pro: prominent original imagery, calm photographic hierarchy, chapter markers. Inner Living: original-photo sequence, catalogue category controls, layered content. Opened mobile menus; no horizontal overflow in reference openings. No claim of exhaustive reference interaction QA. Screenshots retained in workspace scratch files.

Concepts considered: full photographic stage with asymmetric mask; oversized manifesto with portrait details; cinematic portrait-gallery opening. Selected contained photographic stage for immediate ministry identification and effective use of the navy portrait. Brand emotion: reverent confidence. Manrope / Inter / Cormorant, navy / royal blue / ivory / restrained champagne.

Implemented: progress-linked hero scale/portrait/text motion, staggered text-mask entrance, curved chapter handoff, asymmetrical introduction and biography preview, six-pillar desktop index with keyboard and hover/click support, mobile expandable panels, six-chapter biography with bounded sticky photographic sequence and progress, original-photo gallery with modal navigation, SIIP manifesto and interactive three-step timeline, featured demonstration teaching, six functional category filters, related teaching links, different supporting-page openings, magnetic pointer feedback, route entrance, form validation and reviewed WhatsApp handoff. Uses existing native CSS/requestAnimationFrame motion strategy; no GSAP/WebGL required.

Missing authentic content remains explicitly identified. Events/testimonies retain editorial empty states. No fake recordings, calendar dates, programme schedules or direct group invitation. Future media fields are typed in the teaching content model.

QA results will be recorded after final checks.
QA: final production build/TypeScript passed. Browser checked 320, 360, 390, 430, 768, 1024, 1440 and 1920 widths with no homepage/SIIP overflow. All nine content routes and four teaching details returned 200, with one H1 and correct title; mobile page/footer overflow checks passed. Menu, mobile details, desktop index and arrow keys, SIIP enquiry/step reversal, biography down/up chapter progress, gallery previous/next/Escape, search/chip/select/reset filters, related links, prayer blank/consent errors and review URL, changed-request preview invalidation, hero down/up transforms, carousel arrows and reduced motion passed. Zero page errors. No WhatsApp message was sent; no browser storage used. Local preview only; no push or deployment.
Client refinement: removed em-dash separators from visible SIIP copy and metadata. Simplified portrait tile radii, with 12px mobile image corners and a restrained hero mask. No push/deployment authorised.
Typography refinement: adjusted headline scale/leading, balanced wraps, text-column sizing, tablet hero clearance, SIIP journey grid gaps, button label wrapping and mobile copy spacing. Preserves all content and interactions. Local only.
