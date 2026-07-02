import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import QuoteForm from "../QuoteForm";
import { COMUNAS, getComunaBySlug } from "./comunas-data";

export async function generateStaticParams() {
  return COMUNAS.map((c) => ({ comuna: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ comuna: string }>;
}): Promise<Metadata> {
  const { comuna: slug } = await params;
  const data = getComunaBySlug(slug);
  if (!data) return {};

  return {
    title: `Arriendo de Mesones para Eventos en ${data.nombre}, Santiago | Las Trancas`,
    description: `Arrienda mesones de secuoya, barras rústicas y bancas para eventos y matrimonios en ${data.nombre}. Mesones extensibles de 3 a 30 metros. Traslado e instalación incluidos. Desde $3.000 c/u.`,
    alternates: {
      canonical: `https://www.atrancas.cl/arriendo-de-mesones-para-eventos/${slug}`,
    },
    openGraph: {
      title: `Arriendo de Mesones para Eventos en ${data.nombre} — Las Trancas`,
      description: `Mesones de secuoya, bancas y barras rústicas campestres para matrimonios y eventos en ${data.nombre}, ${data.zona} de Santiago.`,
      url: `https://www.atrancas.cl/arriendo-de-mesones-para-eventos/${slug}`,
      siteName: "Las Trancas — Arriendo de Ambientación Campestre",
      locale: "es_CL",
      images: [
        {
          url: "https://images.prismic.io/atrancasv2/aHVAHUMqNJQqH3uR_meson-01.png?auto=format,compress&w=1200",
          width: 1200,
          height: 630,
          alt: `Arriendo mesones de secuoya para eventos en ${data.nombre}, Santiago`,
        },
      ],
      type: "website",
    },
  };
}

export default async function ComunaPage({
  params,
}: {
  params: Promise<{ comuna: string }>;
}) {
  const { comuna: slug } = await params;
  const data = getComunaBySlug(slug);
  if (!data) notFound();

  const { nombre, zona, descripcion, referencias } = data;

  const schemas = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "Store"],
        "@id": "https://www.atrancas.cl/#localbusiness",
        name: "Las Trancas — Arriendo de Ambientación Campestre",
        image:
          "https://images.prismic.io/atrancasv2/aFjG03fc4bHWimUJ_arriendo-de-ambientacion-de-campo-las-trancas.jpg?auto=format,compress&w=1200&q=75",
        url: "https://www.atrancas.cl",
        telephone: "+56997305358",
        description: `Arriendo de mesones de secuoya, barras rústicas y ambientación campestre para matrimonios y eventos en ${nombre}, Santiago. Traslado e instalación incluidos.`,
        priceRange: "$$",
        currenciesAccepted: "CLP",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Santiago",
          addressRegion: "Región Metropolitana",
          addressCountry: "CL",
        },
        areaServed: [
          { "@type": "City", name: nombre },
          { "@type": "AdministrativeArea", name: "Región Metropolitana" },
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+56997305358",
          contactType: "customer service",
          areaServed: "CL",
          availableLanguage: "Spanish",
        },
        sameAs: [
          "https://wa.me/56997305358",
          "https://www.instagram.com/las.trancas",
          "https://www.instagram.com/delahoguera",
          "https://www.facebook.com/lastrancasambientacioncampoestre",
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `https://www.atrancas.cl/arriendo-de-mesones-para-eventos/${slug}#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: `¿Hacen arriendo de mesones para eventos en ${nombre}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `Sí. Las Trancas cubre ${nombre} y toda la Región Metropolitana con arriendo de mesones de secuoya, mañío y cedro para matrimonios y eventos. Coordinamos el traslado, armado y retiro de todos los productos directamente en el lugar de tu evento en ${nombre}.`,
            },
          },
          {
            "@type": "Question",
            name: `¿Cuánto cuesta el arriendo de mesones en ${nombre}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `Los precios de arriendo en ${nombre} parten desde $3.000 c/u para bancas de secuoya de 0.80 m, $6.000 c/u para bancas de 1.5 m y $30.000 c/u para mesones buffet de secuoya. Los mesones de montaje para 10 personas cuestan $35.000 y para 12 personas $40.000. El costo de traslado a ${nombre} se cotiza según el volumen del pedido.`,
            },
          },
          {
            "@type": "Question",
            name: "¿Cuántos metros de mesón buffet necesito para mi evento?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "La regla general es 1 metro lineal de mesón por cada 8 a 10 personas para un buffet de comida. Para 80 invitados, entre 8 y 10 metros lineales es suficiente. Nuestros mesones son extensibles de 3 a 30 metros para adaptarse exactamente al espacio disponible.",
            },
          },
          {
            "@type": "Question",
            name: "¿Con cuánta anticipación debo reservar?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Recomendamos reservar con al menos 2 semanas de anticipación para eventos de fin de semana, y 4 a 6 semanas para matrimonios. En temporada alta (octubre a marzo) la disponibilidad se llena rápido. Contáctanos para verificar tu fecha.",
            },
          },
          {
            "@type": "Question",
            name: "¿Puedo combinar mesones con barras rústicas y decoración campestre?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sí. Ofrecemos arriendo integral: mesones, bancas, barras rústicas con barricas, lounges, rincones campestres y artículos criollos. Puedes armar el paquete completo que se ajuste al estilo y presupuesto de tu evento.",
            },
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.atrancas.cl/" },
          {
            "@type": "ListItem",
            position: 2,
            name: "Arriendo de Mesones para Eventos",
            item: "https://www.atrancas.cl/arriendo-de-mesones-para-eventos",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: nombre,
            item: `https://www.atrancas.cl/arriendo-de-mesones-para-eventos/${slug}`,
          },
        ],
      },
    ],
  };

  const PRODUCTS = [
    { name: "Mesón Buffet de Secuoya", specs: "3–30 m · $30.000 c/u", image: "https://images.prismic.io/atrancasv2/aHVAHUMqNJQqH3uR_meson-01.png?auto=format,compress&w=600", alt: `Arriendo mesón buffet secuoya para eventos en ${nombre}` },
    { name: "Mesones de Montaje", specs: "10P $35.000 · 12P $40.000", image: "https://images.prismic.io/atrancasv2/aHVxmEMqNJQqH5dy_mesones-02.png?auto=format,compress&w=600", alt: `Arriendo mesones de montaje con bancas para eventos en ${nombre}` },
    { name: "Mesón de Mañío", specs: "3 m · $25.000 c/u", image: "https://images.prismic.io/atrancasv2/aHWMV0MqNJQqH5jp_mesones-04-A.png?auto=format,compress&w=600", alt: `Arriendo mesón de mañío para matrimonios en ${nombre}` },
    { name: "Barra Rústica en U", specs: "3 × 3.6 m · desde $120.000", image: "https://images.prismic.io/atrancasv2/aHWWg0MqNJQqH5lE_mesones-06.png?auto=format,compress&w=600", alt: `Arriendo barra rústica para eventos en ${nombre}` },
  ];

  const FAQS = schemas["@graph"][1].mainEntity as { "@type": string; name: string; acceptedAnswer: { "@type": string; text: string } }[];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />

      <main>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="bg-gray-50 px-6 py-3 text-xs text-gray-500">
          <div className="mx-auto max-w-6xl">
            <Link href="/" className="hover:text-[#c39f77]">Inicio</Link>
            {" › "}
            <Link href="/arriendo-de-mesones-para-eventos" className="hover:text-[#c39f77]">Mesones para Eventos</Link>
            {" › "}
            <span className="text-gray-900">{nombre}</span>
          </div>
        </nav>

        {/* ── HERO ────────────────────────────────────────────────────────── */}
        <section
          className="relative flex min-h-[80vh] items-center justify-center bg-[#212121] text-white"
          style={{
            backgroundImage:
              "url('https://images.prismic.io/atrancasv2/aFjIIXfc4bHWimUS_arriendo-de-ambientacion-para-matrimonios-y-eventos-empresas.jpg?auto=format,compress&w=1920&q=55')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-[#212121]/72" />
          <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center">
            <p className="mb-4 inline-block rounded-full bg-[#c39f77]/20 px-4 py-1.5 text-sm font-semibold text-[#c39f77] ring-1 ring-[#c39f77]/40">
              Zona {zona} · Santiago de Chile
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              Arriendo de Mesones para Eventos<br />
              <span className="text-[#c39f77]">en {nombre}</span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
              Mesones de secuoya, mañío y cedro para matrimonios y eventos en {nombre}. Extensibles de 3 a 30 metros. Traslado, armado y retiro incluidos.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a href="#cotizar" className="rounded-lg bg-[#c39f77] px-8 py-4 text-lg font-bold text-white transition hover:bg-[#b08a60]">
                Cotizar en {nombre} →
              </a>
              <a href="https://wa.me/56997305358" target="_blank" rel="noopener noreferrer nofollow"
                className="rounded-lg border border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition hover:bg-white/20">
                WhatsApp directo
              </a>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <span>✓ Desde $3.000 c/u</span>
              <span>✓ Cubrimos {nombre}</span>
              <span>✓ Traslado coordinado</span>
              <span>✓ +10 años de experiencia</span>
            </div>
          </div>
        </section>

        {/* ── TRUST BAR ───────────────────────────────────────────────────── */}
        <section className="border-b border-gray-100 bg-white py-8">
          <div className="mx-auto max-w-5xl px-6">
            <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
              {[
                { n: "+10", label: "años arrendando" },
                { n: "+500", label: "eventos realizados" },
                { n: "30 m", label: "mesón extensible" },
                { n: "24 h", label: "respuesta garantizada" },
              ].map(({ n, label }) => (
                <div key={label}>
                  <p className="text-3xl font-bold text-[#c39f77]">{n}</p>
                  <p className="text-sm text-gray-500">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── UNIQUE GEO CONTENT ──────────────────────────────────────────── */}
        <section className="bg-white py-20 px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
              Arriendo de Mesones para Eventos en {nombre}, Santiago
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-gray-600">{descripcion}</p>
            {referencias.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {referencias.map((r) => (
                  <span key={r} className="rounded-full bg-[#c39f77]/10 px-3 py-1 text-sm text-[#c39f77]">
                    {r}
                  </span>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ── PRODUCTS GRID ───────────────────────────────────────────────── */}
        <section className="bg-gray-50 py-20 px-6">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-4 text-center text-3xl font-bold text-gray-900 md:text-4xl">
              Productos disponibles para {nombre}
            </h2>
            <p className="mb-12 text-center text-gray-500">
              Mesones, bancas y barras rústicas · Traslado coordinado a {nombre}
            </p>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {PRODUCTS.map((p) => (
                <article key={p.name} className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition hover:shadow-md">
                  <div className="relative h-48 overflow-hidden bg-gray-100">
                    <Image src={p.image} alt={p.alt} fill className="object-cover transition duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 25vw" />
                  </div>
                  <div className="p-5">
                    <h3 className="mb-1 font-bold text-gray-900">{p.name}</h3>
                    <p className="mb-4 text-sm font-semibold text-[#c39f77]">{p.specs}</p>
                    <a href="#cotizar" className="block rounded-lg bg-gray-900 px-4 py-2 text-center text-sm font-medium text-white transition hover:bg-[#c39f77]">
                      Cotizar
                    </a>
                  </div>
                </article>
              ))}
            </div>

            {/* Price table */}
            <div className="mt-12 overflow-x-auto rounded-2xl bg-white shadow-sm ring-1 ring-gray-100">
              <h3 className="border-b px-8 py-5 text-lg font-bold text-gray-900">
                Precios de arriendo — entrega en {nombre}
              </h3>
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 text-left text-xs uppercase tracking-wide text-gray-500">
                    <th className="px-6 py-4">Producto</th>
                    <th className="px-6 py-4">Dimensiones</th>
                    <th className="px-6 py-4 text-[#c39f77]">Precio desde</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ["Mesón Buffet Secuoya", "3–30 m × 0.80 m × 80 cm", "$30.000 c/u"],
                    ["Banca Secuoya 1.5 m", "1.5 m largo", "$6.000 c/u"],
                    ["Banca Secuoya 0.80 m", "0.80 m largo", "$3.000 c/u"],
                    ["Mesón Montaje 10P", "Con bancas incluidas", "$35.000"],
                    ["Mesón de Mañío", "3 m × 0.80 m", "$25.000"],
                    ["Mesón Cedro + Barricas", "4 m + 2 barricas", "$50.000"],
                    ["Barra 01 (U, Secuoya)", "3 × 3.6 m + 6 barricas", "$120.000"],
                    ["Barra 03 (Gran capacidad)", "4 × 3 m + 8 barricas + vasijas", "$220.000"],
                  ].map(([prod, dim, price]) => (
                    <tr key={prod} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">{prod}</td>
                      <td className="px-6 py-4 text-gray-500">{dim}</td>
                      <td className="px-6 py-4 font-bold text-[#c39f77]">{price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── QUOTE FORM ──────────────────────────────────────────────────── */}
        <section id="cotizar" className="bg-white py-20 px-6">
          <div className="mx-auto max-w-2xl">
            <div className="mb-10 text-center">
              <h2 className="mb-3 text-3xl font-bold text-gray-900 md:text-4xl">
                Cotiza tu arriendo en {nombre}
              </h2>
              <p className="text-gray-500">
                Cuéntanos sobre tu evento en {nombre} y te enviamos precios en menos de 24 horas hábiles.
              </p>
            </div>
            <div className="rounded-2xl bg-gray-50 p-8 shadow-sm ring-1 ring-gray-100">
              <QuoteForm />
            </div>
            <div className="mt-6 text-center">
              <p className="mb-2 text-sm text-gray-500">¿Prefieres escribirnos directamente?</p>
              <a href="https://wa.me/56997305358" target="_blank" rel="noopener noreferrer nofollow"
                className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 font-semibold text-white transition hover:bg-[#1ebe5d]">
                WhatsApp: +56 9 9730 5358
              </a>
            </div>
          </div>
        </section>

        {/* ── FAQ ─────────────────────────────────────────────────────────── */}
        <section className="bg-gray-50 py-20 px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-center text-3xl font-bold text-gray-900 md:text-4xl">
              Preguntas frecuentes — arriendo en {nombre}
            </h2>
            <div className="space-y-3">
              {FAQS.map((item) => (
                <details key={item.name} className="group rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-gray-900">
                    {item.name}
                    <span className="ml-4 shrink-0 text-xl text-[#c39f77] transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 text-sm leading-relaxed text-gray-600">{item.acceptedAnswer.text}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ───────────────────────────────────────────────────── */}
        <section className="bg-[#c39f77] py-16 px-6 text-white">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">
              ¿Organizas un evento en {nombre}?
            </h2>
            <p className="mb-8 text-white/80">
              Las Trancas lleva los mesones directamente a tu evento. Más de 10 años creando espacios únicos en Santiago.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a href="#cotizar" className="rounded-lg bg-white px-8 py-4 font-bold text-[#c39f77] transition hover:bg-gray-100">
                Cotizar ahora
              </a>
              <a href="https://wa.me/56997305358" target="_blank" rel="noopener noreferrer nofollow"
                className="rounded-lg border border-white/50 px-8 py-4 font-semibold text-white transition hover:bg-white/10">
                WhatsApp
              </a>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6 border-t border-white/20 pt-6 text-sm text-white/70">
              <Link href="/arriendo-de-mesones-para-eventos" className="hover:text-white">← Ver todas las comunas</Link>
              <Link href="/buffet-mesones-y-barras" className="hover:text-white">Catálogo completo →</Link>
              <Link href="/galeria" className="hover:text-white">Galería →</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
