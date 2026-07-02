import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import QuoteForm from "./QuoteForm";

export const metadata: Metadata = {
  title: "Arriendo de Mesones para Eventos en Santiago, Chile | Las Trancas",
  description:
    "Arriendo de mesones de secuoya, mañío y cedro para matrimonios y eventos en Santiago. Mesones extensibles de 3 a 30 metros, bancas y barras rústicas. Precios desde $3.000 c/u. Cotiza gratis.",
  alternates: { canonical: "https://www.atrancas.cl/arriendo-de-mesones-para-eventos" },
  openGraph: {
    title: "Arriendo de Mesones para Eventos en Santiago — Las Trancas",
    description:
      "Mesones de secuoya extensibles de 3 a 30 metros, barras rústicas con barricas y bancas campestres para matrimonios y eventos en Chile.",
    url: "https://www.atrancas.cl/arriendo-de-mesones-para-eventos",
    siteName: "Las Trancas — Arriendo de Ambientación Campestre",
    locale: "es_CL",
    images: [
      {
        url: "https://images.prismic.io/atrancasv2/aHVAHUMqNJQqH3uR_meson-01.png?auto=format,compress&w=1200",
        width: 1200,
        height: 630,
        alt: "Arriendo de mesones de secuoya para eventos y matrimonios en Santiago",
      },
    ],
    type: "website",
  },
};

// ── JSON-LD ────────────────────────────────────────────────────────────────────

const schemas = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "Store"],
      "@id": "https://www.atrancas.cl/#localbusiness",
      name: "Las Trancas — Arriendo de Ambientación Campestre",
      image: "https://images.prismic.io/atrancasv2/aFjG03fc4bHWimUJ_arriendo-de-ambientacion-de-campo-las-trancas.jpg?auto=format,compress&w=1200&q=75",
      url: "https://www.atrancas.cl",
      telephone: "+56997305358",
      description:
        "Arriendo de mesones de secuoya, barras rústicas, bancas y ambientación campestre para matrimonios y eventos en Santiago y Chile. Más de 10 años de experiencia.",
      priceRange: "$$",
      currenciesAccepted: "CLP",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Santiago",
        addressRegion: "Región Metropolitana",
        addressCountry: "CL",
      },
      areaServed: [
        { "@type": "City", name: "Santiago" },
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
      "@id": "https://www.atrancas.cl/arriendo-de-mesones-para-eventos#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Qué tipos de mesones puedo arrendar para mi evento?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "En Las Trancas arrendamos mesones de secuoya extensibles (3 a 30 metros), mesones de mañío (3 m), mesones de cedro con barricas, mesones de montaje para 10 y 12 personas con bancas incluidas, y barras rústicas en forma de U para estaciones de bebidas. Todos en madera nativa con estilo campestre.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuánto cuesta arrendar mesones para eventos en Santiago?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Los precios de arriendo parten desde $3.000 c/u para bancas de 0.80 m, $6.000 c/u para bancas de 1.5 m y $30.000 c/u para mesones de secuoya. Los mesones de montaje con bancas para 10 personas cuestan $35.000 y para 12 personas $40.000. Las barras rústicas van desde $120.000 a $220.000 según el modelo.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuántos metros de mesón buffet necesito para mi evento?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Como regla general, para un banquete buffet necesitas aproximadamente 1 metro lineal de mesón por cada 8 a 10 personas. Para 80 invitados, un mesón de 8 a 10 metros es suficiente. Nuestros mesones de secuoya son extensibles de 3 a 30 metros, por lo que puedes adaptar el largo exacto a tu espacio.",
          },
        },
        {
          "@type": "Question",
          name: "¿Hacen entrega e instalación de los mesones en el lugar del evento?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Coordinamos el traslado, armado y retiro de todos los productos directamente en el lugar de tu evento en Santiago y la Región Metropolitana. El costo de traslado depende de la distancia y el volumen del arriendo. Cotiza con nosotros para conocer el precio exacto.",
          },
        },
        {
          "@type": "Question",
          name: "¿Con cuánta anticipación debo reservar los mesones?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Recomendamos reservar con al menos 2 semanas de anticipación para eventos de fin de semana, y con 4 a 6 semanas para matrimonios y eventos masivos. En temporada alta (octubre a marzo) la disponibilidad es limitada. Contáctanos para verificar fecha.",
          },
        },
        {
          "@type": "Question",
          name: "¿Puedo combinar mesones con bancas, barras y decoración campestre?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Ofrecemos arriendo integral de ambientación: mesones, bancas, barras rústicas con barricas, lounges, rincones campestres y artículos criollos. Puedes armar el paquete que se ajuste al estilo y presupuesto de tu evento.",
          },
        },
        {
          "@type": "Question",
          name: "¿Los mesones son aptos para exteriores?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Nuestros mesones de secuoya, mañío y cedro están diseñados para uso en exteriores en eventos campestres y matrimonios. Son robustos y resistentes. Para eventos con lluvia recomendamos toldos o carpas, que también podemos orientarte en conseguir.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.atrancas.cl/" },
        { "@type": "ListItem", position: 2, name: "Buffet, Mesones y Barras", item: "https://www.atrancas.cl/buffet-mesones-y-barras" },
        { "@type": "ListItem", position: 3, name: "Arriendo de Mesones para Eventos", item: "https://www.atrancas.cl/arriendo-de-mesones-para-eventos" },
      ],
    },
  ],
};

// ── Data ───────────────────────────────────────────────────────────────────────

const PRODUCTS = [
  {
    name: "Mesón Buffet de Secuoya",
    tag: "Más arrendado",
    tagColor: "bg-[#c39f77]",
    desc: "Mesón extensible de secuoya nativa de 3 a 30 metros. Ideal para banquetes, bufets y presentaciones. Disponible con bancas de 1.5 m o 0.80 m.",
    specs: "3–30 m largo · 0.80 m ancho · 80 cm alto",
    material: "Secuoya nativa",
    prices: ["Mesón: $30.000 c/u", "Banca 1.5 m: $6.000 c/u", "Banca 0.80 m: $3.000 c/u"],
    image: "https://images.prismic.io/atrancasv2/aHVAHUMqNJQqH3uR_meson-01.png?auto=format,compress&w=700",
    alt: "Arriendo mesón buffet de secuoya extensible para eventos y matrimonios en Santiago",
  },
  {
    name: "Mesones de Montaje",
    tag: "10 y 12 personas",
    tagColor: "bg-gray-700",
    desc: "Mesones de secuoya con bancas incluidas para sentar entre 10 y 12 personas. Perfectos para comidas grupales en matrimonios y eventos empresariales.",
    specs: "Con bancas incluidas",
    material: "Secuoya nativa",
    prices: ["10 pers. $35.000", "x10 unid. $320.000", "12 pers. $40.000", "x10 unid. $350.000"],
    image: "https://images.prismic.io/atrancasv2/aHVxmEMqNJQqH5dy_mesones-02.png?auto=format,compress&w=700",
    alt: "Arriendo mesones de montaje de secuoya con bancas para matrimonios y eventos en Santiago",
  },
  {
    name: "Mesón de Mañío",
    tag: "Toque distintivo",
    tagColor: "bg-gray-700",
    desc: "Superficie sólida de madera de mañío con carácter único. Ideal para realzar la decoración rústica de cualquier evento campestre.",
    specs: "3 m largo · 0.80 m ancho",
    material: "Mañío nativo",
    prices: ["1 unidad: $25.000", "x10 unid.: $230.000", "x20 unid.: $400.000"],
    image: "https://images.prismic.io/atrancasv2/aHWMV0MqNJQqH5jp_mesones-04-A.png?auto=format,compress&w=700",
    alt: "Arriendo mesón de mañío para eventos y matrimonios campestres en Chile",
  },
  {
    name: "Mesón Cedro + Barricas",
    tag: "Elegancia rústica",
    tagColor: "bg-gray-700",
    desc: "Mesón de cedro de 4 metros acompañado de 2 barricas. Punto focal con estilo campestre para cualquier evento.",
    specs: "4 m largo · incluye 2 barricas",
    material: "Cedro",
    prices: ["1 unidad: $50.000"],
    image: "https://images.prismic.io/atrancasv2/aHWNqUMqNJQqH5j7_mesones-05-A.png?auto=format,compress&w=700",
    alt: "Arriendo mesón de cedro con barricas para arriendo en eventos campestres",
  },
  {
    name: "Barra Rústica en U — Secuoya",
    tag: "Estación de bebidas",
    tagColor: "bg-gray-700",
    desc: "3 mesones de secuoya de 3.6 m en forma de U, 6 barricas y arpillera. Estación de bebidas lista para ambientar.",
    specs: "3 × 3.6 m · 6 barricas",
    material: "Secuoya + barricas",
    prices: ["1 unidad: $120.000"],
    image: "https://images.prismic.io/atrancasv2/aHWWg0MqNJQqH5lE_mesones-06.png?auto=format,compress&w=700",
    alt: "Arriendo barra rústica de secuoya en forma de U con barricas para eventos",
  },
  {
    name: "Barra Gran Capacidad — Cedro",
    tag: "Eventos masivos",
    tagColor: "bg-gray-700",
    desc: "4 mesones de cedro de 3 m en U, 8 barricas, arpillera, media barrica, 2 chuicos y 3 vasijas mapuche.",
    specs: "4 × 3 m · 8 barricas · vasijas mapuche",
    material: "Cedro + artículos criollos",
    prices: ["1 unidad: $220.000"],
    image: "https://images.prismic.io/atrancasv2/aFjG03fc4bHWimUJ_arriendo-de-ambientacion-de-campo-las-trancas.jpg?auto=format,compress&w=700&q=75",
    alt: "Arriendo barra de cedro con vasijas mapuche para eventos masivos y matrimonios",
  },
];

const FAQS = schemas["@graph"][1].mainEntity as { "@type": string; name: string; acceptedAnswer: { "@type": string; text: string } }[];

// ── Page ───────────────────────────────────────────────────────────────────────

export default function ArriendoMesonesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />

      <main>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="bg-gray-50 px-6 py-3 text-xs text-gray-500">
          <div className="mx-auto max-w-6xl">
            <Link href="/" className="hover:text-[#c39f77]">Inicio</Link>
            {" › "}
            <Link href="/buffet-mesones-y-barras" className="hover:text-[#c39f77]">Buffet, Mesones y Barras</Link>
            {" › "}
            <span className="text-gray-900">Arriendo de Mesones para Eventos</span>
          </div>
        </nav>

        {/* ── HERO ──────────────────────────────────────────────────────────── */}
        <section
          className="relative flex min-h-[85vh] items-center justify-center bg-[#212121] text-white"
          style={{
            backgroundImage: "url('https://images.prismic.io/atrancasv2/aFjFNXfc4bHWimT__ambientacion-y-decoracion-campestre.jpg?auto=format,compress&w=1920&q=60')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-[#212121]/72" />
          <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center">
            <p className="mb-4 inline-block rounded-full bg-[#c39f77]/20 px-4 py-1.5 text-sm font-semibold text-[#c39f77] ring-1 ring-[#c39f77]/40">
              Arriendo de ambientación campestre · Santiago, Chile
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Arriendo de Mesones<br />
              <span className="text-[#c39f77]">para Eventos y Matrimonios</span><br />
              <span className="text-3xl font-normal text-gray-300 md:text-4xl">en Santiago, Chile</span>
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-300 md:text-xl">
              Mesones de secuoya, mañío y cedro para matrimonios, cumpleaños y eventos corporativos. Extensibles de 3 a 30 metros. Traslado, armado y retiro incluidos.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a href="#cotizar" className="rounded-lg bg-[#c39f77] px-8 py-4 text-lg font-bold text-white transition hover:bg-[#b08a60]">
                Cotizar gratis →
              </a>
              <a href="https://wa.me/56997305358" target="_blank" rel="noopener noreferrer nofollow"
                className="rounded-lg border border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition hover:bg-white/20">
                WhatsApp directo
              </a>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <span>✓ Desde $3.000 c/u</span>
              <span>✓ Madera nativa 100%</span>
              <span>✓ Traslado coordinado</span>
              <span>✓ +10 años de experiencia</span>
            </div>
          </div>
        </section>

        {/* ── TRUST BAR ─────────────────────────────────────────────────────── */}
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

        {/* ── INTRO CITABILITY BLOCK ────────────────────────────────────────── */}
        <section className="bg-white py-20 px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
              ¿Qué es el arriendo de mesones para eventos?
            </h2>
            {/* GEO: 155-word direct-answer passage for AI citability */}
            <p className="mb-6 text-lg leading-relaxed text-gray-600">
              El arriendo de mesones para eventos es el servicio de préstamo temporal de mesas rústicas de madera nativa (secuoya, mañío o cedro) para uso en matrimonios, cumpleaños, eventos corporativos y celebraciones en Chile. Las empresas especializadas como Las Trancas entregan, instalan y retiran los mesones directamente en el lugar del evento, sin que el organizador deba preocuparse por la logística. Los mesones buffet extensibles — que pueden medir entre 3 y 30 metros lineales — son los más solicitados para banquetes, mientras que los mesones de montaje con bancas incluidas se usan para sentar entre 10 y 12 personas por unidad. El precio del arriendo varía según el tipo de madera, las dimensiones y el número de piezas: las bancas de secuoya cuestan desde $3.000 c/u y los mesones buffet desde $30.000 c/u en el mercado chileno.
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              En Las Trancas combinamos la practicidad de un servicio completo (traslado + armado + retiro) con el encanto de la madera nativa. Cada pieza tiene textura y carácter propio que no se replica en el mobiliario industrial, creando atmósferas únicas para celebraciones campestres, fiestas en el jardín y matrimonios en haciendas.
            </p>
          </div>
        </section>

        {/* ── PRODUCTS ──────────────────────────────────────────────────────── */}
        <section id="productos" className="bg-gray-50 py-20 px-6">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-4 text-center text-3xl font-bold text-gray-900 md:text-4xl">
              Catálogo de Mesones, Bancas y Barras para Eventos
            </h2>
            <p className="mb-12 text-center text-gray-500">
              Todos los productos incluyen traslado coordinado · Madera nativa chilena
            </p>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {PRODUCTS.map((p) => (
                <article key={p.name} className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition hover:shadow-md">
                  <div className="relative h-52 overflow-hidden bg-gray-100">
                    <Image src={p.image} alt={p.alt} fill className="object-cover transition duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                    <span className={`absolute left-3 top-3 rounded-full ${p.tagColor} px-3 py-1 text-xs font-semibold text-white`}>
                      {p.tag}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="mb-1 text-lg font-bold text-gray-900">{p.name}</h3>
                    <p className="mb-1 text-xs font-medium text-[#c39f77]">Material: {p.material}</p>
                    <p className="mb-3 text-sm text-gray-500">{p.desc}</p>
                    <p className="mb-4 text-xs text-gray-400">{p.specs}</p>
                    <ul className="mb-5 space-y-1">
                      {p.prices.map((price) => (
                        <li key={price} className="text-sm font-semibold text-gray-800">· {price}</li>
                      ))}
                    </ul>
                    <a href="#cotizar" className="block rounded-lg bg-gray-900 px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-[#c39f77]">
                      Cotizar este producto
                    </a>
                  </div>
                </article>
              ))}
            </div>

            {/* Comparison table */}
            <div className="mt-16 overflow-x-auto rounded-2xl bg-white shadow-sm ring-1 ring-gray-100">
              <h3 className="border-b px-8 py-5 text-lg font-bold text-gray-900">Tabla comparativa de precios</h3>
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 text-left text-xs uppercase tracking-wide text-gray-500">
                    <th className="px-6 py-4">Producto</th>
                    <th className="px-6 py-4">Material</th>
                    <th className="px-6 py-4">Dimensiones</th>
                    <th className="px-6 py-4 font-semibold text-[#c39f77]">Precio desde</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ["Mesón Buffet Secuoya", "Secuoya", "3–30 m × 0.80 m × 80 cm", "$30.000 c/u"],
                    ["Banca Secuoya 1.5 m", "Secuoya", "1.5 m largo", "$6.000 c/u"],
                    ["Banca Secuoya 0.80 m", "Secuoya", "0.80 m largo", "$3.000 c/u"],
                    ["Mesón Montaje 10P", "Secuoya", "Con bancas incluidas", "$35.000"],
                    ["Mesón Montaje 12P", "Secuoya", "Con bancas incluidas", "$40.000"],
                    ["Mesón de Mañío", "Mañío", "3 m × 0.80 m", "$25.000"],
                    ["Mesón Cedro + Barricas", "Cedro", "4 m + 2 barricas", "$50.000"],
                    ["Barra 01 (U, Secuoya)", "Secuoya", "3 × 3.6 m + 6 barricas", "$120.000"],
                    ["Barra 02 (U, Cedro)", "Cedro", "4 × 3.6 m + 7 barricas", "$180.000"],
                    ["Barra 03 (Gran capacidad)", "Cedro", "4 × 3 m + 8 barricas", "$220.000"],
                  ].map(([prod, mat, dim, price]) => (
                    <tr key={prod} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">{prod}</td>
                      <td className="px-6 py-4 text-gray-500">{mat}</td>
                      <td className="px-6 py-4 text-gray-500">{dim}</td>
                      <td className="px-6 py-4 font-bold text-[#c39f77]">{price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── HOW MUCH DO I NEED — AEO block ───────────────────────────────── */}
        <section className="bg-white py-20 px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
              ¿Cuántos metros de mesón necesito para mi evento?
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                {/* GEO: direct-answer passage, ~145 words */}
                <p className="mb-4 text-gray-600 leading-relaxed">
                  La regla general para calcular el metraje de mesones buffet es <strong>1 metro lineal por cada 8 a 10 personas</strong>. Para mesones de montaje con bancas, cada unidad sienta entre 10 y 12 personas según el modelo que elijas.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Por ejemplo: para un matrimonio de 100 personas que usarán el mesón solo para el buffet de comida, necesitas entre 10 y 12 metros lineales. Si además necesitas asientos individuales, complementa con mesones de montaje o bancas por separado.
                </p>
              </div>
              <div className="overflow-hidden rounded-xl bg-gray-50 ring-1 ring-gray-100">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#c39f77]/10 text-left text-xs font-semibold uppercase text-gray-600">
                      <th className="px-5 py-3">Invitados</th>
                      <th className="px-5 py-3">Mesón buffet</th>
                      <th className="px-5 py-3">Mesones montaje</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      ["30", "3–4 m", "3 unidades"],
                      ["50", "5–6 m", "5 unidades"],
                      ["80", "8–10 m", "8 unidades"],
                      ["100", "10–12 m", "10 unidades"],
                      ["150", "15–18 m", "15 unidades"],
                      ["200+", "20–24 m", "20+ unidades"],
                    ].map(([n, buf, mont]) => (
                      <tr key={n} className="hover:bg-white">
                        <td className="px-5 py-3 font-semibold text-gray-900">{n}</td>
                        <td className="px-5 py-3 text-gray-600">{buf}</td>
                        <td className="px-5 py-3 text-gray-600">{mont}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* ── USE CASES ─────────────────────────────────────────────────────── */}
        <section className="bg-[#212121] py-20 px-6 text-white">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-10 text-center text-3xl font-bold md:text-4xl">
              Eventos donde usamos nuestros mesones
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Matrimonios campestres",
                  desc: "Mesones de secuoya extensibles como mesa central de banquete o como buffet de comida. Crean la atmósfera rústica perfecta para ceremonias en haciendas y jardines.",
                  icon: "💍",
                },
                {
                  title: "Cumpleaños y fiestas",
                  desc: "Mesones de montaje con bancas para sentar a los invitados. Combinamos con barras rústicas para las estaciones de bebidas y postres.",
                  icon: "🎉",
                },
                {
                  title: "Eventos corporativos",
                  desc: "Mesones de cedro y mañío para activaciones de marca, lanzamientos de productos y eventos team building con estilo diferente.",
                  icon: "🏢",
                },
                {
                  title: "Graduaciones",
                  desc: "Combinamos mesones buffet con bancas y lounges para crear espacios de celebración adaptados al número de invitados.",
                  icon: "🎓",
                },
                {
                  title: "Asados y fiestas de jardín",
                  desc: "Nuestros mesones de madera nativa son perfectos para asados al aire libre. Resistentes y con el encanto campestre que buscas.",
                  icon: "🔥",
                },
                {
                  title: "Bautizos y primeras comuniones",
                  desc: "Mesones en formato íntimo con bancas y decoración personalizada para celebraciones familiares en ambientes acogedores.",
                  icon: "✝️",
                },
              ].map((c) => (
                <div key={c.title} className="rounded-xl bg-white/5 p-6 ring-1 ring-white/10">
                  <div className="mb-3 text-3xl">{c.icon}</div>
                  <h3 className="mb-2 font-bold text-[#c39f77]">{c.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── QUOTE FORM ────────────────────────────────────────────────────── */}
        <section id="cotizar" className="bg-white py-20 px-6">
          <div className="mx-auto max-w-2xl">
            <div className="mb-10 text-center">
              <h2 className="mb-3 text-3xl font-bold text-gray-900 md:text-4xl">
                Cotiza tu arriendo de mesones
              </h2>
              <p className="text-gray-500">
                Cuéntanos sobre tu evento y te enviamos precios en menos de 24 horas hábiles. Sin compromiso.
              </p>
            </div>
            <div className="rounded-2xl bg-gray-50 p-8 shadow-sm ring-1 ring-gray-100">
              <QuoteForm />
            </div>
            <div className="mt-6 text-center">
              <p className="mb-2 text-sm text-gray-500">¿Prefieres escribirnos directamente?</p>
              <a href="https://wa.me/56997305358" target="_blank" rel="noopener noreferrer nofollow"
                className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 font-semibold text-white transition hover:bg-[#1ebe5d]">
                <span>WhatsApp: +56 9 9730 5358</span>
              </a>
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────────────── */}
        <section aria-labelledby="faq-title" className="bg-gray-50 py-20 px-6">
          <div className="mx-auto max-w-3xl">
            <h2 id="faq-title" className="mb-10 text-center text-3xl font-bold text-gray-900 md:text-4xl">
              Preguntas frecuentes sobre arriendo de mesones para eventos
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

        {/* ── FINAL CTA ─────────────────────────────────────────────────────── */}
        <section className="bg-[#c39f77] py-20 px-6 text-white">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Crea el ambiente perfecto para tu evento
            </h2>
            <p className="mb-8 text-lg text-white/80">
              Más de 10 años creando espacios únicos con madera nativa chilena. Asegura disponibilidad para tu fecha.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a href="#cotizar" className="rounded-lg bg-white px-8 py-4 font-bold text-[#c39f77] transition hover:bg-gray-100">
                Cotizar ahora
              </a>
              <a href="https://wa.me/56997305358" target="_blank" rel="noopener noreferrer nofollow"
                className="rounded-lg border border-white/50 px-8 py-4 font-semibold text-white transition hover:bg-white/10">
                WhatsApp: +56 9 9730 5358
              </a>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-8 border-t border-white/20 pt-8 text-sm text-white/70">
              <Link href="/buffet-mesones-y-barras" className="hover:text-white">Ver catálogo completo →</Link>
              <Link href="/galeria" className="hover:text-white">Ver galería →</Link>
              <Link href="/contacto" className="hover:text-white">Contacto →</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
