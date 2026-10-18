---
name: design-brief
description: 사용자의 브랜드/포맷/느낌 요청을 정형화된 요구사항(brief.json)으로 만드는 절차. design-orchestrator가 착수 시 사용한다.
---

# design-brief — 요구사항 정형화

사용자 요청(브랜드·목표·포맷·느낌·제약)을 `brief.json`(`pipeline/io_schemas/brief.schema.json`)으로 만든다.

## 절차
1. **project_id 생성** — `YYYYMMDD-slug`(예: `20260719-dalto-gangnam`).
2. **브랜드·디자인시스템 확정** — 요청 브랜드에 맞는 `design_system` 키를 `design_systems/README.md` 표에서 고른다. 애매하면 사용자에게 확인. 없으면 신규 시스템 필요를 알린다.
3. **output_type 확정** — A_landing / B_multipage / C_section / D_graphic.
4. **핵심 채우기** — goal, audience, key_message(한 줄), must_include[](가격·CTA·연락처·특정 섹션 등 반드시 넣을 것).
5. **constraints** — lang(기본 ko), viewports[], length, deadline.
6. **deliverables** — 최종 파일 목록.
7. **budget(v2)** — 유료 경로 정책을 확정: `paid_routes`(deny/ask/allow, 기본 **ask** = 무료 우선·유료 건별 승인)와 allow 시 `credit_limit`. 사용자가 예산을 언급하지 않으면 기본값으로 두고 brief에 명시.
8. **asset_needs(v2)** — 사용자가 미리 지정한 에셋 요구(특정 이미지·목업·효과)를 기록. planner가 asset_specs로 구체화한다.

## 규칙
- 추측하지 말고, 목표·필수요소가 불명확하면 사용자에게 짧게 확인한다.
- brief는 이후 모든 팀의 계약서다. 모호함을 남기지 않는다.
- budget은 이후 모든 유료 호출의 근거가 된다 — 생략 금지.

## 출력
`pipeline/workspace/<project_id>/brief.json`. 작성 후 이해 게이트(design-qa-reviewer)로 넘긴다.
