"use client";

import { motion } from "framer-motion";

const stats = [
	{ value: "3", label: "sites livrés" },
	{ value: "700€", label: "à partir de" },
	{ value: "1 semaine", label: "de délai" },
];

export function StatsBar() {
	return (
		<section className="w-full bg-dark text-dark-foreground">
			<div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-12 text-center sm:grid-cols-3">
				{stats.map((stat, i) => (
					<motion.div
						key={stat.label}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: false, amount: 0.2 }}
						transition={{ duration: 0.6, delay: i * 0.1 }}
					>
						<div className="font-heading text-4xl font-light text-gold sm:text-5xl">
							{stat.value}
						</div>
						<div className="mt-2 text-sm text-dark-foreground/70">{stat.label}</div>
					</motion.div>
				))}
			</div>
		</section>
	);
}
