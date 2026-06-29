import { Reveal } from "@/components/barber-shop/reveal";

const SHOTS = [
	{ seed: "cut93a", label: "Dégradé net" },
	{ seed: "cut93b", label: "Taille de barbe" },
	{ seed: "cut93c", label: "Contours rasoir" },
	{ seed: "cut93d", label: "Ambiance du shop" },
	{ seed: "cut93e", label: "Coupe enfant" },
	{ seed: "cut93f", label: "Détail finition" },
];

export function Gallery() {
	return (
		<section id="gallery" className="border-t border-border py-20 md:py-28">
			<div className="mx-auto max-w-6xl px-4 md:px-6">
				<Reveal className="max-w-2xl">
					<p className="text-sm font-medium uppercase tracking-[0.25em] text-primary">
						Galerie
					</p>
					<h2 className="mt-3 font-heading text-5xl leading-none tracking-wide text-balance md:text-6xl">
						Le travail parle
					</h2>
				</Reveal>

				<div className="mt-12 grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3">
					{SHOTS.map((shot, i) => (
						<Reveal
							key={shot.seed}
							delay={(i % 3) * 80}
							className="group relative overflow-hidden rounded-sm"
						>
							<img
								src={`/assets/${shot.label}.jpg`}
								alt={shot.label}
								className="aspect-square w-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
							/>
							<div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
								<span className="p-3 text-xs font-medium uppercase tracking-wider text-foreground">
									{shot.label}
								</span>
							</div>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}
