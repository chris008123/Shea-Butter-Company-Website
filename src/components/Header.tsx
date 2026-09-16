import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "What We Do", to: "/what-we-do" },
  { label: "Products", to: "/products" },
  { label: "Sustainability", to: "/sustainability" },
  { label: "About Us", to: "/about" },
  { label: "Insights", to: "/insights" },
  { label: "Contact", to: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#FAF8F3]/95 backdrop-blur-sm shadow-[0_1px_0_0_#D6CABB] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-full bg-[#2C4A3E] flex items-center justify-center flex-shrink-0">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <ellipse cx="10" cy="12" rx="5" ry="6" fill="#FAF8F3" opacity="0.9"/>
              <ellipse cx="10" cy="8" rx="3" ry="4" fill="#B8860B" opacity="0.85"/>
              <path d="M10 2 C10 2 7 5 10 9 C13 5 10 2 10 2Z" fill="#FAF8F3" opacity="0.7"/>
            </svg>
          </div>
          <div className="leading-tight">
            <div className="font-serif text-[15px] font-600 text-[#1A1A18] tracking-wide">Sirius</div>
            <div className="text-[9px] uppercase tracking-[0.15em] text-[#6B6356] font-medium">Ghana · West Africa</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-[13px] font-medium tracking-wide transition-colors duration-200 ${
                location.pathname === link.to
                  ? "text-[#2C4A3E]"
                  : "text-[#4A4540] hover:text-[#2C4A3E]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            to="/request-a-quote"
            className="hidden sm:inline-flex items-center gap-2 bg-[#2C4A3E] text-[#FAF8F3] px-5 py-2.5 text-[13px] font-medium tracking-wide hover:bg-[#1f3529] transition-colors duration-200"
          >
            Request a Quote
          </Link>

          <button
            className="lg:hidden p-2 text-[#1A1A18]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 space-y-1.5">
              <span className={`block h-px bg-current transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-px bg-current transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-px bg-current transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#FAF8F3] border-t border-[#D6CABB] px-6 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="block py-3 text-[14px] font-medium text-[#1A1A18] border-b border-[#EDE4D3] last:border-0"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4">
            <Link
              to="/request-a-quote"
              className="block text-center bg-[#2C4A3E] text-[#FAF8F3] px-5 py-3 text-[13px] font-medium tracking-wide"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
