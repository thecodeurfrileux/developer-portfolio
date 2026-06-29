"use client";

import { motion } from "framer-motion";

export function Hero() {
	return (
		<section
			id="top"
			className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-36 md:grid-cols-2 md:gap-16 md:pb-28 md:pt-44"
		>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
			>
				<p className="mb-6 text-sm font-light uppercase tracking-[0.25em] text-stone">
					Fleuriste &amp; décoration — Pantin
				</p>
				<h1 className="font-serif text-5xl font-light leading-[1.08] tracking-tight text-ink text-balance sm:text-6xl lg:text-7xl">
					L&apos;art floral,
					<br />à votre porte.
				</h1>
				<p className="mt-7 max-w-md text-lg font-light leading-relaxed text-stone">
					Des bouquets composés à la main et des objets choisis avec soin, pour faire entrer la
					nature et la beauté du quotidien dans votre intérieur.
				</p>
				<a
					href="#collections"
					className="mt-10 inline-flex items-center border border-ink px-8 py-3 text-sm font-light uppercase tracking-[0.15em] text-ink transition-colors duration-300 hover:bg-ink hover:text-background"
				>
					Découvrir les collections
				</a>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
				className="overflow-hidden rounded-md"
			>
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img
					src="/assets/fleuriste.jpg"
					alt="Composition florale dans la lumière du matin"
					className="aspect-[3/4] w-full object-cover"
				/>
			</motion.div>
		</section>
	);
}
