"""AI 디자인팀 — 파이프라인 설정 / 디자인시스템 레지스트리.

경로, 뷰포트 프리셋, 그리고 adherence 검사가 쓰는 브랜드 규칙(팔레트·라디우스·그림자)을
한곳에 모은다. 새 브랜드를 추가하려면 DESIGN_SYSTEMS에 항목을 넣는다.
"""
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DESIGN_SYSTEMS_DIR = ROOT / "design_systems"
WORKSPACE_DIR = Path(__file__).resolve().parent / "workspace"

VIEWPORTS = {
    "desktop": (1440, 900),
    "tablet": (834, 1112),
    "mobile": (390, 844),
    "square": (1080, 1080),
    "story": (1080, 1920),
    "banner": (1200, 628),
}

# ── 디자인시스템 레지스트리 ────────────────────────────────────────────
# allowed_hex: 브랜드 팔레트(소문자 6자리). adherence 가 이 밖의 하드코딩 색을 경고.
# rules: 정적 검사용 플래그.
DESIGN_SYSTEMS = {
    "apple-design-language-system": {
        "projectId": "38620f94-e2e8-463e-afc7-8115c8f2cca2",
        "namespace": "AppleDesignLanguageSystem_38620f",
        "allowed_hex": {
            "#ffffff", "#000000", "#0066cc", "#0071e3", "#f5f5f7",
            "#1d1d1f", "#6e6e73", "#86868b", "#d2d2d7", "#e8e8ed",
        },
        "rules": {"radius_zero_only": False, "no_box_shadow": False},
    },
    "bmw-m": {
        "projectId": "825f3cd8-0e22-4a87-8beb-0bc152db9c9d",
        "namespace": "BMWMDesignSystem_825f3c",
        "allowed_hex": {
            "#ffffff", "#000000", "#0d0d0d", "#1a1a1a", "#262626", "#2b2b2b",
            "#3c3c3c", "#bbbbbb", "#e6e6e6", "#7e7e7e", "#0066b1", "#1c69d4",
            "#e22718", "#0653b6", "#f4b400", "#0fa336",
        },
        # 라디우스는 0 지배(아이콘버튼 원형 예외), 그림자 금지
        "rules": {"radius_zero_only": True, "no_box_shadow": True, "uppercase_display": True},
    },
    "boss-bar-lounge": {
        "projectId": "019dea4a-955b-7856-8b66-447046718cf2",
        "namespace": "BossBarLoungeDesignSystem_019dea",
        "allowed_hex": {
            "#080808", "#0e0e0e", "#141414", "#1a1a1a", "#ffffff",
            "#e0b36a", "#f8d19c", "#a07838", "#c99a5e", "#e7bd8b", "#54fcff", "#1a0f04",
        },
        # 라디우스 0(언어 pill 999 예외), 글로우는 drop-shadow 로만
        "rules": {"radius_zero_only": True, "prefer_drop_shadow_glow": True},
    },
}

DEFAULT_PORT = 8830
