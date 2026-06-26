'use client'

import { useState } from 'react'
import { FadeIn } from './fade-in'

export function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <section id="contact" className="mx-auto max-w-2xl px-6 py-24 text-center">
      <FadeIn>
        <h2 className="font-heading text-4xl font-light tracking-tight text-foreground sm:text-5xl">
          Un projet ? Parlons-en.
        </h2>
        <a
          href="mailto:titouan.laurent@exemple.fr"
          className="mt-6 inline-block font-heading text-2xl font-light text-gold transition-opacity hover:opacity-80 sm:text-3xl"
        >
          titouan.laurent@exemple.fr
        </a>
      </FadeIn>

      <FadeIn delay={0.15}>
        <form
          className="mt-10 flex flex-col gap-4 text-left"
          onSubmit={(e) => {
            e.preventDefault()
            setSent(true)
          }}
        >
          <input
            type="text"
            required
            placeholder="Votre nom"
            aria-label="Votre nom"
            className="rounded-xl border border-border bg-card px-5 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground/40"
          />
          <input
            type="email"
            required
            placeholder="Votre email"
            aria-label="Votre email"
            className="rounded-xl border border-border bg-card px-5 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground/40"
          />
          <textarea
            required
            rows={4}
            placeholder="Votre message"
            aria-label="Votre message"
            className="resize-none rounded-xl border border-border bg-card px-5 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground/40"
          />
          <button
            type="submit"
            className="mt-2 rounded-full bg-dark px-7 py-3 text-sm font-medium text-dark-foreground transition-opacity hover:opacity-90"
          >
            {sent ? 'Message envoyé — merci !' : 'Envoyer'}
          </button>
        </form>
      </FadeIn>
    </section>
  )
}
