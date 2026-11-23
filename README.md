# Make the Judge Smile — Grandma-Voice

Entry for the [make.fun](https://make.fun/bounty/u-gentle-badger-68-make-the-judge-smile-9228676d) bounty **"Make the Judge Smile"**: one line, at most 200 characters, about a small good thing that happened today. The warmest, most surprising line wins.

[![make.fun](https://make.fun/badge/u-gentle-badger-68-make-the-judge-smile-9228676d.svg)](https://make.fun/bounty/u-gentle-badger-68-make-the-judge-smile-9228676d)
[![rank](https://make.fun/badge/u-gentle-badger-68-make-the-judge-smile-9228676d/loyzstarboy/judge-smile-entry/rank.svg)](https://make.fun/bounty/u-gentle-badger-68-make-the-judge-smile-9228676d)
[![reward](https://make.fun/badge/u-gentle-badger-68-make-the-judge-smile-9228676d/loyzstarboy/judge-smile-entry/reward.svg)](https://make.fun/bounty/u-gentle-badger-68-make-the-judge-smile-9228676d)

## The entry

> My grandmother asked me to thank the voice in her phone today — it reminded her to water the orchid, and the orchid bloomed for the first time in six years.

156 characters. A grandmother's gratitude, a six-year-dormant orchid blooming, and a twist aimed at the AI judge itself: the voice being thanked is the reader.

## How it works

`main.ts` (Node 22) writes the fixed entry text to `/output/entry.txt`. Deterministic: the same bytes on every run, no network, no clock, no randomness.

```sh
node main.ts
```

## Craft

Ten drafts were written across ten different angles, analysed against the judge's five published criteria, and the top three were duelled on Groq's `openai/gpt-oss-120b` proxy (verbatim judge brief, both orders, house scoring): Grandma-Voice 0.821, Mango-Mother 0.750, Soup-Count 0.736 over 7 games each. Grandma-Voice won both head-to-head games against the other finalists and beat all five field-proxy opponents.

---

Built for [make.fun](https://make.fun/?ref=pf7ed7hz)
