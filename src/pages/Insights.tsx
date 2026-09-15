import { useState } from "react";
import { Link } from "react-router";

const articles = [
  { slug: "ghana-shea-value-chain", title: "Understanding Ghana's Shea Value Chain", cat: "Supply Chain", date: "August 2026", img: "photo-1665904285523-47c0a6fdfc0e", excerpt: "A comprehensive overview of how shea moves from Ghana's parklands to international markets, and the key actors involved at each stage.", readTime: "7 min read" },
  { slug: "women-shea-west-africa", title: "The Role of Women in West Africa's Shea Industry", cat: "Community", date: "July 2026", img: "photo-1650812317207-ea1d1bb24594", excerpt: "Women are the backbone of shea collection and processing across West Africa. This piece explores their contribution and why it matters for buyers.", readTime: "5 min read" },
  { slug: "shea-parklands-matter", title: "Why Shea Parklands Matter for Sustainable Supply", cat: "Sustainability", date: "June 2026", img: "photo-1611418612389-3e442c6c8a26", excerpt: "Protecting shea tree landscapes is essential for long-term commodity viability. An examination of the ecological importance of the shea belt.", readTime: "6 min read" },
  { slug: "shea-nut-to-butter", title: "From Shea Nut to Unrefined Shea Butter", cat: "Shea Industry", date: "May 2026", img: "photo-1573812461383-e5f8b759d12e", excerpt: "A step-by-step guide to how unrefined shea butter is produced from raw shea kernels — what buyers need to know about the process.", readTime: "8 min read" },
  { slug: "sourcing-shea-internationally", title: "How International Buyers Source Shea Butter", cat: "Market Insights", date: "April 2026", img: "photo-1600189020840-e9918c25269d", excerpt: "A guide for procurement managers considering shea butter sourcing from West Africa — what to look for and how to evaluate suppliers.", readTime: "9 min read" },
  { slug: "sustainable-sourcing-shea", title: "Sustainable Sourcing in the Shea Industry", cat: "Sustainability", date: "March 2026", img: "photo-1663919402819-afebaad0849a", excerpt: "What does responsible sourcing actually mean in the context of the shea industry, and how can buyers encourage better practices?", readTime: "6 min read" },
];

const cats = ["All", "Supply Chain", "Community", "Sustainability", "Shea Industry", "Market Insights"];

export default function Insights() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? articles : articles.filter(a => a.cat === active);

  return (
    <div className="bg-[#FAF8F3]">
      <section className="pt-36 pb-16 bg-[#1A1A18]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-[#B8860B]" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#B8860B]">Insights</span>
          </div>
          <h1 className="font-serif text-5xl lg:text-7xl text-white max-w-xl leading-tight mb-6">Industry perspectives.</h1>
          <p className="text-[16px] text-white/60 max-w-lg">Analysis, context and information for buyers and professionals in the shea and natural ingredients industry.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {cats.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`text-[12px] uppercase tracking-widest px-4 py-2 transition-colors ${
                  active === cat
                    ? "bg-[#2C4A3E] text-white"
                    : "border border-[#D6CABB] text-[#6B6356] hover:border-[#2C4A3E] hover:text-[#1A1A18]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map(article => (
              <Link key={article.slug} to={`/insights/${article.slug}`} className="group block">
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
                  <span className="text-[10px] text-[#9B9180]">· {article.readTime}</span>
                </div>
                <h2 className="font-serif text-[19px] text-[#1A1A18] mb-2 group-hover:text-[#2C4A3E] transition-colors leading-snug">{article.title}</h2>
                <p className="text-[13px] text-[#6B6356] leading-relaxed">{article.excerpt}</p>
                <div className="flex items-center gap-2 mt-4 text-[12px] text-[#2C4A3E] font-medium">
                  Read Article
                  <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
