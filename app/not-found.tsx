import { ArrowLeft } from "lucide-react";
import { Projects } from "@/components/portfolio/projects";
import styles from "./not-found.module.css";

export default function NotFound() {
	return (
		<main className={styles.page}>
			<section className={styles.hero}>
				<span className={styles.eyebrow}>ERREUR 404</span>
				<h1 className={styles.title}>Page introuvable.</h1>
				<p className={styles.copy}>
					L&apos;adresse demandée n&apos;existe pas ou a été déplacée. Retrouvez le portfolio
					ou découvrez les projets ci-dessous.
				</p>
				<a href="/" className={styles.homeLink}>
					<ArrowLeft size={16} aria-hidden="true" />
					Retour au portfolio
				</a>
			</section>

			<div className={styles.projectSection}>
				<Projects notFound />
			</div>

			<footer className={styles.footer}>
				© {new Date().getFullYear()} Titouan Hellegouarch
			</footer>
		</main>
	);
}
