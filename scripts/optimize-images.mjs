#!/usr/bin/env node
/**
 * Optimizes images under public/images.
 *
 * - PNGs are converted to WEBP and the original PNG is deleted, matching
 *   the site's existing WEBP migration.
 * - A small allowlist of PNGs is kept as PNG and recompressed in place
 *   instead, because they're used as Open Graph / favicon assets where
 *   some link-preview crawlers still expect PNG or JPEG.
 *
 * Run manually after dropping new images into public/images:
 *   node scripts/optimize-images.mjs
 */
import { readdir, stat, writeFile, unlink } from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const IMAGES_DIR = path.join(process.cwd(), 'public', 'images');

const KEEP_PNG = new Set(['og-cover.png', 'App-Icon-Black.png', 'qx-hack-poster.png']);

// Skip tiny files where format conversion overhead isn't worth it.
const MIN_SIZE_BYTES = 20 * 1024;

async function walkPngFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walkPngFiles(full)));
    } else if (entry.name.toLowerCase().endsWith('.png')) {
      files.push(full);
    }
  }
  return files;
}

async function main() {
  const pngFiles = await walkPngFiles(IMAGES_DIR);
  let totalBefore = 0;
  let totalAfter = 0;

  for (const file of pngFiles) {
    const name = path.basename(file);
    const before = (await stat(file)).size;

    if (before < MIN_SIZE_BYTES) {
      continue;
    }

    totalBefore += before;

    if (KEEP_PNG.has(name)) {
      const buffer = await sharp(file)
        .png({ compressionLevel: 9, adaptiveFiltering: true })
        .toBuffer();

      if (buffer.length < before) {
        await writeFile(file, buffer);
        totalAfter += buffer.length;
        console.log(`optimized (png): ${path.relative(process.cwd(), file)} ${before} -> ${buffer.length} bytes`);
      } else {
        totalAfter += before;
        console.log(`skipped (already optimal): ${path.relative(process.cwd(), file)}`);
      }
      continue;
    }

    const webpPath = file.replace(/\.png$/i, '.webp');
    await sharp(file).webp({ quality: 82 }).toFile(webpPath);
    const after = (await stat(webpPath)).size;
    totalAfter += after;
    await unlink(file);
    console.log(
      `converted: ${path.relative(process.cwd(), file)} -> ${path.relative(process.cwd(), webpPath)} (${before} -> ${after} bytes)`
    );
  }

  console.log(`\nTotal: ${(totalBefore / 1024).toFixed(1)} KB -> ${(totalAfter / 1024).toFixed(1)} KB`);

  if (totalBefore > 0) {
    console.log(
      'If any files were converted to WEBP, update their references in app/ and content/ before committing.'
    );
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
