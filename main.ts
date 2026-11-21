// The Saturday Ledger — 21 November 2026 (variant 2).
// Copies the front-page artwork (entry.png) into the output directory.
// Node 22, standard library only.
import { copyFileSync, existsSync, readFileSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const dst = join(outDir, "entry.png");

function fail(message) {
  console.error(`main.ts: ${message}`);
  process.exit(1);
}

if (!existsSync(src)) fail("entry.png is missing from the repository");
const buf = readFileSync(src);
if (buf.length > 1048576) {
  fail(`entry.png is ${buf.length} bytes, over the 1 MiB limit`);
}
if (buf.length < 8 || buf[0] !== 0x89 || buf[1] !== 0x50 || buf[2] !== 0x4e || buf[3] !== 0x47) {
  fail("entry.png is not a PNG file");
}
// PNG width and height live in the IHDR chunk (bytes 16-23, big-endian).
const width = buf.readUInt32BE(16);
const height = buf.readUInt32BE(20);
if (width !== 1024 || height !== 1024) {
  fail(`entry.png is ${width}x${height}, expected 1024x1024`);
}

copyFileSync(src, dst);
const copied = statSync(dst).size;
if (copied !== buf.length) {
  fail(`copied ${copied} bytes, expected ${buf.length}`);
}
console.log(`main.ts: wrote ${dst} (${copied} bytes, 1024x1024 PNG)`);
