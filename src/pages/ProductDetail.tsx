import { Link, useParams } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import BuyPanel from "../components/BuyPanel";
import ProductCard from "../components/ProductCard";
import { getProduct, products } from "../data/products";

export default function ProductDetail() {
  const { id } = useParams();
  const product = id ? getProduct(id) : undefined;

  if (!product) {
    return (
      <div>
        <Nav />
        <div className="pt-32 text-center pb-32">
          <p className="font-serif text-2xl mb-4">Print not found.</p>
          <Link to="/shop" className="underline">
            Back to shop
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div>
      <Nav />
      <div className="pt-24 max-w-6xl mx-auto px-5">
        <Link to="/shop" className="text-xs uppercase tracking-[0.1em] text-stone hover:text-ink transition">
          ← Back to shop
        </Link>

        <div className="mt-6 grid md:grid-cols-2 gap-12">
          <div className="bg-parchment aspect-square overflow-hidden">
            <img src={product.image} alt={product.title} className="w-full h-full object-contain" />
          </div>
          <BuyPanel product={product} />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-5 py-20">
        <h2 className="font-serif text-2xl mb-6">You may also like</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {related.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
