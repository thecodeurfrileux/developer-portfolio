import Image from "next/image";
import { Phone, Clock, CheckCircle2 } from "lucide-react";
import { SITE } from "@/lib/site";
import { CallButton, QuoteButton } from "@/components/serrurier/cta-buttons";
import { StarRating } from "@/components/serrurier/star-rating";

export function Hero() {
	return (
		<section className="relative overflow-hidden bg-primary text-primary-foreground">
			<div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:py-20 lg:grid-cols-2 lg:py-24">
				<div>
					<span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-accent">
						<Clock className="size-3.5" aria-hidden="true" />
						Disponible 24h/24 — 7j/7
					</span>

					<h1 className="mt-5 font-heading text-3xl font-extrabold leading-tight tracking-tight text-balance sm:text-4xl lg:text-5xl">
						Serrurier Aulnay-sous-Bois (93600) — Dépannage en urgence 24/7
					</h1>

					<p className="mt-4 max-w-xl text-base leading-relaxed text-primary-foreground/75 text-pretty sm:text-lg">
						Artisan serrurier local : ouverture de porte, changement de serrure, porte blindée.
						Tarifs fixes annoncés à l&apos;avance, devis gratuit, sans surfacturation.
					</p>

					<div className="mt-7 flex flex-col gap-3 sm:flex-row">
						<QuoteButton className="w-full sm:w-auto" />
						<CallButton className="w-full sm:w-auto" label={`Appeler ${SITE.phoneDisplay}`} />
					</div>

					<div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
						<div className="flex items-center gap-2">
							<StarRating value={SITE.rating.value} />
							<span className="text-sm font-medium text-primary-foreground/85">
								{SITE.rating.value}/5 · {SITE.rating.count} avis
							</span>
						</div>
						<span className="flex items-center gap-2 text-sm text-primary-foreground/85">
							<CheckCircle2 className="size-4 text-accent" aria-hidden="true" />
							Artisan assuré et certifié
						</span>
					</div>
				</div>

				<div className="relative">
					<div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-primary-foreground/10 shadow-2xl">
						<Image
							src="/assets/serrurier/serrurier-intervention.png"
							alt="Serrurier installant une serrure haute sécurité sur une porte à Aulnay-sous-Bois"
							fill
							priority
							sizes="(max-width: 1024px) 100vw, 50vw"
							className="object-cover"
						/>
					</div>
					<a
						href={`tel:${SITE.phoneHref}`}
						className="absolute -bottom-4 left-4 flex items-center gap-3 rounded-xl bg-background px-4 py-3 text-foreground shadow-lg ring-1 ring-border sm:left-6"
					>
						<span className="flex size-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
							<Phone className="size-5" aria-hidden="true" />
						</span>
						<span>
							<span className="block text-xs text-muted-foreground">Appelez maintenant</span>
							<span className="block font-heading font-bold leading-tight">
								{SITE.phoneDisplay}
							</span>
						</span>
					</a>
				</div>
			</div>
		</section>
	);
}
