'use client'

import { motion } from 'framer-motion'
import { Reveal } from './motion-primitives'

const collections = [
  {
    name: 'Bouquets',
    description: 'Des cueillettes de saison, nouées à la main chaque matin.',
    image: 'https://picsum.photos/id/152/800/1000',
  },
  {
    name: 'Art floral',
    description: 'Des compositions sculpturales pour vos événements.',
    image: 'https://picsum.photos/id/106/800/1000',
  },
  {
    name: 'Décoration',
    description: 'Vases, objets et matières choisis pour habiter la lumière.',
    image: 'https://picsum.photos/id/1080/800/1000',
  },
]

export function Collections() {
  return (
    <section id="collections" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <Reveal className="mb-14 text-center">
        <p className="text-xs font-light uppercase tracking-[0.3em] text-gold">
          Nos univers
        </p>
        <h2 className="mt-5 font-serif text-4xl font-light text-ink text-balance sm:text-5xl">
          Trois manières de fleurir le monde
        </h2>
      </Reveal>

      <div className="grid gap-10 md:grid-cols-3">
        {collections.map((item, i) => (
          <Reveal key={item.name} delay={i * 0.1}>
            <motion.article
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="cursor-pointer"
            >
              <div className="overflow-hidden rounded-md">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <h3 className="mt-6 font-serif text-2xl font-light text-ink">
                {item.name}
              </h3>
              <p className="mt-2 text-sm font-light leading-relaxed text-stone">
                {item.description}
              </p>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
