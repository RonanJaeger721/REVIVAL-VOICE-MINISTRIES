# Revival Voice Ministries

Implemented Next.js App Router website with the five original supplied portraits, nine principal pages, privacy page, demonstration teaching detail routes and an event detail handler that returns 404 until confirmed event records exist.

Content is sourced from the client brief. No recordings, event dates, testimonials, credentials or social accounts were invented. The referenced Tony Robbins screenshot was not attached.

Interactions: responsive scroll-direction navigation, ministry foundation tabs, teaching carousel, search and category filters, SIIP information accordions, contextual WhatsApp links and a consent-based prayer message review/handoff.

Configuration: `NEXT_PUBLIC_SITE_URL` and optional `NEXT_PUBLIC_SIIP_GROUP_URL`. No database, email submission, admin or analytics is configured. No direct SIIP invitation was supplied. Official recordings, dated events, approved testimonies, logo and social URLs await client input.

QA and release evidence will be appended after validation.
`Design direction: reverent confidence through navy and restrained gold, editorial typography and authentic portraits. Considered portrait arch, typographic declaration and gallery hero; selected portrait arch for immediate leader recognition and mobile legibility. Signature interaction links Word → Prayer → Revival to ministry destinations.`
QA: production build passed with two workers and webpack after a host memory limit affected Turbopack. Browser checked homepage overflow at 320, 360, 375, 390, 430, 768, 1024, 1366, 1440 and 1920; checked principal routes and teaching details. A shorter interaction run passed menu routing, foundation tabs, teaching search/filter/reset, consent-based prayer review and correct WhatsApp URL, unpublished event 404 and reduced motion with zero page errors. Original photos remain unaltered; next/image optimises delivery.
