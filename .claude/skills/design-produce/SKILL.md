---
name: design-produce
description: plan.json을 디자인 언어로 자기완결 HTML(또는 그래픽 PNG)로 저작하고 검증하는 제작 절차. design-producer가 사용한다.
---

# design-produce — 제작 & 검증

**핵심:** React 번들을 마운트하지 말고, 디자인 시스템의 **언어(토큰·타입·스페이싱·모션)** 를 읽어 자기완결 HTML로 저작한다(강남 달토 정본 `samples/`의 방식).

## 절차
1. `plan.json` + `asset-manifest.json` + `design_systems/<key>/readme.md`를 학습. 색·타입·스페이싱·모션·do/don't 확인.
2. **저작** — 섹션을 스펙대로 HTML/CSS로. 필요한 토큰을 `:root{ --x: … }`에 인라인. 브랜드 규칙(대문자/세리프/0px/글로우 등) 준수. 폰트는 readme에 명시된 Google Fonts 등을 링크.
3. **컴포넌트 이식(v2)** — `component_source`가 template-library/21st-dev인 섹션은 원 코드를 **토큰화 변환**해 이식: React/JSX → 순수 HTML/CSS, Tailwind 클래스 → 토큰 기반 CSS, 색·폰트·간격은 전부 브랜드 토큰으로 치환. 원 소스 잔재(하드코딩 hex·외부 폰트) 금지 — adherence가 잡는다. 변환 내역은 `imported_components[]`에 기록(source·id·conversion·license).
4. **자산(v2)** — `asset-manifest.json`의 에셋을 섹션 지정대로 배치하고 `assets_used[]`에 기록. 없으면 정직한 플레이스홀더 + `notes`에 필요 자산 목록.
5. **모션/인터랙션 레이어(v2.1 — 필수, 정적 산출 금지)** — 웹 산출물(A/B/C)은 반드시 모션을 입힌다. 기본 장비는 `template_library/effects/motion-scroll-reveal/`(CSS+JS 복사, 의존성 0):
   - **스크롤 리빌** — 섹션 단위 `data-reveal` + 그룹 내 `data-reveal-group` 스태거(제목 → 리드 → 본문 → CTA 순). 히어로 첫 화면은 로드 직후 등장(리빌 지연 금지).
   - **패럴랙스** — 배경 할로·장식 레이어에만 `data-parallax="0.08~0.15"`(±40px 클램프). 본문 텍스트에는 금지.
   - **마이크로 인터랙션** — 모든 인터랙티브 요소에 hover/focus 상태(DS readme의 Hover/press 규칙 그대로: 글로우 증폭·translateY(-1px)·색 전환). focus-visible 아웃라인 필수.
   - **앰비언트** — 디자인시스템이 가진 상시 모션(BBL: 프라이머리 버튼 shimmer, 골드 시머 텍스트)을 1~2곳에만. 화면 전체가 움직이면 싸구려가 된다 — "**정지 화면 속 두세 곳의 숨**"이 기준.
   - **prefers-reduced-motion 필수** — 모든 모션 정지 + 콘텐츠 정적 노출. no-JS에서도 콘텐츠가 보여야 한다(모듈의 `html.no-reveal` 폴백).
   - 이징·지속시간은 DS 토큰(`--bbl-ease`, `--bbl-dur-*` 등)만. **bounce/spring/무한 spin 금지**(DS Motion 규칙).
6. **시각 완성도(v2.1 — "틀리지 않음"을 넘어 "훌륭함")** — QA-F의 디자인 완성도 게이트가 이 기준으로 본다:
   - **깊이 레이어** — 다크 배경은 단일 색/단일 radial로 끝내지 않는다. 최소 3겹(배경 → 다층 할로/그라데이션 → 그레인/비네트), `template_library/effects/gold-atmosphere/` 참조.
   - **타이포 디테일** — 디스플레이는 크기만 키우지 말고 lh 0.9~1.1·자간 음수·행 분해·강조어 이탤릭/그라데이션 클립까지. 원본 ui_kit(`design_systems/<key>/ui_kits/`)의 실제 h1 처리를 먼저 본다.
   - **여백 리듬** — 섹션 내 간격은 위계와 비례(눈썹 24 → 제목 24 → 리드 28 → CTA 40처럼 점증). 균일 간격 나열 금지.
   - **글로우/효과 값은 원본 토큰** — `design_systems/<key>/tokens/effects.css` 실값 사용. 임의 알파 발명 금지(스테이징돼 있지 않으면 DesignSync로 당겨 스테이징 후 사용).
   - A/B/C 웹: 폴더를 사이트 루트로 `python pipeline/preview_server.py <folder> <port>` 서빙.
   - D 그래픽: 고정 캔버스 HTML → `python pipeline/screenshot.py <file> <out.png> <viewport>`.
7. **자가검사(제출 전 필수)**
   - `python pipeline/adherence.py <html> <design_system>` — 위반 0 목표.
   - `python pipeline/qa.py <html>` — 자산·라우트·alt·메타.
   - 브라우저 미리보기로 실제 렌더·콘솔·반응형 확인(mcp__Claude_Browser__*). 자동재생 영상은 정지 후 스크린샷.

## 출력
`pipeline/workspace/<project_id>/`에 산출물(`final.html`/PNG)과 `production.json`(artifacts·adherence·tech_checks·assets_used·imported_components·credits; `production.schema.json` 준수). 스크린샷 경로 포함.
