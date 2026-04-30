// ============================================================
// Eri Ife's letters — written by the artist, curated manually.
// To add a new letter:
//   1. Add an entry to this array
//   2. Create the full text in src/app/pages/LetterDetail.tsx (or a CMS later)
// To remove an old letter: delete the entry from this array.
// ============================================================

import type { Letter } from './types';

export const letters: Letter[] = [
  {
    slug: 'on-writing-love-songs',
    title: 'On Writing Love Songs',
    category: 'Reflections',
    date: '2026-04-15',
    excerpt:
      'I used to think love songs had to be complicated. That they needed metaphors stacked on metaphors, hidden meanings, coded language. But the longer I write, the more I realize that simplicity holds more truth.',
    readTime: 4,
  },
  {
    slug: 'notes-from-the-studio',
    title: 'Notes from the Studio',
    category: 'Behind the Songs',
    date: '2026-04-01',
    excerpt:
      'We recorded Tender Hearts in a small room in Lagos, with afternoon light coming through the windows. There was something about the warmth of that space that shaped every note.',
    readTime: 3,
  },
  {
    slug: 'on-faith-and-softness',
    title: 'On Faith and Softness',
    category: 'Devotion',
    date: '2026-03-20',
    excerpt:
      'Softness is not weakness. This is something I keep coming back to—in my faith, in my music, in how I move through the world. Tenderness is an act of courage.',
    readTime: 5,
  },
  {
    slug: 'the-making-of-beloved',
    title: 'The Making of Beloved',
    category: 'Behind the Songs',
    date: '2026-02-14',
    excerpt:
      'This song started as a voice memo at 2am. I was thinking about the people we carry with us and the ones who shape us even when far away.',
    readTime: 3,
  },
];
