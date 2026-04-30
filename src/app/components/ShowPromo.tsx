import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { X, Ticket, MapPin, Calendar, Clock } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { shows } from '../../data/content';

const DISMISSED_KEY = 'eriife-show-promo-dismissed';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function ShowPromo() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  // Find the first upcoming show
  const show = shows.find(s => s.status === 'upcoming');

  useEffect(() => {
    if (!show) return;
    // Show the widget after a short delay on first visit per session
    const dismissed = sessionStorage.getItem(DISMISSED_KEY);
    if (dismissed === show.id) return;
    const timer = setTimeout(() => {
      setVisible(true);
      setOpen(true);
    }, 1800);
    return () => clearTimeout(timer);
  }, [show]);

  if (!show || !visible) return null;

  const imagePath = `/assets/images/shows/${show.id}.jpg`;

  function dismiss() {
    sessionStorage.setItem(DISMISSED_KEY, show!.id);
    setVisible(false);
    setOpen(false);
  }

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-deep-espresso/70 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 pointer-events-none"
          >
            <div className="relative w-full max-w-lg rounded-xl overflow-hidden shadow-2xl pointer-events-auto bg-warm-charcoal border border-border">
              {/* Cover image */}
              <div className="relative aspect-[16/9] bg-gradient-to-br from-cocoa-brown via-smoky-plum/60 to-oxblood/70 overflow-hidden">
                <img
                  src={imagePath}
                  alt={`${show.venue} — ${show.city}`}
                  className="w-full h-full object-cover"
                  onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-warm-charcoal to-transparent" />
                {/* Close */}
                <button
                  onClick={dismiss}
                  aria-label="Close"
                  className="absolute top-3 right-3 p-1.5 rounded-full bg-deep-espresso/60 text-parchment/70 hover:text-soft-ivory hover:bg-deep-espresso transition-colors"
                >
                  <X size={16} />
                </button>
                {/* Upcoming badge */}
                <span className="absolute top-3 left-3 text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-oxblood/90 text-soft-ivory">
                  Upcoming Show
                </span>
              </div>

              {/* Details */}
              <div className="px-6 py-5">
                <h2 className="font-['Crimson_Pro'] text-2xl text-soft-ivory mb-1">
                  {show.title}
                </h2>
                <p className="text-sm text-parchment/50 mb-4">with Eri Ife</p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-parchment/70">
                    <MapPin size={14} className="text-burnished-bronze shrink-0" />
                    {show.venueMapUrl ? (
                      <a
                        href={show.venueMapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-burnished-bronze transition-colors underline underline-offset-2 decoration-dotted"
                      >
                        {show.venue}, {show.city}
                      </a>
                    ) : (
                      <span>{show.venue}, {show.city}</span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-parchment/70">
                    <Calendar size={14} className="text-burnished-bronze shrink-0" />
                    <span>{formatDate(show.date)}</span>
                  </div>
                  {(show.doorsTime || show.showTime) && (
                    <div className="flex items-center gap-2 text-sm text-parchment/70">
                      <Clock size={14} className="text-burnished-bronze shrink-0" />
                      <span>
                        {show.doorsTime && `Doors ${show.doorsTime}`}
                        {show.doorsTime && show.showTime && ' · '}
                        {show.showTime && `Show ${show.showTime}`}
                      </span>
                    </div>
                  )}
                  {show.priceRange && (
                    <div className="flex items-center gap-2 text-sm text-parchment/70">
                      <Ticket size={14} className="text-burnished-bronze shrink-0" />
                      <span>{show.priceRange}</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={show.ticketUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-5 py-3 rounded bg-oxblood text-soft-ivory hover:bg-[#7D4744] transition-colors font-medium text-sm"
                  >
                    Get Tickets
                  </a>
                  <Link
                    to="/live"
                    onClick={() => setOpen(false)}
                    className="px-5 py-3 rounded border border-border text-parchment/70 hover:border-burnished-bronze hover:text-burnished-bronze transition-colors text-sm"
                  >
                    All Shows
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating tab — visible when modal is closed */}
      <AnimatePresence>
        {!open && (
          <motion.button
            key="tab"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 80 }}
            transition={{ type: 'spring', stiffness: 280, damping: 24 }}
            onClick={() => setOpen(true)}
            aria-label="View upcoming show"
            className="fixed bottom-24 right-0 z-40 flex items-center gap-2 pr-4 pl-3 py-3 rounded-l-full bg-oxblood text-soft-ivory shadow-xl hover:bg-[#7D4744] transition-colors group"
          >
            {/* Pulsing dot */}
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-soft-ivory opacity-50" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-soft-ivory" />
            </span>
            <span className="text-xs font-medium uppercase tracking-wider whitespace-nowrap">
              Live in {show.city}
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
