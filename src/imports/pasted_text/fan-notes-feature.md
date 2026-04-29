Expand the homepage by adding a fan note feature that includes both:
1. a fan note submission module
2. a curated fan note display section on the homepage

Keep the existing Eri Ife visual direction: intimate, warm, journal-like, romantic, sincere, editorial, soft, and premium. This feature should feel like a collection of meaningful handwritten notes or letters from listeners, not a social media comments section.

Do not make it look like a chat feed, testimonial carousel from a SaaS website, or a generic comments widget.
Make it feel personal, literary, and emotionally resonant.
Keep it clean, simple, and developer-friendly.

SECTION CONCEPT

Add a homepage section titled something like:
- Let's be Pen Pals! 
- A Note for Eri
- Notes from Listeners
- From the Tender-Hearted

This section should allow visitors to submit a short message and also see selected approved notes displayed on the homepage.

STRUCTURE

Design this as a two-part or stacked section depending on breakpoint:

Desktop:
- one side for the submission form
- one side for selected fan notes display

Tablet / Mobile:
- stack the form above the displayed notes
- keep spacing generous and readable

FAN NOTE SUBMISSION MODULE

Create a warm, elegant submission area that feels like writing a short note or letter.

Include:
- section heading
- short invitation copy
- text area field in default empty state
- optional name field
- optional city/location field
- submit button

Use visible placeholder text.

Suggested placeholder text for the main message field:
“Write a note…”

or
“Write a note for Eri…”

Suggested placeholder text for name field:
“Your name”
Suggested placeholder text for city field:
“City (optional)”

Keep the form short and emotionally inviting.
This should feel like leaving a thoughtful note, not filling out a contact form.

Include supporting microcopy such as:
“Selected notes may be featured here.”
or
“Notes are reviewed before being shared.”

Design these form states:
- default empty state
- hover
- focus
- typing state
- success state
- error state
- submitted confirmation state

Success message tone should feel warm and human, for example:

“Thank you for writing in.”

DISPLAYED FAN NOTES MODULE

On the homepage, also show selected fan notes as part of the same section.

These should be clearly curated or approved notes, not unfiltered live submissions.
Design them as beautiful editorial note cards or paper fragments.

Each displayed note card should include:
- short fan message
- name
- optional city/location
- optional tiny date or label
- a very subtle visual cue that it is a selected note

Stylistic direction:
- think pinned note, printed card, journal fragment, stationery insert, or letter excerpt
- elegant and tactile
- warm and intimate
- not too decorative
- readable and spacious

Notes should feel like:
small treasures, soft testimonials, fragments of connection, or snippets from letters

LAYOUT OPTIONS FOR DISPLAYED NOTES

Design the notes display as one of the following:
- a 2–3 column editorial card grid
- a stacked note layout with varied card heights
- a horizontally scrollable row on mobile
- a subtle rotating featured-note module plus a few smaller notes underneath

Do not make it feel chaotic.
Do not use speech bubbles.
Do not use social avatars or profile-photo-heavy UI.

The section should feel curated, calm, and premium.

CONTENT / TONE

Use believable placeholder content for the displayed fan notes.
The writing should feel heartfelt, concise, and emotionally literate.

Example tone:
- “Your songs found me in a quiet season and stayed.”
- “This music feels like a letter I didn’t know I needed.”
- “Thank you for making softness feel strong.”
- “There is so much warmth in these songs.”
- “Your music sounds like honesty.”

Keep these short, tasteful, and credible.
Avoid cliché stan-culture language or overhyped fan language.

VISUAL STYLE

Make the submission and note display feel fully integrated into the site’s visual system.

Use:
- warm dark or rich editorial styling if the site has already moved darker
- subtle paper textures
- soft borders
- gentle contrast
- elegant typography
- refined spacing
- tactile card surfaces

The note cards should feel slightly collectible or archival.
The form should feel like writing on a beautiful card, not entering data into an app.

COMPONENTS TO CREATE

Add reusable components for:
- fan note section wrapper
- message text area
- name input
- city input
- submit button
- note card
- featured note card
- empty state
- success state
- moderation/review message
- mobile stacked version

Show all major states clearly.

CMS / CONTENT MODEL

Make this section CMS-friendly and realistic for implementation.

Create a CMS/content structure for Fan Notes with fields such as:
- message
- name
- city
- date
- approved / featured status

Design the homepage so only approved or featured notes are shown.
Do not imply that every submitted note goes live automatically.

Also design:
- empty state when there are no featured notes yet
- overflow state when there are many notes
- simple “Read more notes” or “View all notes” CTA if appropriate

EMPTY STATE

If no notes are available, show a graceful empty state such as:
“No notes featured yet — be the first to leave one.”

ACCESSIBILITY + BUILDABILITY

Keep this easy to build.
Use clean card patterns, simple form fields, and responsive layouts.
Ensure:
- accessible labels
- visible focus states
- readable contrast
- touch-friendly form controls
- no overly complex interactions

FINAL CREATIVE BALANCE

This feature should feel like an extension of Eri Ife’s world of letters, warmth, and intimacy.
It should deepen the emotional connection on the homepage.
It should feel human and memorable.
It should not feel like a comment section or a social feed.