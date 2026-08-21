export type ScreenTone = 'black' | 'dark-gray' | 'white' | 'yellow';

export interface Screen {
  id: string;
  tone: ScreenTone;
}

export const screens: Screen[] = [
  { id: 'black', tone: 'black' },
  { id: 'dark-gray', tone: 'dark-gray' },
  { id: 'white', tone: 'white' },
  { id: 'yellow', tone: 'yellow' },
];

export type DesktopSegment =
  | { type: 'vertical'; ids: string[] }
  | { type: 'horizontal'; ids: string[] };

export const desktopSegments: DesktopSegment[] = [
  { type: 'vertical', ids: ['black'] },
  { type: 'horizontal', ids: ['dark-gray', 'white'] },
  { type: 'vertical', ids: ['yellow'] },
];

export function screenById(id: string): Screen {
  const screen = screens.find((item) => item.id === id);

  if (!screen) {
    throw new Error(`Unknown screen: ${id}`);
  }

  return screen;
}
