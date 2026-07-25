import { Navbar } from "@/components/boulangerie/navbar";
import { Hero } from "@/components/boulangerie/hero";
import { About } from "@/components/boulangerie/about";
import { Products } from "@/components/boulangerie/products";
import { Gallery } from "@/components/boulangerie/gallery";
import { Testimonials } from "@/components/boulangerie/testimonials";
import { Contact } from "@/components/boulangerie/contact";
import { Footer } from "@/components/boulangerie/footer";

const SITE_URL = "https://titouanhellegouarch.fr";

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "Bakery",
	"@id": "${SITE_URL}/boulangerie#business",
	name: "Maison Lefèvre",
	image: "${SITE_URL}/assets/devanture-boulangerie.jpg",
	url: "${SITE_URL}/boulangerie",
	telephone: "+33652413488",
	priceRange: "€",
	address: {
		"@type": "PostalAddress",
		streetAddress: "38 rue de la Mairie",
		addressLocality: "Treillières",
		postalCode: "44119",
		addressRegion: "Pays de la Loire",
		addressCountry: "FR",
	},
	geo: {
		"@type": "GeoCoordinates",
		latitude: 47.3305,
		longitude: -1.6244,
	},
	openingHoursSpecification: [
		{
			"@type": "OpeningHoursSpecification",
			dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			opens: "07:00",
			closes: "19:30",
		},
		{
			"@type": "OpeningHoursSpecification",
			dayOfWeek: ["Sunday"],
			opens: "07:00",
			closes: "13:00",
		},
	],
	areaServed: [
		{ "@type": "City", name: "Treillières" },
		{ "@type": "City", name: "Sucé-sur-Erdre" },
		{ "@type": "City", name: "Nantes" },
		{ "@type": "City", name: "Sautron" },
		{ "@type": "City", name: "Grandchamp-des-Fontaines" },
		{ "@type": "City", name: "Héric" },
	],
	sameAs: ["https://instagram.com/maison_lefevre_treillieres"],
};

export default function Page() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
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
