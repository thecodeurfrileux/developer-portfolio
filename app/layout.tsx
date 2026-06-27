import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
	variable: "--font-heading",
	subsets: ["latin"],
	weight: ["300", "400", "500", "600"],
});
const dmSans = DM_Sans({
	variable: "--font-body",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
	title: "Titouan Hellégouarch — Développeur web & sites vitrines",
	description:
		"Développeur web spécialisé dans la création de sites vitrines pour les commerces de proximité. À partir de 500€, livrés en une semaine.",
	generator: "v0.app",
	icons: {
		icon: [
			{
				url: "/icons/light-logo.png",
				media: "(prefers-color-scheme: light)",
			},
			{
				url: "/icons/dark-logo.png",
				media: "(prefers-color-scheme: dark)",
			},
			{
				url: "/icons/light-logo.png",
				type: "image/svg+xml",
			},
		],
		apple: "/apple-icon.png",
	},
};

export const viewport: Viewport = {
	colorScheme: "light dark",
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="fr" className={`${cormorant.variable} ${dmSans.variable} bg-background`}>
			<body className="font-sans antialiased">
				{children}
				{process.env.NODE_ENV === "production" && <Analytics />}
			</body>
		</html>
	);
}
