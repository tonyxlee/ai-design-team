---
name: design-qa
description: 디자인팀 3단 QA 스킬 — QA-U(지시 이해)·QA-S(단계 산출)·QA-F(최종 결과물) 체크리스트, 크레딧 최소화 규칙, qa-report.json 작성 규칙. design-qa-reviewer가 사용한다.
---

# design-qa — 3단 QA 체크리스트 (v2)

만드는 사람과 분리된 시각으로 검수한다. **검수 비용도 품질이다** — 아래 비용 규칙을 체크리스트보다 먼저 적용한다.

## 크레딧 최소화 규칙 (모든 게이트 공통)
1. **기계 먼저** — 스키마 검증·adherence.py·qa.py가 FAIL이면 정성 검수 없이 즉시 `fix_instructions` 발행 후 종료. (`model_used: "machine"`)
2. **모델 차등** — QA-U는 대조 수준(haiku급), QA-S는 내용 검수(sonnet급), **opus급 정밀 판단은 QA-F 최종 판정·에스컬레이션만**. `model_used`에 기록.
3. **diff 재검** — 재검수는 수정된 섹션/파일만(`checked_scope: "diff"`). 전체 재검은 blocker 재발 시만.
4. **배치** — 산출물 여러 개는 1회 보고서로 묶는다.
5. **생략 조건** — 동일 브랜드·동일 포맷 반복분(2건째~)은 QA-U 생략, QA-S는 표본 검사(오케스트레이터가 지정).

## QA-U — 지시 이해 게이트 (gate=understanding, 착수 전)
- [ ] 목표·브랜드·`design_system`·`output_type`·`budget`이 brief와 일치하는가
- [ ] 팀이 선언한 "한 줄 컨셉/차용 포인트/준수 규칙/비용 계획"이 타당한가
- [ ] 입력 JSON(brief/collection/plan)에 모순·누락이 없는가
→ 하나라도 어긋나면 **FAIL** + 무엇을 다시 이해해야 하는지 `fix_instructions`. (대조 수준 — 재해석·재기획 금지)

## QA-S — 단계 산출 게이트 (gate=stage_output, 각 JSON 산출 직후)
공통: 스키마 적합(기계) 선행.
- **stage=collection**
  - [ ] 레퍼런스마다 signal(반응 근거)·patterns 구체성
  - [ ] 디자인시스템 매핑(language_summary) 정확성
  - [ ] **캐시 활용** — template_refs/source_runs 기록, 불필요한 외부 재수급 없음
  - [ ] 적재물 license 기재(미확인 = reference-only)
- **stage=plan**
  - [ ] brief·collection 정합(차용 연출이 실제 collection에 있음)
  - [ ] 토큰이 브랜드 팔레트 안, 카피가 브랜드 보이스
  - [ ] **asset_specs 비용 합리성** — 무료 경로(재사용/CSS·SVG)로 될 것을 유료 생성으로 설계하지 않음
  - [ ] component_source 지정이 template_library 실존 항목과 일치
- **stage=assets**
  - [ ] 에셋별 spec_met 실사(크기·must_have·브랜드 톤)
  - [ ] **license 적법성** — reference-only 복사 없음
  - [ ] 유료 건마다 `approved_by_orchestrator: true` + quote 존재
  - [ ] cache_key 기록(동일 프롬프트 중복 생성 없음)

## QA-F — 최종 결과물 게이트 (gate=final, stage=production)
L0 자동검사 통과 전제(미통과면 규칙 1):
- [ ] **브랜드 준수** — `python pipeline/adherence.py <html> <design_system>`. 팔레트 밖 색·비-0 라디우스·금지 그림자 위반을 근거와 함께. (불가피한 예외는 producer notes 사유 확인)
- [ ] **카피** — 브랜드 보이스(readme CONTENT FUNDAMENTALS)·CTA 규칙, 오탈자 없음
- [ ] **반응형/기술** — `python pipeline/qa.py <html>` + 브라우저로 콘솔 에러·깨진 링크·미로드 자산·데스크톱/모바일 뷰포트
- [ ] **접근성** — 이미지 alt·대비·시맨틱 구조 기본 충족
- [ ] **이식 품질** — imported_components의 토큰화 변환 완전성(원 소스 hex/폰트 잔재 없음 — adherence로 교차 확인)
- [ ] **에셋 정합** — assets_used가 asset-manifest와 일치, 플레이스홀더 잔존 없음(있으면 notes에 사유)
- [ ] **요구 충족** — brief `must_include[]` 전부 반영

## 판정
- **PASS** — 모든 필수 항목 통과.
- **CONDITIONAL** — 경미한 수정 후 diff 재검(오탈자, 자잘한 준수 위반). `severity: minor|major`.
- **FAIL** — 요구 미충족/브랜드 크게 이탈/기술 결함/무승인 유료 호출. `severity: blocker`.

## 출력
`pipeline/workspace/<project_id>/qa-report.json`(`qa-report.schema.json` 준수: stage·gate·verdict·severity·checked_scope·model_used·credits). `checks[]`에 각 항목 result+evidence, FAIL/CONDITIONAL이면 실행 가능한 `fix_instructions[]`. 증거(스크린샷·로그·인용) 첨부. `credits.llm_calls`·`escalated_to_opus`를 정직하게 기록(오케스트레이터가 집계).
