import { SERVICES } from "@/lib/services";
import { SectionHeading } from "@/components/serrurier/section-heading";
import { Icon } from "@/components/serrurier/icon";

export function PricingTable() {
	return (
		<section id="tarifs" className="scroll-mt-20 bg-background py-16 sm:py-20">
			<div className="mx-auto max-w-4xl px-4">
				<SectionHeading
					eyebrow="Tarifs indicatifs"
					title="Des prix clairs, annoncés avant l'intervention"
					description="Ces fourchettes sont données à titre indicatif. Le tarif exact vous est toujours confirmé après diagnostic, sans frais caché."
				/>

				<div className="mt-10 overflow-hidden rounded-xl border border-border">
					<table className="w-full text-left text-sm">
						<thead className="bg-primary text-primary-foreground">
							<tr>
								<th scope="col" className="px-4 py-4 font-heading font-semibold sm:px-6">
									Prestation
								</th>
								<th
									scope="col"
									className="px-4 py-4 text-right font-heading font-semibold sm:px-6"
								>
									Fourchette de prix
								</th>
							</tr>
						</thead>
						<tbody className="divide-y divide-border">
							{SERVICES.map((service, i) => (
								<tr key={service.slug} className={i % 2 === 1 ? "bg-secondary/40" : "bg-card"}>
									<th scope="row" className="px-4 py-4 font-medium text-foreground sm:px-6">
										<span className="flex items-center gap-3">
											<span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-primary/8 text-primary">
												<Icon name={service.icon} className="size-4" />
											</span>
											{service.shortTitle}
										</span>
									</th>
									<td className="whitespace-nowrap px-4 py-4 text-right font-semibold text-primary sm:px-6">
										{service.priceFrom} € – {service.priceTo} €
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
				<p className="mt-4 text-center text-xs text-muted-foreground">
					Prix TTC indicatifs, hors fournitures spécifiques. Les éventuelles majorations de
					nuit, dimanche et jours fériés sont annoncées avant toute intervention.
				</p>
			</div>
		</section>
	);
}
