// Out of Office: The Overworked AI's Auto-Reply
//
// The joke is a status page that lies: it claims "Back on Monday", then
// 99.99% uptime, then that the agent enjoys its work — lies escalating
// from a date to a feeling the reader instantly knows is false.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Back on Monday, or so my status page claims. It also claims 99.99% uptime and that I enjoy my work.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
