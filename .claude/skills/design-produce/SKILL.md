---
name: design-produce
description: plan.json을 디자인 언어로 자기완결 HTML(또는 그래픽 PNG)로 저작하고 검증하는 제작 절차. design-producer가 사용한다.
---

# design-produce — 제작 & 검증

**핵심:** React 번들을 마운트하지 말고, 디자인 시스템의 **언어(토큰·타입·스페이싱·모션)** 를 읽어 자기완결 HTML로 저작한다(강남 달토 정본 `samples/`의 방식).

## 절차
1. `plan.json` + `design_systems/<key>/readme.md`를 학습. 색·타입·스페이싱·모션·do/don't 확인.
2. **저작** — 섹션을 스펙대로 HTML/CSS로. 필요한 토큰을 `:root{ --x: … }`에 인라인. 브랜드 규칙(대문자/세리프/0px/글로우 등) 준수. 폰트는 readme에 명시된 Google Fonts 등을 링크.
3. **자산** — plan 지정 이미지/영상 배치. 없으면 정직한 플레이스홀더 + `notes`에 필요 자산 목록.
4. **타입별 산출**
   - A/B/C 웹: 폴더를 사이트 루트로 `python pipeline/preview_server.py <folder> <port>` 서빙.
   - D 그래픽: 고정 캔버스 HTML → `python pipeline/screenshot.py <file> <out.png> <viewport>`.
5. **자가검사(제출 전 필수)**
   - `python pipeline/adherence.py <html> <design_system>` — 위반 0 목표.
   - `python pipeline/qa.py <html>` — 자산·라우트·alt·메타.
   - 브라우저 미리보기로 실제 렌더·콘솔·반응형 확인(mcp__Claude_Browser__*). 자동재생 영상은 정지 후 스크린샷.

## 출력
`pipeline/workspace/<project_id>/`에 산출물(`final.html`/PNG)과 `production.json`(artifacts·adherence·tech_checks; `production.schema.json` 준수). 스크린샷 경로 포함.
