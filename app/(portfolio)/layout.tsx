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
		default: "Titouan Hellégouarch — Développeur web & sites vitrines",
		template: "%s | Titouan Hellégouarch",
	},
	description:
		"Développeur web spécialisé dans la création de sites vitrines pour les commerces de proximité.",
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
