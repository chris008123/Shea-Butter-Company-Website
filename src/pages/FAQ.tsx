import { useState } from "react";
import { Link } from "react-router";

const faqs = [
  { q: "What products do you supply?", a: "We supply unrefined shea butter and raw shea nuts (kernels), both sourced from Ghana's northern shea-producing regions. Our products are available in bulk quantities for international buyers." },
  { q: "Do you supply organic products?", a: "We offer both organic-certified and conventional grade products. Please enquire directly with our team to confirm organic certification details and availability at the time of your order." },
  { q: "What is your minimum order quantity?", a: "Our minimum order quantity is typically 1.2 MT, subject to confirmation at the time of enquiry. Please contact our team with your specific requirements and we will advise accordingly." },
  { q: "What packaging options are available?", a: "Our standard export packaging is 30 kg cartons. Packaging specifications may be discussed based on buyer requirements — please include your packaging preferences in your enquiry." },
  { q: "Do you ship internationally?", a: "Yes. We facilitate international shipments from Ghana to buyer destinations. Sea freight is our primary shipping method for large volumes. Air freight may be discussed for smaller or urgent shipments." },
  { q: "Which countries do you ship to?", a: "We serve international buyers across key global markets including Europe, North America and the Middle East. Please contact us with your destination and we will advise on logistics arrangements." },
  { q: "How can I request a quotation?", a: "You can request a quote by completing our online quote form, or by contacting us directly by email or phone. Please include your product type, quantity, destination and any specific requirements." },
  { q: "What information should I provide when requesting a quotation?", a: "For an accurate quotation, please provide: the product required (shea butter or shea nuts), quantity and unit, destination country, preferred shipping method, required delivery date, packaging requirements, and whether you need organic or conventional product." },
  { q: "What is the shelf life of your products?", a: "Unrefined shea butter typically has a shelf life of 24 months when stored correctly in cool, dry conditions. Detailed shelf life information specific to your shipment is available upon request." },
  { q: "Can you provide product specifications?", a: "Yes. Product specification sheets and certificates of analysis are available upon request. Please contact our team with details of your requirements." },
  { q: "What documentation do you provide?", a: "We can provide documentation including certificate of analysis, organic certification (where applicable), product specification sheets, origin documentation and export documentation. Requirements may vary — please discuss with our team." },
  { q: "Do you offer samples?", a: "Sample availability is subject to confirmation. Please contact our team to enquire about sampling arrangements for your evaluation." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="bg-[#FAF8F3]">
      <section className="pt-36 pb-16 bg-[#1A1A18]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-[#B8860B]" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#B8860B]">FAQ</span>
          </div>
          <h1 className="font-serif text-5xl lg:text-7xl text-white max-w-xl leading-tight">Frequently asked questions.</h1>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-[#D6CABB] overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-[#F4EFE6] transition-colors"
                >
                  <span className="font-medium text-[15px] text-[#1A1A18]">{faq.q}</span>
                  <svg
                    width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                    className={`flex-shrink-0 text-[#B8860B] transition-transform ${open === i ? "rotate-180" : ""}`}
                  >
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </button>
                {open === i && (
                  <div className="px-6 pb-5 text-[14px] text-[#6B6356] leading-relaxed border-t border-[#D6CABB] pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 bg-[#2C4A3E] p-8 text-center">
            <h3 className="font-serif text-2xl text-white mb-3">Have a question not answered here?</h3>
            <p className="text-[14px] text-white/60 mb-6">Our team is happy to answer any specific questions about our products, sourcing and export capabilities.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="bg-[#B8860B] text-white px-6 py-3 text-[13px] font-medium hover:bg-[#9A7209] transition-colors">Contact Us</Link>
              <Link to="/request-a-quote" className="border border-white/30 text-white px-6 py-3 text-[13px] font-medium hover:bg-white/10 transition-colors">Request a Quote</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
