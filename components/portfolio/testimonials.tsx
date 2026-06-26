'use client'

import { motion } from 'framer-motion'
import { FadeIn } from './fade-in'

const testimonials = [
  {
    quote:
      'Titouan a su capter l’esprit de ma boulangerie. Le site est beau, simple, et mes clients le retrouvent facilement.',
    name: 'Marc',
    role: 'gérant de boulangerie',
  },
  {
    quote:
      'Un vrai professionnel à l’écoute. Tout a été livré en une semaine, sans jargon ni mauvaise surprise.',
    name: 'Sophie',
    role: 'fleuriste',
  },
  {
    quote:
      'Grâce à mon nouveau site, j’ai eu plus de réservations dès le premier mois. Je recommande les yeux fermés.',
    name: 'Karim',
    role: 'gérant de café',
  },
]

export function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <FadeIn>
        <h2 className="font-heading text-4xl font-light tracking-tight text-foreground sm:text-5xl">
          Ils me font confiance
        </h2>
      </FadeIn>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.figure
            key={t.name}
            className="rounded-2xl border border-border bg-card p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <blockquote className="font-heading text-xl font-light italic leading-relaxed text-foreground">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-6 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">{t.name}</span>,{' '}
              {t.role}
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  )
}
