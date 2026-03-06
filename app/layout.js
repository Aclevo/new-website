import "./globals.css";
import ErrorBoundary from "./components/ErrorBoundary";
import JsonLd from "./components/JsonLd";
import SiteLayout from "./layouts/SiteLayout";
import { config } from "./config";

const { org, site } = config;

export const metadata = {
  metadataBase: new URL(org.websiteUrl),
  title: {
    default: site.title,
    template: `%s | ${site.title}`,
  },
  description: site.description,
  keywords: [
    "open source",
    "software",
    "GitHub",
    "LBNets",
    "Celestial",
    "Linux",
  ],
  authors: [{ name: site.title }],
  creator: site.title,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: org.websiteUrl,
    siteName: site.title,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: site.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/twitter-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: org.websiteUrl,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="glass">
      <head>
        <JsonLd />
      </head>
      <ErrorBoundary>
        <SiteLayout>{children}</SiteLayout>
      </ErrorBoundary>
    </html>
  );
}
