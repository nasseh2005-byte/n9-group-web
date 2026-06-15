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
  Building2,
  CalendarDays,
  Database,
  Download,
  FileArchive,
  FileText,
  GraduationCap,
  Mail,
  MessageSquareText,
  Scale,
  ShieldCheck,
  Sparkles,
  Store,
  UploadCloud,
  Utensils
} from "lucide-react";
import { BlueNetwork } from "@/components/backgrounds/BlueNetwork";
import { GoldGrid } from "@/components/backgrounds/GoldGrid";
import { LegalColumns } from "@/components/backgrounds/LegalColumns";
import { N9Watermark } from "@/components/backgrounds/N9Watermark";
import { downloads } from "@/data/downloads";
import { products } from "@/data/products";
import { services } from "@/data/services";
import { site } from "@/data/site";

const workflow = [
  { title: "الملفات", text: "أرشفة منظمة للقضايا والعملاء والمستندات.", icon: FileArchive },
  { title: "الجلسات", text: "متابعة المواعيد والتحديثات القانونية.", icon: CalendarDays },
  { title: "الشركات", text: "مساحات عمل قابلة للتخصيص حسب الجهة.", icon: Building2 },
  { title: "التحديثات", text: "إصدارات ويندوز وملفات تعريفية من مركز التحميل.", icon: Download }
];

const sectors = [
  { title: "القانوني", label: "قضايا، جلسات، عملاء، وأرشفة", icon: Scale },
  { title: "التعليمي", label: "منصات ونماذج جامعية وعروض", icon: GraduationCap },
  { title: "التجاري", label: "متاجر وأنظمة إدارة وتشغيل", icon: Store },
  { title: "المطاعم", label: "منيوهات إلكترونية وتجارب طلب", icon: Utensils },
  { title: "الخدمات", label: "أتمتة، جداول، قواعد بيانات", icon: BriefcaseBusiness }
];

const news = [
  {
    title: "تحسين مركز تحميل N9 LAW",
    text: "تهيئة الصفحة لإصدارات ويندوز، سجل التحديثات، والكتيبات التعريفية."
  },
  {
    title: "مساحة للأنظمة المخصصة",
    text: "تجهيز مسار واضح لطلبات العملاء ورفع الملفات لاحقاً."
  },
  {
    title: "منتجات N9 القادمة",
    text: "N9 SMS وN9 AI تظهر كمنتجات قادمة بدون تضخيم أو وعود غير جاهزة."
  }
];

export function LandingExperience() {
  const featured = products[0];
  const latestDownload = downloads[0];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".gsap-reveal").forEach((element) => {
        gsap.fromTo(
          element,
          { y: 44, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 84%"
            }
          }
        );
      });

      gsap.to(".float-mockup", {
        y: -18,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="landing-shell">
      <section className="landing-hero" id="system">
        <LegalColumns />
        <BlueNetwork />
        <GoldGrid />
        <N9Watermark />
        <div className="container landing-hero-grid">
          <motion.div initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="eyebrow">Premium Software Systems by N9 GROUP</div>
            <h1 className="mega-title">
              N9 SYSTEM
              <span>أنظمة ذكية لعمل أكثر وضوحاً وسرعة.</span>
            </h1>
            <p className="lead">
              N9 GROUP تبني برامج ويندوز، مواقع، قواعد بيانات، أتمتة، ولوحات تحكم مخصصة. المنتج الرئيسي حالياً هو
              N9 LAW SYSTEM للقطاع القانوني.
            </p>
            <div className="actions">
              <Link className="button primary" href="/products/n9-law">
                استعراض N9 LAW <ArrowLeft size={18} />
              </Link>
              <Link className="button gold" href="/contact">
                اطلب نظاماً مخصصاً <Sparkles size={18} />
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
              <strong>N9 LAW · Windows Workspace</strong>
            </div>
            <div className="device-body">
              <div className="device-sidebar">
                <Image src={featured.image} alt={featured.name} width={80} height={80} priority />
                <span />
                <span />
                <span />
              </div>
              <div className="device-content">
                <div className="law-dashboard-preview">
                  <div>
                    <small>Today</small>
                    <strong>جلسات ومهام</strong>
                  </div>
                  <Scale size={52} />
                </div>
                <div className="stat-grid">
                  <div className="mini-stat">
                    <strong>Cases</strong>
                    <small>إدارة القضايا</small>
                  </div>
                  <div className="mini-stat">
                    <strong>Files</strong>
                    <small>أرشفة المستندات</small>
                  </div>
                  <div className="mini-stat">
                    <strong>Clients</strong>
                    <small>بيانات العملاء</small>
                  </div>
                  <div className="mini-stat">
                    <strong>Updates</strong>
                    <small>إصدارات ويندوز</small>
                  </div>
                </div>
                <div className="legal-preview">
                  <ShieldCheck size={54} />
                  <div>
                    <h3>N9 LAW SYSTEM</h3>
                    <p>برنامج مستقل للويندوز، وليس تطبيقاً عاماً داخل المتصفح.</p>
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
            <div className="eyebrow">About N9 System</div>
            <h2>موقع يعرض منتجات N9 وخدماتها بدون خلط بين الشركة والبرنامج.</h2>
            <p className="lead">
              الصفحة الرئيسية أصبحت مظلة واضحة: N9 GROUP كشركة تطوير، N9 SYSTEM كهوية للأنظمة، وN9 LAW كمنتج قانوني
              رئيسي يعمل على ويندوز مع مركز تحميل مستقل.
            </p>
          </div>
          <div className="glass-panel stack-panel">
            <div className="stack-row">
              <ShieldCheck />
              <span>المسارات الداخلية مخفية عن الواجهة العامة</span>
            </div>
            <div className="stack-row">
              <Database />
              <span>بنية جاهزة لاحقاً لـ PostgreSQL وPrisma</span>
            </div>
            <div className="stack-row">
              <UploadCloud />
              <span>مركز تحميل مهيأ لإصدارات ويندوز والكتيبات</span>
            </div>
            <div className="stack-row">
              <FileText />
              <span>أخبار ومحتوى قابل للإدارة في المرحلة التالية</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section featured-law gsap-reveal" id="law">
        <div className="container featured-law-grid">
          <div>
            <div className="eyebrow">Featured Product</div>
            <h2>N9 LAW SYSTEM for Windows</h2>
            <p className="lead">
              نظام قانوني مستقل لإدارة القضايا والعملاء والجلسات والملفات. لا يعمل كمنتج عام داخل المتصفح؛ هذه الصفحة
              مخصصة للتعريف، التحميل، وطلب التركيب أو التواصل.
            </p>
            <div className="symbol-row">
              {featured.highlights.map((item) => (
                <span className="symbol-chip" key={item}>
                  <Scale size={15} /> {item}
                </span>
              ))}
            </div>
            <div className="actions">
              <Link className="button primary" href="/products/n9-law">
                صفحة المنتج <ArrowLeft size={18} />
              </Link>
              <Link className="button" href="/downloads">
                مركز التحميل <Download size={18} />
              </Link>
            </div>
          </div>
          <div className="glass-card release-card">
            <span className="card-number">Latest Windows Version</span>
            <h3>{latestDownload.version}</h3>
            <p>{latestDownload.product}</p>
            <div className="release-meta">
              <span>{latestDownload.platform}</span>
              <span>{latestDownload.date}</span>
              <span>{latestDownload.size}</span>
            </div>
            <p className="muted">رابط التحميل سيُربط لاحقاً بملف آمن على Vercel Blob أو S3.</p>
          </div>
        </div>
      </section>

      <section className="section gsap-reveal" id="workflow">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">Workflow</div>
              <h2>عرض يحكي طريقة عمل النظام بدل الاكتفاء بالشعارات.</h2>
            </div>
          </div>
          <div className="workflow-grid">
            {workflow.map((item, index) => {
              const Icon = item.icon;
              return (
                <article className="glass-card workflow-card" key={item.title}>
                  <span>0{index + 1}</span>
                  <Icon size={30} />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section scene gsap-reveal" id="products">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">Products</div>
              <h2>منتجات جاهزة، مع أولوية واضحة للمنتج القانوني.</h2>
            </div>
            <Link className="button" href="/products">
              كل المنتجات
            </Link>
          </div>
          <div className="showcase-grid">
            {products.map((product, index) => (
              <motion.article
                className={index === 0 ? "glass-card product-showcase main-product" : "glass-card product-showcase"}
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

      <section className="section gsap-reveal" id="services">
        <div className="container">
          <div className="eyebrow">Services</div>
          <h2>خدمات حسب الطلب، منفصلة بوضوح عن المنتجات الجاهزة.</h2>
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

      <section className="section scene gsap-reveal" id="downloads">
        <div className="container split-scene">
          <div>
            <div className="eyebrow">Downloads</div>
            <h2>مركز تحميل واضح لإصدارات ويندوز والكتيبات.</h2>
            <p className="lead">
              القسم مهيأ لعرض آخر إصدار، الإصدارات السابقة، ملفات PDF، وسجل التحديثات بدون وضع روابط وهمية كمزايا مكتملة.
            </p>
          </div>
          <div className="glass-panel stack-panel">
            <div className="stack-row">
              <Download />
              <span>N9 LAW SYSTEM for Windows</span>
            </div>
            <div className="stack-row">
              <FileText />
              <span>Brochures and product sheets</span>
            </div>
            <div className="stack-row">
              <MessageSquareText />
              <span>Update notes and changelog</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section gsap-reveal" id="news">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">Latest News</div>
              <h2>أخبار قصيرة قابلة للتحديث لاحقاً من اللوحة الداخلية.</h2>
            </div>
          </div>
          <div className="news-grid">
            {news.map((item) => (
              <article className="glass-card news-card" key={item.title}>
                <span>News</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact-scene gsap-reveal" id="contact">
        <div className="container contact-panel">
          <div>
            <div className="eyebrow">Contact</div>
            <h2>ابدأ من N9 LAW، أو اطلب نظاماً خاصاً بقطاعك.</h2>
            <p>{site.contact.name}</p>
            <p className="muted">
              Instagram: {site.contact.instagram} · Email: {site.contact.email}
            </p>
          </div>
          <div className="contact-actions">
            <Link className="button primary" href="/contact">
              تواصل معنا <Mail size={18} />
            </Link>
            <Link className="button gold" href="/downloads">
              التحميلات <Download size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
