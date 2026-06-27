"use client";

import { FadeIn } from "./fade-in";

const skills = ["HTML", "CSS", "JavaScript", "Next.js", "WordPress"];

export function About() {
	return (
		<section id="apropos" className="mx-auto max-w-6xl px-6 py-24">
			<div className="grid items-center gap-12 md:grid-cols-2">
				<FadeIn>
					<div className="overflow-hidden rounded-2xl">
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img
							src="/assets/pdp.png"
							alt="Portrait de Titouan Hellégouarch"
							className="aspect-[4/5] w-full object-cover"
						/>
					</div>
				</FadeIn>

				<FadeIn delay={0.15}>
					<h2 className="font-heading text-4xl font-light tracking-tight text-foreground sm:text-5xl">
						À propos
					</h2>
					<div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
						<p>
							Je m'appelle Titouan. J'ai appris à coder à l'École 42, puis j'ai passé plusieurs
							années dans l'hôtellerie et le service client — à l'écoute des gens, de leurs
							besoins, de leurs contraintes du quotidien.
						</p>
						<p>
							Ce double parcours me donne un regard que peu de développeurs ont : je comprends
							autant le code que le commerçant derrière son comptoir. Aujourd'hui, je crée des
							sites pour les indépendants et commerces de proximité — des outils qui leur
							ressemblent, qui inspirent confiance et qui travaillent pour eux même quand ils
							ont le dos tourné.
						</p>
					</div>

					<ul className="mt-8 flex flex-wrap gap-2">
						{skills.map((skill) => (
							<li
								key={skill}
								className="rounded-full border border-border bg-card px-4 py-1.5 text-sm text-foreground"
							>
								{skill}
							</li>
						))}
					</ul>
				</FadeIn>
			</div>
		</section>
	);
}
