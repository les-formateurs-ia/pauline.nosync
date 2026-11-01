// Declarative scroll animations, driven by data attributes:
//   data-split            headline: words rise one by one
//   data-reveal           fade + rise (data-reveal="stagger" animates direct children in sequence)
//   data-pop              sticker-like pop with a little rotation
//   data-draw             SVG paths draw themselves (apply on <svg> or <path>)
//   data-parallax="0.2"   vertical parallax while scrolling
//   data-hscroll          horizontal strip that slides as you scroll
//   data-trail            dog-walk path: draws + moves [data-trail-dog] along it
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger, SplitText, DrawSVGPlugin, MotionPathPlugin);

const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const once = (el: Element, start = 'top 85%') => ({ trigger: el, start, once: true });

function smoothScroll() {
  const lenis = new Lenis({ lerp: 0.11, anchors: { offset: -90 } });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
  (window as any).lenis = lenis;
}

function split() {
  document.querySelectorAll<HTMLElement>('[data-split]').forEach((el) => {
    SplitText.create(el, {
      type: 'words',
      mask: 'words',
      autoSplit: true,
      onSplit: (s) =>
        gsap.from(s.words, {
          yPercent: 115, rotate: 6, duration: 1, ease: 'expo.out', stagger: 0.06,
          scrollTrigger: el.closest('[data-hero]') ? undefined : once(el, 'top 88%'),
          delay: el.closest('[data-hero]') ? 0.15 : 0,
        }),
    });
  });
}

function reveal() {
  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
    const targets = el.dataset.reveal === 'stagger' ? el.children : el;
    gsap.from(targets, { y: 50, autoAlpha: 0, duration: 0.9, ease: 'power3.out', stagger: 0.09, scrollTrigger: once(el) });
  });
  document.querySelectorAll<HTMLElement>('[data-pop]').forEach((el, i) => {
    gsap.from(el, {
      scale: 0.3, rotate: i % 2 ? 14 : -14, autoAlpha: 0, duration: 0.8, ease: 'back.out(2.2)',
      delay: Number(el.dataset.pop || 0),
      scrollTrigger: once(el, 'top 92%'),
    });
  });
}

function draw() {
  document.querySelectorAll<SVGElement>('[data-draw]').forEach((el) => {
    const paths = el.tagName.toLowerCase() === 'svg' ? el.querySelectorAll('path, line, polyline, circle, ellipse') : [el];
    gsap.from(paths, { drawSVG: 0, duration: 1.3, ease: 'power2.inOut', stagger: 0.12, delay: Number((el as HTMLElement).dataset.draw || 0.2), scrollTrigger: once(el, 'top 90%') });
  });
}

function parallax() {
  document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((el) => {
    const s = Number(el.dataset.parallax || 0.15);
    gsap.fromTo(el, { y: () => -s * 200 }, { y: () => s * 200, ease: 'none', scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true } });
  });
}

function hscroll() {
  document.querySelectorAll<HTMLElement>('[data-hscroll]').forEach((track) => {
    gsap.fromTo(track, { x: () => innerWidth * 0.1 }, {
      x: () => -(track.scrollWidth - innerWidth * 0.9), ease: 'none',
      scrollTrigger: { trigger: track.parentElement, start: 'top bottom', end: 'bottom top', scrub: 0.6, invalidateOnRefresh: true },
    });
  });
}

function trail() {
  document.querySelectorAll<HTMLElement>('[data-trail]').forEach((wrap) => {
    const path = wrap.querySelector<SVGPathElement>('[data-trail-path]');
    const dog = wrap.querySelector<HTMLElement>('[data-trail-dog]');
    const svg = path?.ownerSVGElement;
    if (!path || !svg) return;
    // Rebuild the wavy path at the real pixel size so drawing and the dog stay in sync.
    const build = () => {
      const w = svg.clientWidth, h = wrap.clientHeight, c = w / 2, a = w * 0.42, seg = h / 4;
      let d = `M${c} 0`;
      for (let i = 0; i < 4; i++) {
        const y = i * seg, dir = i % 2 ? -1 : 1;
        d += ` C${c + dir * a} ${y + seg * 0.33} ${c + dir * a} ${y + seg * 0.66} ${c} ${y + seg}`;
      }
      svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
      svg.querySelectorAll('path').forEach((p) => p.setAttribute('d', d));
    };
    build();
    ScrollTrigger.addEventListener('refreshInit', build);
    const tl = gsap.timeline({ scrollTrigger: { trigger: wrap, start: 'top 65%', end: 'bottom 70%', scrub: 0.8, invalidateOnRefresh: true } });
    tl.from(path, { drawSVG: 0, ease: 'none' }, 0);
    if (dog) tl.to(dog, { motionPath: { path, align: path, alignOrigin: [0.5, 0.5] }, ease: 'none', immediateRender: true }, 0);
    wrap.querySelectorAll<HTMLElement>('[data-step]').forEach((s) =>
      gsap.from(s, { autoAlpha: 0, x: s.dataset.step === 'r' ? 60 : -60, duration: 0.8, ease: 'power3.out', scrollTrigger: once(s, 'top 75%') })
    );
  });
}

function counters() {
  document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
    const end = Number(el.dataset.count);
    const o = { v: 0 };
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
