const products = [
	{
		title: "Pains",
		image: "/assets/baguette.jpg",
		description:
			"Baguettes de tradition, pains au levain et fougasses cuits sur sole. Une croûte dorée, une mie tendre et parfumée.",
	},
	{
		title: "Viennoiseries",
		image: "/assets/viennoiserie.jpg",
		description:
			"Croissants pur beurre, pains au chocolat et brioches feuilletées, façonnés chaque matin pour un plaisir feuilleté.",
	},
	{
		title: "Pâtisseries",
		image: "/assets/patisserie.jpg",
		description:
			"Tartes de saison, éclairs et entremets délicats. Des douceurs raffinées préparées avec les meilleurs ingrédients.",
	},
];

export function Products() {
	return (
		<section id="products" className="bg-secondary/40 py-24 md:py-32">
			<div className="mx-auto max-w-6xl px-5 md:px-8">
				<div className="mx-auto max-w-2xl text-center">
					<p className="text-sm font-medium uppercase tracking-[0.25em] text-primary">
						Nos créations
					</p>
					<h2 className="mt-4 font-heading text-4xl font-semibold leading-tight text-foreground md:text-5xl">
						Le meilleur de notre fournil
					</h2>
					<p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
						Trois familles de gourmandises, toutes préparées maison avec le même soin et la
						même exigence.
					</p>
				</div>

				<div className="mt-14 grid gap-8 md:grid-cols-3">
					{products.map((product) => (
						<article
							key={product.title}
							className="group overflow-hidden rounded-2xl bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
						>
							<div className="aspect-square overflow-hidden">
								<img
									src={product.image || "/placeholder.svg"}
									alt={`${product.title} de la Maison Lefèvre`}
									className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
								/>
							</div>
							<div className="p-7">
								<h3 className="font-heading text-2xl font-semibold text-foreground">
									{product.title}
								</h3>
								<p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
									{product.description}
								</p>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
