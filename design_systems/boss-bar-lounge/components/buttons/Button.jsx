import React from 'react';

/**
 * Boss Bar Lounge button.
 * - primary: always-on gold gradient with a slow shimmer + gold glow (the loud CTA: "Call Now")
 * - outline: tan hairline that fills tan + glows on hover (secondary: "Get Directions")
 * - ghost:   faint white hairline, gold on hover (tertiary: "Drinks Menu")
 * Sharp corners, wide-tracked DM Sans caps. No border radius — ever.
 */
export function Button({
  variant = 'primary',
  href,
  children,
  icon,
  size = 'md',
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const pad = size === 'sm' ? '10px 22px' : size === 'lg' ? '16px 40px' : '14px 32px';
  const fontSize = size === 'sm' ? '12px' : '13px';

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: pad,
    fontFamily: "'DM Sans', system-ui, sans-serif",
    fontSize,
    fontWeight: 600,
    letterSpacing: '0.1em',
    whiteSpace: 'nowrap',
    border: 'none',
    borderRadius: 0,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.4 : 1,
    transition: 'filter 0.3s, transform 0.2s, background 0.2s, color 0.2s, border-color 0.2s',
    textDecoration: 'none',
    ...style,
  };

  const variants = {
    primary: {
      background: 'linear-gradient(135deg,#C99A5E 0%,#A07838 50%,#E0B36A 100%)',
      backgroundSize: '200% 200%',
      color: '#fff',
      filter: 'drop-shadow(0 0 18px rgba(224,179,106,0.55))',
      animation: disabled ? 'none' : 'bbl-gold-shift 4s ease-in-out infinite alternate',
    },
    outline: {
      background: 'transparent',
      color: 'var(--bbl-tan-light, #E7BD8B)',
      border: '1.5px solid rgba(201,154,94,0.7)',
      filter: 'drop-shadow(0 0 6px rgba(201,154,94,0.25))',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--bbl-text-sub, rgba(255,255,255,0.82))',
      border: '1px solid var(--bbl-border-strong, rgba(255,255,255,0.18))',
    },
  };

  const hover = (e, on) => {
    if (disabled) return;
    const el = e.currentTarget;
    if (variant === 'primary') {
      el.style.filter = on
        ? 'drop-shadow(0 0 32px rgba(224,179,106,0.9)) drop-shadow(0 0 60px rgba(224,179,106,0.4))'
        : 'drop-shadow(0 0 18px rgba(224,179,106,0.55))';
      el.style.transform = on ? 'translateY(-1px)' : 'none';
      el.style.animationPlayState = on ? 'paused' : 'running';
    } else if (variant === 'outline') {
      el.style.background = on ? '#C99A5E' : 'transparent';
      el.style.color = on ? '#fff' : 'var(--bbl-tan-light, #E7BD8B)';
      el.style.borderColor = on ? '#C99A5E' : 'rgba(201,154,94,0.7)';
      el.style.filter = on
        ? 'drop-shadow(0 0 22px rgba(201,154,94,0.8)) drop-shadow(0 0 48px rgba(201,154,94,0.35))'
        : 'drop-shadow(0 0 6px rgba(201,154,94,0.25))';
      el.style.transform = on ? 'translateY(-1px)' : 'none';
    } else {
      el.style.color = on ? 'var(--bbl-gold, #E0B36A)' : 'var(--bbl-text-sub, rgba(255,255,255,0.82))';
      el.style.borderColor = on ? 'var(--bbl-gold-border, rgba(224,179,106,0.3))' : 'var(--bbl-border-strong, rgba(255,255,255,0.18))';
      el.style.filter = on ? 'drop-shadow(0 0 14px rgba(224,179,106,0.45))' : 'none';
    }
  };

  const style2 = { ...base, ...variants[variant] };
  const content = (
    <>
      {icon ? <span aria-hidden="true">{icon}</span> : null}
      {children}
    </>
  );

  const handlers = {
    onMouseEnter: (e) => hover(e, true),
    onMouseLeave: (e) => hover(e, false),
    onClick: disabled ? undefined : onClick,
  };

  if (href && !disabled) {
    return (
      <a href={href} style={style2} {...handlers} {...rest}>
        {content}
      </a>
    );
  }
  return (
    <button type="button" style={style2} disabled={disabled} {...handlers} {...rest}>
      {content}
    </button>
  );
}
