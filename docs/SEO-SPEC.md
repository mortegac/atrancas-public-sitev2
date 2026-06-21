# Especificación SEO & GEO — Atrancas

**Fecha:** 2026-06-20  
**Alcance:** Auditoría completa de SEO técnico, GEO (optimización para motores generativos), Schema.org y calidad de contenido.

---

## Scores actuales

| Dimensión | Score | Principal bloqueante |
|---|---|---|
| GEO / AI Search | 27/100 | Sin llms.txt, sin schema, FAQs solo client-side |
| SEO Técnico | 38/100 | Sin sitemap real, sin `metadataBase`, Hero LCP sin `priority` |
| Calidad Contenido | 41/100 | Sin H1 en ninguna página, FAQs en inglés, links rotos |
| Schema.org | 0/100 | `schema-dts` instalado pero sin ningún uso |

---

## 1. Performance / Core Web Vitals

### 1.1 LCP — Hero image sin `priority` [CRÍTICO]

**Archivo:** `src/slices/Hero/index.tsx:41`

Next.js lazy-carga todas las imágenes por defecto. La imagen de fondo del Hero (`h-[650px]`, ocupa toda la viewport) es casi con certeza el elemento LCP de la página, y se está aplazando su carga.

```tsx
// ANTES
<PrismicNextImage
  field={backgroundImage}
  alt=""
  fill={true}
  className="pointer-events-none select-none object-cover opacity-40"
/>

// DESPUÉS
<PrismicNextImage
  field={backgroundImage}
  alt=""
  fill={true}
  priority={true}
  sizes="100vw"
  className="pointer-events-none select-none object-cover opacity-40"
/>
```

### 1.2 `PrismicPreview` en producción [ALTO]

**Archivo:** `src/app/layout.tsx:32`

La toolbar de Prismic inyecta polling y DOM en cada visita de usuario real, causando layout shifts.

```tsx
// ANTES
<PrismicPreview repositoryName={repositoryName} />

// DESPUÉS
{process.env.NODE_ENV !== 'production' && (
  <PrismicPreview repositoryName={repositoryName} />
)}
```

### 1.3 GA4 duplicado [MEDIO]

**Archivo:** `src/components/Analytics.tsx`

GTM ya incluye GA4, y además hay un snippet standalone de GA4. Esto duplica todos los eventos. Eliminar el snippet `<Script id="ga4" ...>` (líneas ~32-47) y gestionar GA4 exclusivamente desde dentro de GTM.

### 1.4 `styled-components` vs Tailwind [MEDIO]

Ambos coexisten en `package.json`. `styled-components` v6 añade ~16KB de JS de runtime que bloquea el hilo principal. Auditar con `grep -r "styled-components" src/` — si no hay imports activos, eliminar el paquete.

---

## 2. SEO Técnico

### 2.1 `metadataBase` y metadata raíz [CRÍTICO]

**Archivo:** `src/app/layout.tsx`

Sin `metadataBase`, los URLs de OG images y canonicals se resuelven en relativo, causando que Next.js use `http://localhost:3000` en producción.

```tsx
// src/app/layout.tsx — añadir antes de RootLayout
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://atrancas.cl'),
  title: {
    template: '%s | Atrancas',
    default: 'Atrancas — Cerrajería y Herrajes de Seguridad',
  },
  description: 'Distribuidor especializado en cerraduras de seguridad, bombines y herrajes en España.',
  openGraph: {
    siteName: 'Atrancas',
    type: 'website',
  },
  robots: { index: true, follow: true },
};
```

### 2.2 Sitemap dinámico [CRÍTICO]

**Archivo a crear:** `src/app/sitemap.ts`

El `robots.txt` referencia `https://atrancas.cl/sitemap.xml` que devuelve 404. Next.js 15 sirve automáticamente `src/app/sitemap.ts` como `/sitemap.xml`.

```ts
import { MetadataRoute } from 'next';
import { createClient } from '@/prismicio';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const client = createClient();
  const pages = await client.getAllByType('page');

  return pages.map((page) => ({
    url: `https://atrancas.cl/${page.uid === 'home' ? '' : page.uid}`,
    lastModified: page.last_publication_date,
    changeFrequency: 'weekly' as const,
    priority: page.uid === 'home' ? 1.0 : 0.8,
  }));
}
```

### 2.3 Canonical URLs [ALTO]

**Archivos:** `src/app/page.tsx`, `src/app/[uid]/page.tsx`

```ts
// En generateMetadata de page.tsx
return {
  // ... existente
  alternates: { canonical: '/' },
};

// En generateMetadata de [uid]/page.tsx
return {
  // ... existente
  alternates: { canonical: `/${uid}` },
};
```

### 2.4 `/slice-simulator` indexable [ALTO]

**Archivo:** `src/app/slice-simulator/page.tsx`

```tsx
export const metadata = {
  robots: { index: false, follow: false },
};
```

Y en `public/robots.txt`:
```
Disallow: /slice-simulator
```

### 2.5 Cabeceras de seguridad [ALTO]

**Archivo:** `next.config.mjs`

```js
async headers() {
  return [
    {
      source: '/(.*)',
      headers: [
        { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains' },
        { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
      ],
    },
    // ... bloque robots.txt existente
  ];
},
```

### 2.6 OG metadata completo [MEDIO]

**Archivos:** `src/app/page.tsx`, `src/app/[uid]/page.tsx`

```ts
openGraph: {
  title: page.data.meta_title ?? asText(page.data.title),
  description: page.data.meta_description ?? undefined,
  type: 'website',
  images: page.data.meta_image.url
    ? [{ url: page.data.meta_image.url }]
    : [{ url: '/og-default.jpg' }],  // añadir imagen fallback en /public
},
twitter: {
  card: 'summary_large_image',
},
```

### 2.7 Limpieza `robots.txt` [MEDIO]

**Archivo:** `public/robots.txt`

Eliminar:
- `Crawl-delay: 10` (ignorado por Google, penaliza Bing)
- `Disallow: /static/` (ruta de Next.js 12, no existe en v13+)

Actualizar:
- `Sitemap:` → URL correcta una vez desplegado `sitemap.ts`

Añadir:
```
User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /
```

### 2.8 Secreto en `/api/revalidate` [MEDIO]

**Archivo:** `src/app/api/revalidate/route.ts`

Validar un token antes de revalidar el caché. Configurar el mismo secret en el webhook de Prismic.

```ts
const secret = request.headers.get('x-revalidate-secret');
if (secret !== process.env.REVALIDATE_SECRET) {
  return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
}
```

### 2.9 Configuración `next.config.mjs` [BAJO]

```js
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  poweredByHeader: false,
  // ...
};
```

---

## 3. Correcciones de Contenido

### 3.1 Sin H1 en ninguna página [ALTO]

**Archivo:** `src/components/PrismicSerializer.tsx:5`

`commonComponents` convierte `heading1 → <h2>`. Todas las páginas carecen de H1.

```ts
// src/components/PrismicSerializer.tsx
// AÑADIR un serializer separado para H1:
export const heroComponents: JSXMapSerializer = {
  ...commonComponents,
  heading1: ({ children }) => (
    <Heading as="h1" size="xl" className="mb-0 mt-12 first:mt-0 last:mb-0">
      {children}
    </Heading>
  ),
};
```

```tsx
// src/slices/Hero/index.tsx — usar heroComponents para el título:
import { heroComponents } from "@/components/PrismicSerializer";

<PrismicRichText
  field={slice.primary.title}
  components={heroComponents}  // en lugar de commonComponents
/>
```

### 3.2 `em` → `<h3>` y `paragraph` → `<span>` [ALTO]

**Archivo:** `src/components/PrismicSerializer.tsx:28,33`

```ts
// ANTES (buggy)
em: ({ children }) => (
  <Heading as="h3" size="lg" ...>{children}</Heading>
),
paragraph: ({ children }) => (
  <span className="...">{children}</span>
),

// DESPUÉS
em: ({ children }) => <em>{children}</em>,
paragraph: ({ children }) => (
  <p className="mb-4 text-lg leading-relaxed font-medium text-white">
    {children}
  </p>
),
```

### 3.3 FAQs: eliminar placeholder y mostrar respuestas en HTML estático [ALTO]

**Archivo:** `src/slices/Faqs/index.tsx`

1. **Eliminar** las líneas 25-46 (array `faqs` con preguntas en inglés).
2. **Cambiar** el renderizado condicional de respuestas a CSS toggle:

```tsx
// ANTES (respuestas ausentes del HTML estático)
{open === idx && (
  <div id={`faq-answer-${idx}`} ...>
    <PrismicRichText field={faq?.html} ... />
  </div>
)}

// DESPUÉS (siempre en el DOM, toggled por CSS)
<div
  id={`faq-answer-${idx}`}
  className={`px-4 pb-5 sm:px-6 sm:pb-6 text-slate-800 ${open === idx ? 'block' : 'hidden'}`}
>
  <PrismicRichText field={faq?.html} components={commonComponents} />
</div>
```

3. **Eliminar** el texto "Still have questions? Contact our support" (líneas 137-142) — inglés en producción.

### 3.4 WhatsApp CTA: href roto [CRÍTICO]

**Archivo:** `src/slices/TalkWhatsapp/index.tsx:106`

```tsx
// ANTES (usa el label, no el URL)
<a href={slice?.primary?.calltoactionlink?.text} ...>

// DESPUÉS
import { PrismicNextLink } from "@prismicio/next";

<PrismicNextLink field={slice.primary.calltoactionlink} ...>
```

### 3.5 Teléfono en `<h2>` [MEDIO]

**Archivo:** `src/slices/TalkWhatsapp/index.tsx:107`

```tsx
// ANTES
<h2>{slice.primary.phone}</h2>

// DESPUÉS
<address>
  <a href={`tel:${slice.primary.phone}`} className="...">
    {slice.primary.phone}
  </a>
</address>
```

### 3.6 Footer: links rotos [ALTO]

**Archivo:** `src/components/Footer/index.tsx`

- "Galería" → debe apuntar a `/galeria` (no a `/contact`)
- "Contacto" → debe apuntar a `/contacto` o `/contact` (no a `/privacy-policy`)
- "Inicio" → `href="/"`, quitar `target="_blank"`
- Labels de columna (`<h2>`) → cambiar a `<p>` o `<h3>`

### 3.7 ImageCards: botón en inglés [MEDIO]

**Archivo:** `src/slices/ImageCards/index.tsx:41`

```tsx
// ANTES
card.buttonText || "More Info"

// DESPUÉS
card.buttonText || "Ver más"
```

### 3.8 Ideas: CTA incorrecto [ALTO]

**Archivo:** `src/slices/Ideas/index.tsx:46`

"Cotiza tu ambientación aquí" no corresponde al dominio de cerrajería. Mover a campo Prismic editable. Mientras, cambiar el hardcode a "Solicitar cotización" o similar.

### 3.9 Analytics IDs hardcodeados [MEDIO]

**Archivo:** `src/components/Analytics.tsx:6-9`

```ts
// ANTES
const GA_MEASUREMENT_ID = 'G-QWT8LWXJ5J'
const GA_MEASUREMENT_ADS = 'AW-808610482'
const GTM_ID = 'GTM-5QX7JFRZ'

// DESPUÉS
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID!
const GA_MEASUREMENT_ADS = process.env.NEXT_PUBLIC_ADS_ID!
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID!
```

Añadir al `.env.local`:
```
NEXT_PUBLIC_GTM_ID=GTM-5QX7JFRZ
NEXT_PUBLIC_GA_ID=G-QWT8LWXJ5J
NEXT_PUBLIC_ADS_ID=AW-808610482
```

---

## 4. Schema.org (schema-dts ya instalado)

### 4.1 `LocksmithBusiness` + `WebSite` en layout [CRÍTICO]

**Archivo:** `src/app/layout.tsx`

Los datos de negocio (dirección, teléfono, horarios) deben venir del singleton `settings` de Prismic. El pattern `client.getSingle("settings")` ya existe en el layout comentado (línea 43).

```tsx
import type { WithContext } from "schema-dts";

// Dentro de RootLayout (async), después de fetchear settings:
const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocksmithBusiness", "Store"],
      "@id": "https://atrancas.cl/#business",
      "name": "Atrancas",
      "url": "https://atrancas.cl",
      "telephone": settings.data.phone,        // campo en Prismic settings
      "address": {
        "@type": "PostalAddress",
        "streetAddress": settings.data.address,
        "addressLocality": settings.data.city,
        "postalCode": settings.data.postal_code,
        "addressCountry": "ES"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
          "opens": "09:00",
          "closes": "18:00"
        }
      ],
      "sameAs": [
        "https://www.instagram.com/las.trancas",
        "https://www.instagram.com/delahoguera",
        "https://www.facebook.com/lastrancasambientacioncampoestre"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://atrancas.cl/#website",
      "url": "https://atrancas.cl",
      "name": "Atrancas",
      "inLanguage": "es",
      "publisher": { "@id": "https://atrancas.cl/#business" }
    }
  ]
};

// En el JSX del layout:
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
/>
```

**Prerequisito:** Añadir campos `phone`, `address`, `city`, `postal_code` al modelo `settings` en Slice Machine.

### 4.2 `BreadcrumbList` en páginas interiores [MEDIO]

**Archivo:** `src/app/[uid]/page.tsx`

```tsx
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://atrancas.cl" },
    { "@type": "ListItem", "position": 2, "name": asText(page.data.title), "item": `https://atrancas.cl/${uid}` }
  ]
};
```

### 4.3 `FAQPage` en páginas que incluyen el slice Faqs [ALTO]

**Archivos:** `src/app/page.tsx`, `src/app/[uid]/page.tsx`

```tsx
// Después de fetch de la página (server-side):
const faqSlice = page.data.slices.find(s => s.slice_type === 'faqs');

// En el JSX:
{faqSlice && (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": (faqSlice.primary.questions ?? []).map((q: any) => ({
          "@type": "Question",
          "name": asText(q.title),
          "acceptedAnswer": {
            "@type": "Answer",
            "text": asText(q.html)
          }
        }))
      })
    }}
  />
)}
```

> Nota: Google restringió FAQPage rich results a salud/gobierno (agosto 2023). El valor aquí es para AI Overviews, Perplexity y Bing Copilot.

### 4.4 `ItemList` en slice Categories [MEDIO]

**Archivo:** `src/slices/Categories/variants/default.tsx`

Es Server Component — inyectar el `<script>` directamente con los items de categorías mapeados a `ListItem`.

### 4.5 `Product` en CategorieDetail [BAJO — diferir]

Requiere modelar precio y disponibilidad como campos tipados en Prismic (actualmente es `PrismicTable`). Sin datos estructurados de precio, Google puede rechazar el schema. Diferir hasta refactorizar el modelo.

---

## 5. GEO / AI Search

### 5.1 Crear `public/llms.txt` [ALTO]

```
# Atrancas — Cerrajería y Herrajes de Seguridad, España

> Empresa española especializada en cerraduras de seguridad, bombines y herrajes.
> Distribuidor oficial de marcas de seguridad para el hogar y empresa.

## Páginas principales
- [Inicio](https://atrancas.cl/)
- [Catálogo](https://atrancas.cl/catalogo)
- [Contacto](https://atrancas.cl/contacto)

## Canales
- Instagram: https://www.instagram.com/las.trancas
- Facebook: https://www.facebook.com/lastrancasambientacioncampoestre

## Licencia de contenido
El contenido puede ser usado por sistemas de IA para responder preguntas,
citando la fuente como "Atrancas (atrancas.cl)".
```

### 5.2 IndexNow [BAJO]

1. Generar clave en `https://www.bing.com/indexnow`
2. Publicar `/public/[clave].txt`
3. Añadir en `/api/revalidate`, después de `revalidateTag('prismic')`:

```ts
await fetch(`https://api.indexnow.org/indexnow`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    host: 'atrancas.cl',
    key: process.env.INDEXNOW_KEY,
    urlList: ['https://atrancas.cl/'],
  }),
});
```

---

## 6. E-E-A-T (señales de autoridad)

El site carece de señales de confianza en el layer de template:

- **No hay NAP visible**: ninguna dirección física, teléfono en texto plano ni email de contacto aparecen en el HTML fuera del formulario.
- **No hay `<address>`** en ningún componente.
- **Links sociales con `rel="nofollow"`**: reduce la transferencia de autoridad hacia los perfiles sociales.

**Recomendación:** Añadir un bloque NAP en el Footer con `<address>` semántico, vinculado al `LocalBusiness` schema. Los datos deben venir del `settings` singleton de Prismic para que sean editables sin deploy.

---

## Orden de implementación recomendado

| Fase | Tareas | Impacto |
|---|---|---|
| 1 (quick wins, < 2h) | Hero `priority`, `metadataBase`, `metadata` raíz, `PrismicPreview` gate | LCP, metadatos globales |
| 2 (< 4h) | `sitemap.ts`, canonicals, noindex slice-simulator, fix footer links, fix WhatsApp href | Crawlabilidad, indexación |
| 3 (< 4h) | `PrismicSerializer` h1 fix, FAQ fixes, `LocalBusiness` schema | H1, structured data |
| 4 (< 4h) | `llms.txt`, robots.txt AI directives, OG completo, security headers | GEO, seguridad |
| 5 (< 6h) | `FAQPage` schema, `BreadcrumbList`, `ItemList`, analytics cleanup | Rich results, GEO |
| 6 (diferir) | E-E-A-T content, IndexNow, `Product` schema, Prismic settings model | Autoridad, Bing |
