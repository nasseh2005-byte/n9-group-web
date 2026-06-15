import { site } from "@/data/site";

export default function AboutPage() {
  return (
    <main className="section">
      <div className="container">
        <div className="eyebrow">About</div>
        <h1>رؤية N9 GROUP</h1>
        <p className="lead">
          {site.name} تبني حلولاً ذكية وأتمتة برمجية تساعد أصحاب الأعمال على إدارة البيانات،
          اختصار الوقت، وتحويل العمليات اليومية إلى أنظمة واضحة وقابلة للنمو.
        </p>
      </div>
    </main>
  );
}
