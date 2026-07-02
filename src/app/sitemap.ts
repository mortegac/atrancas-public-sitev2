import { MetadataRoute } from 'next';
import { createClient } from '@/prismicio';
import { COMUNAS } from '@/app/arriendo-de-mesones-para-eventos/[comuna]/comunas-data';

const BASE = 'https://www.atrancas.cl';

const staticRoutes: MetadataRoute.Sitemap = [
  // Campañas
  {
    url: `${BASE}/guia-completa-semana-chilenidad-2026`,
    lastModified: '2025-06-01',
    changeFrequency: 'yearly',
    priority: 0.9,
  },
  // Preguntas frecuentes
  {
    url: `${BASE}/preguntas-frecuentes`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  // Catálogo
  { url: `${BASE}/catalogo`, lastModified: new Date().toISOString(), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE}/complementarios`, lastModified: new Date().toISOString(), changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE}/complementarios-asados`, lastModified: new Date().toISOString(), changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE}/ambientacion-exterior`, lastModified: new Date().toISOString(), changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE}/rincones-campestres`, lastModified: new Date().toISOString(), changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE}/buffet-mesones-y-barras`, lastModified: new Date().toISOString(), changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE}/lounges`, lastModified: new Date().toISOString(), changeFrequency: 'monthly', priority: 0.7 },
  // Landing pages
  {
    url: `${BASE}/landing/mesones-barras`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  // SEO arriendo mesones
  {
    url: `${BASE}/arriendo-de-mesones-para-eventos`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.9,
  },
];

const comunaRoutes: MetadataRoute.Sitemap = COMUNAS.map((c) => ({
  url: `${BASE}/arriendo-de-mesones-para-eventos/${c.slug}`,
  lastModified: new Date().toISOString(),
  changeFrequency: 'monthly' as const,
  priority: 0.7,
}));

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const client = createClient();
  const pages = await client.getAllByType('page');

  const prismicRoutes: MetadataRoute.Sitemap = pages.map((page) => ({
    url: `${BASE}${page.uid === 'home' ? '' : `/${page.uid}`}`,
    lastModified: page.last_publication_date ?? new Date().toISOString(),
    changeFrequency: (page.uid === 'home' ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
    priority: page.uid === 'home' ? 1.0 : 0.8,
  }));

  return [...prismicRoutes, ...staticRoutes, ...comunaRoutes];
}
