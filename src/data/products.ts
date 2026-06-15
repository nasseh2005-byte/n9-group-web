export type Product = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  description: string;
  image: string;
  atmosphere: string;
  highlights: string[];
  status: "available" | "soon" | "custom";
  actions: Array<{ label: string; href: string }>;
};

export const products: Product[] = [
  {
    slug: "n9-law",
    name: "N9 LAW SYSTEM",
    category: "القطاع القانوني",
    summary: "نظام محاماة متكامل لإدارة القضايا والعملاء والجلسات والملفات.",
    description:
      "منتج N9 الاستراتيجي للقطاع القانوني، مع نسخة ويندوز وروابط مستقبلية لتطبيقات الجوال.",
    image: "/products/n9-law/icon.jpg",
    atmosphere: "واجهة قانونية فاخرة بخلفية أعمدة محكمة وميزان عدالة ولمعة ذهبية هادئة.",
    highlights: ["إدارة القضايا", "الجلسات والمواعيد", "ملفات العملاء", "إصدارات ويندوز"],
    status: "available",
    actions: [
      { label: "صفحة المنتج", href: "/products/n9-law" },
      { label: "تحميل ويندوز", href: "/downloads" }
    ]
  },
  {
    slug: "n9-sms",
    name: "N9 SMS",
    category: "الأتمتة والرسائل",
    summary: "تطبيق لإدارة وأتمتة رسائل SMS على أندرويد.",
    description:
      "حل موجه للرسائل والتنبيهات، مع مساحة جاهزة لروابط Google Play وApp Store لاحقاً.",
    image: "/products/n9-sms/icon.jpg",
    atmosphere: "طابع اتصالات تقني بخطوط زرقاء وإشارات رسائل سريعة.",
    highlights: ["إدارة الرسائل", "تنبيهات تلقائية", "قوائم عملاء", "روابط متاجر لاحقاً"],
    status: "soon",
    actions: [{ label: "استعراض", href: "/products/n9-sms" }]
  },
  {
    slug: "n9-ai",
    name: "N9 AI",
    category: "الذكاء الاصطناعي",
    summary: "مساحة منتجات وخدمات الذكاء الاصطناعي القادمة من N9.",
    description:
      "هوية مستقبلية لحلول الذكاء الاصطناعي، التحليل، والمساعدات الذكية داخل الأنظمة.",
    image: "/products/n9-ai/icon.jpg",
    atmosphere: "شبكات بيانات مضيئة ولمسة ذكاء اصطناعي سوداء وزرقاء.",
    highlights: ["تحليل بيانات", "مساعدات ذكية", "أتمتة قرارات", "تكامل مع الأنظمة"],
    status: "soon",
    actions: [{ label: "استعراض", href: "/products/n9-ai" }]
  }
];
