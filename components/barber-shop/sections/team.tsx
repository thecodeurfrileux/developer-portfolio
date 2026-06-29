import { Reveal } from "@/components/barber-shop/reveal";
import { InstagramIcon } from "@/components/barber-shop/instagram-icon";

const TEAM = [
	{
		name: "Karim",
		role: "Fondateur · Maître barbier",
		seed: "karimbarber",
		bio: "Spécialiste du dégradé propre et des contours au rasoir. La précision, c’est sa signature.",
	},
	{
		name: "Dylan",
		role: "Barbier · Expert barbe",
		seed: "dylanbarber",
		bio: "Le roi de la barbe taillée et du soin serviette chaude. Bonne humeur garantie.",
	},
];

export function Team() {
	return (
		<section id="team" className="border-t border-border py-20 md:py-28">
			<div className="mx-auto max-w-6xl px-4 md:px-6">
				<Reveal className="max-w-2xl">
					<p className="text-sm font-medium uppercase tracking-[0.25em] text-primary">
						L&apos;équipe
					</p>
					<h2 className="mt-3 font-heading text-5xl leading-none tracking-wide text-balance md:text-6xl">
						Les mains du shop
					</h2>
					<p className="mt-4 leading-relaxed text-muted-foreground">
						Deux barbiers, une même obsession : que tu repartes frais et confiant.
					</p>
				</Reveal>

				<div className="mt-12 grid gap-6 sm:grid-cols-2">
					{TEAM.map((member, i) => (
						<Reveal
							key={member.name}
							delay={i * 120}
							className="group flex items-center gap-5 rounded-sm border border-border bg-card p-5 transition-colors hover:border-primary sm:p-6"
						>
							<img
								src={`https://picsum.photos/seed/${member.seed}/300/300`}
								alt={`Portrait de ${member.name}, barbier chez Barber 93`}
								className="size-24 shrink-0 rounded-sm object-cover grayscale transition-all duration-500 group-hover:grayscale-0 sm:size-28"
							/>
							<div>
								<h3 className="font-heading text-4xl leading-none tracking-wide">
									{member.name}
								</h3>
								<p className="mt-1 text-xs font-medium uppercase tracking-wider text-primary">
									{member.role}
								</p>
								<p className="mt-2 text-sm leading-relaxed text-muted-foreground">
									{member.bio}
								</p>
								<a
									href="#"
									className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary"
								>
									<InstagramIcon className="size-4" />@{member.name.toLowerCase()}.barber93
								</a>
							</div>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}
