import { FormEvent, useState } from 'react';
import { Button } from './Button';

export function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');

    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 5000);
    }, 1000);
  };

  if (status === 'success') {
    return (
      <div className="text-center py-8">
        <p className="text-lg text-burnished-bronze">Thank you for joining. Your first letter is on its way.</p>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto text-center">
      <h3 className="font-['Crimson_Pro'] text-3xl md:text-4xl text-soft-ivory mb-4">
        Join the Letters
      </h3>
      <p className="text-base text-parchment/80 mb-8">
        New music, journal entries, and show updates sent with care.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          className="flex-1 px-5 py-4 rounded bg-warm-charcoal border border-border text-soft-ivory placeholder:text-parchment/40 focus:outline-none focus:ring-2 focus:ring-burnished-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-deep-espresso disabled:opacity-50 disabled:cursor-not-allowed"
          required
          disabled={status === 'loading'}
        />
        <Button type="submit" variant="primary" size="lg" disabled={status === 'loading'}>
          {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
        </Button>
      </form>
      <p className="text-xs text-parchment/50 mt-4">
        Unsubscribe anytime. No spam.
      </p>
    </div>
  );
}
