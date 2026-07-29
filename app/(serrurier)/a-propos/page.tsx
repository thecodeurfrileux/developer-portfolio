import type { Metadata } from "next";
import Image from "next/image";
import { PageShell } from "@/components/serrurier/page-shell";
import { PageHero } from "@/components/serrurier/page-hero";
import { SectionHeading } from "@/components/serrurier/section-heading";
import { Reveal } from "@/components/serrurier/reveal";
import { Icon } from "@/components/serrurier/icon";
import { ContactSection } from "@/components/serrurier/contact-section";
import { WHY_US } from "@/lib/content";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
	title: `À propos — Serrurier à ${SITE.address.city}`,
	description:
		"Artisan serrurier local à Aulnay-sous-Bois : proximité, transparence des tarifs et travail soigné, sans sous-traitance.",
	alternates: { canonical: "/a-propos" },
};

export default function AboutPage() {
	const breadcrumbs = [
		{ name: "Accueil", url: "/" },
		{ name: "À propos", url: "/a-propos" },
	];

	return (
		<PageShell>
			<PageHero
				title="Un artisan serrurier local à votre service"
				subtitle="Derrière chaque intervention, un professionnel de confiance basé à Aulnay-sous-Bois — jamais un centre d'appel."
				breadcrumbs={breadcrumbs}
			/>

			<section className="border-b border-border py-14 sm:py-20">
				<div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-2">
					<Reveal>
						<div className="relative aspect-4/5 overflow-hidden rounded-2xl border border-border shadow-lg">
							<Image
								src="assets/serrurier/artisan-portrait.png"
								alt="Portrait de notre artisan serrurier à Aulnay-sous-Bois devant son véhicule d'intervention"
								fill
								sizes="(max-width: 1024px) 100vw, 50vw"
								className="object-cover"
							/>
						</div>
					</Reveal>
					<Reveal delay={100}>
						<h2 className="font-heading text-2xl font-bold text-foreground text-balance sm:text-3xl">
							La serrurerie de proximité, faite avec sérieux
						</h2>
						<div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
							<p>
								{SITE.name} est un artisan serrurier installé à Aulnay-sous-Bois. Depuis nos
								débuts, nous mettons un point d&apos;honneur à offrir un service honnête :
								quand vous nous appelez, c&apos;est notre artisan qui vous répond et qui
								intervient, sans intermédiaire ni sous-traitance.
							</p>
							<p>
								Nous savons qu&apos;un problème de serrure arrive toujours au mauvais moment.
								C&apos;est pourquoi nous restons disponibles {SITE.hours} et intervenons le
								plus souvent en moins de trente minutes sur Aulnay-sous-Bois et ses environs.
							</p>
							<p>
								Notre priorité : la transparence. Le tarif vous est toujours annoncé avant
								l&apos;intervention, et nous privilégions systématiquement les solutions les
								moins coûteuses et non destructives.
							</p>
						</div>
					</Reveal>
				</div>
			</section>

			<section className="bg-secondary/50 py-14 sm:py-20">
				<div className="mx-auto max-w-6xl px-4">
					<SectionHeading eyebrow="Nos engagements" title="Pourquoi nous faire confiance" />
					<div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
						{WHY_US.map((item, i) => (
							<Reveal key={item.title} delay={(i % 4) * 80}>
								<div className="flex h-full flex-col rounded-xl border border-border bg-card p-6">
									<span className="flex size-12 items-center justify-center rounded-lg bg-primary/8 text-primary">
										<Icon name={item.icon} className="size-6" />
									</span>
									<h3 className="mt-4 font-heading text-base font-semibold text-foreground">
										{item.title}
									</h3>
									<p className="mt-2 text-sm leading-relaxed text-muted-foreground">
										{item.description}
									</p>
								</div>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			<ContactSection />
		</PageShell>
	);
}
