import { SiteHeader } from "@/components/barber-shop/site-header";
import { Hero } from "@/components/barber-shop/sections/hero";
import { About } from "@/components/barber-shop/sections/about";
import { Services } from "@/components/barber-shop/sections/services";
import { Team } from "@/components/barber-shop/sections/team";
import { Gallery } from "@/components/barber-shop/sections/gallery";
import { Testimonials } from "@/components/barber-shop/sections/testimonials";
import { Contact } from "@/components/barber-shop/sections/contact";
import { SiteFooter } from "@/components/barber-shop/site-footer";

export default function Page() {
	return (
		<>
			<SiteHeader />
			<main>
				<Hero />
				<About />
				<Services />
				<Team />
				<Gallery />
				<Testimonials />
				<Contact />
			</main>
			<SiteFooter />
		</>
	);
}
