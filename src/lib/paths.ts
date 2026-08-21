export function withBase(path: string): string {
  if (/^https?:\/\//.test(path)) {
    return path;
  }

  const base = import.meta.env.BASE_URL;

  if (path.startsWith('#')) {
    return `${base}${path}`;
  }

  return `${base}${path.replace(/^\//, '')}`;
}
