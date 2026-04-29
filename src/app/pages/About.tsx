import { Link } from 'react-router';
import { Button } from '../components/Button';

export function About() {
  return (
    <div className="min-h-screen bg-deep-espresso">
      <section className="py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-[4/5] rounded bg-gradient-to-br from-cocoa-brown via-smoky-plum/50 to-oxblood/60 shadow-2xl"></div>

            <div>
              <h1 className="font-['Crimson_Pro'] text-5xl md:text-6xl text-soft-ivory mb-6">
                About Eri
              </h1>
              <p className="text-xl text-parchment/80 leading-relaxed">
                A voice for the tender-hearted. Songs about love, faith, memory, and the quiet courage it takes to stay soft.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-warm-charcoal">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-6 text-lg text-parchment/80 leading-relaxed">
            <p>
              Eri Ife is a Nigerian singer-songwriter whose music feels like reading letters from a close friend—intimate, reflective, and achingly honest. Drawing from R&B, soul, and folk traditions, his songs explore love, faith, memory, and the tender parts of being human.
            </p>
            <p>
              Born and raised in Lagos, Eri grew up in a household where music was constant—gospel on Sunday mornings, Afrobeat in the evenings, and his mother's old soul records filling the quiet in between. He started writing songs as a teenager, using music as a way to process what he could not say out loud.
            </p>
            <p>
              After years of writing in private, he began sharing his work in 2023, releasing a series of singles and EPs that quickly resonated with listeners seeking something warmer, quieter, and more emotionally grounded. His music has been described as a softer place to return to and songs that feel like home.
            </p>
            <p>
              Today, Eri continues to write from Lagos, crafting songs that balance vulnerability with strength, romance with realism, and faith with honest questioning.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-deep-espresso">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-['Crimson_Pro'] text-3xl md:text-4xl text-soft-ivory mb-10 leading-relaxed">
              I write songs for people who feel deeply and love quietly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/music">
                <Button variant="primary" size="lg">Listen to the Music</Button>
              </Link>
              <Link to="/letters">
                <Button variant="secondary" size="lg">Read the Letters</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
