import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const bebas = Bebas_Neue({
	variable: "--font-bebas",
	weight: "400",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Barber 93 Aulnay-sous-Bois — Coupe Homme 15€",
	description:
		"Barber 93, le barbershop d'Aulnay-sous-Bois (93600). Coupe homme (15€), barbe (20€), coupe enfant (10€).",
	alternates: {
		canonical: "https://titouanhellegouarch.fr/barber-shop",
	},
};

export const viewport: Viewport = {
	colorScheme: "dark",
	themeColor: "#0a0a0a",
};

export default function BarberLayout({ children }: { children: React.ReactNode }) {
	return (
		<div
			className={`dark ${inter.variable} ${bebas.variable} bg-background font-sans antialiased`}
		>
			{children}
			{process.env.NODE_ENV === "production" && <Analytics />}
		</div>
	);
}
