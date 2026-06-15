import Image from "next/image";
import Link from "next/link";
import { BrainCircuit, MessageSquareText, Scale, Sparkles } from "lucide-react";
import { notFound } from "next/navigation";
import { products } from "@/data/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const ProductIcon =
    product.slug === "n9-law" ? Scale : product.slug === "n9-sms" ? MessageSquareText : BrainCircuit;

  return (
    <main className="section">
      <div className="container hero-grid">
        <div>
          <div className="eyebrow">{product.category}</div>
          <h1>{product.name}</h1>
          <p className="lead">{product.description}</p>
          <p className="muted">{product.atmosphere}</p>
          <div className="symbol-row">
            {product.highlights.map((item) => (
              <span className="symbol-chip" key={item}>
                <Sparkles size={15} /> {item}
              </span>
            ))}
          </div>
          <div className="actions">
            {product.actions.map((action) => (
              <Link className="button primary" href={action.href} key={action.label}>
                {action.label}
              </Link>
            ))}
          </div>
        </div>
        <div className={product.slug === "n9-law" ? "visual law-atmosphere" : "visual"}>
          {product.slug === "n9-law" ? (
            <div className="law-symbols" aria-hidden="true">
              <span className="law-column" />
              <span className="law-column" />
              <span className="law-column" />
            </div>
          ) : null}
          <ProductIcon
            size={92}
            style={{ position: "absolute", top: 34, left: 34, color: "var(--gold)", opacity: 0.32 }}
          />
          <Image src={product.image} alt={product.name} width={520} height={520} />
        </div>
      </div>
    </main>
  );
}
