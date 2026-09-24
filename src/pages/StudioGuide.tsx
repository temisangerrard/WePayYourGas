import { Link } from "react-router-dom";

const regions = [
  { name: "UK", provider: "Prodigi UK", url: "https://www.prodigi.com/products/uk/", note: "Start with the UK catalogue. Match the paper, size and frame option to a product made in the UK. Order a sample before listing it.", alternative: "theprintspace also produces and dropships art prints in the UK.", alternativeUrl: "https://www.theprintspace.co.uk/dropship-art-prints/" },
  { name: "US", provider: "Prodigi US", url: "https://www.prodigi.com/products/us/", note: "Use a US-produced product where available. Check the exact size and paper: the same artwork may need a different print file or product code from the UK version.", alternative: "theprintspace has US production. Compare its delivered quote and sample quality.", alternativeUrl: "https://www.theprintspace.co.uk/the-printspace-delivery-services/" },
  { name: "Canada", provider: "Prodigi Canada", url: "https://www.prodigi.com/products/ca/", note: "Check the Canadian catalogue for the exact product. Delivery to Canada does not mean production in Canada. Confirm the dispatch country and any cross-border charges before setting a price.", alternative: "Gelato is another provider to quote. Local production depends on the product and destination.", alternativeUrl: "https://support.gelato.com/en/articles/8996118-do-you-support-all-products-and-formats-in-all-countries" },
  { name: "Nigeria", provider: "The Print Shop Lagos", url: "https://theprintshoplagos.com/", note: "A local lead for photographic and fine-art printing, advertising nationwide delivery. Request a sample and written prices for each size.", alternative: "Direct-to-customer packing, neutral branding, tracking and repeat-order handling are not verified. Agree these with the printer; arrange a courier separately if needed.", alternativeUrl: "https://theprintshoplagos.com/" },
];

export default function StudioGuide() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <meta name="robots" content="noindex, nofollow" />
      <title>Studio guide · malicknoir</title>
      <header className="border-b border-ink/15">
        <div className="max-w-5xl mx-auto px-5 py-5 flex justify-between gap-4 text-sm">
          <Link to="/" className="font-serif text-xl">malicknoir</Link>
          <Link to="/shop" className="underline underline-offset-4">View shop</Link>
        </div>
      </header>
      <main className="max-w-5xl mx-auto px-5 py-12 sm:py-20">
        <p className="text-xs uppercase tracking-widest text-clay mb-3">Studio reference · checked 24 September 2026</p>
        <h1 className="font-serif text-4xl sm:text-5xl">From artwork to delivered print</h1>
        <p className="max-w-2xl mt-5 text-lg text-stone">A practical setup for a Nigerian artist selling to customers in Nigeria, the UK, the US and Canada.</p>
        <p className="mt-5 max-w-2xl text-sm text-stone">This is an unlisted guide, not a private admin account. Anyone with the URL can read it. No payment accounts or printers are connected here.</p>
        <nav aria-label="Guide sections" className="flex flex-wrap gap-x-6 gap-y-3 border-y border-ink/15 py-5 mt-10 text-sm underline underline-offset-4">
          <a href="#setup">Start here</a><a href="#countries">Print partners</a><a href="#payments">Paystack</a><a href="#pricing">Pricing</a><a href="#launch">Before launch</a>
        </nav>

        <section id="setup" className="py-10 scroll-mt-6">
          <h2 className="font-serif text-3xl mb-5">01 / Use the tools that already exist</h2>
          <p className="max-w-3xl">Keep this website as the catalogue. Use Paystack product checkout for payment and delivery details. Start by placing paid orders with the printer manually. The lab prints, packs and ships to the customer; malicknoir handles the customer relationship.</p>
          <ol className="list-decimal pl-5 mt-6 space-y-3 max-w-3xl">
            <li>Upload the original high-resolution artwork to the lab. Choose paper or canvas, dimensions, borders and framing. The website thumbnails are not production files.</li>
            <li>Order a sample, approve the colours and finish, then get a delivered quote for each destination.</li>
            <li>Create the matching product and price in Paystack. Collect the delivery address and charge the agreed shipping fee.</li>
            <li>Confirm payment in Paystack. Place the matching lab order once, using the customer’s delivery address, and pay the lab from the business’s own funds.</li>
            <li>Record the payment reference and lab order ID together. Send the customer tracking when dispatched. Handle a damaged print or refund through the agreed process.</li>
          </ol>
          <p className="mt-5 text-sm text-stone">Customer payment and the lab’s charge are separate. Keep enough funds available to pay for printing before a payout arrives. <a className="underline" href="https://www.prodigi.com/manual-order-form/">Prodigi’s manual order form</a> supports an initial workflow without building an integration.</p>
        </section>

        <section id="countries" className="border-t border-ink/15 py-10 scroll-mt-6">
          <h2 className="font-serif text-3xl mb-3">02 / Choose a printer by destination</h2>
          <p className="text-stone mb-8">These are providers to evaluate, not contracted partners. Confirm account access and a usable billing method from Nigeria before committing.</p>
          <div className="divide-y divide-ink/15">
            {regions.map((region) => (
              <article key={region.name} className="grid sm:grid-cols-[120px_1fr] gap-3 py-6 first:pt-0">
                <h3 className="font-serif text-2xl">{region.name}</h3>
                <div>
                  <a className="font-semibold underline underline-offset-4" href={region.url}>{region.provider} ↗</a>
                  <p className="mt-3 max-w-2xl">{region.note}</p>
                  <p className="mt-3 max-w-2xl text-sm text-stone">{region.alternative} <a className="underline" href={region.alternativeUrl}>Details ↗</a></p>
                </div>
              </article>
            ))}
          </div>
          <p className="text-sm text-stone mt-4">Ask for paper name and weight, available sizes, framing, packaging, production time, tracked delivery, damaged-print replacements and a full delivered quote. A printed signature is not a hand-signed print.</p>
        </section>

        <section id="payments" className="border-t border-ink/15 py-10 scroll-mt-6">
          <h2 className="font-serif text-3xl mb-5">03 / Set up Paystack</h2>
          <ol className="list-decimal pl-5 space-y-3 max-w-3xl">
            <li>Activate the Nigerian business account and confirm its settlement details with Paystack.</li>
            <li>Request international payments. Approval is required; do not assume overseas cards are enabled.</li>
            <li>Choose a supported charge currency. Paystack lists NGN and USD for Nigeria; USD collection has additional account requirements. GBP and CAD are not Nigerian charge currencies. International buyers may pay the bank-converted equivalent, with issuer fees.</li>
            <li>Create a product for each approved print/size combination. Use Paystack Storefront delivery settings to require an address and configure the locations and shipping fees you actually support.</li>
            <li>Copy the matching hosted product checkout link into this site’s payment-link field. Confirm that the link retains the intended product, price and delivery settings.</li>
            <li>Test the whole order: selected size, charge currency, delivery fee, confirmation, payment record, lab order and tracking. Enable live checkout only after that succeeds.</li>
          </ol>
          <p className="mt-5 max-w-3xl">The current catalogue has 7 prints and 14 size options, with draft GBP prices. Do not connect an NGN or USD checkout while the button still promises a GBP total. Finalise the catalogue currency and prices together.</p>
          <div className="mt-5 flex flex-wrap gap-5 text-sm underline underline-offset-4">
            <a href="https://support.paystack.com/en/articles/2130690">International payments & currencies ↗</a>
            <a href="https://support.paystack.com/en/articles/2132738">Storefront delivery settings ↗</a>
            <a href="https://support.paystack.com/en/articles/2132546">Product payment pages ↗</a>
          </div>
          <details className="mt-8 border border-ink/20 p-5">
            <summary className="cursor-pointer font-semibold">When orders justify automation</summary>
            <div className="mt-4 space-y-3 text-sm max-w-3xl">
              <p>Paystack does not automatically send these orders to a print lab. Either choose an existing commerce integration that supports both services, or add a small server-side order workflow later.</p>
              <p>A future workflow must validate Paystack’s webhook signature, verify the paid amount and currency, match an approved print product, and prevent duplicate fulfilment by payment reference. Failed lab orders need a retry and an owner alert. A thank-you page is not proof of payment.</p>
              <p>Keep payment secrets and print masters off the public site. Put any real order dashboard behind authentication.</p>
              <a className="underline" href="https://paystack.com/docs/payments/webhooks/">Paystack webhook documentation ↗</a>
            </div>
          </details>
        </section>

        <section id="pricing" className="border-t border-ink/15 py-10 scroll-mt-6">
          <h2 className="font-serif text-3xl mb-5">04 / Price the delivered order</h2>
          <p className="max-w-3xl">Get supplier quotes before deciding retail prices. Work in one currency and record the exchange rate used. Price each destination separately if fulfilment costs differ.</p>
          <div className="bg-parchment border-l-2 border-clay p-6 mt-6 max-w-3xl">
            <p className="font-semibold">Total collected − all costs = contribution per order</p>
            <p className="mt-3 text-sm">Include printing, framing, packaging, shipping, payment fees, currency conversion, applicable taxes and a replacement allowance. Compare the result with the profit you want to keep.</p>
          </div>
          <p className="mt-5 max-w-3xl text-stone">Use a quote sheet with: country, print/size, lab product code, production location, print cost, shipping, other costs, customer total and contribution. No supplier costs or profit estimates have been invented here.</p>
        </section>

        <section id="launch" className="border-t border-ink/15 py-10 scroll-mt-6">
          <h2 className="font-serif text-3xl mb-5">05 / Decisions before opening checkout</h2>
          <ul className="list-disc pl-5 space-y-3 max-w-3xl">
            <li>Approve samples, sizes, paper, framing and final artwork files. Confirm permission to reproduce any third-party words or images.</li>
            <li>Choose open editions or a defined edition size. Only describe prints as hand-signed if the fulfilment process includes the artist signing them.</li>
            <li>Confirm supported destinations, delivered costs and realistic dispatch times. Publish delivery, returns, damage and privacy information.</li>
            <li>Confirm a working support inbox. Until then, the store uses @malicknoirr on Instagram.</li>
            <li>Approve prices and charge currency, activate Paystack, then run one complete order through the chosen printer.</li>
          </ul>
          <p className="mt-8 text-sm text-stone">Storefront references: <a className="underline" href="https://theposterclub.com/collections/all-art">The Poster Club</a> for browsing work by size, and <a className="underline" href="https://www.whitewall.com/uk/fine-art-prints/fine-art-print">WhiteWall</a> for specific paper and print options. Use clear titles, visible prices, full artwork previews and factual product details.</p>
        </section>
      </main>
    </div>
  );
}
