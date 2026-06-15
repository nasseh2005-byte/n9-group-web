import { Instagram, Mail, Send } from "lucide-react";
import { site } from "@/data/site";

export default function ContactPage() {
  return (
    <main className="section">
      <div className="container grid two">
        <div>
          <div className="eyebrow">Contact</div>
          <h1>تواصل معنا</h1>
          <p className="lead">
            أرسل فكرة النظام، نوع القطاع، والملفات التي تحتاج تطويرها أو تحويلها إلى نظام. يمكن استخدام هذه الصفحة لاحقاً
            كبوابة طلبات مع رفع ملفات.
          </p>
          <div className="card">
            <h3>{site.contact.name}</h3>
            <p>
              <Mail size={18} /> {site.contact.email}
            </p>
            <p>
              <Instagram size={18} /> {site.contact.instagram}
            </p>
          </div>
        </div>
        <form className="card form-grid">
          <input className="input" placeholder="الاسم" />
          <input className="input" placeholder="البريد أو رقم التواصل" />
          <input className="input" placeholder="نوع المشروع" />
          <textarea className="input" placeholder="وصف الطلب" />
          <button className="button primary" type="button">
            إرسال الطلب <Send size={18} />
          </button>
        </form>
      </div>
    </main>
  );
}
