# Component Inventory

Complete reference for all reusable components in the Eri Ife website.

---

## Button

**Path**: `src/app/components/Button.tsx`

### Props

```typescript
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  size?: 'md' | 'lg'
}
```

### Variants

**Primary** (Oxblood CTA)
```tsx
<Button variant="primary" size="lg">
  Listen Now
</Button>
```

**Secondary** (Transparent with border)
```tsx
<Button variant="secondary" size="md">
  Read More
</Button>
```

### States
- ✅ Hover
- ✅ Focus-visible
- ✅ Disabled
- ✅ Loading (pass disabled prop)

### Example with Icon
```tsx
import { Play } from 'lucide-react'

<Button variant="primary" size="lg">
  <Play size={20} fill="currentColor" />
  Play Now
</Button>
```

---

## Header

**Path**: `src/app/components/Header.tsx`

### Features
- Sticky positioning
- Backdrop blur effect
- Active route indicator
- Mobile menu toggle
- Responsive navigation

### Props
None (uses React Router's `useLocation`)

### Usage
```tsx
import { Header } from './components/Header'

function App() {
  return (
    <>
      <Header />
      {/* page content */}
    </>
  )
}
```

### States
- ✅ Active nav item (bronze underline)
- ✅ Hover on links
- ✅ Focus-visible on nav links
- ✅ Mobile menu open/closed
- ✅ ARIA labels on menu toggle

---

## Footer

**Path**: `src/app/components/Footer.tsx`

### Features
- 3-column grid layout (responsive)
- Site links
- Contact emails
- Copyright notice

### Props
None (static content)

### Usage
```tsx
import { Footer } from './components/Footer'

<Footer />
```

---

## LetterCard

**Path**: `src/app/components/LetterCard.tsx`

### Props

```typescript
interface LetterCardProps {
  slug: string          // URL slug
  title: string         // Card heading
  category: string      // Category badge
  date: string          // ISO date string
  excerpt: string       // Preview text (3-line clamp)
  readTime: number      // Minutes to read
  featured?: boolean    // Optional full-width variant
}
```

### Usage

**Standard Card**
```tsx
<LetterCard
  slug="on-writing-love-songs"
  title="On Writing Love Songs"
  category="Reflections"
  date="2026-04-15"
  excerpt="I used to think love songs had to be complicated..."
  readTime={4}
/>
```

**Featured Card** (spans 2 columns)
```tsx
<LetterCard
  slug="the-making-of-beloved"
  title="The Making of Beloved"
  category="Behind the Songs"
  date="2026-02-14"
  excerpt="This song started as a voice memo at 2am..."
  readTime={3}
  featured={true}
/>
```

### States
- ✅ Hover (border + shadow change)
- ✅ Title color change on hover
- ✅ Featured variant (larger text, 2-col span)

### Grid Layout
```tsx
<div className="grid md:grid-cols-2 gap-6">
  {letters.map(letter => (
    <LetterCard key={letter.slug} {...letter} />
  ))}
</div>
```

---

## ReleaseCard

**Path**: `src/app/components/ReleaseCard.tsx`

### Props

```typescript
interface ReleaseCardProps {
  slug: string           // URL slug
  title: string          // Release name
  type: 'single' | 'EP' | 'album' | 'live'
  year: number           // Release year
  coverImage: string     // Artwork URL (currently gradient placeholder)
  description?: string   // Optional tagline
}
```

### Usage

```tsx
<ReleaseCard
  slug="tender-hearts"
  title="Tender Hearts"
  type="EP"
  year={2026}
  coverImage=""
  description="Five songs about love, memory, and finding softness."
/>
```

### States
- ✅ Hover (border, shadow, overlay fade-in)
- ✅ Title color change on hover

### Grid Layout
```tsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  {releases.map(release => (
    <ReleaseCard key={release.slug} {...release} />
  ))}
</div>
```

---

## ShowCard

**Path**: `src/app/components/ShowCard.tsx`

### Props

```typescript
interface ShowCardProps {
  date: string              // ISO date string
  city: string              // City name
  venue: string             // Venue name
  country?: string          // Optional country
  ticketUrl?: string        // Optional ticket link
  status?: 'upcoming' | 'sold-out'
}
```

### Usage

**Upcoming Show**
```tsx
<ShowCard
  date="2026-06-15"
  city="Lagos"
  venue="Terra Kulture"
  country="Nigeria"
  ticketUrl="https://tickets.example.com"
  status="upcoming"
/>
```

**Sold Out Show**
```tsx
<ShowCard
  date="2026-07-20"
  city="London"
  venue="The Jazz Café"
  country="UK"
  status="sold-out"
/>
```

### States
- ✅ Hover (border color change)
- ✅ Sold out badge (no CTA)
- ✅ Ticket CTA button

### Layout
```tsx
<div className="max-w-3xl space-y-4">
  {shows.map((show, index) => (
    <ShowCard key={index} {...show} />
  ))}
</div>
```

---

## NewsletterSignup

**Path**: `src/app/components/NewsletterSignup.tsx`

### Props

```typescript
interface NewsletterSignupProps {
  // No props (self-contained)
}
```

### Usage

```tsx
<NewsletterSignup />
```

### States
- ✅ Idle (form visible)
- ✅ Loading (disabled input, "Subscribing..." text)
- ✅ Success (confirmation message)
- ✅ Focus on input

### Internal State Management
```typescript
const [email, setEmail] = useState('')
const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
```

### Form Handling
Currently simulates submission with setTimeout. Replace with actual API call:

```typescript
const handleSubmit = async (e: FormEvent) => {
  e.preventDefault()
  setStatus('loading')
  
  try {
    await fetch('/api/newsletter', {
      method: 'POST',
      body: JSON.stringify({ email })
    })
    setStatus('success')
  } catch {
    setStatus('error')
  }
}
```

---

## StreamingLinks

**Path**: `src/app/components/StreamingLinks.tsx`

### Props

```typescript
interface StreamingLinksProps {
  className?: string    // Optional additional classes
}
```

### Usage

```tsx
<StreamingLinks />

// With custom spacing
<StreamingLinks className="mt-8" />
```

### Platforms
Currently hardcoded:
- Spotify
- Apple Music
- YouTube
- SoundCloud

### Making Dynamic
```typescript
interface StreamingLink {
  name: string
  url: string
  icon?: React.ReactNode
}

interface StreamingLinksProps {
  platforms: StreamingLink[]
  className?: string
}
```

### States
- ✅ Hover (border + text color change)

---

## FanNoteCard

**Path**: `src/app/components/FanNoteCard.tsx`

### Props

```typescript
interface FanNoteCardProps {
  message: string       // The fan's message
  name: string          // Fan's name
  city?: string         // Optional city/location
  date?: string         // Optional ISO date
  featured?: boolean    // Optional featured variant
}
```

### Usage

**Standard Note**
```tsx
<FanNoteCard
  message="Your songs found me in a quiet season and stayed."
  name="Adanna"
  city="Abuja"
  date="2026-04-20"
/>
```

**Featured Note**
```tsx
<FanNoteCard
  message="This music feels like a letter I didn't know I needed."
  name="Marcus"
  city="London"
  date="2026-04-18"
  featured={true}
/>
```

### Features
- Blockquote styling with italic text
- Author attribution with name and location
- Optional date display
- Featured variant for emphasis

### Design Notes
- Intimate, journal-like appearance
- Not social-media styled
- Feels like a handwritten note or letter fragment
- Clean and readable with generous spacing

---

## FanNoteSubmission

**Path**: `src/app/components/FanNoteSubmission.tsx`

### Props

```typescript
interface FanNoteSubmissionProps {
  // No props (self-contained)
}
```

### Usage

```tsx
<FanNoteSubmission />
```

### States
- ✅ Idle (form visible)
- ✅ Loading (disabled inputs, "Sending..." text)
- ✅ Success (confirmation message)
- ✅ Focus on all inputs
- ✅ Character counter (280 max)

### Form Fields
- **Message** (required): textarea with 280 character limit
- **Name** (required): text input
- **City** (optional): text input

### Internal State Management
```typescript
const [formData, setFormData] = useState({
  message: '',
  name: '',
  city: ''
})
const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
```

### Form Handling
Currently simulates submission with setTimeout. Replace with actual API call:

```typescript
const handleSubmit = async (e: FormEvent) => {
  e.preventDefault()
  setStatus('loading')
  
  try {
    await fetch('/api/fan-notes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    setStatus('success')
    setFormData({ message: '', name: '', city: '' })
  } catch {
    setStatus('error')
  }
}
```

### Design Notes
- Warm, inviting tone
- Feels like writing a note, not filling a form
- Clear microcopy about moderation
- Success message is brief and human

---

## FanNotesSection

**Path**: `src/app/components/FanNotesSection.tsx`

### Props

```typescript
interface FanNote {
  id: string
  message: string
  name: string
  city?: string
  date?: string
  featured?: boolean
}

interface FanNotesSectionProps {
  notes?: FanNote[]
}
```

### Usage

```tsx
const fanNotes = [
  {
    id: '1',
    message: 'Your songs found me in a quiet season and stayed.',
    name: 'Adanna',
    city: 'Abuja',
    date: '2026-04-20'
  },
  // ... more notes
]

<FanNotesSection notes={fanNotes} />
```

### Features
- Two-column layout on desktop (form | notes)
- Stacked layout on mobile (form above notes)
- Scrollable notes area with max height
- Shows up to 6 notes
- Empty state when no notes exist

### States
- ✅ With notes (displays featured notes)
- ✅ Empty state (invitation to be first)
- ✅ Loading states (via child components)

### Layout
```tsx
// Desktop: Side-by-side
<div className="grid lg:grid-cols-2 gap-12">
  <FanNoteSubmission />
  <FeaturedNotes />
</div>

// Mobile: Stacked
```

### Empty State
When `notes` array is empty or undefined:
```tsx
<div className="text-center">
  <p>No notes featured yet — be the first to leave one.</p>
</div>
```

### CMS Integration
```typescript
// Content model
collection: 'fan_notes'
fields: {
  id: string
  message: string (max 280)
  name: string
  city?: string
  date: timestamp
  status: 'pending' | 'approved' | 'rejected'
  featured: boolean
}

// Only show approved notes on homepage
const approvedNotes = notes.filter(note => note.status === 'approved')
```

### Design Notes
- Literary and intimate, not social-feed style
- Curated selection (not all submissions shown)
- Feels like a collection of treasured notes
- Clean, elegant, emotionally resonant

---

## Usage Patterns

### Page Layout Pattern

```tsx
export function PageName() {
  return (
    <div className="min-h-screen bg-deep-espresso">
      {/* Header Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <h1 className="font-['Crimson_Pro'] text-5xl md:text-6xl text-soft-ivory mb-4">
            Page Title
          </h1>
          <p className="text-xl text-parchment/80 max-w-2xl">
            Page description
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          {/* Content */}
        </div>
      </section>
    </div>
  )
}
```

### Alternating Background Pattern

```tsx
<section className="py-20 bg-deep-espresso">...</section>
<section className="py-24 bg-warm-charcoal">...</section>
<section className="py-20 bg-deep-espresso">...</section>
```

### Filter Pattern

```tsx
const [filter, setFilter] = useState<FilterType>('all')
const filteredItems = filter === 'all' 
  ? items 
  : items.filter(item => item.category === filter)

// Filter buttons
<div className="flex flex-wrap gap-2 mb-12">
  {filters.map(({ label, value }) => (
    <button
      key={value}
      onClick={() => setFilter(value)}
      className={`px-4 py-2 rounded text-sm transition-colors uppercase tracking-wider ${
        filter === value
          ? 'bg-oxblood text-soft-ivory'
          : 'bg-warm-charcoal text-parchment/70 hover:bg-cocoa-brown'
      }`}
    >
      {label}
    </button>
  ))}
</div>

// Grid with empty state
{filteredItems.length > 0 ? (
  <div className="grid md:grid-cols-2 gap-6">
    {filteredItems.map(item => <Card key={item.slug} {...item} />)}
  </div>
) : (
  <div className="text-center py-16">
    <p className="text-parchment/60">No items found.</p>
  </div>
)}
```

### Link Pattern (Internal)

```tsx
import { Link } from 'react-router'

<Link 
  to="/path" 
  className="text-burnished-bronze hover:text-soft-ivory transition-colors"
>
  View all →
</Link>
```

### Link Pattern (External)

```tsx
<a
  href="https://example.com"
  target="_blank"
  rel="noopener noreferrer"
  className="text-burnished-bronze hover:text-soft-ivory transition-colors"
>
  External Link
</a>
```

---

## Accessibility Checklist

When using components, ensure:

- [ ] All images have alt text
- [ ] All icon buttons have aria-label
- [ ] Form inputs have associated labels
- [ ] Interactive elements have focus states
- [ ] Color contrast meets WCAG AA
- [ ] Heading hierarchy is semantic (H1 → H2 → H3)
- [ ] Links describe their destination
- [ ] Buttons describe their action

---

## Component Combinations

### Hero Section
```tsx
<section className="relative py-24 md:py-40 overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-b from-warm-charcoal/40 via-transparent to-deep-espresso" />
  <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
    <div className="grid lg:grid-cols-2 gap-20 items-center">
      <div>
        <h1 className="font-['Crimson_Pro'] text-5xl md:text-7xl text-soft-ivory mb-6">
          {title}
        </h1>
        <p className="text-xl text-parchment/80 mb-10">{description}</p>
        <div className="flex gap-4">
          <Button variant="primary" size="lg">Primary CTA</Button>
          <Button variant="secondary" size="lg">Secondary CTA</Button>
        </div>
        <div className="mt-10">
          <StreamingLinks />
        </div>
      </div>
      <div className="aspect-[4/5] rounded bg-gradient-to-br from-cocoa-brown via-smoky-plum/50 to-oxblood/60 shadow-2xl" />
    </div>
  </div>
</section>
```

### Featured Content Section
```tsx
<section className="py-24 bg-warm-charcoal">
  <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
    <div className="flex items-end justify-between mb-12">
      <div>
        <h2 className="font-['Crimson_Pro'] text-4xl text-soft-ivory mb-2">
          Section Title
        </h2>
        <p className="text-parchment/70">Section description</p>
      </div>
      <Link to="/view-all" className="text-burnished-bronze hover:text-soft-ivory">
        View all →
      </Link>
    </div>
    
    <div className="grid md:grid-cols-2 gap-6">
      {items.map(item => <Card key={item.slug} {...item} />)}
    </div>
  </div>
</section>
```

### Newsletter Section
```tsx
<section className="py-24 bg-deep-espresso">
  <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
    <NewsletterSignup />
  </div>
</section>
```

---

## Testing Components

### Visual States to Test

For each component, verify:
1. **Default state** - Component renders correctly
2. **Hover state** - Interactive feedback works
3. **Focus state** - Keyboard navigation highlights element
4. **Active state** - Current/selected state is visible
5. **Disabled state** - Non-interactive appearance
6. **Loading state** - Processing indicator shown
7. **Error state** - Validation errors displayed
8. **Empty state** - No data message shown
9. **Mobile view** - Responsive layout works
10. **Dark mode** - Already dark, but check contrast

### Responsive Breakpoints

Test at:
- 390px (mobile)
- 834px (tablet)
- 1440px (desktop)

### Browser Testing

- Chrome/Edge (Chromium)
- Firefox
- Safari (webkit)

---

## Component Development Guidelines

1. **TypeScript**: All components must have prop interfaces
2. **Props First**: No hardcoded content
3. **Semantic HTML**: Use correct elements (button, nav, article, etc.)
4. **Accessibility**: Include ARIA labels where needed
5. **Focus States**: All interactive elements need focus-visible
6. **Transitions**: Use `transition-colors` or `transition-all`
7. **Spacing**: Use Tailwind spacing scale (gap-2, gap-4, etc.)
8. **Colors**: Use design tokens from theme.css
9. **Typography**: Crimson Pro for headings, Inter for body
10. **Consistency**: Follow existing component patterns

---

## Next Component Additions

Consider adding:

- **Modal/Dialog** - For video embeds, image galleries
- **Carousel** - For featured content rotation
- **AudioPlayer** - For song previews
- **ShareButtons** - For social sharing
- **Breadcrumbs** - For navigation context
- **Tabs** - For content organization
- **Accordion** - For FAQ sections
- **LoadingSpinner** - For async operations
- **Toast/Notification** - For user feedback
- **ImageGallery** - For press photos
