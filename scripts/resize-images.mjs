import sharp from "sharp";
import { readdir, mkdir } from "fs/promises";
import { existsSync } from "fs";
import path from "path";

const SRC_DIR = "./public/assets/barber";
const OUT_DIR = "./image/barber";
const MAX_WIDTH = 1600; // plafond raisonnable, next/image gère les breakpoints ensuite
const QUALITY = 70;

async function run() {
	if (!existsSync(OUT_DIR)) await mkdir(OUT_DIR, { recursive: true });

	const files = (await readdir(SRC_DIR)).filter((f) => /\.(avif|jpg|jpeg|png|webp)$/i.test(f));

	for (const file of files) {
		const inputPath = path.join(SRC_DIR, file);
		const outputName = path.parse(file).name + ".avif";
		const outputPath = path.join(OUT_DIR, outputName);

		const image = sharp(inputPath);
		const metadata = await image.metadata();

		await image
			.resize({
				width: Math.min(MAX_WIDTH, metadata.width ?? MAX_WIDTH),
				withoutEnlargement: true,
			})
			.avif({ quality: QUALITY })
			.toFile(outputPath);

		console.log(`✔ ${file} -> ${outputName}`);
	}
}

run().catch((err) => {
	console.error(err);
	process.exit(1);
});
