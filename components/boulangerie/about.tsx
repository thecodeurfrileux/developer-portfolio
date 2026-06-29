export function About() {
	return (
		<section id="about" className="bg-background py-24 md:py-32">
			<div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-8">
				{/* Photo */}
				<div className="relative order-last md:order-first">
					<div className="overflow-hidden rounded-2xl shadow-md">
						<img
							src="/assets/pain-artisanal.jpg"
							alt="Le boulanger façonnant la pâte à la main dans le fournil"
							className="h-full w-full object-cover"
						/>
					</div>
					<div className="absolute -bottom-6 -right-4 hidden rounded-xl bg-primary px-6 py-5 text-primary-foreground shadow-lg sm:block">
						<p className="font-heading text-3xl font-semibold leading-none">1987</p>
						<p className="mt-1 text-xs uppercase tracking-widest text-primary-foreground/80">
							Depuis trois générations
						</p>
					</div>
				</div>

				{/* Text */}
				<div>
					<p className="text-sm font-medium uppercase tracking-[0.25em] text-primary">
						Notre Maison
					</p>
					<h2 className="mt-4 font-heading text-4xl font-semibold leading-tight text-foreground md:text-5xl">
						L&apos;art du bon pain, transmis avec amour
					</h2>
					<div className="mt-6 space-y-5 text-pretty leading-relaxed text-muted-foreground">
						<p>
							Chez Maison Lefèvre, chaque journée commence avant l&apos;aube. Nous pétrissons
							nos pâtes à la main, sélectionnons des farines de meunier et laissons le temps
							faire son œuvre. Nos levains naturels donnent à nos pains ce goût authentique et
							cette croûte craquante qui font notre réputation.
						</p>
						<p>
							Fidèles aux gestes transmis de génération en génération, nous mettons un point
							d&apos;honneur à travailler des produits locaux et de saison. Chaque création qui
							sort de notre fournil raconte une histoire — celle d&apos;un savoir-faire
							artisanal et d&apos;une passion sincère pour le bon goût.
						</p>
					</div>
					<p className="mt-8 font-heading text-2xl italic text-foreground">
						« Le pain, c&apos;est notre signature. »
					</p>
				</div>
			</div>
		</section>
	);
}
