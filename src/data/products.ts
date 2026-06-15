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
    summary: "برنامج ويندوز مستقل لإدارة القضايا والعملاء والجلسات والملفات.",
    description:
      "المنتج القانوني الرئيسي من N9 GROUP. يعمل كنظام مستقل للويندوز، وموقع N9 يعرض المنتج، التحديثات، الكتيبات، وروابط التحميل عند توفرها.",
    image: "/products/n9-law/icon.jpg",
    atmosphere: "واجهة قانونية فاخرة بخلفية أعمدة محكمة وميزان عدالة ولمعة ذهبية هادئة.",
    highlights: ["إدارة القضايا", "الجلسات والمواعيد", "ملفات العملاء", "إصدارات ويندوز"],
    status: "available",
    actions: [
      { label: "صفحة المنتج", href: "/products/n9-law" },
      { label: "مركز التحميل", href: "/downloads" }
    ]
  },
  {
    slug: "n9-sms",
    name: "N9 SMS",
    category: "الأتمتة والرسائل",
    summary: "تطبيق قادم لإدارة وأتمتة رسائل SMS على أندرويد.",
    description:
      "حل موجه للرسائل والتنبيهات. الصفحة الحالية تعرضه كمنتج قادم فقط إلى أن تصبح روابط المتاجر والملفات جاهزة.",
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
    summary: "مساحة مستقبلية لحلول الذكاء الاصطناعي والتحليل داخل منتجات N9.",
    description:
      "هوية مستقبلية لحلول الذكاء الاصطناعي، التحليل، والمساعدات الذكية داخل الأنظمة، بدون مبالغة في عرض ميزات غير مكتملة.",
    image: "/products/n9-ai/icon.jpg",
    atmosphere: "شبكات بيانات مضيئة ولمسة ذكاء اصطناعي سوداء وزرقاء.",
    highlights: ["تحليل بيانات", "مساعدات ذكية", "أتمتة قرارات", "تكامل مع الأنظمة"],
    status: "soon",
    actions: [{ label: "استعراض", href: "/products/n9-ai" }]
  }
];
