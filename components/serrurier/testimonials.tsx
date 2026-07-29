import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/content";
import { SITE } from "@/lib/site";
import { SectionHeading } from "@/components/serrurier/section-heading";
import { StarRating } from "@/components/serrurier/star-rating";
import { Reveal } from "@/components/serrurier/reveal";

export function Testimonials() {
	return (
		<section className="bg-background py-16 sm:py-20">
			<div className="mx-auto max-w-6xl px-4">
				<SectionHeading
					eyebrow="Avis clients"
					title="Ils nous ont fait confiance"
					description={`Note moyenne de ${SITE.rating.value}/5 sur ${SITE.rating.count} avis. (Avis illustratifs à remplacer par vos avis Google.)`}
				/>

				<div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
					{TESTIMONIALS.map((t, i) => (
						<Reveal as="article" key={t.name} delay={(i % 4) * 80}>
							<figure className="flex h-full flex-col rounded-xl border border-border bg-card p-6">
								<Quote className="size-7 text-accent/40" aria-hidden="true" />
								<StarRating value={t.rating} className="mt-3" size="sm" />
								<blockquote className="mt-3 flex-1 text-sm leading-relaxed text-foreground">
									{t.text}
								</blockquote>
								<figcaption className="mt-4 border-t border-border pt-4">
									<span className="block text-sm font-semibold text-foreground">{t.name}</span>
									<span className="block text-xs text-muted-foreground">{t.location}</span>
								</figcaption>
							</figure>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}
