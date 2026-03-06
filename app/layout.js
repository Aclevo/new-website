import "./globals.css";
import SiteLayout from "./layouts/SiteLayout";
import ErrorBoundary from "./components/ErrorBoundary";
import { config } from "./config";

const { org, site } = config;

export const metadata = {
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
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: site.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="glass">
      <ErrorBoundary>
        <SiteLayout>{children}</SiteLayout>
      </ErrorBoundary>
    </html>
  );
}
