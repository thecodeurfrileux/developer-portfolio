import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

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
	title: "Création site internet Aulnay-sous-Bois (93) — Agence Web Sites Vitrines",
	description:
		"Développeur web freelance à Aulnay-sous-Bois (93). Création de sites vitrines modernes, rapides et optimisés SEO pour commerçants, artisans, professions libérales et indépendants. Devis gratuit et livraison en 1 semaine.",
	openGraph: {
		title: "Développeur web Aulnay-sous-Bois — Création site vitrine",
		description:
			"Sites vitrines pour commerces de proximité et indépendants. À partir de 600€.",
		url: "https://titouanhellegouarch.fr",
		siteName: "Développeur web Aulnay-sous-Bois — Création site vitrine",
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
		<div
			className={`${cormorant.variable} ${dmSans.variable} bg-background font-sans antialiased`}
		>
			{children}
			{process.env.NODE_ENV === "production" && <Analytics />}
		</div>
	);
}
