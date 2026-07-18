# Apple Design Language System

A design system that recreates the **Apple web design language**: reverent product photography framed by near-invisible UI. Every surface is a stack of edge-to-edge product "tiles" — alternating light and dark canvases — each centered on a confident-but-quiet headline, a one-line tagline, tiny blue pill CTAs, and a single crisp product render. Nothing competes with the product; the wall disappears and the artifact takes over.

> **Source:** This system was authored from a written brand specification of Apple's web presence (homepage, environment, store, iPhone 17 Pro buy page, accessories index). **No codebase, Figma file, font binaries, or logo assets were provided** — everything here is built from the spec. See CAVEATS below.

## What's here (index / manifest)

- **`styles.css`** — root entry point; a list of `@import` lines only. Consumers link this one file.
- **`tokens/`** — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `shapes.css`, `elevation.css`, `base.css` (reset + type-helper classes).
- **`components/`** — reusable React primitives (see list below).
- **`ui_kits/storefront/`** — a click-through storefront recreation (Home · Accessories · Buy).
- **`guidelines/`** — foundation specimen cards (Colors, Type, Spacing, Shapes).
- **`assets/`** — logos & imagery (currently empty — see CAVEATS).
- **`thumbnail.html`** — homepage tile for the design-system picker.
- **`SKILL.md`** — Agent-Skill wrapper for use in Claude Code.

### Components
- **buttons/** — `Button` (primary · secondary-pill · dark-utility · pearl-capsule · store-hero), `IconButton` (circular control), `TextLink` (Action Blue / Sky Link Blue).
- **navigation/** — `GlobalNav` (thin black bar), `SubNav` (frosted product bar).
- **surfaces/** — `ProductTile` (full-bleed tiles, 5 tones), `StoreCard` (utility card), `StickyBar` (floating buy bar).
- **forms/** — `SearchInput` (pill search), `ConfigChip` (configurator option).
- **footer/** — `Footer` (dense parchment footer).

---

## CONTENT FUNDAMENTALS

How Apple writes copy — the voice this system expects.

- **Confident, declarative, short.** Headlines are product names or three-word verdicts: "iPhone 17 Pro." "Adventure. Amplified." "Pro. Beyond." Sentences are frequently fragments; periods are used as rhythm, not grammar ("Lean. Mean. Superfast machine.").
- **Second person, aspirational.** Copy addresses "you" and describes what you'll feel or do, never what the company did. "Built for you." "Your way."
- **Title Case for product names, sentence case for taglines.** Product names get Title Case ("Apple Watch Ultra"); taglines and body run sentence case.
- **CTAs are two words max.** "Learn more" and "Buy" are the universal pair. "Add to Bag." "Shop iPhone." Never "Click here" or "Get started today!".
- **No exclamation-point hype, no emoji, no jargon.** The tone is calm reverence. Superlatives are earned and sparing ("the ultimate iPhone").
- **Numbers and specs are quiet.** Prices read "From $999"; specs are stated flatly, never dramatized.
- **The eyebrow "New."** A small colored "New" above a headline is the one recurring label. Used sparingly.

Vibe: a museum wall label written by someone who is quietly certain the object speaks for itself.

---

## VISUAL FOUNDATIONS

- **Color.** A single blue accent (`--color-primary`, Action Blue #0066cc) carries *every* interactive element — links, pill CTAs, focus rings. There is no second brand color. Surfaces are pure white, parchment (#f5f5f7), or near-black tiles (#272729 / #2a2a2c / #252527); pure black (#000000) is reserved for the global nav and video. Text is one near-black ink (#1d1d1f) on light, white on dark.
- **Type.** SF Pro Display for headlines (≥19px, weight 600), SF Pro Text for body/UI. Body runs at **17px, not 16px**. Display sizes carry negative letter-spacing (−0.28 → −0.374px) for the signature "Apple tight" cadence. Weight ladder is 300 / 400 / 600 / 700 — **weight 500 is deliberately absent**; weight 300 appears rarely (store hero CTA, airy leads).
- **Spacing.** 8px base. Product tiles get 80px vertical section padding; cards get 24px. Tiles stack edge-to-edge with **zero gap** — the color change is the divider.
- **Backgrounds.** Solid color only. **No decorative gradients anywhere** — atmosphere comes from photography, never CSS. Product renders are full-bleed rectangular; imagery is never rounded in hero tiles.
- **Elevation.** Exactly **one drop-shadow** in the entire system (`rgba(0,0,0,0.22) 3px 5px 30px`), applied only to product renders resting on a surface — never to cards, buttons, or text. UI elevation comes from (a) surface-color change and (b) backdrop blur.
- **Blur / transparency.** Frosted glass (`saturate(180%) blur(20px)` over parchment @ 80%) on the sub-nav and the floating buy bar. Functional, not decorative — they float over scrolling content.
- **Borders.** Hairlines that read as rings, not lines: 1px `rgba(0,0,0,0.08)` on utility cards; a 3px soft `#f0f0f0` ring on the Pearl button.
- **Corner radii.** Grammars don't mix: `sm` (8px) for compact utility, `lg` (18px) for utility cards, `pill` (9999px) for anything that reads as an action, and the rare `md` (11px) Pearl button. Tiles are never rounded.
- **Cards.** White fill, 1px hairline, 18px radius, 24px padding, **no shadow** — the product render inside carries the only shadow.
- **Animation.** Almost none. The one system-wide micro-interaction is a press state: `transform: scale(0.95)`. No hover styling is documented — default and pressed only. Transitions are short (~120ms) and quiet.
- **Press / focus states.** Press = shrink to 0.95. Keyboard focus = 2px solid Focus-Blue (#0071e3) outline. No color change on press.
- **Imagery vibe.** Photographic-realistic product renders, often on a tinted surface that becomes the tile background. Neutral, true-to-life color; no filters or grain. Environment surfaces lean darker and editorial with atmospheric photography.
- **Layout.** Content locks at 1440px (grids) or 980px (text-heavy). Sub-nav and buy bar are the only fixed/sticky elements. Whitespace is the product's pedestal: ≥64px of air above a headline, ≥40px around any render.

---

## ICONOGRAPHY

- **Apple ships SF Symbols** — a proprietary icon font tightly matched to SF Pro. It cannot be redistributed and was **not** provided with this spec.
- **Substitution:** this system uses a small set of **hand-set inline SVG stroke glyphs** (2px stroke, rounded joins) for the few glyphs the surfaces need — search and bag in `GlobalNav`, the search glyph in `SearchInput`, chevrons in `TextLink` / `IconButton`. These approximate SF Symbols' light, rounded stroke style. **⚠ Flagged substitution** — replace with SF Symbols (or a licensed match) in production.
- **No emoji, ever.** Apple's surfaces never use emoji or Unicode dingbats as UI icons.
- **Chevron convention.** The "›" (U+203A) trailing chevron is the recurring affordance for "Learn more ›" links — rendered as text in `TextLink`.
- Glyphs are inline in components (not a shared sprite) to keep components self-contained. If you adopt a CDN set, prefer one with a 1.5–2px stroke and rounded caps.

---

## CAVEATS

- **Fonts substituted.** SF Pro Display / SF Pro Text are Apple-proprietary and were not provided. Tokens point at the real family names; on Apple platforms (macOS/iOS/Safari) the `system-ui` / `-apple-system` stack resolves to the genuine SF Pro. Off-Apple, the stack falls back to **Inter** (loaded from Google Fonts). **Please upload SF Pro font files** if you have a license, and I'll wire real `@font-face` rules.
- **No logo / brand mark.** No logo was provided, and I do not recreate Apple's mark from memory. Every place a logo would sit renders a **text wordmark** ("Storefront" / a `brand` prop). `assets/` is empty. Supply a logo SVG and I'll wire it in.
- **No product photography.** Product renders in the UI kit are neutral placeholder regions. Supply real render URLs (`image` prop on `ProductTile` / `StoreCard`) for production fidelity.
- **Form states are a gap.** Only the neutral search input was in the spec — no validation/error states are defined.
