import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Script from "next/script";
import { Playfair_Display } from "next/font/google";

const playfairDisplay = Playfair_Display({ 
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair-display"
});

export const metadata = {
  title: "Cheeky Hen Party",
  description: "Fun, cheeky, creative hen party life drawing experiences in Hong Kong with professional male models.",
  keywords: [
    "Hen party Hong Kong",
    "Life drawing class",
    "Cheeky Hen Party",
    "Bachelorette party Hong Kong",
    "Hen night ideas",
    "Private art party"
  ],
  openGraph: {
    title: "Cheeky Hen Party",
    description: "Fun, cheeky, creative hen party life drawing experiences in Hong Kong with professional male models.",
    url: "https://www.cheekyhenparty.com",
    type: "website",
    images: [
      {
        url: "https://www.cheekyhenparty.com/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Cheeky Hen Party Life Drawing"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Cheeky Hen Party",
    description: "Fun, cheeky, creative hen party life drawing experiences in Hong Kong with professional male models.",
    images: ["https://www.cheekyhenparty.com/images/hero.jpg"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={playfairDisplay.variable}>
      <head>
        {/* SEO Meta */}
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />

        {/* Twitter Card */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />
      </head>

      <body>
        {/* FontAwesome */}
        <Script
          src="https://kit.fontawesome.com/d9c9267d74.js"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PNTWVS7M6P"
          strategy="afterInteractive"
        />
        <Script
          id="ga4-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-PNTWVS7M6P', { page_path: window.location.pathname });
            `,
          }}
        />

        {/* JSON-LD Event Structured Data */}
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              "name": "Cheeky Hen Party Life Drawing",
              "description": "Fun hen party life drawing experiences in Hong Kong with cheeky, professional male models.",
              "url": "https://www.cheekyhenparty.com/",
              "startDate": "2025-12-20T19:00",       // replace with actual future event date/time
              "endDate": "2025-12-20T21:00",         // optional
              "eventStatus": "https://schema.org/EventScheduled",
              "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
              "location": {
                "@type": "Place",
                "name": "Private indoor venue in Hong Kong"
              },
              "organizer": {
                "@type": "Organization",
                "name": "Cheeky Hen Party",
                "url": "https://www.cheekyhenparty.com/"
              },
              "image": "https://www.cheekyhenparty.com/images/hero.jpg",
              "offers": {
                "@type": "Offer",
                "url": "https://www.cheekyhenparty.com/booking",
                "price": "300",
                "priceCurrency": "HKD",
                "availability": "https://schema.org/InStock",
                "validFrom": "2025-12-11T00:00"
              }
            })
          }}
        />

        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
