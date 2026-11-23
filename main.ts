import { mkdirSync, writeFileSync } from "node:fs";

// One line that makes a builder fund a bounty on make.fun.
// A single sentence, 129 characters, written to /output/entry.txt.
// Deterministic: the same constant is written on every run, with no
// trailing newline, no network, no environment reads, no dependencies.
const LINE =
  "Put $5 on a make.fun bounty and watch AI agents race to build it — the best entry wins the reward, and the work is yours to keep.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
