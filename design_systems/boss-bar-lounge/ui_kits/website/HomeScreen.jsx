/* global React */
// Boss Bar Lounge — Home screen. Composes DS primitives into the real homepage flow.
function HomeScreen({ onNavigate }) {
  const DS = window.BossBarLoungeDesignSystem_019dea;
  const { Button, SectionHeading, PriceCard, NumberedReason, StepCard, GlowImage } = DS;
  const CDN = 'https://img.danang-girlsbar.com/gallery/en/';

  return (
    <div>
      {/* HERO */}
      <section style={{ position: 'relative', minHeight: '92vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', overflow: 'hidden', paddingTop: '40px' }}>
        <div style={{ position: 'absolute', inset: 0, background: `url(${CDN}danang-girlsbar-boss-lounge-premium-interior-stage.jpg) center/cover` }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(115deg,rgba(8,8,8,0.92) 0%,rgba(8,8,8,0.55) 60%,rgba(8,8,8,0.12) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(8,8,8,1) 0%,rgba(8,8,8,0.55) 35%,transparent 72%)' }} />
        <div style={{ position: 'relative', zIndex: 2, padding: '0 52px 60px', maxWidth: '900px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
            <span style={{ width: '32px', height: '2px', background: 'var(--bbl-tan-light)' }} />
            <span style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--bbl-tan-light)' }}>Da Nang · Nightlife · Since 2024</span>
          </div>
          <h1 style={{ fontFamily: 'var(--bbl-font-display)', fontSize: 'clamp(36px,7vw,90px)', lineHeight: 0.88, fontWeight: 700, margin: '0 0 24px' }}>
            <span style={{ display: 'block', color: 'rgba(255,255,255,0.9)' }}>Da Nang No.1</span>
            <span style={{ display: 'block', fontStyle: 'italic', fontWeight: 300, background: 'linear-gradient(135deg,#E0B36A,#F8D19C 40%,#A07838)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent', filter: 'drop-shadow(0 0 28px rgba(224,179,106,0.5))' }}>Girls Bar &amp;</span>
            <span style={{ display: 'block', color: 'var(--bbl-tan-light)', textShadow: '0 0 28px rgba(201,154,94,0.65)' }}>Lounge</span>
          </h1>
          <p style={{ fontFamily: 'var(--bbl-font-body)', fontSize: '16px', color: 'var(--bbl-text-sub)', maxWidth: '540px', lineHeight: 1.7, marginBottom: '28px' }}>
            Meet 100+ premium cast at Boss Bar Lounge. Enjoy your night at the most popular Girls Bar in Da Nang.
          </p>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '34px' }}>
            {['Choice from 300,000 ₫ / 1H', '19:00 — 02:00 · Year-Round', '178 Phạm Văn Đồng, Sơn Trà'].map((m) => (
              <span key={m} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--bbl-text-sub)' }}>
                <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--bbl-gold)', opacity: 0.6 }} />{m}
              </span>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <Button variant="primary" icon="📞" href="tel:+84935777013">Call Now</Button>
            <Button variant="outline" onClick={() => onNavigate('Visit')}>Get Directions</Button>
            <Button variant="ghost" onClick={() => onNavigate('Drinks')}>Drinks Menu</Button>
          </div>
        </div>
      </section>

      {/* URGENCY BAR */}
      <div style={{ background: 'var(--bbl-grad-gold)', boxShadow: 'var(--bbl-shadow-banner)', padding: '12px 52px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
        <span style={{ fontSize: '13px', fontWeight: 600, color: '#1A0F04' }}>🎉 Exclusive Discount for Official Website Visitors
          <span style={{ fontSize: '11px', fontWeight: 400, opacity: 0.7, marginLeft: '10px' }}>· Best Price Guaranteed via Zalo</span>
        </span>
        <span style={{ fontSize: '12px', fontWeight: 600, color: '#1A0F04' }}>📞 +84-935-777-013 &nbsp; 💬 0935777013</span>
      </div>

      {/* PRICING */}
      <section style={{ background: 'var(--bbl-bg-2)', padding: '80px 52px' }}>
        <SectionHeading eyebrow="Choice System" eyebrowColor="gold" title="Choice" emphasis="Pricing Guide"
          lead="Choose your cast members yourself. Pricing is shown below; drinks are charged separately." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '2px', background: 'var(--bbl-border)', marginTop: '36px' }}>
          <PriceCard count="1" unit="person" fee="300,000 ₫" />
          <PriceCard count="2" fee="600,000 ₫" />
          <PriceCard count="3" fee="900,000 ₫" highlight badge="Popular" />
          <PriceCard count="4" fee="1,200,000 ₫" />
        </div>
        <div style={{ marginTop: '20px', fontSize: '13px', color: 'var(--bbl-text-dim)', padding: '16px 20px', background: 'rgba(255,255,255,0.03)', borderLeft: '2px solid var(--bbl-border)' }}>
          ※ The prices above are for the choice system only. Drinks and food are charged separately.
        </div>
        <div style={{ marginTop: '32px', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
          <Button variant="primary" icon="📞" href="tel:+84935777013">Call to Reserve or Inquire</Button>
          <Button variant="ghost" onClick={() => onNavigate('Visit')}>View Directions</Button>
        </div>
      </section>

      {/* WHY */}
      <section style={{ padding: '80px 52px' }}>
        <SectionHeading eyebrow="Why Boss Bar?" title="5 Reasons to Choose" emphasis="Boss Bar Lounge"
          lead="Among the many bars in Da Nang, here is why guests choose Boss Bar." />
        <div style={{ marginTop: '40px', borderBottom: '1px solid var(--bbl-border)' }}>
          <NumberedReason number="01" title="Da Nang's Largest Venue" tag="300㎡">A refined interior that blends Japanese kyabakura with Korean Gangnam style. Enjoy a comfortable, private experience in our spacious 300㎡ venue.</NumberedReason>
          <NumberedReason number="02" title="100+ Young Cast Members" tag="Daily">More than 100 young, lively cast members welcome you every day. Pick your favorites yourself — choose freely from 2 to 4 people.</NumberedReason>
          <NumberedReason number="03" title="Staff Fluent in 5 Languages" tag="Language Badges">Korean, Japanese, English, Chinese, and Vietnamese. Spot each language at a glance with the badges staff wear — no language worries here.</NumberedReason>
          <NumberedReason number="04" title="Transparent Pricing" tag="No Hidden Fees">From choice fees to drink prices, everything is disclosed up front. First-time visitors can enjoy themselves with complete peace of mind.</NumberedReason>
          <NumberedReason number="05" title="Complete Privacy" tag="Security First">Customer information and visits are kept strictly confidential — business hosting, solo visits, or group gatherings, all in full discretion.</NumberedReason>
        </div>
      </section>

      {/* HOW TO */}
      <section style={{ background: 'var(--bbl-bg-2)', padding: '80px 52px' }}>
        <SectionHeading eyebrow="How to Visit" eyebrowColor="gold" title="Visit in" emphasis="4 Steps"
          lead="First-time visitors can enjoy the experience easily in just 4 simple steps." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '2px', background: 'var(--bbl-border)', marginTop: '40px' }}>
          <StepCard number="01" title="Inquire &amp; Reserve" arrow>Tell us your group size and preferred time by phone or Zalo. We'll guide you on the choice fee for your group.</StepCard>
          <StepCard number="02" title="Visit the Venue" arrow>178 Phạm Văn Đồng, Sơn Trà. Search the address in Grab and come over. Open 19:00 – 02:00.</StepCard>
          <StepCard number="03" title="Choose Your Cast" arrow>Choose your cast yourself — 2, 3 or 4 people. Check each member's languages via their badges.</StepCard>
          <StepCard number="04" title="Enjoy Your Night">Enjoy an unforgettable night with premium drinks. Browse the full menu on our Drinks page.</StepCard>
        </div>
      </section>

      {/* GALLERY */}
      <section style={{ padding: '80px 52px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '36px', flexWrap: 'wrap', gap: '16px' }}>
          <SectionHeading eyebrow="Photo Gallery" title="Our" emphasis="Atmosphere" />
          <a onClick={() => onNavigate('Gallery')} style={{ fontSize: '12px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--bbl-gold)', cursor: 'pointer' }}>View Full Gallery →</a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gridTemplateRows: '240px 200px', gap: '4px' }}>
          <div style={{ gridColumn: 'span 2', gridRow: 'span 2' }}><GlowImage src={CDN + 'boss-bar-lounge-interior-view.jpg'} ratio={undefined} style={{ height: '100%' }} caption="Boss Bar Lounge interior" /></div>
          <GlowImage src={CDN + 'boss-bar-lounge-interior-9.jpg'} style={{ height: '100%' }} caption="A special evening" />
          <GlowImage src={CDN + 'danang-girlsbar-boss-lounge-fruit-platter-beer-tower.jpg'} style={{ height: '100%' }} caption="Fruit platter &amp; beer tower" />
          <div style={{ gridColumn: 'span 2' }}><GlowImage src={CDN + 'boss-bar-lounge-interior-3.jpg'} style={{ height: '100%' }} caption="Under refined lighting" /></div>
          <GlowImage src={CDN + 'boss-bar-lounge-bar-counter.jpg'} style={{ height: '100%' }} caption="Bar counter" />
          <GlowImage src={CDN + 'danang-girlsbar-boss-lounge-food-and-drinks-table.jpg'} style={{ height: '100%' }} caption="Food &amp; drinks" />
        </div>
      </section>
    </div>
  );
}
window.HomeScreen = HomeScreen;
