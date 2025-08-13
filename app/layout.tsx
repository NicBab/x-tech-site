import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";
import { Navbar, Footer, PhoneNumber } from "@/components/index";
import { Roboto } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import styles from "@/style";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  metadataBase: new URL('https://xtechnology-usa.com'),
  title: {
    default: "X Technology-USA | Industrial Automation & Control Systems",
    template: "%s | X Technology-USA"
  },
  description: "Leading industrial automation consulting company specializing in SCADA systems, control system design, and automation solutions for oil & gas, utilities, and manufacturing industries.",
  keywords: ["industrial automation", "SCADA systems", "control systems", "oil and gas automation", "utilities automation", "manufacturing automation", "Louisiana automation company"],
  authors: [{ name: "X Technology-USA" }],
  creator: "X Technology-USA",
  publisher: "X Technology-USA",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://xtechnology-usa.com",
    siteName: "X Technology-USA",
    title: "X Technology-USA | Industrial Automation & Control Systems",
    description: "Leading industrial automation consulting company specializing in SCADA systems, control system design, and automation solutions.",
    images: [
      {
        url: "/X_grey_logo.png",
        width: 800,
        height: 800,
        alt: "X Technology-USA Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "X Technology-USA | Industrial Automation & Control Systems",
    description: "Leading industrial automation consulting company specializing in SCADA systems, control system design, and automation solutions.",
    images: ["/X_grey_logo.png"],
  },
  icons: {
    icon: [{ url: "/X_icon.png", sizes: "any" }],
    apple: [{ url: "/X_icon.png" }],
  },
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-Roboto",
  display: "swap",
  preload: true,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        <Toaster position="top-center" reverseOrder={false} />

        <div className="bg-black w-full">
          <PhoneNumber />
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth} z-[10]`}>
              <Navbar />
            </div>
          </div>
        </div>

        <main className="relative overflow-hidden bg-white">
          {children}
        </main>

        <div className={`${styles.paddingX} ${styles.flexCenter} bg-black`}>
          <div className={`${styles.boxWidth}`}>
            <Footer />
          </div>
        </div>

        <SpeedInsights />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "X Technology-USA",
              "description": "Leading industrial automation consulting company specializing in SCADA systems, control system design, and automation solutions.",
              "url": "https://xtechnology-usa.com",
              "logo": "https://xtechnology-usa.com/X_grey_logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-337-326-5570",
                "contactType": "customer service"
              },
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "Louisiana",
                "addressCountry": "US"
              },
              "sameAs": [
                "https://www.linkedin.com/company/xtechnology-and-consulting-llc/"
              ],
              "serviceArea": {
                "@type": "Place",
                "name": "Worldwide"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Industrial Automation Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "SCADA Systems"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Control System Design"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Automation Solutions"
                    }
                  }
                ]
              }
            })
          }}
        />
      </body>
    </html>
  );
}
