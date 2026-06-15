import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <main className="section">
      <div className="container">
        <div className="eyebrow">Products</div>
        <h1>منتجات N9 الجاهزة والقادمة.</h1>
        <p className="lead">
          N9 LAW SYSTEM هو المنتج الرئيسي المتاح حالياً كبرنامج ويندوز مستقل. المنتجات الأخرى تظهر كمساحات قادمة أو
          قيد التطوير حتى تصبح روابطها وإصداراتها جاهزة.
        </p>
        <div className="grid">
          {products.map((product, index) => (
            <article className={index === 0 ? "card product-card main-product" : "card product-card"} key={product.slug}>
              <Image src={product.image} alt={product.name} width={160} height={160} />
              <span className="pill">{product.category}</span>
              <div>
                <h3>{product.name}</h3>
                <p>{product.summary}</p>
              </div>
              <div className="actions" style={{ marginTop: "auto" }}>
                <Link className="button" href={`/products/${product.slug}`}>
                  التفاصيل <ArrowLeft size={18} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
