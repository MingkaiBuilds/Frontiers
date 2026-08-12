/**
 * Prefix an internal path with Astro's configured base path.
 *
 * GitHub project pages live at `/Frontiers/`, while local, Vercel, Netlify,
 * and custom-domain builds usually live at `/`. Keeping path generation here
 * prevents broken links when the same static output moves between hosts.
 */
export function withBase(path = '/') {
  const base = import.meta.env.BASE_URL === '/' ? '' : import.meta.env.BASE_URL.replace(/\/$/, '');
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${base}${normalized}` || '/';
}
