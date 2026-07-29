import type { Metadata } from "next";
import { PageShell } from "@/components/serrurier/page-shell";
import { PageHero } from "@/components/serrurier/page-hero";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
	title: "Mentions légales",
	description: "Mentions légales et informations sur l'éditeur du site.",
	alternates: { canonical: "/mentions-legales" },
	robots: { index: false, follow: true },
};

function Block({ title, children }: { title: string; children: React.ReactNode }) {
	return (
		<div>
			<h2 className="font-heading text-xl font-bold text-foreground">{title}</h2>
			<div className="mt-3 space-y-2 leading-relaxed text-muted-foreground">{children}</div>
		</div>
	);
}

export default function LegalPage() {
	const breadcrumbs = [
		{ name: "Accueil", url: "/" },
		{ name: "Mentions légales", url: "/mentions-legales" },
	];

	return (
		<PageShell>
			<PageHero
				title="Mentions légales"
				subtitle="Informations légales relatives à l'éditeur et à l'hébergement de ce site."
				breadcrumbs={breadcrumbs}
				showCtas={false}
			/>

			<section className="py-14 sm:py-20">
				<div className="mx-auto max-w-3xl space-y-10 px-4">
					<Block title="Éditeur du site">
						<p>{SITE.legalName}</p>
						<p>
							{SITE.address.street}, {SITE.address.postalCode} {SITE.address.city}
						</p>
						<p>Téléphone : {SITE.phoneDisplay}</p>
						<p>Email : {SITE.email}</p>
					</Block>

					<Block title="Activité">
						<p>
							Serrurerie, dépannage et sécurisation. {SITE.insurance}. Interventions à{" "}
							{SITE.address.city} et communes limitrophes de Seine-Saint-Denis.
						</p>
					</Block>

					<Block title="Hébergement">
						<p>
							Ce site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789,
							États-Unis.
						</p>
					</Block>

					<Block title="Propriété intellectuelle">
						<p>
							L&apos;ensemble des contenus (textes, images, logos) présents sur ce site est
							protégé. Toute reproduction sans autorisation est interdite.
						</p>
					</Block>

					<Block title="Données personnelles">
						<p>
							Les informations transmises via le formulaire de contact sont utilisées
							uniquement pour traiter votre demande et ne sont jamais cédées à des tiers.
							Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de
							rectification et de suppression de vos données en écrivant à {SITE.email}.
						</p>
					</Block>

					<Block title="Tarifs">
						<p>
							Les prix indiqués sur ce site sont donnés à titre indicatif. Un devis précis et
							gratuit est systématiquement communiqué avant toute intervention.
						</p>
					</Block>
				</div>
			</section>
		</PageShell>
	);
}
