import { SiteHeader } from "@/components/serrurier/site-header";
import { SiteFooter } from "@/components/serrurier/site-footer";
import { StickyCta } from "@/components/serrurier/sticky-cta";

export function PageShell({ children }: { children: React.ReactNode }) {
	return (
		<>
			<SiteHeader />
			<main className="pb-16 md:pb-0">{children}</main>
			<SiteFooter />
			<StickyCta />
		</>
	);
}
