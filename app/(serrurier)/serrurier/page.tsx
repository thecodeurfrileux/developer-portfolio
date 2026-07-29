import { SiteHeader } from "@/components/serrurier/site-header";
import { SiteFooter } from "@/components/serrurier/site-footer";
import { StickyCta } from "@/components/serrurier/sticky-cta";
import { Hero } from "@/components/serrurier/hero";
import { ReassuranceBar } from "@/components/serrurier/reassurance-bar";
import { ServicesGrid } from "@/components/serrurier/services-grid";
import { WhyUs } from "@/components/serrurier/why-us";
import { PricingTable } from "@/components/serrurier/pricing-table";
import { ServiceArea } from "@/components/serrurier/service-area";
import { Testimonials } from "@/components/serrurier/testimonials";
import { FaqSection } from "@/components/serrurier/faq-section";
import { ContactSection } from "@/components/serrurier/contact-section";
import { LocalBusinessJsonLd } from "@/components/serrurier/structured-data";
import { HOME_FAQ } from "@/lib/content";

export default function HomePage() {
	return (
		<>
			<LocalBusinessJsonLd />
			<SiteHeader />
			<main className="pb-16 md:pb-0">
				<Hero />
				<ReassuranceBar />
				<ServicesGrid />
				<WhyUs />
				<PricingTable />
				<ServiceArea />
				<Testimonials />
				<FaqSection
					items={HOME_FAQ}
					description="Tout ce que vous devez savoir sur nos interventions de serrurerie à Aulnay-sous-Bois."
				/>
				<ContactSection />
			</main>
			<SiteFooter />
			<StickyCta />
		</>
	);
}
