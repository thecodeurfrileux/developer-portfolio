import type { Metadata } from "next";

export const metadata: Metadata = {
	icons: {
		icon: [
			{ url: "/icons/light-logo.png", media: "(prefers-color-scheme: light)" },
			{ url: "/icons/dark-logo.png", media: "(prefers-color-scheme: dark)" },
		],
		apple: "/dark-logo.png",
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="fr" suppressHydrationWarning>
			<body>{children}</body>
		</html>
	);
}
