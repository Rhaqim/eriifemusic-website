import { Link } from 'react-router';

interface ReleaseCardProps {
  slug: string;
  title: string;
  type: 'single' | 'EP' | 'album' | 'live';
  year: number;
  coverImage: string;
  description?: string;
}

export function ReleaseCard({ slug, title, type, year, description }: ReleaseCardProps) {
  return (
    <Link to={`/music/${slug}`} className="group block">
      <div className="bg-warm-charcoal rounded overflow-hidden border border-border hover:border-burnished-bronze/50 transition-all shadow-sm hover:shadow-lg">
        <div className="aspect-square bg-gradient-to-br from-cocoa-brown via-smoky-plum/40 to-oxblood/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-warm-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3 text-xs text-burnished-bronze/70 uppercase tracking-widest">
            <span>{type}</span>
            <span className="text-burnished-bronze/40">•</span>
            <span>{year}</span>
          </div>
          <h3 className="font-['Crimson_Pro'] text-2xl text-soft-ivory mb-2 group-hover:text-burnished-bronze transition-colors">
            {title}
          </h3>
          {description && (
            <p className="text-sm text-parchment/60 line-clamp-2 leading-relaxed">{description}</p>
          )}
        </div>
      </div>
    </Link>
  );
}
