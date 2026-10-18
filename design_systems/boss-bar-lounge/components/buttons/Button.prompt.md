Boss Bar Lounge's call-to-action button — use for any tap target; the glowing gold primary is the loud "Call / Reserve" action, outline and ghost step down in emphasis.

```jsx
<Button variant="primary" icon="📞" href="tel:+84935777013">Call Now</Button>
<Button variant="outline" href="/visit">Get Directions</Button>
<Button variant="ghost" href="/drinks">Drinks Menu</Button>
```

Variants: `primary` (animated gold gradient + glow, white text), `outline` (tan hairline → fills tan on hover), `ghost` (faint white hairline → gold on hover). Sizes: `sm` / `md` / `lg`. Pass `href` for a link, otherwise it's a `<button>`. Corners are always square — never add radius.
