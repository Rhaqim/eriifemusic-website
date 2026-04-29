interface FanNoteCardProps {
  message: string;
  name: string;
  city?: string;
  date?: string;
  featured?: boolean;
}

export function FanNoteCard({ message, name, city, date, featured = false }: FanNoteCardProps) {
  return (
    <article className={`bg-warm-charcoal border border-border rounded p-6 ${
      featured ? 'md:col-span-2 lg:col-span-1' : ''
    }`}>
      <blockquote className="mb-4">
        <p className={`text-parchment/80 italic leading-relaxed ${
          featured ? 'text-lg' : 'text-base'
        }`}>
          "{message}"
        </p>
      </blockquote>

      <footer className="flex items-center justify-between">
        <div>
          <p className="font-['Crimson_Pro'] text-soft-ivory text-sm">
            {name}
          </p>
          {city && (
            <p className="text-xs text-parchment/50 mt-0.5">
              {city}
            </p>
          )}
        </div>

        {date && (
          <time className="text-xs text-parchment/40">
            {new Date(date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
          </time>
        )}
      </footer>
    </article>
  );
}
