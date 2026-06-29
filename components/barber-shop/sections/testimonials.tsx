import { Reveal } from "@/components/barber-shop/reveal";
import { Star } from "lucide-react";

const REVIEWS = [
	{
		name: "Mehdi B.",
		initial: "M",
		text: "Meilleur barber d'Aulnay sans débat. Karim a compris ma coupe direct, dégradé propre et finitions au top. Je recommande les yeux fermés.",
	},
	{
		name: "Anthony L.",
		initial: "A",
		text: "Accueil au top, bonne ambiance et surtout du travail propre. La barbe taillée par Dylan était parfaite. Le rapport qualité-prix est imbattable.",
	},
	{
		name: "Sofiane K.",
		initial: "S",
		text: "J'emmène mon fils ici depuis des mois. Patients avec les enfants, propres, ponctuels. Un vrai barbershop de quartier comme on aime.",
	},
];

export function Testimonials() {
	return (
		<section id="testimonials" className="border-t border-border py-20 md:py-28">
			<div className="mx-auto max-w-6xl px-4 md:px-6">
				<Reveal className="max-w-2xl">
					<p className="text-sm font-medium uppercase tracking-[0.25em] text-primary">Avis</p>
					<h2 className="mt-3 font-heading text-5xl leading-none tracking-wide text-balance md:text-6xl">
						Ce qu&apos;ils en disent
					</h2>
				</Reveal>

				<div className="mt-12 grid gap-5 md:grid-cols-3">
					{REVIEWS.map((review, i) => (
						<Reveal
							key={review.name}
							delay={i * 100}
							className="flex h-full flex-col rounded-sm border border-border bg-card p-6"
						>
							<div className="flex gap-0.5 text-primary" aria-label="5 sur 5">
								{Array.from({ length: 5 }).map((_, s) => (
									<Star key={s} className="size-4 fill-current" aria-hidden="true" />
								))}
							</div>
							<p className="mt-4 flex-1 leading-relaxed text-muted-foreground">
								&ldquo;{review.text}&rdquo;
							</p>
							<div className="mt-6 flex items-center gap-3">
								<span className="flex size-10 items-center justify-center rounded-full bg-primary font-heading text-xl text-primary-foreground">
									{review.initial}
								</span>
								<div>
									<p className="text-sm font-semibold text-foreground">{review.name}</p>
									<p className="text-xs text-muted-foreground">Avis Google · Local Guide</p>
								</div>
							</div>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}
