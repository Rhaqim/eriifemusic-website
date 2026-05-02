import { useParams, Link } from 'react-router';
import { NewsletterSignup } from '../components/NewsletterSignup';
import { ArrowLeft } from 'lucide-react';
import { letters } from '../../data/letters';

export function LetterDetail() {
  const { slug } = useParams();

  const letter = letters.find(l => l.slug === slug);

  if (!letter) {
    return (
      <div className="min-h-screen bg-deep-espresso flex items-center justify-center px-6">
        <div className="text-center">
          <p className="font-['Crimson_Pro'] text-5xl text-soft-ivory mb-4">404</p>
          <p className="text-parchment/60 mb-8">This letter doesn't exist.</p>
          <Link to="/letters" className="inline-flex items-center gap-2 text-burnished-bronze hover:text-soft-ivory transition-colors">
            <ArrowLeft size={18} />
            Back to Letters
          </Link>
        </div>
      </div>
    );
  }

  const formattedDate = new Date(letter.date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  // Split the text body (excerpt) into paragraphs, filtering blank lines
  const paragraphs = (letter.body ?? letter.excerpt)
    .split('\n')
    .map(line => line.trim())
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-deep-espresso">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-12">
        <Link to="/letters" className="inline-flex items-center gap-2 text-parchment/70 hover:text-burnished-bronze transition-colors mb-8">
          <ArrowLeft size={20} />
          <span>Back to Letters</span>
        </Link>

        <article className="max-w-3xl mx-auto">
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4 text-sm text-burnished-bronze/70">
              <span className="uppercase tracking-widest">{letter.category}</span>
              <span>•</span>
              <span>{letter.readTime} min read</span>
            </div>

            <h1 className="font-['Crimson_Pro'] text-5xl md:text-6xl text-soft-ivory mb-6">
              {letter.title}
            </h1>

            <time className="text-sm text-parchment/50">{formattedDate}</time>
          </header>

          <div className="prose max-w-none">
            <div className="text-lg text-parchment/80 space-y-6 leading-relaxed">
              {paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-border/30">
              <p className="font-['Crimson_Pro'] text-xl text-burnished-bronze italic">— Eri</p>
            </div>
          </div>
        </article>

        <section className="mt-24 max-w-2xl mx-auto">
          <NewsletterSignup />
        </section>
      </div>
    </div>
  );
}

