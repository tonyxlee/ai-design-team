"""qa.py — 산출 HTML 자동 정적 검수.

브라우저 없이 확인 가능한 항목: 내부 링크 유효성, 로컬 자산 존재, 이미지 alt,
반응형 메타, 제목/설명 존재. (콘솔 에러·시각 확인은 브라우저 도구/qa-reviewer 담당.)

usage:  python qa.py <html_path>
출력:   JSON  {ok, checks:[{name, result, evidence}]}
"""
import re
import sys
import json
from pathlib import Path

SRC_RE = re.compile(r'(?:src|href)\s*=\s*"([^"]+)"')
IMG_RE = re.compile(r"<img\b[^>]*>", re.I)
ALT_RE = re.compile(r'\balt\s*=', re.I)


def check(html_path: str) -> dict:
    p = Path(html_path)
    text = p.read_text(encoding="utf-8", errors="ignore")
    base = p.parent
    checks = []

    # 로컬 자산 존재 vs 내부 라우트 링크 구분
    ASSET_EXT = (".png", ".jpg", ".jpeg", ".webp", ".svg", ".gif", ".ico",
                 ".mp4", ".webm", ".css", ".js", ".woff", ".woff2", ".html")
    missing_assets, dead_routes = [], []
    for ref in SRC_RE.findall(text):
        if ref.startswith(("http", "//", "data:", "#", "mailto:", "tel:", "blob:")):
            continue
        clean = ref.split("?")[0].split("#")[0]
        rel = clean.lstrip("/")
        if not rel:
            continue
        exists = (base / rel).exists()
        if clean.lower().endswith(ASSET_EXT):
            if not exists:
                # 확장자 없는 라우트를 <route>.html 로도 매칭 시도
                missing_assets.append(ref)
        else:
            # 확장자 없는 내부 링크 = 라우트(예: /pricing) → 형제 .html 있으면 OK
            if not exists and not (base / (rel + ".html")).exists():
                dead_routes.append(ref)
    checks.append({"name": "local_assets_exist",
                   "result": "pass" if not missing_assets else "fail",
                   "evidence": "모두 존재" if not missing_assets else f"누락 자산 {len(missing_assets)}: {missing_assets[:8]}"})
    checks.append({"name": "internal_routes_resolve",
                   "result": "pass" if not dead_routes else "warn",
                   "evidence": "모두 연결" if not dead_routes else f"미연결 라우트 {len(set(dead_routes))}: {sorted(set(dead_routes))[:8]}"})

    # 이미지 alt
    imgs = IMG_RE.findall(text)
    no_alt = [t for t in imgs if not ALT_RE.search(t)]
    checks.append({"name": "img_alt",
                   "result": "pass" if not no_alt else "warn",
                   "evidence": f"{len(imgs)}개 중 alt 없음 {len(no_alt)}"})

    # 반응형 메타
    has_vp = 'name="viewport"' in text or "name='viewport'" in text
    checks.append({"name": "responsive_meta",
                   "result": "pass" if has_vp else "fail",
                   "evidence": "viewport 메타 있음" if has_vp else "viewport 메타 누락"})

    # 제목/설명
    has_title = bool(re.search(r"<title>[^<]+</title>", text, re.I))
    has_desc = 'name="description"' in text
    checks.append({"name": "seo_head",
                   "result": "pass" if (has_title and has_desc) else "warn",
                   "evidence": f"title={has_title}, description={has_desc}"})

    ok = all(c["result"] != "fail" for c in checks)
    return {"ok": ok, "checks": checks}


if __name__ == "__main__":
    try:
        sys.stdout.reconfigure(encoding="utf-8")  # Windows cp949 콘솔 대비
    except Exception:
        pass
    if len(sys.argv) < 2:
        print("usage: python qa.py <html_path>")
        sys.exit(2)
    print(json.dumps(check(sys.argv[1]), ensure_ascii=False, indent=2))
