import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { SITE } from "../config/site";

export default function Contact() {
  return (
    <div>
      <Nav />
      <div className="pt-32 pb-24 max-w-xl mx-auto px-5 text-center">
        <p className="text-xs uppercase tracking-[0.15em] text-clay font-semibold mb-2">
          Say Hello
        </p>
        <h1 className="font-serif text-4xl mb-6">Get in touch</h1>
        <p className="text-stone mb-8">
          Questions about an order, a custom size, or a bulk request for a gallery wall?
          Reach out directly — malicknoir replies personally.
        </p>
        <a
          href={`mailto:${SITE.contactEmail}`}
          className="inline-block bg-clay text-cream px-8 py-4 text-sm uppercase tracking-[0.1em] font-semibold hover:bg-clay/90 transition mb-4"
        >
          Email {SITE.contactEmail}
        </a>
        <div>
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noreferrer"
            className="text-sm underline underline-offset-4"
          >
            or message on Instagram {SITE.instagramHandle}
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
