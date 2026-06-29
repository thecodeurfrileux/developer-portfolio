import { Navbar } from "@/components/boulangerie/navbar";
import { Hero } from "@/components/boulangerie/hero";
import { About } from "@/components/boulangerie/about";
import { Products } from "@/components/boulangerie/products";
import { Gallery } from "@/components/boulangerie/gallery";
import { Testimonials } from "@/components/boulangerie/testimonials";
import { Contact } from "@/components/boulangerie/contact";
import { Footer } from "@/components/boulangerie/footer";

export default function Page() {
	return (
		<>
			<Navbar />
			<main>
				<Hero />
				<About />
				<Products />
				<Gallery />
				<Testimonials />
				<Contact />
			</main>
			<Footer />
		</>
	);
}
