import { Breadcrumbs } from "@/components/serrurier/breadcrumbs";
import { CallButton, QuoteButton } from "@/components/serrurier/cta-buttons";

export function PageHero({
	title,
	subtitle,
	breadcrumbs,
	showCtas = true,
}: {
	title: string;
	subtitle?: string;
	breadcrumbs: { name: string; url: string }[];
	showCtas?: boolean;
}) {
	return (
		<section className="bg-primary text-primary-foreground">
			<div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
				<div className="[&_a]:text-primary-foreground/70 [&_a:hover]:text-accent [&_span]:text-primary-foreground [&_.text-muted-foreground]:text-primary-foreground/60">
					<Breadcrumbs items={breadcrumbs} />
				</div>
				<h1 className="mt-5 max-w-3xl font-heading text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
					{title}
				</h1>
				{subtitle && (
					<p className="mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/75 text-pretty sm:text-lg">
						{subtitle}
					</p>
				)}
				{showCtas && (
					<div className="mt-7 flex flex-col gap-3 sm:flex-row">
						<CallButton className="w-full sm:w-auto" />
						<QuoteButton className="w-full sm:w-auto" />
					</div>
				)}
			</div>
		</section>
	);
}
