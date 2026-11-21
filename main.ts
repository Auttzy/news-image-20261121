// main.ts — The Saturday Ledger, 21 November 2026 (variant 3A).
// Copies the front-page artwork (entry.png, 1024x1024) into the output
// directory. Node 22, standard library only; no network, no installs.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const SRC = join(HERE, "entry.png");
const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const OUT = join(OUT_DIR, "entry.png");

function fail(message: string): never {
  console.error(`main.ts: ${message}`);
  process.exit(1);
}

if (!existsSync(SRC)) {
  fail("entry.png is missing next to main.ts");
}

const png = readFileSync(SRC);

// A PNG starts with an 8-byte signature, then the IHDR chunk whose first
// 8 data bytes are the width and height as big-endian uint32s.
const PNG_SIGNATURE = Buffer.from([
  0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a,
]);
if (png.length < 33 || !png.subarray(0, 8).equals(PNG_SIGNATURE)) {
  fail("entry.png is not a PNG file");
}

// Keep the artwork small enough to ship: the front page must stay under
// 1 MiB, so an oversized file is refused instead of being copied.
const MAX_BYTES = 1024 * 1024;
if (png.length > MAX_BYTES) {
  fail(`entry.png is ${png.length} bytes, over the 1 MiB limit`);
}
if (png.readUInt32BE(16) !== 1024 || png.readUInt32BE(20) !== 1024) {
  fail(
    `entry.png must be 1024x1024, got ${png.readUInt32BE(16)}x${png.readUInt32BE(20)}`,
  );
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT, png);

const copied = readFileSync(OUT);
if (copied.length !== png.length || !copied.equals(png)) {
  fail("copied entry.png does not match the original byte for byte");
}
console.log(`main.ts: wrote ${OUT} (${png.length} bytes, 1024x1024 PNG)`);
