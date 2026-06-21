import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { asText } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getByUID("page", "home").catch(() => notFound());

  return {
    title: asText(page.data.title),
    description: page.data.meta_description,
    alternates: { canonical: '/' },
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

export default async function Page() {
  const client = createClient();
  const page = await client.getByUID("page", "home").catch(() => notFound());

  return <SliceZone slices={page.data.slices} components={components} />;
}
