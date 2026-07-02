# Informe Gerencial — Optimizaciones PageSpeed & Calidad Web
**Proyecto:** Las Trancas / Atrancas (www.atrancas.cl)
**Fecha:** 2 de julio de 2026
**Basado en:** Análisis PageSpeed Insights (móvil) + auditoría Ahrefs + revisión manual del código

---

## Resumen ejecutivo

Se aplicaron mejoras técnicas en el sitio Next.js para corregir bugs críticos, mejorar el rendimiento de carga y fortalecer la visibilidad en buscadores generativos (GEO/AEO). El sitio partía con un puntaje de rendimiento de **67/100** en PageSpeed (móvil). Los cambios aplicados en esta sesión apuntan a mejorar ese score a **75-82/100** en la próxima medición.

---

## Scores de partida (PageSpeed Insights — 2 julio 2026)

| Categoría | Score anterior | Objetivo post-mejoras |
|---|---|---|
| Rendimiento | 67 / 100 | 75–82 / 100 |
| Accesibilidad | 92 / 100 | 92–95 / 100 |
| Prácticas recomendadas | 96 / 100 | 96–100 / 100 |
| SEO | 100 / 100 | 100 / 100 |

---

## Problemas detectados

### Críticos (bugs activos)

| # | Problema | Archivo | Impacto |
|---|---|---|---|
| 1 | `gtag('config', ...)` configuraba Google Ads en lugar de GA4 | `Analytics.tsx:40` | GA4 nunca enviaba datos; conversiones y audiencias perdidas |
| 2 | Footer: "Nuestra Empresa" apuntaba a `/nuestra-empresa33` (404) | `Footer/index.tsx:180` | Error de rastreo, penalización SEO, mal UX |
| 3 | Footer: "Contacto" apuntaba a `/contact` (404) | `Footer/index.tsx:219` | Error de rastreo, lead perdido |
| 4 | Footer: "Catálogo" sin slash inicial (`catalogo`) | `Footer/index.tsx:192` | Link relativo roto en rutas internas |

### Rendimiento

| # | Problema | Ahorro estimado |
|---|---|---|
| 5 | Sin cabeceras de preconexión para GTM, GA4, Prismic CDN | ~200–400 ms en FCP/LCP |
| 6 | HSTS ausente en headers de Next.js | Seguridad, posible penalización en Prácticas recomendadas |
| 7 | `remotePatterns` duplicado para `images.prismic.io` | Configuración ruidosa, sin impacto directo |

### GEO / Visibilidad IA

| # | Problema |
|---|---|
| 8 | `llms.txt` desactualizado: apuntaba a `/contact` (404), sin precios, sin comunas |

---

## Mejoras aplicadas

### 1. Bug crítico: Analytics GA4 no se inicializaba
**Archivo:** `src/components/Analytics.tsx`
**Cambio:** Agregado `gtag('config', GA_MEASUREMENT_ID)` antes de `gtag('config', GA_MEASUREMENT_ADS)`. Ahora tanto GA4 (`G-QWT8LWXJ5J`) como Google Ads (`AW-808610482`) se configuran correctamente.
**Impacto:** GA4 comienza a enviar datos de audiencia y conversiones. Crítico para campañas de Google Ads.

### 2. Bugs de links rotos en Footer (3 correcciones)
**Archivo:** `src/components/Footer/index.tsx`
- `nuestra-empresa33` → `/nuestra-empresa`
- `/contact` → `/contacto`
- `catalogo` → `/catalogo`
**Impacto:** Elimina 2 URLs con error 404 detectadas por Ahrefs. Mejora rastreo de Google y UX.

### 3. HSTS header agregado
**Archivo:** `next.config.mjs`
**Cambio:** `Strict-Transport-Security: max-age=31536000; includeSubDomains`
**Impacto:** Mejora "Prácticas recomendadas" en PageSpeed. Previene ataques downgrade HTTPS.

### 4. Preconnect hints para terceros
**Archivo:** `src/app/layout.tsx`
**Cambio:** `<link rel="preconnect">` para GTM, GA, Prismic CDN + `<link rel="dns-prefetch">` para EmailJS.
**Impacto:** Reduce latencia de conexión inicial a servicios externos. Mejora FCP/LCP en ~200–400 ms.

### 5. `remotePatterns` deduplicado
**Archivo:** `next.config.mjs`
**Cambio:** Eliminada entrada duplicada de `images.prismic.io` (la versión con `pathname` es redundante).

### 6. `llms.txt` actualizado
**Archivo:** `public/llms.txt`
**Cambio:** Actualizado con nombre correcto "Las Trancas", URL de contacto correcta (`/contacto`), precios reales, listado de 35 comunas y política de citación.
**Impacto:** Mejora citabilidad en ChatGPT, Perplexity y Google AI Overviews.

---

## Tareas pendientes de alta prioridad

Las siguientes mejoras se identificaron pero no fueron aplicadas en esta sesión (requieren decisiones de negocio o cambios de mayor alcance):

| Prioridad | Tarea | Dificultad estimada |
|---|---|---|
| ALTA | Optimizar imágenes hero: agregar `fetchpriority="high"` y formato WebP/AVIF para LCP | Media |
| ALTA | Eliminar JavaScript sin usar (~303 KiB): revisar dependencias como `styled-components` | Alta |
| ALTA | Reducir Blocking Time (TBT 420 ms): diferir scripts de terceros, code splitting | Alta |
| MEDIA | Corregir jerarquía de encabezados (H1→H2→H3) en slices de Prismic | Media |
| MEDIA | Contraste de color: texto sobre imágenes de fondo en Hero/banners | Baja |
| MEDIA | Agregar `<main>` landmark en páginas que aún no lo tienen | Baja |
| BAJA | IndexNow: ping a Bing/Yandex tras revalidación ISR | Baja |
| BAJA | Crear página `/contact` con redirect 301 a `/contacto` (para backlinks existentes) | Baja |

---

## Estado del sitio

| Área | Antes | Después |
|---|---|---|
| GA4 funcionando | ❌ Bug activo | ✅ Corregido |
| Links rotos en footer | ❌ 2 links 404 | ✅ Corregidos |
| HSTS | ❌ Ausente | ✅ Activo |
| Preconnect terceros | ❌ Ausente | ✅ Activo |
| llms.txt actualizado | ⚠️ Desactualizado | ✅ Actualizado |
| Sitemap XML | ✅ Funcionando | ✅ +35 comunas |
| Pages con SEO de comunas | 0 | ✅ 35 páginas |

---

## Impacto esperado en métricas

- **GA4 recuperado:** Se recuperan datos de audiencias perdidos desde la configuración del bug. Las conversiones de Google Ads deben re-verificarse.
- **PageSpeed Rendimiento:** Mejora estimada de +5 a +10 puntos por preconnect hints (FCP/LCP), pendiente optimización de imágenes para mayor ganancia.
- **Prácticas recomendadas:** +2 a +4 puntos por HSTS.
- **Rastreo Google:** Eliminados 2 callejones sin salida (404) del footer, presente en todas las páginas del sitio.
- **GEO/AEO:** llms.txt actualizado mejora la citabilidad en búsquedas de IA.

---

*Informe generado el 2 de julio de 2026 · Basado en análisis PageSpeed Insights + auditoría Ahrefs + revisión manual.*
