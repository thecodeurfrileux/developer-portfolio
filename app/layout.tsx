import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
	icons: {
		icon: [
			{ url: "/icons/dark-logo.png", type: "image/png", sizes: "64x64" },
			{ url: "/icons/light-logo.png", media: "(prefers-color-scheme: light)" },
			{ url: "/icons/dark-logo.png", media: "(prefers-color-scheme: dark)" },
		],
		apple: "/icons/dark-logo.png",
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="fr" suppressHydrationWarning>
			<body>{children}</body>
			<SpeedInsights />
		</html>
	);
}
