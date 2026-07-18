/* @ds-bundle: {"format":4,"namespace":"AppleDesignLanguageSystem_38620f","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"IconButton","sourcePath":"components/buttons/IconButton.jsx"},{"name":"TextLink","sourcePath":"components/buttons/TextLink.jsx"},{"name":"Footer","sourcePath":"components/footer/Footer.jsx"},{"name":"ConfigChip","sourcePath":"components/forms/ConfigChip.jsx"},{"name":"SearchInput","sourcePath":"components/forms/SearchInput.jsx"},{"name":"GlobalNav","sourcePath":"components/navigation/GlobalNav.jsx"},{"name":"SubNav","sourcePath":"components/navigation/SubNav.jsx"},{"name":"ProductTile","sourcePath":"components/surfaces/ProductTile.jsx"},{"name":"StickyBar","sourcePath":"components/surfaces/StickyBar.jsx"},{"name":"StoreCard","sourcePath":"components/surfaces/StoreCard.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"02a0efe01d6d","components/buttons/IconButton.jsx":"da2bd9300971","components/buttons/TextLink.jsx":"5a0a5fbabc1f","components/footer/Footer.jsx":"f761f1e4e106","components/forms/ConfigChip.jsx":"d11fd12b234d","components/forms/SearchInput.jsx":"f597cab8e890","components/navigation/GlobalNav.jsx":"f16a98ce373c","components/navigation/SubNav.jsx":"9277a87bf615","components/surfaces/ProductTile.jsx":"7913f5344bb6","components/surfaces/StickyBar.jsx":"46fd377e61f8","components/surfaces/StoreCard.jsx":"68f7ce36f553","ui_kits/storefront/Buy.jsx":"c0b2caccd39f","ui_kits/storefront/Home.jsx":"c4ca63821f6d","ui_kits/storefront/Store.jsx":"8d5aea1c391b"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AppleDesignLanguageSystem_38620f = window.AppleDesignLanguageSystem_38620f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Button — the Apple action grammar.
 * Five variants map to the documented button families. Every variant shares
 * the system-wide press micro-interaction (transform: scale(0.95)) and the
 * Focus-Blue keyboard outline. No hover styling by design.
 */
function Button({
  variant = "primary",
  children,
  onClick,
  disabled = false,
  type = "button",
  as = "button",
  href,
  style = {},
  ...rest
}) {
  const [pressed, setPressed] = useState(false);
  const [focused, setFocused] = useState(false);
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "6px",
    fontFamily: "var(--font-text)",
    border: "none",
    cursor: disabled ? "default" : "pointer",
    textDecoration: "none",
    whiteSpace: "nowrap",
    transition: "transform var(--duration-press) var(--ease-standard)",
    transform: pressed && !disabled ? "scale(var(--press-scale))" : "scale(1)",
    outline: focused ? "2px solid var(--color-primary-focus)" : "2px solid transparent",
    outlineOffset: "2px",
    opacity: disabled ? 0.36 : 1
  };
  const variants = {
    // Signature blue pill CTA
    primary: {
      background: "var(--color-primary)",
      color: "var(--color-on-primary)",
      borderRadius: "var(--radius-pill)",
      padding: "11px 22px",
      fontSize: "var(--type-body-size)",
      fontWeight: "var(--weight-regular)",
      letterSpacing: "var(--type-body-ls)"
    },
    // Ghost pill — the second CTA in a pair
    "secondary-pill": {
      background: "transparent",
      color: "var(--color-primary)",
      border: "1px solid var(--color-primary)",
      borderRadius: "var(--radius-pill)",
      padding: "11px 22px",
      fontSize: "var(--type-body-size)",
      fontWeight: "var(--weight-regular)",
      letterSpacing: "var(--type-body-ls)"
    },
    // Global-nav actions (Sign In, Bag)
    "dark-utility": {
      background: "var(--color-ink)",
      color: "var(--color-on-primary)",
      borderRadius: "var(--radius-sm)",
      padding: "8px 15px",
      fontSize: "var(--type-button-utility-size)",
      fontWeight: "var(--weight-regular)",
      letterSpacing: "var(--type-button-utility-ls)"
    },
    // Product-card secondary — soft-ring capsule
    "pearl-capsule": {
      background: "var(--color-surface-pearl)",
      color: "var(--color-ink-muted-80)",
      border: "var(--border-ring-soft)",
      borderRadius: "var(--radius-md)",
      padding: "8px 14px",
      fontSize: "var(--type-caption-size)",
      fontWeight: "var(--weight-regular)",
      letterSpacing: "var(--type-caption-ls)"
    },
    // Larger store hero CTA (rare weight 300)
    "store-hero": {
      background: "var(--color-primary)",
      color: "var(--color-on-primary)",
      borderRadius: "var(--radius-pill)",
      padding: "14px 28px",
      fontSize: "var(--type-button-large-size)",
      fontWeight: "var(--weight-light)",
      letterSpacing: "var(--type-button-large-ls)"
    }
  };
  const Tag = href ? "a" : as;
  const pressHandlers = disabled ? {} : {
    onMouseDown: () => setPressed(true),
    onMouseUp: () => setPressed(false),
    onMouseLeave: () => setPressed(false),
    onTouchStart: () => setPressed(true),
    onTouchEnd: () => setPressed(false)
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    type: Tag === "button" ? type : undefined,
    href: href,
    onClick: disabled ? undefined : onClick,
    disabled: Tag === "button" ? disabled : undefined,
    "aria-disabled": disabled || undefined,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }, pressHandlers, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * IconButton — a 44×44 translucent circular control that floats over
 * photography (carousel arrows, close, in-image thumbnails). Fill is the
 * translucent chip gray at ~64% alpha; glyph is near-black ink.
 */
function IconButton({
  children,
  onClick,
  ariaLabel,
  disabled = false,
  size = 44,
  style = {},
  ...rest
}) {
  const [pressed, setPressed] = useState(false);
  const [focused, setFocused] = useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": ariaLabel,
    onClick: disabled ? undefined : onClick,
    disabled: disabled,
    onMouseDown: () => setPressed(true),
    onMouseUp: () => setPressed(false),
    onMouseLeave: () => setPressed(false),
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      width: size,
      height: size,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      border: "none",
      borderRadius: "var(--radius-full)",
      background: "var(--color-surface-chip-translucent-64)",
      color: "var(--color-ink)",
      cursor: disabled ? "default" : "pointer",
      backdropFilter: "blur(2px)",
      WebkitBackdropFilter: "blur(2px)",
      transition: "transform var(--duration-press) var(--ease-standard)",
      transform: pressed && !disabled ? "scale(var(--press-scale))" : "scale(1)",
      outline: focused ? "2px solid var(--color-primary-focus)" : "2px solid transparent",
      outlineOffset: "2px",
      opacity: disabled ? 0.36 : 1,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/buttons/TextLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * TextLink — inline body links. Action Blue on light surfaces; pass
 * `onDark` to switch to Sky Link Blue for dark tiles (where Action Blue
 * would disappear). Optionally shows a trailing chevron in the Apple
 * "Learn more ›" style.
 */
function TextLink({
  children,
  href = "#",
  onDark = false,
  chevron = false,
  onClick,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onClick: onClick,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "2px",
      color: onDark ? "var(--color-primary-on-dark)" : "var(--color-primary)",
      fontFamily: "var(--font-text)",
      fontSize: "var(--type-body-size)",
      lineHeight: "var(--type-body-lh)",
      letterSpacing: "var(--type-body-ls)",
      textDecoration: "none",
      ...style
    }
  }, rest), children, chevron && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontSize: "1.1em",
      lineHeight: 1
    }
  }, "\u203A"));
}
Object.assign(__ds_scope, { TextLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/TextLink.jsx", error: String((e && e.message) || e) }); }

// components/footer/Footer.jsx
try { (() => {
/**
 * Footer — the deliberately dense parchment footer. Link columns use the
 * relaxed 2.41 line-height (dense-link) so the columns stay scannable;
 * headings are caption-strong. Legal row at the bottom in fine-print.
 */
function Footer({
  columns = DEFAULT_COLUMNS,
  legal = "Copyright © 2026 Storefront Inc. All rights reserved.",
  legalLinks = ["Privacy Policy", "Terms of Use", "Sales Policy", "Legal", "Site Map"],
  style = {}
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--color-canvas-parchment)",
      color: "var(--color-ink-muted-80)",
      padding: "64px 22px",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-grid)",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: `repeat(${columns.length}, 1fr)`,
      gap: "24px"
    }
  }, columns.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.heading
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: "0 0 4px",
      fontFamily: "var(--font-text)",
      fontWeight: "var(--weight-semibold)",
      fontSize: "var(--type-caption-strong-size)",
      lineHeight: "var(--type-caption-strong-lh)",
      letterSpacing: "var(--type-caption-strong-ls)",
      color: "var(--color-ink)"
    }
  }, col.heading), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0
    }
  }, col.links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "var(--color-ink-muted-80)",
      fontFamily: "var(--font-text)",
      fontSize: "var(--type-caption-size)",
      lineHeight: "var(--type-dense-link-lh)",
      letterSpacing: "-0.01em",
      textDecoration: "none"
    }
  }, l))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-grid)",
      margin: "24px auto 0",
      paddingTop: "16px",
      borderTop: "1px solid var(--color-hairline)",
      display: "flex",
      flexWrap: "wrap",
      gap: "8px 20px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "var(--type-fine-print-size)",
      letterSpacing: "var(--type-fine-print-ls)",
      color: "var(--color-ink-muted-48)"
    }
  }, legal), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: "16px",
      flexWrap: "wrap"
    }
  }, legalLinks.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "var(--type-fine-print-size)",
      letterSpacing: "var(--type-fine-print-ls)",
      color: "var(--color-ink-muted-48)",
      textDecoration: "none"
    }
  }, l)))));
}
const DEFAULT_COLUMNS = [{
  heading: "Shop",
  links: ["Shop the Latest", "Mac", "iPad", "iPhone", "Watch", "Accessories"]
}, {
  heading: "Services",
  links: ["Music", "TV+", "Arcade", "iCloud", "One", "Card"]
}, {
  heading: "Account",
  links: ["Manage Your ID", "Account Settings", "Order Status"]
}, {
  heading: "About",
  links: ["Newsroom", "Leadership", "Careers", "Investors", "Contact"]
}];
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/footer/Footer.jsx", error: String((e && e.message) || e) }); }

// components/forms/ConfigChip.jsx
try { (() => {
const {
  useState
} = React;
/**
 * ConfigChip — the pill-shaped tappable option cell on the iPhone buy page
 * configurator. Holds a small thumbnail + label + price delta. Selected state
 * upgrades the border to 2px Focus Blue.
 */
function ConfigChip({
  label,
  detail,
  priceDelta,
  thumbnail,
  selected = false,
  onClick,
  style = {}
}) {
  const [pressed, setPressed] = useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    onMouseDown: () => setPressed(true),
    onMouseUp: () => setPressed(false),
    onMouseLeave: () => setPressed(false),
    "aria-pressed": selected,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      textAlign: "left",
      cursor: "pointer",
      background: "var(--color-canvas)",
      borderRadius: "var(--radius-pill)",
      padding: "12px 16px",
      border: selected ? "2px solid var(--color-primary-focus)" : "1px solid var(--color-hairline)",
      transition: "transform var(--duration-press) var(--ease-standard)",
      transform: pressed ? "scale(var(--press-scale))" : "scale(1)",
      ...style
    }
  }, thumbnail && /*#__PURE__*/React.createElement("img", {
    src: thumbnail,
    alt: "",
    style: {
      width: 28,
      height: 28,
      objectFit: "contain"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      lineHeight: 1.2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "var(--type-caption-size)",
      fontWeight: "var(--weight-semibold)",
      letterSpacing: "var(--type-caption-ls)",
      color: "var(--color-ink)"
    }
  }, label), (detail || priceDelta) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "12px",
      letterSpacing: "-0.01em",
      color: "var(--color-ink-muted-48)"
    }
  }, detail, detail && priceDelta ? " · " : "", priceDelta)));
}
Object.assign(__ds_scope, { ConfigChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/ConfigChip.jsx", error: String((e && e.message) || e) }); }

// components/forms/SearchInput.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * SearchInput — the pill-shaped accessories search field. 44px tall, full
 * pill radius (matching the CTA grammar), 1px soft border, leading search
 * glyph in a muted tint.
 */
function SearchInput({
  placeholder = "Search accessories",
  value,
  defaultValue,
  onChange,
  style = {},
  ...rest
}) {
  const [focused, setFocused] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      height: "44px",
      padding: "12px 20px",
      borderRadius: "var(--radius-pill)",
      background: "var(--color-canvas)",
      border: focused ? "1px solid var(--color-primary-focus)" : "1px solid var(--color-hairline-alpha)",
      transition: "border-color var(--duration-press) var(--ease-standard)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--color-ink-muted-48)",
    strokeWidth: "2",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 21l-4.3-4.3"
  })), /*#__PURE__*/React.createElement("input", _extends({
    type: "search",
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      border: "none",
      outline: "none",
      background: "transparent",
      flex: 1,
      minWidth: 0,
      fontFamily: "var(--font-text)",
      fontSize: "var(--type-body-size)",
      letterSpacing: "var(--type-body-ls)",
      color: "var(--color-ink)"
    }
  }, rest)));
}
Object.assign(__ds_scope, { SearchInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchInput.jsx", error: String((e && e.message) || e) }); }

// components/navigation/GlobalNav.jsx
try { (() => {
/**
 * GlobalNav — the persistent ultra-thin black bar pinned to the top of every
 * page. 44px tall, true-black background, quiet 12px links, right-aligned
 * search + bag glyphs. Brand mark is rendered as a text wordmark (no
 * proprietary logo ships with this system).
 */
function GlobalNav({
  brand = "Brand",
  links = ["Store", "Mac", "iPad", "iPhone", "Watch", "Support"],
  onSearch,
  onBag,
  style = {}
}) {
  const linkStyle = {
    color: "var(--color-body-on-dark)",
    fontFamily: "var(--font-text)",
    fontSize: "var(--type-nav-link-size)",
    lineHeight: "var(--type-nav-link-lh)",
    letterSpacing: "var(--type-nav-link-ls)",
    textDecoration: "none",
    opacity: 0.8
  };
  const glyph = {
    background: "none",
    border: "none",
    padding: 0,
    color: "var(--color-body-on-dark)",
    opacity: 0.8,
    cursor: "pointer",
    display: "inline-flex"
  };
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      height: "44px",
      background: "var(--color-surface-black)",
      display: "flex",
      alignItems: "center",
      gap: "24px",
      padding: "0 22px",
      ...style
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      ...linkStyle,
      opacity: 1,
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-semibold)",
      fontSize: "15px",
      letterSpacing: "-0.01em"
    }
  }, brand), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "24px",
      flex: 1,
      justifyContent: "center"
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: linkStyle
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "20px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: glyph,
    "aria-label": "Search",
    onClick: onSearch
  }, /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 21l-4.3-4.3"
  }))), /*#__PURE__*/React.createElement("button", {
    style: glyph,
    "aria-label": "Bag",
    onClick: onBag
  }, /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 8h12l-1 12H7L6 8z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 8a3 3 0 016 0"
  })))));
}
Object.assign(__ds_scope, { GlobalNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/GlobalNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SubNav.jsx
try { (() => {
/**
 * SubNav — the surface-specific frosted-glass bar that sticks below the
 * GlobalNav. Parchment @ 80% with backdrop blur. Left: product category name
 * (tagline type). Right: inline links ending in a persistent primary CTA.
 */
function SubNav({
  category = "Store",
  links = ["Explore", "Shop", "Accessories"],
  cta = "Buy",
  onCta,
  sticky = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: sticky ? "sticky" : "relative",
      top: 0,
      zIndex: 40,
      height: "52px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 22px",
      background: "var(--frosted-fill)",
      backdropFilter: "var(--blur-frosted)",
      WebkitBackdropFilter: "var(--blur-frosted)",
      borderBottom: "var(--border-hairline)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-text)",
      fontWeight: "var(--weight-semibold)",
      fontSize: "var(--type-tagline-size)",
      lineHeight: "var(--type-tagline-lh)",
      letterSpacing: "var(--type-tagline-ls)",
      color: "var(--color-ink)"
    }
  }, category), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "24px"
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      color: "var(--color-ink)",
      fontFamily: "var(--font-text)",
      fontSize: "var(--type-button-utility-size)",
      letterSpacing: "var(--type-button-utility-ls)",
      textDecoration: "none"
    }
  }, l)), cta && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    onClick: onCta,
    style: {
      padding: "6px 15px",
      fontSize: "14px"
    }
  }, cta)));
}
Object.assign(__ds_scope, { SubNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SubNav.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/ProductTile.jsx
try { (() => {
const TONES = {
  light: {
    bg: "var(--color-canvas)",
    dark: false
  },
  parchment: {
    bg: "var(--color-canvas-parchment)",
    dark: false
  },
  dark: {
    bg: "var(--color-surface-tile-1)",
    dark: true
  },
  "dark-2": {
    bg: "var(--color-surface-tile-2)",
    dark: true
  },
  "dark-3": {
    bg: "var(--color-surface-tile-3)",
    dark: true
  }
};

/**
 * ProductTile — a full-bleed, edge-to-edge section tile. The alternating
 * light/parchment ↔ near-black tone IS the section divider; tiles are never
 * rounded and carry no shadow. Centered stack: eyebrow → headline → tagline →
 * two CTAs → product render (which alone carries the system product-shadow).
 *
 * Pass a `backgroundImage` URL for atmospheric photographic heroes (e.g. the
 * environment quote card).
 */
function ProductTile({
  tone = "light",
  eyebrow,
  headline,
  tagline,
  primaryCta = "Learn more",
  secondaryCta = "Buy",
  onPrimary,
  onSecondary,
  image,
  imageAlt = "",
  backgroundImage,
  children,
  style = {}
}) {
  const t = TONES[tone] || TONES.light;
  const fg = t.dark ? "var(--color-body-on-dark)" : "var(--color-ink)";
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: backgroundImage ? `${t.bg} center/cover no-repeat url(${backgroundImage})` : t.bg,
      color: fg,
      textAlign: "center",
      padding: "var(--space-section) var(--space-lg)",
      borderRadius: "var(--radius-none)",
      ...style
    }
  }, eyebrow && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 12px",
      fontFamily: "var(--font-text)",
      fontWeight: "var(--weight-semibold)",
      fontSize: "var(--type-tagline-size)",
      letterSpacing: "var(--type-tagline-ls)",
      color: t.dark ? "var(--color-primary-on-dark)" : "var(--color-primary)"
    }
  }, eyebrow), headline && /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-semibold)",
      fontSize: "var(--type-display-lg-size)",
      lineHeight: "var(--type-display-lg-lh)",
      letterSpacing: "var(--type-display-lg-ls)"
    }
  }, headline), tagline && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "12px 0 0",
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-regular)",
      fontSize: "var(--type-lead-size)",
      lineHeight: "var(--type-lead-lh)",
      letterSpacing: "var(--type-lead-ls)",
      color: t.dark ? "var(--color-body-muted)" : "var(--color-ink)"
    }
  }, tagline), (primaryCta || secondaryCta) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "16px",
      justifyContent: "center",
      marginTop: "24px"
    }
  }, primaryCta && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    onClick: onPrimary
  }, primaryCta), secondaryCta && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary-pill",
    onClick: onSecondary
  }, secondaryCta)), image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt,
    style: {
      display: "block",
      maxWidth: "100%",
      margin: "40px auto 0",
      boxShadow: "var(--shadow-product)"
    }
  }), children);
}
Object.assign(__ds_scope, { ProductTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/ProductTile.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/StickyBar.jsx
try { (() => {
/**
 * StickyBar — the floating frosted bar at the bottom of the viewport on buy
 * pages. Parchment @ 80% with backdrop blur, 64px tall. Left: running price
 * total. Right: a primary CTA ("Add to Bag").
 */
function StickyBar({
  label = "Total",
  price,
  cta = "Add to Bag",
  onCta,
  fixed = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: fixed ? "fixed" : "relative",
      bottom: fixed ? 0 : undefined,
      left: 0,
      right: 0,
      zIndex: 50,
      height: "64px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "12px 32px",
      background: "var(--frosted-fill)",
      backdropFilter: "var(--blur-frosted)",
      WebkitBackdropFilter: "var(--blur-frosted)",
      borderTop: "var(--border-hairline)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "8px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "var(--type-caption-size)",
      letterSpacing: "var(--type-caption-ls)",
      color: "var(--color-ink-muted-48)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-text)",
      fontWeight: "var(--weight-semibold)",
      fontSize: "var(--type-body-size)",
      letterSpacing: "var(--type-body-ls)",
      color: "var(--color-ink)"
    }
  }, price)), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    onClick: onCta,
    style: {
      padding: "8px 20px",
      fontSize: "15px"
    }
  }, cta));
}
Object.assign(__ds_scope, { StickyBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/StickyBar.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/StoreCard.jsx
try { (() => {
/**
 * StoreCard — the white utility card used in store & accessories grids.
 * 1px hairline, 18px radius, 24px padding. No card shadow; the product render
 * itself carries the system product-shadow. Top: 1:1 product image on a light
 * neutral. Below: name → price → text link.
 */
function StoreCard({
  name,
  price,
  eyebrow,
  image,
  imageAlt = "",
  linkLabel = "Buy",
  href = "#",
  onClick,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--color-canvas)",
      border: "1px solid var(--color-hairline)",
      borderRadius: "var(--radius-lg)",
      padding: "var(--space-lg)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      aspectRatio: "1 / 1",
      borderRadius: "var(--radius-sm)",
      background: "var(--color-canvas-parchment)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      marginBottom: "20px"
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt,
    style: {
      maxWidth: "72%",
      maxHeight: "72%",
      filter: "drop-shadow(var(--shadow-product))"
    }
  }) : null), eyebrow && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 4px",
      fontFamily: "var(--font-text)",
      fontWeight: "var(--weight-semibold)",
      fontSize: "12px",
      letterSpacing: "0.02em",
      color: "var(--color-primary)"
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-text)",
      fontWeight: "var(--weight-semibold)",
      fontSize: "var(--type-body-strong-size)",
      lineHeight: "var(--type-body-strong-lh)",
      letterSpacing: "var(--type-body-strong-ls)",
      color: "var(--color-ink)"
    }
  }, name), price && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "4px 0 14px",
      fontFamily: "var(--font-text)",
      fontSize: "var(--type-body-size)",
      letterSpacing: "var(--type-body-ls)",
      color: "var(--color-ink)"
    }
  }, price), /*#__PURE__*/React.createElement(__ds_scope.TextLink, {
    href: href,
    onClick: onClick,
    chevron: true,
    style: {
      fontSize: "14px"
    }
  }, linkLabel));
}
Object.assign(__ds_scope, { StoreCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/StoreCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/Buy.jsx
try { (() => {
// Buy — the iPhone 17 Pro configurator: option-chip grids for finish and
// storage with a running total in the floating sticky bar.
function Buy() {
  const {
    ConfigChip,
    StickyBar,
    TextLink
  } = window.AppleDesignLanguageSystem_38620f;
  const [finish, setFinish] = React.useState(0);
  const [storage, setStorage] = React.useState(0);
  const finishes = [{
    label: "Silver"
  }, {
    label: "Deep Blue"
  }, {
    label: "Cosmic Orange"
  }, {
    label: "Black Titanium"
  }];
  const storages = [{
    label: "256GB",
    base: 1099
  }, {
    label: "512GB",
    base: 1299
  }, {
    label: "1TB",
    base: 1499
  }, {
    label: "2TB",
    base: 1899
  }];
  const total = storages[storage].base;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "980px",
      margin: "0 auto",
      padding: "48px 22px 120px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "type-tagline",
    style: {
      margin: 0,
      color: "var(--color-primary)"
    }
  }, "New"), /*#__PURE__*/React.createElement("h1", {
    className: "type-hero-display",
    style: {
      margin: "6px 0 8px",
      color: "var(--color-ink)"
    }
  }, "iPhone 17 Pro"), /*#__PURE__*/React.createElement("p", {
    className: "type-lead",
    style: {
      margin: "0 0 40px",
      color: "var(--color-ink)"
    }
  }, "Buy. Your way."), /*#__PURE__*/React.createElement("h2", {
    className: "type-body-strong",
    style: {
      margin: "0 0 14px",
      color: "var(--color-ink)"
    }
  }, "Finish"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(180px,1fr))",
      gap: "12px",
      marginBottom: "40px"
    }
  }, finishes.map((f, i) => /*#__PURE__*/React.createElement(ConfigChip, {
    key: f.label,
    label: f.label,
    thumbnail: undefined,
    detail: undefined,
    selected: finish === i,
    onClick: () => setFinish(i),
    style: {
      alignItems: "center"
    }
  }))), /*#__PURE__*/React.createElement("h2", {
    className: "type-body-strong",
    style: {
      margin: "0 0 14px",
      color: "var(--color-ink)"
    }
  }, "Storage"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(200px,1fr))",
      gap: "12px",
      marginBottom: "32px"
    }
  }, storages.map((s, i) => /*#__PURE__*/React.createElement(ConfigChip, {
    key: s.label,
    label: s.label,
    priceDelta: i === 0 ? "From $" + s.base : "$" + s.base,
    selected: storage === i,
    onClick: () => setStorage(i)
  }))), /*#__PURE__*/React.createElement(TextLink, {
    chevron: true
  }, "How much storage is right for you?")), /*#__PURE__*/React.createElement(StickyBar, {
    label: "Total",
    price: "$" + total.toLocaleString(),
    cta: "Add to Bag",
    fixed: true
  }));
}
window.Buy = Buy;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/Buy.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/Home.jsx
try { (() => {
// Home — a stack of full-bleed product tiles, the core Apple homepage rhythm:
// light → dark → parchment → dark, the color change acting as the divider.
// Product renders are shown as neutral placeholder regions (supply real
// photography via the `image` prop on ProductTile in production).
function Home({
  go
}) {
  const {
    ProductTile
  } = window.AppleDesignLanguageSystem_38620f;
  const Render = ({
    tone
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      width: "min(560px, 80%)",
      aspectRatio: "16 / 10",
      margin: "40px auto 0",
      borderRadius: "18px",
      background: tone === "dark" ? "linear-gradient(180deg,#3a3a3d,#242426)" : "linear-gradient(180deg,#ffffff,#ededf0)",
      boxShadow: "var(--shadow-product)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-text)",
      fontSize: "13px",
      color: tone === "dark" ? "#6e6e73" : "var(--color-ink-muted-48)"
    }
  }, "product render");
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ProductTile, {
    tone: "light",
    eyebrow: "New",
    headline: "iPhone 17 Pro",
    tagline: "Built for Apple Intelligence.",
    primaryCta: "Learn more",
    secondaryCta: "Buy",
    onSecondary: () => go("buy")
  }, /*#__PURE__*/React.createElement(Render, {
    tone: "light"
  })), /*#__PURE__*/React.createElement(ProductTile, {
    tone: "dark",
    eyebrow: "New",
    headline: "Apple Watch Ultra 3",
    tagline: "Adventure. Amplified.",
    primaryCta: "Learn more",
    secondaryCta: "Buy"
  }, /*#__PURE__*/React.createElement(Render, {
    tone: "dark"
  })), /*#__PURE__*/React.createElement(ProductTile, {
    tone: "parchment",
    headline: "MacBook Air",
    tagline: "Lean. Mean. Superfast machine.",
    primaryCta: "Learn more",
    secondaryCta: "Buy",
    onSecondary: () => go("store")
  }, /*#__PURE__*/React.createElement(Render, {
    tone: "light"
  })), /*#__PURE__*/React.createElement(ProductTile, {
    tone: "dark-2",
    headline: "AirPods Pro 3",
    tagline: "Adaptive Audio. Now playing.",
    primaryCta: "Learn more",
    secondaryCta: "Buy"
  }, /*#__PURE__*/React.createElement(Render, {
    tone: "dark"
  })));
}
window.Home = Home;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/Store.jsx
try { (() => {
// Store — the accessories index: a search field over a responsive grid of
// white utility cards. Renders shown as neutral placeholders.
function Store({
  go
}) {
  const {
    SearchInput,
    StoreCard
  } = window.AppleDesignLanguageSystem_38620f;
  const products = [{
    name: "AirPods Pro 3",
    price: "$249",
    eyebrow: "New"
  }, {
    name: "MagSafe Charger",
    price: "$39"
  }, {
    name: "Apple Pencil Pro",
    price: "$129"
  }, {
    name: "Magic Keyboard",
    price: "$299"
  }, {
    name: "AirTag",
    price: "$29"
  }, {
    name: "Watch Band",
    price: "$49",
    eyebrow: "New"
  }, {
    name: "USB-C Cable",
    price: "$19"
  }, {
    name: "20W Adapter",
    price: "$19"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--color-canvas-parchment)",
      padding: "48px 22px 64px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-grid)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "16px",
      marginBottom: "32px"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    className: "type-display-md",
    style: {
      margin: 0,
      color: "var(--color-ink)"
    }
  }, "Accessories"), /*#__PURE__*/React.createElement(SearchInput, {
    style: {
      width: "300px",
      maxWidth: "100%"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
      gap: "24px"
    }
  }, products.map(p => /*#__PURE__*/React.createElement(StoreCard, {
    key: p.name,
    name: p.name,
    price: p.price,
    eyebrow: p.eyebrow,
    linkLabel: "Buy",
    onClick: e => {
      e.preventDefault();
      go("buy");
    }
  })))));
}
window.Store = Store;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/Store.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.TextLink = __ds_scope.TextLink;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.ConfigChip = __ds_scope.ConfigChip;

__ds_ns.SearchInput = __ds_scope.SearchInput;

__ds_ns.GlobalNav = __ds_scope.GlobalNav;

__ds_ns.SubNav = __ds_scope.SubNav;

__ds_ns.ProductTile = __ds_scope.ProductTile;

__ds_ns.StickyBar = __ds_scope.StickyBar;

__ds_ns.StoreCard = __ds_scope.StoreCard;

})();
