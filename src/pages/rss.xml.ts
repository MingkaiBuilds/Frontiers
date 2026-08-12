import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { withBase } from '@/utils/paths';

export async function GET(context: { site?: URL }) {
  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.published.valueOf() - a.data.published.valueOf(),
  );

  return rss({
    title: 'Physical Extremes — Engineering Reports',
    description: 'Deep engineering reports from the five great physical frontiers.',
    site: new URL(withBase('/'), context.site ?? new URL('https://mingkaibuilds.github.io')),
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.published,
      link: withBase(`/reports/${post.id}/`),
      categories: [post.data.frontier, post.data.difficulty, post.data.evidenceStatus],
      customData: post.data.updated
        ? `<updated>${post.data.updated.toISOString()}</updated>`
        : undefined,
    })),
    customData: '<language>en-us</language>',
  });
}
