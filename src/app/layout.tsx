import "./globals.css";

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

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="overflow-x-hidden antialiased">
        <Analytics />
        <HeaderWrapper/>
        <div className='isolate'>{children}</div>
        <PrismicPreview repositoryName={repositoryName} />
        <Footer/>          
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
