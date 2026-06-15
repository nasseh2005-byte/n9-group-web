import Link from "next/link";
import { ArrowRight, CalendarDays, FileText, Scale, ShieldCheck } from "lucide-react";

const cards = [
  { title: "القضايا النشطة", value: "128", icon: Scale },
  { title: "جلسات هذا الأسبوع", value: "24", icon: CalendarDays },
  { title: "ملفات العملاء", value: "9.2K", icon: FileText },
  { title: "الصلاحيات", value: "RBAC", icon: ShieldCheck }
];

export default function DashboardPage() {
  return (
    <main className="internal-shell">
      <aside className="internal-sidebar">
        <h3>N9 Dashboard</h3>
        <p className="muted">Office / Company / Authorization</p>
        <Link className="button" href="/">
          <ArrowRight size={18} /> رجوع
        </Link>
      </aside>
      <section className="internal-content">
        <div className="eyebrow">Protected Dashboard</div>
        <h1>لوحة داخلية محمية.</h1>
        <p className="lead">هيكل أولي لواجهة العملاء بعد تسجيل الدخول، قابلة للربط بالجلسات والصلاحيات.</p>
        <div className="internal-grid">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <article className="glass-card price-card" key={card.title}>
                <Icon color="var(--gold)" />
                <h3>{card.value}</h3>
                <p>{card.title}</p>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
