# SEO & GEO Tasks — Atrancas

Generado con análisis de 4 agentes especializados (GEO, Técnico SEO, Schema.org, Contenido).

**Scores actuales:** GEO 27/100 · Técnico 38/100 · Contenido 41/100 · Schema 0/100

---

## CRÍTICO

- [ ] **[PERF] Hero LCP sin `priority`** — `src/slices/Hero/index.tsx:41`
  Añadir `priority={true}` y `sizes="100vw"` al `PrismicNextImage` de fondo. Sin esto Next.js lazy-carga la imagen más grande de la página, penalizando el LCP directamente.

- [ ] **[SEO] Crear sitemap dinámico** — crear `src/app/sitemap.ts`
  `robots.txt` referencia `https://atrancas.cl/sitemap.xml` pero el archivo no existe. Usar `createClient().getAllByType('page')` (mismo patrón que `generateStaticParams`).

- [ ] **[SEO] `metadataBase` ausente en layout** — `src/app/layout.tsx`
  Sin `metadataBase`, las URLs de OG images y canonicals se resuelven como `http://localhost:3000` en producción. Añadir `export const metadata: Metadata` con `metadataBase: new URL('https://atrancas.cl')`.

- [ ] **[BUG] WhatsApp CTA href roto** — `src/slices/TalkWhatsapp/index.tsx:106`
  `href={slice?.primary?.calltoactionlink?.text}` usa `.text` (la etiqueta) en lugar de la URL. Cambiar a `PrismicNextLink field={slice.primary.calltoactionlink}`.

---

## ALTO

- [ ] **[SEO] H1 ausente en todas las páginas** — `src/components/PrismicSerializer.tsx:5`
  `commonComponents` mapea `heading1 → <h2>`. Ninguna página emite un `<h1>`. Crear un serializer `heroComponents` separado que mapee `heading1 → <h1>` y usarlo solo en el campo `title` del Hero.

- [ ] **[SEO] `em` mapeado a `<h3>`** — `src/components/PrismicSerializer.tsx:28`
  Cualquier texto en cursiva en Prismic genera un `<h3>` en el DOM. Restaurar `em → <em>`.

- [ ] **[SEO] `paragraph` mapeado a `<span>`** — `src/components/PrismicSerializer.tsx:33`
  Los párrafos se renderizan como `<span>` (inline). Cambiar a `<p>`. Aplica también en `src/slices/ImageContent/index.tsx`.

- [ ] **[GEO] Crear `public/llms.txt`**
  Archivo de contexto para LLMs (análogo a robots.txt). Describe la empresa, URLs principales y política de citación. Máxima prioridad para visibilidad en ChatGPT, Perplexity y Google AIO.

- [ ] **[SCHEMA] `LocalBusiness` + `WebSite` JSON-LD** — `src/app/layout.tsx`
  `schema-dts` ya está instalado pero sin uso. Añadir un `<script type="application/ld+json">` con `LocksmithBusiness` + `WebSite` en un `@graph`. Los datos (dirección, teléfono, horarios) deben venir del singleton `settings` de Prismic.

- [ ] **[SEO] Canonicals ausentes** — `src/app/page.tsx`, `src/app/[uid]/page.tsx`
  Añadir `alternates: { canonical: '/' }` (home) y `alternates: { canonical: \`/\${uid}\` }` en cada `generateMetadata`.

- [ ] **[SEO] `/slice-simulator` indexable** — `src/app/slice-simulator/page.tsx`
  Añadir `export const metadata = { robots: { index: false } }` y `Disallow: /slice-simulator` en `robots.txt`.

- [ ] **[SEO] Cabeceras de seguridad ausentes** — `next.config.mjs`
  Añadir bloque `headers()` con `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Strict-Transport-Security` para `source: '/(.*)'`.

- [ ] **[SEO] Metadatos raíz ausentes en layout** — `src/app/layout.tsx`
  Añadir `title.template`, `title.default`, `description` y `openGraph.siteName` como fallback global.

- [ ] **[PERF] `PrismicPreview` renderiza en producción** — `src/app/layout.tsx:32`
  Envolver en `{process.env.NODE_ENV !== 'production' && <PrismicPreview ... />}`.

- [ ] **[CONTENT] Eliminar FAQs placeholder en inglés** — `src/slices/Faqs/index.tsx:25-46`
  Array `faqs` con preguntas de "pricing", "subscriptions" y "support" completamente ajenas al negocio de cerrajería. Eliminar.

- [ ] **[GEO] FAQ answers ocultos del HTML estático** — `src/slices/Faqs/index.tsx:123`
  `{open === idx && <div>...}` hace que los crawlers no vean las respuestas. Cambiar a CSS toggle (`hidden`/`block`) para que el HTML siempre incluya el contenido.

- [ ] **[CONTENT] Texto CTA "ambientación" incorrecto** — `src/slices/Ideas/index.tsx:46`
  "Cotiza tu ambientación aquí" no corresponde a cerrajería. Mover a campo Prismic editable con copy apropiado.

- [ ] **[BUG] Footer: links con labels incorrectos** — `src/components/Footer/index.tsx`
  "Galería" apunta a `/contact`, "Contacto" apunta a `/privacy-policy`, "Inicio" tiene `href=""` con `target="_blank"`.

- [ ] **[SCHEMA] `FAQPage` JSON-LD** — `src/app/page.tsx` y `src/app/[uid]/page.tsx`
  Detectar el slice `faqs` en los datos de Prismic server-side e inyectar `FAQPage` schema. Valor principal: AI Overviews y Perplexity, no Google SERP clásico (restringido a salud/gobierno desde 2023).

- [ ] **[SEO] Secreto ausente en `/api/revalidate`** — `src/app/api/revalidate/route.ts`
  Cualquiera puede disparar una revalidación completa. Validar un token Bearer contra una variable de entorno.

---

## MEDIO

- [ ] **[SCHEMA] `BreadcrumbList` en páginas interiores** — `src/app/[uid]/page.tsx`
  Añadir JSON-LD de breadcrumb: Inicio → `asText(page.data.title)`.

- [ ] **[SCHEMA] `ItemList` en slice Categories** — `src/slices/Categories/variants/default.tsx`
  Es Server Component, sin fricción para añadir el script. Mapear categorías a `ListItem`.

- [ ] **[SEO] OG metadata incompleto** — `src/app/page.tsx`, `src/app/[uid]/page.tsx`
  Añadir `openGraph.description`, `openGraph.type`, `openGraph.siteName`. Añadir `twitter: { card: 'summary_large_image' }`. Proteger contra `meta_image.url` vacío con una imagen fallback estática.

- [ ] **[PERF] GA4 duplicado: GTM + snippet standalone** — `src/components/Analytics.tsx`
  Ambos activos generan eventos dobles en el dataLayer. Elegir uno: GTM (recomendado, añadir GA4 dentro de GTM) o snippet standalone. Eliminar el redundante.

- [ ] **[SEO] Alt text ausente en imágenes de categorías y productos**
  Patrón `alt={item?.image?.alt || ""}` en `Categories/variants/`, `ImageContent`, `ImageCards`, `CategorieDetail`. Las imágenes de producto no son decorativas.

- [ ] **[SEO] `rel="noopener noreferrer"` en links internos** — `src/slices/Categories/variants/default.tsx`
  Solo aplica a links externos con `target="_blank"`. Quitarlo de `PrismicNextLink` internos.

- [ ] **[CONTENT] Footer `<h2>` para etiquetas de columna** — `src/components/Footer/index.tsx`
  "Menú" y "Websites" usan `<h2>` para labels visuales. Cambiar a `<p>` o `<h3>`.

- [ ] **[CONTENT] Teléfono dentro de `<h2>`** — `src/slices/TalkWhatsapp/index.tsx:107`
  Mover a `<address>` o `<p>` con enlace `tel:` para click-to-call.

- [ ] **[CONTENT] ImageCards botón "More Info" en inglés** — `src/slices/ImageCards/index.tsx:41`
  Cambiar fallback a `"Ver más"` o requerir el campo en el modelo Prismic.

- [ ] **[ROBOTS] Limpiar `robots.txt`** — `public/robots.txt`
  Eliminar `Crawl-delay: 10` (ignorado por Google, frena Bing). Eliminar `Disallow: /static/` (ruta de Next.js 12, no existe en v13+). Actualizar URL del sitemap tras crear `sitemap.ts`.

- [ ] **[GEO] Directives explícitas para crawlers de IA** — `public/robots.txt`
  Añadir bloques `User-agent: GPTBot / Allow: /`, `ClaudeBot`, `PerplexityBot`, `OAI-SearchBot`.

- [ ] **[PERF] Auditar `styled-components` vs Tailwind** — `package.json`
  Ambos coexisten. `styled-components` añade ~16KB de runtime JS. Si no hay uso activo, eliminarlo.

- [ ] **[SEO] `next-intl` sin rutas i18n configuradas** — `next.config.mjs`
  Plugin activo pero sin routing de locales. Eliminar o configurar correctamente para evitar comportamiento indefinido en middleware.

- [ ] **[SEO] IDs de Analytics hardcodeados** — `src/components/Analytics.tsx:6-9`
  Mover a `NEXT_PUBLIC_GTM_ID`, `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_ADS_ID`. Eliminar IDs comentados (IDs antiguos aún visibles en código fuente).

---

## BAJO

- [ ] **[GEO] IndexNow** — crear `public/[key].txt` + ping desde `/api/revalidate`
  Bing y Yandex indexan cambios en minutos con IndexNow. Integrar el ping después de `revalidateTag`.

- [ ] **[SEO] `poweredByHeader: false`** — `next.config.mjs`
  Eliminar cabecera `X-Powered-By: Next.js` en respuestas HTTP.

- [ ] **[SEO] `trailingSlash: false` explícito** — `next.config.mjs`
  Declarar explícitamente para evitar cambios accidentales de comportamiento.

- [ ] **[SCHEMA] `WebPage` por página interior** — `src/app/[uid]/page.tsx`
  Añadir junto a `BreadcrumbList` con `isPartOf` referenciando `#website`.

- [ ] **[CONTENT] Alt text en imagen Hero** — `src/slices/Hero/index.tsx:43`, `src/slices/Ideas/index.tsx`
  `alt=""` es correcto solo para imágenes puramente decorativas. Si la imagen lleva contenido de marca, debe tener alt descriptivo.

- [ ] **[CONTENT] CTA Hero hardcodeado** — `src/slices/Hero/index.tsx:73`
  "Conoce nuestro catálogo" no es editable desde CMS. Mover a campo Prismic con guía de copy keyword-rich.

- [ ] **[CONTENT] FAQ footer en inglés** — `src/slices/Faqs/index.tsx:138-142`
  "Still have questions? Contact our support" — texto en inglés visible en producción. Traducir o mover a campo Prismic.

- [ ] **[CONTENT] E-E-A-T: señales de confianza**
  No hay dirección física, RUT/NIF, ni persona de contacto nombrada en ninguna parte del template. Añadir bloque NAP (Name, Address, Phone) en Footer y mapearlo a `LocalBusiness` schema.
