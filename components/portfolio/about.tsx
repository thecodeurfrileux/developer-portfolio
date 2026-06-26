'use client'

import { FadeIn } from './fade-in'

const skills = ['HTML', 'CSS', 'JavaScript', 'Next.js', 'WordPress']

export function About() {
  return (
    <section id="apropos" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <FadeIn>
          <div className="overflow-hidden rounded-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/titouan-portrait.png"
              alt="Portrait de Titouan Laurent"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <h2 className="font-heading text-4xl font-light tracking-tight text-foreground sm:text-5xl">
            À propos
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Je m’appelle Titouan. Avant de coder, j’ai passé plusieurs années
              dans l’hôtellerie et le service client, à l’écoute des gens et de
              leurs besoins. C’est là que j’ai appris ce qui compte vraiment :
              la confiance, le soin du détail et une vraie relation humaine.
            </p>
            <p>
              Aujourd’hui, je mets cette sensibilité au service des commerçants
              de proximité. Je comprends leur quotidien, leurs contraintes et
              leur fierté du travail bien fait — et je crée des sites simples,
              élégants et efficaces qui leur ressemblent.
            </p>
          </div>

          <ul className="mt-8 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-border bg-card px-4 py-1.5 text-sm text-foreground"
              >
                {skill}
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  )
}
