# Boss Bar Lounge — Design System

A brand & UI system for **Boss Bar Lounge** (danang-girlsbar.com), a premium *Girls Bar & Talking Bar* in Da Nang, Vietnam. The look is a near-black nightclub canvas lit by warm gold — cut-glass sharp corners, serif display type, and a signature drop-shadow **glow** on everything interactive.

> **Operator note:** hostess / talking-bar venue. Copy and imagery center on nightlife, premium drinks, and the "choice system." Keep the tone upscale and discreet, never explicit.
> **Claude Design project:** `019dea4a-955b-7856-8b66-447046718cf2` · namespace `window.BossBarLoungeDesignSystem_019dea` · live: danang-girlsbar.com

## CONTENT FUNDAMENTALS
**Voice — confident, premium, reassuring.** Sells *ease and discretion* to a first-time, often foreign visitor; anticipates worry (language, pricing, privacy) and answers it plainly.
- **Person:** reader is **"you"**, venue is **"we/our"** ("Choose your cast members yourself.").
- **Casing:** Headlines Title Case in serif; eyebrows/labels ALL-CAPS wide-tracked ("CHOICE SYSTEM", "HOW TO VISIT"); body sentence case.
- **Style:** short, declarative, benefit-first. Concrete numerals — *100+ cast, 300㎡, 5 reasons, 4 steps, from 300,000 ₫.*
- **Prices:** Vietnamese đồng; long form ("900,000 ₫"), drinks menu abbreviates thousands as "k" ("6,800k"). Hours 24h ("19:00 — 02:00").
- **Recurring:** "Da Nang's No.1", "Choice System", "Best Price Guaranteed", "No Hidden Fees", "Open Year-Round".
- **Multilingual:** 7 languages — KR, JP, EN, 简, 繁, VI, RU. EN + KR/JP lead.
- **Emoji:** sparingly, functional in UI only (☎️📞 / 💬 Zalo / 🎉 / 🕕 / 🌐 + flags). Never decorative in prose.
- **Vibe:** "A special night out, handled." Upscale Gangnam-meets-kyabakura, made approachable and transparent.

## VISUAL FOUNDATIONS (token values)
**Color.** Four-tier near-black stack `--bbl-bg #080808` → `--bbl-bg-2 #0e0e0e` → `--bbl-bg-3 #141414` → `--bbl-bg-4 #1a1a1a`. Primary accent **gold** `--bbl-gold #E0B36A` (light `#F8D19C`, deep `#A07838`); secondary **champagne tan** `--bbl-tan #C99A5E` (light `#E7BD8B`) for eyebrows/outlines/"Popular". Reserve cool **neon cyan** `--bbl-neon #54FCFF` for rare sparks. Text white at 100/82/48/10% (`--bbl-text`, `-sub`, `-dim`, `-faint`). Gold gradient `--bbl-grad-gold linear-gradient(135deg,#C99A5E,#A07838 50%,#E0B36A)`. Borders hairline white 10% / 18%.

**Type — three voices.** `--bbl-font-display 'Cormorant Garamond'` (serif — titles/hero/prices; its **italic 300** is the signature gold-emphasis inside headings), `--bbl-font-body 'DM Sans'` (body/UI 15.5px / 1.7), `--bbl-font-brand 'Michroma'` (wordmark/nav/eyebrows, wide-tracked uppercase). Sizes: hero `clamp(36px,7vw,90px)`, h1 `clamp(30px,5vw,60px)`, h2 `clamp(28px,4vw,52px)`, stat 52px. Eyebrow tracking `.3em`, label `.2em`.

**Spacing & layout.** 4px base. Sections `--bbl-section-pad-y 80px` (x 52px desktop; mobile `60px 20px`). Card grids: **2px gap over a white-10% hairline bg** so the gaps draw the dividers — no per-card borders. `--bbl-container 1280px`, readable `--bbl-measure 640px`.

**Corners — sharp.** `--bbl-radius 0px` almost everywhere (cut glass). Only exception: language pill `--bbl-radius-pill 999px`.

**Backgrounds.** Full-bleed venue photography under heavy dark gradients (115° side scrim + bottom-up fade to black). Optional **Gold Glow** theme layers a fixed, *static* blue-vortex + red-gold halo at negative z-index behind text. Imagery is the texture.

**Glow & shadow — the defining effect.** Glow via `filter: drop-shadow()` (not box-shadow) so light follows the shape. Three intensities: `--bbl-glow-gold-sm 0 0 8px`, `--bbl-glow-gold 0 0 18px`, `--bbl-glow-gold-lg 0 0 32px + 0 0 60px`. The **gold banner** (urgency/CTA strips) is the one place a real box-shadow + inset is used (`--bbl-shadow-banner`). Otherwise flat — depth from surface tiers + glow.

**Motion.** Calm, premium. `fade-up` (28px rise ~0.7s) on scroll reveal. Primary button carries an always-on gold-gradient **shimmer** (4s). Transitions 0.2–0.45s ease (`--bbl-ease cubic-bezier(0.22,0.61,0.36,1)`). **No bounce, no spring, no infinite spin.** Images zoom slowly (0.6s) on hover.

**Hover/press:** primary → glow intensifies + `translateY(-1px)`, shimmer pauses; outline → fills tan; ghost → gold border/text + faint glow; cards/images → gold glow blooms + slight lift/zoom; FAQ `+` rotates 45°→`×`, turns gold. No shrink/pressed state — interaction reads through glow + color.

## ICONOGRAPHY
No custom icon set. **Emoji as functional icons** (📞☎️ call / 💬📱 Zalo / 🎉 / 🕕 / 🌐 + flags). Unicode micro-icons (`› → ↑ ▾ + ×`). The one true brand icon is a **faceted gem** (favicon / lockup, `assets/gem-mark.png`) — originally magenta, rendered gold. No drawn SVG illustrations.

## Components (`window.BossBarLoungeDesignSystem_019dea`)
buttons: `Button` (primary/outline/ghost) · display: `Eyebrow`, `SectionHeading` · content: `Badge`, `PriceCard`, `GlowImage`, `MenuItem`, `NumberedReason`, `StepCard`, `NewsCard`, `FaqItem`

## Caveats
- Fonts are real Google Fonts (Cormorant Garamond, DM Sans, Michroma) via `@import`.
- Gem mark is a raster PNG (originally magenta); recolor to gold via CSS filter or supply a vector.
- UI-kit / gallery imagery loads from live CDN `img.danang-girlsbar.com` (needs network).

> Full manifest (every token + component), per-component sources, guidelines cards, and the compiled `_ds_bundle.js` live in the Claude Design project — pull on demand via the design MCP (`get_file`) when a build needs them.
