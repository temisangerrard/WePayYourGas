import { Link } from "react-router-dom";
import { SITE } from "../config/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream/70">
      <div className="max-w-6xl mx-auto px-5 py-14 grid gap-10 sm:grid-cols-3">
        <div>
          <p className="font-serif text-xl text-cream mb-2">malicknoir</p>
          <p className="text-sm max-w-xs">
            Art and photography prints.
          </p>
        </div>
        <div className="text-sm">
          <p className="uppercase tracking-[0.15em] text-xs text-cream mb-3">Shop</p>
          <ul className="space-y-2">
            <li>
              <Link to="/shop" className="hover:text-cream transition">
                All prints
              </Link>
            </li>
            <li>
              <Link to="/shop?category=Artwork" className="hover:text-cream transition">
                Artwork
              </Link>
            </li>
            <li>
              <Link to="/shop?category=Photography" className="hover:text-cream transition">
                Photography
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-sm">
          <p className="uppercase tracking-[0.15em] text-xs text-cream mb-3">Contact</p>
          <ul className="space-y-2">
            <li>
              <a href={SITE.instagram} target="_blank" rel="noreferrer" className="hover:text-cream transition">
                {SITE.instagramHandle}
              </a>
            </li>
            {SITE.contactEmail && <li>
              <a href={`mailto:${SITE.contactEmail}`} className="hover:text-cream transition">
                {SITE.contactEmail}
              </a>
            </li>}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 text-xs text-center py-5">
        © {new Date().getFullYear()} malicknoir.
      </div>
    </footer>
  );
}
