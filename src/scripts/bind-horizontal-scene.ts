export const DESKTOP_HORIZONTAL_QUERY =
  '(min-width: 1280px) and (pointer: fine) and (prefers-reduced-motion: no-preference)';

function releaseFollower(follower: HTMLElement): void {
  delete follower.dataset.frozen;
  delete follower.dataset.frozenTop;
  delete follower.dataset.frozenLeft;
  follower.style.position = '';
  follower.style.top = '';
  follower.style.left = '';
  follower.style.marginLeft = '';
  follower.style.transform = '';
}

function remToPx(value: string): number {
  const n = Number.parseFloat(value);

  if (Number.isNaN(n)) {
    return 0;
  }

  if (value.includes('rem')) {
    return n * Number.parseFloat(getComputedStyle(document.documentElement).fontSize);
  }

  return n;
}

function holdFollower(follower: HTMLElement, transform: string): void {
  const rail = follower.parentElement;
  const frame = document.querySelector<HTMLElement>('#dark-gray .editorial-frame');

  if (!rail || !frame) {
    return;
  }

  // Keep the same 2.5rem inset as the page 1 top gap, measured from page 2's
  // frame — not the viewport — so the window cannot sit on the rounded bar.
  const tokens = getComputedStyle(rail);
  const inset = remToPx(tokens.getPropertyValue('--frame-inset')) || 40;
  const railTop = remToPx(tokens.getPropertyValue('--rail-top')) || 96;
  const frameBox = frame.getBoundingClientRect();
  const maxBottom = frameBox.bottom - inset;
  const naturalBottom = railTop + follower.offsetHeight;
  const wouldOverflow = frameBox.bottom > 0 && maxBottom < naturalBottom;

  if (!wouldOverflow) {
    releaseFollower(follower);
    follower.style.transform = transform;
    return;
  }

  if (follower.dataset.frozen !== 'true') {
    follower.style.transform = '';
    follower.dataset.frozen = 'true';
    follower.dataset.frozenLeft = String(follower.getBoundingClientRect().left);
  }

  follower.style.position = 'fixed';
  follower.style.top = `${maxBottom - follower.offsetHeight}px`;
  follower.style.left = `${follower.dataset.frozenLeft}px`;
  follower.style.marginLeft = '0';
  follower.style.transform = transform;
}

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

      // Followers sit beside the scene and travel with the track, so they leave
      // sideways with page 2 instead of rising into page 3.
      const followers = scene.parentElement
        ? Array.from(scene.parentElement.querySelectorAll<HTMLElement>('[data-horizontal-follower]'))
        : [];

      if (!media.matches) {
        track.style.transform = '';
        for (const follower of followers) {
          releaseFollower(follower);
        }

        continue;
      }

      const range = scene.offsetHeight - window.innerHeight;

      if (range <= 0) {
        track.style.transform = '';
        for (const follower of followers) {
          releaseFollower(follower);
        }

        continue;
      }

      const progress = Math.min(1, Math.max(0, -scene.getBoundingClientRect().top / range));
      const distance = track.scrollWidth - scene.clientWidth;
      const transform = `translate3d(${-progress * distance}px, 0, 0)`;
      track.style.transform = transform;

      for (const follower of followers) {
        holdFollower(follower, transform);
      }
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
