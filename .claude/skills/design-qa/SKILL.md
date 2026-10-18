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
- [ ] **모션/인터랙션** — 웹 산출물에 스크롤 리빌·hover/focus 상태·앰비언트 모션이 design-produce 절차 5대로 존재하는지 브라우저로 실측(스크롤해보고, 호버해보고). 완전 정적이면 **FAIL**. prefers-reduced-motion 에뮬레이션에서 콘텐츠 정상 노출 확인.
- [ ] **디자인 완성도(v2.1 — adherence와 별개의 "훌륭함" 게이트)** — 아래 절차로 벤치마크와 나란히 비교 판정:
  1. 산출물 스크린샷과 **동급 레퍼런스**(collection.json refs 스크린샷, `design_systems/<key>/ui_kits/` 원본 렌더, template_library의 럭셔리/다크 계열 — Awwwards급 기준) 를 나란히 띄운다.
  2. 세 축을 각각 1~5로 채점하고 evidence에 근거를 쓴다:
     - **타이포 디테일** — 디스플레이의 lh/자간/행 분해/강조 처리 수준이 레퍼런스급인가, 아니면 "크기만 키운 기본 폰트"인가.
     - **여백 리듬** — 위계에 비례한 점증 간격인가, 균일 나열인가. 섹션이 숨 쉴 공간이 있는가.
     - **비주얼 임팩트** — 첫 화면이 깊이(다층 배경·빛·질감)를 갖는가, 단색 배경 + 텍스트 나열인가. 3초 안에 "비싸 보이는가".
  3. 판정 기준: 세 축 **평균 3.5 미만 또는 어느 축이든 2 이하면 CONDITIONAL**(fix_instructions에 축별 구체 지시), 평균 2.5 미만이면 **FAIL**. adherence 통과(틀리지 않음)는 이 게이트를 면제하지 않는다.

## 판정
- **PASS** — 모든 필수 항목 통과.
- **CONDITIONAL** — 경미한 수정 후 diff 재검(오탈자, 자잘한 준수 위반). `severity: minor|major`.
- **FAIL** — 요구 미충족/브랜드 크게 이탈/기술 결함/무승인 유료 호출. `severity: blocker`.

## 출력
`pipeline/workspace/<project_id>/qa-report.json`(`qa-report.schema.json` 준수: stage·gate·verdict·severity·checked_scope·model_used·credits). `checks[]`에 각 항목 result+evidence, FAIL/CONDITIONAL이면 실행 가능한 `fix_instructions[]`. 증거(스크린샷·로그·인용) 첨부. `credits.llm_calls`·`escalated_to_opus`를 정직하게 기록(오케스트레이터가 집계).
