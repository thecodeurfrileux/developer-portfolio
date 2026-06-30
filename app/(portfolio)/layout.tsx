import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css"; // ✅ garde ton CSS

const cormorant = Cormorant_Garamond({
	variable: "--font-heading",
	subsets: ["latin"],
	weight: ["300", "400", "500", "600"],
	display: "swap",
});
const dmSans = DM_Sans({
	variable: "--font-body",
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	title: {
		default:
			"Développeur Web Aulnay-sous-Bois (93) — Agence Web Sites Vitrines | Titouan Hellégouarch",
		template: "%s | Titouan Hellégouarch",
	},
	description:
		"développeur web à Aulnay-sous-Bois (Seine-Saint-Denis). Création de sites vitrines pour commerçants, artisans et indépendants du 93. Devis rapide, livraison en 1 semaine",
	openGraph: {
		title: "Titouan Hellégouarch — Développeur web",
		description: "Sites vitrines pour commerces de proximité. À partir de 600€.",
		url: "https://titouanhellegouarch.fr",
		siteName: "Titouan Hellégouarch",
		locale: "fr_FR",
		type: "website",
		images: [
			{
				url: "/assets/pdp.png",
				width: 1200,
				height: 630,
				alt: "Création de sites vitrines pour commerces de proximité",
			},
		],
	},
	metadataBase: new URL("https://titouanhellegouarch.fr"),
};

export const viewport: Viewport = {
	colorScheme: "light dark",
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
	return (
		// ✅ div à la place de <html>
		<div
			className={`${cormorant.variable} ${dmSans.variable} bg-background font-sans antialiased`}
		>
			{children}
			{process.env.NODE_ENV === "production" && <Analytics />}
		</div>
	);
}
