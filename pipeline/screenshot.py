"""screenshot.py — 산출 HTML 헤드리스 스크린샷(뷰포트별).

Playwright(chromium)가 있으면 사용, 없으면 설치 안내를 출력한다.
그래픽(D) 산출물은 이 스크립트로 고정 캔버스 → PNG 로 내보낸다.

usage:  python screenshot.py <url_or_file> <out.png> [viewport]
        viewport: desktop|mobile|tablet|square|story|banner (config.VIEWPORTS)
"""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from config import VIEWPORTS  # noqa: E402


def shoot(target: str, out: str, viewport: str = "desktop", full_page: bool = True):
    try:
        from playwright.sync_api import sync_playwright
    except ImportError:
        print("[screenshot] Playwright 미설치. 설치:\n"
              "  pip install playwright && python -m playwright install chromium\n"
              "대안: 브라우저 미리보기 도구(mcp__Claude_Browser__computer screenshot)를 사용하세요.")
        return False
    w, h = VIEWPORTS.get(viewport, VIEWPORTS["desktop"])
    url = target if target.startswith("http") else Path(target).resolve().as_uri()
    with sync_playwright() as pw:
        b = pw.chromium.launch()
        pg = b.new_page(viewport={"width": w, "height": h}, device_scale_factor=2)
        pg.goto(url, wait_until="networkidle")
        # 자동재생 영상 정지(캡처 안정화)
        pg.evaluate("() => document.querySelectorAll('video').forEach(v => v.pause())")
        pg.screenshot(path=out, full_page=full_page)
        b.close()
    print(f"[screenshot] {out} ({viewport} {w}x{h})")
    return True


if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("usage: python screenshot.py <url_or_file> <out.png> [viewport]")
        sys.exit(2)
    vp = sys.argv[3] if len(sys.argv) > 3 else "desktop"
    shoot(sys.argv[1], sys.argv[2], vp)
