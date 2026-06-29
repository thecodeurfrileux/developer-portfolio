"use client";

import { motion } from "framer-motion";

const line1 = ["Je", "crée", "des", "sites"];
const line2 = ["pour", "les", "commerces", "de", "ma", "ville."];
const line3 = ["Pensés", "pour", "attirer", "des", "clients."];

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
					<span className="text-foreground">à partir de 600€ ou 60€/mois</span>.
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
				className="relative aspect-square w-full"
				initial={{ opacity: 0, scale: 0.96 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.9, delay: 0.4 }}
			>
				<div className="absolute inset-0 rounded-[2rem] bg-dark/95" />
				<div className="absolute inset-6 rounded-[1.5rem] border border-dark-foreground/15" />
				<motion.div
					className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/50"
					animate={{ rotate: 360 }}
					transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
				/>
				<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-heading text-7xl font-light text-gold">
					TH
				</div>
			</motion.div>
		</section>
	);
}
