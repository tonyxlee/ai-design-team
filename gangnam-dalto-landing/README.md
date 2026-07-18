# 강남 달토 (달리는 토끼) — 홈 랜딩 페이지

Claude Design 프로젝트 **"Gangnam karaoke hero section"** (`ec1afd41-bc2f-4e26-b716-c62e9a7f6dd5`)의
`uploads/index-98d54ebd.html`을 design MCP로 가져와 구현한 결과물.

> **정정 이력:** 초기엔 로컬의 7.4MB 컴파일 번들을 썼으나, MCP로 정본을 확인한 결과 실제 소스는
> **75KB의 손편집 가능한 정적 HTML**이었습니다. 이 폴더는 그 정본으로 재구성한 것입니다.

## 구성

```
gangnam-dalto-landing/          ← 사이트 루트로 서빙
  index.html                    75KB · 정적 HTML(빌드 불필요, 손편집 가능)
  hero-clip.mp4                 히어로 배경 영상
  logo-cut.png                  로고
  a2790d92-…jpg                 OG/소개 이미지
  favicon.ico, favicon-*.png    파비콘 11종
```

## 검증 (실측)

- ✅ 전체 섹션 렌더 — 히어로 · 정찰제 요금 · WHY · 이용방법 4단계 · 룸 4종 · 리뷰 ★5.0/48 · 예약
- ✅ 참조 자산 전부 **HTTP 200** — index / logo-cut / a2790d92.jpg / hero-clip.mp4 / favicon (404 없음)
- ✅ 콘솔 에러 없음

## 로컬에서 열기

```bash
# 반드시 이 폴더를 '사이트 루트'로 서빙 (파비콘 /favicon-*, 내부 링크 /pricing 등이 루트경로 참조)
cd gangnam-dalto-landing
python -m http.server 8824 --bind 127.0.0.1
# → http://127.0.0.1:8824/
```

`file://`로 직접 열면 루트경로 자산(`/favicon-*`)이 안 잡히니, 정적 서버 서빙을 사용하세요.

## 배포

정적 사이트이므로 이 폴더를 배포 루트로 올리면 됩니다 (Cloudflare Pages / Netlify / Vercel / GitHub Pages). 빌드 단계 불필요.

## 남은 작업 — 형제 페이지 (멀티페이지)

이 홈 페이지는 다음 내부 링크를 가집니다(루트경로): `/pricing` `/rooms` `/reviews` `/about` `/how-to` `/directions`.
현재 폴더엔 **홈만** 구현돼 있어 위 링크는 404입니다. 완성형 멀티페이지는 원본 프로젝트의
`uploads/gangnam-karaoke-club_deploy/`(각 페이지 + sitemap/robots/_headers/_redirects)에 이미 존재하므로,
필요 시 이를 통째로 가져와 사이트를 완성할 수 있습니다.

## 원본

- Claude Design: https://claude.ai/design/p/ec1afd41-bc2f-4e26-b716-c62e9a7f6dd5?file=uploads%2Findex-98d54ebd.html
