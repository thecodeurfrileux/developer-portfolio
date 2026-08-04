import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PageShell } from "@/components/serrurier/page-shell";
import { PageHero } from "@/components/serrurier/page-hero";
import { SectionHeading } from "@/components/serrurier/section-heading";
import { Reveal } from "@/components/serrurier/reveal";
import { Icon } from "@/components/serrurier/icon";
import { FaqSection } from "@/components/serrurier/faq-section";
import { ContactSection } from "@/components/serrurier/contact-section";
import { CallButton, QuoteButtonLight } from "@/components/serrurier/cta-buttons";
import { ServiceJsonLd } from "@/components/serrurier/structured-data";
import { SERVICES, getService } from "@/lib/services";
import { SITE } from "@/lib/site";

export function generateStaticParams() {
	return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}): Promise<Metadata> {
	const { slug } = await params;
	const service = getService(slug);
	if (!service) return {};
	const title = `${service.shortTitle} à ${SITE.address.city}`;
	return {
		title,
		description: service.excerpt,
		alternates: { canonical: `/serrurerie/${service.slug}` },
		openGraph: {
			title,
			description: service.excerpt,
			url: `/serrurerie/${service.slug}`,
		},
	};
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const service = getService(slug);
	if (!service) notFound();

	const related = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);
	const breadcrumbs = [
		{ name: "Accueil", url: "/" },
		{ name: "Services", url: "/#services" },
		{ name: service.shortTitle, url: `/serrurerie/${service.slug}` },
	];

	return (
		<PageShell>
			<ServiceJsonLd
				name={service.title}
				description={service.excerpt}
				url={`${SITE.url}/serrurerie/${service.slug}`}
				priceFrom={service.priceFrom}
			/>

			<PageHero title={service.title} subtitle={service.intro} breadcrumbs={breadcrumbs} />

			{/* Content + sticky sidebar */}
			<section className="border-b border-border py-14 sm:py-20">
				<div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[1fr_340px]">
					<div className="max-w-2xl">
						<Reveal>
							<h2 className="font-heading text-2xl font-bold text-foreground text-balance">
								{service.shortTitle} à {SITE.address.city}
							</h2>
							{service.paragraphs.map((p, i) => (
								<p key={i} className="mt-4 leading-relaxed text-muted-foreground">
									{p}
								</p>
							))}
						</Reveal>

						<Reveal className="mt-10">
							<h3 className="font-heading text-xl font-bold text-foreground">
								Ce que comprend notre intervention
							</h3>
							<ul className="mt-5 grid gap-3 sm:grid-cols-2">
								{service.bullets.map((f) => (
									<li
										key={f}
										className="flex items-start gap-3 rounded-lg border border-border bg-card p-4"
									>
										<Check className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
										<span className="text-sm text-foreground">{f}</span>
									</li>
								))}
							</ul>
						</Reveal>
					</div>

					{/* Sidebar */}
					<aside className="lg:sticky lg:top-24 lg:self-start">
						<div className="rounded-2xl border border-border bg-primary p-6 text-primary-foreground">
							<p className="text-sm font-medium text-accent">Tarif indicatif</p>
							<p className="mt-2 font-heading text-2xl font-bold">
								{service.priceFrom} € – {service.priceTo} €
							</p>
							<p className="mt-1 text-sm text-primary-foreground/70">
								Tarif exact annoncé avant intervention
							</p>
							<div className="mt-5 flex flex-col gap-3">
								<CallButton className="w-full" label={`Appeler ${SITE.phoneDisplay}`} />
								<QuoteButtonLight className="w-full" />
							</div>
							<ul className="mt-6 space-y-2 border-t border-primary-foreground/15 pt-5 text-sm">
								<li className="flex items-center gap-2">
									<Icon name="Clock" className="size-4 text-accent" />
									Arrivée en 30 min en moyenne
								</li>
								<li className="flex items-center gap-2">
									<Icon name="ShieldCheck" className="size-4 text-accent" />
									Artisan certifié et assuré
								</li>
								<li className="flex items-center gap-2">
									<Icon name="FileCheck" className="size-4 text-accent" />
									Facture et garantie fournies
								</li>
							</ul>
						</div>
					</aside>
				</div>
			</section>

			{/* FAQ */}
			{service.faq.length > 0 && (
				<FaqSection
					items={service.faq}
					title={`Questions fréquentes — ${service.shortTitle}`}
					description={`Les réponses aux questions courantes sur ${service.shortTitle.toLowerCase()} à ${SITE.address.city}.`}
				/>
			)}

			{/* Related services */}
			<section className="border-b border-border py-14 sm:py-20">
				<div className="mx-auto max-w-6xl px-4">
					<SectionHeading
						eyebrow="Nos autres prestations"
						title="Voir aussi"
						centered={false}
					/>
					<div className="mt-8 grid gap-4 sm:grid-cols-3">
						{related.map((s) => (
							<Link
								key={s.slug}
								href={`/serrurerie/${s.slug}`}
								className="group flex items-center justify-between gap-3 rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent"
							>
								<div className="flex items-center gap-3">
									<Icon name={s.icon} className="size-6 text-accent" />
									<span className="font-medium text-foreground">{s.shortTitle}</span>
								</div>
								<ArrowRight
									className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1"
									aria-hidden="true"
								/>
							</Link>
						))}
					</div>
				</div>
			</section>

			<ContactSection />
		</PageShell>
	);
}
