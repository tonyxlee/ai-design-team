---
name: design-collect
description: 벤치마킹 레퍼런스 발굴·분석 + 디자인 시스템 매핑 절차와 collection.json 작성 규칙. design-collector가 사용한다.
---

# design-collect — 레퍼런스 수집 & 디자인시스템 매핑

## 절차
1. **디자인시스템 매핑** — `design_systems/<key>/readme.md`를 읽어 색·타입·스페이싱·모션·do/don't를 `language_summary`로 요약. 세부 토큰/컴포넌트가 필요하면 design MCP(`DesignSync get_file`)로 온디맨드로 당기고 `on_demand_notes`에 기록.
2. **레퍼런스 발굴** — brief의 output_type·브랜드 톤에 맞는 우수 사례를 웹에서 찾는다. 각 사례:
   - `signal`: 반응 근거(수상·트래픽·좋아요·업계 평판 등)
   - `patterns`: 차용 가능한 구체 연출/레이아웃/카피 패턴
   - 가능하면 스크린샷을 `workspace/<id>/refs/`에 저장.
3. **인사이트 도출** — 사례 종합에서 기획에 쓸 인사이트를 뽑는다.

## 규칙
- 반응·품질이 검증된 사례만. 단순 다수 나열 금지 — "왜 좋은가"를 반드시 적는다.
- 공개 콘텐츠는 레퍼런스로만. 무단 자산 다운로드·재배포 금지.

## 출력
`pipeline/workspace/<project_id>/collection.json`(`collection.schema.json` 준수).
