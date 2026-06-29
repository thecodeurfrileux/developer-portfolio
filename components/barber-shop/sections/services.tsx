import { Reveal } from "@/components/barber-shop/reveal";
import { Scissors, Sparkles, Crown, Baby } from "lucide-react";

const SERVICES = [
	{
		icon: Scissors,
		name: "Coupe homme",
		price: "20 €",
		description:
			"Dégradé, ciseaux, contours nets. La coupe sur-mesure adaptée à ta tête et à ton style.",
	},
	{
		icon: Sparkles,
		name: "Barbe",
		price: "15 €",
		description:
			"Taille, contours au rasoir, serviette chaude et soin. Une barbe dessinée au millimètre.",
	},
	{
		icon: Crown,
		name: "Coupe + Barbe",
		price: "30 €",
		description:
			"Le combo signature : coupe précise et barbe parfaitement taillée. Frais des deux côtés.",
	},
	{
		icon: Baby,
		name: "Coupe enfant",
		price: "15 €",
		description: "Pour les plus jeunes (-12 ans). En douceur, en patience, et toujours stylé.",
	},
];

export function Services() {
	return (
		<section id="services" className="border-t border-border py-20 md:py-28">
			<div className="mx-auto max-w-6xl px-4 md:px-6">
				<Reveal className="max-w-2xl">
					<p className="text-sm font-medium uppercase tracking-[0.25em] text-primary">
						Prestations
					</p>
					<h2 className="mt-3 font-heading text-5xl leading-none tracking-wide text-balance md:text-6xl">
						Nos services
					</h2>
					<p className="mt-4 leading-relaxed text-muted-foreground">
						Des prix clairs, du travail propre. Pas de surprise au passage en caisse.
					</p>
				</Reveal>

				<div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
					{SERVICES.map((service, i) => (
						<Reveal
							key={service.name}
							delay={i * 90}
							className="group flex h-full flex-col rounded-sm border border-border bg-card p-6 transition-colors hover:border-primary"
						>
							<service.icon className="size-7 text-primary" aria-hidden="true" />
							<h3 className="mt-5 font-heading text-3xl leading-none tracking-wide">
								{service.name}
							</h3>
							<p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
								{service.description}
							</p>
							<p className="mt-6 font-heading text-4xl leading-none text-primary">
								{service.price}
							</p>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}
