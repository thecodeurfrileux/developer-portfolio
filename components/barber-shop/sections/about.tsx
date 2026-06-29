import { Reveal } from "@/components/barber-shop/reveal";

export function About() {
	return (
		<section id="about" className="border-t border-border py-20 md:py-28">
			<div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2 md:gap-16 md:px-6">
				<Reveal className="relative">
					<div className="overflow-hidden rounded-sm">
						<img
							src="/assets/coiffeur.jpg"
							alt="L'équipe au travail chez Barber 93"
							className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
						/>
					</div>
					<div className="absolute -bottom-4 -right-4 hidden rounded-sm bg-primary px-6 py-4 text-primary-foreground sm:block">
						<p className="font-heading text-4xl leading-none">+10 ans</p>
						<p className="text-xs font-medium uppercase tracking-wider">dans le quartier</p>
					</div>
				</Reveal>

				<Reveal delay={120}>
					<p className="text-sm font-medium uppercase tracking-[0.25em] text-primary">
						Le shop
					</p>
					<h2 className="mt-3 font-heading text-5xl leading-none tracking-wide text-balance md:text-6xl">
						Né à Aulnay, fier du 93
					</h2>
					<div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
						<p>
							Posé au cœur d&apos;Aulnay-sous-Bois, Barber 93 c&apos;est plus qu&apos;un salon
							: c&apos;est le spot où on se pose, où on discute, et où on repart toujours
							frais. Ici, on connaît les têtes du quartier et on traite chaque client comme un
							habitué.
						</p>
						<p>
							Du dégradé propre à la barbe taillée au cordeau, on prend le temps de faire les
							choses bien. Pas de précipitation, pas de chichi — juste du travail soigné, une
							bonne ambiance et le respect du détail. Le style, chez nous, c&apos;est sérieux.
						</p>
					</div>
				</Reveal>
			</div>
		</section>
	);
}
