import type { Metadata } from "next";
import { Inter, Playfair_Display, Dancing_Script } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import ReduxProvider from "@/components/ReduxProvider";

const inter = Inter({ 
  subsets: ["latin", "latin-ext"],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: '--font-playfair',
});

const dancingScript = Dancing_Script({
  subsets: ["latin", "latin-ext"],
  variable: '--font-dancing',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bloom2go.com"),
  title: "Bloom2GO | 7/24 Akıllı Çiçek Otomatı",
  description: "Bloom2GO ile taze çiçek buketlerine günün her saatinde, merkezi konumlarda ve temassız ödeme kolaylığıyla ulaşın.",
  keywords: [
    "bloom2go",
    "çiçek otomatı",
    "akıllı çiçek otomatı",
    "7/24 çiçek",
    "taze çiçek buketi",
    "otomat konumları",
    "temassız çiçek alışverişi",
    "havalimanında çiçek",
    "avm çiçek otomatı"
  ].join(", "),
  authors: [{ name: "Bloom2GO" }],
  creator: "Bloom2GO",
  publisher: "Bloom2GO",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.bloom2go.com"
  },
  icons: {
    icon: [
      { url: '/bloom_logo.png', sizes: '16x16', type: 'image/png' },
      { url: '/bloom_logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/bloom_logo.png', sizes: '48x48', type: 'image/png' },
      { url: '/bloom_logo.png', sizes: '96x96', type: 'image/png' },
      { url: '/bloom_logo.png', sizes: '128x128', type: 'image/png' },
      { url: '/bloom_logo.png', sizes: '256x256', type: 'image/png' },
    ],
    shortcut: '/bloom_logo.png',
    apple: [
      { url: '/bloom_logo.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/bloom_logo.png' },
    ],
  },
  openGraph: {
    title: "Bloom2GO | 7/24 Akıllı Çiçek Otomatı",
    description: "Taze çiçek buketlerine günün her saatinde, hızlı ödeme ve merkezi konum avantajıyla ulaşın.",
    type: "website",
    locale: "tr_TR",
    siteName: "Bloom2GO",
    url: "https://www.bloom2go.com",
    images: [
      {
        url: '/hero_main.png',
        width: 1200,
        height: 630,
        alt: 'Bloom2GO'
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Bloom2GO",
    description: "7/24 taze çiçek buketlerine akıllı otomat deneyimiyle ulaşın.",
    images: ['/hero_main.png']
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WMRRXTMT');`,
          }}
        />
        {/* End Google Tag Manager */}
        
        {/* Google tag (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-C0CDXP5F4H"
        />
        <Script
          id="gtag-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-C0CDXP5F4H');
              gtag('config', 'AW-16813075076');
            `,
          }}
        />
        {/* End Google tag (gtag.js) */}
      </head>
      <body className={`${inter.variable} ${playfair.variable} ${dancingScript.variable} font-sans`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WMRRXTMT"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <ReduxProvider>
          <RootLayoutContent>{children}</RootLayoutContent>
        </ReduxProvider>
      </body>
    </html>
  );
}

function RootLayoutContent({ children }: { children: React.ReactNode }) {
  // Admin sayfalarında Header, Footer ve FloatingContact gösterme
  // Bu kontrol client-side'da yapılacak
  return (
    <>
      <Header />
      {children}
      <Footer />
      <FloatingContact />
    </>
  );
}
