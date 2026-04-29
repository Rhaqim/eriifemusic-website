import { useParams, Link } from 'react-router';
import { Button } from '../components/Button';
import { StreamingLinks } from '../components/StreamingLinks';
import { ArrowLeft, Play } from 'lucide-react';

export function ReleaseDetail() {
  const { slug } = useParams();

  const release = {
    title: 'Tender Hearts',
    type: 'EP',
    year: 2026,
    coverImage: '',
    description: 'Five songs about love, memory, and finding softness in the midst of everything. Written during a season of learning to hold tenderness and strength at the same time.',
    tracks: [
      { number: 1, title: 'Opening Prayer', duration: '2:34' },
      { number: 2, title: 'Tender Hearts', duration: '3:48' },
      { number: 3, title: 'Beloved', duration: '4:12' },
      { number: 4, title: 'Quiet Devotion', duration: '3:56' },
      { number: 5, title: 'Closing Words', duration: '3:02' }
    ],
    credits: [
      'Written and performed by Eri Ife',
      'Produced by Daniel Omolade',
      'Mixed by Sarah Chen',
      'Mastered by James Wright'
    ]
  };

  return (
    <div className="min-h-screen bg-deep-espresso">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-12">
        <Link to="/music" className="inline-flex items-center gap-2 text-parchment/70 hover:text-burnished-bronze transition-colors mb-8">
          <ArrowLeft size={20} />
          <span>Back to Music</span>
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="aspect-square rounded bg-gradient-to-br from-cocoa-brown via-smoky-plum/50 to-oxblood/60 shadow-2xl"></div>

          <div className="flex flex-col justify-center">
            <div className="text-xs uppercase tracking-widest text-burnished-bronze/70 mb-3">
              {release.type} • {release.year}
            </div>

            <h1 className="font-['Crimson_Pro'] text-5xl text-soft-ivory mb-6">
              {release.title}
            </h1>

            <p className="text-lg text-parchment/80 mb-8 leading-relaxed">
              {release.description}
            </p>

            <div className="space-y-4 mb-8">
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                <Play size={20} fill="currentColor" />
                Play Now
              </Button>
            </div>

            <StreamingLinks />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="font-['Crimson_Pro'] text-3xl text-soft-ivory mb-6">
              Tracklist
            </h2>
            <div className="space-y-1">
              {release.tracks.map(track => (
                <div
                  key={track.number}
                  className="flex items-center justify-between p-4 rounded hover:bg-warm-charcoal transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-parchment/50 w-6">{track.number}</span>
                    <span className="text-soft-ivory">{track.title}</span>
                  </div>
                  <span className="text-sm text-parchment/50">{track.duration}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-['Crimson_Pro'] text-2xl text-soft-ivory mb-4">
              Credits
            </h3>
            <ul className="space-y-2">
              {release.credits.map((credit, index) => (
                <li key={index} className="text-sm text-parchment/70">{credit}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
