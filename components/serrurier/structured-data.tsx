import { SITE } from "@/lib/site";
import { CITIES } from "@/lib/cities";

function JsonLd({ data }: { data: Record<string, unknown> }) {
	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
		/>
	);
}

export function LocalBusinessJsonLd() {
	const data = {
		"@context": "https://schema.org",
		"@type": "Locksmith",
		"@id": `${SITE.url}/#business`,
		name: SITE.name,
		image: `${SITE.url}/assets/serrurier/serrurier-intervention.png`,
		url: SITE.url,
		telephone: SITE.phoneHref,
		email: SITE.email,
		priceRange: "€€",
		address: {
			"@type": "PostalAddress",
			streetAddress: SITE.address.street,
			addressLocality: SITE.address.city,
			postalCode: SITE.address.postalCode,
			addressRegion: SITE.address.region,
			addressCountry: SITE.address.country,
		},
		geo: {
			"@type": "GeoCoordinates",
			latitude: SITE.address.lat,
			longitude: SITE.address.lng,
		},
		openingHoursSpecification: {
			"@type": "OpeningHoursSpecification",
			dayOfWeek: [
				"Monday",
				"Tuesday",
				"Wednesday",
				"Thursday",
				"Friday",
				"Saturday",
				"Sunday",
			],
			opens: "00:00",
			closes: "23:59",
		},
		areaServed: CITIES.map((c) => ({
			"@type": "City",
			name: c.name,
		})),
		aggregateRating: {
			"@type": "AggregateRating",
			ratingValue: SITE.rating.value,
			reviewCount: SITE.rating.count,
		},
	};
	return <JsonLd data={data} />;
}

export function ServiceJsonLd({
	name,
	description,
	url,
	priceFrom,
}: {
	name: string;
	description: string;
	url: string;
	priceFrom: number;
}) {
	const data = {
		"@context": "https://schema.org",
		"@type": "Service",
		serviceType: name,
		name,
		description,
		url,
		provider: { "@id": `${SITE.url}/#business` },
		areaServed: { "@type": "City", name: SITE.address.city },
		offers: {
			"@type": "Offer",
			priceCurrency: "EUR",
			price: priceFrom,
		},
	};
	return <JsonLd data={data} />;
}

export function FaqJsonLd({ items }: { items: { question: string; answer: string }[] }) {
	const data = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: items.map((item) => ({
			"@type": "Question",
			name: item.question,
			acceptedAnswer: {
				"@type": "Answer",
				text: item.answer,
			},
		})),
	};
	return <JsonLd data={data} />;
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
	const data = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: items.map((item, i) => ({
			"@type": "ListItem",
			position: i + 1,
			name: item.name,
			item: `${SITE.url}${item.url}`,
		})),
	};
	return <JsonLd data={data} />;
}
