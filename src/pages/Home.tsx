import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import { SITE } from "../config/site";
import heroBg from "../assets/products/hero-bg.jpg";

export default function Home() {
  const featured = products.slice(0, 4);

  return (
    <div>
      <Nav dark />

      <section className="relative min-h-[70vh] flex items-end">
        <img
          src={heroBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
        <div className="relative max-w-6xl mx-auto px-5 pb-20 pt-40 text-cream">
          <p className="text-xs tracking-[0.2em] uppercase text-cream/70 mb-4">
            malicknoir
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl leading-[1.05] max-w-2xl">
            Art & photography
            <br />
            <span className="italic">prints.</span>
          </h1>
          <p className="mt-6 max-w-md text-cream/80">
            Browse the collection. Choose a print and size.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/shop"
              className="bg-clay text-cream px-8 py-4 text-sm uppercase tracking-[0.1em] font-semibold hover:bg-clay/90 transition"
            >
              Shop Prints
            </Link>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noreferrer"
              className="border border-cream/40 text-cream px-8 py-4 text-sm uppercase tracking-[0.1em] hover:bg-cream/10 transition"
            >
              Instagram
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 py-20">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-clay font-semibold mb-2">
              The collection
            </p>
            <h2 className="font-serif text-3xl">Selected prints</h2>
          </div>
          <Link to="/shop" className="text-sm underline underline-offset-4 hidden sm:block">
            View all prints
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        <Link
          to="/shop"
          className="mt-8 inline-block sm:hidden text-sm underline underline-offset-4"
        >
          View all prints
        </Link>
      </section>

      <section className="bg-charcoal text-cream">
        <div className="max-w-4xl mx-auto px-5 py-20 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl">More from malicknoir</h2>
          <a href={SITE.instagram} target="_blank" rel="noreferrer" className="inline-block mt-6 underline underline-offset-4">
            {SITE.instagramHandle} on Instagram
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
