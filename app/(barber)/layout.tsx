import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css"; // ✅ garde ton CSS

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const bebas = Bebas_Neue({
	variable: "--font-bebas",
	weight: "400",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Barber 93 — Le style, c'est sérieux. | Aulnay-sous-Bois",
	description:
		"Barber 93, le barbershop d'Aulnay-sous-Bois (93600). Coupe homme, barbe, coupe enfant.",
};

export const viewport: Viewport = {
	colorScheme: "dark",
	themeColor: "#0a0a0a",
};

export default function BarberLayout({ children }: { children: React.ReactNode }) {
	return (
		// ✅ div à la place de <html> — garde toutes tes classes
		<div
			className={`dark ${inter.variable} ${bebas.variable} bg-background font-sans antialiased`}
		>
			{children}
			{process.env.NODE_ENV === "production" && <Analytics />}
		</div>
	);
}
