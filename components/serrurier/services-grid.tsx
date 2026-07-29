import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/services";
import { Icon } from "@/components/serrurier/icon";
import { SectionHeading } from "@/components/serrurier/section-heading";
import { Reveal } from "@/components/serrurier/reveal";

export function ServicesGrid() {
	return (
		<section id="services" className="scroll-mt-20 bg-background py-16 sm:py-20">
			<div className="mx-auto max-w-6xl px-4">
				<SectionHeading
					eyebrow="Nos prestations"
					title="Des services de serrurerie complets à Aulnay-sous-Bois"
					description="Dépannage d'urgence, installation et sécurisation : un artisan pour tous vos besoins, avec des fourchettes de prix annoncées à l'avance."
				/>

				<div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
					{SERVICES.map((service, i) => (
						<Reveal as="article" key={service.slug} delay={(i % 4) * 80}>
							<Link
								href={`/serrurerie/${service.slug}`}
								className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-md"
							>
								<span className="flex size-12 items-center justify-center rounded-lg bg-primary/8 text-primary transition-colors group-hover:bg-accent/15 group-hover:text-accent">
									<Icon name={service.icon} className="size-6" />
								</span>
								<h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
									{service.shortTitle}
								</h3>
								<p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
									{service.excerpt}
								</p>
								<div className="mt-4 flex items-center justify-between border-t border-border pt-4">
									<span className="text-sm font-semibold text-primary">
										dès {service.priceFrom} €
									</span>
									<span className="inline-flex items-center gap-1 text-sm font-medium text-accent">
										En savoir plus
										<ArrowRight
											className="size-4 transition-transform group-hover:translate-x-0.5"
											aria-hidden="true"
										/>
									</span>
								</div>
							</Link>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}
