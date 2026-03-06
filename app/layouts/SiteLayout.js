"use client";

import { Manrope } from "next/font/google";
import NavBar from "../components/navigation/NavBar";
import Footer from "../components/navigation/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  preload: true,
  display: "swap",
});

const SiteLayout = ({ children }) => {
  return (
    <body
      className={`${manrope.className} min-h-screen bg-base-100 text-base-content antialiased`}
    >
      <a
        href="#main-content"
        className="skip-link sr-only focus-not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:p-4 focus:bg-primary focus:text-primary-content focus:rounded-lg"
      >
        Skip to main content
      </a>
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-24 top-8 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute right-[-4rem] top-48 h-80 w-80 rounded-full bg-secondary/15 blur-3xl" />
        <div className="absolute bottom-[-4rem] left-1/3 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_45%)]" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 pb-12 pt-4 sm:px-6 lg:px-8">
        <NavBar />
        <main className="mt-8" id="main-content">
          {children}
        </main>
        <Footer />
      </div>
    </body>
  );
};

export default SiteLayout;
