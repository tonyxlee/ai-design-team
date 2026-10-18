# template_library — 학습 템플릿·효과 라이브러리

보스가 학습시킨 효과/템플릿과 외부 소스에서 수급한 UI 자원의 **로컬 캐시**.
모든 수급의 1차 조회 지점이며(캐시 히트 = 크레딧 0), 색인은 `index.json`.

```
index.json           전체 색인 (출처·라이선스·태그·검증 상태·cache_key)
components/<id>/     21st.dev 등에서 수급한 섹션/컴포넌트
                       original.*   원 코드 (React/Tailwind 등 그대로)
                       tokenized.*  프로젝트 디자인시스템 토큰 치환본
                       meta.json    개별 메타(색인 entry 사본)
effects/<id>/        글리치·디더·스크롤 인터랙션 등 (syahril·Morflax 계열)
design-md/<site>.md  getdesign.md 계열 DESIGN.md 사본
mockups/<id>/        Morflax 등에서 export한 목업 PNG/영상
```

## 규칙
1. **적재는 collector만** (design-collect 스킬의 적재 절차). 색인 없는 파일 금지.
2. `license: "reference-only"` 항목은 결과물에 복사 금지 — 패턴 참조만.
3. 수급 전 `cache_key`(URL/프롬프트 해시)로 중복 확인. 동일 키 재수급 금지.
4. 토큰화 변환본은 색·폰트·간격을 `design_systems/<sys>/tokens`로 치환한 것 — producer가 바로 이식하는 대상.
5. 보스가 "이 효과 학습해둬"라고 주면: 분석 → components|effects에 적재 → 색인 갱신 → qa 검증 후 `verified: true`.
