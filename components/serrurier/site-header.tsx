"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, KeyRound } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
	const [open, setOpen] = useState(false);

	return (
		<header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
			<div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
				<Link
					href="/"
					className="flex items-center gap-2 font-heading text-lg font-bold text-primary"
					onClick={() => setOpen(false)}
				>
					<span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
						<KeyRound className="size-5" aria-hidden="true" />
					</span>
					<span className="leading-tight">{SITE.name}</span>
				</Link>

				<nav className="hidden items-center gap-6 md:flex" aria-label="Navigation principale">
					{NAV_LINKS.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
						>
							{link.label}
						</Link>
					))}
				</nav>

				<div className="hidden items-center md:flex">
					<a
						href={`tel:${SITE.phoneHref}`}
						className="inline-flex h-11 items-center gap-2 rounded-lg bg-accent px-5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
					>
						<Phone className="size-4" aria-hidden="true" />
						{SITE.phoneDisplay}
					</a>
				</div>

				<button
					type="button"
					className="inline-flex size-10 items-center justify-center rounded-lg text-primary md:hidden"
					aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
					aria-expanded={open}
					onClick={() => setOpen((v) => !v)}
				>
					{open ? <X className="size-6" /> : <Menu className="size-6" />}
				</button>
			</div>

			<div
				className={cn(
					"overflow-hidden border-t border-border bg-background md:hidden",
					open ? "max-h-96" : "max-h-0 border-t-0",
					"transition-all duration-300",
				)}
			>
				<nav className="flex flex-col gap-1 px-4 py-3" aria-label="Navigation mobile">
					{NAV_LINKS.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className="rounded-md px-2 py-2.5 text-sm font-medium text-foreground/80 hover:bg-secondary hover:text-primary"
							onClick={() => setOpen(false)}
						>
							{link.label}
						</Link>
					))}
					<a
						href={`tel:${SITE.phoneHref}`}
						className="mt-2 inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-accent px-5 text-sm font-semibold text-accent-foreground"
					>
						<Phone className="size-4" aria-hidden="true" />
						{SITE.phoneDisplay}
					</a>
				</nav>
			</div>
		</header>
	);
}
