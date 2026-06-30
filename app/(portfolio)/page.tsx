import { About } from "@/components/portfolio/about";
import { Contact } from "@/components/portfolio/contact";
import { Hero } from "@/components/portfolio/hero";
import { Projects } from "@/components/portfolio/projects";
import { Services } from "@/components/portfolio/services";
import { SiteFooter } from "@/components/portfolio/site-footer";
import { SiteNav } from "@/components/portfolio/site-nav";
import { StatsBar } from "@/components/portfolio/stats-bar";
import { Testimonials } from "@/components/portfolio/testimonials";
import { WhyMatters } from "@/components/portfolio/why-matters";
import { Faq } from "@/components/portfolio/Faq";

export default function Page() {
	return (
		<main className="min-h-screen bg-background">
			<SiteNav />
			<Hero />
			<StatsBar />
			<WhyMatters />
			<Projects />
			<Services />
			<Faq />
			<About />
			<Testimonials />
			<Contact />
			<SiteFooter />
		</main>
	);
}
