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

await sharp(path.join(projectRoot, "assets/source-images/images/home-hero-studio.png"))
  .resize({ width: 800, height: 600, fit: "cover", position: "centre" })
  .webp({ effort: 6, quality: 78, smartSubsample: true })
  .toFile(path.join(projectRoot, "public/images/home-hero-studio-mobile.webp"));

const brandInput = path.join(projectRoot, "assets/source-images/brand/hadesboard-mark-v1.png");
const brandOutput = path.join(projectRoot, "public/brand/hadesboard-mark-v1.webp");

await sharp(brandInput)
  .resize({ width: 128, height: 128, fit: "inside", withoutEnlargement: true })
  .webp({ effort: 6, lossless: true })
  .toFile(brandOutput);

sourceBytes += (await stat(brandInput)).size;
outputBytes += (await stat(brandOutput)).size;

const iconSizes = [
  [32, "public/favicon-32x32.png"],
  [180, "public/apple-touch-icon.png"],
  [192, "public/icon-192.png"],
  [512, "public/icon-512.png"],
];

for (const [size, outputPath] of iconSizes) {
  const inset = Math.max(3, Math.round(size * 0.12));
  const mark = await sharp(brandInput)
    .resize({ width: size - inset * 2, height: size - inset * 2, fit: "contain" })
    .png()
    .toBuffer();

  await sharp({ create: { width: size, height: size, channels: 4, background: "#f5f3ed" } })
    .composite([{ input: mark, left: inset, top: inset }])
    .png({ compressionLevel: 9 })
    .toFile(path.join(projectRoot, outputPath));
}

const socialMark = await sharp(brandInput)
  .resize({ width: 190, height: 190, fit: "contain" })
  .png()
  .toBuffer();

const socialOverlay = Buffer.from(`
  <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="grid" width="96" height="96" patternUnits="userSpaceOnUse">
        <path d="M 96 0 L 0 0 0 96" fill="none" stroke="#f5f3ed" stroke-opacity="0.08" stroke-width="1" />
      </pattern>
    </defs>
    <rect width="1200" height="630" fill="url(#grid)" />
    <rect x="70" y="150" width="270" height="270" fill="#f5f3ed" />
    <rect x="380" y="191" width="10" height="10" fill="#3157d5" />
    <text x="380" y="285" fill="#f5f3ed" font-family="Arial, sans-serif" font-size="72" font-weight="700" letter-spacing="3">HADESBOARD</text>
    <text x="384" y="340" fill="#f5f3ed" fill-opacity="0.62" font-family="monospace" font-size="19" letter-spacing="5">PERSIAN DIGITAL STUDIO</text>
    <line x1="380" y1="390" x2="1080" y2="390" stroke="#f5f3ed" stroke-opacity="0.2" />
    <text x="384" y="437" fill="#f5f3ed" fill-opacity="0.72" font-family="monospace" font-size="17" letter-spacing="2">DESIGN / DEVELOPMENT / RTL</text>
    <text x="1080" y="538" text-anchor="end" fill="#f5f3ed" fill-opacity="0.48" font-family="monospace" font-size="15" letter-spacing="2">HADESBOARD.COM</text>
  </svg>
`);

await sharp({
  create: { width: 1200, height: 630, channels: 4, background: "#1c1c18" },
})
  .composite([
    { input: socialOverlay, left: 0, top: 0 },
    { input: socialMark, left: 110, top: 190 },
  ])
  .png({ compressionLevel: 9 })
  .toFile(path.join(projectRoot, "public/opengraph-image.png"));

const savedPercent = Math.round((1 - outputBytes / sourceBytes) * 100);
console.log(`Optimized ${images.length + 1} images: ${(sourceBytes / 1024 / 1024).toFixed(1)} MB -> ${(outputBytes / 1024 / 1024).toFixed(1)} MB (${savedPercent}% smaller)`);
console.log("Generated responsive hero, favicon, app icons, and social preview image");
