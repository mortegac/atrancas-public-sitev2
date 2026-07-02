import type { Metadata } from 'next';
import Link from 'next/link';
import { asText } from '@prismicio/client';
import { createClient } from '@/prismicio';
import { COMUNAS } from '@/app/arriendo-de-mesones-para-eventos/[comuna]/comunas-data';

export const metadata: Metadata = {
  title: 'Mapa del Sitio',
  description: 'Índice completo de todas las páginas de Atrancas — rincones campestres, buffet, mesones y herrajes.',
  alternates: { canonical: '/sitemap' },
};

const CAMPAIGNS = [
  { title: 'Guía Chilenidad 2026', url: '/guia-completa-semana-chilenidad-2026' },
];

const LANDINGS = [
  { title: 'Mesones, Buffet y Barras', url: '/landing/mesones-barras' },
  { title: 'Arriendo de Mesones para Eventos', url: '/arriendo-de-mesones-para-eventos' },
  { title: 'Preguntas Frecuentes', url: '/preguntas-frecuentes' },
];

const CATALOGO = [
  { title: 'Catálogo General', url: '/catalogo' },
  { title: 'Complementarios', url: '/complementarios' },
  { title: 'Complementarios Asados', url: '/complementarios-asados' },
  { title: 'Ambientación Exterior', url: '/ambientacion-exterior' },
  { title: 'Rincones Campestres', url: '/rincones-campestres' },
  { title: 'Buffet, Mesones y Barras', url: '/buffet-mesones-y-barras' },
  { title: 'Lounges', url: '/lounges' },
];

function SitemapColumn({
  heading,
  links,
}: {
  heading: string;
  links: { title: string; url: string }[];
}) {
  return (
    <div>
      <h2 className="mb-6 border-l-4 border-[#c39f77] pl-4 text-sm font-bold uppercase tracking-widest text-gray-900">
        {heading}
      </h2>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.url}>
            <Link
              href={link.url}
              className="group flex items-center gap-2 text-base text-[#c39f77] transition hover:opacity-70"
            >
              <span className="transition group-hover:translate-x-0.5">→</span>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default async function SitemapPage() {
  const client = createClient();
  const pages = await client.getAllByType('page');

  const prismicPages = pages.map((page) => ({
    title: asText(page.data.title) || page.uid,
    url: `/${page.uid === 'home' ? '' : page.uid}`,
  }));

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 px-6 py-14">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-5xl font-bold text-gray-900 md:text-6xl">Mapa del Sitio</h1>
          <p className="mt-3 text-base text-gray-500">
            Encuentra cualquier página de Atrancas.
          </p>
        </div>
      </div>

      <hr className="border-gray-200" />

      {/* Grid */}
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-14 md:grid-cols-4">
          <SitemapColumn heading="Páginas del Sitio" links={prismicPages} />
          <SitemapColumn heading="Catálogo" links={CATALOGO} />
          <SitemapColumn heading="Campañas" links={CAMPAIGNS} />
          <SitemapColumn heading="Landing Pages" links={LANDINGS} />
        </div>

        {/* Comunas SEO */}
        <div className="mt-14 border-t border-gray-100 pt-10">
          <h2 className="mb-6 border-l-4 border-[#c39f77] pl-4 text-sm font-bold uppercase tracking-widest text-gray-900">
            Arriendo por Comuna
          </h2>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-5">
            {COMUNAS.map((c) => (
              <Link
                key={c.slug}
                href={`/arriendo-de-mesones-para-eventos/${c.slug}`}
                className="rounded-lg border border-gray-100 px-3 py-2 text-xs text-[#c39f77] transition hover:border-[#c39f77]/30 hover:bg-[#c39f77]/5"
              >
                {c.nombre}
              </Link>
            ))}
          </div>
        </div>

        <p className="mt-10 border-t border-gray-100 pt-8 text-xs text-gray-400">
          Sitemap XML:{' '}
          <a href="/sitemap.xml" className="text-[#c39f77] hover:underline" target="_blank" rel="noopener">
            /sitemap.xml
          </a>
        </p>
      </div>
    </main>
  );
}
