import Image from "next/image";
import { BriefcaseBusiness, GraduationCap, Scale, Store, Utensils } from "lucide-react";
import { industries, services } from "@/data/services";

export default function ServicesPage() {
  const icons = [Scale, Utensils, GraduationCap, BriefcaseBusiness, Store];

  return (
    <main className="section">
      <div className="container">
        <div className="eyebrow">Services</div>
        <h1>برمجة مخصصة، قواعد بيانات، وأتمتة ذكية.</h1>
        <p className="lead">
          خدمات N9 منفصلة عن المنتجات الجاهزة: نطوّر الحل حسب طريقة عمل العميل، من ملف Excel أو Access بسيط إلى نظام
          ويب أو برنامج متكامل.
        </p>
        <div className="grid">
          {services.map((service) => (
            <article className="card service-card" key={service.title}>
              <Image src={service.image} alt="" width={120} height={120} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
        <section className="section" style={{ paddingBottom: 0 }}>
          <h2>القطاعات المستهدفة</h2>
          <div className="grid">
            {industries.map((industry, index) => {
              const Icon = icons[index] ?? BriefcaseBusiness;
              return (
                <div className="card sector-card" key={industry}>
                  <Icon size={34} />
                  <h3 style={{ marginTop: 18 }}>{industry}</h3>
                  <p>مساحة مهيأة لعرض المنتجات والخدمات المناسبة لهذا القطاع.</p>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
