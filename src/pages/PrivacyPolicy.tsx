export default function PrivacyPolicy() {
  return (
    <div className="bg-[#FAF8F3]">
      <section className="pt-36 pb-12 bg-[#1A1A18]">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-serif text-4xl text-white">Privacy Policy</h1>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 prose prose-stone max-w-none">
          <div className="text-[11px] uppercase tracking-widest text-[#B8860B] mb-8">Last updated: September 2026</div>
          {[
            { h: "1. Introduction", p: 'Afri Shea Ltd ("we", "our", or "us") is committed to protecting the personal data we collect from visitors to our website. This policy explains how we collect, use and protect that data.' },
            { h: "2. Data We Collect", p: "We may collect personal data you provide through our contact and enquiry forms, including your name, company name, email address, phone number, country and enquiry details. We also collect technical data through cookies and analytics tools." },
            { h: "3. How We Use Your Data", p: "We use the data you provide to respond to your enquiries, process quote requests, and communicate relevant information about our products and services. We do not sell your data to third parties." },
            { h: "4. Data Retention", p: "We retain personal data only as long as necessary for the purpose it was collected. Enquiry data is retained for a period sufficient to manage the business relationship." },
            { h: "5. Your Rights", p: "You have the right to access, correct or request deletion of personal data we hold about you. To exercise these rights, please contact us at info@afrishea.com." },
            { h: "6. Contact", p: "For questions about this policy or our data practices, please contact: info@afrishea.com." },
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
