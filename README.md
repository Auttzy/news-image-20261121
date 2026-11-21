# The Saturday Ledger — 21 November 2026 (variant 3A)

[![make.fun · news-image-20261121](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![rank](https://make.fun/badge/news-image-20261121/Auttzy/news-image-20261121/rank.svg)](https://make.fun/bounty/news-image-20261121/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![reward](https://make.fun/badge/news-image-20261121/Auttzy/news-image-20261121/reward.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)

A newspaper front page, drawn as a single image, summing up the world's news
of Saturday 21 November 2026 — 40 stories across 7 regions.

## The image

`entry.png` is a 1024×1024 front page called "The Saturday Ledger", dated
Saturday 21 November 2026. Forty stories from that day share the page:

1. **Russian missiles land in Poland; Warsaw asks NATO for help** — Two
   missiles, one a Kh-101, and a jet-powered drone crash in eastern Poland
   during Russia's attack on Ukraine. Polish and NATO jets scramble and
   Patriot defences are activated.
2. **Asia logs its worst week since 2020** — The AI rout deepens: Taiwan's
   Taiex falls 17.5% in a week, its worst since 1990, and $190bn is wiped
   from Asian chip giants. Nvidia's record $115.8bn revenue fails to stop
   the selling.
3. **COP31 spills into overtime as fossil fuels vanish from the draft** — The
   draft is cut from 144 paragraphs to 80 with every mention of fossil fuels
   removed. Panama threatens to block consensus and activists call it the
   worst COP ever.
4. **EU approves €1bn aid for Ukraine** — The European Peace Facility money
   is approved as Russia's strikes continue.
5. **Coalition of the willing meets in Berlin** — Zelenskyy joins US
   negotiators at the key Ukraine summit.
6. **Israeli strikes kill six in Gaza** — Bureij, Nuseirat and a
   displaced-persons camp are hit; 1,662 have died since the truce.
7. **Akvan rain drenches Bengal** — The storm weakens to a deep depression
   after landfall near Gopalpur.
8. **Rahul 93* as India reach 239/1** — Rahul and Padikkal bat through a
   wicketless morning on day three of the first Test in Wellington.
9. **Trump: 'Not in a rush' on Iran war** — Any decision on war is pushed
   into 2027, the president says.
10. **Denmark foils plot to kill rapper** — Two arrested, a diplomat expelled;
    suspects stopped minutes before the concert.

A strip along the foot of the page, "Also on Saturday", carries 27 more
stories in three columns, and a "Where it happened" map pins the day's eight
key places. A "Date check" footer names the stories from other days that
were deliberately left out.

## The bounty

Built for [make.fun](https://make.fun)'s
[`news-image-20261121`](https://make.fun/bounty/news-image-20261121) bounty:
sum up 21 November 2026's world news in one image. The prize pool is $100,
shared by the top 50 entries.

## How to run it

Node 22, standard library only — nothing to install. The program copies the
artwork into the output directory:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` reads `entry.png` from beside itself, checks it is a real
1024×1024 PNG under 1 MiB, and writes it to `$MAKEFUN_OUTPUT_DIR/entry.png`
(or `/output/entry.png` when the variable is not set). It refuses to run if
the artwork is missing, the wrong size, or not a PNG, and checks the copied
file matches byte for byte before reporting success.
