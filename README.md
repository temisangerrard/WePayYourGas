# malicknoir — Shop Prints

A conversion-focused storefront for malicknoir's prints. Dark, cinematic hero
and brand storytelling; light, high-contrast shop and product pages where the
actual selling happens (visible pricing, real Buy Now CTAs, trust signals).

## Run locally

```bash
npm install
npm run dev
```

## Connecting real checkout (do this before launch)

Right now every "Buy Now" button falls back to a pre-filled email if no
payment link is configured, so nothing is ever a dead end — but it's not
a real checkout yet. To go live:

1. Create a [Stripe Payment Link](https://dashboard.stripe.com/payment-links)
   (or Gumroad/Lemon Squeezy) for each print + size combination.
2. Open `src/data/products.ts` and paste each link into the matching
   `paymentLink` field.
3. That's it — the button automatically switches from "Reserve This Print"
   to "Buy Now — £X" and links straight to hosted checkout. No code changes
   needed beyond pasting links.

Update contact details and the Instagram handle in `src/config/site.ts`.

## Deploying to Cloudflare Pages

```bash
npm run build
npx wrangler login      # opens a browser on YOUR machine — must be run locally, not in a cloud sandbox
npx wrangler pages deploy dist --project-name malicknoir-shop
```

## Structure

- `src/data/products.ts` — product catalog, prices, sizes, payment links
- `src/config/site.ts` — Instagram/contact info
- `src/pages/` — Home, Shop, ProductDetail, Contact
- `src/components/` — Nav, Footer, ProductCard, BuyPanel, TrustBar
