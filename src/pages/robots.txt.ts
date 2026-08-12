import type { APIRoute } from 'astro';
import { withBase } from '@/utils/paths';

export const GET: APIRoute = ({ site }) => {
  const origin = site ?? new URL('https://mingkaibuilds.github.io');
  const sitemap = new URL(withBase('/sitemap-index.xml'), origin);

  return new Response(
    `User-agent: *\nAllow: ${withBase('/')}\nDisallow: ${withBase('/studio/')}\n\nSitemap: ${sitemap.href}\n`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
};

