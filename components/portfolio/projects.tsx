'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { FadeIn } from './fade-in'

const projects = [
  {
    name: 'Boulangerie du Marché',
    description: 'Site vitrine chaleureux avec horaires et carte des pains.',
    image: 'https://picsum.photos/seed/boulangerie/800/1000',
    href: '#',
  },
  {
    name: 'Atelier Fleurs & Sens',
    description: 'Présentation des compositions et prise de commande simple.',
    image: 'https://picsum.photos/seed/fleuriste/800/1000',
    href: '#',
  },
  {
    name: 'Café Le Petit Coin',
    description: 'Identité élégante, menu en ligne et réservation par mail.',
    image: 'https://picsum.photos/seed/cafe/800/1000',
    href: '#',
  },
]

export function Projects() {
  return (
    <section id="projets" className="mx-auto max-w-6xl px-6 py-24">
      <FadeIn>
        <h2 className="font-heading text-4xl font-light tracking-tight text-foreground sm:text-5xl">
          Mes réalisations
        </h2>
      </FadeIn>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {projects.map((project, i) => (
          <motion.a
            key={project.name}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-2xl border border-transparent p-3 transition-colors hover:border-border"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="overflow-hidden rounded-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.image || '/placeholder.svg'}
                alt={`Aperçu du site ${project.name}`}
                className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="px-1 pt-5">
              <h3 className="font-heading text-2xl font-medium text-foreground">
                {project.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-foreground">
                Voir le site
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
