import Link from "next/link";
import { ArrowRight, Building2, Newspaper, ShieldCheck, UserCog, Users } from "lucide-react";

const managers = [
  { title: "News Manager", icon: Newspaper },
  { title: "Offices Manager", icon: Building2 },
  { title: "Companies Manager", icon: Users },
  { title: "Users Manager", icon: UserCog },
  { title: "Permissions Manager", icon: ShieldCheck }
];

export default function DeveloperPage() {
  return (
    <main className="internal-shell">
      <aside className="internal-sidebar">
        <h3>Developer Settings</h3>
        <p className="muted">إدارة المحتوى والصلاحيات والجهات.</p>
        <Link className="button" href="/">
          <ArrowRight size={18} /> رجوع
        </Link>
      </aside>
      <section className="internal-content">
        <div className="eyebrow">Developer</div>
        <h1>إعدادات المطور والإدارة.</h1>
        <p className="lead">هذه صفحة هيكلية للربط لاحقاً مع PostgreSQL وPrisma ونظام صلاحيات كامل.</p>
        <div className="internal-grid">
          {managers.map((manager) => {
            const Icon = manager.icon;
            return (
              <article className="glass-card price-card" key={manager.title}>
                <Icon color="var(--blue)" />
                <h3>{manager.title}</h3>
                <p>واجهة إدارة قابلة للتفعيل في المرحلة التالية.</p>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
