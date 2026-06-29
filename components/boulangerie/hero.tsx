export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/id/431/1920/1280"
          alt="Pains et viennoiseries dorés sortant du four de la boulangerie"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-foreground/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-card/80">
          Boulangerie · Pâtisserie
        </p>
        <h1 className="font-heading text-balance text-5xl font-semibold leading-tight text-card sm:text-6xl md:text-7xl">
          Maison Lefèvre
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-pretty text-lg italic leading-relaxed text-card/90 md:text-xl">
          Fait maison, avec passion
        </p>
        <div className="mt-10">
          <a
            href="#products"
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-base font-medium text-primary-foreground shadow-lg transition-all hover:bg-accent hover:shadow-xl"
          >
            Découvrir nos créations
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-card/60 p-1.5">
          <span className="h-2 w-1 animate-bounce rounded-full bg-card/80" />
        </div>
      </div>
    </section>
  )
}
