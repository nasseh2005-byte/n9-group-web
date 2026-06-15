import { FilePenLine, PackagePlus, Trash2, Upload } from "lucide-react";

const adminCards = [
  {
    title: "نشر منتج",
    description: "إضافة منتج جديد أو صفحة مشروع إلى معرض N9.",
    icon: PackagePlus
  },
  {
    title: "تعديل المحتوى",
    description: "تحديث العنوان، الوصف، الصور، والروابط.",
    icon: FilePenLine
  },
  {
    title: "إدارة التحميلات",
    description: "إضافة إصدار ويندوز جديد أو كتيب تعريفي.",
    icon: Upload
  },
  {
    title: "حذف أو إخفاء",
    description: "إخفاء منتج أو إزالة رابط إصدار قديم من الواجهة.",
    icon: Trash2
  }
];

export default function AdminPage() {
  return (
    <main className="section">
      <div className="container admin-layout">
        <aside className="card admin-menu">
          <h3>لوحة N9</h3>
          <p>هذا المسار محمي باسم مستخدم وكلمة مرور عبر Vercel Environment Variables.</p>
        </aside>
        <section>
          <div className="eyebrow">Admin</div>
          <h1>النشر والتعديل والحذف</h1>
          <p className="lead">
            هذه نسخة هيكلية للوحة الإدارة. المرحلة القادمة تربطها بقاعدة بيانات أو CMS حتى تصبح عمليات النشر فعلية.
          </p>
          <div className="grid two">
            {adminCards.map((card) => {
              const Icon = card.icon;
              return (
                <article className="card" key={card.title}>
                  <Icon size={28} color="var(--gold)" />
                  <h3 style={{ marginTop: 16 }}>{card.title}</h3>
                  <p>{card.description}</p>
                </article>
              );
            })}
          </div>
          <section className="section" style={{ paddingBottom: 0 }}>
            <h2>نموذج إدخال مبدئي</h2>
            <form className="card form-grid">
              <input className="input" placeholder="اسم المنتج أو الإصدار" />
              <input className="input" placeholder="الرابط أو مسار الملف" />
              <textarea className="input" placeholder="وصف مختصر أو ملاحظات التحديث" />
              <button className="button primary" type="button">
                حفظ مبدئي
              </button>
            </form>
          </section>
        </section>
      </div>
    </main>
  );
}
