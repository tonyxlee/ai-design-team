**Button** — the signature BMW M CTA: flat, sharp-cornered (`--radius-none`), uppercase label at 1.5px tracking. Use for every primary action; the white text + outline over black IS the button.

```jsx
<Button variant="primary">Discover</Button>
<Button variant="outline">Build your M</Button>   {/* over photography */}
<Button variant="on-light">Continue</Button>       {/* rare light surface */}
```

Never round the corners, never fill with the M tricolor. `outline` for use over full-bleed photos; `on-light` inverts to a black button for light configurator/dialog surfaces.
