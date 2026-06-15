import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <main className="section">
      <div className="container">
        <div className="eyebrow">Products</div>
        <h1>منتجات N9 الجاهزة والقابلة للتوسع.</h1>
        <p className="lead">
          معرض الأنظمة والتطبيقات الحالية والقادمة، مع صفحات مستقلة لكل منتج وروابط تحميل عند توفرها.
        </p>
        <div className="grid">
          {products.map((product) => (
            <article className="card product-card" key={product.slug}>
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
