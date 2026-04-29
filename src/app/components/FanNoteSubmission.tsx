import { FormEvent, useState } from 'react';
import { Button } from './Button';

export function FanNoteSubmission() {
  const [formData, setFormData] = useState({
    message: '',
    name: '',
    city: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.message.trim()) return;

    setStatus('loading');

    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ message: '', name: '', city: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1000);
  };

  if (status === 'success') {
    return (
      <div className="bg-warm-charcoal border border-border rounded p-8 text-center">
        <p className="font-['Crimson_Pro'] text-2xl text-soft-ivory mb-3">
          Thank you for writing in.
        </p>
        <p className="text-sm text-parchment/70">
          Your note has been received and will be reviewed.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-warm-charcoal border border-border rounded p-8">
      <h3 className="font-['Crimson_Pro'] text-2xl md:text-3xl text-soft-ivory mb-3">
        A Note for Eri
      </h3>
      <p className="text-sm text-parchment/70 mb-6">
        Leave a short message. Selected notes may be featured here.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="message" className="sr-only">Your message</label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Write a note for Eri…"
            rows={5}
            className="w-full px-4 py-3 rounded bg-cocoa-brown border border-border text-soft-ivory placeholder:text-parchment/40 focus:outline-none focus:ring-2 focus:ring-burnished-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-warm-charcoal resize-none leading-relaxed disabled:opacity-50 disabled:cursor-not-allowed"
            required
            maxLength={280}
            disabled={status === 'loading'}
          />
          <p className="text-xs text-parchment/50 mt-2">
            {formData.message.length}/280 characters
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="sr-only">Your name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Your name"
              className="w-full px-4 py-3 rounded bg-cocoa-brown border border-border text-soft-ivory placeholder:text-parchment/40 focus:outline-none focus:ring-2 focus:ring-burnished-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-warm-charcoal disabled:opacity-50 disabled:cursor-not-allowed"
              required
              disabled={status === 'loading'}
            />
          </div>

          <div>
            <label htmlFor="city" className="sr-only">Your city</label>
            <input
              type="text"
              id="city"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              placeholder="City (optional)"
              className="w-full px-4 py-3 rounded bg-cocoa-brown border border-border text-soft-ivory placeholder:text-parchment/40 focus:outline-none focus:ring-2 focus:ring-burnished-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-warm-charcoal disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={status === 'loading'}
            />
          </div>
        </div>

        <div className="pt-2">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full sm:w-auto"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Sending…' : 'Send Note'}
          </Button>
        </div>

        <p className="text-xs text-parchment/50 italic">
          Notes are reviewed before being shared.
        </p>
      </form>
    </div>
  );
}
