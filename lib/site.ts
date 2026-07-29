// ---------------------------------------------------------------------------
// Configuration du site — REMPLACER par les vraies informations du client.
// ---------------------------------------------------------------------------
export const SITE = {
	name: "Serrurerie Aulnay Pro",
	legalName: "Serrurerie Aulnay Pro",
	// Numéro de téléphone à remplacer par le vrai numéro du client
	phoneDisplay: "06 52 41 34 88",
	phoneHref: "+33652413488",
	whatsappHref: "https://wa.me/33652413488",
	email: "titouan.hellegouarch2@gmail.com",
	url: "https://titouanhellegouarch.fr/serrurier",
	address: {
		street: "43 bd de Strasbourg",
		city: "Aulnay-sous-Bois",
		postalCode: "93600",
		region: "Seine-Saint-Denis",
		country: "FR",
		lat: 48.9277,
		lng: 2.4905,
	},
	hours: "24h/24 et 7j/7",
	rating: {
		value: 4.9,
		count: 127,
	},
	insurance: "Assurance responsabilité civile et décennale",
} as const;

export const NAV_LINKS = [
	{ label: "Accueil", href: "/serrurier" },
	{ label: "Services", href: "/serrurier/#services" },
	{ label: "Tarifs", href: "/serrurier/#tarifs" },
	{ label: "Zone d'intervention", href: "/serrurier/zone-intervention" },
	{ label: "À propos", href: "/serrurier/a-propos" },
	{ label: "Contact", href: "/serrurier/#contact" },
] as const;
