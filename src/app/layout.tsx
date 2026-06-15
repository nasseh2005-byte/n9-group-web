import type { Metadata } from "next";
import { Cinzel, IBM_Plex_Sans_Arabic } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { ClickSound } from "@/components/ClickSound";
import { navigation, site } from "@/data/site";

const arabicFont = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-arabic"
});

const displayFont = Cinzel({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display"
});

export const metadata: Metadata = {
  title: "N9 GROUP | N9 SYSTEM",
  description: site.description
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl" className={`${arabicFont.variable} ${displayFont.variable}`}>
      <body>
        <ClickSound />
        <header className="site-header">
          <nav className="container nav" aria-label="Main navigation">
            <Link href="/" className="brand">
              {site.name}
            </Link>
            <div className="nav-links">
              {navigation.map((item) => (
                <Link href={item.href} key={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
            <Link href="/contact" className="nav-cta">
              طلب نظام
            </Link>
          </nav>
        </header>
        {children}
        <footer className="footer">
          <div className="container footer-grid">
            <div>
              <strong>{site.name}</strong>
              <p>أنظمة وبرمجيات مخصصة للقطاعات القانونية والتعليمية والتجارية.</p>
            </div>
            <div>
              {site.name} © 2026 · {site.contact.email}
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
