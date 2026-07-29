import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { PageShell } from "@/components/serrurier/page-shell";
import { PageHero } from "@/components/serrurier/page-hero";
import { SectionHeading } from "@/components/serrurier/section-heading";
import { Reveal } from "@/components/serrurier/reveal";
import { ContactSection } from "@/components/serrurier/contact-section";
import { CITIES } from "@/lib/cities";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
	title: `Zone d'intervention — Serrurier ${SITE.address.city} et alentours`,
	description:
		"Découvrez les communes desservies par notre serrurier autour d'Aulnay-sous-Bois : Sevran, Villepinte, Le Blanc-Mesnil, Les Pavillons-sous-Bois, Vaujours, Tremblay-en-France.",
	alternates: { canonical: "/zone-intervention" },
};

export default function ZoneIndexPage() {
	const breadcrumbs = [
		{ name: "Accueil", url: "/" },
		{ name: "Zone d'intervention", url: "/zone-intervention" },
	];

	return (
		<PageShell>
			<PageHero
				title="Zone d'intervention de notre serrurier"
				subtitle="Basés à Aulnay-sous-Bois, nous intervenons rapidement dans toute la ville et les communes voisines de Seine-Saint-Denis."
				breadcrumbs={breadcrumbs}
			/>

			<section className="py-14 sm:py-20">
				<div className="mx-auto max-w-6xl px-4">
					<SectionHeading
						eyebrow="Communes desservies"
						title="Un serrurier local proche de chez vous"
						description="Sélectionnez votre commune pour découvrir nos interventions de proximité."
					/>
					<div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
						{CITIES.map((city, i) => (
							<Reveal as="article" key={city.slug} delay={(i % 3) * 80}>
								<Link
									href={`/zone-intervention/${city.slug}`}
									className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-md"
								>
									<span className="flex items-center gap-2 text-sm font-semibold text-accent">
										<MapPin className="size-4" aria-hidden="true" />
										{city.postalCode}
									</span>
									<h3 className="mt-3 font-heading text-lg font-semibold text-foreground">
										Serrurier {city.name}
									</h3>
									<p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
										{city.intro}
									</p>
									<span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
										Voir la page
										<ArrowRight
											className="size-4 transition-transform group-hover:translate-x-0.5"
											aria-hidden="true"
										/>
									</span>
								</Link>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			<ContactSection />
		</PageShell>
	);
}
