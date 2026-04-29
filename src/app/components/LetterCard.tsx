import { Link } from 'react-router';

interface LetterCardProps {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  readTime: number;
  featured?: boolean;
}

export function LetterCard({
  slug,
  title,
  category,
  date,
  excerpt,
  readTime,
  featured = false
}: LetterCardProps) {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <Link to={`/letters/${slug}`} className="group block">
      <article className={`bg-warm-charcoal rounded p-7 border border-border hover:border-burnished-bronze/50 transition-all shadow-sm hover:shadow-lg ${
        featured ? 'md:col-span-2' : ''
      }`}>
        <div className="flex items-center gap-3 mb-4 text-xs text-burnished-bronze/70">
          <span className="uppercase tracking-widest">{category}</span>
          <span className="text-burnished-bronze/40">•</span>
          <span>{readTime} min</span>
        </div>

        <h3 className={`font-['Crimson_Pro'] text-soft-ivory mb-4 group-hover:text-burnished-bronze transition-colors leading-tight ${
          featured ? 'text-3xl' : 'text-2xl'
        }`}>
          {title}
        </h3>

        <p className="text-sm text-parchment/70 line-clamp-3 mb-5 leading-relaxed">{excerpt}</p>

        <time className="text-xs text-parchment/50">{formattedDate}</time>
      </article>
    </Link>
  );
}
