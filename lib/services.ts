export type Service = {
  slug: string
  title: string
  shortTitle: string
  icon: string
  priceFrom: number
  priceTo: number
  excerpt: string
  // Contenu unique de la page dédiée (300-400 mots répartis en paragraphes)
  intro: string
  paragraphs: string[]
  bullets: string[]
  faq: { question: string; answer: string }[]
}

export const SERVICES: Service[] = [
  {
    slug: 'ouverture-de-porte',
    title: 'Ouverture de porte claquée ou fermée à clé',
    shortTitle: 'Ouverture de porte',
    icon: 'DoorOpen',
    priceFrom: 80,
    priceTo: 180,
    excerpt:
      "Porte claquée ou clé perdue ? Ouverture rapide et sans dégât dans la plupart des cas.",
    intro:
      "Vous êtes bloqué devant votre porte à Aulnay-sous-Bois ? Notre serrurier intervient en urgence pour ouvrir votre porte claquée ou fermée à clé, de jour comme de nuit, sans rendez-vous.",
    paragraphs: [
      "Une porte claquée se produit lorsque le pêne demi-tour s'est enclenché sans que la serrure ait été verrouillée à clé. Dans ce cas, l'ouverture est généralement rapide et non destructive : nous utilisons des techniques professionnelles (radiographie, crochetage) qui préservent votre porte et votre serrure. La majorité de nos interventions à Aulnay-sous-Bois se règlent en moins de trente minutes.",
      "Lorsque la porte est fermée à clé, verrouillée à double tour ou équipée d'une serrure multipoints, l'intervention demande davantage de savoir-faire. Notre artisan évalue toujours la situation avant d'agir et vous annonce le tarif exact avant de commencer. Aucune manœuvre destructive n'est engagée sans votre accord préalable.",
      "Que vous habitiez au Vieux Pays, aux Étangs, à la Rose des Vents ou dans une commune voisine comme Sevran ou Villepinte, nous nous déplaçons rapidement avec le matériel nécessaire pour vous dépanner dans les meilleures conditions.",
    ],
    bullets: [
      'Ouverture non destructive privilégiée',
      "Intervention 24h/24 et 7j/7",
      'Diagnostic et devis gratuit sur place',
      'Aucune surfacturation de nuit non annoncée',
    ],
    faq: [
      {
        question: "Combien coûte une ouverture de porte à Aulnay-sous-Bois ?",
        answer:
          "Pour une porte claquée, comptez généralement entre 80 € et 130 €. Une porte verrouillée à double tour ou une serrure multipoints peut aller jusqu'à 180 €. Le tarif exact vous est toujours annoncé avant l'intervention.",
      },
      {
        question: "L'ouverture va-t-elle abîmer ma porte ?",
        answer:
          "Dans la grande majorité des cas, nous ouvrons sans dégât. Une ouverture destructive n'est envisagée qu'en dernier recours et uniquement avec votre accord.",
      },
    ],
  },
  {
    slug: 'changement-serrure',
    title: 'Changement de serrure et de cylindre',
    shortTitle: 'Changement de serrure',
    icon: 'KeyRound',
    priceFrom: 90,
    priceTo: 350,
    excerpt:
      "Remplacement de cylindre ou de serrure complète, toutes marques, avec fourniture.",
    intro:
      "Serrure forcée, clé perdue, emménagement : nous remplaçons votre cylindre ou votre serrure complète à Aulnay-sous-Bois, toutes marques et tous niveaux de sécurité.",
    paragraphs: [
      "Changer de serrure est indispensable après un cambriolage, une tentative d'effraction, la perte de vos clés ou un emménagement. Le remplacement du seul cylindre (le barillet) suffit souvent et représente la solution la plus économique. Nous vous conseillons sur le niveau de sécurité adapté : cylindre standard, à protection anti-crochetage, anti-perçage ou débrayable.",
      "Pour les serrures multipoints (3, 5 ou 7 points), nous intervenons sur les principales marques du marché et vous proposons du matériel certifié A2P lorsque vous souhaitez renforcer votre sécurité. Chaque devis détaille le prix de la main-d'œuvre et de la fourniture, sans frais caché.",
      "Nos interventions sont garanties et nous vous remettons toujours les nouvelles clés en main propre. Nous desservons l'ensemble d'Aulnay-sous-Bois ainsi que Le Blanc-Mesnil, Les Pavillons-sous-Bois et les communes limitrophes du 93.",
    ],
    bullets: [
      'Cylindres et serrures multipoints toutes marques',
      'Matériel certifié A2P disponible',
      'Fourniture et pose au tarif annoncé',
      'Intervention garantie',
    ],
    faq: [
      {
        question: 'Faut-il changer toute la serrure ou seulement le cylindre ?',
        answer:
          "Dans la plupart des cas, remplacer uniquement le cylindre suffit et coûte moins cher. Le changement complet est recommandé si le mécanisme est endommagé ou après une effraction.",
      },
    ],
  },
  {
    slug: 'porte-blindee',
    title: 'Installation de porte blindée',
    shortTitle: 'Porte blindée',
    icon: 'ShieldCheck',
    priceFrom: 1200,
    priceTo: 3500,
    excerpt:
      "Pose de porte blindée certifiée pour renforcer durablement la sécurité de votre logement.",
    intro:
      "Protégez votre domicile à Aulnay-sous-Bois avec une porte blindée certifiée, posée par un artisan qualifié et adaptée à votre logement.",
    paragraphs: [
      "Une porte blindée constitue la protection la plus efficace contre les tentatives d'effraction. Elle associe un bloc-porte renforcé, une serrure multipoints certifiée A2P et des paumelles anti-dégondage. Nous étudions votre configuration (appartement, maison, dimensions du cadre) pour vous proposer la solution la plus adaptée.",
      "Nous vous accompagnons dans le choix du niveau de certification (BP1, BP2, BP3) et de la finition esthétique afin que la porte s'intègre parfaitement à votre intérieur. L'installation est réalisée dans les règles de l'art, avec un ajustement précis du bâti.",
      "Chaque devis est gratuit et détaillé. Nous intervenons dans tout Aulnay-sous-Bois et les villes voisines de Seine-Saint-Denis pour la pose comme pour l'entretien de votre porte blindée.",
    ],
    bullets: [
      'Blocs-portes certifiés A2P BP1 à BP3',
      'Étude et devis gratuits à domicile',
      'Pose soignée par un artisan qualifié',
      'Large choix de finitions',
    ],
    faq: [
      {
        question: 'Quel est le prix d\'une porte blindée ?',
        answer:
          "Le budget dépend du niveau de certification et des finitions. Comptez généralement de 1 200 € pour un blindage de porte à plus de 3 500 € pour un bloc-porte blindé haut de gamme, pose comprise.",
      },
    ],
  },
  {
    slug: 'rideau-metallique',
    title: 'Réparation de rideau métallique',
    shortTitle: 'Rideau métallique',
    icon: 'Store',
    priceFrom: 150,
    priceTo: 900,
    excerpt:
      "Dépannage et réparation de rideaux métalliques de commerce, bloqués ou forcés.",
    intro:
      "Rideau métallique bloqué, déraillé ou forcé ? Nous dépannons les commerçants d'Aulnay-sous-Bois en urgence pour sécuriser votre local.",
    paragraphs: [
      "Un rideau métallique en panne peut immobiliser votre activité et exposer votre commerce. Nous intervenons rapidement pour diagnostiquer la panne : lames voilées, moteur défaillant, axe déraillé, serrure forcée ou tablier bloqué.",
      "Selon le diagnostic, nous procédons à la réparation ou au remplacement des pièces défectueuses (moteur, lames, verrous, treuil de secours). Notre objectif est de remettre votre rideau en service le plus vite possible et de sécuriser votre local dans l'immédiat.",
      "Nous assurons aussi la maintenance préventive pour éviter les pannes. Interventions dans toute la zone commerçante d'Aulnay-sous-Bois et des communes voisines.",
    ],
    bullets: [
      'Dépannage urgent pour commerçants',
      'Réparation moteur, lames et serrures',
      'Sécurisation immédiate du local',
      'Contrats de maintenance possibles',
    ],
    faq: [
      {
        question: 'Intervenez-vous en urgence pour un commerce ?',
        answer:
          'Oui, nous priorisons les rideaux métalliques bloqués ou forcés afin de sécuriser votre commerce dans les plus brefs délais, y compris le week-end.',
      },
    ],
  },
  {
    slug: 'ouverture-coffre-fort',
    title: 'Ouverture de coffre-fort',
    shortTitle: 'Coffre-fort',
    icon: 'Vault',
    priceFrom: 150,
    priceTo: 600,
    excerpt:
      "Ouverture de coffre-fort bloqué ou dont la combinaison est perdue, sans forcer si possible.",
    intro:
      "Coffre-fort bloqué ou combinaison oubliée ? Notre serrurier ouvre votre coffre à Aulnay-sous-Bois avec méthode et discrétion.",
    paragraphs: [
      "L'ouverture d'un coffre-fort demande une expertise spécifique. Que la panne provienne d'une serrure mécanique grippée, d'un clavier électronique défaillant ou d'une combinaison perdue, nous privilégions toujours une ouverture non destructive lorsque cela est possible.",
      "Nous vous demandons systématiquement un justificatif de propriété avant toute intervention, pour votre sécurité et la nôtre. Le diagnostic est réalisé sur place et le tarif est annoncé avant d'agir.",
      "Après ouverture, nous pouvons remettre en état le mécanisme ou reprogrammer votre serrure à combinaison. Intervention discrète à Aulnay-sous-Bois et dans le 93.",
    ],
    bullets: [
      'Ouverture non destructive privilégiée',
      'Coffres mécaniques et électroniques',
      'Justificatif de propriété demandé',
      'Reprogrammation possible',
    ],
    faq: [
      {
        question: "Que faut-il fournir pour ouvrir un coffre-fort ?",
        answer:
          "Un justificatif de propriété (facture, contrat, pièce d'identité) est indispensable avant toute ouverture de coffre-fort.",
      },
    ],
  },
  {
    slug: 'serrurerie-automobile',
    title: 'Serrurerie automobile',
    shortTitle: 'Serrurerie auto',
    icon: 'Car',
    priceFrom: 90,
    priceTo: 250,
    excerpt:
      "Clés enfermées dans la voiture ou perdues ? Ouverture et reproduction de clés auto.",
    intro:
      "Clés enfermées dans votre véhicule ou perdues ? Nous ouvrons votre voiture et reproduisons vos clés à Aulnay-sous-Bois.",
    paragraphs: [
      "Rester bloqué avec ses clés à l'intérieur du véhicule est une situation fréquente. Nous ouvrons votre voiture sans endommager les portières ni les serrures, grâce à des outils adaptés aux véhicules récents comme anciens.",
      "En cas de perte totale des clés, nous pouvons reproduire ou reprogrammer une clé selon le modèle et le niveau d'équipement (clé à puce, télécommande). Le diagnostic est indispensable pour vous proposer la solution la plus adaptée.",
      "Nous intervenons sur voirie ou parking dans tout Aulnay-sous-Bois et ses environs, sur simple appel.",
    ],
    bullets: [
      'Ouverture sans dégât du véhicule',
      'Reproduction de clés à puce',
      'Intervention sur place',
      'Devis annoncé avant intervention',
    ],
    faq: [
      {
        question: 'Pouvez-vous ouvrir tous les modèles de voiture ?',
        answer:
          "Nous ouvrons la majorité des véhicules. Pour certains modèles très récents, un diagnostic est nécessaire afin de choisir la méthode adaptée sans risque pour l'électronique.",
      },
    ],
  },
  {
    slug: 'blindage-de-porte',
    title: 'Blindage de porte',
    shortTitle: 'Blindage de porte',
    icon: 'Shield',
    priceFrom: 700,
    priceTo: 1800,
    excerpt:
      "Renforcez votre porte existante avec un blindage et une serrure haute sécurité.",
    intro:
      "Renforcez votre porte actuelle à Aulnay-sous-Bois avec un blindage de porte : une alternative économique à la porte blindée complète.",
    paragraphs: [
      "Le blindage consiste à renforcer votre porte existante avec une tôle d'acier, des cornières anti-pince et une serrure multipoints certifiée. C'est une solution efficace et plus abordable que le remplacement complet du bloc-porte, tout en offrant un excellent niveau de protection.",
      "Nous étudions l'état de votre porte et de son bâti pour vérifier que le blindage est adapté, puis nous vous proposons un devis clair. Le blindage pivot ou à recouvrement est choisi selon votre configuration.",
      "Nos poses sont garanties et réalisées proprement. Nous desservons Aulnay-sous-Bois et les communes limitrophes du 93.",
    ],
    bullets: [
      'Alternative économique à la porte blindée',
      'Tôle acier + serrure multipoints A2P',
      'Cornières anti-pince',
      'Devis gratuit et détaillé',
    ],
    faq: [
      {
        question: 'Blindage ou porte blindée : que choisir ?',
        answer:
          "Le blindage renforce votre porte actuelle à moindre coût. La porte blindée remplace l'ensemble du bloc-porte pour une sécurité maximale. Nous vous conseillons selon votre budget et votre porte existante.",
      },
    ],
  },
  {
    slug: 'volet-roulant',
    title: 'Dépannage de volet roulant',
    shortTitle: 'Volet roulant',
    icon: 'PanelTopClose',
    priceFrom: 90,
    priceTo: 500,
    excerpt:
      "Volet roulant bloqué, coincé ou moteur en panne : réparation rapide à domicile.",
    intro:
      "Volet roulant bloqué ou moteur en panne à Aulnay-sous-Bois ? Nous réparons manuel et électrique, à domicile.",
    paragraphs: [
      "Un volet roulant peut se bloquer pour plusieurs raisons : lames sorties des coulisses, sangle cassée, moteur ou télécommande défaillants, ou volet forcé. Nous établissons un diagnostic précis avant toute réparation.",
      "Selon la panne, nous remplaçons la sangle, l'axe, le tablier, le moteur ou les pièces de manœuvre. Pour les volets motorisés, nous intervenons sur les principales marques et pouvons reprogrammer vos télécommandes.",
      "En cas de volet forcé lors d'une tentative d'effraction, nous sécurisons l'ouverture dans l'immédiat. Interventions à domicile dans tout Aulnay-sous-Bois et le 93.",
    ],
    bullets: [
      'Volets manuels et motorisés',
      'Remplacement sangle, axe, moteur',
      'Sécurisation après effraction',
      'Reprogrammation télécommandes',
    ],
    faq: [
      {
        question: 'Réparez-vous les volets roulants électriques ?',
        answer:
          'Oui, nous intervenons sur les volets manuels et motorisés : moteur, télécommande, tablier ou lames. Un diagnostic sur place permet de chiffrer précisément la réparation.',
      },
    ],
  },
]

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug)
}
