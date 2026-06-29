import { Star } from "lucide-react"

const reviews = [
  {
    quote:
      "Les meilleurs croissants du quartier, sans hésiter. La croûte est parfaite et l'accueil toujours chaleureux. Une vraie institution !",
    name: "Camille Moreau",
    role: "Cliente fidèle",
  },
  {
    quote:
      "On sent l'amour du métier dans chaque produit. Le pain au levain est devenu un incontournable de notre table familiale.",
    name: "Julien Bernard",
    role: "Habitant du quartier",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-secondary/40 py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-primary">
            Ils nous aiment
          </p>
          <h2 className="mt-4 font-heading text-4xl font-semibold leading-tight text-foreground md:text-5xl">
            Ce que disent nos clients
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {reviews.map((review) => (
            <figure
              key={review.name}
              className="flex flex-col rounded-2xl bg-card p-8 shadow-sm"
            >
              <div className="flex gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-5 fill-current" />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-pretty font-heading text-lg italic leading-relaxed text-foreground">
                {`« ${review.quote} »`}
              </blockquote>
              <figcaption className="mt-6">
                <p className="font-medium text-foreground">{review.name}</p>
                <p className="text-sm text-muted-foreground">{review.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
