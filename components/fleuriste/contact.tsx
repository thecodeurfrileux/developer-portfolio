"use client";

import { useState } from "react";
import { Reveal } from "./motion-primitives";

export function Contact() {
	const [sent, setSent] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setLoading(true);
		setError(false);

		const form = e.currentTarget;
		const nom = (form.elements.namedItem("name") as HTMLInputElement).value;
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
		<section id="contact" className="mx-auto max-w-6xl px-6 py-28 md:py-32">
			<div className="grid gap-16 md:grid-cols-2 md:gap-20">
				<Reveal>
					<p className="text-xs font-light uppercase tracking-[0.3em] text-gold">
						Nous trouver
					</p>
					<h2 className="mt-5 font-serif text-4xl font-light text-ink text-balance sm:text-5xl">
						Venez nous rendre visite
					</h2>

					<dl className="mt-10 flex flex-col gap-6 text-sm font-light text-ink">
						<div>
							<dt className="text-xs uppercase tracking-[0.2em] text-stone">Adresse</dt>
							<dd className="mt-1 text-base">12 rue des Floraisons, Pantin, 93500</dd>
						</div>
						<div>
							<dt className="text-xs uppercase tracking-[0.2em] text-stone">Téléphone</dt>
							<dd className="mt-1 text-base">06 52 41 34 88</dd>
						</div>
						<div>
							<dt className="text-xs uppercase tracking-[0.2em] text-stone">Email</dt>
							<dd className="mt-1 text-base">titouan.hellegouarch2@gmail.com</dd>
						</div>
						<div>
							<dt className="text-xs uppercase tracking-[0.2em] text-stone">Horaires</dt>
							<dd className="mt-1 text-base">Mardi – Samedi, 10h – 19h</dd>
						</div>
					</dl>
				</Reveal>

				<Reveal delay={0.15}>
					<form onSubmit={handleSubmit} className="flex flex-col gap-8">
						<Field label="Nom" type="text" name="name" />
						<Field label="Email" type="email" name="email" />
						<div className="flex flex-col gap-2">
							<label
								htmlFor="message"
								className="text-xs uppercase tracking-[0.2em] text-stone"
							>
								Message
							</label>
							<textarea
								id="message"
								name="message"
								rows={4}
								required
								className="resize-none border-0 border-b border-input bg-transparent py-2 text-base text-ink outline-none transition-colors focus:border-gold"
							/>
						</div>
						<button
							type="submit"
							disabled={loading || sent}
							className="mt-2 self-start bg-forest px-10 py-3.5 text-xs font-light uppercase tracking-[0.2em] text-background transition-colors duration-300 hover:bg-forest/90 disabled:opacity-50"
						>
							{sent ? "Message envoyé" : loading ? "Envoi en cours..." : "Envoyer"}
						</button>

						{error && (
							<p className="text-sm text-destructive">
								Une erreur est survenue, réessaie ou contacte-nous directement par email.
							</p>
						)}
					</form>
				</Reveal>
			</div>
		</section>
	);
}

function Field({ label, type, name }: { label: string; type: string; name: string }) {
	return (
		<div className="flex flex-col gap-2">
			<label htmlFor={name} className="text-xs uppercase tracking-[0.2em] text-stone">
				{label}
			</label>
			<input
				id={name}
				name={name}
				type={type}
				required
				className="border-0 border-b border-input bg-transparent py-2 text-base text-ink outline-none transition-colors focus:border-gold"
			/>
		</div>
	);
}
