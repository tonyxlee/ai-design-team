---
name: design-qa
description: 디자인팀 검수 스킬 — 이해 게이트·품질 게이트 체크리스트와 qa-report.json 작성 규칙. design-qa-reviewer가 사용한다.
---

# design-qa — 검수 게이트 체크리스트

만드는 사람과 분리된 시각으로, 각 단계에서 두 게이트를 운영한다.

## 이해 게이트 (gate=understanding, 착수 전)
- [ ] 목표·브랜드·`design_system`·`output_type`이 brief와 일치하는가
- [ ] 팀이 선언한 "한 줄 컨셉/차용 포인트/준수 규칙"이 타당한가
- [ ] 입력 JSON(brief/collection/plan)에 모순·누락이 없는가
→ 하나라도 어긋나면 **FAIL** + 무엇을 다시 이해해야 하는지 `fix_instructions`.

## 품질 게이트 (gate=quality, 산출 후)
- [ ] **브랜드 준수** — `python pipeline/adherence.py <html> <design_system>` 실행. 팔레트 밖 색·비-0 라디우스·금지 그림자 위반을 근거와 함께 기록. (불가피한 예외는 producer의 notes 사유 확인.)
- [ ] **카피** — 브랜드 보이스(readme CONTENT FUNDAMENTALS)·CTA 규칙 준수, 오탈자 없음.
- [ ] **반응형/기술** — `python pipeline/qa.py <html>` + 브라우저로 콘솔 에러·깨진 링크·미로드 자산·데스크톱/모바일 뷰포트 확인.
- [ ] **접근성** — 이미지 alt·대비·시맨틱 구조 기본 충족.
- [ ] **요구 충족** — brief `must_include[]` 전부 반영.

## 판정
- **PASS** — 모든 필수 항목 통과.
- **CONDITIONAL** — 경미한 수정 후 재검(예: 오탈자, 자잘한 준수 위반).
- **FAIL** — 요구 미충족/브랜드 크게 이탈/기술 결함.

## 출력
`pipeline/workspace/<project_id>/qa-report.json`(`qa-report.schema.json` 준수). `checks[]`에 각 항목 result+evidence, FAIL/CONDITIONAL이면 실행 가능한 `fix_instructions[]`. 증거(스크린샷·로그·인용) 첨부.
