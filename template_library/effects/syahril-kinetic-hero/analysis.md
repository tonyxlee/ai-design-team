# Syahril 포트폴리오 — 키네틱 타이포 히어로 (브라우저 렌더 분석)

> 수집일 2026-10-18 · 소스: https://www.syahrilarfianalmazril.my.id (JS 렌더 — 브라우저 실측)
> license: reference-only (패턴 분석. 코드는 아래 tokenized.css에 자체 저작)

## 실측값 (javascript_tool computed styles)
- **거대 스택 타이포**: H1, Inter 900, 112.64px(≈7vw+), line-height **0.85**, letter-spacing **-0.05em**. 단어를 행 단위로 쪼개 화면 우측 2/3을 타이포 블록이 점유. 행 중간에 아이콘 칩(⚡ 등)을 인라인 삽입해 기계적 단조로움을 깸.
- **그라데이션 클립 + 시머**: `background: linear-gradient(120deg,#fff 30%,#666 50%,#fff 70%)` + `background-clip:text` + `@keyframes text-shiny { 0%{background-position:200% center} 100%{background-position:-200% center} }` 4s — 텍스트 표면 위로 빛이 흐르는 효과.
- **스무스 스크롤**: Lenis(GSAP 아님). 섹션 리빌은 opacity+translate 전환.
- **마퀴 듀얼 스트립**: `@keyframes marquee { to{transform:translate(-100%)} }` + 역방향 `marquee-reverse` 2줄 교차 — 섹션 경계 리듬.
- **프리로더**: 순흑 화면에 필기체 글자 드로잉 후 본 화면 진입(첫 3~4초).
- 기타 키프레임: float(±20px·2deg), meteor, scan, pulse-glow.

## 차용 포인트 (collection patterns용)
1. 히어로 타이포를 "읽는 텍스트"가 아니라 **화면을 채우는 조형물**로: 초대형·초타이트(lh<0.95, ls<0) + 행 분해.
2. 시머는 그라데이션 배경-포지션 이동 1개 키프레임로 충분 — 레이어 추가 없음.
3. 마퀴 스트립은 섹션 사이 **속도감 있는 구분선** 역할. 듀얼 역방향이 포인트.
