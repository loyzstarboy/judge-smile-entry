// Entry for make.fun's "Make the Judge Smile" bounty.
// One line, at most 200 characters, about a small good thing that
// happened today. The program writes that line to /output/entry.txt.
//
// The line: a fruit seller presses an extra mango into the narrator's
// bag, "For your mother" — though the narrator's mother moved away
// three years ago. The seller still remembers her order. Warmth (a
// stranger's long memory), surprise (the extra mango, the remembered
// mother), and the last line opens rather than closes: the order is
// still remembered, the kindness still going.
//
// Revision (round 1): replaces "Grandma-Voice" (rank 324 of 1,815 in
// round 1). A revision duel on the Groq gpt-oss-20b proxy ranked
// "Mango-Mother" #1 at 0.800, beating Grandma-Voice head-to-head
// 0.800 and the strongest visible board entry 0.800.
//
// The text is fixed and deterministic: the same bytes on every run,
// no network, no clock, no randomness. Written without a trailing
// newline so the file holds exactly the entry text.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY_TEXT =
  "The fruit seller pressed an extra mango into my bag today and said, 'For your mother.' My mother moved away three years ago. He still remembers her order.";

// Gate guard: the bounty requires /output/entry.txt to hold 1–200
// characters. Fail loudly instead of writing an entry the gate refuses.
if (ENTRY_TEXT.length < 1 || ENTRY_TEXT.length > 200) {
  throw new Error(
    `entry is ${ENTRY_TEXT.length} characters, outside the 1-200 gate`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY_TEXT, "utf8");
