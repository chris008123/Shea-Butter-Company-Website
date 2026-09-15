import { Link, useParams } from "react-router";

const articleData: Record<string, { title: string; cat: string; date: string; img: string; readTime: string; body: string[] }> = {
  "ghana-shea-value-chain": {
    title: "Understanding Ghana's Shea Value Chain",
    cat: "Supply Chain",
    date: "August 2026",
    img: "photo-1665904285523-47c0a6fdfc0e",
    readTime: "7 min read",
    body: [
      "Ghana is one of West Africa's most significant shea-producing nations. The country's northern regions — stretching across the Upper East, Upper West and Northern regions — lie within the shea belt, a broad band of territory across the sub-Saharan savanna where shea trees grow naturally.",
      "The shea value chain begins with the shea tree itself, a slow-growing species that can take up to 20 years to reach maturity and may produce fruit for several decades thereafter. This long lifecycle gives shea its particular character as a commodity: supply is not easily or quickly expanded, and the existing parklands are the foundation of the entire industry.",
      "Collection of shea fruit is typically done by women from rural communities during the fruiting season. The fruit pulp is consumed locally, and the nuts — the kernels from which shea butter is extracted — are dried and processed. This collection activity represents a major source of income for millions of women across the region.",
      "From collection, shea nuts move through a series of intermediaries — local traders, regional aggregators, processors and exporters — before reaching international buyers. The length and opacity of this chain has historically made traceability challenging. However, increasing buyer demand for responsible sourcing is driving improvements in documentation and supply chain visibility.",
      "Shea butter production from nuts involves cracking, roasting, grinding and churning the kernels. Traditional processing is labour-intensive and largely done by hand. Industrial processing plants have also emerged, using mechanical extraction to produce shea butter at scale.",
      "For international buyers, understanding this value chain is important when evaluating supplier credibility, quality consistency and social responsibility claims. A supplier who understands and can articulate their position within this chain — and who can speak to sourcing practices, traceability and quality control — is better placed to deliver a reliable, responsible supply.",
    ],
  },
  "women-shea-west-africa": {
    title: "The Role of Women in West Africa's Shea Industry",
    cat: "Community",
    date: "July 2026",
    img: "photo-1650812317207-ea1d1bb24594",
    readTime: "5 min read",
    body: [
      "In communities across the West African shea belt, shea collection and processing has long been women's work. The seasonal rhythms of shea production — from fruit collection in the rains to nut drying and processing — structure the economic calendar for millions of rural women.",
      "This is not simply a matter of tradition. Women's deep familiarity with the shea tree, the fruit and the processing methods represents accumulated knowledge that underpins the entire industry. Their skill in identifying quality nuts, processing butter with the right texture and fat content, and managing seasonal production cycles is economically significant.",
      "Income from shea collection provides women with a degree of financial independence, supporting household needs including education, health and food security. In areas where formal employment opportunities for women are limited, shea income can be transformative.",
      "For international buyers, understanding the role of women in shea production is increasingly relevant — not only as a matter of corporate ethics, but as a signal of supply chain quality. Suppliers who work respectfully and equitably with women collectors are more likely to maintain consistent access to high-quality supply.",
      "Supply chain responsibility in shea should therefore include attention to how women are compensated, whether pricing is fair, and whether commercial expansion reinforces or undermines their economic position. Buyers who ask these questions of their suppliers help shift industry incentives in a positive direction.",
    ],
  },
};

// Fallback for articles not in the data
const fallbackArticle = {
  title: "Insights Article",
  cat: "Shea Industry",
  date: "2026",
  img: "photo-1535940360221-641a69c43bac",
  readTime: "6 min read",
  body: [
    "This article explores key topics within the global shea industry, from supply chain dynamics to sustainability and quality considerations.",
    "Shea is one of West Africa's most important agricultural commodities, with a value chain that spans rural communities across the savanna belt to international cosmetics, food and wellness manufacturers.",
    "Our Insights section is regularly updated with analysis and perspectives relevant to buyers, importers and industry professionals working in the shea supply chain.",
  ],
};

export default function Article() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug && articleData[slug] ? articleData[slug] : fallbackArticle;

  return (
    <div className="bg-[#FAF8F3]">
      {/* Hero */}
      <section className="relative pt-36 pb-24 bg-[#1A1A18]">
        <div className="absolute inset-0 opacity-30">
          <img src={`https://images.unsplash.com/${article.img}?w=1400&h=700&fit=crop&auto=format`} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="text-[12px] text-white/40 mb-6">
            <Link to="/insights" className="hover:text-white/70 transition-colors">Insights</Link>
            <span className="mx-2">/</span>
            <span className="text-white/70">{article.cat}</span>
          </div>
          <div className="flex items-center gap-4 mb-5">
            <span className="text-[11px] uppercase tracking-widest text-[#B8860B] font-medium">{article.cat}</span>
            <span className="text-[11px] text-white/40">{article.date}</span>
            <span className="text-[11px] text-white/40">· {article.readTime}</span>
          </div>
          <h1 className="font-serif text-4xl lg:text-6xl text-white leading-tight">{article.title}</h1>
        </div>
      </section>

      {/* Body */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-6 mb-16">
            {article.body.map((para, i) => (
              <p key={i} className={`leading-relaxed text-[#4A4540] ${i === 0 ? "text-[18px] text-[#1A1A18] font-medium" : "text-[16px]"}`}>
                {para}
              </p>
            ))}
          </div>

          <div className="border-t border-[#D6CABB] pt-10">
            <div className="bg-[#2C4A3E] p-8">
              <h3 className="font-serif text-2xl text-white mb-3">Interested in sourcing shea from Ghana?</h3>
              <p className="text-[14px] text-white/60 mb-6">Our team is available to discuss your requirements, whether you are looking for shea butter, shea nuts, or exploring a long-term supply arrangement.</p>
              <div className="flex flex-wrap gap-3">
                <Link to="/request-a-quote" className="bg-[#B8860B] text-white px-6 py-3 text-[13px] font-medium hover:bg-[#9A7209] transition-colors">Request a Quote</Link>
                <Link to="/contact" className="border border-white/30 text-white px-6 py-3 text-[13px] font-medium hover:bg-white/10 transition-colors">Contact Our Team</Link>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <Link to="/insights" className="inline-flex items-center gap-2 text-[13px] text-[#2C4A3E] font-medium hover:text-[#B8860B] transition-colors">
              <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
              Back to Insights
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
