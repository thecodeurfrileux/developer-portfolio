'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { FadeIn } from './fade-in'

const services = [
  {
    name: 'Site vitrine essentiel',
    price: '500€',
    features: [
      'Une page élégante et responsive',
      'Coordonnées, horaires et plan',
      'Mise en ligne incluse',
    ],
  },
  {
    name: 'Site vitrine premium',
    price: '800€',
    features: [
      'Jusqu’à 5 pages sur mesure',
      'Galerie photos et formulaire de contact',
      'Optimisation référencement local',
    ],
  },
  {
    name: 'Maintenance mensuelle',
    price: '40€/mois',
    features: [
      'Mises à jour et sauvegardes',
      'Petites modifications de contenu',
      'Support par mail prioritaire',
    ],
  },
]

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-24">
      <FadeIn>
        <h2 className="font-heading text-4xl font-light tracking-tight text-foreground sm:text-5xl">
          Services
        </h2>
      </FadeIn>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {services.map((service, i) => (
          <motion.div
            key={service.name}
            className="flex flex-col rounded-2xl border border-border bg-card p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
          >
            <h3 className="font-heading text-2xl font-medium text-foreground">
              {service.name}
            </h3>
            <p className="mt-3 font-heading text-4xl font-light text-gold">
              {service.price}
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {service.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                >
                  <Check className="mt-0.5 size-4 shrink-0 text-gold" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
