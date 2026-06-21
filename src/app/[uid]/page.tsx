import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { asText } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

type Params = { uid: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { uid } = await params;
  const client = createClient();
  const page = await client.getByUID("page", uid).catch(() => notFound());

  return {
    title: asText(page.data.title),
    description: page.data.meta_description,
    alternates: { canonical: `/${uid}` },
    openGraph: {
      title: page.data.meta_title ?? asText(page.data.title) ?? undefined,
      description: page.data.meta_description ?? undefined,
      type: 'website' as const,
      images: page.data.meta_image?.url
        ? [{ url: page.data.meta_image.url }]
        : [{ url: '/og-default.jpg' }],
    },
    twitter: { card: 'summary_large_image' as const },
  };
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { uid } = await params;
  const client = createClient();
  const page = await client.getByUID("page", uid).catch(() => notFound());

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.atrancas.cl" },
      { "@type": "ListItem", "position": 2, "name": asText(page.data.title), "item": `https://www.atrancas.cl/${uid}` }
    ]
  };

  const faqSlice = page.data.slices.find((s: any) => s.slice_type === 'faqs');
  const faqSchema = faqSlice ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": ((faqSlice as any).primary?.questions ?? []).map((q: any) => ({
      "@type": "Question",
      "name": asText(q.title),
      "acceptedAnswer": { "@type": "Answer", "text": asText(q.html) }
    }))
  } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <SliceZone slices={page.data.slices} components={components} />
    </>
  );
}

export async function generateStaticParams() {
  const client = createClient();

  const pages = await client.getAllByType("page");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
