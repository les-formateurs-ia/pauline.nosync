// Subtle scroll animations, driven by data attributes:
//   data-split            headline: words rise softly
//   data-reveal           fade + rise (data-reveal="stagger" animates direct children in sequence)
//   data-img              image unveiled from bottom with a slow settle
//   data-parallax="0.1"   gentle vertical parallax
//   data-hscroll          horizontal strip that slides as you scroll
//   data-trail            thin line drawn along scroll, [data-trail-dog] follows it
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger, SplitText, DrawSVGPlugin, MotionPathPlugin);

const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const once = (el: Element, start = 'top 86%') => ({ trigger: el, start, once: true });
const inHero = (el: Element) => !!el.closest('[data-hero]');

function smoothScroll() {
  const lenis = new Lenis({ lerp: 0.1, anchors: { offset: -90 } });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
  (window as any).lenis = lenis;
}

function split() {
  document.querySelectorAll<HTMLElement>('[data-split]').forEach((el) => {
    SplitText.create(el, {
      type: 'words', mask: 'words', autoSplit: true,
      onSplit: (s) => gsap.from(s.words, {
        yPercent: 100, duration: 1.1, ease: 'expo.out', stagger: 0.035,
        delay: inHero(el) ? 0.1 : 0, scrollTrigger: inHero(el) ? undefined : once(el, 'top 90%'),
      }),
    });
  });
}

function reveal() {
  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
    const targets = el.dataset.reveal === 'stagger' ? el.children : el;
    gsap.from(targets, { y: 28, autoAlpha: 0, duration: 1, ease: 'power3.out', stagger: 0.08, delay: inHero(el) ? 0.35 : 0, scrollTrigger: inHero(el) ? undefined : once(el) });
  });
  document.querySelectorAll<HTMLElement>('[data-img]').forEach((el) => {
    const img = el.querySelector('img');
    const tl = gsap.timeline({ scrollTrigger: inHero(el) ? undefined : once(el, 'top 90%'), delay: inHero(el) ? 0.2 : 0 });
    tl.from(el, { clipPath: 'inset(100% 0% 0% 0% round 14px)', duration: 1.4, ease: 'expo.inOut' });
    if (img) tl.from(img, { scale: 1.18, duration: 1.8, ease: 'expo.out' }, 0.2);
  });
}

function draw() {
  document.querySelectorAll<SVGElement>('[data-draw]').forEach((el) => {
    gsap.from(el.tagName.toLowerCase() === 'svg' ? el.querySelectorAll('path, line, circle') : el, { drawSVG: 0, duration: 1.4, ease: 'power2.inOut', scrollTrigger: once(el, 'top 90%') });
  });
}

function parallax() {
  document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((el) => {
    const s = Number(el.dataset.parallax || 0.1);
    gsap.fromTo(el, { y: () => -s * 160 }, { y: () => s * 160, ease: 'none', scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true } });
  });
}

function hscroll() {
  document.querySelectorAll<HTMLElement>('[data-hscroll]').forEach((track) => {
    gsap.fromTo(track, { x: () => innerWidth * 0.06 }, {
      x: () => -(track.scrollWidth - innerWidth * 0.94), ease: 'none',
      scrollTrigger: { trigger: track.parentElement, start: 'top bottom', end: 'bottom top', scrub: 0.8, invalidateOnRefresh: true },
    });
  });
}

function trail() {
  document.querySelectorAll<HTMLElement>('[data-trail]').forEach((wrap) => {
    const path = wrap.querySelector<SVGPathElement>('[data-trail-path]');
    const dog = wrap.querySelector<HTMLElement>('[data-trail-dog]');
    const svg = path?.ownerSVGElement;
    if (!path || !svg) return;
    // Straight line at real pixel size, so drawing and the marker stay in sync.
    const build = () => {
      const w = svg.clientWidth, h = wrap.clientHeight;
      svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
      svg.querySelectorAll('path').forEach((p) => p.setAttribute('d', `M${w / 2} 0 L${w / 2} ${h}`));
    };
    build();
    ScrollTrigger.addEventListener('refreshInit', build);
    const tl = gsap.timeline({ scrollTrigger: { trigger: wrap, start: 'top 60%', end: 'bottom 60%', scrub: 0.6, invalidateOnRefresh: true } });
    tl.from(path, { drawSVG: 0, ease: 'none' }, 0);
    if (dog) tl.to(dog, { motionPath: { path, align: path, alignOrigin: [0.5, 0.5] }, ease: 'none', immediateRender: true }, 0);
  });
}

function counters() {
  document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
    const end = Number(el.dataset.count), o = { v: 0 };
    gsap.to(o, { v: end, duration: 1.6, ease: 'power2.out', scrollTrigger: once(el), onUpdate: () => (el.textContent = String(Math.round(o.v))) });
  });
}

export function initMotion() {
  if (reduced) return;
  smoothScroll();
  split();
  reveal();
  draw();
  parallax();
  hscroll();
  trail();
  counters();
  document.fonts?.ready.then(() => ScrollTrigger.refresh());
  addEventListener('load', () => ScrollTrigger.refresh());
}
