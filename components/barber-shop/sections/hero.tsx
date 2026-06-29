import { MapPin } from "lucide-react";

export function Hero() {
	return (
		<section id="hero" className="relative flex min-h-[100svh] items-center overflow-hidden">
			{/* Background */}
			<img
				src="https://picsum.photos/seed/barber93hero/1600/2000"
				alt="Intérieur du barbershop Barber 93"
				className="absolute inset-0 size-full object-cover"
			/>
			<div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background" />
			<div className="absolute inset-0 bg-background/40" />

			<div className="relative mx-auto w-full max-w-6xl px-4 pt-24 pb-16 md:px-6">
				<div className="flex items-center gap-2 text-sm font-medium uppercase tracking-[0.25em] text-primary">
					<MapPin className="size-4" aria-hidden="true" />
					Aulnay-sous-Bois · 93600
				</div>

				<h1 className="mt-4 font-heading text-7xl leading-[0.9] tracking-wide text-balance sm:text-8xl md:text-[10rem]">
					Barber<span className="text-primary"> 93</span>
				</h1>

				<p className="mt-4 max-w-md font-heading text-3xl tracking-wide text-foreground/90 sm:text-4xl">
					Le style, c&apos;est sérieux.
				</p>

				<p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">
					Coupes nettes, dégradés précis et taille de barbe au millimètre. Le barbershop du
					quartier qui prend soin de ton style comme de sa réputation.
				</p>

				<div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
					<a
						href="tel:+33652413488"
						className="inline-flex items-center justify-center rounded-sm bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-transform hover:-translate-y-0.5"
					>
						Prendre rendez-vous
					</a>
					<a
						href="#services"
						className="inline-flex items-center justify-center rounded-sm border border-border px-8 py-4 text-sm font-semibold uppercase tracking-wider text-foreground transition-colors hover:border-primary hover:text-primary"
					>
						Voir les prestations
					</a>
				</div>
			</div>
		</section>
	);
}
