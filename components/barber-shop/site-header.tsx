"use client";

import { useEffect, useState } from "react";
import { Menu, X, Scissors } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
	{ label: "Le shop", href: "#about" },
	{ label: "Services", href: "#services" },
	{ label: "L'équipe", href: "#team" },
	{ label: "Galerie", href: "#gallery" },
	{ label: "Avis", href: "#testimonials" },
	{ label: "Contact", href: "#contact" },
];

export function SiteHeader() {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<header
			className={cn(
				"fixed inset-x-0 top-0 z-50 transition-colors duration-300",
				scrolled
					? "border-b border-border bg-background/85 backdrop-blur-md"
					: "border-b border-transparent bg-transparent",
			)}
		>
			<nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:h-20 md:px-6">
				<a
					href="#hero"
					className="flex items-center gap-2 font-heading text-2xl leading-none tracking-wide md:text-3xl"
				>
					<Scissors className="size-5 text-primary" aria-hidden="true" />
					<span>
						BARBER<span className="text-primary"> 93</span>
					</span>
				</a>

				<ul className="hidden items-center gap-8 md:flex">
					{NAV_LINKS.map((link) => (
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

				<a
					href="tel:+33652413488"
					className="hidden rounded-sm bg-primary px-5 py-2.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-transform hover:-translate-y-0.5 md:inline-block"
				>
					Rendez-vous
				</a>

				<button
					type="button"
					onClick={() => setOpen((v) => !v)}
					className="inline-flex size-10 items-center justify-center rounded-sm text-foreground md:hidden"
					aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
					aria-expanded={open}
				>
					{open ? <X className="size-6" /> : <Menu className="size-6" />}
				</button>
			</nav>

			{open && (
				<div className="border-t border-border bg-background md:hidden">
					<ul className="flex flex-col px-4 py-2">
						{NAV_LINKS.map((link) => (
							<li key={link.href}>
								<a
									href={link.href}
									onClick={() => setOpen(false)}
									className="block py-3 text-sm font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary"
								>
									{link.label}
								</a>
							</li>
						))}
						<li className="py-3">
							<a
								href="#contact"
								onClick={() => setOpen(false)}
								className="block rounded-sm bg-primary px-5 py-3 text-center text-sm font-semibold uppercase tracking-wider text-primary-foreground"
							>
								Prendre rendez-vous
							</a>
						</li>
					</ul>
				</div>
			)}
		</header>
	);
}
