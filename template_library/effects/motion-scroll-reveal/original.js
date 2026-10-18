/* motion-scroll-reveal — 사내 저작 표준 모션 모듈 (JS부, ~40줄, 의존성 0)
   사용법:
   <element data-reveal>            기본 fade-up
   <element data-reveal="left|right|scale">
   부모에 data-reveal-group        → 자식 [data-reveal]에 스태거 인덱스 자동 부여
   <element data-parallax="0.12">  스크롤 대비 12% 속도로 미세 이동(±40px 클램프)
   prefers-reduced-motion이면 아무것도 하지 않는다(CSS가 정적 표시 보장). */
(function () {
  'use strict';
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced || !('IntersectionObserver' in window)) {
    document.documentElement.classList.add('no-reveal');
    return;
  }

  // 스태거 인덱스 부여
  document.querySelectorAll('[data-reveal-group]').forEach(function (group) {
    group.querySelectorAll('[data-reveal]').forEach(function (el, i) {
      el.style.setProperty('--reveal-index', i);
    });
  });

  // 리빌 옵저버 — 한 번 등장하면 관찰 해제(재등장 없음, 차분하게)
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-inview');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18, rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('[data-reveal]').forEach(function (el) { io.observe(el); });

  // 패럴랙스 — rAF 스로틀, 뷰포트 중심 기준 오프셋 × 계수, ±40px 클램프
  var layers = Array.prototype.slice.call(document.querySelectorAll('[data-parallax]'));
  if (layers.length) {
    var ticking = false;
    var update = function () {
      ticking = false;
      var vh = window.innerHeight;
      layers.forEach(function (el) {
        var rate = parseFloat(el.getAttribute('data-parallax')) || 0.1;
        var r = el.getBoundingClientRect();
        var offset = (r.top + r.height / 2 - vh / 2) * -rate;
        offset = Math.max(-40, Math.min(40, offset));
        el.style.setProperty('--parallax-y', offset.toFixed(1) + 'px');
      });
    };
    var onScroll = function () {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    update();
  }
})();
