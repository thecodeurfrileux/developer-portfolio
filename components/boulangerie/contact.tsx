"use client"

import { useState } from "react"
import { MapPin, Phone, Clock, Check } from "lucide-react"

export function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
    e.currentTarget.reset()
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-primary">
            Contact
          </p>
          <h2 className="mt-4 font-heading text-4xl font-semibold leading-tight text-foreground md:text-5xl">
            Venez nous rendre visite
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            Une question, une commande spéciale ? Écrivez-nous ou passez
            simplement nous dire bonjour.
          </p>
        </div>

        <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-16">
          {/* Infos */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                <MapPin className="size-5" />
              </span>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  Adresse
                </h3>
                <p className="mt-1 leading-relaxed text-muted-foreground">
                  12 rue des Boulangers
                  <br />
                  75004 Paris, France
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                <Phone className="size-5" />
              </span>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  Téléphone
                </h3>
                <p className="mt-1 leading-relaxed text-muted-foreground">
                  <a
                    href="tel:+33142000000"
                    className="transition-colors hover:text-primary"
                  >
                    +33 1 42 00 00 00
                  </a>
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                <Clock className="size-5" />
              </span>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  Horaires
                </h3>
                <ul className="mt-1 space-y-1 leading-relaxed text-muted-foreground">
                  <li className="flex justify-between gap-6">
                    <span>Mardi – Vendredi</span>
                    <span>7h00 – 19h30</span>
                  </li>
                  <li className="flex justify-between gap-6">
                    <span>Samedi – Dimanche</span>
                    <span>7h00 – 13h00</span>
                  </li>
                  <li className="flex justify-between gap-6">
                    <span>Lundi</span>
                    <span>Fermé</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl bg-card p-7 shadow-sm md:p-8"
          >
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Nom
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Votre nom"
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="vous@exemple.fr"
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Votre message…"
                  className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-accent"
              >
                {sent ? (
                  <>
                    <Check className="size-5" />
                    Message envoyé !
                  </>
                ) : (
                  "Envoyer le message"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
