# Eri Ife Website — Developer Handoff

## Design System Documentation

### Breakpoints

```css
Mobile:  390px (default)
Tablet:  834px (md)
Desktop: 1440px (lg)
Max Width: 1200px (content container)
```

### Grid System

- **Container**: `max-w-[1200px] mx-auto px-6 lg:px-8`
- **2-column**: `grid md:grid-cols-2 gap-6`
- **3-column**: `grid md:grid-cols-2 lg:grid-cols-3 gap-6`
- **Asymmetric**: `grid lg:grid-cols-2 gap-16` (hero sections)

### Spacing Scale

```css
xs:   2px   (gap-0.5)
sm:   4px   (gap-1)
md:   8px   (gap-2)
lg:   12px  (gap-3)
xl:   16px  (gap-4)
2xl:  24px  (gap-6)
3xl:  32px  (gap-8)
4xl:  48px  (gap-12)
5xl:  64px  (gap-16)
6xl:  80px  (gap-20)
7xl:  96px  (gap-24)
```

**Section Spacing**:
- Vertical padding: `py-20` (mobile), `py-24 md:py-28` (hero sections)
- Inter-section gap: `mt-24`, `mb-16`

### Color Tokens

```css
/* Background Colors */
--deep-espresso: #1F1715    /* Primary background */
--warm-charcoal: #2A211F    /* Secondary background, cards */
--cocoa-brown:   #3B2D29    /* Tertiary background, inputs */

/* Accent Colors */
--oxblood:         #6E3D3A  /* Primary CTA background */
--smoky-plum:      #5E4A57  /* Gradient accent */
--muted-olive:     #6F6C57  /* (unused reserve) */
--burnished-bronze: #B08B63 /* Links, highlights, active states */

/* Text Colors */
--soft-ivory:  #F5EDE3      /* Headings, primary text */
--parchment:   #E7DCCF      /* Body text, labels */

/* Border */
--border: rgba(231, 220, 207, 0.15)  /* Card borders, dividers */
```

**Usage Patterns**:
- Headings: `text-soft-ivory`
- Body text: `text-parchment/80` or `text-parchment/70`
- Muted text: `text-parchment/50`
- Links: `text-burnished-bronze hover:text-soft-ivory`
- Active states: `text-burnished-bronze`
- Card backgrounds: `bg-warm-charcoal`
- Page backgrounds: `bg-deep-espresso`

### Typography Scale

**Font Families**:
```css
Serif:     'Crimson Pro' (400, 500, 600)
Sans:      'Inter' (300, 400, 500)
```

**Type Scale**:
```css
/* Headings */
.text-6xl  /* 60px — Page titles (H1) */
.text-5xl  /* 48px — Section titles (H1 secondary) */
.text-4xl  /* 36px — Subsection titles (H2) */
.text-3xl  /* 30px — Card titles (H2/H3) */
.text-2xl  /* 24px — Component headings (H3) */
.text-xl   /* 20px — Large body, intro text */

/* Body */
.text-lg   /* 18px — Article body, expanded text */
.text-base /* 16px — Default body */
.text-sm   /* 14px — Secondary text, labels */
.text-xs   /* 12px — Metadata, timestamps */
```

**Typography Rules**:
- All headings use `font-['Crimson_Pro']`
- Heading line-height: `leading-tight` (1.15)
- Body line-height: `leading-relaxed` (1.625)
- Letter spacing on headings: `-0.02em` (built into theme)
- Uppercase labels: `uppercase tracking-widest` (0.1em)
- Category tags: `uppercase tracking-wider` (0.05em)

### Component Library

#### 1. Button

**File**: `/src/app/components/Button.tsx`

**Variants**:
- `primary`: Oxblood background, soft ivory text
- `secondary`: Transparent with border, parchment text

**Sizes**:
- `md`: `px-7 py-3 text-sm`
- `lg`: `px-9 py-4 text-base`

**States**:
```tsx
// Hover
primary:   bg-oxblood hover:bg-[#7D4744] shadow-sm hover:shadow-md
secondary: border-border hover:border-burnished-bronze hover:bg-cocoa-brown

// Focus
focus:outline-none focus:ring-2 focus:ring-burnished-bronze

// Disabled
disabled:opacity-50 disabled:cursor-not-allowed
```

**Usage**:
```tsx
<Button variant="primary" size="lg">Listen Now</Button>
<Button variant="secondary" size="md">Read More</Button>
```

---

#### 2. Header

**File**: `/src/app/components/Header.tsx`

**Features**:
- Sticky positioning: `sticky top-0 z-50`
- Backdrop blur: `backdrop-blur-md`
- Mobile menu toggle
- Active state indicators

**States**:
```tsx
// Active nav item
text-burnished-bronze with bottom border

// Hover
text-parchment/80 hover:text-burnished-bronze

// Mobile menu
Slide-in from top with border-t
```

---

#### 3. Footer

**File**: `/src/app/components/Footer.tsx`

**Layout**:
- 3-column grid on desktop
- Stacked on mobile
- Links in second column
- Contact info in third column

---

#### 4. LetterCard

**File**: `/src/app/components/LetterCard.tsx`

**Structure**:
- Category badge + read time
- Title (Crimson Pro)
- Excerpt (3-line clamp)
- Timestamp

**States**:
```tsx
// Hover
border-border hover:border-burnished-bronze/50
shadow-sm hover:shadow-lg
group-hover:text-burnished-bronze (title)

// Featured variant
featured ? 'md:col-span-2 text-3xl' : 'text-2xl'
```

**CMS Fields**:
```typescript
{
  slug: string         // URL slug
  title: string        // Heading
  category: string     // Badge label
  date: string         // ISO date
  excerpt: string      // Preview text (line-clamp-3)
  readTime: number     // In minutes
  featured?: boolean   // Optional full-width
}
```

---

#### 5. ReleaseCard

**File**: `/src/app/components/ReleaseCard.tsx`

**Structure**:
- Square artwork area (gradient placeholder)
- Type + year metadata
- Title (Crimson Pro)
- Optional description

**States**:
```tsx
// Hover
border-border hover:border-burnished-bronze/50
shadow-sm hover:shadow-lg
group-hover:text-burnished-bronze (title)
opacity-0 group-hover:opacity-100 (overlay)
```

**CMS Fields**:
```typescript
{
  slug: string           // URL slug
  title: string          // Release name
  type: 'single' | 'EP' | 'album' | 'live'
  year: number           // Release year
  coverImage: string     // Artwork URL
  description?: string   // Optional tagline
}
```

---

#### 6. ShowCard

**File**: `/src/app/components/ShowCard.tsx`

**Structure**:
- Date badge (burnished bronze)
- Venue name (Crimson Pro)
- City + country
- CTA button or "Sold Out" badge

**States**:
```tsx
// Hover
hover:border-burnished-bronze/50

// Status variants
status === 'sold-out': Grey badge, no button
status === 'upcoming': Primary button
```

**CMS Fields**:
```typescript
{
  date: string              // ISO date
  city: string              // Location
  venue: string             // Venue name
  country?: string          // Optional country
  ticketUrl?: string        // Optional link
  status: 'upcoming' | 'sold-out'
}
```

---

#### 7. NewsletterSignup

**File**: `/src/app/components/NewsletterSignup.tsx`

**Structure**:
- Centered heading (Crimson Pro)
- Tagline
- Email input + submit button
- Disclaimer text

**States**:
```tsx
// Input focus
focus:outline-none focus:ring-2 focus:ring-burnished-bronze

// Success state
Replaces form with confirmation message

// Error state (add)
border-red-500 text-red-500
```

---

#### 8. StreamingLinks

**File**: `/src/app/components/StreamingLinks.tsx`

**Structure**:
- Flex wrap layout
- Platform name buttons

**States**:
```tsx
// Hover
border-border hover:border-burnished-bronze
text-parchment hover:text-burnished-bronze
```

**CMS Integration**:
```typescript
platforms: Array<{
  name: string
  url: string
  icon?: string  // Optional icon component
}>
```

---

#### 9. FanNoteCard

**File**: `/src/app/components/FanNoteCard.tsx`

**Structure**:
- Blockquote with italic text
- Name (Crimson Pro)
- Optional city
- Optional date badge

**CMS Fields**:
```typescript
{
  id: string
  message: string        // 280 char max
  name: string
  city?: string
  date?: string          // ISO date
  featured?: boolean
}
```

---

#### 10. FanNoteSubmission

**File**: `/src/app/components/FanNoteSubmission.tsx`

**Structure**:
- Heading + invitation copy
- Textarea (280 char limit with counter)
- Name input (required)
- City input (optional)
- Submit button
- Moderation disclaimer

**States**:
```tsx
// All inputs focus
focus:ring-2 focus:ring-burnished-bronze

// Loading state
disabled inputs, "Sending..." button text

// Success state
Confirmation message replaces form
```

---

#### 11. FanNotesSection

**File**: `/src/app/components/FanNotesSection.tsx`

**Structure**:
- Section heading + description
- 2-column layout (desktop): Form | Notes display
- Stacked layout (mobile): Form above notes
- Empty state when no notes
- Scrollable notes area (max 6 shown)

**CMS Integration**:
```typescript
collection: 'fan_notes'
fields: {
  id: string
  message: string
  name: string
  city?: string
  date: timestamp
  status: 'pending' | 'approved' | 'rejected'
  featured: boolean
}

// Only approved notes shown on homepage
displayedNotes = notes.filter(n => n.status === 'approved')
```

**Design Notes**:
- Intimate and literary, not social-feed style
- Shows curated selection only
- Feels like handwritten notes or letters
- Clean, elegant, emotionally resonant

---

### Page Templates

#### Home Page

**File**: `/src/app/pages/Home.tsx`

**Sections**:
1. Hero (gradient overlay, 2-col grid)
2. About note (warm-charcoal background)
3. Featured releases (3-col grid)
4. Featured letters (2-col grid)
5. Fan notes (submission form + featured notes display)
6. Upcoming shows (list)
7. Newsletter signup

**CMS Requirements**:
- Hero text (heading, subheading)
- About text (2 paragraphs)
- Featured releases (3 items)
- Featured letters (2 items)
- Fan notes (approved submissions, max 6 displayed)
- Show list (dynamic)

---

#### Music Page

**File**: `/src/app/pages/Music.tsx`

**Features**:
- Filter buttons (All, Albums, EPs, Singles)
- Grid of ReleaseCard components

**States**:
```tsx
// Active filter
bg-oxblood text-soft-ivory

// Inactive filter
bg-warm-charcoal hover:bg-cocoa-brown
```

**CMS Requirements**:
- Release collection (filterable by type)

---

#### Letters Page

**File**: `/src/app/pages/Letters.tsx`

**Features**:
- Filter buttons (All, Reflections, Behind the Songs, Devotion)
- Grid of LetterCard components
- Newsletter signup section

**CMS Requirements**:
- Letter collection (filterable by category)
- Categories list (dynamic)

---

#### Release Detail

**File**: `/src/app/pages/ReleaseDetail.tsx`

**Structure**:
- Back link
- 2-col grid: Artwork + metadata
- Tracklist (hover states on rows)
- Credits sidebar

**States**:
```tsx
// Track row hover
hover:bg-warm-charcoal
```

**CMS Fields**:
```typescript
{
  title: string
  type: string
  year: number
  coverImage: string
  description: string
  tracks: Array<{
    number: number
    title: string
    duration: string
  }>
  credits: string[]
}
```

---

#### Letter Detail

**File**: `/src/app/pages/LetterDetail.tsx`

**Structure**:
- Back link
- Article header (category, title, date)
- Long-form content
- Author signature
- Newsletter signup

**CMS Fields**:
```typescript
{
  title: string
  category: string
  date: string
  readTime: number
  content: string  // Rich text / Markdown
}
```

---

#### About Page

**File**: `/src/app/pages/About.tsx`

**Structure**:
- Hero: Image + heading
- Bio content (4 paragraphs, warm-charcoal bg)
- Quote + CTAs section

**CMS Requirements**:
- Hero image
- Bio paragraphs (4 fields)
- Pull quote text

---

#### Live Page

**File**: `/src/app/pages/Live.tsx`

**Structure**:
- Page header
- Show list (ShowCard components)
- Booking CTA card
- Newsletter signup

---

#### Press Page

**File**: `/src/app/pages/Press.tsx`

**Structure**:
- 2-col grid
- Artist bios (short, medium)
- Contact cards
- Contact form

**Form States**:
```tsx
// Input focus
focus:ring-2 focus:ring-burnished-bronze

// Success
Confirmation message replaces form

// Validation (add)
required inputs, email validation
```

---

#### 404 Page

**File**: `/src/app/pages/NotFound.tsx`

**Structure**:
- Centered layout
- Large "404" heading
- Message + CTAs

---

### Missing States to Implement

#### Global

```tsx
// Focus states for all interactive elements
focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burnished-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-deep-espresso

// Disabled states for buttons
disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-oxblood

// Loading states
<Button disabled>
  <Loader2 className="animate-spin" size={20} />
  Loading...
</Button>
```

#### Form Components

```tsx
// Error state
<input className="border-red-500 focus:ring-red-500" />
<p className="text-red-500 text-sm mt-1">Error message</p>

// Success state
<input className="border-green-500 focus:ring-green-500" />
<p className="text-green-500 text-sm mt-1">Success message</p>
```

#### Empty States

```tsx
// No shows available
<div className="text-center py-12">
  <p className="text-parchment/60">No upcoming shows at this time.</p>
</div>

// No filtered results
<div className="text-center py-12">
  <p className="text-parchment/60">No {filter} found.</p>
  <button onClick={() => setFilter('all')} className="text-burnished-bronze mt-2">
    View all
  </button>
</div>
```

---

### Animations & Transitions

```css
/* Default transitions */
transition-colors   /* 150ms color changes */
transition-all      /* 150ms all properties */

/* Hover elevations */
shadow-sm hover:shadow-lg

/* Backdrop blur */
backdrop-blur-md    /* Header */

/* Mobile menu */
Slide from top with border animation
```

---

### Accessibility Requirements

1. **Focus indicators**: All interactive elements need visible focus states
2. **ARIA labels**: Add to icon-only buttons
3. **Alt text**: Required for all images (including cover art)
4. **Semantic HTML**: Use proper heading hierarchy
5. **Keyboard navigation**: All interactions accessible via keyboard
6. **Color contrast**: All text meets WCAG AA (4.5:1 minimum)

---

### CMS Integration Map

**Content Collections**:

```typescript
// Releases
collection: 'releases'
fields: slug, title, type, year, coverImage, description, tracks[], credits[]

// Letters
collection: 'letters'
fields: slug, title, category, date, excerpt, content, readTime, featured

// Shows
collection: 'shows'
fields: date, city, venue, country, ticketUrl, status

// Fan Notes
collection: 'fan_notes'
fields: id, message, name, city, date, status ('pending' | 'approved' | 'rejected'), featured
note: Only approved notes displayed on homepage

// Site Settings
collection: 'settings'
fields: bio[], contacts[], socialLinks[], streamingPlatforms[]
```

**Dynamic Routes**:
- `/music/:slug` → ReleaseDetail
- `/letters/:slug` → LetterDetail

**Static Content**:
- Hero text (Home)
- About bio
- Press bios

---

### Development Notes

1. **React Router**: Uses data router pattern with `createBrowserRouter`
2. **Tailwind v4**: Uses CSS custom properties, no config file
3. **Font loading**: Google Fonts via `/src/styles/fonts.css`
4. **Type safety**: All components have TypeScript interfaces
5. **Component pattern**: Isolated, reusable, prop-driven
6. **No hardcoded content**: All text should be props or CMS-driven

---

### Browser Support

- Modern evergreen browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Flexbox required
- Backdrop filter support for header blur
- CSS custom properties required

---

### Performance Considerations

1. **Image optimization**: Use WebP with fallbacks
2. **Font loading**: Use `font-display: swap`
3. **Code splitting**: Route-based code splitting with React Router
4. **Lazy loading**: Images below fold
5. **Caching**: Static assets with long cache headers

---

### Deployment Checklist

- [ ] Replace gradient placeholders with actual artwork
- [ ] Connect to CMS/backend
- [ ] Add real streaming platform links
- [ ] Implement form submission endpoints
- [ ] Set up analytics
- [ ] Add SEO metadata
- [ ] Test all interactive states
- [ ] Verify responsive breakpoints
- [ ] Accessibility audit
- [ ] Performance audit
