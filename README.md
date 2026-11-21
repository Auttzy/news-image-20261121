# The Saturday Ledger — 21 November 2026 (variant 4A)

[![make.fun · news-image-20261121](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![rank](https://make.fun/badge/news-image-20261121/Auttzy/news-image-20261121/rank.svg)](https://make.fun/bounty/news-image-20261121/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![reward](https://make.fun/badge/news-image-20261121/Auttzy/news-image-20261121/reward.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)

A newspaper front page, drawn as a single image, summing up the world's news
of Saturday 21 November 2026 — 36 stories across 6 regions.

## The image

`entry.png` is a 1024×1024 front page called "The Saturday Ledger", dated
Saturday 21 November 2026. Thirty-six stories from that day share the page:

1. **Coalition downs three Houthi missiles over Riyadh** — Air defences
   destroy three ballistic missiles fired at the capital early on Saturday,
   the second attack on Riyadh in days.
2. **BepiColombo reaches Mercury after eight years** — The ESA-JAXA craft
   fires its thrusters at 19:24 CET to be caught by Mercury's gravity — the
   first mission to put two orbiters there at once.
3. **COP31 runs into overtime with no deal** — A third draft is due on
   Saturday morning after talks pass their deadline; fossil-fuel language is
   out and 92,000 attended, the largest ever.
4. **Rutte in Warsaw as Poland seeks more cover** — The NATO chief visits on
   Saturday after Friday's missile landings in Poland; Warsaw asks for more
   eastern-flank support.
5. **Overnight strike kills 2, injures 42 in Kryvyi Rih** — Four children
   are among the hurt, officials say.
6. **UN warns aid strikes threaten aid lifeline** — Civilians were told to
   leave the port area of Hodeidah as the coalition hit Houthi targets.
7. **US clears ~900,000 AI chips for China** — Washington approved the sale
   of close to 900,000 AI chips to China over six months.
8. **EU pays out nearly €8bn to Ukraine** — The bloc completes its
   largest-ever reforms payment to Kyiv.
9. **Denmark charges two in Russian plot** — Two Danes are accused of being
   recruited by Russia to kill a Ukrainian rapper.
10. **India resume on 159/1 on day three** — New Zealand made 368, Nicholls
    175 not out; India trail by 209 in Wellington.

A strip along the foot of the page, "Also on Saturday", carries 23 more
stories in three columns, and a "Where it happened" dotted world map pins
the day's key places. A red-bordered "Date check" box names the stories from
other days that were deliberately left out — including the Russian missiles
that landed in Poland, which happened on Friday 20 November, not Saturday.

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
