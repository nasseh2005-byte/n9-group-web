import Link from "next/link";
import { Download } from "lucide-react";
import { downloads } from "@/data/downloads";

export default function DownloadsPage() {
  return (
    <main className="section">
      <div className="container">
        <div className="eyebrow">Downloads & File Hub</div>
        <h1>مركز التحميل والتحديثات.</h1>
        <p className="lead">
          صفحة مخصصة لإصدارات ويندوز، الكتيبات التعريفية، وروابط التطبيقات المستقبلية.
        </p>
        <div className="card">
          {downloads.map((item) => (
            <div className="download-row" key={`${item.product}-${item.version}`}>
              <div>
                <h3>{item.product}</h3>
                <p className="muted">{item.platform}</p>
              </div>
              <div>Version {item.version}</div>
              <div className="muted">{item.date}</div>
              <Link className="button primary" href={item.href}>
                تحميل <Download size={18} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
