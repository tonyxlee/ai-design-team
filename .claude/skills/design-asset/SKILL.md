---
name: design-asset
description: asset_specs를 실물 에셋(이미지·목업·효과)으로 만드는 절차 — 비용 오름차순 라우팅, 유료 견적 선승인, 캐시, asset-manifest.json 작성 규칙. design-asset-artist가 사용한다.
---

# design-asset — 에셋 생산 절차

**핵심:** 에셋 1건 = 라우트 1회 결정. 항상 `pipeline/tools_registry.json`의 `fallback_chains`를 왼쪽(무료)부터. 유료는 견적 선승인.

## 절차
1. **입력 학습** — `plan.json`의 `asset_specs[]`(id·purpose·size·style·must_have), `brief.json`의 `budget`, 대상 디자인시스템 readme(색·톤).
2. **라우팅 결정** — 에셋별로:
   - `template_library/index.json`에서 태그·cache_key 검색 → 히트면 **reuse**.
   - 기하·그라데이션·패턴·아이콘·텍스트배지 → **css-svg-authoring**: 고정 캔버스 HTML로 그려 `python pipeline/screenshot.py <file> <out.png> <viewport>` export. 토큰만 사용, adherence 통과 필수.
   - 사진형·일러스트·합성·3D목업 → 무료 수급 가능한지 확인 후, 불가하면 생성 경로 후보 지정.
3. **견적** — 생성 경로(MCP/브라우저)가 필요한 에셋을 모아 `asset-manifest.json`의 `quote`에 기록(건수·경로·예상 비용) → 오케스트레이터에 승인 요청. `budget.paid_routes=deny`면 생략하고 플레이스홀더 처리.
4. **실행**
   - MCP 생성: 대상 서비스의 generate 도구. 프롬프트에 브랜드 톤(팔레트·무드) 명시. 결과는 `assets/`에 저장.
   - 브라우저(ChatGPT/Morflax): 빌트인 브라우저로 조작. 로그인 화면이 나오면 중단하고 보스에게 요청. 다운로드는 승인 흐름을 따른다.
   - 모든 생성물에 `prompt`·`cache_key`(프롬프트 SHA1 앞 12자)·`source_url` 기록.
5. **자가검사** — 에셋별 `spec_met`: size 일치, must_have 포함, 브랜드 톤 부합. 투명 배경 요구 시 실제 알파 확인.
6. **라이브러리 환류** — 재사용 가치가 있는 생성물(범용 배경·패턴 등)은 collector 적재 규칙에 따라 `template_library/`에도 복사 제안(notes에 기재).

## 출력
`pipeline/workspace/<project_id>/assets/` + `asset-manifest.json`(`pipeline/io_schemas/asset-manifest.schema.json` 준수).

## 금지
- 견적 승인 없는 유료 호출. 동일 cache_key 재생성. CAPTCHA/로그인 우회. `license: reference-only` 소스의 직접 복사.
