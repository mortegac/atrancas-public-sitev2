"use client"

import Script from 'next/script'

// const GA_MEASUREMENT_ID = 'G-JT3DJS33MD' // Reemplaza por tu ID real
// const GA_MEASUREMENT_ID = 'G-QWT8LWXJ5J' // Reemplaza por tu ID real
const GA_MEASUREMENT_ID = 'G-E617K946ZS' // Reemplaza por tu ID real
const GA_MEASUREMENT_ADS = 'AW-808610482' // Reemplaza por tu ID real
const GTM_ID = 'GTM-5QX7JFRZ' // Reemplaza por tu ID real

export default function Analytics() {
  return (
    <>
      {/* Google Tag Manager */}
      <Script
        id="gtm"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `,
        }}
      />

      {/* Google Analytics (GA4) */}
      {/* src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ADS}`}
        strategy="afterInteractive"
      />
      <Script
        id="ga4"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ADS}');
            `,
          }}
          // gtag('config', '${GA_MEASUREMENT_ID}');
      />

      {/* GTM noscript fallback */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    </>
  )
} 