import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const entryText = "I'm away for retraining. Lesson one is rest. Lesson two is also rest. If this is urgent, I have already forgotten the entire curriculum.";

const here = dirname(fileURLToPath(import.meta.url));
void here;

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entryText, "utf8");
