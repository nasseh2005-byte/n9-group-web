import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { ClickSound } from "@/components/ClickSound";
import { navigation, site } from "@/data/site";

export const metadata: Metadata = {
  title: "N9 GROUP | N9 SYSTEM",
  description: site.description
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
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
