"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import {
  ArrowLeft,
  BriefcaseBusiness,
  CheckCircle2,
  Database,
  Download,
  FileText,
  GraduationCap,
  Landmark,
  LockKeyhole,
  Scale,
  ShieldCheck,
  Sparkles,
  Store,
  UploadCloud
} from "lucide-react";
import { BlueNetwork } from "@/components/backgrounds/BlueNetwork";
import { GoldGrid } from "@/components/backgrounds/GoldGrid";
import { LegalColumns } from "@/components/backgrounds/LegalColumns";
import { N9Watermark } from "@/components/backgrounds/N9Watermark";
import { products } from "@/data/products";
import { services } from "@/data/services";
import { site } from "@/data/site";

const sectors = [
  { title: "Legal", label: "القطاع القانوني", icon: Scale },
  { title: "Education", label: "القطاع التعليمي", icon: GraduationCap },
  { title: "Business", label: "القطاع التجاري", icon: Store },
  { title: "Services", label: "الخدمات والأتمتة", icon: BriefcaseBusiness }
];

const dashboardStats = [
  ["Active cases", "128"],
  ["Automation rate", "64%"],
  ["Client files", "9.2K"],
  ["Secure roles", "RBAC"]
];

export function LandingExperience() {
  const featured = products[0];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".gsap-reveal").forEach((element) => {
        gsap.fromTo(
          element,
          { y: 48, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 82%"
            }
          }
        );
      });

      gsap.to(".float-mockup", {
        y: -22,
        duration: 2.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="landing-shell">
      <section className="landing-hero" id="home">
        <LegalColumns />
        <BlueNetwork />
        <GoldGrid />
        <N9Watermark />
        <div className="container landing-hero-grid">
          <motion.div initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="eyebrow">Premium Legal AI SaaS · N9 GROUP</div>
            <h1 className="mega-title">
              نظام قانوني ذكي
              <span> يبني الإدارة، الأتمتة، والقرار.</span>
            </h1>
            <p className="lead">
              {site.description} بتجربة سوداء فاخرة، خطوط AI زرقاء، ولمسات قانونية ذهبية.
            </p>
            <div className="actions">
              <Link className="button primary" href="/login">
                دخول النظام <LockKeyhole size={18} />
              </Link>
              <Link className="button gold" href="/products/n9-law">
                استعراض N9 LAW <ArrowLeft size={18} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="hero-device float-mockup"
            initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            <div className="device-top">
              <span />
              <span />
              <span />
            </div>
            <div className="device-body">
              <div className="device-sidebar">
                <Image src={featured.image} alt={featured.name} width={80} height={80} />
                <span />
                <span />
                <span />
              </div>
              <div className="device-content">
                <div className="chart-line" />
                <div className="stat-grid">
                  {dashboardStats.map(([label, value]) => (
                    <div className="mini-stat" key={label}>
                      <strong>{value}</strong>
                      <small>{label}</small>
                    </div>
                  ))}
                </div>
                <div className="legal-preview">
                  <Scale size={54} />
                  <div>
                    <h3>N9 LAW SYSTEM</h3>
                    <p>Cases · Sessions · Clients · Files</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section scene gsap-reveal" id="about">
        <div className="container split-scene">
          <div>
            <div className="eyebrow">About System</div>
            <h2>منصة تعرض منتجاتك كأنها نظام حي، وليس كتالوج صور.</h2>
            <p className="lead">
              الصفحة الرئيسية تتحرك كمشهد: خلفية قانونية، شبكات بيانات، بطاقات زجاجية، ولوحة تحكم عائمة تشرح قيمة المنتج قبل قراءة التفاصيل.
            </p>
          </div>
          <div className="glass-panel stack-panel">
            <div className="stack-row">
              <ShieldCheck />
              <span>Protected internal routes</span>
            </div>
            <div className="stack-row">
              <Database />
              <span>PostgreSQL + Prisma ready</span>
            </div>
            <div className="stack-row">
              <UploadCloud />
              <span>Downloads & file hub structure</span>
            </div>
            <div className="stack-row">
              <FileText />
              <span>News, offices, companies, users</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section gsap-reveal" id="products">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">Products</div>
              <h2>منتجات N9 كمنظومة SaaS قابلة للنمو.</h2>
            </div>
            <Link className="button" href="/products">
              كل المنتجات
            </Link>
          </div>
          <div className="showcase-grid">
            {products.map((product, index) => (
              <motion.article
                className="glass-card product-showcase"
                key={product.slug}
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 220, damping: 20 }}
              >
                <span className="card-number">0{index + 1}/</span>
                <Image src={product.image} alt={product.name} width={220} height={220} />
                <h3>{product.name}</h3>
                <p>{product.summary}</p>
                <Link href={`/products/${product.slug}`}>التفاصيل</Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section scene gsap-reveal" id="services">
        <div className="container">
          <div className="eyebrow">Services</div>
          <h2>خدمات مخصصة بروح قطاعات واضحة.</h2>
          <div className="sector-strip">
            {sectors.map((sector) => {
              const Icon = sector.icon;
              return (
                <div className="sector-tile" key={sector.title}>
                  <Icon size={32} />
                  <strong>{sector.title}</strong>
                  <span>{sector.label}</span>
                </div>
              );
            })}
          </div>
          <div className="services-timeline">
            {services.map((service, index) => (
              <article className="service-line" key={service.title}>
                <span>0{index + 1}</span>
                <Image src={service.image} alt="" width={96} height={96} />
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section gsap-reveal" id="subscriptions">
        <div className="container split-scene">
          <div>
            <div className="eyebrow">Subscriptions</div>
            <h2>جاهز لاحقاً للاشتراكات، الصلاحيات، والمكاتب.</h2>
            <p className="lead">
              المسار الداخلي المقترح: Login ثم اختيار المكتب ثم الشركة ثم بيانات الدخول ثم التفويض ثم Dashboard.
            </p>
          </div>
          <div className="pricing-grid">
            {["Starter", "Professional", "Enterprise"].map((plan) => (
              <div className="glass-card price-card" key={plan}>
                <CheckCircle2 />
                <h3>{plan}</h3>
                <p>خطة قابلة للتخصيص حسب المكتب، الشركة، وعدد المستخدمين.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact-scene gsap-reveal" id="contact">
        <div className="container contact-panel">
          <div>
            <div className="eyebrow">Contact</div>
            <h2>ابدأ من المنتج، أو اطلب نظاماً خاصاً بقطاعك.</h2>
            <p>{site.contact.name} · {site.contact.instagram} · {site.contact.email}</p>
          </div>
          <Link className="button primary" href="/contact">
            تواصل معنا <Sparkles size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
