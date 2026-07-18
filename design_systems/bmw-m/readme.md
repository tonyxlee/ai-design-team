# BMW M Design System

A design system recreating the visual language of **BMW M's marketing surface** — a near-pure black canvas holding confident UPPERCASE white headlines, with brand energy coming almost entirely from full-bleed automotive photography. The M tricolor stripe is the only decorative accent, used sparingly as a brand-identity marker.

> **Source:** Built from a written BMW M brand-style specification. No codebase, Figma file, or image assets were provided. Where the spec references full-bleed automotive photography, components render honest dark placeholders — supply real imagery to make anything production-ready.
> **Claude Design project:** `825f3cd8-0e22-4a87-8beb-0bc152db9c9d` · namespace `window.BMWMDesignSystem_825f3c`

## ⚠️ Substitutions & gaps
- **Fonts:** BMW Type Next Latin is licensed and was not provided → substitutes **Inter** (300 + 700), display tracking −0.5px.
- **Logo:** proprietary BMW roundel + M logo not provided; `Wordmark` renders "BMW · tricolor · M" as a stand-in.
- **Photography:** no automotive imagery provided → dark placeholders. Supply hero / model / motorsport photography.
- **Icons:** Unicode stand-ins (chevrons, search, account).

## CONTENT FUNDAMENTALS
**Voice — engineered, confident, European.** Terse, declarative. Headlines land like a stamp: "More BMW M.", "The Ultimate", "Drive an M." A race engineer's tone, not a salesperson's.

**Casing is a brand signal.**
- Display headlines are **UPPERCASE** (h1/h2 all-caps; sentence-case display is off-brand).
- Sub-heads and body stay **sentence case**.
- Labels/buttons/tabs/links are **UPPERCASE + 1.5px letter-spacing** ("VIEW ALL MODELS").

**Person:** product-forward. Rarely "you"; almost never "I/we". The car is the subject.
**Numbers are hero content:** "530 hp", "3.5 s 0–100 km/h", "290 km/h". Units lowercase and spaced.
**Emoji:** never. **Exclamation marks:** rare.

## VISUAL FOUNDATIONS (token values)
**Color.** True-black canvas `--color-canvas #000` with white type `--color-on-dark #fff`. Near-black ladder: `--color-surface-soft #0d0d0d` → `--color-surface-card #1a1a1a` → `--color-surface-elevated #262626` → `--color-carbon-gray #2b2b2b`. Body text `--color-body #bbbbbb`; captions `--color-muted #7e7e7e`. **M tricolor** (`--color-m-blue-light #0066b1` → `--color-m-blue-dark #1c69d4` → `--color-m-red #e22718`) is brand-identity only — **never a button, never a background fill**. `--color-electric-blue #0653b6` = separate EV accent. Hairlines `--color-hairline #3c3c3c`.

**Type.** Heavy display (700) vs Light body (300) — the weight contrast IS the signature. Never 400/500 display or body. Display sizes 80 / 56 / 40 / 32px UPPERCASE. Body 16 / 14px @ 300. Labels/buttons 14px / 700 / 1.5px tracking uppercase.

**Spacing.** 4px base. `--space-section 96px` between bands; `--space-xxl 64px` in hero/footer; `--space-lg 24px` card padding + gutters; `--space-xl 40px` spec-cell padding. `--container-max 1440px`, centered. `--nav-height 64px`.

**Radius — binary.** `--radius-none 0px` dominant (buttons, cards, photo, inputs). `--radius-full` for icon buttons / arrows only. `--radius-sm 4px` only on config pills. Sharp rectangles = engineered precision.

**Backgrounds.** Pure black — **no gradients, no textures behind type**. The only "background" is full-bleed automotive photography edge-to-edge. Scrims over photography are flat black alpha ramps.

**Shadows & elevation.** None. No drop shadows. Depth = photography + canvas↔surface-card contrast. `--elevation-hairline` (1px inset outline) is the only elevation token. `--m-stripe-height 4px`.

**Animation.** Minimal, functional (fades, no bounces).

## Components (`window.BMWMDesignSystem_825f3c`)
buttons: `Button` (primary/outline/on-light), `IconButton`, `TextLink` · navigation: `TopNav`, `CategoryTab`, `Footer`, `Wordmark` · cards: `HeroPhotoBand`, `FeaturePhotoCard`, `ModelCard`, `MagazineArticleCard`, `SpecCell`, `MotorsportPhotoCard`, `ChatbotLauncher` · forms: `TextInput`, `CookieConsentCard` · brand: `MStripeDivider`, `CtaBandPhoto`

## Do's & Don'ts
**Do:** anchor pages with full-bleed photography · UPPERCASE display 700 + Light 300 body · reserve tricolor for brand moments · default 0px radius · letter-space caps 1.5px · 96px between bands.
**Don't:** colors outside M tricolor + heritage blue · bold body · round buttons · gradients behind hero type · repeat a surface mode in consecutive bands · M stripe as a button fill.

> Full manifest (every token + component), per-component `.prompt.md`/`.d.ts`, guidelines cards, and the compiled `_ds_bundle.js` live in the Claude Design project — pull on demand via the design MCP (`get_file`) when a build needs them.
