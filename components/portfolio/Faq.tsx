"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { faqs } from "../../lib/faq-data";

export function Faq() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	return (
		<section id="faq" className="mx-auto max-w-3xl px-6 py-20">
			<motion.h2
				className="font-heading text-3xl font-light tracking-tight text-foreground sm:text-4xl"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: false, amount: 0.3 }}
				transition={{ duration: 0.6 }}
			>
				Questions fréquentes
			</motion.h2>
			<motion.p
				className="mt-3 text-muted-foreground"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: false, amount: 0.3 }}
				transition={{ duration: 0.6, delay: 0.1 }}
			>
				Tout ce que les commerçants me demandent avant de se lancer.
			</motion.p>

			<div className="mt-10 divide-y divide-foreground/10 border-y border-foreground/10">
				{faqs.map((faq, index) => {
					const isOpen = openIndex === index;
					return (
						<motion.div
							key={faq.question}
							initial={{ opacity: 0, y: 16 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: false, amount: 0.3 }}
							transition={{ duration: 0.5, delay: index * 0.05 }}
						>
							<button
								onClick={() => setOpenIndex(isOpen ? null : index)}
								className="flex w-full items-center justify-between gap-4 py-5 text-left"
								aria-expanded={isOpen}
							>
								<span className="font-medium text-foreground">{faq.question}</span>
								<span
									className={`shrink-0 text-xl text-gold transition-transform duration-300 ${
										isOpen ? "rotate-45" : "rotate-0"
									}`}
								>
									+
								</span>
							</button>
							<motion.div
								initial={false}
								animate={{
									height: isOpen ? "auto" : 0,
									opacity: isOpen ? 1 : 0,
								}}
								transition={{ duration: 0.3, ease: "easeInOut" }}
								className="overflow-hidden"
							>
								<p className="pb-5 pr-10 leading-relaxed text-muted-foreground">
									{faq.answer}
								</p>
							</motion.div>
						</motion.div>
					);
				})}
			</div>
		</section>
	);
}
