'use client'

import { Reveal } from './motion-primitives'

const ateliers = [
  {
    name: 'Bouquet de saison',
    date: 'Samedi 14 mars',
    duration: '2h',
    price: '75 €',
    description:
      'Apprenez à composer un bouquet champêtre, noué main, avec les fleurs cueillies cette semaine.',
  },
  {
    name: 'Couronne de fleurs séchées',
    date: 'Samedi 28 mars',
    duration: '2h30',
    price: '90 €',
    description:
      'Une couronne durable, mêlant graminées et fleurs séchées, à accrocher chez vous toute l’année.',
  },
]

export function Ateliers() {
  return (
    <section id="ateliers" className="bg-blush py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-14 text-center">
          <p className="text-xs font-light uppercase tracking-[0.3em] text-gold">
            Les ateliers
          </p>
          <h2 className="mt-5 font-serif text-4xl font-light text-ink text-balance sm:text-5xl">
            Mettez les mains dans les fleurs
          </h2>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2">
          {ateliers.map((atelier, i) => (
            <Reveal key={atelier.name} delay={i * 0.12}>
              <div className="flex h-full flex-col bg-background p-8 md:p-10">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-serif text-3xl font-light text-ink">
                    {atelier.name}
                  </h3>
                  <span className="font-serif text-2xl text-gold">
                    {atelier.price}
                  </span>
                </div>
                <p className="mt-4 text-sm font-light leading-relaxed text-stone">
                  {atelier.description}
                </p>
                <div className="mt-6 flex gap-4 text-xs uppercase tracking-[0.15em] text-stone">
                  <span>{atelier.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>Durée {atelier.duration}</span>
                </div>
                <a
                  href="#contact"
                  className="mt-8 inline-block self-start border border-ink px-8 py-3 text-xs font-light uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:bg-ink hover:text-background"
                >
                  Réserver ma place
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
