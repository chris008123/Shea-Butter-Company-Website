import { Link } from "react-router";

export default function SheaNuts() {
  const specs = [
    { k: "Product", v: "Shea Nuts (Kernels)" },
    { k: "Origin", v: "Ghana, West Africa" },
    { k: "Type", v: "Raw / Dried" },
    { k: "Grade", v: "A / Commodity" },
    { k: "Supply", v: "Bulk" },
    { k: "Min. Order", v: "Subject to confirmation" },
    { k: "Export", v: "International" },
    { k: "Moisture", v: "Per buyer specification" },
    { k: "Storage", v: "Dry, ventilated conditions" },
    { k: "Shipping", v: "Sea freight" },
  ];

  return (
    <div className="bg-[#FAF8F3]">
      <section className="relative pt-36 pb-24 bg-[#1A1A18]">
        <div className="absolute inset-0 opacity-25">
          <img src="https://images.unsplash.com/photo-1600189020840-e9918c25269d?w=1400&h=700&fit=crop&auto=format" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-[12px] text-white/40 mb-6">
            <Link to="/products" className="hover:text-white/70 transition-colors">Products</Link>
            <span className="mx-2">/</span>
            <span className="text-white/70">Shea Nuts</span>
          </div>
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-[#B8860B]" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#B8860B]">Product</span>
          </div>
          <h1 className="font-serif text-5xl lg:text-7xl text-white max-w-2xl leading-tight">Shea Nuts (Kernels)</h1>
          <p className="text-[16px] text-white/60 max-w-lg mt-5">High-quality raw shea nuts sourced from Ghana's shea-producing communities for processing, trading and industrial use.</p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link to="/request-a-quote" className="bg-[#B8860B] text-white px-7 py-3.5 text-[14px] font-medium hover:bg-[#9A7209] transition-colors">Request a Quote</Link>
            <Link to="/contact" className="border border-white/30 text-white px-7 py-3.5 text-[14px] font-medium hover:bg-white/10 transition-colors">Request Product Information</Link>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="font-serif text-3xl text-[#1A1A18] mb-5">Product Overview</h2>
                <p className="text-[15px] text-[#6B6356] leading-relaxed mb-4">
                  Shea nuts — the dried kernels of the shea fruit — are the raw material from which shea butter is produced. We source these directly from communities in Ghana's northern regions, where the shea parklands have sustained livelihoods for generations.
                </p>
                <p className="text-[15px] text-[#6B6356] leading-relaxed">
                  Our shea nuts are available in bulk quantities for buyers engaged in shea butter production, commodity trading, or industrial processing. We work to provide consistent quality with appropriate documentation for international shipment.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-[#1A1A18] mb-5">Typical Uses</h2>
                <div className="grid grid-cols-2 gap-3">
                  {["Shea butter production", "Industrial processing", "Commodity trading", "Ingredient manufacture", "Bulk export", "Research & development"].map(app => (
                    <div key={app} className="bg-[#F4EFE6] px-4 py-3 text-[13px] text-[#4A4540]">{app}</div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-[#1A1A18] mb-5">Quality & Grading</h2>
                <div className="border border-[#D6CABB] p-6">
                  <p className="text-[14px] text-[#6B6356] leading-relaxed">
                    Shea nuts are graded based on moisture content, fat content, and physical characteristics. Detailed grade specifications and quality parameters are available upon request. Our team works with buyers to match the appropriate grade to their processing requirements.
                  </p>
                </div>
              </div>

              <div className="bg-[#2C4A3E] p-8">
                <h2 className="font-serif text-2xl text-white mb-3">Enquire about shea nuts</h2>
                <p className="text-[14px] text-white/60 mb-6">Let us know your quantity, destination and quality requirements and our team will follow up with product information and pricing guidance.</p>
                <div className="flex flex-wrap gap-3">
                  <Link to="/request-a-quote" className="bg-[#B8860B] text-white px-6 py-3 text-[13px] font-medium hover:bg-[#9A7209] transition-colors">Request a Quote</Link>
                  <Link to="/contact" className="border border-white/30 text-white px-6 py-3 text-[13px] font-medium hover:bg-white/10 transition-colors">Contact Our Team</Link>
                </div>
              </div>
            </div>

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
                <Link to="/products/shea-butter" className="flex items-center gap-3 group">
                  <div className="w-14 h-14 bg-[#EDE4D3] overflow-hidden flex-shrink-0">
                    <img src="https://images.unsplash.com/photo-1573812461383-e5f8b759d12e?w=100&h=100&fit=crop&auto=format" alt="Shea butter" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="text-[13px] font-medium text-[#1A1A18] group-hover:text-[#2C4A3E] transition-colors">Unrefined Shea Butter</div>
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
