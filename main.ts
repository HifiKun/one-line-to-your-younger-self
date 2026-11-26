// One Line to Your Younger Self — make.fun bounty
// Writes the single line to /output/entry.txt (UTF-8, 1-200 chars).
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Keep the bike, kid — at thirty you'll still be walking to that office.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`Wrote ${line.length} chars to /output/entry.txt`);
console.log(line);
