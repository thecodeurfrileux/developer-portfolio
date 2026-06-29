import { Scissors } from "lucide-react";
import { InstagramIcon } from "@/components/barber-shop/instagram-icon";

const LINKS = [
	{ label: "Le shop", href: "#about" },
	{ label: "Services", href: "#services" },
	{ label: "L'équipe", href: "#team" },
	{ label: "Galerie", href: "#gallery" },
	{ label: "Contact", href: "#contact" },
];

export function SiteFooter() {
	return (
		<footer className="border-t border-border py-12">
			<div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 md:flex-row md:justify-between md:px-6">
				<a
					href="#hero"
					className="flex items-center gap-2 font-heading text-2xl leading-none tracking-wide"
				>
					<Scissors className="size-5 text-primary" aria-hidden="true" />
					BARBER<span className="text-primary"> 93</span>
				</a>

				<nav>
					<ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
						{LINKS.map((link) => (
							<li key={link.href}>
								<a
									href={link.href}
									className="text-sm font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary"
								>
									{link.label}
								</a>
							</li>
						))}
					</ul>
				</nav>

				<a
					href="#"
					aria-label="Instagram de Barber 93"
					className="inline-flex size-10 items-center justify-center rounded-sm border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
				>
					<InstagramIcon className="size-5" />
				</a>
			</div>

			<div className="mx-auto mt-8 max-w-6xl px-4 md:px-6">
				<p className="border-t border-border pt-6 text-center text-xs text-muted-foreground">
					© {new Date().getFullYear()} Titouan Hellégouarch · Aulnay-sous-Bois, 93600 · Le
					style, c&apos;est sérieux.
				</p>
			</div>
		</footer>
	);
}
