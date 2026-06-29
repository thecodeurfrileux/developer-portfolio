import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://titouanhellegouarch.fr",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 1,
		},
		{
			url: "https://titouanhellegouarch.fr/barber-shop",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: "https://titouanhellegouarch.fr/boulangerie",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: "https://titouanhellegouarch.fr/fleuriste",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
	];
}
