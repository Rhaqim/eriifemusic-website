import { FanNoteCard } from './FanNoteCard';
import { FanNoteSubmission } from './FanNoteSubmission';

interface FanNote {
  id: string;
  message: string;
  name: string;
  city?: string;
  date?: string;
  featured?: boolean;
}

interface FanNotesSectionProps {
  notes?: FanNote[];
}

export function FanNotesSection({ notes = [] }: FanNotesSectionProps) {
  const hasNotes = notes.length > 0;

  return (
    <section className="py-24 bg-deep-espresso border-y border-border/30">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-['Crimson_Pro'] text-4xl md:text-5xl text-soft-ivory mb-4">
            Notes from Listeners
          </h2>
          <p className="text-lg text-parchment/70 max-w-2xl mx-auto">
            Words from the tender-hearted. Leave a note or read what others have shared.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <FanNoteSubmission />
          </div>

          <div>
            {hasNotes ? (
              <div className="space-y-6">
                <h3 className="font-['Crimson_Pro'] text-2xl text-soft-ivory mb-6">
                  Featured Notes
                </h3>
                <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                  {notes.slice(0, 6).map((note) => (
                    <FanNoteCard key={note.id} {...note} />
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-warm-charcoal border border-border rounded p-12 text-center">
                <p className="font-['Crimson_Pro'] text-xl text-parchment/60">
                  No notes featured yet — be the first to leave one.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
