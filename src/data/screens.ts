import type { GradientVariant } from './gradients';

export type ScreenTone = 'dark-gray' | 'white' | 'yellow';

export interface Screen {
  id: string;
  tone: ScreenTone;
  gradient?: GradientVariant;
}

export const screens: Screen[] = [
  { id: 'landing', tone: 'white' },
  { id: 'dark-gray', tone: 'white' },
  { id: 'white', tone: 'white' },
  { id: 'yellow', tone: 'yellow' },
];

export type DesktopSegment =
  | { type: 'vertical'; ids: string[] }
  | { type: 'horizontal'; ids: string[] };

export const desktopSegments: DesktopSegment[] = [
  { type: 'vertical', ids: ['landing'] },
  { type: 'horizontal', ids: ['dark-gray', 'white'] },
  { type: 'vertical', ids: ['yellow'] },
];

/** The browser window travels with page 1 and page 2, so it stops after this screen. */
export const browserLastScreen = 'dark-gray';

export function screenById(id: string): Screen {
  const screen = screens.find((item) => item.id === id);

  if (!screen) {
    throw new Error(`Unknown screen: ${id}`);
  }

  return screen;
}
