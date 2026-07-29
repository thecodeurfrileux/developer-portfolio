import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { PageShell } from "@/components/serrurier/page-shell";
import { PageHero } from "@/components/serrurier/page-hero";
import { SectionHeading } from "@/components/serrurier/section-heading";
import { Reveal } from "@/components/serrurier/reveal";
import { Icon } from "@/components/serrurier/icon";
import { FaqSection } from "@/components/serrurier/faq-section";
import { ContactSection } from "@/components/serrurier/contact-section";
import { CITIES, getCity } from "@/lib/cities";
import { SERVICES } from "@/lib/services";
import { HOME_FAQ } from "@/lib/content";
import { SITE } from "@/lib/site";

export function generateStaticParams() {
	return CITIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}): Promise<Metadata> {
	const { slug } = await params;
	const city = getCity(slug);
	if (!city) return {};
	const title = `Serrurier ${city.name} (${city.postalCode}) — Dépannage urgence 24/7`;
	return {
		title,
		description: city.intro,
		alternates: { canonical: `/zone-intervention/${city.slug}` },
		openGraph: { title, description: city.intro, url: `/zone-intervention/${city.slug}` },
	};
}

export default async function CityPage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const city = getCity(slug);
	if (!city) notFound();

	const breadcrumbs = [
		{ name: "Accueil", url: "/" },
		{ name: "Zone d'intervention", url: "/zone-intervention" },
		{ name: city.name, url: `/zone-intervention/${city.slug}` },
	];

	return (
		<PageShell>
			<PageHero
				title={`Serrurier à ${city.name} (${city.postalCode})`}
				subtitle={city.intro}
				breadcrumbs={breadcrumbs}
			/>

			<section className="border-b border-border py-14 sm:py-20">
				<div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[1fr_320px]">
					<div className="max-w-2xl">
						<Reveal>
							<h2 className="font-heading text-2xl font-bold text-foreground text-balance">
								Votre serrurier de proximité à {city.name}
							</h2>
							{city.paragraphs.map((p, i) => (
								<p key={i} className="mt-4 leading-relaxed text-muted-foreground">
									{p}
								</p>
							))}
						</Reveal>
					</div>

					<aside className="lg:sticky lg:top-24 lg:self-start">
						<div className="rounded-2xl border border-border bg-primary p-6 text-primary-foreground">
							<p className="text-sm font-medium text-accent">Urgence 24h/24 — 7j/7</p>
							<p className="mt-2 font-heading text-xl font-bold">Intervention à {city.name}</p>
							<a
								href={`tel:${SITE.phoneHref}`}
								className="mt-5 flex h-13 w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
							>
								<Phone className="size-5" aria-hidden="true" />
								{SITE.phoneDisplay}
							</a>
						</div>
					</aside>
				</div>
			</section>

			{/* Services available in the city */}
			<section className="border-b border-border py-14 sm:py-20">
				<div className="mx-auto max-w-6xl px-4">
					<SectionHeading
						eyebrow="Nos prestations"
						title={`Nos services de serrurerie à ${city.name}`}
						description="Toutes nos interventions de dépannage, installation et sécurisation sont disponibles dans votre commune."
					/>
					<div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
						{SERVICES.map((s) => (
							<Link
								key={s.slug}
								href={`/serrurerie/${s.slug}`}
								className="group flex flex-col rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent"
							>
								<Icon name={s.icon} className="size-6 text-accent" />
								<span className="mt-3 font-medium text-foreground">{s.shortTitle}</span>
								<span className="mt-1 text-sm text-muted-foreground">dès {s.priceFrom} €</span>
								<span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary">
									En savoir plus
									<ArrowRight
										className="size-4 transition-transform group-hover:translate-x-0.5"
										aria-hidden="true"
									/>
								</span>
							</Link>
						))}
					</div>
				</div>
			</section>

			<FaqSection
				items={HOME_FAQ.slice(0, 5)}
				title={`Questions fréquentes — Serrurier ${city.name}`}
				description={`Nos réponses aux questions les plus courantes de nos clients à ${city.name}.`}
			/>

			<ContactSection />
		</PageShell>
	);
}
