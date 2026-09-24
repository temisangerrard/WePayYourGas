import { useState } from "react";
import type { Product } from "../data/products";
import { SITE, buildFallbackMailto } from "../config/site";

export default function BuyPanel({ product }: { product: Product }) {
  const [sizeIndex, setSizeIndex] = useState(0);
  const size = product.sizes[sizeIndex];
  const hasLiveCheckout = Boolean(size.paymentLink);

  return (
    <div>
      <p className="text-xs uppercase tracking-[0.15em] text-clay font-semibold mb-2">
        {product.category}
      </p>
      <h1 className="font-serif text-4xl leading-tight mb-3">{product.title}</h1>
      <p className="text-stone italic mb-8">{product.quote}</p>

      <p className="text-xs uppercase tracking-[0.15em] text-stone mb-2">Size</p>
      <div className="grid gap-2 mb-8">
        {product.sizes.map((s, i) => (
          <button
            key={s.label}
            onClick={() => setSizeIndex(i)}
            className={`flex items-center justify-between border px-4 py-3 text-left transition ${
              i === sizeIndex
                ? "border-ink bg-ink text-cream"
                : "border-ink/20 hover:border-ink/50"
            }`}
          >
            <span>{s.label}</span>
            <span className="font-semibold">£{s.price}</span>
          </button>
        ))}
      </div>

      <a
        href={hasLiveCheckout ? size.paymentLink : buildFallbackMailto(product.title, size.label)}
        target={hasLiveCheckout ? "_blank" : undefined}
        rel={hasLiveCheckout ? "noreferrer" : undefined}
        className="block w-full text-center bg-clay text-cream font-semibold uppercase tracking-[0.1em] text-sm py-4 hover:bg-clay/90 transition"
      >
        {hasLiveCheckout ? `Buy now — £${size.price}` : "Enquire about this print"}
      </a>
      {!hasLiveCheckout && (
        <p className="text-xs text-stone mt-2">
          {SITE.contactEmail
            ? "Opens an email with your print and size."
            : `Message ${SITE.instagramHandle} on Instagram about ${product.title} (${size.label}).`}
          {" "}Confirm availability and delivery before paying. Prices shown are a guide.
        </p>
      )}

    </div>
  );
}
