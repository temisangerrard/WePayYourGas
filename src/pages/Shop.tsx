import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import TrustBar from "../components/TrustBar";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

const categories = ["All", "Artwork", "Photography"] as const;

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initial = searchParams.get("category") || "All";
  const [category, setCategory] = useState<string>(
    categories.includes(initial as typeof categories[number]) ? initial : "All"
  );

  const filtered = useMemo(
    () => (category === "All" ? products : products.filter((p) => p.category === category)),
    [category]
  );

  return (
    <div>
      <Nav />
      <div className="pt-24 max-w-6xl mx-auto px-5">
        <p className="text-xs uppercase tracking-[0.15em] text-clay font-semibold mb-2">
          Available Prints
        </p>
        <h1 className="font-serif text-4xl mb-2">Shop the Archive</h1>
        <p className="text-stone max-w-xl">
          Small-batch prints from malicknoir's photography and artwork — printed to order,
          signed, and shipped worldwide.
        </p>

        <div className="flex gap-3 mt-8">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => {
                setCategory(c);
                setSearchParams(c === "All" ? {} : { category: c });
              }}
              className={`text-xs uppercase tracking-[0.1em] px-4 py-2 border transition ${
                category === c ? "bg-ink text-cream border-ink" : "border-ink/20 hover:border-ink/50"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-5 py-10 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-10">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <TrustBar />
      <Footer />
    </div>
  );
}
