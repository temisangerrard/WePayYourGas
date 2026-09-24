import { Link, useLocation } from "react-router-dom";
import { SITE } from "../config/site";

export default function Nav({ dark = false }: { dark?: boolean }) {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const wrapCls = dark
    ? "text-cream border-white/15"
    : "text-ink border-ink/10 bg-cream/90 backdrop-blur";

  return (
    <header
      className={`${isHome ? "absolute" : "sticky"} top-0 left-0 right-0 z-40 border-b ${wrapCls}`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-5 py-4">
        <Link to="/" className="font-serif text-xl tracking-wide">
          malicknoir
        </Link>
        <div className="hidden sm:flex items-center gap-8 text-xs tracking-[0.15em] uppercase">
          <Link to="/shop" className="hover:opacity-70 transition">
            Shop Prints
          </Link>
          <Link to="/contact" className="hover:opacity-70 transition">
            Contact
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noreferrer"
            className={`hidden sm:inline-block text-xs tracking-[0.15em] uppercase border px-4 py-2 hover:bg-current/5 transition ${
              dark ? "border-white/30" : "border-ink/30"
            }`}
          >
            Instagram
          </a>
          <Link
            to="/shop"
            className="text-xs tracking-[0.15em] uppercase bg-clay text-cream px-4 py-2 hover:bg-clay/90 transition"
          >
            Shop
          </Link>
        </div>
      </nav>
    </header>
  );
}
