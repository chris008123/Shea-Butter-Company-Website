import { Link } from "react-router";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A18] text-[#EDE4D3]">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#2C4A3E]">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-full bg-[#2C4A3E] flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <ellipse cx="10" cy="12" rx="5" ry="6" fill="#FAF8F3" opacity="0.9"/>
                  <ellipse cx="10" cy="8" rx="3" ry="4" fill="#B8860B" opacity="0.85"/>
                  <path d="M10 2 C10 2 7 5 10 9 C13 5 10 2 10 2Z" fill="#FAF8F3" opacity="0.7"/>
                </svg>
              </div>
              <div>
                <div className="font-serif text-[15px] text-[#FAF8F3] font-600">Sirius Shea Butter</div>
                <div className="text-[9px] uppercase tracking-[0.15em] text-[#6B6356]">Ghana · West Africa</div>
              </div>
            </div>
            <p className="text-[13px] text-[#9B9180] leading-relaxed mb-6 max-w-xs">
              Sourcing and supplying high-quality unrefined shea butter and shea nuts from Ghana to international markets.
            </p>
            <Link
              to="/request-a-quote"
              className="inline-block bg-[#B8860B] text-[#FAF8F3] px-5 py-2.5 text-[12px] font-medium tracking-wide hover:bg-[#9A7209] transition-colors"
            >
              Request a Quote
            </Link>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.15em] text-[#B8860B] font-medium mb-5">Company</h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", to: "/about" },
                { label: "What We Do", to: "/what-we-do" },
                { label: "Products", to: "/products" },
                { label: "Sustainability", to: "/sustainability" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-[13px] text-[#9B9180] hover:text-[#EDE4D3] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.15em] text-[#B8860B] font-medium mb-5">Resources</h4>
            <ul className="space-y-3">
              {[
                { label: "Insights", to: "/insights" },
                { label: "FAQ", to: "/faq" },
                { label: "Shea Butter", to: "/products/shea-butter" },
                { label: "Shea Nuts", to: "/products/shea-nuts" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-[13px] text-[#9B9180] hover:text-[#EDE4D3] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.15em] text-[#B8860B] font-medium mb-5">Contact</h4>
            <ul className="space-y-3 text-[13px] text-[#9B9180]">
              <li className="leading-relaxed">Accra, Ghana<br />West Africa</li>
              <li>
                <a href="mailto:info@afrishea.com" className="hover:text-[#EDE4D3] transition-colors">
                  info@sirius.com
                </a>
              </li>
              <li>
                <a href="tel:+233541087863" className="hover:text-[#EDE4D3] transition-colors">
                  +233 54 108 7863
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-[#5A5348]">
            © {year} Sirius Shea Butter Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {[
              { label: "Privacy Policy", to: "/privacy-policy" },
              { label: "Terms of Use", to: "/terms" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-[12px] text-[#5A5348] hover:text-[#9B9180] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
