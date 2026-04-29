import { Link, useLocation } from 'react-router';
import { Button } from './Button';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: '/music', label: 'Music' },
    { path: '/letters', label: 'Letters' },
    { path: '/about', label: 'About' },
    { path: '/live', label: 'Live' }
  ];

  const isActive = (path: string) => location.pathname.startsWith(path);

  return (
    <header className="sticky top-0 z-50 bg-deep-espresso/98 backdrop-blur-md border-b border-border">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="font-['Crimson_Pro'] text-2xl font-medium text-soft-ivory tracking-tight">
            Eri Ife
          </Link>

          <nav className="hidden md:flex items-center gap-9">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm tracking-wide transition-colors relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burnished-bronze focus-visible:rounded px-1 ${
                  isActive(link.path) ? 'text-burnished-bronze' : 'text-parchment/80 hover:text-burnished-bronze'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute -bottom-2 left-0 right-0 h-px bg-burnished-bronze"></span>
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button variant="primary" size="md">Listen Now</Button>
          </div>

          <button
            className="md:hidden p-2 text-parchment focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burnished-bronze rounded"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-warm-charcoal">
          <nav className="px-6 py-6 space-y-1">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-3 text-base ${
                  isActive(link.path) ? 'text-burnished-bronze' : 'text-parchment'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4">
              <Button variant="primary" size="md" className="w-full">Listen Now</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
