export type City = {
  slug: string
  name: string
  postalCode: string
  intro: string
  paragraphs: string[]
}

export const CITIES: City[] = [
  {
    slug: 'aulnay-sous-bois',
    name: 'Aulnay-sous-Bois',
    postalCode: '93600',
    intro:
      "Serrurier de proximité à Aulnay-sous-Bois, nous intervenons dans tous les quartiers de la ville, du Vieux Pays à la Rose des Vents.",
    paragraphs: [
      "Basés à Aulnay-sous-Bois, nous connaissons parfaitement la ville et ses quartiers : le Vieux Pays, les Étangs, Émaüs, le Gros Saule, Balagny ou encore la Rose des Vents. Cette proximité nous permet d'intervenir rapidement, souvent en moins de trente minutes, pour tout dépannage de serrurerie.",
      "Ouverture de porte, changement de serrure, pose de porte blindée, dépannage de rideau métallique ou de volet roulant : nous couvrons l'ensemble des besoins des particuliers et des commerçants aulnaysiens, 24h/24 et 7j/7, avec des tarifs annoncés avant chaque intervention.",
    ],
  },
  {
    slug: 'villepinte',
    name: 'Villepinte',
    postalCode: '93420',
    intro:
      "Dépannage serrurerie à Villepinte : intervention rapide en urgence, ouverture de porte et changement de serrure.",
    paragraphs: [
      "Commune voisine d'Aulnay-sous-Bois, Villepinte fait partie de notre zone d'intervention prioritaire. Nous nous y déplaçons rapidement pour tout dépannage urgent, de jour comme de nuit.",
      "Que vous soyez bloqué dehors, victime d'une effraction ou que vous souhaitiez renforcer votre sécurité, notre serrurier vous accompagne avec transparence et sans surfacturation.",
    ],
  },
  {
    slug: 'sevran',
    name: 'Sevran',
    postalCode: '93270',
    intro:
      "Serrurier à Sevran : urgence 24/7, ouverture de porte, remplacement de serrure et blindage.",
    paragraphs: [
      "Sevran est directement limitrophe d'Aulnay-sous-Bois, ce qui nous permet d'y intervenir en quelques minutes. Nous dépannons les particuliers comme les professionnels pour toutes vos urgences de serrurerie.",
      "Nos artisans interviennent avec du matériel professionnel et vous remettent un devis clair avant chaque prestation, sans mauvaise surprise.",
    ],
  },
  {
    slug: 'le-blanc-mesnil',
    name: 'Le Blanc-Mesnil',
    postalCode: '93150',
    intro:
      "Serrurier au Blanc-Mesnil : dépannage en urgence et interventions sur rendez-vous.",
    paragraphs: [
      "Nous couvrons Le Blanc-Mesnil pour l'ensemble de nos prestations : dépannage d'urgence, sécurisation après effraction, changement de serrure et installation de portes blindées.",
      "Notre approche reste la même partout : proximité, transparence tarifaire et travail soigné, sans sous-traitance.",
    ],
  },
  {
    slug: 'les-pavillons-sous-bois',
    name: 'Les Pavillons-sous-Bois',
    postalCode: '93320',
    intro:
      "Serrurier aux Pavillons-sous-Bois : intervention rapide 24h/24 pour vos urgences.",
    paragraphs: [
      "Les Pavillons-sous-Bois font partie de nos communes desservies au quotidien. Nous y intervenons pour les ouvertures de porte, les changements de serrure et le renforcement de sécurité.",
      "Un seul numéro à appeler, un artisan qui se déplace et un tarif annoncé à l'avance : c'est notre engagement.",
    ],
  },
  {
    slug: 'vaujours',
    name: 'Vaujours',
    postalCode: '93410',
    intro:
      "Serrurier à Vaujours : dépannage serrurerie de proximité, urgence et rendez-vous.",
    paragraphs: [
      "À Vaujours, nous mettons notre savoir-faire au service des habitants pour tous les dépannages de serrurerie et travaux de sécurisation.",
      "Notre serrurier se déplace rapidement et vous conseille sur les meilleures solutions adaptées à votre logement et à votre budget.",
    ],
  },
  {
    slug: 'tremblay-en-france',
    name: 'Tremblay-en-France',
    postalCode: '93290',
    intro:
      "Serrurier à Tremblay-en-France : urgence 24/7 et interventions sur rendez-vous.",
    paragraphs: [
      "Tremblay-en-France fait partie de notre zone d'intervention élargie autour d'Aulnay-sous-Bois. Nous y assurons dépannages et installations avec le même niveau d'exigence.",
      "Transparence des tarifs, matériel de qualité et interventions garanties : vous êtes entre de bonnes mains.",
    ],
  },
]

export function getCity(slug: string) {
  return CITIES.find((c) => c.slug === slug)
}
