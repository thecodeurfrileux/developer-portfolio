type IconProps = { className?: string };

function InstagramIcon({ className }: IconProps) {
	return (
		<svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
			<path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 3.68a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32Zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.41-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z" />
		</svg>
	);
}

function FacebookIcon({ className }: IconProps) {
	return (
		<svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
			<path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
		</svg>
	);
}

function XIcon({ className }: IconProps) {
	return (
		<svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
			<path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.22-6.82-5.97 6.82H1.66l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.01 4.13H5.04l12.04 15.64Z" />
		</svg>
	);
}

const links = [
	{ href: "#about", label: "Notre Maison" },
	{ href: "#products", label: "Nos créations" },
	{ href: "#gallery", label: "Galerie" },
	{ href: "#testimonials", label: "Avis" },
	{ href: "#contact", label: "Contact" },
];

const socials = [
	{ href: "#", label: "Instagram", icon: InstagramIcon },
	{ href: "#", label: "Facebook", icon: FacebookIcon },
	{ href: "#", label: "X (Twitter)", icon: XIcon },
];

export function Footer() {
	return (
		<footer className="bg-foreground text-background">
			<div className="mx-auto max-w-6xl px-5 py-14 md:px-8">
				<div className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
					<div>
						<a href="#home" className="font-heading text-2xl font-semibold">
							Maison Lefèvre
						</a>
						<p className="mt-2 text-sm italic text-background/70">Fait maison, avec passion</p>
					</div>

					<nav aria-label="Navigation du pied de page">
						<ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
							{links.map((link) => (
								<li key={link.href}>
									<a
										href={link.href}
										className="text-sm text-background/80 transition-colors hover:text-background"
									>
										{link.label}
									</a>
								</li>
							))}
						</ul>
					</nav>

					<div className="flex items-center gap-3">
						{socials.map((social) => (
							<a
								key={social.label}
								href={social.href}
								aria-label={social.label}
								className="flex size-10 items-center justify-center rounded-full bg-background/10 text-background transition-colors hover:bg-primary"
							>
								<social.icon className="size-5" />
							</a>
						))}
					</div>
				</div>

				<div className="mt-10 border-t border-background/15 pt-6 text-center text-sm text-background/60">
					<p>© {new Date().getFullYear()} Titouan Hellégouarch. Tous droits réservés.</p>
				</div>
			</div>
		</footer>
	);
}
