# Boss Bar Lounge — Website UI Kit

An interactive recreation of the Boss Bar Lounge marketing site (danang-girlsbar.com), composed entirely from this design system's primitives.

## Screens
- **Home** (`HomeScreen.jsx`) — hero, urgency banner, choice-system pricing grid, "5 Reasons" numbered list, "Visit in 4 Steps", and the gallery mosaic.
- **Drinks** (`DrinksScreen.jsx`) — grouped bottle menu (beer/soju, towers, scotch, champagne) using `MenuItem`.
- **Visit** (`VisitScreen.jsx`) — address/hours/contact panel, interior photo, language pills.
- **Nav / Footer** — sticky Michroma wordmark nav with gold-pulse CTA; multilingual footer.

## How it works
`index.html` loads `../../styles.css` and `../../_ds_bundle.js`, then mounts each screen as a Babel script that assigns to `window`. Screen switching is local React state; `About / Gallery / News / Reviews` route to Home (those pages exist on the live site but are out of scope for the kit).

## Notes
- Imagery is loaded from the live CDN (`img.danang-girlsbar.com`). Requires network.
- This is a cosmetic recreation for design reference — not production code.
- Source of truth: the `boss-bar-deploy/` static site and `tonyxlee/boss-bar-lounge` repo.
- (스테이징 노트) HomeScreen.jsx는 DesignSync 원본 사본 — 히어로 타이포 레퍼런스: h1 line-height 0.88, 3행 구성(백색 0.9 / 이탤릭 골드 그라데이션 클립 + drop-shadow 28px .50 / tan-light + text-shadow 28px .65), 메타 도트 행, CTA 3단(primary/outline/ghost).
