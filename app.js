/* Voice, fixed — reveal on scroll, reading progress, active nav */
(() => {
  'use strict';
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Reveal: elements fade up once, staggered 60ms within each batch that enters together.
  // Hero animates in with CSS on load; the observer handles everything below it.
  const heroItems = [...document.querySelectorAll('.hero .rv')];
  const items = [...document.querySelectorAll('.rv')].filter((el) => !heroItems.includes(el));
  if (!('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('in'));
  } else {
    const io = new IntersectionObserver((entries) => {
      const entering = entries.filter((e) => e.isIntersecting);
      entering.forEach((e, i) => {
        e.target.style.transitionDelay = reduce ? '0ms' : `${Math.min(i * 60, 360)}ms`;
        e.target.classList.add('in');
        io.unobserve(e.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    items.forEach((el) => io.observe(el));
  }

  // Reading progress: transform only, updated once per frame.
  const prog = document.getElementById('prog');
  let ticking = false;
  const update = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    prog.style.transform = `scaleX(${max > 0 ? Math.min(scrollY / max, 1) : 0})`;
    ticking = false;
  };
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  addEventListener('resize', update);
  update();

  // Highlight the header link for the group of sections in view.
  const groups = {
    context: ['context'],
    teardown: ['teardown'],
    findings: ['findings', 'problem'],
    solution: ['solution'],
    documents: ['documents'],
  };
  const owner = {};
  Object.entries(groups).forEach(([g, ids]) => ids.forEach((id) => { owner[id] = g; }));
  const links = [...document.querySelectorAll('.top-nav a')];
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const g = owner[e.target.id];
      links.forEach((a) => a.classList.toggle('on', a.getAttribute('href') === `#${g}`));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  Object.keys(owner).forEach((id) => { const s = document.getElementById(id); if (s) spy.observe(s); });
})();
