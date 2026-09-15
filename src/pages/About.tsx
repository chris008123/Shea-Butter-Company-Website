import { Link } from "react-router";

export default function About() {
  return (
    <div className="bg-[#FAF8F3]">
      {/* Hero */}
      <section className="relative pt-36 pb-24 bg-[#1A1A18] overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1535940360221-641a69c43bac?w=1400&h=700&fit=crop&auto=format"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-[#B8860B]" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#B8860B]">About Us</span>
          </div>
          <h1 className="font-serif text-5xl lg:text-7xl text-white max-w-2xl leading-tight">
            Rooted in Ghana. Connected to the world.
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-[#B8860B]" />
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#B8860B]">Our Story</span>
              </div>
              <h2 className="font-serif text-4xl text-[#1A1A18] mb-6">Connecting Ghana's shea wealth to the world.</h2>
              <p className="text-[15px] text-[#6B6356] leading-relaxed mb-5">
                Afri Shea operates within the West African shea value chain, sourcing raw shea nuts and producing unrefined shea butter from Ghana's northern shea-producing regions. We work with communities at the heart of production and supply international buyers with reliable, traceable product.
              </p>
              <p className="text-[15px] text-[#6B6356] leading-relaxed mb-5">
                Ghana is one of West Africa's primary shea-producing nations. The shea parklands of the north have supported livelihoods — particularly for women — for generations. Our role is to connect that wealth responsibly with international demand.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1650812317207-ea1d1bb24594?w=800&h=700&fit=crop&auto=format"
                alt="Women working in the field in Ghana"
                className="w-full h-[480px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-24 bg-[#F4EFE6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { label: "Our Mission", content: "To deliver quality shea products to international buyers while creating responsible economic value in Ghana's shea-producing communities." },
              { label: "Our Vision", content: "To become a leading industrial supplier of raw, unrefined shea products from West Africa — known for reliability, traceability and responsible sourcing." },
              { label: "Our Approach", content: "We build long-term buyer relationships grounded in transparency, consistent quality and a genuine commitment to the communities behind our supply chain." },
            ].map((item) => (
              <div key={item.label} className="bg-white p-8 border-t-2 border-[#2C4A3E]">
                <h3 className="font-serif text-xl text-[#1A1A18] mb-4">{item.label}</h3>
                <p className="text-[14px] text-[#6B6356] leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#2C4A3E] p-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-[#B8860B]" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#B8860B]">Our Values</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {["Integrity", "Quality", "Responsibility", "Sustainability", "Partnership", "Transparency"].map((val) => (
                <div key={val} className="text-center">
                  <div className="w-px h-8 bg-[#B8860B] mx-auto mb-3" />
                  <div className="text-[13px] text-white font-medium">{val}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#B8860B]" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#B8860B]">Our Team</span>
          </div>
          <h2 className="font-serif text-4xl text-[#1A1A18] mb-12">The people behind the supply.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Team Member Name", role: "Business Development", bio: "This role focuses on building relationships with international buyers and facilitating new market opportunities for the company." },
              { name: "Team Member Name", role: "Operations & Sourcing", bio: "Responsible for coordinating sourcing activities, quality oversight and logistics across the supply chain." },
              { name: "Team Member Name", role: "Finance & Administration", bio: "Manages financial operations, documentation and administrative functions for export compliance." },
            ].map((member, i) => (
              <div key={i} className="border border-[#D6CABB] p-7">
                <div className="w-full h-52 bg-[#EDE4D3] mb-5 flex items-center justify-center">
                  <div className="text-center text-[#9B9180]">
                    <div className="text-4xl mb-2">👤</div>
                    <div className="text-[11px] uppercase tracking-wider">Photo Placeholder</div>
                  </div>
                </div>
                <h3 className="font-serif text-lg text-[#1A1A18] mb-1">{member.name}</h3>
                <div className="text-[11px] uppercase tracking-widest text-[#B8860B] mb-3">{member.role}</div>
                <p className="text-[13px] text-[#6B6356] leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#2C4A3E]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl text-white mb-4">Ready to discuss a supply arrangement?</h2>
          <p className="text-[15px] text-white/60 mb-8">Contact our team to learn more about our products, sourcing and export capabilities.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/request-a-quote" className="bg-[#B8860B] text-white px-7 py-3.5 text-[14px] font-medium hover:bg-[#9A7209] transition-colors">Request a Quote</Link>
            <Link to="/contact" className="border border-white/30 text-white px-7 py-3.5 text-[14px] font-medium hover:bg-white/10 transition-colors">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
