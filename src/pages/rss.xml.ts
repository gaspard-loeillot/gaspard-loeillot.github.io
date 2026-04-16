import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts.ts';

export async function GET(context: APIContext) {
  const essays = await getCollection('essays', ({ data }) => !data.draft);
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site!,
    items: essays
      .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
      .map((essay) => ({
        title: essay.data.title,
        pubDate: essay.data.date,
        description: essay.data.description ?? '',
        link: `/essays/${essay.id}/`,
        categories: essay.data.tags,
      })),
  });
}
