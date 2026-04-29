import { useParams, Link } from 'react-router';
import { NewsletterSignup } from '../components/NewsletterSignup';
import { ArrowLeft } from 'lucide-react';

export function LetterDetail() {
  const { slug } = useParams();

  const letter = {
    title: 'On Writing Love Songs',
    category: 'Reflections',
    date: '2026-04-15',
    readTime: 4
  };

  const formattedDate = new Date(letter.date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

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
              <p>
                I used to think love songs had to be complicated. That they needed metaphors stacked on metaphors, hidden meanings, coded language. But the longer I write, the more I realize that simplicity holds more truth.
              </p>

              <p>
                When I started making music, I was convinced that being obvious was the same as being shallow. I wanted every lyric to have layers, every melody to surprise. And sure, there is a place for that—mystery has its own kind of beauty. But I have learned that directness can be just as deep.
              </p>

              <p>
                I think about the love songs that have stayed with me over the years. They are rarely the ones with the cleverest wordplay or the most intricate production. They are the ones that feel like someone reached into my chest and put words to something I could not name myself.
              </p>

              <p>
                That is what I am after now. Not cleverness. Not complexity for its own sake. Just truth. The kind of honesty that makes you feel less alone.
              </p>

              <p>
                So when I write a love song these days, I try to get out of my own way. I ask myself: what am I really trying to say? And then I say it. Simply. Directly. Without apology.
              </p>

              <p>
                Because love—real love, the kind worth singing about—does not need to be dressed up. It just needs to be felt.
              </p>
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
