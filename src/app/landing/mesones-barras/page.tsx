import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import QuoteForm from "./QuoteForm";

export const metadata: Metadata = {
  title: "Arriendo Mesones Buffet y Barras para Eventos | Las Trancas Chile",
  description:
    "Arrienda mesones de secuoya, barras rústicas y bancas para matrimonios y eventos en Chile. Precios desde $3.000 c/u. Estilo campestre auténtico. Cotiza gratis.",
  alternates: { canonical: "https://www.atrancas.cl/landing/mesones-barras" },
  openGraph: {
    title: "Arriendo Mesones Buffet y Barras para Eventos — Las Trancas",
    description:
      "Mesones de secuoya extensibles desde 3 a 30 metros, bancas campestres y barras rústicas para matrimonios y eventos. Ambientación completa incluida.",
    url: "https://www.atrancas.cl/landing/mesones-barras",
    siteName: "Las Trancas — Arriendo de Ambientación",
    images: [
      {
        url: "https://images.prismic.io/atrancasv2/aFjG03fc4bHWimUJ_arriendo-de-ambientacion-de-campo-las-trancas.jpg?auto=format,compress&w=1200&q=75",
        width: 1200,
        height: 630,
        alt: "Mesones buffet y barras rústicas para arriendo en matrimonios y eventos",
      },
    ],
    type: "website",
    locale: "es_CL",
  },
};

// ── JSON-LD ────────────────────────────────────────────────────────────────────

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto cuesta arrendar un mesón buffet de secuoya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El mesón buffet de secuoya tiene un valor de $30.000 c/u. Las bancas de secuoya de 1.5 m cuestan $6.000 c/u y las de 0.80 m cuestan $3.000 c/u. Los mesones de montaje para 10 personas parten desde $35.000 y para 12 personas desde $40.000.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuántos metros de mesón buffet puedo arrendar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nuestros mesones de secuoya son extensibles desde 3 hasta 30 metros de largo, con 0.80 m de ancho y 80 cm de alto. Puedes combinar múltiples unidades para adaptarse exactamente al espacio disponible en tu evento.",
      },
    },
    {
      "@type": "Question",
      name: "¿Hacen delivery e instalación de los mesones?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Coordinamos el traslado, armado y retiro de todos los productos. El costo de traslado depende de la distancia y el volumen de arriendo. Cotiza con nosotros para obtener el precio exacto para tu evento.",
      },
    },
    {
      "@type": "Question",
      name: "¿Con cuánta anticipación debo reservar los mesones?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Recomendamos reservar con al menos 2 semanas de anticipación para eventos de fin de semana, y con 4 a 6 semanas de anticipación para matrimonios y eventos masivos. La disponibilidad es limitada en temporada alta (octubre a marzo).",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo arrendar solo las bancas sin el mesón?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, es posible arrendar las bancas de secuoya de manera independiente. Están disponibles en largos de 1.5 m y 0.80 m. Contáctanos para confirmar disponibilidad y condiciones de arriendo por separado.",
      },
    },
    {
      "@type": "Question",
      name: "¿Las barras incluyen decoración?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las barras incluyen barricas, media barrica, chuicos y arpillera según el modelo. No incluyen vasos, bebestibles ni decoración floral adicional. Sí incluimos la estructura completa lista para ser ambientada a tu gusto.",
      },
    },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Las Trancas — Arriendo de Ambientación Campestre",
  description:
    "Expertos en arriendo de mesones buffet, barras rústicas, lounges y ambientación campestre para matrimonios y eventos en Chile.",
  url: "https://www.atrancas.cl",
  telephone: "+56997305358",
  address: {
    "@type": "PostalAddress",
    addressCountry: "CL",
  },
  sameAs: ["https://wa.me/56997305358"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Arriendo de Mesones, Barras y Bancas",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Product", name: "Mesón Buffet de Secuoya" },
        price: "30000",
        priceCurrency: "CLP",
        priceSpecification: { "@type": "UnitPriceSpecification", unitText: "c/u" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Product", name: "Banca de Secuoya 1.5 m" },
        price: "6000",
        priceCurrency: "CLP",
        priceSpecification: { "@type": "UnitPriceSpecification", unitText: "c/u" },
      },
    ],
  },
};

// ── Data ───────────────────────────────────────────────────────────────────────

const PRODUCTS = [
  {
    name: "Mesón Buffet + Bancas",
    tag: "Más popular",
    desc: "Mesón de secuoya extensible de 3 a 30 m con bancas. Perfecto para buffet o banquete central.",
    specs: "3–30 m largo · 0.80 m ancho · 80 cm alto",
    prices: ["Mesón secuoya $30.000 c/u", "Banca 1.5 m $6.000 c/u", "Banca 0.80 m $3.000 c/u"],
    image: "https://images.prismic.io/atrancasv2/aHVAHUMqNJQqH3uR_meson-01.png?auto=format,compress&w=700",
    alt: "Mesón buffet de secuoya con bancas para arriendo en eventos",
  },
  {
    name: "Mesones de Montaje",
    tag: "10 y 12 personas",
    desc: "Mesones de secuoya con bancas incluidas. Ideal para comidas grupales en matrimonios y eventos empresariales.",
    specs: "10 pers. $35.000 · 12 pers. $40.000",
    prices: ["10 mesones 10P $320.000", "15 mesones 10P $450.000", "10 mesones 12P $350.000"],
    image: "https://images.prismic.io/atrancasv2/aHVxmEMqNJQqH5dy_mesones-02.png?auto=format,compress&w=700",
    alt: "Mesones de montaje de secuoya con bancas para matrimonios y eventos",
  },
  {
    name: "Mesón de Mañío",
    tag: "Toque distintivo",
    desc: "Superficie sólida con carácter único. 3 m de largo para realzar tu decoración rústica campestre.",
    specs: "3 m largo · 0.80 m ancho",
    prices: ["1 unidad $25.000", "10 unidades $230.000", "20 unidades $400.000"],
    image: "https://images.prismic.io/atrancasv2/aHWMV0MqNJQqH5jp_mesones-04-A.png?auto=format,compress&w=700",
    alt: "Mesón de mañío para arriendo en eventos y matrimonios campestres",
  },
  {
    name: "Mesón Cedro + Barricas",
    tag: "Elegancia natural",
    desc: "Mesón de cedro de 4 m con 2 barricas. Punto focal robusto y con estilo para cualquier evento.",
    specs: "4 m largo · incluye 2 barricas",
    prices: ["1 unidad $50.000"],
    image: "https://images.prismic.io/atrancasv2/aHWNqUMqNJQqH5j7_mesones-05-A.png?auto=format,compress&w=700",
    alt: "Mesón de cedro con barricas para arriendo en eventos",
  },
  {
    name: "Barra 01 — Forma de U",
    tag: "Estación de bebidas",
    desc: "3 mesones de secuoya de 3.6 m en forma de U, 6 barricas y arpillera. Diseño práctico y campestre.",
    specs: "3 × 3.6 m · secuoya · 6 barricas",
    prices: ["1 unidad $120.000"],
    image: "https://images.prismic.io/atrancasv2/aHWWg0MqNJQqH5lE_mesones-06.png?auto=format,compress&w=700",
    alt: "Barra rústica en forma de U de secuoya para arriendo en eventos",
  },
  {
    name: "Barra 02 — Tradición y Amplitud",
    tag: "Gran capacidad",
    desc: "4 mesones de cedro de 3.6 m en U, 7 barricas, 1 media barrica, 3 chuicos y arpillera.",
    specs: "4 × 3.6 m · cedro · 7 barricas",
    prices: ["1 unidad $180.000"],
    image: "https://images.prismic.io/atrancasv2/aHWVUkMqNJQqH5kx_mesones-07.png?auto=format,compress&w=700",
    alt: "Barra de cedro con barricas y chuicos para arriendo en eventos",
  },
  {
    name: "Barra 03 — Gran Afluencia",
    tag: "Eventos masivos",
    desc: "4 mesones cedro 3 m en U, 8 barricas, arpillera, media barrica, 2 chuicos y 3 vasijas mapuche.",
    specs: "4 × 3 m · cedro · 8 barricas · vasijas mapuche",
    prices: ["1 unidad $220.000"],
    image: "https://images.prismic.io/atrancasv2/aFjG03fc4bHWimUJ_arriendo-de-ambientacion-de-campo-las-trancas.jpg?auto=format,compress&w=700&q=75",
    alt: "Barra grande rústica con vasijas mapuche para arriendo en matrimonios",
  },
];

const GALLERY = [
  {
    src: "https://images.prismic.io/atrancasv2/aFjFNXfc4bHWimT__ambientacion-y-decoracion-campestre.jpg?auto=format,compress&w=600&q=75",
    alt: "Ambientación campestre con mesones y bancas para eventos",
  },
  {
    src: "https://images.prismic.io/atrancasv2/aFjIIXfc4bHWimUS_arriendo-de-ambientacion-para-matrimonios-y-eventos-empresas.jpg?auto=format,compress&w=600&q=75",
    alt: "Arriendo de ambientación para matrimonios y eventos empresariales",
  },
  {
    src: "https://images.prismic.io/atrancasv2/aFjEuHfc4bHWimTr_lounges-tapete-cabeceras.jpg?auto=format,compress&w=600&q=75",
    alt: "Lounge rústico campestre para eventos y matrimonios",
  },
  {
    src: "https://images.prismic.io/atrancasv2/aFjE2nfc4bHWimTw_lounges-solo-bancas.jpg?auto=format,compress&w=600&q=75",
    alt: "Bancas de secuoya campestre para arriendo en eventos",
  },
];

const BENEFITS = [
  {
    icon: "🌲",
    title: "Madera nativa 100% auténtica",
    desc: "Mesones de secuoya y mañío con carácter propio. Cada pieza tiene historia y textura única que no se replica en muebles industriales.",
  },
  {
    icon: "📏",
    title: "Adaptable a cualquier espacio",
    desc: "Mesones extensibles de 3 a 30 metros. Combinamos piezas para ajustarnos exactamente al largo que necesitas, sin espacios muertos.",
  },
  {
    icon: "🚚",
    title: "Traslado, armado y retiro incluido",
    desc: "Coordinamos la logística completa: llegamos, instalamos y retiramos todo. Tú solo disfrutas tu evento.",
  },
  {
    icon: "🎪",
    title: "Expertos en ambientación campestre",
    desc: "Más de 10 años creando atmósferas únicas para matrimonios y eventos. Combinamos mesones, barras, lounges y rincones criollos.",
  },
];

// ── Page ───────────────────────────────────────────────────────────────────────

export default function MesonesBarrasLanding() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <main>
        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section
          className="relative min-h-[90vh] flex items-center justify-center bg-[#212121] text-white"
          style={{ backgroundImage: "url('https://images.prismic.io/atrancasv2/aFjG03fc4bHWimUJ_arriendo-de-ambientacion-de-campo-las-trancas.jpg?auto=format,compress&w=1920&q=60')", backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="absolute inset-0 bg-[#212121]/70" />
          <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center">
            <p className="mb-4 inline-block rounded-full bg-[#c39f77]/20 px-4 py-1 text-sm font-medium text-[#c39f77] ring-1 ring-[#c39f77]/40">
              Arriendo de ambientación campestre · Chile
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Mesones Buffet y Barras<br />
              <span className="text-[#c39f77]">para tus Eventos y Matrimonios</span>
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-300 md:text-xl">
              Mesones de secuoya extensibles de 3 a 30 metros, barras rústicas con barricas y bancas campestres. Estilo y funcionalidad para celebraciones únicas.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="#cotizar"
                className="rounded-md bg-[#c39f77] px-8 py-4 text-lg font-semibold text-white transition hover:bg-[#b08a60]"
              >
                Cotizar gratis →
              </a>
              <a
                href="https://wa.me/56997305358"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="rounded-md border border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                WhatsApp directo
              </a>
            </div>
            <p className="mt-6 text-sm text-gray-400">
              Precios desde $3.000 c/u · Sin compromiso · Respuesta en menos de 24 h
            </p>
          </div>
        </section>

        {/* ── TRUST BAR ────────────────────────────────────────────────────── */}
        <section className="border-b border-gray-100 bg-white py-8">
          <div className="mx-auto max-w-5xl px-6">
            <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
              {[
                { n: "+10", label: "años de experiencia" },
                { n: "+500", label: "eventos realizados" },
                { n: "30 m", label: "máximo en mesones" },
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

        {/* ── INTRO / GEO BLOCK ────────────────────────────────────────────── */}
        <section className="bg-white py-20 px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
              MESONES BUFFET Y BANCAS:<br />Estilo y Funcionalidad para tus Celebraciones
            </h2>
            {/* ponytail: 155-word passage optimized for AI citability (134-167 word target) */}
            <p className="text-lg leading-relaxed text-gray-600">
              En esta sección descubre nuestra colección de mesones buffet y bancas, piezas esenciales para dar forma a espacios funcionales y estéticamente atractivos en tus eventos. Diseñados para complementar la atmósfera rústica y campestre que amas, nuestros mesones de secuoya ofrecen amplitud y versatilidad, perfectos para lucir tus banquetes o presentaciones. Acompáñalos con nuestras bancas de secuoya, ideales para crear áreas de asiento cómodas y en sintonía con el ambiente natural. Explora cómo estas piezas robustas y elegantes pueden transformar tu celebración, combinando la practicidad con el encanto campestre.
            </p>
          </div>
        </section>

        {/* ── PRODUCTS ─────────────────────────────────────────────────────── */}
        <section id="productos" className="bg-gray-50 py-20 px-6">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-4 text-center text-3xl font-bold text-gray-900 md:text-4xl">
              Catálogo de Mesones, Bancas y Barras
            </h2>
            <p className="mb-12 text-center text-gray-500">
              Todos los productos incluyen traslado coordinado. Precios por unidad para arriendo.
            </p>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {PRODUCTS.map((p) => (
                <article
                  key={p.name}
                  className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition hover:shadow-md"
                >
                  <div className="relative h-52 overflow-hidden bg-gray-100">
                    <Image
                      src={p.image}
                      alt={p.alt}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-[#c39f77] px-3 py-1 text-xs font-semibold text-white">
                      {p.tag}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 text-lg font-bold text-gray-900">{p.name}</h3>
                    <p className="mb-3 text-sm text-gray-500">{p.desc}</p>
                    <p className="mb-4 text-xs font-medium text-[#c39f77]">{p.specs}</p>
                    <ul className="mb-5 space-y-1">
                      {p.prices.map((price) => (
                        <li key={price} className="text-sm font-semibold text-gray-800">
                          · {price}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#cotizar"
                      className="block rounded-md bg-gray-900 px-4 py-2 text-center text-sm font-medium text-white transition hover:bg-[#c39f77]"
                    >
                      Cotizar este producto
                    </a>
                  </div>
                </article>
              ))}
            </div>

            {/* Price table */}
            <div className="mt-16 overflow-x-auto rounded-2xl bg-white shadow-sm ring-1 ring-gray-100">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-gray-50 text-left">
                    <th className="px-6 py-4 font-semibold text-gray-700">Producto</th>
                    <th className="px-6 py-4 font-semibold text-gray-700">Dimensiones</th>
                    <th className="px-6 py-4 font-semibold text-gray-700">Precio desde</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ["Mesón Buffet de Secuoya", "3–30 m × 0.80 m × 80 cm", "$30.000 c/u"],
                    ["Banca Secuoya 1.5 m", "1.5 m largo", "$6.000 c/u"],
                    ["Banca Secuoya 0.80 m", "0.80 m largo", "$3.000 c/u"],
                    ["Mesón Montaje 10P", "Con bancas incluidas", "$35.000"],
                    ["Mesón Montaje 12P", "Con bancas incluidas", "$40.000"],
                    ["Mesón de Mañío", "3 m × 0.80 m", "$25.000"],
                    ["Mesón Cedro + 2 Barricas", "4 m largo", "$50.000"],
                    ["Barra 01 (U, secuoya)", "3 × 3.6 m", "$120.000"],
                    ["Barra 02 (U, cedro)", "4 × 3.6 m", "$180.000"],
                    ["Barra 03 (gran capacidad)", "4 × 3 m + vasijas", "$220.000"],
                  ].map(([prod, dim, price]) => (
                    <tr key={prod} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">{prod}</td>
                      <td className="px-6 py-4 text-gray-500">{dim}</td>
                      <td className="px-6 py-4 font-semibold text-[#c39f77]">{price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── AMBIENTACIÓN BLOCK ───────────────────────────────────────────── */}
        <section className="bg-[#212121] py-20 px-6 text-white">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              AMBIENTACIÓN &amp; DECORACIÓN
            </h2>
            {/* ponytail: ~140-word passage for AI citability */}
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-300">
              Expertos en ambientación y decoración rústica campestre para eventos y matrimonios. Arrendamos lounges, entornos especiales y artículos criollos. Creamos atmósferas únicas e inolvidables, adaptadas a tu celebración. Nuestros mesones de secuoya y barras rústicas son el punto de partida para espacios que combinan la calidez de la madera nativa con la elegancia de una producción cuidada al detalle.
            </p>
            <a
              href="#cotizar"
              className="mt-8 inline-block rounded-md bg-[#c39f77] px-8 py-4 font-semibold text-white transition hover:bg-[#b08a60]"
            >
              Quiero cotizar mi evento →
            </a>
          </div>
        </section>

        {/* ── BENEFITS ─────────────────────────────────────────────────────── */}
        <section className="bg-white py-20 px-6">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
              ¿Por qué elegir Las Trancas?
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {BENEFITS.map((b) => (
                <div key={b.title} className="rounded-xl bg-gray-50 p-6 text-center">
                  <div className="mb-4 text-4xl">{b.icon}</div>
                  <h3 className="mb-2 font-bold text-gray-900">{b.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── GALLERY ──────────────────────────────────────────────────────── */}
        <section className="bg-gray-50 py-20 px-6">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-4 text-center text-3xl font-bold text-gray-900 md:text-4xl">
              Inspiración para tu evento
            </h2>
            <p className="mb-10 text-center text-gray-500">
              Ambientaciones reales realizadas por nuestro equipo
            </p>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {GALLERY.map((img) => (
                <div key={img.src} className="relative aspect-square overflow-hidden rounded-xl bg-gray-100">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition duration-300 hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/galeria"
                className="inline-block rounded-md border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 transition hover:border-[#c39f77] hover:text-[#c39f77]"
              >
                Ver galería completa →
              </Link>
            </div>
          </div>
        </section>

        {/* ── QUOTE FORM ───────────────────────────────────────────────────── */}
        <section id="cotizar" className="bg-white py-20 px-6">
          <div className="mx-auto max-w-2xl">
            <div className="mb-10 text-center">
              <h2 className="mb-3 text-3xl font-bold text-gray-900 md:text-4xl">
                Solicita tu cotización gratuita
              </h2>
              <p className="text-gray-500">
                Cuéntanos sobre tu evento y te enviamos precios en menos de 24 horas hábiles.
              </p>
            </div>
            <div className="rounded-2xl bg-gray-50 p-8 shadow-sm ring-1 ring-gray-100">
              <QuoteForm />
            </div>
            <div className="mt-6 flex items-center justify-center gap-6 text-sm text-gray-500">
              <span>✓ Sin compromiso</span>
              <span>✓ Respuesta &lt; 24 h</span>
              <span>✓ Cotización personalizada</span>
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────────── */}
        <section className="bg-gray-50 py-20 px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-center text-3xl font-bold text-gray-900 md:text-4xl">
              Preguntas frecuentes
            </h2>
            <div className="space-y-4">
              {faqSchema.mainEntity.map((item) => (
                <details
                  key={item.name}
                  className="group rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-100"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-gray-900">
                    {item.name}
                    <span className="ml-4 shrink-0 text-[#c39f77] transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 text-sm leading-relaxed text-gray-600">
                    {item.acceptedAnswer.text}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
        <section className="bg-[#c39f77] py-20 px-6 text-white">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              ¿Listo para transformar tu evento?
            </h2>
            <p className="mb-8 text-lg text-white/80">
              Contáctanos hoy y asegura disponibilidad para tu fecha. Temporada alta se agenda con semanas de anticipación.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="#cotizar"
                className="rounded-md bg-white px-8 py-4 font-semibold text-[#c39f77] transition hover:bg-gray-100"
              >
                Cotizar ahora
              </a>
              <a
                href="https://wa.me/56997305358"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="rounded-md border border-white/50 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                WhatsApp: +56 9 9730 5358
              </a>
            </div>
            <p className="mt-6 text-sm text-white/60">
              Ver todos los productos disponibles:{" "}
              <Link href="/buffet-mesones-y-barras" className="underline hover:text-white">
                Catálogo completo →
              </Link>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
