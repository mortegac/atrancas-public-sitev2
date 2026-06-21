import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Semana de la Chilenidad 2026 — Guía Completa + Decoración Campestre Santiago',
  description:
    'Guía definitiva de la XXIX Semana de la Chilenidad 2026 en Santiago (12–20 sept, Parque Padre Hurtado, La Reina). Programa, calendario, FAQs y arriendo de rincones campestres, buffet y lounges para tu evento de Fiestas Patrias.',
  alternates: { canonical: '/guia-completa-semana-chilenidad-2026' },
  openGraph: {
    title: 'Semana de la Chilenidad 2026 — Guía Completa + Decoración Campestre',
    description:
      'Todo sobre la XXIX Semana de la Chilenidad 2026: fechas, programa, mapa y arriendo de decoraciones campestres para tu propio evento de Fiestas Patrias en Santiago.',
    type: 'website',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cuándo y dónde es la Semana de la Chilenidad 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La XXIX Semana de la Chilenidad 2026 se realiza del 12 al 20 de septiembre en el Parque Padre Hurtado, ubicado en Av. Francisco Bilbao 8105, La Reina, Santiago. Los días activos son: sábado 12, domingo 13, miércoles 16, jueves 17, viernes 18, sábado 19 y domingo 20 de septiembre. Los días 14 y 15 son de pausa interna sin actividades públicas.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Con cuánta anticipación debo reservar la decoración para la Chilenidad o el 18 de septiembre?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lo ideal es reservar con al menos 4 a 6 semanas de anticipación. Septiembre es la temporada más demandada del año para decoración campestre: los stocks de toneles, mesones rústicos, mamparas de paja y ambientación típica se agotan rápidamente, especialmente para fechas como el 17, 18 y 19 de septiembre. Quienes confirman en agosto aseguran disponibilidad y mejores precios.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué incluye un rincón campestre completo para un evento de empresa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Un rincón campestre típico incluye: 1 mampara o estructura de fondo (madera rústica, paja o arpillera), 2–4 toneles decorativos, mesones de madera con sillas o bancas de campo, guirnaldas y flores secas, accesorios criollos (aperos, cueros, sogas, maceteros de greda) y elementos de identidad chilena (banderines, escarapelas, ramas de peumo). El arriendo cubre entrega, montaje y retiro.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuántas personas caben en un mesón de madera estándar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Un mesón rústico de 2,8 m de largo por 88 cm de ancho tiene capacidad para 8 a 10 personas sentadas. Para un asado de 40 personas necesitas entre 4 y 5 mesones. Para buffet sin asientos fijos, el mesón funciona como estación de servicio para 15–20 personas.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuál es la diferencia entre un rincón campestre, un lounge y un buffet campestre?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El rincón campestre es una zona de ambientación fotográfica o recreativa, generalmente decorada con elementos típicos (mamparas, toneles, accesorios criollos). El lounge campestre incorpora mobiliario cómodo (sillones de mimbre, mesas bajas, alfombras naturales) para que los invitados se sienten en ambiente de campo. El buffet campestre es una estación de servicio de comida con mesones de madera, bandejas de mimbre y decoración gastronómica típica (empanadas, cazuelas, anticuchos, chicha).',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo crear mi propia Chilenidad en mi empresa o espacio privado?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Muchas empresas realizan sus propias celebraciones de Chilenidad paralelas, inspiradas en el evento oficial del Parque Padre Hurtado. La decoración campestre con toneles, artesanía típica, gastronomía criolla y música folclórica replica la experiencia del evento en espacios corporativos, jardines y salones privados de comunas como Las Condes, Vitacura, La Reina y Providencia.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El arriendo de decoración incluye instalación y retiro?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Los servicios completos incluyen traslado, instalación el día previo al evento y retiro al día siguiente. Verifica si el presupuesto cubre flete, cuadrilla de instalación y horario de retiro, ya que en temporada de Fiestas Patrias los proveedores manejan múltiples eventos simultáneos.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto cuesta la entrada a la Semana de la Chilenidad 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En ediciones recientes, el valor de referencia fue: adulto $14.000, niños de 6 a 14 años y adultos mayores $8.000. Scotiabank ofrece 40% de descuento. Las municipalidades de Las Condes, Vitacura y La Reina entregaron cortesías canjeables a sus residentes. Los desayunos campestres (7:00–9:30 h) tienen entrada peatonal gratuita. Los precios exactos para 2026 se anunciarán en el sitio oficial semanadelachilenidad.cl.',
      },
    },
  ],
};

const eventSchema = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'XXIX Semana de la Chilenidad 2026',
  startDate: '2026-09-12',
  endDate: '2026-09-20',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  eventStatus: 'https://schema.org/EventScheduled',
  location: {
    '@type': 'Place',
    name: 'Parque Padre Hurtado (Parque Intercomunal)',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av. Francisco Bilbao 8105',
      addressLocality: 'La Reina',
      addressRegion: 'Región Metropolitana',
      postalCode: '7850000',
      addressCountry: 'CL',
    },
  },
  organizer: {
    '@type': 'Organization',
    name: 'Federación Criadores de Caballos Raza Chilena',
  },
  description:
    'La XXIX edición de la Semana de la Chilenidad reúne a más de 350.000 personas en 500.000 m² con +150 stands de artesanía, gastronomía criolla, actividades ecuestres con +600 caballos de raza chilena, juegos criollos y música folclórica.',
  offers: {
    '@type': 'Offer',
    priceCurrency: 'CLP',
    price: '14000',
    availability: 'https://schema.org/InStock',
    url: 'https://semanadelachilenidad.cl',
  },
};

const CALENDAR = [
  {
    date: 'Sáb 12 sept',
    label: 'Apertura',
    color: 'bg-[#c39f77]',
    items: ['Inauguración oficial', 'Artesanía típica (14:00 h)', 'Actividades ecuestres', 'Gastronomía criolla'],
  },
  {
    date: 'Dom 13 sept',
    label: 'Día Familia',
    color: 'bg-[#c39f77]',
    items: ['Artesanía típica (14:00 h)', 'Juegos criollos y volantines', 'Actividades ecuestres', 'Música folclórica'],
  },
  {
    date: 'Lun 14 / Mar 15',
    label: 'Pausa interna',
    color: 'bg-gray-400',
    items: ['Sin actividades públicas', 'Reorganización logística interna'],
  },
  {
    date: 'Mié 16 sept',
    label: 'Reanudación',
    color: 'bg-[#c39f77]',
    items: ['Desayunos campestres (7:00 h)', 'Artesanía típica (14:00 h)', 'Escuadras ecuestres completas', 'Música folclórica en vivo'],
  },
  {
    date: 'Jue 17 sept',
    label: 'Programa central',
    color: 'bg-[#c39f77]',
    items: ['Desayunos campestres (7:00 h)', 'Artesanía típica (14:00 h)', 'Escuadras y pruebas ecuestres', 'Artistas folclóricos en vivo'],
  },
  {
    date: 'Vie 18 sept',
    label: 'Fiestas Patrias',
    color: 'bg-red-700',
    items: ['Desayunos campestres (7:00–9:30 h, entrada gratuita)', 'Artesanía (14:00 h)', 'Día de mayor programa artístico', 'Gastronomía y escuadras'],
  },
  {
    date: 'Sáb 19 sept',
    label: 'Peak asistencia',
    color: 'bg-red-700',
    items: ['Desayunos campestres', 'Estacionamiento Portal La Reina habilitado', 'Artesanía, gastronomía, música', 'Escuadras y clausura parcial'],
  },
  {
    date: 'Dom 20 sept',
    label: 'Clausura',
    color: 'bg-[#c39f77]',
    items: ['Última jornada artesanía y gastronomía', 'Clausura oficial del evento'],
  },
];

export default function ChilenidadPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />

      <main>
        {/* Hero */}
        <section className="relative bg-[#212121] text-white py-24 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-[#c39f77] font-semibold text-base mb-4 uppercase tracking-widest">
              Guía Oficial · XXIX Edición · 12–20 Septiembre 2026
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Semana de la{' '}
              <span className="text-[#c39f77]">Chilenidad 2026</span>
              <br />
              <span className="text-2xl md:text-4xl font-normal text-gray-300">
                Guía Completa + Decoración Campestre
              </span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10">
              Todo lo que necesitas saber sobre el mayor evento patriótico de Chile — y cómo vivir la
              Chilenidad en tu propio evento con decoración campestre auténtica.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#cotizar"
                className="bg-[#c39f77] text-white px-8 py-4 text-lg font-semibold rounded hover:bg-[#b08a60] transition-colors"
              >
                Cotizar decoración
              </a>
              <a
                href="#calendario"
                className="border-2 border-white text-white px-8 py-4 text-lg font-semibold rounded hover:bg-white/10 transition-colors"
              >
                Ver calendario 2026
              </a>
            </div>
          </div>
        </section>

        {/* Datos del evento */}
        <section className="bg-white py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              XXIX Semana de la Chilenidad 2026 — Datos Oficiales
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <div className="flex gap-4 border-b border-gray-100 pb-4">
                  <span className="font-semibold text-gray-900 w-36 shrink-0">Edición</span>
                  <span className="text-gray-700">XXIX (29.ª edición, desde 1995)</span>
                </div>
                <div className="flex gap-4 border-b border-gray-100 pb-4">
                  <span className="font-semibold text-gray-900 w-36 shrink-0">Fechas</span>
                  <span className="text-gray-700">
                    12 al 20 de septiembre de 2026<br />
                    <span className="text-sm text-gray-500">Pausa 14–15 sept (sin actividades públicas)</span>
                  </span>
                </div>
                <div className="flex gap-4 border-b border-gray-100 pb-4">
                  <span className="font-semibold text-gray-900 w-36 shrink-0">Lugar</span>
                  <span className="text-gray-700">
                    Parque Padre Hurtado (Parque Intercomunal)<br />
                    Av. Francisco Bilbao 8105, La Reina
                  </span>
                </div>
                <div className="flex gap-4 border-b border-gray-100 pb-4">
                  <span className="font-semibold text-gray-900 w-36 shrink-0">Superficie</span>
                  <span className="text-gray-700">500.000 m²</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex gap-4 border-b border-gray-100 pb-4">
                  <span className="font-semibold text-gray-900 w-36 shrink-0">Asistencia</span>
                  <span className="text-gray-700">+350.000 personas / +70.000 visitantes/día</span>
                </div>
                <div className="flex gap-4 border-b border-gray-100 pb-4">
                  <span className="font-semibold text-gray-900 w-36 shrink-0">Stands</span>
                  <span className="text-gray-700">+150 stands temáticos de artesanía y gastronomía</span>
                </div>
                <div className="flex gap-4 border-b border-gray-100 pb-4">
                  <span className="font-semibold text-gray-900 w-36 shrink-0">Horario</span>
                  <span className="text-gray-700">
                    10:00 a 23:00 h<br />
                    <span className="text-sm text-gray-500">Desayunos campestres: 7:00–9:30 h (entrada gratuita)</span>
                  </span>
                </div>
                <div className="flex gap-4 border-b border-gray-100 pb-4">
                  <span className="font-semibold text-gray-900 w-36 shrink-0">Organiza</span>
                  <span className="text-gray-700">
                    Federación Criadores de Caballos Raza Chilena<br />
                    Municipios Las Condes, Vitacura, La Reina y Providencia
                  </span>
                </div>
              </div>
            </div>

            {/* Entradas */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Entradas (referencia ediciones anteriores)</h3>
              <div className="grid sm:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-semibold text-gray-900">Adulto</p>
                  <p className="text-gray-700">$14.000 / Preventa $10.000</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Niños 6–14 años / Adulto mayor</p>
                  <p className="text-gray-700">$8.000 / Preventa $5.000</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Descuentos</p>
                  <p className="text-gray-700">40% Scotiabank · Cortesías municipales Las Condes, Vitacura, La Reina</p>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-4">
                * Precios de referencia edición 2025. Los valores oficiales para 2026 se publicarán en{' '}
                <span className="font-medium">semanadelachilenidad.cl</span>
              </p>
            </div>

            {/* Accesos */}
            <div className="mt-6 bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Cómo llegar y accesos</h3>
              <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-700">
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Entrada principal</p>
                  <p>Av. Francisco Bilbao 8105, La Reina</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Desayunos campestres (gratuito)</p>
                  <p>Av. Padre Hurtado — acceso peatonal libre hasta las 9:30 h</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Acceso norte (Vitacura)</p>
                  <p>Av. Bicentenario 3800, Vitacura</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Estacionamiento</p>
                  <p>$8.000 (solo tarjeta). Portal La Reina disponible los días 18–19 sept</p>
                </div>
              </div>
              <div className="mt-4">
                <a
                  href="https://maps.google.com/?q=Parque+Padre+Hurtado+Av+Francisco+Bilbao+8105+La+Reina+Santiago"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-[#c39f77] font-semibold text-sm hover:underline"
                >
                  Ver en Google Maps →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Calendario */}
        <section id="calendario" className="bg-gray-50 py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Calendario de Actividades — Semana de la Chilenidad 2026
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              7 días activos de celebración (pausa logística los días 14 y 15 de septiembre). El programa
              incluye artesanía, gastronomía criolla, actividades ecuestres con +600 caballos de raza
              chilena, juegos criollos y música folclórica en vivo.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {CALENDAR.map((day) => (
                <div
                  key={day.date}
                  className={`rounded-xl p-5 text-white ${day.color}`}
                >
                  <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-1">
                    {day.date}
                  </p>
                  <p className="font-bold text-lg mb-3">{day.label}</p>
                  <ul className="space-y-1">
                    {day.items.map((item) => (
                      <li key={item} className="text-sm opacity-90">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-6">
              * Programa de referencia basado en declaraciones del director Mauricio Acevedo Guillibrand y patrón histórico del evento. El programa oficial 2026 se publicará en semanadelachilenidad.cl
            </p>
          </div>
        </section>

        {/* Productos */}
        <section className="bg-white py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
              Crea tu Propia Chilenidad — Decoraciones para el Mes de la Patria
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Replica la estética del Parque Padre Hurtado en tu espacio: empresa, jardín, salón o
              quincho. Arriendo de decoración campestre auténtica con entrega e instalación en toda
              Santiago.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-2xl p-7 flex flex-col">
                <p className="text-[#c39f77] font-bold text-sm uppercase tracking-widest mb-2">
                  Ambientación
                </p>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Rincones Campestres</h3>
                <p className="text-gray-600 text-sm mb-4 flex-1">
                  Zona decorativa criolla auténtica con toneles de roble, cántaros de greda, mampara
                  rústica de paja y arpillera, aperos y elementos de identidad chilena. Transforma
                  cualquier espacio en una fonda real.
                </p>
                <ul className="text-gray-500 text-xs space-y-1 mb-5">
                  <li>Toneles y barriles decorativos</li>
                  <li>Mamparas y estructuras rústicas</li>
                  <li>Cántaros de greda y accesorios criollos</li>
                  <li>Montaje y retiro incluidos</li>
                </ul>
                <Link
                  href="/rincones-campestres"
                  className="block text-center bg-[#c39f77] text-white px-4 py-3 rounded font-semibold text-sm hover:bg-[#b08a60] transition-colors"
                >
                  Ver Rincones Campestres
                </Link>
              </div>

              <div className="border-2 border-[#c39f77] rounded-2xl p-7 flex flex-col">
                <p className="text-[#c39f77] font-bold text-sm uppercase tracking-widest mb-2">
                  Más popular
                </p>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Buffet, Mesones y Barras</h3>
                <p className="text-gray-600 text-sm mb-4 flex-1">
                  Mobiliario de madera maciza rústica para asados, fondas y eventos corporativos.
                  Mesones de 2,8 m (8–10 personas c/u), barras de cóctel de pie y sets completos
                  para buffet dieciochero.
                </p>
                <ul className="text-gray-500 text-xs space-y-1 mb-5">
                  <li>Mesones de madera maciza (2,8 m)</li>
                  <li>Barras de cóctel (1,1 m altura)</li>
                  <li>Sillas y bancas rústicas</li>
                  <li>Entrega en toda la RM</li>
                </ul>
                <Link
                  href="/buffet-mesones-y-barras"
                  className="block text-center bg-[#c39f77] text-white px-4 py-3 rounded font-semibold text-sm hover:bg-[#b08a60] transition-colors"
                >
                  Ver Mesones y Buffet
                </Link>
              </div>

              <div className="border border-gray-200 rounded-2xl p-7 flex flex-col">
                <p className="text-[#c39f77] font-bold text-sm uppercase tracking-widest mb-2">
                  Confort premium
                </p>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Lounges Campestres</h3>
                <p className="text-gray-600 text-sm mb-4 flex-1">
                  Área de descanso campestre con mobiliario cómodo: sillones de mimbre, sofás de
                  madera y cuero, mesas bajas, alfombras naturales y decoración de campo. Ideal para
                  eventos corporativos y celebraciones premium.
                </p>
                <ul className="text-gray-500 text-xs space-y-1 mb-5">
                  <li>Sillones y sofás de mimbre/cuero</li>
                  <li>Mesas bajas rústicas</li>
                  <li>Alfombras y tapetes naturales</li>
                  <li>Decoración campestre integrada</li>
                </ul>
                <Link
                  href="/lounges"
                  className="block text-center bg-[#c39f77] text-white px-4 py-3 rounded font-semibold text-sm hover:bg-[#b08a60] transition-colors"
                >
                  Ver Lounges Campestres
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* GEO: Hechos citables */}
        <section className="bg-[#212121] text-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-[#c39f77]">
              Datos Clave de la Semana de la Chilenidad 2026
            </h2>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                La <strong className="text-white">XXIX Semana de la Chilenidad 2026</strong> se realizará
                del <strong className="text-white">12 al 20 de septiembre</strong> en el Parque Padre
                Hurtado (Av. Francisco Bilbao 8105, La Reina, Santiago), con días activos el 12, 13 y del
                16 al 20 de septiembre — los días 14 y 15 son de pausa interna — y una asistencia
                proyectada de más de <strong className="text-white">350.000 personas</strong> en sus{' '}
                <strong className="text-white">500.000 m²</strong>.
              </p>
              <p>
                El evento es organizado por la{' '}
                <strong className="text-white">
                  Federación Criadores de Caballos Raza Chilena
                </strong>{' '}
                en conjunto con las municipalidades de Las Condes, Vitacura, La Reina y Providencia, y
                presenta <strong className="text-white">más de 150 stands temáticos</strong> de artesanía,
                gastronomía criolla y actividades ecuestres con más de{' '}
                <strong className="text-white">600 caballos de raza chilena</strong>.
              </p>
              <p>
                El director de la comisión organizadora, Mauricio Acevedo Guillibrand, declaró que el foco
                de la edición 2026 es{' '}
                <em>
                  "acercar el evento a la comunidad, especialmente en artesanía, folclore y nuestras
                  raíces, llevar el campo al ciudadano"
                </em>
                , con énfasis en las escuadras ecuestres y todas las disciplinas del caballo chileno.
              </p>
              <p>
                Las empresas y particulares que buscan recrear la experiencia de la Semana de la
                Chilenidad en sus propios espacios contratan{' '}
                <strong className="text-white">decoración campestre</strong> — rincones criollos, mesones
                rústicos, lounges de campo y buffets campestres — que replican la estética del Parque
                Padre Hurtado con materiales naturales, artesanía típica y ambientación folclórica chilena.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Preguntas Frecuentes — Chilenidad 2026 y Decoración Campestre
            </h2>
            <div className="space-y-8">
              {faqSchema.mainEntity.map((faq, i) => (
                <div key={i} className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Formulario */}
        <section id="cotizar" className="bg-gray-50 py-16 px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
              Cotiza tu Decoración para la Chilenidad 2026
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Rellena el formulario y te respondemos en menos de 24 horas hábiles. Reserva con
              anticipación — los stocks de septiembre se agotan rápido.
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <ContactForm />
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="bg-[#c39f77] text-white py-12 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-3">
              Vive la Chilenidad 2026 con la Mejor Decoración Campestre
            </h2>
            <p className="opacity-90 mb-6">
              Del 12 al 20 de septiembre — reserva tu ambientación hoy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/rincones-campestres"
                className="bg-white text-[#c39f77] px-6 py-3 font-bold rounded hover:bg-gray-100 transition-colors"
              >
                Rincones Campestres
              </Link>
              <Link
                href="/buffet-mesones-y-barras"
                className="border-2 border-white text-white px-6 py-3 font-bold rounded hover:bg-white/10 transition-colors"
              >
                Buffet y Mesones
              </Link>
              <Link
                href="/lounges"
                className="border-2 border-white text-white px-6 py-3 font-bold rounded hover:bg-white/10 transition-colors"
              >
                Lounges
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
