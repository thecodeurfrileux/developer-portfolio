"use client";

const links = [
	{ label: "L’atelier", href: "#about" },
	{ label: "Collections", href: "#collections" },
	{ label: "Ateliers", href: "#ateliers" },
	{ label: "Contact", href: "#contact" },
];

export function Footer() {
	return (
		<footer className="border-t border-border bg-blush py-16 text-ink">
			<div className="mx-auto flex max-w-6xl flex-col items-center gap-7 px-6 text-center">
				<p className="font-serif text-2xl font-light tracking-wide">Atelier Bloom</p>

				<nav className="flex flex-wrap justify-center gap-x-8 gap-y-3">
					{links.map((link) => (
						<a
							key={link.href}
							href={link.href}
							className="text-xs font-light uppercase tracking-[0.2em] text-stone transition-colors hover:text-ink"
						>
							{link.label}
						</a>
					))}
				</nav>

				<div className="flex gap-6">
					<a
						href="#"
						aria-label="Instagram"
						className="text-stone transition-colors hover:text-gold"
					>
						<InstagramIcon />
					</a>
					<a
						href="#"
						aria-label="Pinterest"
						className="text-stone transition-colors hover:text-gold"
					>
						<PinterestIcon />
					</a>
				</div>

				<p className="text-xs font-light tracking-wide text-stone">
					© {new Date().getFullYear()} Titouan Hellégouarch · Pantin, 93500 · Tous droits
					réservés
				</p>
			</div>
		</footer>
	);
}

function InstagramIcon() {
	return (
		<svg
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
		>
			<rect x="2" y="2" width="20" height="20" rx="5" />
			<circle cx="12" cy="12" r="4" />
			<circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
		</svg>
	);
}

function PinterestIcon() {
	return (
		<svg
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
		>
			<path d="M9 19c-1 1.5-2 3-2 3" />
			<path d="M12 2a10 10 0 0 0-3.5 19.4c-.1-.8-.2-2 0-2.9l1.2-5s-.3-.6-.3-1.5c0-1.4.8-2.4 1.8-2.4.9 0 1.3.6 1.3 1.4 0 .9-.5 2.2-.8 3.4-.2 1 .5 1.8 1.5 1.8 1.8 0 3.1-2.3 3.1-5 0-2.1-1.4-3.6-3.9-3.6-2.8 0-4.5 2.1-4.5 4.4 0 .8.3 1.4.6 1.8.1.2.1.3.1.5l-.2.9c-.1.3-.3.4-.5.2-1-.4-1.5-1.6-1.5-3 0-2.3 1.9-5 5.8-5 3.1 0 5.2 2.2 5.2 4.7 0 3.2-1.8 5.6-4.4 5.6-.9 0-1.7-.5-2-1" />
		</svg>
	);
}
