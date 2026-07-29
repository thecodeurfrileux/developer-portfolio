import { Phone, Mail, Clock, MapPin, MessageCircle, BadgeCheck } from "lucide-react";
import { SITE } from "@/lib/site";
import { QuoteForm } from "@/components/serrurier/quote-form";
import { SectionHeading } from "@/components/serrurier/section-heading";

export function ContactSection() {
	return (
		<section id="contact" className="scroll-mt-20 bg-background py-16 sm:py-20">
			<div className="mx-auto max-w-6xl px-4">
				<SectionHeading
					eyebrow="Contact"
					title="Demandez votre devis gratuit"
					description="Décrivez votre besoin, nous vous rappelons rapidement. Pour une urgence, un appel reste le plus rapide."
				/>

				<div className="mt-12 grid gap-8 lg:grid-cols-2">
					<div className="flex flex-col gap-6">
						<a
							href={`tel:${SITE.phoneHref}`}
							className="flex items-center gap-4 rounded-xl bg-primary p-6 text-primary-foreground transition-colors hover:bg-primary/90"
						>
							<span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
								<Phone className="size-6" aria-hidden="true" />
							</span>
							<span>
								<span className="block text-sm text-primary-foreground/70">
									Urgence 24h/24 — 7j/7
								</span>
								<span className="block font-heading text-2xl font-bold">
									{SITE.phoneDisplay}
								</span>
							</span>
						</a>

						<ul className="grid gap-3 rounded-xl border border-border bg-card p-6">
							<li className="flex items-center gap-3 text-sm text-foreground">
								<MessageCircle className="size-5 shrink-0 text-accent" aria-hidden="true" />
								<a
									href={SITE.whatsappHref}
									className="hover:text-primary"
									target="_blank"
									rel="noopener noreferrer"
								>
									Nous écrire sur WhatsApp
								</a>
							</li>
							<li className="flex items-center gap-3 text-sm text-foreground">
								<Mail className="size-5 shrink-0 text-accent" aria-hidden="true" />
								<a href={`mailto:${SITE.email}`} className="hover:text-primary">
									{SITE.email}
								</a>
							</li>
							<li className="flex items-start gap-3 text-sm text-foreground">
								<MapPin className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
								<span>
									{SITE.address.street}, {SITE.address.postalCode} {SITE.address.city}
								</span>
							</li>
							<li className="flex items-center gap-3 text-sm text-foreground">
								<Clock className="size-5 shrink-0 text-accent" aria-hidden="true" />
								<span>Ouvert {SITE.hours}</span>
							</li>
						</ul>

						<div className="flex items-center gap-3 rounded-xl border border-accent/30 bg-accent/10 p-5">
							<BadgeCheck className="size-6 shrink-0 text-accent" aria-hidden="true" />
							<p className="text-sm font-medium text-foreground">
								Devis gratuit et sans engagement — {SITE.insurance.toLowerCase()}.
							</p>
						</div>
					</div>

					<QuoteForm />
				</div>
			</div>
		</section>
	);
}
