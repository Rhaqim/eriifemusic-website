import { Link } from 'react-router';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/30 mt-32 bg-warm-charcoal">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-16 mb-16">
          <div>
            <Link to="/" className="font-['Crimson_Pro'] text-2xl font-medium text-soft-ivory block mb-4">
              Eri Ife
            </Link>
            <p className="text-sm text-parchment/70 leading-relaxed">
              Songs written like letters. Warm music for open hearts.
            </p>
          </div>

          <nav className="space-y-3">
            <Link to="/music" className="block text-sm text-parchment/80 hover:text-burnished-bronze transition-colors">
              Music
            </Link>
            <Link to="/letters" className="block text-sm text-parchment/80 hover:text-burnished-bronze transition-colors">
              Letters
            </Link>
            <Link to="/about" className="block text-sm text-parchment/80 hover:text-burnished-bronze transition-colors">
              About
            </Link>
            <Link to="/live" className="block text-sm text-parchment/80 hover:text-burnished-bronze transition-colors">
              Live Shows
            </Link>
            <Link to="/press" className="block text-sm text-parchment/80 hover:text-burnished-bronze transition-colors">
              Press & Contact
            </Link>
          </nav>

          <div className="space-y-3">
            <p className="text-sm text-parchment/70">
              Booking: <a href="mailto:booking@eriife.com" className="text-burnished-bronze hover:text-soft-ivory transition-colors">booking@eriife.com</a>
            </p>
            <p className="text-sm text-parchment/70">
              Press: <a href="mailto:press@eriife.com" className="text-burnished-bronze hover:text-soft-ivory transition-colors">press@eriife.com</a>
            </p>
            <p className="text-sm text-parchment/70">
              General: <a href="mailto:hello@eriife.com" className="text-burnished-bronze hover:text-soft-ivory transition-colors">hello@eriife.com</a>
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-border/30 text-center md:text-left">
          <p className="text-xs text-parchment/50">
            © {currentYear} Eri Ife. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
