import "./globals.css";

import type { Metadata } from "next";

import { Inter } from "next/font/google";
import { asText } from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import { PrismicNextLink, PrismicPreview } from "@prismicio/next";

import { createClient, repositoryName } from "@/prismicio";
import { Bounded } from "@/components/Bounded";

import HeaderWrapper from '@/components/Header/HeaderWrapper';
import Footer from '@/components/Footer';
import Analytics from '@/components/Analytics'
// import { HeaderWrapper } from '@/components/Header/HeaderWrapper';


const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.atrancas.cl'),
  title: {
    template: '%s | Atrancas',
    default: 'Atrancas — Rincones Campestres, Buffet y Herrajes en Chile',
  },
  description: 'Especialistas en rincones campestres, mesones para buffet, barras y herrajes de seguridad en Chile. Entrega e instalación en Santiago y regiones.',
  openGraph: {
    siteName: 'Atrancas',
    type: 'website',
    locale: 'es_CL',
  },
  robots: { index: true, follow: true },
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const siteSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Store", "LocalBusiness"],
        "@id": "https://www.atrancas.cl/#business",
        "name": "Atrancas",
        "description": "Especialistas en rincones campestres, mesones para buffet, barras y herrajes de seguridad en Chile.",
        "url": "https://www.atrancas.cl",
        "areaServed": { "@type": "Country", "name": "Chile" },
        "sameAs": [
          "https://www.instagram.com/las.trancas",
          "https://www.instagram.com/delahoguera",
          "https://www.facebook.com/lastrancasambientacioncampoestre"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://www.atrancas.cl/#website",
        "url": "https://www.atrancas.cl",
        "name": "Atrancas",
        "inLanguage": "es-CL",
        "publisher": { "@id": "https://www.atrancas.cl/#business" }
      }
    ]
  };

  return (
    <html lang="es" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://images.prismic.io" />
        <link rel="dns-prefetch" href="https://api.emailjs.com" />
      </head>
      <body className="overflow-x-hidden antialiased">
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
        <HeaderWrapper/>
        <div className='isolate'>{children}</div>
        {process.env.NODE_ENV !== 'production' && <PrismicPreview repositoryName={repositoryName} />}
        <Footer/>
        <a
          className="wa__float"
          href="https://wa.me/56997305358"
          target="_blank"
          rel="noopener noreferrer nofollow"
          aria-label="Contactar por WhatsApp"
        >
          <div className="wa__float_txt">¿Necesitas Ayuda? <strong>Escríbenos</strong></div>
          <div className="wa__float_icon" />
        </a>
      </body>
    </html>
  );
}

// async function Header2() {
//   const client = createClient();
//   const settings = await client.getSingle("settings");
//   const navigation = await client.getSingle("navigation");

//   return (
//     <Bounded as="header" yPadding="sm">
//       <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3 leading-none">
//         <PrismicNextLink
//           href="/"
//           className="text-xl font-semibold tracking-tight"
//         >
//           <PrismicText field={settings.data.siteTitle} />
//         </PrismicNextLink>
//         <nav>
//           <ul className="flex flex-wrap gap-6 md:gap-10">
//             {navigation.data?.links.map((item) => (
//               <li
//                 key={asText(item.label)}
//                 className="font-semibold tracking-tight text-slate-800"
//               >
//                 <PrismicNextLink field={item.link}>
//                   <PrismicText field={item.label} />
//                 </PrismicNextLink>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </div>
//     </Bounded>
//   );
// }
