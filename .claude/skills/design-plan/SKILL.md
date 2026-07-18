---
name: design-plan
description: brief·collection을 학습해 IA·섹션 빌드 스펙·카피·컴포넌트/토큰 매핑을 설계하는 절차와 plan.json 작성 규칙. design-planner가 사용한다.
---

# design-plan — 기획 & 빌드 스펙 설계

## 절차
1. **logline + 차용 연출 3 + 준수 규칙**을 먼저 선언.
2. **IA 구성** — output_type에 맞게 섹션(또는 멀티페이지 `page_map`)을 배열. 히어로→설득(요금/이유/방법)→전환(예약/CTA) 흐름.
3. **섹션별 스펙** — 각 섹션에:
   - `intent`(역할), `layout`(풀블리드/2컬럼/카드그리드 등)
   - `components`(디자인시스템 컴포넌트 또는 패턴명)
   - `tokens`(실제 토큰 이름/값 — 제작팀이 :root에 인라인)
   - `copy`(eyebrow/headline/tagline/body/cta) — **브랜드 보이스**(readme의 CONTENT FUNDAMENTALS)를 그대로 따름
   - `assets`(이미지/영상, 없으면 플레이스홀더 설명)
4. **adherence_targets** — 반드시 지킬 브랜드 규칙 명시.
5. **responsive_rules** — desktop/mobile.

## 규칙
- 브랜드 팔레트 밖 색/폰트/라디우스를 지정하지 않는다(`design_systems/<key>/readme.md` 토큰만).
- 카피는 실제 카피를 쓴다(플레이스홀더 로렘 금지). 브랜드 보이스·CTA 규칙 준수.
- 제작팀이 추측 없이 그대로 저작할 수 있을 만큼 구체적으로.

## 출력
`pipeline/workspace/<project_id>/plan.json`(`plan.schema.json` 준수).
