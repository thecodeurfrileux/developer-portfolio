import Link from "next/link";
import { Phone, MessageSquareText } from "lucide-react";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function CallButton({
	className,
	label = "Appeler maintenant",
	size = "lg",
}: {
	className?: string;
	label?: string;
	size?: "md" | "lg";
}) {
	return (
		<a
			href={`tel:${SITE.phoneHref}`}
			className={cn(
				"inline-flex items-center justify-center gap-2 rounded-lg bg-accent font-semibold text-accent-foreground shadow-sm transition-colors hover:bg-accent/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
				size === "lg" ? "h-13 px-6 text-base" : "h-11 px-5 text-sm",
				className,
			)}
		>
			<Phone className="size-5" aria-hidden="true" />
			<span>{label}</span>
		</a>
	);
}

export function QuoteButton({
	className,
	label = "Devis gratuit",
	size = "lg",
}: {
	className?: string;
	label?: string;
	size?: "md" | "lg";
}) {
	return (
		<Link
			href="/serrurier/#contact"
			className={cn(
				"inline-flex items-center justify-center gap-2 rounded-lg border border-primary-foreground/25 bg-primary-foreground/10 font-semibold text-primary-foreground backdrop-blur-sm transition-colors hover:bg-primary-foreground/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-foreground",
				size === "lg" ? "h-13 px-6 text-base" : "h-11 px-5 text-sm",
				className,
			)}
		>
			<MessageSquareText className="size-5" aria-hidden="true" />
			<span>{label}</span>
		</Link>
	);
}

// Variante « devis » sur fond clair (pages internes / sections claires)
export function QuoteButtonLight({
	className,
	label = "Devis gratuit",
	size = "lg",
}: {
	className?: string;
	label?: string;
	size?: "md" | "lg";
}) {
	return (
		<Link
			href="/#contact"
			className={cn(
				"inline-flex items-center justify-center gap-2 rounded-lg border border-primary/20 bg-background font-semibold text-primary transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
				size === "lg" ? "h-13 px-6 text-base" : "h-11 px-5 text-sm",
				className,
			)}
		>
			<MessageSquareText className="size-5" aria-hidden="true" />
			<span>{label}</span>
		</Link>
	);
}
