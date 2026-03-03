import "./globals.css";
import SiteLayout from "./layouts/SiteLayout";

export const metadata = {
  title: {
    default: "Aclevo",
    template: "%s | Aclevo",
  },
  description:
    "Building open source software together. Home to projects like LBNets, Celestial Linux, and more.",
  keywords: [
    "open source",
    "software",
    "GitHub",
    "LBNets",
    "Celestial",
    "Linux",
  ],
  authors: [{ name: "Aclevo" }],
  creator: "Aclevo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.aclevo.com",
    siteName: "Aclevo",
    title: "Aclevo",
    description:
      "Building open source software together. Home to projects like LBNets, Celestial Linux, and more.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aclevo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aclevo",
    description:
      "Building open source software together. Home to projects like LBNets, Celestial Linux, and more.",
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
      <SiteLayout>{children}</SiteLayout>
    </html>
  );
}
