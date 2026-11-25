// Spotlight @crisxai5 entry for make.fun (Node 22, standard library only).
//
// The entry itself is the X post: an original spotlight card introducing
// @crisxai5 (https://x.com/crisxai5) as a must-follow AI & crypto expert,
// posted from a public X account with the sponsor mention, the bounty link,
// hashtags and our make.fun play code in the post text. This program only
// hands the post's address to the grader: it copies POST.json from the
// repository root into /output/POST.json, and does nothing else. The house
// reads the post's public engagement (likes + reposts + quotes) from X
// itself; nothing this program writes about the post is scored.
//
// Local run (mirrors the grader, with /bot and /output stood in for):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The two grader runs must write the same bytes: this copy is deterministic,
// with no network, no wall clock and no files outside the repository.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });

try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`Could not copy POST.json from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
