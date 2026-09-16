import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}

function RevealSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, visible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

const supplyChainSteps = [
  { icon: "🌳", label: "Shea Parklands", desc: "Northern Ghana" },
  { icon: "🧺", label: "Community Collection", desc: "Women-led sourcing" },
  { icon: "✅", label: "Quality Selection", desc: "Grading & sorting" },
  { icon: "⚙️", label: "Processing", desc: "Careful extraction" },
  { icon: "🫙", label: "Shea Butter", desc: "Unrefined output" },
  { icon: "🔬", label: "Quality Control", desc: "Standards assurance" },
  { icon: "📦", label: "Packaging", desc: "Export-ready format" },
  { icon: "🏭", label: "Warehousing", desc: "Secure storage" },
  { icon: "🚢", label: "Logistics", desc: "International freight" },
  { icon: "🌍", label: "Destination", desc: "Global buyers" },
];

const industries = [
  { title: "Cosmetics", desc: "Shea butter for creams, lotions, balms and skincare formulations.", img: "photo-1614267861476-0d129972a0f4" },
  { title: "Personal Care", desc: "Haircare, body care and natural beauty product applications.", img: "photo-1629380108574-40c083555579" },
  { title: "Soap Manufacturing", desc: "Natural fat used in soap formulation and bar soap production.", img: "photo-1573812461383-e5f8b759d12e" },
  { title: "Food & Confectionery", desc: "Food-grade applications where appropriate and certified.", img: "photo-1542990253-a781e04c0082" },
  { title: "Ingredient Supply", desc: "Bulk raw material supply for manufacturers and formulators.", img: "photo-1600189020840-e9918c25269d" },
  { title: "Commodity Trading", desc: "Supply to distributors, traders and commodity companies.", img: "photo-1494412519320-aa613dfb7738" },
];

const whyChooseUs = [
  { title: "Ghanaian Origin", desc: "Sourced directly from the shea-producing regions of northern Ghana, where the finest shea parklands grow." },
  { title: "Reliable Supply", desc: "Built around dependable sourcing networks and bulk procurement capacity to serve industrial buyers." },
  { title: "Traceability", desc: "Visibility across the supply chain from community collection through to international shipment." },
  { title: "Quality Focus", desc: "Careful handling, processing and quality control throughout each stage of production." },
  { title: "Export Capability", desc: "Prepared to serve international customers across key global markets with appropriate documentation." },
  { title: "Responsible Sourcing", desc: "Supporting communities and protecting the shea ecosystem through ethical procurement practices." },
];

export default function Home() {
  const [activeStep, setActiveStep] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActiveStep(s => (s + 1) % supplyChainSteps.length), 1800);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="bg-[#FAF8F3]">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="https://images.unsplash.com/photo-1535940360221-641a69c43bac?w=1920&h=1080&fit=crop&auto=format"
            className="w-full h-full object-cover"
          >
            <source src="/videos/shea-Andrew.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A18]/75 via-[#1A1A18]/30 via-40% to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A18]/40 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 flex justify-start">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 mb-8">
              <span className="w-8 h-px bg-[#B8860B]" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#B8860B] font-medium">Ghana · West Africa</span>
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.1] mb-6">
              Premium Shea<br />
              <em className="not-italic text-[#D4A843]">from West Africa,</em><br />
              Sourced with Purpose.
            </h1>
            <p className="text-[16px] text-white/80 leading-relaxed mb-10 max-w-lg">
              We source and supply high-quality unrefined shea butter and shea nuts from Ghana, connecting responsible West African sourcing with international markets.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/request-a-quote"
                className="inline-flex items-center gap-2 bg-[#B8860B] text-white px-7 py-3.5 text-[14px] font-medium tracking-wide hover:bg-[#9A7209] transition-colors"
              >
                Request a Quote
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 border border-white/40 text-white px-7 py-3.5 text-[14px] font-medium hover:bg-white/10 transition-colors"
              >
                Explore Our Products
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-4 mt-12">
              {["Bulk Supply", "Organic Options", "International Export", "Traceable Sourcing"].map((tag) => (
                <span key={tag} className="text-[11px] text-white/60 border border-white/20 px-3 py-1.5 uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-widest text-white/40">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-[#2C4A3E] py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: "Quality Assured", sub: "Certifications available on request" },
              { label: "Traceable Supply", sub: "From parkland to destination" },
              { label: "Export Ready", sub: "International documentation" },
              { label: "Responsible Sourcing", sub: "Ethical & sustainable" },
            ].map((item) => (
              <div key={item.label} className="px-4">
                <div className="text-[12px] uppercase tracking-[0.15em] text-[#B8860B] font-medium mb-1">{item.label}</div>
                <div className="text-[12px] text-white/50">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPANY INTRO */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <RevealSection>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/5208267/pexels-photo-5208267.jpeg"
                  alt="Baskets of shea nuts from Ghana"
                  className="w-full h-[520px] object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-[#2C4A3E] text-white p-6 w-48 hidden md:block">
                  <div className="font-serif text-3xl font-bold text-[#B8860B] mb-1">Ghana</div>
                  <div className="text-[11px] uppercase tracking-widest text-white/70">Origin</div>
                </div>
              </div>
            </RevealSection>
            <RevealSection delay={150}>
              <div className="max-w-lg">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-px bg-[#B8860B]" />
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#B8860B] font-medium">About Us</span>
                </div>
                <h2 className="font-serif text-4xl lg:text-5xl text-[#1A1A18] leading-tight mb-6">
                  From the shea parklands of Ghana to global markets.
                </h2>
                <p className="text-[15px] text-[#6B6356] leading-relaxed mb-5">
                  We operate within the West African shea value chain, supplying international businesses with unrefined shea butter and raw shea nuts directly sourced from the producing communities of northern Ghana.
                </p>
                <p className="text-[15px] text-[#6B6356] leading-relaxed mb-8">
                  Our model is built on direct sourcing, careful quality control, and long-term buyer relationships — giving international manufacturers the reliability and traceability they need from an African commodity supplier.
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-[#2C4A3E] text-[14px] font-medium border-b border-[#2C4A3E] pb-0.5 hover:text-[#B8860B] hover:border-[#B8860B] transition-colors"
                >
                  Discover Our Story
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-24 bg-[#F4EFE6]">
        <div className="max-w-7xl mx-auto px-6">
          <RevealSection>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="w-8 h-px bg-[#B8860B]" />
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#B8860B] font-medium">Products</span>
                <span className="w-8 h-px bg-[#B8860B]" />
              </div>
              <h2 className="font-serif text-4xl lg:text-5xl text-[#1A1A18] mb-4">Our Products</h2>
              <p className="text-[15px] text-[#6B6356] max-w-xl mx-auto">Natural ingredients. Industrial supply. Reliable sourcing.</p>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Shea Butter */}
            <RevealSection delay={100}>
              <div className="bg-white group overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-72 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1573812461383-e5f8b759d12e?w=800&h=600&fit=crop&auto=format"
                    alt="Unrefined shea butter in a jar"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#2C4A3E] text-white text-[10px] uppercase tracking-widest px-3 py-1.5">
                      Flagship Product
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-2xl text-[#1A1A18] mb-3">Unrefined Shea Butter</h3>
                  <p className="text-[14px] text-[#6B6356] leading-relaxed mb-5">
                    Natural, unrefined shea butter produced from carefully sourced shea kernels. Available in organic and conventional grades for cosmetics, skincare, haircare, soap and industrial formulations.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {["Cosmetics", "Skincare", "Haircare", "Soap", "Wellness"].map((tag) => (
                      <span key={tag} className="text-[11px] bg-[#F4EFE6] text-[#6B6356] px-2.5 py-1 uppercase tracking-wide">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    to="/products/shea-butter"
                    className="inline-flex items-center gap-2 text-[#2C4A3E] text-[13px] font-medium border-b border-[#2C4A3E] hover:text-[#B8860B] hover:border-[#B8860B] transition-colors"
                  >
                    Learn About Shea Butter
                    <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </Link>
                </div>
              </div>
            </RevealSection>

            {/* Shea Nuts */}
            <RevealSection delay={200}>
              <div className="bg-white group overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-72 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1600189020840-e9918c25269d?w=800&h=600&fit=crop&auto=format"
                    alt="Raw shea nuts"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#B8860B] text-white text-[10px] uppercase tracking-widest px-3 py-1.5">
                      Raw Commodity
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-2xl text-[#1A1A18] mb-3">Shea Nuts (Kernels)</h3>
                  <p className="text-[14px] text-[#6B6356] leading-relaxed mb-5">
                    High-quality raw shea nuts sourced from Ghana's shea-producing communities. Suitable for shea butter production, commodity trading, and industrial processing.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {["Processing", "Trading", "Industrial", "Export"].map((tag) => (
                      <span key={tag} className="text-[11px] bg-[#F4EFE6] text-[#6B6356] px-2.5 py-1 uppercase tracking-wide">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    to="/products/shea-nuts"
                    className="inline-flex items-center gap-2 text-[#2C4A3E] text-[13px] font-medium border-b border-[#2C4A3E] hover:text-[#B8860B] hover:border-[#B8860B] transition-colors"
                  >
                    Learn About Shea Nuts
                    <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </Link>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <RevealSection>
            <div className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-[#B8860B]" />
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#B8860B] font-medium">Industries Served</span>
              </div>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <h2 className="font-serif text-4xl lg:text-5xl text-[#1A1A18] max-w-md">Who we supply</h2>
                <p className="text-[14px] text-[#6B6356] max-w-sm">Serving manufacturers, traders and distributors across multiple industry sectors.</p>
              </div>
            </div>
          </RevealSection>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-[#D6CABB]">
            {industries.map((ind, i) => (
              <RevealSection key={ind.title} delay={i * 60}>
                <div className="bg-[#FAF8F3] p-7 hover:bg-white transition-colors group h-full">
                  <div className="w-full h-36 mb-5 overflow-hidden bg-[#EDE4D3]">
                    <img
                      src={`https://images.unsplash.com/${ind.img}?w=400&h=250&fit=crop&auto=format`}
                      alt={ind.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                    />
                  </div>
                  <h3 className="font-serif text-[17px] text-[#1A1A18] mb-2">{ind.title}</h3>
                  <p className="text-[13px] text-[#6B6356] leading-relaxed">{ind.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-[#2C4A3E]">
        <div className="max-w-7xl mx-auto px-6">
          <RevealSection>
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="w-8 h-px bg-[#B8860B]" />
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#B8860B] font-medium">Why Choose Us</span>
                <span className="w-8 h-px bg-[#B8860B]" />
              </div>
              <h2 className="font-serif text-4xl lg:text-5xl text-white mb-4">Why businesses choose us</h2>
              <p className="text-[15px] text-white/60 max-w-md mx-auto">Our approach to sourcing, quality and supply sets us apart as a reliable West African commodity partner.</p>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, i) => (
              <RevealSection key={item.title} delay={i * 80}>
                <div className="border border-[#3d6355] p-7 hover:border-[#B8860B] transition-colors group">
                  <div className="w-8 h-px bg-[#B8860B] mb-5" />
                  <h3 className="font-serif text-xl text-white mb-3">{item.title}</h3>
                  <p className="text-[13px] text-white/60 leading-relaxed">{item.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPLY CHAIN */}
      <section className="py-24 bg-[#1A1A18]">
        <div className="max-w-7xl mx-auto px-6">
          <RevealSection>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="w-8 h-px bg-[#B8860B]" />
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#B8860B] font-medium">Supply Chain</span>
                <span className="w-8 h-px bg-[#B8860B]" />
              </div>
              <h2 className="font-serif text-4xl lg:text-5xl text-white mb-4">From tree to destination.</h2>
              <p className="text-[15px] text-white/50 max-w-md mx-auto">We understand the complete shea supply chain and manage quality at each stage of the journey.</p>
            </div>
          </RevealSection>

          {/* Desktop: horizontal scroll */}
          <div className="hidden md:flex items-start gap-0 overflow-x-auto pb-4">
            {supplyChainSteps.map((step, i) => (
              <div
                key={step.label}
                className={`flex-shrink-0 flex flex-col items-center text-center transition-all duration-500 cursor-pointer px-4 ${
                  activeStep === i ? "opacity-100" : "opacity-40"
                }`}
                onClick={() => setActiveStep(i)}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl mb-3 transition-colors ${
                  activeStep === i ? "bg-[#B8860B]" : "bg-[#2C2C2A]"
                }`}>
                  {step.icon}
                </div>
                <div className="text-[12px] font-medium text-white mb-1 whitespace-nowrap">{step.label}</div>
                <div className="text-[11px] text-white/40">{step.desc}</div>
                {i < supplyChainSteps.length - 1 && (
                  <div className="hidden md:flex items-center absolute">
                    {/* connector handled by layout */}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Connector line for desktop */}
          <div className="hidden md:block relative mt-2">
            <div className="h-px bg-[#2C2C2A] mx-8 relative">
              <div
                className="absolute top-0 left-0 h-full bg-[#B8860B] transition-all duration-500"
                style={{ width: `${(activeStep / (supplyChainSteps.length - 1)) * 100}%` }}
              />
            </div>
          </div>

          {/* Mobile: vertical */}
          <div className="md:hidden space-y-4">
            {supplyChainSteps.map((step, i) => (
              <div key={step.label} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#2C4A3E] flex items-center justify-center text-lg flex-shrink-0">
                  {step.icon}
                </div>
                <div>
                  <div className="text-[13px] font-medium text-white">{step.label}</div>
                  <div className="text-[12px] text-white/40">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BULK SUPPLY */}
      <section className="py-24 bg-[#F4EFE6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <RevealSection>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-[#B8860B]" />
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#B8860B] font-medium">Supply Capacity</span>
              </div>
              <h2 className="font-serif text-4xl lg:text-5xl text-[#1A1A18] mb-6">Built for bulk supply.</h2>
              <p className="text-[15px] text-[#6B6356] leading-relaxed mb-10">
                We specialize in industrial quantities for international buyers — cosmetics manufacturers, ingredient distributors, commodity traders and food processors who need reliable, consistent supply at scale.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#2C4A3E] text-white px-7 py-3.5 text-[14px] font-medium hover:bg-[#1f3529] transition-colors"
              >
                Discuss Your Requirements
              </Link>
            </RevealSection>
            <RevealSection delay={150}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { metric: "1.2 MT", label: "Minimum Order", note: "Subject to confirmation" },
                  { metric: "30 kg", label: "Standard Carton", note: "Export packaging" },
                  { metric: "Sea & Air", label: "Shipping", note: "International freight" },
                  { metric: "Global", label: "Markets Served", note: "Key international regions" },
                ].map((item) => (
                  <div key={item.label} className="bg-white p-6 border border-[#D6CABB]">
                    <div className="font-serif text-3xl text-[#2C4A3E] mb-1">{item.metric}</div>
                    <div className="text-[13px] font-medium text-[#1A1A18] mb-1">{item.label}</div>
                    <div className="text-[11px] text-[#9B9180]">{item.note}</div>
                  </div>
                ))}
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* INTERNATIONAL LOGISTICS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <RevealSection>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-px bg-[#B8860B]" />
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#B8860B] font-medium">Logistics</span>
                </div>
                <h2 className="font-serif text-4xl text-[#1A1A18] mb-5">From Ghana to your destination.</h2>
                <p className="text-[14px] text-[#6B6356] leading-relaxed">
                  We work to facilitate international shipments from Ghana to buyer destinations, with documentation support and flexible shipping arrangements based on buyer requirements.
                </p>
              </div>
              <div className="lg:col-span-2 grid grid-cols-2 gap-4">
                {[
                  { title: "Sea Freight", desc: "Large-volume shipments via ocean freight from Ghanaian ports.", icon: "🚢" },
                  { title: "Air Freight", desc: "Urgent or smaller shipments where air freight is appropriate.", icon: "✈️" },
                  { title: "FCL", desc: "Full container loads for large international buyers.", icon: "📦" },
                  { title: "Documentation", desc: "Export documentation, certificates and shipping support.", icon: "📋" },
                ].map((item) => (
                  <div key={item.title} className="border border-[#D6CABB] p-6 hover:border-[#2C4A3E] transition-colors">
                    <div className="text-2xl mb-4">{item.icon}</div>
                    <h3 className="font-medium text-[15px] text-[#1A1A18] mb-2">{item.title}</h3>
                    <p className="text-[13px] text-[#6B6356] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </RevealSection>
          <RevealSection delay={200}>
            <div className="mt-12 relative h-56 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=1400&h=400&fit=crop&auto=format"
                alt="Aerial view of shipping container port"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#2C4A3E]/60 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="font-serif text-2xl mb-2">Serving international buyers across key global markets.</div>
                  <div className="text-[13px] text-white/70">Europe · North America · Middle East · Global</div>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* SUSTAINABILITY */}
      <section className="py-24 bg-[#2C4A3E] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1611418612389-3e442c6c8a26?w=1400&h=600&fit=crop&auto=format"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <RevealSection>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-[#B8860B]" />
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#B8860B] font-medium">Sustainability</span>
              </div>
              <h2 className="font-serif text-4xl lg:text-5xl text-white mb-6">
                Sourcing that creates value beyond the product.
              </h2>
              <p className="text-[15px] text-white/70 leading-relaxed mb-8">
                Our sourcing model is built around responsible practices that support women-led communities in Ghana's shea-producing regions, protect the long-term viability of shea parklands, and contribute to fair economic outcomes at the source.
              </p>
              <Link
                to="/sustainability"
                className="inline-flex items-center gap-2 border border-[#B8860B] text-[#B8860B] px-6 py-3 text-[13px] font-medium hover:bg-[#B8860B] hover:text-white transition-colors"
              >
                Our Commitment to Sustainability
                <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </RevealSection>
            <RevealSection delay={150}>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { title: "Women's Empowerment", desc: "The shea value chain is built on the labour of women in producing communities — we source in ways that recognise and support this." },
                  { title: "Environmental Stewardship", desc: "Shea trees grow naturally across West Africa. Responsible harvesting protects these ecosystems for future generations." },
                  { title: "Community Value", desc: "Our sourcing model aims to create equitable economic value for the rural communities at the heart of shea production." },
                ].map((item) => (
                  <div key={item.title} className="bg-white/8 border border-white/10 p-6">
                    <h3 className="font-serif text-[17px] text-white mb-2">{item.title}</h3>
                    <p className="text-[13px] text-white/60 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* INSIGHTS PREVIEW */}
      <section className="py-24 bg-[#FAF8F3]">
        <div className="max-w-7xl mx-auto px-6">
          <RevealSection>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-px bg-[#B8860B]" />
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#B8860B] font-medium">Insights</span>
                </div>
                <h2 className="font-serif text-4xl text-[#1A1A18]">Industry perspectives</h2>
              </div>
              <Link to="/insights" className="text-[13px] text-[#2C4A3E] font-medium border-b border-[#2C4A3E] pb-0.5 hover:text-[#B8860B] hover:border-[#B8860B] transition-colors whitespace-nowrap">
                All Articles →
              </Link>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Understanding Ghana's Shea Value Chain", cat: "Supply Chain", date: "August 2026", img: "photo-1665904285523-47c0a6fdfc0e", excerpt: "An overview of how shea moves from Ghana's parklands to international markets." },
              { title: "The Role of Women in West Africa's Shea Industry", cat: "Community", date: "July 2026", img: "photo-1650812317207-ea1d1bb24594", excerpt: "Women are the backbone of shea collection and processing across West Africa." },
              { title: "Why Shea Parklands Matter for Sustainable Supply", cat: "Sustainability", date: "June 2026", img: "photo-1611418612389-3e442c6c8a26", excerpt: "Protecting shea tree landscapes is essential for long-term commodity viability." },
            ].map((article, i) => (
              <RevealSection key={article.title} delay={i * 80}>
                <Link to="/insights" className="group block">
                  <div className="overflow-hidden mb-5 h-52 bg-[#EDE4D3]">
                    <img
                      src={`https://images.unsplash.com/${article.img}?w=600&h=400&fit=crop&auto=format`}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[10px] uppercase tracking-widest text-[#B8860B] font-medium">{article.cat}</span>
                    <span className="text-[10px] text-[#9B9180]">{article.date}</span>
                  </div>
                  <h3 className="font-serif text-[18px] text-[#1A1A18] mb-2 group-hover:text-[#2C4A3E] transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-[13px] text-[#6B6356] leading-relaxed">{article.excerpt}</p>
                </Link>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1663919402819-afebaad0849a?w=1400&h=700&fit=crop&auto=format"
            alt="Shea processing in Ghana"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1A1A18]/80" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <RevealSection>
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-px bg-[#B8860B]" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#B8860B] font-medium">Start a Conversation</span>
              <span className="w-8 h-px bg-[#B8860B]" />
            </div>
            <h2 className="font-serif text-4xl lg:text-6xl text-white mb-6">
              Looking for a reliable shea supplier from Ghana?
            </h2>
            <p className="text-[16px] text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
              Tell us what you need. Whether you're sourcing shea butter, shea nuts, or developing a long-term supply relationship, our team is ready to discuss your requirements.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/request-a-quote"
                className="bg-[#B8860B] text-white px-8 py-4 text-[14px] font-medium tracking-wide hover:bg-[#9A7209] transition-colors"
              >
                Request a Quote
              </Link>
              <Link
                to="/contact"
                className="border border-white/30 text-white px-8 py-4 text-[14px] font-medium hover:bg-white/10 transition-colors"
              >
                Contact Our Team
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>
    </div>
  );
}
