import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
	variable: "--font-heading",
	subsets: ["latin"],
	display: "swap",
});
const inter = Inter({
	variable: "--font-body",
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "Maison Lefèvre — Boulangerie Artisanale",
	description:
		"Maison Lefèvre — pains, viennoiseries et pâtisseries faits maison, avec passion. Une boulangerie artisanale au cœur de votre quartier.",
};

export const viewport: Viewport = {
	colorScheme: "light",
	themeColor: "#f6efe2",
};

export default function BoulangerieLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div
			className={`${playfair.variable} ${inter.variable} scroll-smooth bg-background font-sans antialiased`}
		>
			{children}
			{process.env.NODE_ENV === "production" && <Analytics />}
		</div>
	);
}
