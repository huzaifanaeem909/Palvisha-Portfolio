import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, JetBrains_Mono, Manrope, Unbounded } from "next/font/google";
import { JsonLd } from "@/components/layout/json-ld";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { siteConfig } from "@/data/site";
import "./globals.css";

/* Previous heading font. Uncomment this and the --font-heading line in globals.css to restore it. */
// const cormorant = Cormorant_Garamond({
//   variable: "--font-cormorant",
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
//   display: "swap",
// });

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const fullTitle = `${siteConfig.name} | ${siteConfig.title}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: fullTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.seo.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: fullTitle,
    description: siteConfig.description,
    locale: "en_US",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: fullTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: fullTitle,
    description: siteConfig.description,
    creator: siteConfig.seo.twitterHandle,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: siteConfig.seo.themeColorLight },
    { media: "(prefers-color-scheme: dark)", color: siteConfig.seo.themeColorDark },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${unbounded.variable} ${bricolage.variable} ${manrope.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen font-body antialiased">
        <ThemeProvider>
          {children}
          <JsonLd />
        </ThemeProvider>
      </body>
    </html>
  );
}
