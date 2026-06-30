"use client";

import { motion } from "framer-motion";

const line1 = ["Développeur", "Web", "à", "Aulnay-sous-Bois"];
const line2 = ["Création", "de", "Sites", "Vitrines."];
const line3 = ["Titouan", "Hellégouarch"];

export function Hero() {
	let wordIndex = 0;
	const word = (text: string) => {
		const i = wordIndex++;
		return (
			<motion.span
				key={text + i}
				className="inline-block"
				initial={{ opacity: 0, y: 24 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					duration: 0.6,
					delay: i * 0.15,
					ease: [0.21, 0.47, 0.32, 0.98],
				}}
			>
				{text}&nbsp;
			</motion.span>
		);
	};

	return (
		<section
			id="top"
			className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-36 md:grid-cols-2 md:pt-44"
		>
			<div>
				<h1 className="font-heading text-4xl font-light leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
					<span className="block">{line1.map(word)}</span>
					<span className="block">{line2.map(word)}</span>
					<span className="block">{line3.map(word)}</span>
				</h1>

				<motion.p
					className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground"
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 1 }}
				>
					Sites vitrines pour commerces de proximité —{" "}
					<span className="text-foreground">à partir de 600€ ou 100€/mois</span>.
				</motion.p>

				<motion.div
					className="mt-9 flex flex-wrap gap-4"
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 1.15 }}
				>
					<a
						href="#projets"
						className="rounded-full bg-dark px-7 py-3 text-sm font-medium text-dark-foreground transition-opacity hover:opacity-90"
					>
						Voir mes projets
					</a>
					<a
						href="#contact"
						className="rounded-full border border-foreground/25 px-7 py-3 text-sm font-medium text-foreground transition-colors hover:border-foreground/60"
					>
						Me contacter
					</a>
				</motion.div>
			</div>

			<motion.div
				className="relative aspect-square w-full overflow-hidden rounded-[2rem] bg-dark/95"
				initial={{ opacity: 0, scale: 0.96 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.9, delay: 0.4 }}
			>
				<img
					src="/assets/pdp.png"
					alt="Titouan Hellégouarch, développeur web à Aulnay-sous-Bois"
					className="h-full w-full object-cover"
				/>
			</motion.div>
		</section>
	);
}
