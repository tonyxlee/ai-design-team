# BMW M — Homepage UI Kit

A high-fidelity recreation of the BMW M marketing homepage, composed entirely from this design system's components.

## Files
- `index.html` — mounts the interactive homepage. Loads `_ds_bundle.js` + `HomePage.jsx`.
- `HomePage.jsx` — the screen. Composes `TopNav`, `HeroPhotoBand`, `ModelCard` grid, `SpecCell` band, `MotorsportPhotoCard`, `FeaturePhotoCard` grid, `CtaBandPhoto`, and `Footer`, plus floating `ChatbotLauncher` and `CookieConsentCard`.

## Interactions (faked)
- Top-nav tabs switch the active item.
- Chatbot launcher expands into a mini chat panel; ✕ closes it.
- Cookie banner dismisses on Accept / Manage.

## Band rhythm
Follows the system rule — no two consecutive bands share a surface mode:
hero photo → model grid (canvas) → spec table (surface-soft) → motorsport photos (canvas) → magazine grid (surface-soft) → CTA photo → footer.

## Photography
All photo areas render honest dark placeholders labelled PHOTO / HERO PHOTOGRAPHY — no real automotive imagery was provided. Supply real full-bleed images via the `image` prop on each component to make the kit production-ready.

(스테이징 노트) HomePage.jsx 전문과 나머지 컴포넌트 .jsx/.prompt.md는 DesignSync `get_file`로 온디맨드 수급 — projectId `825f3cd8-0e22-4a87-8beb-0bc152db9c9d`.
