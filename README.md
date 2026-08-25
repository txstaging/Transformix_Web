# transformix-web

A pixel-faithful Next.js implementation of the Figma frame **“web labb”**
(`pHGOfIO1OjKFjB34xtlRRf`, node `1536:23371`) — a right-to-left Arabic marketing
site for Transformix.

## Stack

| | |
|---|---|
| Framework | Next.js 16.3 (App Router, Turbopack) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 (`@theme` tokens in `src/app/globals.css`) |
| Fonts | Noto Kufi Arabic, Tajawal, Plus Jakarta Sans via `next/font/google` |
| Direction | `<html lang="ar" dir="rtl">` |

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run lint
```

## How the design is reproduced

The Figma canvas is **1454 px** wide. The page is built once, at the design's
real measurements, and adapts in three bands:

| Viewport | Behaviour |
|---|---|
| `≥ 1454px` | Renders 1:1 with the design. Full-bleed section backgrounds, `max-w-[1454px]` content. |
| `1024–1454px` | The canvas keeps its full 1454 px layout width and is scaled with `zoom`, so every measurement stays exactly proportional instead of reflowing mid-design. |
| `< 1024px` | Each section switches to its own responsive layout (stacked cards, reflowed columns, a mobile nav sheet). |

`--page-zoom` / `--canvas-width` are set before first paint by a small inline
script in `src/app/layout.tsx`; CSS alone cannot turn `100vw` into the unitless
number `zoom` requires. `<html>` carries `suppressHydrationWarning` for that
reason.

### Measured fidelity at 1454px

Eight of the ten sections match their Figma frame height exactly; the page is
8668 px against the design's 8638 px (+0.35%). The two differences —
Portfolio +19 px and Testimonials +11 px — come from browser text metrics
against Figma's fixed text-layer heights, and closing them would mean clipping
copy.

## RTL notes

Figma exports assume LTR flex, so DOM order is mirrored where the visual order
matters (nav items, service cards, testimonial cards, tag rails, footer
columns). In RTL the flex/grid **cross-axis start is the right edge**, so
Figma's `items-end` becomes `self-start` here, and `justify-end` resolves to the
physical left edge — that is what places the card arrows on the left.

## Animations

Figma reports no keyframe timelines (`get_motion_context` → `{"nodes":[]}`), so
the motion below is what the design's own structure encodes:

- **Hero headline** — `1536:23375` is a 170 px clip over a 676 px stack of four
  headline blocks. It cycles through them, translating to each block's own
  offset (0 / 190 / 327 / 507), since the blocks have unlike heights.
- **Logo rail** — `1536:23438` is a 2403 px track inside a 1454 px frame:
  an endless marquee. The track renders its items twice and translates 50%, so
  the loop is seamless.
- **Website-type rail** — `1536:23551` is parked at x −1311 inside a 533 px
  clip; same continuous-scroll treatment. Spacing lives on each card
  (`me-*`) rather than a container `gap`, which is what keeps the 50% loop exact.
- **Primary button** — the clipped 328×221 white ellipse the design parks above
  the button is its hover state; it sweeps down and the label flips to blue.
- **Outline button** — layers `U` and `L` are two rows of rounded bars parked
  just outside the clipped box; on hover they close over the face like blinds.
  The header instance ships them fully transparent, exactly as in the file.
- **Closing mark** — Figma layer `icon-3d-spin-slow`. The exported asset is a
  flat render, so the turn oscillates ±22°; a full revolution would expose a
  mirrored back face.
- **Scroll reveal** — `src/components/ui/Reveal.tsx`, per block.

All motion is disabled under `prefers-reduced-motion`.

## Known gap: the hero promo panel

The 1166×538 panel in the hero (`1536:23373`,
“0_Clean_Website_Promo_Website_Promo_1280x720”) is a **video fill** in Figma.
Figma's API exposes only its poster frame — which is blank white, exactly what
the design renders — so that poster is what ships.

To play the real promo, drop the file at `public/assets/video/hero-promo.mp4`
and set the constant at the top of `src/components/sections/Hero.tsx`:

```ts
const HERO_VIDEO_SRC: string | null = "/assets/video/hero-promo.mp4";
```

The component already renders a `<video>` with the extracted poster when that is
set, at the same geometry.

## Layout

```
src/
  app/
    layout.tsx        fonts, RTL root, pre-paint canvas-scale script
    page.tsx          section order + the design's 66px section gutter
    globals.css       design tokens, marquee/reveal/spin keyframes
  components/
    ui/               PrimaryButton, OutlineButton, Reveal
    sections/         one file per Figma frame
  lib/content.ts      all Arabic copy + per-element geometry, transcribed
                      from the file (each export cites its node id)
public/assets/        logo/ brands/ icons/ images/ — exported from Figma
```

Content and geometry live in `src/lib/content.ts` rather than in JSX, so copy
can be edited without touching layout. Every section component names the Figma
node it implements and the key measurements taken from it.
