const images = [
	{ id: 312, alt: "Assortiment de viennoiseries dorées" },
	{ id: 1060, alt: "Pâtisseries fines disposées en vitrine" },
	{ id: 766, alt: "Pains de campagne sur une étagère en bois" },
	{ id: 425, alt: "Gros plan sur une croûte de pain croustillante" },
	{ id: 493, alt: "Tartes aux fruits de saison" },
	{ id: 211, alt: "Ambiance chaleureuse de la boulangerie" },
];

export function Gallery() {
	return (
		<section id="gallery" className="bg-background py-24 md:py-32">
			<div className="mx-auto max-w-6xl px-5 md:px-8">
				<div className="mx-auto max-w-2xl text-center">
					<p className="text-sm font-medium uppercase tracking-[0.25em] text-primary">
						Galerie
					</p>
					<h2 className="mt-4 font-heading text-4xl font-semibold leading-tight text-foreground md:text-5xl">
						Un avant-goût en images
					</h2>
				</div>

				<div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
					{images.map((img) => (
						<div
							key={img.id}
							className="group aspect-square overflow-hidden rounded-xl shadow-sm"
						>
							<img
								src={`/assets/${img.alt}.jpg`}
								alt={img.alt}
								className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
