import { MetadataRoute } from 'next';
import { createClient } from '@/prismicio';

const staticRoutes: MetadataRoute.Sitemap = [
  {
    url: 'https://www.atrancas.cl/guia-completa-semana-chilenidad-2026',
    lastModified: '2025-06-01',
    changeFrequency: 'yearly',
    priority: 0.9,
  },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const client = createClient();
  const pages = await client.getAllByType('page');

  const prismicRoutes: MetadataRoute.Sitemap = pages.map((page) => ({
    url: `https://www.atrancas.cl${page.uid === 'home' ? '' : `/${page.uid}`}`,
    lastModified: page.last_publication_date ?? new Date().toISOString(),
    changeFrequency: (page.uid === 'home' ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
    priority: page.uid === 'home' ? 1.0 : 0.8,
  }));

  return [...prismicRoutes, ...staticRoutes];
}
