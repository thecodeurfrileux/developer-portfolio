"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "./fade-in";

const projects = [
	{
		name: "Serrurier Aulnay Pro",
		description:
			"Site vitrine de serrurier à Aulnay-sous-Bois, pensé pour les demandes de devis et les urgences.",
		image: "/assets/serrurier/serrurier-intervention.avif",
		href: "/serrurier",
	},
	{
		name: "Barber 93",
		description:
			"1er site référencé sur google de barber dans le 93. Design moderne, prise de rdv par telephone",
		image: "/assets/portfolio/coupe-cheveux.avif",
		href: "/barber-shop",
	},
	{
		name: "Maison Lefèvre",
		description:
			"Site vitrine d'une boulangerie chaleureuse à Treillieres avec horaires et carte des pains.",
		image: "/assets/portfolio/pain.avif",
		href: "/boulangerie",
	},
	{
		name: "Fleuriste du Marché",
		description:
			"Site vitrine pour fleuriste à Aulnay-sous-Bois — identité élégante, menu en ligne et réservation.",
		image: "/assets/portfolio/fleuriste-portofolio.avif",
		href: "/fleuriste",
	},
];

const portfolioProject = {
	name: "Mon portfolio",
	description:
		"Découvrez mon univers, mes services et les réalisations créées pour les commerces.",
	image: "/assets/portfolio/pdp.avif",
	href: "/",
};

export function Projects({ notFound = false }: { notFound?: boolean }) {
	const displayedProjects = notFound ? [portfolioProject, ...projects] : projects;
	return (
		<section
			id="projets"
			className={notFound ? "not-found-projects" : "mx-auto max-w-6xl px-6 py-24"}
		>
			<FadeIn>
				<h2
					className={
						notFound
							? "not-found-projects-heading"
							: "font-heading text-4xl font-light tracking-tight text-foreground sm:text-5xl"
					}
				>
					Mes réalisations
				</h2>
			</FadeIn>

			<div
				className={notFound ? "not-found-projects-grid" : "mt-12 grid gap-8 md:grid-cols-3"}
			>
				{displayedProjects.map((project, i) => (
					<motion.a
						key={project.name}
						href={project.href}
						target={notFound ? undefined : "_blank"}
						rel={notFound ? undefined : "noopener noreferrer"}
						className={
							notFound
								? "not-found-project-card"
								: "group block rounded-2xl border border-transparent p-3 transition-colors hover:border-border"
						}
						initial={notFound ? false : { opacity: 0, y: 20 }}
						whileInView={notFound ? undefined : { opacity: 1, y: 0 }}
						viewport={{ once: false, amount: 0.2 }}
						transition={notFound ? { duration: 0 } : { duration: 0.6, delay: i * 0.12 }}
						whileHover={notFound ? undefined : { scale: 1.02 }}
					>
						<div
							className={notFound ? "not-found-project-image" : "overflow-hidden rounded-xl"}
						>
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img
								src={project.image || "/placeholder.svg"}
								alt={`Aperçu du site ${project.name}`}
								loading={notFound ? "lazy" : undefined}
								decoding="async"
								className={
									notFound
										? "not-found-project-image-element"
										: "aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
								}
							/>
						</div>
						<div className={notFound ? "not-found-project-content" : "px-1 pt-5"}>
							<h3
								className={
									notFound
										? "not-found-project-title"
										: "font-heading text-2xl font-medium text-foreground"
								}
							>
								{project.name}
							</h3>
							<p
								className={
									notFound
										? "not-found-project-description"
										: "mt-2 text-sm leading-relaxed text-muted-foreground"
								}
							>
								{project.description}
							</p>
							<span
								className={
									notFound
										? "not-found-project-link"
										: "mt-4 inline-flex items-center gap-1 text-sm font-medium text-foreground"
								}
							>
								Voir le site
								<ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
							</span>
						</div>
					</motion.a>
				))}
			</div>
		</section>
	);
}
