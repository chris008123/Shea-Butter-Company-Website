import { Link } from "react-router";

export default function WhatWeDo() {
  return (
    <div className="bg-[#FAF8F3]">
      <section className="relative pt-36 pb-24 bg-[#1A1A18]">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1663919402819-afebaad0849a?w=1400&h=700&fit=crop&auto=format" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-[#B8860B]" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#B8860B]">What We Do</span>
          </div>
          <h1 className="font-serif text-5xl lg:text-7xl text-white max-w-2xl leading-tight">Connecting Ghana's shea to the world.</h1>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-[#B8860B]" />
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#B8860B]">Our Business</span>
              </div>
              <h2 className="font-serif text-4xl text-[#1A1A18] mb-6">We source, process and export Ghana's finest shea.</h2>
              <p className="text-[15px] text-[#6B6356] leading-relaxed mb-5">
                Our core business is the sourcing, processing and international export of unrefined shea butter and raw shea nuts from Ghana's northern shea-producing regions. We operate within the full shea value chain, from community collection through quality control and international logistics.
              </p>
              <p className="text-[15px] text-[#6B6356] leading-relaxed">
                We serve international buyers who need a reliable, quality-conscious West African supplier — cosmetics manufacturers, ingredient distributors, commodity traders and food processors.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { step: "01", title: "Sourcing", desc: "We work with shea-producing communities in northern Ghana to source raw shea nuts through ethical, responsible procurement." },
                { step: "02", title: "Processing", desc: "Shea nuts are processed into unrefined shea butter using methods that preserve natural properties and meet quality standards." },
                { step: "03", title: "Quality Control", desc: "Product is assessed at multiple stages to meet the standards required by international industrial buyers." },
                { step: "04", title: "Packaging", desc: "Export-ready packaging in 30 kg cartons, prepared for international freight requirements." },
                { step: "05", title: "International Export", desc: "Shipments to international buyers via sea freight and air, with documentation support and logistics coordination." },
              ].map(item => (
                <div key={item.step} className="flex gap-6 p-5 border border-[#D6CABB] hover:border-[#2C4A3E] transition-colors">
                  <div className="font-serif text-2xl text-[#B8860B] flex-shrink-0">{item.step}</div>
                  <div>
                    <h3 className="font-medium text-[15px] text-[#1A1A18] mb-1">{item.title}</h3>
                    <p className="text-[13px] text-[#6B6356] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Buyers Section */}
          <div className="bg-[#2C4A3E] p-10 mb-16">
            <h2 className="font-serif text-3xl text-white mb-8">Who we work with</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Cosmetics Manufacturers", "Personal Care Brands", "Soap Manufacturers",
                "Food Companies", "Ingredient Distributors", "Commodity Traders",
                "Importers & Wholesalers", "Natural Product Brands"
              ].map(buyer => (
                <div key={buyer} className="bg-white/8 border border-white/10 px-4 py-3 text-[13px] text-white/80 text-center">{buyer}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F4EFE6]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl text-[#1A1A18] mb-4">Ready to discuss your requirements?</h2>
          <p className="text-[15px] text-[#6B6356] mb-8">Our team is available to discuss product enquiries, export logistics and supply arrangements.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/request-a-quote" className="bg-[#2C4A3E] text-white px-7 py-3.5 text-[14px] font-medium hover:bg-[#1f3529] transition-colors">Request a Quote</Link>
            <Link to="/contact" className="border border-[#D6CABB] text-[#1A1A18] px-7 py-3.5 text-[14px] font-medium hover:border-[#2C4A3E] transition-colors">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
