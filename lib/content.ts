export type Testimonial = {
  name: string
  location: string
  rating: number
  text: string
}

// Avis simulés — à remplacer par les vrais avis Google du client.
export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Nadia B.',
    location: 'Aulnay-sous-Bois, Vieux Pays',
    rating: 5,
    text: "Porte claquée un dimanche soir avec mon bébé à l'intérieur. Le serrurier est arrivé en 20 minutes et a ouvert sans rien casser. Prix exactement comme annoncé au téléphone. Merci !",
  },
  {
    name: 'Karim T.',
    location: 'Sevran',
    rating: 5,
    text: "Changement de serrure après un déménagement. Travail propre, conseils utiles sur le niveau de sécurité et devis clair. Je recommande cet artisan sérieux.",
  },
  {
    name: 'Sophie M.',
    location: 'Aulnay-sous-Bois, Les Étangs',
    rating: 5,
    text: "Installation d'une porte blindée. Ponctuel, soigneux et de bon conseil. Aucun frais caché, tout était annoncé à l'avance. Très satisfaite.",
  },
  {
    name: 'David L.',
    location: 'Le Blanc-Mesnil',
    rating: 4,
    text: "Dépannage de mon rideau métallique de commerce en urgence. Intervention rapide qui m'a permis de rouvrir dès le lendemain. Professionnel et réactif.",
  },
]

export type Faq = { question: string; answer: string }

export const HOME_FAQ: Faq[] = [
  {
    question: "Combien coûte une ouverture de porte à Aulnay-sous-Bois ?",
    answer:
      "Pour une porte simplement claquée, le tarif se situe généralement entre 80 € et 130 €. Une porte verrouillée à double tour ou une serrure multipoints peut monter jusqu'à 180 €. Dans tous les cas, le prix exact vous est annoncé avant l'intervention, sans surprise.",
  },
  {
    question: 'Intervenez-vous la nuit et le week-end ?',
    answer:
      "Oui, nous intervenons 24h/24 et 7j/7, y compris les nuits, week-ends et jours fériés. Les éventuelles majorations horaires vous sont toujours communiquées avant que nous commencions.",
  },
  {
    question: 'Le devis est-il vraiment gratuit ?',
    answer:
      "Absolument. Le déplacement pour établir le diagnostic et le devis est gratuit et sans engagement. Vous ne payez que si vous acceptez le tarif proposé.",
  },
  {
    question: "En combien de temps arrivez-vous ?",
    answer:
      "Étant un artisan local basé à Aulnay-sous-Bois, nous intervenons le plus souvent en moins de 30 minutes sur la ville et ses environs immédiats.",
  },
  {
    question: 'Êtes-vous assuré et certifié ?',
    answer:
      "Oui. Nous disposons d'une assurance responsabilité civile professionnelle et d'une garantie décennale. Toutes nos interventions et le matériel posé sont garantis.",
  },
  {
    question: 'Y a-t-il des frais cachés ou une surfacturation ?',
    answer:
      "Non. Notre engagement est la transparence totale : le tarif annoncé avant l'intervention est celui que vous payez. Pas de frais cachés, pas de surfacturation de dernière minute.",
  },
  {
    question: 'Quels moyens de paiement acceptez-vous ?',
    answer:
      "Nous acceptons la carte bancaire, les espèces et, pour les professionnels, le virement. Une facture détaillée vous est systématiquement remise.",
  },
  {
    question: 'Intervenez-vous en dehors d\'Aulnay-sous-Bois ?',
    answer:
      "Oui, nous couvrons les communes limitrophes : Sevran, Villepinte, Le Blanc-Mesnil, Les Pavillons-sous-Bois, Vaujours et Tremblay-en-France, entre autres.",
  },
]

export type WhyUs = { title: string; description: string; icon: string }

export const WHY_US: WhyUs[] = [
  {
    title: 'Artisan local, pas une plateforme',
    description:
      "Vous êtes en contact direct avec votre serrurier à Aulnay-sous-Bois, jamais avec un centre d'appel qui sous-traite.",
    icon: 'MapPin',
  },
  {
    title: 'Aucune sous-traitance',
    description:
      "C'est bien notre artisan qui intervient chez vous, avec le sérieux et la responsabilité que cela implique.",
    icon: 'Handshake',
  },
  {
    title: 'Tarifs annoncés avant intervention',
    description:
      "Vous connaissez le prix exact avant que nous commencions. Pas de surprise, pas de surfacturation.",
    icon: 'BadgeEuro',
  },
  {
    title: 'Interventions garanties',
    description:
      "Le matériel posé et nos prestations sont garantis. Nous assumons la qualité de notre travail.",
    icon: 'ShieldCheck',
  },
]

export type Reassurance = { title: string; icon: string }

export const REASSURANCE: Reassurance[] = [
  { title: 'Intervention sous 30 min', icon: 'Timer' },
  { title: 'Devis gratuit avant intervention', icon: 'FileCheck' },
  { title: 'Tarifs fixes sans surprise', icon: 'BadgeEuro' },
  { title: 'Artisan assuré et certifié', icon: 'ShieldCheck' },
]
