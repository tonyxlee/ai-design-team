---
name: design-collect
description: 벤치마킹 레퍼런스 발굴·분석 + 디자인 시스템 매핑 절차와 collection.json 작성 규칙. design-collector가 사용한다.
---

# design-collect — 레퍼런스 수집 & 디자인시스템 매핑

## 절차
1. **캐시 조회(v2, 최우선)** — `template_library/index.json`에서 태그·kind로 검색. 히트는 `template_refs[]`에 기록(크레딧 0). 외부 수급 전 반드시 cache_key 중복 확인.
2. **디자인시스템 매핑** — `design_systems/<key>/readme.md`를 읽어 색·타입·스페이싱·모션·do/don't를 `language_summary`로 요약. 세부 토큰/컴포넌트가 필요하면 design MCP(`DesignSync get_file`)로 온디맨드로 당기고 `on_demand_notes`에 기록.
3. **학습 소스 수급(v2)** — `pipeline/tools_registry.json`의 소스에서 프로젝트에 맞는 자원을 수급 → template_library에 적재 → `source_runs[]`에 기록:
   - 21st.dev: 페이지 URL 뒤 `.md` 붙인 마크다운 버전·llms.txt·REST API 우선. 무료 쿼터(일 2회 복사) 내에서.
   - getdesign.md: 유사 업종 DESIGN.md 2~3종 → `design-md/`.
   - syahril 포트폴리오 등 JS 사이트: 브라우저 렌더는 **최후 수단**.
   - Claude Design: DesignSync 읽기 전용(list_projects → get_file).
4. **레퍼런스 발굴** — brief의 output_type·브랜드 톤에 맞는 우수 사례를 웹에서 찾는다. 각 사례:
   - `signal`: 반응 근거(수상·트래픽·좋아요·업계 평판 등)
   - `patterns`: 차용 가능한 구체 연출/레이아웃/카피 패턴
   - 가능하면 스크린샷을 `workspace/<id>/refs/`에 저장.
5. **인사이트 도출** — 사례 종합에서 기획에 쓸 인사이트를 뽑는다.

## template_library 적재 절차 (v2 — 적재는 collector만)
1. `components|effects|design-md|mockups/<id>/`에 저장 — 코드형은 original과 (가능하면) 브랜드 토큰 치환본(tokenized)을 함께.
2. `index.json` entries 추가: id·kind·source·source_url·**license**(상용 불가 = `reference-only`)·tags·cache_key(URL/프롬프트 해시)·added.
3. 보스가 직접 "학습해둬"라고 준 효과/템플릿도 같은 절차. qa 검증 통과 시 `verified: true`.

## 규칙
- 반응·품질이 검증된 사례만. 단순 다수 나열 금지 — "왜 좋은가"를 반드시 적는다.
- 공개 콘텐츠는 레퍼런스로만. 무단 자산 다운로드·재배포 금지. license 미확인 자원은 `reference-only`.
- 같은 소스·같은 질의 재수급 금지(source_runs와 cache_key로 확인).

## 출력
`pipeline/workspace/<project_id>/collection.json`(`collection.schema.json` 준수).
