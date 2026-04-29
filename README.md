# Eri Ife Artist Website

A dark luxury editorial website for singer-songwriter Eri Ife, featuring music releases, journal entries, live shows, and newsletter signup.

## Tech Stack

- **React** 19 with TypeScript
- **React Router** 7 (data router pattern)
- **Tailwind CSS** v4
- **Vite** build tool
- **Google Fonts**: Crimson Pro (serif) + Inter (sans-serif)

## Project Structure

```
src/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── LetterCard.tsx
│   │   ├── ReleaseCard.tsx
│   │   ├── ShowCard.tsx
│   │   ├── NewsletterSignup.tsx
│   │   └── StreamingLinks.tsx
│   ├── pages/              # Route components
│   │   ├── Home.tsx
│   │   ├── Music.tsx
│   │   ├── ReleaseDetail.tsx
│   │   ├── Letters.tsx
│   │   ├── LetterDetail.tsx
│   │   ├── About.tsx
│   │   ├── Live.tsx
│   │   ├── Press.tsx
│   │   └── NotFound.tsx
│   ├── routes.tsx          # Router configuration
│   └── App.tsx             # App entry point
├── styles/
│   ├── theme.css           # Design tokens & base styles
│   ├── fonts.css           # Font imports
│   └── index.css           # Global styles
└── main.tsx                # React entry point
```

## Design System

See **[DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)** for complete documentation of:
- Color tokens
- Typography scale
- Spacing system
- Component API
- Breakpoints
- CMS integration guide

## Getting Started

### Prerequisites
- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Key Features

### Design
- Dark luxury aesthetic with warm midnight tones
- Responsive across mobile (390px), tablet (834px), desktop (1440px)
- Premium typography with Crimson Pro serif
- Burnished bronze accent color for interactive elements
- Subtle gradients and shadows for depth

### Components
- Fully accessible with ARIA labels and focus states
- Loading, error, and empty states implemented
- Keyboard navigation support
- Hover and active state transitions

### Pages
- **Home**: Hero with featured releases, letters, and shows
- **Music**: Filterable discography grid
- **Letters**: Filterable journal entries with newsletter signup
- **About**: Artist bio with photo
- **Live**: Upcoming shows list with booking CTA
- **Press**: Contact info, bios, and contact form
- **404**: Custom not found page

## CMS Integration

The site is designed for headless CMS integration. All content is componentized and prop-driven:

- **Releases**: slug, title, type, year, coverImage, description, tracks, credits
- **Letters**: slug, title, category, date, excerpt, content, readTime
- **Shows**: date, city, venue, country, ticketUrl, status

See `DESIGN_SYSTEM.md` → CMS Integration Map for full schema.

## Accessibility

- Semantic HTML structure
- WCAG AA color contrast (4.5:1 minimum)
- Focus-visible indicators on all interactive elements
- ARIA labels for icon-only buttons
- Keyboard navigation support
- Alt text placeholders for images

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

Requires CSS Grid, Flexbox, custom properties, and backdrop-filter support.

## Performance

- Route-based code splitting
- Font display: swap for FOIT prevention
- Image lazy loading (to be implemented with real assets)
- CSS minification in production

## Development Notes

- All components are TypeScript with strict type checking
- Tailwind classes are production-ready (no custom config needed for v4)
- No hardcoded content—all text should be props or CMS-driven
- Color system uses CSS custom properties in theme.css

## Next Steps

- [ ] Replace gradient placeholders with actual artwork
- [ ] Connect to headless CMS or backend
- [ ] Implement actual streaming platform links
- [ ] Set up form submission endpoint for contact/newsletter
- [ ] Add SEO metadata (title, description, OG tags)
- [ ] Set up analytics
- [ ] Optimize images (WebP with fallbacks)
- [ ] Add sitemap.xml and robots.txt
- [ ] Run Lighthouse audit
- [ ] Test across devices and browsers

## License

All rights reserved © 2026 Eri Ife
