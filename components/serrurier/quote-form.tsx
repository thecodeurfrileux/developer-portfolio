"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { CheckCircle2, Phone, Send } from "lucide-react";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/lib/services";

export function QuoteForm() {
	const pathname = usePathname();
	const [submitted, setSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setLoading(true);
		setError(false);

		const form = e.currentTarget;
		const nom = (form.elements.namedItem("name") as HTMLInputElement).value;
		const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
		const serviceField = form.elements.namedItem("service") as HTMLSelectElement;
		const service = serviceField.selectedOptions[0]?.textContent?.trim() || serviceField.value;
		const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					nom,
					email: "Non renseigné",
					message: `Téléphone : ${phone}\n\nMessage : ${message || "Non renseigné"}`,
					source: pathname,
					raison: service,
				}),
			});

			if (res.ok) {
				setSubmitted(true);
				form.reset();
			} else {
				setError(true);
			}
		} catch {
			setError(true);
		} finally {
			setLoading(false);
		}
	}

	if (submitted) {
		return (
			<div className="rounded-xl border border-border bg-card p-8 text-center">
				<div className="mx-auto flex size-14 items-center justify-center rounded-full bg-accent/15 text-accent">
					<CheckCircle2 className="size-7" aria-hidden="true" />
				</div>
				<h3 className="mt-4 font-heading text-xl font-semibold text-foreground">
					Demande envoyée
				</h3>
				<p className="mt-2 text-sm text-muted-foreground">
					Merci ! Nous vous rappelons rapidement. Pour une urgence, appelez-nous directement.
				</p>
				<a
					href={`tel:${SITE.phoneHref}`}
					className="mt-5 inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-accent px-6 text-sm font-semibold text-accent-foreground"
				>
					<Phone className="size-5" aria-hidden="true" />
					{SITE.phoneDisplay}
				</a>
			</div>
		);
	}

	return (
		<form
			onSubmit={handleSubmit}
			className="rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8"
		>
			<div className="grid gap-4 sm:grid-cols-2">
				<div className="sm:col-span-1">
					<label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
						Nom
					</label>
					<input
						id="name"
						name="name"
						type="text"
						required
						autoComplete="name"
						className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40"
					/>
				</div>
				<div className="sm:col-span-1">
					<label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-foreground">
						Téléphone
					</label>
					<input
						id="phone"
						name="phone"
						type="tel"
						required
						autoComplete="tel"
						className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40"
					/>
				</div>
				<div className="sm:col-span-2">
					<label
						htmlFor="service"
						className="mb-1.5 block text-sm font-medium text-foreground"
					>
						Type de prestation
					</label>
					<select
						id="service"
						name="service"
						required
						defaultValue=""
						className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40"
					>
						<option value="" disabled>
							Sélectionnez une prestation
						</option>
						{SERVICES.map((s) => (
							<option key={s.slug} value={s.slug}>
								{s.shortTitle}
							</option>
						))}
						<option value="urgence">Urgence — je suis bloqué(e)</option>
						<option value="autre">Autre demande</option>
					</select>
				</div>
				<div className="sm:col-span-2">
					<label
						htmlFor="message"
						className="mb-1.5 block text-sm font-medium text-foreground"
					>
						Votre message
					</label>
					<textarea
						id="message"
						name="message"
						rows={4}
						placeholder="Décrivez votre besoin, votre adresse et le moment souhaité…"
						className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40"
					/>
				</div>
			</div>

			<button
				type="submit"
				disabled={loading}
				className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-accent text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
			>
				<Send className="size-4" aria-hidden="true" />
				{loading ? "Envoi en cours..." : "Envoyer ma demande de devis gratuit"}
			</button>
			{error && (
				<p className="mt-3 text-center text-sm text-destructive" role="alert">
					Une erreur est survenue. Veuillez réessayer ou nous appeler directement.
				</p>
			)}
			<p className="mt-3 text-center text-xs text-muted-foreground">
				Devis gratuit et sans engagement. Pour une urgence, appelez le{" "}
				<a href={`tel:${SITE.phoneHref}`} className="font-semibold text-primary underline">
					{SITE.phoneDisplay}
				</a>
				.
			</p>
		</form>
	);
}
