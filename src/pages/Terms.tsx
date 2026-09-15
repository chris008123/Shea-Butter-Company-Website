export default function Terms() {
  return (
    <div className="bg-[#FAF8F3]">
      <section className="pt-36 pb-12 bg-[#1A1A18]">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-serif text-4xl text-white">Terms of Use</h1>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-[11px] uppercase tracking-widest text-[#B8860B] mb-8">Last updated: September 2026</div>
          {[
            { h: "1. Use of this Website", p: "This website is operated by Afri Shea Ltd. By accessing or using this website, you agree to these terms of use. The content of this website is for general information purposes." },
            { h: "2. Intellectual Property", p: "All content on this website, including text, images and design, is the property of Afri Shea Ltd or used with appropriate permission. You may not reproduce or distribute content without prior written consent." },
            { h: "3. Accuracy of Information", p: "We make every effort to ensure information on this website is accurate and up to date. Product specifications, pricing and availability are subject to change. Confirmed details are provided through direct business communication." },
            { h: "4. Limitation of Liability", p: "Afri Shea Ltd accepts no liability for any loss or damage arising from your use of this website or reliance on information contained within it." },
            { h: "5. Governing Law", p: "These terms are governed by the laws of the Republic of Ghana. Any disputes arising from use of this website shall be subject to the jurisdiction of Ghanaian courts." },
            { h: "6. Changes to These Terms", p: "We reserve the right to update these terms at any time. Continued use of the website after changes constitutes acceptance of the updated terms." },
          ].map(item => (
            <div key={item.h} className="mb-8">
              <h2 className="font-serif text-xl text-[#1A1A18] mb-3">{item.h}</h2>
              <p className="text-[15px] text-[#6B6356] leading-relaxed">{item.p}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
