import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
	variable: "--font-cormorant",
	subsets: ["latin"],
	weight: ["300", "400", "500", "600"],
});

const dmSans = DM_Sans({
	variable: "--font-dm-sans",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Atelier Bloom — Fleuriste & Décoration à Pantin",
	description:
		"Atelier Bloom, concept store de fleurs et décoration à Pantin (93500). Des fleurs qui racontent une histoire — bouquets, art floral, déco intérieure et ateliers.",
};

export const viewport: Viewport = {
	themeColor: "#FAFAF8",
};

export default function BloomLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div
			className={`${cormorant.variable} ${dmSans.variable} bg-background font-sans antialiased`}
		>
			{children}
			{process.env.NODE_ENV === "production" && <Analytics />}
		</div>
	);
}
