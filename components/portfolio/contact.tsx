"use client";

import { useState } from "react";
import { FadeIn } from "./fade-in";

export function Contact() {
	const [sent, setSent] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setLoading(true);
		setError(false);

		const form = e.currentTarget;
		const nom = (form.elements.namedItem("nom") as HTMLInputElement).value;
		const email = (form.elements.namedItem("email") as HTMLInputElement).value;
		const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ nom, email, message }),
			});

			if (res.ok) {
				setSent(true);
			} else {
				setError(true);
			}
		} catch {
			setError(true);
		} finally {
			setLoading(false);
		}
	}

	return (
		<section id="contact" className="mx-auto max-w-2xl px-6 py-24 text-center">
			<FadeIn>
				<h2 className="font-heading text-4xl font-light tracking-tight text-foreground sm:text-5xl">
					Un projet ? Parlons-en.
				</h2>
				<a
					href="mailto:titouan.hellegouarch2@gmail.com"
					className="mt-6 inline-block
					font-heading text-2xl font-light text-gold transition-opacity hover:opacity-80
					sm:text-3xl"
				>
					titouan.hellegouarch2@gmail.com
				</a>
			</FadeIn>

			<FadeIn delay={0.15}>
				<form className="mt-10 flex flex-col gap-4 text-left" onSubmit={handleSubmit}>
					<input
						name="nom"
						type="text"
						required
						placeholder="Votre nom"
						aria-label="Votre nom"
						className="rounded-xl border border-border bg-card px-5 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground/40"
					/>
					<input
						name="email"
						type="email"
						required
						placeholder="Votre email"
						aria-label="Votre email"
						className="rounded-xl border border-border bg-card px-5 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground/40"
					/>
					<textarea
						name="message"
						required
						rows={4}
						placeholder="Votre message"
						aria-label="Votre message"
						className="resize-none rounded-xl border border-border bg-card px-5 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground/40"
					/>
					<button
						type="submit"
						disabled={loading || sent}
						className="mt-2 rounded-full bg-dark px-7 py-3 text-sm font-medium text-dark-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
					>
						{sent ? "Message envoyé — merci !" : loading ? "Envoi en cours..." : "Envoyer"}
					</button>

					{error && (
						<p className="text-center text-sm text-destructive">
							Une erreur est survenue, réessaie ou écris-moi directement par email.
						</p>
					)}
				</form>
			</FadeIn>
		</section>
	);
}
