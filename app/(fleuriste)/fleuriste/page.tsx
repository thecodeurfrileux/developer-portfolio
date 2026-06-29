import { About } from "@/components/fleuriste/about";
import { Ateliers } from "@/components/fleuriste/ateliers";
import { Collections } from "@/components/fleuriste/collections";
import { Contact } from "@/components/fleuriste/contact";
import { Footer } from "@/components/fleuriste/footer";
import { Hero } from "@/components/fleuriste/hero";
import { Nav } from "@/components/fleuriste/nav";
import { Testimonials } from "@/components/fleuriste/testimonials";

export default function Page() {
	return (
		<>
			<Nav />
			<main className="bg-background">
				<Hero />
				<About />
				<Collections />
				<Ateliers />
				<Testimonials />
				<Contact />
				<Footer />
			</main>
		</>
	);
}
