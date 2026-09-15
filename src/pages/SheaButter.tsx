import { Link } from "react-router";

export default function SheaButter() {
  const specs = [
    { k: "Product", v: "Unrefined Shea Butter" },
    { k: "Origin", v: "Ghana, West Africa" },
    { k: "Type", v: "Unrefined / Raw" },
    { k: "Colour", v: "Ivory / Cream / Yellow" },
    { k: "Organic", v: "Organic & Conventional" },
    { k: "Min. Order", v: "1.2 MT (subject to confirmation)" },
    { k: "Packaging", v: "30 kg export cartons" },
    { k: "Shelf Life", v: "24 months (typical)" },
    { k: "Storage", v: "Cool, dry conditions" },
    { k: "Shipping", v: "Sea freight / Air freight" },
  ];

  const applications = [
    "Skincare creams & lotions", "Lip balms & lip care", "Hair moisturisers",
    "Soap manufacturing", "Body butters", "Baby care products",
    "Pharmaceutical formulations", "Wellness products", "Industrial applications",
  ];

  return (
    <div className="bg-[#FAF8F3]">
      {/* Hero */}
      <section className="relative pt-36 pb-24 bg-[#1A1A18]">
        <div className="absolute inset-0 opacity-25">
          <img src="https://images.unsplash.com/photo-1573812461383-e5f8b759d12e?w=1400&h=700&fit=crop&auto=format" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-[12px] text-white/40 mb-6">
            <Link to="/products" className="hover:text-white/70 transition-colors">Products</Link>
            <span className="mx-2">/</span>
            <span className="text-white/70">Unrefined Shea Butter</span>
          </div>
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-[#B8860B]" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#B8860B]">Product</span>
          </div>
          <h1 className="font-serif text-5xl lg:text-7xl text-white max-w-2xl leading-tight">Unrefined Shea Butter</h1>
          <p className="text-[16px] text-white/60 max-w-lg mt-5">Natural, unrefined shea butter from carefully sourced shea kernels in Ghana's northern shea-producing regions.</p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link to="/request-a-quote" className="bg-[#B8860B] text-white px-7 py-3.5 text-[14px] font-medium hover:bg-[#9A7209] transition-colors">Request a Quote</Link>
            <Link to="/contact" className="border border-white/30 text-white px-7 py-3.5 text-[14px] font-medium hover:bg-white/10 transition-colors">Request Product Information</Link>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="font-serif text-3xl text-[#1A1A18] mb-5">Product Overview</h2>
                <p className="text-[15px] text-[#6B6356] leading-relaxed mb-4">
                  Our unrefined shea butter is produced from raw shea kernels sourced from communities in northern Ghana. It retains the natural properties of the shea fruit — the characteristic colour, scent and nutrient profile that make unrefined shea highly valued in cosmetic and personal care applications.
                </p>
                <p className="text-[15px] text-[#6B6356] leading-relaxed">
                  We supply both organic-certified and conventional grades in bulk quantities, meeting the needs of international manufacturers who require consistent, traceable supply.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-[#1A1A18] mb-5">Applications</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {applications.map(app => (
                    <div key={app} className="bg-[#F4EFE6] px-4 py-3 text-[13px] text-[#4A4540]">
                      {app}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-[#1A1A18] mb-5">Packaging</h2>
                <div className="border border-[#D6CABB] p-6">
                  <p className="text-[14px] text-[#6B6356] leading-relaxed">
                    Standard packaging is 30 kg export cartons, prepared for international freight. Packaging specifications may vary according to buyer requirements — please discuss your specific needs with our team.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-[#1A1A18] mb-5">Documentation</h2>
                <p className="text-[14px] text-[#6B6356] leading-relaxed mb-4">Documentation available upon request may include:</p>
                <ul className="space-y-2">
                  {["Certificate of Analysis", "Organic certification (where applicable)", "Product specification sheet", "Origin documentation", "Export documentation", "Additional buyer-required documentation"].map(doc => (
                    <li key={doc} className="flex items-center gap-3 text-[14px] text-[#4A4540]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B8860B] flex-shrink-0" />
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#2C4A3E] p-8">
                <h2 className="font-serif text-2xl text-white mb-3">Ready to enquire?</h2>
                <p className="text-[14px] text-white/60 mb-6">Contact our team with your quantity, destination and product requirements. We'll respond promptly with further information.</p>
                <div className="flex flex-wrap gap-3">
                  <Link to="/request-a-quote" className="bg-[#B8860B] text-white px-6 py-3 text-[13px] font-medium hover:bg-[#9A7209] transition-colors">Request a Quote</Link>
                  <Link to="/contact" className="border border-white/30 text-white px-6 py-3 text-[13px] font-medium hover:bg-white/10 transition-colors">Contact Our Team</Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-[#F4EFE6] p-6">
                <h3 className="font-serif text-xl text-[#1A1A18] mb-5">Product Specifications</h3>
                <div className="space-y-3">
                  {specs.map(({ k, v }) => (
                    <div key={k} className="flex justify-between items-start gap-4 py-2.5 border-b border-[#D6CABB] last:border-0">
                      <span className="text-[12px] uppercase tracking-wide text-[#9B9180]">{k}</span>
                      <span className="text-[13px] text-[#1A1A18] font-medium text-right">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border border-[#D6CABB] p-6">
                <h4 className="font-medium text-[#1A1A18] text-[14px] mb-3">Related Product</h4>
                <Link to="/products/shea-nuts" className="flex items-center gap-3 group">
                  <div className="w-14 h-14 bg-[#EDE4D3] overflow-hidden flex-shrink-0">
                    <img src="https://images.unsplash.com/photo-1600189020840-e9918c25269d?w=100&h=100&fit=crop&auto=format" alt="Shea nuts" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="text-[13px] font-medium text-[#1A1A18] group-hover:text-[#2C4A3E] transition-colors">Shea Nuts (Kernels)</div>
                    <div className="text-[11px] text-[#9B9180]">View product →</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
