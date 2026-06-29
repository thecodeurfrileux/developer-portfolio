import { Reveal } from "@/components/barber-shop/reveal";
import { MapPin, Phone, Clock } from "lucide-react";

const HOURS = [
	{ day: "Lundi", time: "Fermé", closed: true },
	{ day: "Mardi – Samedi", time: "9h – 19h" },
	{ day: "Dimanche", time: "Fermé", closed: true },
];

export function Contact() {
	return (
		<section id="contact" className="border-t border-border py-20 md:py-28">
			<div className="mx-auto max-w-6xl px-4 md:px-6">
				<Reveal className="max-w-2xl">
					<p className="text-sm font-medium uppercase tracking-[0.25em] text-primary">
						Contact
					</p>
					<h2 className="mt-3 font-heading text-5xl leading-none tracking-wide text-balance md:text-6xl">
						Passe au shop
					</h2>
					<p className="mt-4 leading-relaxed text-muted-foreground">
						Sur rendez-vous ou en walk-in. Appelle, on te cale un créneau.
					</p>
				</Reveal>

				<div className="mt-12 grid gap-6 lg:grid-cols-2">
					<Reveal className="flex flex-col gap-6">
						<div className="flex items-start gap-4 rounded-sm border border-border bg-card p-5">
							<MapPin className="size-5 shrink-0 text-primary" aria-hidden="true" />
							<div>
								<p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
									Adresse
								</p>
								<p className="mt-1 font-medium text-foreground">12 rue de la République</p>
								<p className="text-muted-foreground">
									93600 Aulnay-sous-Bois, Seine-Saint-Denis
								</p>
							</div>
						</div>

						<a
							href="tel:+33148000093"
							className="flex items-start gap-4 rounded-sm border border-border bg-card p-5 transition-colors hover:border-primary"
						>
							<Phone className="size-5 shrink-0 text-primary" aria-hidden="true" />
							<div>
								<p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
									Téléphone
								</p>
								<p className="mt-1 font-medium text-foreground">01 48 00 00 93</p>
							</div>
						</a>

						<div className="flex items-start gap-4 rounded-sm border border-border bg-card p-5">
							<Clock className="size-5 shrink-0 text-primary" aria-hidden="true" />
							<div className="w-full">
								<p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
									Horaires
								</p>
								<ul className="mt-2 space-y-1.5">
									{HOURS.map((h) => (
										<li
											key={h.day}
											className="flex items-center justify-between gap-4 text-sm"
										>
											<span className="text-foreground">{h.day}</span>
											<span className={h.closed ? "text-muted-foreground" : "text-primary"}>
												{h.time}
											</span>
										</li>
									))}
								</ul>
							</div>
						</div>

						<a
							href="tel:+33148000093"
							className="inline-flex items-center justify-center rounded-sm bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-transform hover:-translate-y-0.5"
						>
							Prendre rendez-vous
						</a>
					</Reveal>

					<Reveal delay={120} className="min-h-80">
						<div className="relative h-full min-h-80 overflow-hidden rounded-sm border border-border">
							<img
								src="https://picsum.photos/seed/map93aulnay/900/900"
								alt="Plan d'accès vers Barber 93 à Aulnay-sous-Bois"
								className="size-full object-cover"
							/>
							<div className="absolute inset-0 bg-background/30" />
							<div className="absolute inset-0 flex flex-col items-center justify-center text-center">
								<span className="flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
									<MapPin className="size-7" aria-hidden="true" />
								</span>
								<p className="mt-3 font-heading text-2xl tracking-wide text-foreground">
									Aulnay-sous-Bois
								</p>
								<p className="text-sm text-muted-foreground">Carte Google Maps</p>
							</div>
						</div>
					</Reveal>
				</div>
			</div>
		</section>
	);
}
