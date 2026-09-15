import { Link } from "react-router";

export default function Sustainability() {
  return (
    <div className="bg-[#FAF8F3]">
      {/* Hero */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1611418612389-3e442c6c8a26?w=1400&h=700&fit=crop&auto=format" alt="African savanna landscape" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#1A1A18]/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-[#B8860B]" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#B8860B]">Sustainability</span>
          </div>
          <h1 className="font-serif text-5xl lg:text-7xl text-white max-w-2xl leading-tight mb-6">
            Sourcing that creates value beyond the product.
          </h1>
          <p className="text-[16px] text-white/70 max-w-lg leading-relaxed">
            Our commitment to responsible sourcing extends beyond quality control. It shapes how we work with communities, how we think about the environment, and how we build long-term supply chains.
          </p>
        </div>
      </section>

      {/* Responsible Sourcing */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-[#B8860B]" />
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#B8860B]">Responsible Sourcing</span>
              </div>
              <h2 className="font-serif text-4xl text-[#1A1A18] mb-6">Ethical procurement at the source.</h2>
              <p className="text-[15px] text-[#6B6356] leading-relaxed mb-5">
                Responsible sourcing means ensuring that the communities who provide the foundation of our supply are treated fairly and that our commercial activities contribute positively to their lives.
              </p>
              <p className="text-[15px] text-[#6B6356] leading-relaxed">
                We work toward fair trade principles in our sourcing relationships — seeking transparency in pricing and building sourcing networks that create genuine economic value at the community level.
              </p>
            </div>
            <div className="relative h-[420px]">
              <img src="https://images.unsplash.com/photo-1665904285523-47c0a6fdfc0e?w=800&h=700&fit=crop&auto=format" alt="Baskets of shea produce" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Women Empowerment */}
          <div className="bg-[#F4EFE6] p-10 lg:p-14 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-80">
                <img src="https://images.unsplash.com/photo-1650812317207-ea1d1bb24594?w=800&h=600&fit=crop&auto=format" alt="Women working in Ghana" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-8 h-px bg-[#B8860B]" />
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#B8860B]">Women & Community</span>
                </div>
                <h2 className="font-serif text-3xl text-[#1A1A18] mb-5">Empowering the people behind the supply chain.</h2>
                <p className="text-[14px] text-[#6B6356] leading-relaxed mb-4">
                  Women are the backbone of the shea value chain across West Africa. From collection to processing, their knowledge, labour and organisation make shea production possible. We believe that supply chains which recognise and support this contribution create stronger, more resilient systems for everyone.
                </p>
                <p className="text-[14px] text-[#6B6356] leading-relaxed">
                  Our sourcing model seeks to reinforce — not undermine — the role of women in shea production, ensuring that commercial growth translates into expanded economic opportunity at the community level.
                </p>
              </div>
            </div>
          </div>

          {/* Environment */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="w-8 h-px bg-[#B8860B]" />
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#B8860B]">Environment</span>
                <span className="w-8 h-px bg-[#B8860B]" />
              </div>
              <h2 className="font-serif text-4xl text-[#1A1A18] mb-4">Protecting the shea ecosystem.</h2>
              <p className="text-[15px] text-[#6B6356] max-w-lg mx-auto">
                Shea trees grow naturally across the West African savanna belt. These parklands are the foundation of the entire shea industry — and their protection is essential for sustainable long-term supply.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Natural Parklands", desc: "Shea trees are not cultivated at scale — they grow across naturally occurring parkland ecosystems in northern Ghana and the wider West African belt." },
                { title: "Long-Term Viability", desc: "Responsible harvesting practices protect the long-term productivity of shea parklands and ensure supply for future generations." },
                { title: "Rural Livelihoods", desc: "Shea trees have sustained rural communities for centuries. Protecting parklands means protecting the livelihoods tied to them." },
              ].map(item => (
                <div key={item.title} className="border border-[#D6CABB] p-7">
                  <div className="w-8 h-px bg-[#B8860B] mb-5" />
                  <h3 className="font-serif text-xl text-[#1A1A18] mb-3">{item.title}</h3>
                  <p className="text-[13px] text-[#6B6356] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Journey */}
          <div className="bg-[#2C4A3E] p-10">
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl text-white mb-3">Tree to community to world.</h2>
              <p className="text-[14px] text-white/60">A connected chain of value, from the shea tree to the end buyer.</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {["🌳 Tree", "🌰 Nut", "🫙 Butter", "📦 Product", "🌍 Community"].map((step, i) => (
                <div key={step} className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="w-14 h-14 rounded-full bg-[#3d6355] flex items-center justify-center text-xl mb-2">{step.split(" ")[0]}</div>
                    <div className="text-[11px] text-white/60">{step.split(" ")[1]}</div>
                  </div>
                  {i < 4 && <div className="text-[#B8860B] text-xl hidden sm:block">→</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#F4EFE6]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl text-[#1A1A18] mb-4">Interested in our responsible sourcing approach?</h2>
          <p className="text-[15px] text-[#6B6356] mb-8">Talk to our team about our sourcing practices, certification status and sustainability commitments.</p>
          <Link to="/contact" className="inline-block bg-[#2C4A3E] text-white px-7 py-3.5 text-[14px] font-medium hover:bg-[#1f3529] transition-colors">Contact Our Team</Link>
        </div>
      </section>
    </div>
  );
}
