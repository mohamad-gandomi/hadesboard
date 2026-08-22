import { stat } from "node:fs/promises";
import path from "node:path";

import sharp from "sharp";

const projectRoot = path.resolve(import.meta.dirname, "..");

const images = [
  ["assets/source-images/images/home-hero-studio.png", "public/images/home-hero-studio.webp"],
  ["assets/source-images/projects/madar-cover-v2.png", "public/projects/madar-cover-v2.webp"],
  ["assets/source-images/projects/madar-screen-v2.png", "public/projects/madar-screen-v2.webp"],
  ["assets/source-images/projects/nova-cover-v2.png", "public/projects/nova-cover-v2.webp"],
  ["assets/source-images/projects/nova-screen-v2.png", "public/projects/nova-screen-v2.webp"],
  ["assets/source-images/projects/arq-cover-v2.png", "public/projects/arq-cover-v2.webp"],
  ["assets/source-images/projects/arq-screen-v2.png", "public/projects/arq-screen-v2.webp"],
  ["assets/source-images/projects/madar-featured-case-study.png", "public/projects/madar-featured-case-study.webp"],
  ["assets/source-images/journal/beauty-usability-cover.png", "public/journal/beauty-usability-cover.webp"],
  ["assets/source-images/journal/professional-website-cover.png", "public/journal/professional-website-cover.webp"],
  ["assets/source-images/journal/before-design-cover.png", "public/journal/before-design-cover.webp"],
];

let sourceBytes = 0;
let outputBytes = 0;

for (const [inputPath, outputPath] of images) {
  const input = path.join(projectRoot, inputPath);
  const output = path.join(projectRoot, outputPath);

  await sharp(input)
    .rotate()
    .webp({ effort: 6, quality: 80, smartSubsample: true })
    .toFile(output);

  sourceBytes += (await stat(input)).size;
  outputBytes += (await stat(output)).size;
}

const brandInput = path.join(projectRoot, "assets/source-images/brand/hadesboard-mark-v1.png");
const brandOutput = path.join(projectRoot, "public/brand/hadesboard-mark-v1.webp");

await sharp(brandInput)
  .resize({ width: 128, height: 128, fit: "inside", withoutEnlargement: true })
  .webp({ effort: 6, lossless: true })
  .toFile(brandOutput);

sourceBytes += (await stat(brandInput)).size;
outputBytes += (await stat(brandOutput)).size;

const savedPercent = Math.round((1 - outputBytes / sourceBytes) * 100);
console.log(`Optimized ${images.length + 1} images: ${(sourceBytes / 1024 / 1024).toFixed(1)} MB -> ${(outputBytes / 1024 / 1024).toFixed(1)} MB (${savedPercent}% smaller)`);
