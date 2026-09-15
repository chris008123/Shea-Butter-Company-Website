import { Link } from "react-router";

export default function Products() {
  return (
    <div className="bg-[#FAF8F3]">
      <section className="relative pt-36 pb-20 bg-[#1A1A18]">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1600189020840-e9918c25269d?w=1400&h=600&fit=crop&auto=format" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-[#B8860B]" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#B8860B]">Products</span>
          </div>
          <h1 className="font-serif text-5xl lg:text-7xl text-white max-w-2xl leading-tight">Natural ingredients. Industrial supply.</h1>
          <p className="text-[16px] text-white/60 max-w-lg mt-6">
            We supply unrefined shea butter and raw shea nuts from Ghana in bulk quantities, serving international manufacturers, traders and distributors.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Shea Butter Card */}
            <div className="group overflow-hidden border border-[#D6CABB] hover:border-[#2C4A3E] transition-colors">
              <div className="relative h-80 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1573812461383-e5f8b759d12e?w=800&h=600&fit=crop&auto=format" alt="Unrefined shea butter" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A18]/60 to-transparent" />
                <span className="absolute top-4 left-4 bg-[#2C4A3E] text-white text-[10px] uppercase tracking-widest px-3 py-1.5">Flagship Product</span>
              </div>
              <div className="p-10">
                <h2 className="font-serif text-3xl text-[#1A1A18] mb-3">Unrefined Shea Butter</h2>
                <p className="text-[14px] text-[#6B6356] leading-relaxed mb-6">
                  Produced from carefully sourced shea kernels. Available in organic and conventional grades, packed in 30 kg export cartons for international buyers in cosmetics, personal care, food and industrial sectors.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-7">
                  {[
                    { k: "Grade", v: "A / B available" },
                    { k: "Packaging", v: "30 kg cartons" },
                    { k: "Organic", v: "Available" },
                    { k: "Export", v: "International" },
                  ].map(({ k, v }) => (
                    <div key={k} className="bg-[#F4EFE6] px-4 py-3">
                      <div className="text-[10px] uppercase tracking-wider text-[#9B9180] mb-0.5">{k}</div>
                      <div className="text-[13px] font-medium text-[#1A1A18]">{v}</div>
                    </div>
                  ))}
                </div>
                <Link to="/products/shea-butter" className="inline-flex items-center gap-2 bg-[#2C4A3E] text-white px-6 py-3 text-[13px] font-medium hover:bg-[#1f3529] transition-colors">
                  Full Product Details
                  <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              </div>
            </div>

            {/* Shea Nuts Card */}
            <div className="group overflow-hidden border border-[#D6CABB] hover:border-[#2C4A3E] transition-colors">
              <div className="relative h-80 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1600189020840-e9918c25269d?w=800&h=600&fit=crop&auto=format" alt="Raw shea nuts" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A18]/60 to-transparent" />
                <span className="absolute top-4 left-4 bg-[#B8860B] text-white text-[10px] uppercase tracking-widest px-3 py-1.5">Raw Commodity</span>
              </div>
              <div className="p-10">
                <h2 className="font-serif text-3xl text-[#1A1A18] mb-3">Shea Nuts (Kernels)</h2>
                <p className="text-[14px] text-[#6B6356] leading-relaxed mb-6">
                  High-quality raw shea nuts sourced from Ghana's northern shea-producing communities. Suitable for shea butter production, commodity trading, and industrial processing operations.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-7">
                  {[
                    { k: "Type", v: "Raw / Dried" },
                    { k: "Origin", v: "Ghana" },
                    { k: "Supply", v: "Bulk" },
                    { k: "Export", v: "International" },
                  ].map(({ k, v }) => (
                    <div key={k} className="bg-[#F4EFE6] px-4 py-3">
                      <div className="text-[10px] uppercase tracking-wider text-[#9B9180] mb-0.5">{k}</div>
                      <div className="text-[13px] font-medium text-[#1A1A18]">{v}</div>
                    </div>
                  ))}
                </div>
                <Link to="/products/shea-nuts" className="inline-flex items-center gap-2 bg-[#2C4A3E] text-white px-6 py-3 text-[13px] font-medium hover:bg-[#1f3529] transition-colors">
                  Full Product Details
                  <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F4EFE6]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl text-[#1A1A18] mb-4">Looking for product specifications or samples?</h2>
          <p className="text-[15px] text-[#6B6356] mb-8">Contact our team to request detailed product information, certificates of analysis or to discuss your specific requirements.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/request-a-quote" className="bg-[#2C4A3E] text-white px-7 py-3.5 text-[14px] font-medium hover:bg-[#1f3529] transition-colors">Request a Quote</Link>
            <Link to="/contact" className="border border-[#D6CABB] text-[#1A1A18] px-7 py-3.5 text-[14px] font-medium hover:border-[#2C4A3E] transition-colors">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
