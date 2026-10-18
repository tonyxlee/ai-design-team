# 21st.dev 수급 절차 노트 (시드)

> 수집일 2026-10-18 · 소스: https://21st.dev/llms.txt

- 카테고리 목록 페이지: `https://21st.dev/community/components/s/<카테고리>` — hero, pricing-section, background, animated 등. **URL 뒤 `.md`를 붙이면 마크다운 버전**(에이전트 친화) 제공.
- 컴포넌트 페이지 패턴: `https://21st.dev/@<작성자>/components/<슬러그>` (+`.md`).
- **코드 전문 수급은 shadcn CLI + API 키 필요:**
  `npx shadcn@latest add "https://21st.dev/r/<작성자>/<슬러그>?api_key=$API_KEY_21ST"`
  API 키 발급: https://21st.dev/mcp — **보스 결정 대기**(무료 쿼터: 일 2회 복사).
- 라이선스는 컴포넌트별 상이(다수 "unknown") → 코드 수급 전 확인, 미확인은 `reference-only`.
- 수급한 React/Tailwind 코드는 반드시 **토큰화 변환**(순수 HTML/CSS + 브랜드 토큰) 후 사용 — design-produce 스킬 절차 3.
