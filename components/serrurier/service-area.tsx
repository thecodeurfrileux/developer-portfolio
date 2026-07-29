import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { CITIES } from "@/lib/cities";
import { SectionHeading } from "@/components/serrurier/section-heading";

const AULNAY_QUARTIERS = [
	"Vieux Pays",
	"Les Étangs",
	"Émaüs",
	"Rose des Vents",
	"Gros Saule",
	"Balagny",
	"Nonneville",
	"Mitry",
];

export function ServiceArea() {
	return (
		<section id="zone" className="scroll-mt-20 bg-secondary/50 py-16 sm:py-20">
			<div className="mx-auto max-w-6xl px-4">
				<SectionHeading
					eyebrow="Zone d'intervention"
					title="Un serrurier proche de chez vous dans le 93"
					description="Basés à Aulnay-sous-Bois, nous couvrons tous les quartiers de la ville et les communes limitrophes de Seine-Saint-Denis."
				/>

				<div className="mt-12 grid gap-6 lg:grid-cols-2">
					<div className="rounded-xl border border-border bg-card p-6 sm:p-8">
						<h3 className="font-heading text-lg font-semibold text-foreground">
							Quartiers d&apos;Aulnay-sous-Bois
						</h3>
						<p className="mt-2 text-sm text-muted-foreground">
							Nous intervenons rapidement dans l&apos;ensemble des quartiers aulnaysiens.
						</p>
						<ul className="mt-5 flex flex-wrap gap-2">
							{AULNAY_QUARTIERS.map((q) => (
								<li
									key={q}
									className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-sm text-foreground"
								>
									<MapPin className="size-3.5 text-accent" aria-hidden="true" />
									{q}
								</li>
							))}
						</ul>
					</div>

					<div className="rounded-xl border border-border bg-card p-6 sm:p-8">
						<h3 className="font-heading text-lg font-semibold text-foreground">
							Communes desservies
						</h3>
						<p className="mt-2 text-sm text-muted-foreground">
							Consultez notre page dédiée à chaque ville pour en savoir plus.
						</p>
						<ul className="mt-5 grid gap-2 sm:grid-cols-2">
							{CITIES.map((c) => (
								<li key={c.slug}>
									<Link
										href={`/zone-intervention/${c.slug}`}
										className="group flex items-center justify-between rounded-lg border border-border bg-background px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent/40 hover:text-primary"
									>
										<span className="flex items-center gap-2">
											<MapPin className="size-4 text-accent" aria-hidden="true" />
											{c.name} ({c.postalCode})
										</span>
										<ArrowRight
											className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5"
											aria-hidden="true"
										/>
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>

				<div className="mt-8 text-center">
					<Link
						href="/zone-intervention"
						className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent"
					>
						Voir toute la zone d&apos;intervention
						<ArrowRight className="size-4" aria-hidden="true" />
					</Link>
				</div>
			</div>
		</section>
	);
}
