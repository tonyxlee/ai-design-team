"""adherence.py — 산출 HTML이 디자인시스템 브랜드 규칙을 지켰는지 정적 검사.

React 번들을 마운트하지 않고 손저작한 자기완결 HTML을 전제로,
CSS에 등장하는 하드코딩 색·라디우스·그림자를 브랜드 규칙과 대조한다.

usage:  python adherence.py <html_path> <design_system_key>
출력:   JSON  {pass, violations:[{rule, where, detail}], stats}
"""
import re
import sys
import json
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from config import DESIGN_SYSTEMS  # noqa: E402

HEX_RE = re.compile(r"#[0-9a-fA-F]{6}\b")
SHORT_HEX_RE = re.compile(r"#[0-9a-fA-F]{3}\b")
RADIUS_RE = re.compile(r"border-radius\s*:\s*([^;}\"']+)")
BOXSHADOW_RE = re.compile(r"box-shadow\s*:\s*([^;}\"']+)")


def _norm_hex(h: str) -> str:
    h = h.lower()
    if len(h) == 4:  # #abc -> #aabbcc
        h = "#" + "".join(c * 2 for c in h[1:])
    return h


def check(html_path: str, ds_key: str) -> dict:
    ds = DESIGN_SYSTEMS.get(ds_key)
    if ds is None:
        return {"pass": False, "violations": [{"rule": "unknown_design_system",
                "where": ds_key, "detail": "레지스트리에 없는 디자인시스템"}], "stats": {}}
    text = Path(html_path).read_text(encoding="utf-8", errors="ignore")
    rules = ds.get("rules", {})
    allowed = {h.lower() for h in ds.get("allowed_hex", set())}
    violations = []

    # 1) 팔레트 밖 하드코딩 색 (rgba/var 은 제외 — 토큰·투명도는 허용)
    hexes = {_norm_hex(h) for h in HEX_RE.findall(text)} | {_norm_hex(h) for h in SHORT_HEX_RE.findall(text)}
    off_palette = sorted(h for h in hexes if h not in allowed)
    for h in off_palette:
        violations.append({"rule": "off_palette_color", "where": h,
                           "detail": f"브랜드 팔레트 밖 색상 {h} — 토큰 값으로 대체 검토"})

    # 2) 라디우스 0 지배 규칙
    if rules.get("radius_zero_only"):
        for m in RADIUS_RE.findall(text):
            v = m.strip().lower()
            nums = re.findall(r"(\d+(?:\.\d+)?)(px|rem|em|%)", v)
            bad = [f"{n}{u}" for n, u in nums
                   if not (float(n) == 0 or (u == "px" and float(n) >= 999) or u == "%")]
            # 999px+/50%/9999px(원형 pill·아이콘) 은 예외 허용
            if bad and "9999" not in v and "999" not in v and "50%" not in v:
                violations.append({"rule": "radius_should_be_zero", "where": v,
                                   "detail": "이 브랜드는 0px 라디우스 지배(원형/pill 예외만 허용)"})

    # 3) 그림자 금지(BMW M)
    if rules.get("no_box_shadow"):
        for m in BOXSHADOW_RE.findall(text):
            if m.strip().lower() not in ("none", "0 0 0 1px var(--color-hairline)"):
                violations.append({"rule": "no_box_shadow", "where": m.strip()[:60],
                                   "detail": "이 브랜드는 drop-shadow 없음(깊이는 사진·대비로)"})

    # 4) 대문자 display 힌트(BMW M) — 경고만
    if rules.get("uppercase_display") and "text-transform:uppercase" not in text.replace(" ", "") \
            and "text-transform: uppercase" not in text:
        violations.append({"rule": "uppercase_display_missing", "where": "<h1>/<h2>",
                           "detail": "BMW M은 display 헤드라인 UPPERCASE — text-transform 확인"})

    ok = len(violations) == 0
    return {"pass": ok, "violations": violations,
            "stats": {"distinct_hex": len(hexes), "off_palette": len(off_palette)}}


if __name__ == "__main__":
    try:
        sys.stdout.reconfigure(encoding="utf-8")  # Windows cp949 콘솔 대비
    except Exception:
        pass
    if len(sys.argv) < 3:
        print("usage: python adherence.py <html_path> <design_system_key>")
        sys.exit(2)
    print(json.dumps(check(sys.argv[1], sys.argv[2]), ensure_ascii=False, indent=2))
