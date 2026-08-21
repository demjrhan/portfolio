export const DESKTOP_HORIZONTAL_QUERY =
  '(min-width: 1280px) and (pointer: fine) and (prefers-reduced-motion: no-preference)';

export function bindHorizontalScenes(): void {
  if (document.documentElement.dataset.horizontalBound === 'true') {
    return;
  }

  document.documentElement.dataset.horizontalBound = 'true';

  const scenes = document.querySelectorAll<HTMLElement>('[data-horizontal-scene]');
  const media = window.matchMedia(DESKTOP_HORIZONTAL_QUERY);

  const update = (): void => {
    for (const scene of scenes) {
      const track = scene.querySelector<HTMLElement>('[data-horizontal-track]');

      if (!track) {
        continue;
      }

      if (!media.matches) {
        track.style.transform = '';
        continue;
      }

      const range = scene.offsetHeight - window.innerHeight;

      if (range <= 0) {
        track.style.transform = '';
        continue;
      }

      const progress = Math.min(1, Math.max(0, -scene.getBoundingClientRect().top / range));
      const distance = track.scrollWidth - scene.clientWidth;
      track.style.transform = `translate3d(${-progress * distance}px, 0, 0)`;
    }
  };

  let ticking = false;

  const requestUpdate = (): void => {
    if (ticking) {
      return;
    }

    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      update();
    });
  };

  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate, { passive: true });
  media.addEventListener('change', requestUpdate);
  update();
}
