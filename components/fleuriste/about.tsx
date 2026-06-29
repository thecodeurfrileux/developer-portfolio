'use client'

import { Reveal } from './motion-primitives'

export function About() {
  return (
    <section id="about" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-[640px] text-center">
        <Reveal className="overflow-hidden rounded-md">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://picsum.photos/id/152/1280/720"
            alt="L'atelier baigné de lumière naturelle"
            className="aspect-[16/9] w-full object-cover"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-12 font-serif text-2xl font-light leading-[1.6] text-ink text-pretty sm:text-3xl">
            Chaque composition naît d&apos;un geste lent et d&apos;une attention
            sincère. Nous cueillons les saisons, nous écoutons les fleurs, et
            nous arrangeons le beau avec patience — pour que votre intérieur
            respire la douceur du jardin, toute l&apos;année.
          </p>
          <p className="mt-8 font-serif text-xl font-light italic text-stone">
            — Sophie, fondatrice
          </p>
        </Reveal>
      </div>
    </section>
  )
}
