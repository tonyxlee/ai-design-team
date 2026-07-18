# AI 디자인팀 (AI Design Team)

브랜드·포맷·느낌을 입력하면 **레퍼런스 수집 → 기획 → 디자인 제작 → 검수**를 자동 수행하는
Claude Code 서브에이전트 팀. 보스의 **AI영상제작팀**과 동일한 집(house) 아키텍처를 디자인 도메인으로 이식했습니다.

각 단계마다 두 번의 검수 게이트가 있습니다.
1. **착수 전 검수(이해 게이트)** — 팀이 요구사항을 정확히 이해했는지 확인
2. **산출 후 검수(품질 게이트)** — 결과물이 요구사항·브랜드와 맞는지, 문제가 없는지 확인 후 수정

---

## 1. 팀 구성 (서브에이전트)

| 에이전트 | 역할 | 모델 | 정의 |
|---|---|---|---|
| **design-orchestrator** | 총괄 디렉터. brief 정리·팀 호출·게이트 관리·핸드오프 | opus | `.claude/agents/design-orchestrator.md` |
| **design-collector** | 수집. 우수 레퍼런스 발굴 + 디자인시스템 매핑 | sonnet | `.claude/agents/design-collector.md` |
| **design-planner** | 기획. IA·섹션 스펙·카피·컴포넌트/토큰 설계 | opus | `.claude/agents/design-planner.md` |
| **design-producer** | 제작. 디자인 언어로 자기완결 HTML/그래픽 저작 + 검증 | sonnet | `.claude/agents/design-producer.md` |
| **design-qa-reviewer** | 검수. 이해 게이트 + 품질 게이트 | opus | `.claude/agents/design-qa-reviewer.md` |

## 2. 스킬 (절차서)

`design-brief` · `design-collect` · `design-plan` · `design-produce` · `design-qa` — `.claude/skills/*/SKILL.md`

## 3. 데이터 핸드오프 (JSON 계약)

```
brief.json      (orchestrator → 전체)   요구사항 명세(브랜드·포맷·톤·제약)
   ↓
collection.json (collector → planner)   레퍼런스 manifest + 디자인시스템 매핑
   ↓
plan.json       (planner → producer)    섹션 빌드 스펙 + 컴포넌트/토큰
   ↓
production.json (producer → qa)          생성 산출물 manifest + 자가검사
   ↓
qa-report.json  (qa → orchestrator)      검수 결과 + 수정 지시
```
스키마: `pipeline/io_schemas/*.schema.json`

## 4. 디자인 시스템 자산 (`design_systems/`)

| 키 | 브랜드 | 성격 |
|---|---|---|
| `apple-design-language-system` | Apple 웹 | 제품 사진 중심, 파랑 정찰 |
| `bmw-m` | BMW M | 순흑 캔버스, 대문자 700/Light 300, M 삼색 |
| `boss-bar-lounge` | Boss Bar Lounge | near-black 나이트, 골드 글로우, 세리프 |

Claude Design 계정에서 유래. Apple은 전체 스테이징, 나머지는 디자인 언어(readme) + 온디맨드. 상세: `design_systems/README.md`.

## 5. 파이프라인 (검증 보조, `pipeline/`)

```
config.py            경로·뷰포트·디자인시스템 규칙(팔레트·라디우스·그림자)
preview_server.py    산출물 정적 미리보기(폴더=사이트 루트)
screenshot.py        헤드리스 스크린샷(뷰포트별 / 그래픽 PNG 내보내기)
adherence.py         브랜드 준수 검사(팔레트 밖 색·비-0 라디우스·금지 그림자)
qa.py                자동 정적검수(자산·라우트·alt·반응형 메타·SEO)
io_schemas/          JSON 핸드오프 스키마 5종
workspace/<id>/      프로젝트별 산출물·JSON
```
외부 생성 API 불필요 — 디자인=HTML은 제작 에이전트가 직접 저작(강남 달토 정본 방식).

## 6. 흐름도

```
사용자(브랜드/포맷/느낌)
      │
      ▼
 [orchestrator] ─ design-brief ─▶ brief.json  ─(이해 게이트)
      ▼
 [collector] ─ design-collect ─▶ collection.json  ─(품질 게이트)
      ▼
 [planner] ─ design-plan ─▶ plan.json  ─(이해+품질 게이트)
      ▼
 [producer] ─ design-produce ─▶ production.json + final.html/그래픽
      │                          └ adherence.py + qa.py + 브라우저 검증
      ▼  (품질 게이트: qa-reviewer 정성검수 → 재생성)
   최종 디자인 + 검수 리포트
```

## 7. 사용 예

Claude Code 안에서 **design-orchestrator** 에게:
```
"브랜드: 달리는토끼 강남, 시스템: boss-bar-lounge, 포맷: 원페이지 랜딩,
 느낌: 프리미엄 나이트, 필수: 정찰제 가격·예약 CTA·리뷰 → 만들어줘"
```

## 8. 샘플

`gangnam-dalto-landing/` — 강남 달토 홈 랜딩(Claude Design `index-98d54ebd.html` 구현·검증본).
`samples/`(로컬 전용) — 과거 Claude Design 익스포트(학습 레퍼런스).
