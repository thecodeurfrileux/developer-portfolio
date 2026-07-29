import Link from "next/link";
import { PageShell } from "@/components/serrurier/page-shell";
import { CallButton } from "@/components/serrurier/cta-buttons";

export default function NotFound() {
	return (
		<PageShell>
			<section className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center">
				<p className="font-heading text-6xl font-extrabold text-accent">404</p>
				<h1 className="mt-4 font-heading text-2xl font-bold text-foreground text-balance sm:text-3xl">
					Page introuvable
				</h1>
				<p className="mt-4 leading-relaxed text-muted-foreground">
					La page que vous cherchez n&apos;existe pas ou a été déplacée. Pour une urgence
					serrurerie, appelez-nous directement.
				</p>
				<div className="mt-8 flex flex-col gap-3 sm:flex-row">
					<Link
						href="/"
						className="inline-flex h-13 items-center justify-center rounded-lg border border-border bg-background px-6 font-semibold text-foreground transition-colors hover:bg-secondary"
					>
						Retour à l&apos;accueil
					</Link>
					<CallButton />
				</div>
			</section>
		</PageShell>
	);
}
