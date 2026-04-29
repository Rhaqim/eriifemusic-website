import { useState, FormEvent } from 'react';
import { Button } from '../components/Button';

export function Press() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const bios = [
    {
      length: 'Short',
      text: 'Eri Ife is a Nigerian singer-songwriter whose music feels like reading letters from a close friend. Drawing from R&B, soul, and folk traditions, his songs explore love, faith, memory, and the tender parts of being human.'
    },
    {
      length: 'Medium',
      text: 'Eri Ife is a Nigerian singer-songwriter whose music feels like reading letters from a close friend—intimate, reflective, and achingly honest. Born and raised in Lagos, he began sharing his work in 2023, releasing a series of singles and EPs that quickly resonated with listeners seeking something warmer, quieter, and more emotionally grounded. His music has been described as "a softer place to return to" and "songs that feel like home."'
    }
  ];

  const contacts = [
    { title: 'Bookings', email: 'booking@eriife.com' },
    { title: 'Press', email: 'press@eriife.com' },
    { title: 'General', email: 'hello@eriife.com' }
  ];

  return (
    <div className="min-h-screen bg-deep-espresso">
      <section className="py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <h1 className="font-['Crimson_Pro'] text-5xl md:text-6xl text-soft-ivory mb-4">
            Press & Contact
          </h1>
          <p className="text-xl text-parchment/80">Press materials and contact information.</p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="font-['Crimson_Pro'] text-3xl text-soft-ivory mb-6">
                Artist Bios
              </h2>
              <div className="space-y-6">
                {bios.map((bio, index) => (
                  <div key={index} className="bg-warm-charcoal rounded p-6 border border-border">
                    <h3 className="font-['Crimson_Pro'] text-xl text-soft-ivory mb-3">
                      {bio.length}
                    </h3>
                    <p className="text-sm text-parchment/70 leading-relaxed">{bio.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-['Crimson_Pro'] text-3xl text-soft-ivory mb-6">
                Contact
              </h2>
              <div className="space-y-4 mb-12">
                {contacts.map((contact, index) => (
                  <div key={index} className="bg-warm-charcoal rounded p-6 border border-border">
                    <h3 className="font-['Crimson_Pro'] text-xl text-soft-ivory mb-2">
                      {contact.title}
                    </h3>
                    <a href={`mailto:${contact.email}`} className="text-burnished-bronze hover:text-soft-ivory transition-colors">
                      {contact.email}
                    </a>
                  </div>
                ))}
              </div>

              <div className="bg-warm-charcoal rounded p-8 border border-border">
                <h3 className="font-['Crimson_Pro'] text-2xl text-soft-ivory mb-6">
                  Send a Message
                </h3>

                {submitted ? (
                  <p className="text-parchment/80 text-center py-8">
                    Thank you for reaching out. We will get back to you soon.
                  </p>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm text-soft-ivory mb-2">Name</label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded bg-cocoa-brown border border-border text-soft-ivory placeholder:text-parchment/40 focus:outline-none focus:ring-2 focus:ring-burnished-bronze"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm text-soft-ivory mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded bg-cocoa-brown border border-border text-soft-ivory placeholder:text-parchment/40 focus:outline-none focus:ring-2 focus:ring-burnished-bronze"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm text-soft-ivory mb-2">Message</label>
                      <textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={5}
                        className="w-full px-4 py-3 rounded bg-cocoa-brown border border-border text-soft-ivory placeholder:text-parchment/40 focus:outline-none focus:ring-2 focus:ring-burnished-bronze resize-none"
                        required
                      />
                    </div>
                    <Button type="submit" variant="primary" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
