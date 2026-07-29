import type { Faq } from "@/lib/content";
import { FaqAccordion } from "@/components/serrurier/faq-accordion";
import { FaqJsonLd } from "@/components/serrurier/structured-data";
import { SectionHeading } from "@/components/serrurier/section-heading";

export function FaqSection({
	items,
	title = "Questions fréquentes",
	description,
	eyebrow = "FAQ",
}: {
	items: Faq[];
	title?: string;
	description?: string;
	eyebrow?: string;
}) {
	return (
		<section id="faq" className="scroll-mt-20 bg-secondary/50 py-16 sm:py-20">
			<FaqJsonLd items={items} />
			<div className="mx-auto max-w-3xl px-4">
				<SectionHeading eyebrow={eyebrow} title={title} description={description} />
				<div className="mt-10">
					<FaqAccordion items={items} />
				</div>
			</div>
		</section>
	);
}
