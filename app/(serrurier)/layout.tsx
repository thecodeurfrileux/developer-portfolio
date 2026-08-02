import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import { SITE } from "@/lib/site";
import "./globals.css";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap",
});

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["500", "600", "700", "800"],
	variable: "--font-poppins",
	display: "swap",
});

export const metadata: Metadata = {
	metadataBase: new URL(SITE.url),
	title: {
		default: `${SITE.name} — Serrurier Aulnay-sous-Bois (93600) 24/7`,
		template: `%s | ${SITE.name}`,
	},
	description:
		"Serrurier à Aulnay-sous-Bois (93600) : dépannage en urgence 24h/24 et 7j/7, ouverture de porte, changement de serrure, porte blindée. Devis gratuit, tarifs fixes, artisan local assuré.",
	keywords: [
		"serrurier Aulnay-sous-Bois",
		"serrurier 93600",
		"dépannage serrure 93",
		"ouverture de porte Aulnay",
		"changement de serrure Seine-Saint-Denis",
	],
	alternates: { canonical: "/serrurier" },
	openGraph: {
		type: "website",
		locale: "fr_FR",
		url: SITE.url,
		siteName: SITE.name,
		title: `${SITE.name} — Serrurier Aulnay-sous-Bois (93600) 24/7`,
		description:
			"Dépannage serrurerie en urgence 24/7 à Aulnay-sous-Bois et communes limitrophes. Devis gratuit et tarifs annoncés à l'avance.",
	},
	twitter: {
		card: "summary_large_image",
		title: `${SITE.name} — Serrurier Aulnay-sous-Bois 24/7`,
		description:
			"Dépannage serrurerie en urgence 24/7 à Aulnay-sous-Bois. Devis gratuit, tarifs fixes.",
	},
};

export const viewport: Viewport = {
	colorScheme: "light",
	themeColor: "#1e2a44",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div lang="fr" className={`bg-background ${inter.variable} ${poppins.variable}`}>
			<div className="font-sans antialiased">
				{children}
				{process.env.NODE_ENV === "production" && <Analytics />}
			</div>
		</div>
	);
}
