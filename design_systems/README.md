# design_systems/ — 팀 기본 브랜드 자산

AI 디자인팀이 산출물을 만들 때 참조하는 **디자인 시스템 레지스트리**.
각 시스템은 claude.ai/design 프로젝트에서 유래하며, 여기엔 제작에 필요한 **디자인 언어 정본**을 스테이징한다.

| 키 (`design_system`) | 브랜드 | Claude Design projectId | namespace | 스테이징 |
|---|---|---|---|---|
| `apple-design-language-system` | Apple 웹 (제품 사진 중심) | `38620f94-e2e8-463e-afc7-8115c8f2cca2` | `AppleDesignLanguageSystem_38620f` | **전체**(styles·tokens·bundle·manifest·readme·adherence) |
| `bmw-m` | BMW M (순흑+대문자+M삼색) | `825f3cd8-0e22-4a87-8beb-0bc152db9c9d` | `BMWMDesignSystem_825f3c` | readme + styles (인덱스) |
| `boss-bar-lounge` | Boss Bar Lounge (near-black+골드 글로우) | `019dea4a-955b-7856-8b66-447046718cf2` | `BossBarLoungeDesignSystem_019dea` | readme + styles (인덱스) |

## 스테이징 정책

- **Apple** — 로컬 익스포트 zip에서 완전 추출. `styles.css`를 `@import`하면 토큰이 그대로 해석돼 **로컬 렌더 가능**.
- **BMW M · Boss Bar** — `readme.md`(디자인 언어 정본, 토큰값 포함) + `styles.css`(임포트 순서)만 스테이징. 개별 `tokens/*.css`, `_ds_manifest.json`, 컴포넌트 소스, 컴파일 번들은 **온디맨드**로 design MCP(`get_file`)를 통해 당긴다(design-collector 담당).

## 제작팀 사용 규칙 (중요)

강남 달토 정본(`index-98d54ebd.html`)이 그랬듯, **제작 산출물은 React 번들을 마운트하지 않고 디자인 언어(토큰·타입·스페이싱·글로우)를 읽어 자기완결 HTML로 저작**한다. 즉:

1. 대상 `design_system`의 `readme.md`를 학습해 색·타입·스페이싱·모션·do/don't를 파악한다.
2. 필요한 토큰값을 산출 HTML의 `:root{ --x: … }`에 **인라인**한다(외부 의존 최소화).
3. 브랜드 규칙(대문자/세리프/0px 라디우스/글로우 등)을 그대로 지킨다 → `pipeline/adherence.py`가 검사.
4. 실제 컴포넌트 마크업/변형이 필요하면 해당 프로젝트에서 `.prompt.md`/`.jsx`를 온디맨드로 당겨 참고한다.

## 새 브랜드 추가

새 디자인 시스템이 필요하면 claude.ai/design에서 저작 후, projectId를 이 표에 추가하고 `readme.md`를 스테이징한다.
(디자인 시스템 자체의 claude.ai/design 업로드는 별도 `/design-sync` 스킬 영역.)
