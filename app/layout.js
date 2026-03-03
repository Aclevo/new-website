import "./globals.css";
import SiteLayout from "./layouts/SiteLayout";

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="glass">
      <SiteLayout>{children}</SiteLayout>
    </html>
  );
}
