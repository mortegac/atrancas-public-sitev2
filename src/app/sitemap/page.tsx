import type { Metadata } from 'next';
import Link from 'next/link';
import { asText } from '@prismicio/client';
import { createClient } from '@/prismicio';

export const metadata: Metadata = {
  title: 'Mapa del Sitio',
  description: 'Índice completo de todas las páginas de Atrancas — rincones campestres, buffet, mesones y herrajes.',
  alternates: { canonical: '/sitemap' },
};

const staticRoutes = [
  {
    category: 'Campaña Fiestas Patrias',
    pages: [
      { title: 'Guía Completa Semana de la Chilenidad 2026', url: '/guia-completa-semana-chilenidad-2026', description: 'Guía oficial XXIX Semana de la Chilenidad 2026: fechas, programa, calendario y arriendo de decoración campestre en Santiago.' },
    ],
  },
];

export default async function SitemapPage() {
  const client = createClient();
  const pages = await client.getAllByType('page');

  const prismicPages = pages.map((page) => ({
    title: asText(page.data.title) || page.uid,
    url: `/${page.uid === 'home' ? '' : page.uid}`,
    description: page.data.meta_description ?? '',
    lastModified: page.last_publication_date
      ? new Date(page.last_publication_date).toLocaleDateString('es-CL', { year: 'numeric', month: 'long', day: 'numeric' })
      : null,
  }));

  return (
    <main className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Mapa del Sitio</h1>
        <p className="text-lg text-gray-600 mb-12">
          Índice completo de todas las páginas de Atrancas.
        </p>

        {/* Prismic pages */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b border-gray-200 pb-3">
            Páginas del Sitio
          </h2>
          <ul className="space-y-4">
            {prismicPages.map((page) => (
              <li key={page.url} className="flex flex-col sm:flex-row sm:items-start gap-2">
                <div className="flex-1">
                  <Link
                    href={page.url}
                    className="text-lg font-medium text-[#c39f77] hover:underline"
                  >
                    {page.title}
                  </Link>
                  {page.description && (
                    <p className="text-sm text-gray-500 mt-1">{page.description}</p>
                  )}
                </div>
                {page.lastModified && (
                  <span className="text-xs text-gray-400 whitespace-nowrap mt-1">
                    {page.lastModified}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </section>

        {/* Static/campaign pages */}
        {staticRoutes.map((section) => (
          <section key={section.category} className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b border-gray-200 pb-3">
              {section.category}
            </h2>
            <ul className="space-y-4">
              {section.pages.map((page) => (
                <li key={page.url} className="flex flex-col">
                  <Link
                    href={page.url}
                    className="text-lg font-medium text-[#c39f77] hover:underline"
                  >
                    {page.title}
                  </Link>
                  {page.description && (
                    <p className="text-sm text-gray-500 mt-1">{page.description}</p>
                  )}
                </li>
              ))}
            </ul>
          </section>
        ))}

        {/* XML Sitemap link */}
        <section className="mt-16 pt-8 border-t border-gray-100">
          <p className="text-sm text-gray-400">
            Sitemap XML para motores de búsqueda:{' '}
            <a
              href="/sitemap.xml"
              className="text-[#c39f77] hover:underline"
              target="_blank"
              rel="noopener"
            >
              /sitemap.xml
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
