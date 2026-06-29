'use client'

import { Reveal } from './motion-primitives'

const testimonials = [
  {
    quote:
      'Un bouquet reçu d’Atelier Bloom, c’est comme recevoir un poème. On n’ose presque pas le défaire.',
    name: 'Camille R.',
  },
  {
    quote:
      'Sophie a habillé notre mariage de fleurs vivantes et sauvages. Tout le monde en parle encore.',
    name: 'Léa & Antoine',
  },
  {
    quote:
      'Je passe chaque mardi matin. C’est devenu mon rituel, ma respiration au cœur de Pantin.',
    name: 'Mathilde D.',
  },
]

export function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="grid gap-12 md:grid-cols-3 md:gap-12">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.12} as="div">
            <figure className="text-center md:text-left">
              <blockquote className="font-serif text-xl font-light italic leading-relaxed text-pretty text-ink">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 text-xs uppercase tracking-[0.25em] text-stone">
                {t.name}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
