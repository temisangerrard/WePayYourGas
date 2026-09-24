import { Link } from "react-router-dom";
import type { Product } from "../data/products";

export default function ProductCard({ product }: { product: Product }) {
  const fromPrice = Math.min(...product.sizes.map((s) => s.price));

  return (
    <Link to={`/print/${product.id}`} className="group block">
      <div className="aspect-square overflow-hidden bg-parchment">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          loading="lazy"
        />
      </div>
      <div className="mt-3 flex items-start justify-between gap-2">
        <div>
          <p className="font-serif text-lg leading-tight">{product.title}</p>
          <p className="text-xs uppercase tracking-wide text-stone mt-1">{product.category}</p>
        </div>
        <p className="text-sm font-semibold whitespace-nowrap">From £{fromPrice}</p>
      </div>
    </Link>
  );
}
