import { WHY_US } from "@/lib/content";
import { Icon } from "@/components/serrurier/icon";
import { SectionHeading } from "@/components/serrurier/section-heading";
import { Reveal } from "@/components/serrurier/reveal";

export function WhyUs() {
	return (
		<section className="bg-secondary/50 py-16 sm:py-20">
			<div className="mx-auto max-w-6xl px-4">
				<SectionHeading
					eyebrow="Pourquoi nous choisir"
					title="Un artisan de confiance, sans mauvaise surprise"
					description="Nous privilégions la relation directe et la transparence. Voilà ce qui nous distingue."
				/>

				<div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
					{WHY_US.map((item, i) => (
						<Reveal key={item.title} delay={(i % 4) * 80}>
							<div className="flex h-full flex-col rounded-xl border border-border bg-card p-6">
								<span className="flex size-12 items-center justify-center rounded-lg bg-accent/15 text-accent">
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
	);
}
