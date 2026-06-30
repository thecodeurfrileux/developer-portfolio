import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/dist/client/script";

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

const GTM_ID = "GTM-NRB285C4";

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="fr" suppressHydrationWarning>
			<head>
				<Script id="gtm" strategy="afterInteractive">
					{`
						(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
						new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
						j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
						'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
						})(window,document,'script','dataLayer','${GTM_ID}');
					`}
				</Script>
			</head>
			<body>
				<noscript>
					<iframe
						src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
						height="0"
						width="0"
						style={{ display: "none", visibility: "hidden" }}
					></iframe>
				</noscript>

				{children}
			</body>
			<SpeedInsights />
		</html>
	);
}
