import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ firstName: "", lastName: "", company: "", email: "", phone: "", country: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handle = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#FAF8F3]">
      <section className="pt-36 pb-16 bg-[#1A1A18]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-[#B8860B]" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#B8860B]">Contact</span>
          </div>
          <h1 className="font-serif text-5xl lg:text-7xl text-white max-w-xl leading-tight">Let's talk about your requirements.</h1>
          <p className="text-[16px] text-white/60 max-w-lg mt-5">Tell us what you need, where you are located, and the quantity you are looking for. Our team will get back to you.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Info */}
            <div>
              <h2 className="font-serif text-2xl text-[#1A1A18] mb-8">Get in touch</h2>
              <div className="space-y-6">
                {[
                  { label: "Address", value: "Accra, Ghana\nWest Africa", icon: "📍" },
                  { label: "Email", value: "info@afrishea.com", icon: "✉️" },
                  { label: "Phone", value: "+233 000 000 000", icon: "📞" },
                  { label: "Business Hours", value: "Monday – Friday\n08:00 – 17:00 GMT", icon: "🕐" },
                ].map(item => (
                  <div key={item.label} className="flex gap-4">
                    <div className="text-xl flex-shrink-0 mt-0.5">{item.icon}</div>
                    <div>
                      <div className="text-[11px] uppercase tracking-widest text-[#B8860B] mb-1 font-medium">{item.label}</div>
                      <div className="text-[14px] text-[#4A4540] whitespace-pre-line">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 bg-[#F4EFE6] p-6">
                <h3 className="font-serif text-lg text-[#1A1A18] mb-3">What to include in your message</h3>
                <ul className="space-y-2">
                  {["Product required", "Quantity and unit", "Destination country", "Organic or conventional", "Preferred delivery timeline"].map(item => (
                    <li key={item} className="flex items-center gap-2 text-[13px] text-[#6B6356]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B8860B] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-[#2C4A3E] p-12 text-center">
                  <div className="text-4xl mb-5">✓</div>
                  <h3 className="font-serif text-2xl text-white mb-3">Thank you. Your message has been received.</h3>
                  <p className="text-[15px] text-white/60">Our team will contact you shortly to follow up on your enquiry.</p>
                </div>
              ) : (
                <form onSubmit={handle} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {[
                      { label: "First Name", key: "firstName", type: "text" },
                      { label: "Last Name", key: "lastName", type: "text" },
                      { label: "Company Name", key: "company", type: "text" },
                      { label: "Work Email", key: "email", type: "email" },
                      { label: "Phone Number", key: "phone", type: "tel" },
                      { label: "Country", key: "country", type: "text" },
                    ].map(field => (
                      <div key={field.key}>
                        <label className="block text-[12px] uppercase tracking-widest text-[#6B6356] mb-2 font-medium">{field.label}</label>
                        <input
                          type={field.type}
                          required={["firstName", "email"].includes(field.key)}
                          value={(form as Record<string, string>)[field.key]}
                          onChange={e => setForm(f => ({ ...f, [field.key]: e.target.value }))}
                          className="w-full bg-white border border-[#D6CABB] px-4 py-3 text-[14px] text-[#1A1A18] focus:outline-none focus:border-[#2C4A3E] transition-colors"
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="block text-[12px] uppercase tracking-widest text-[#6B6356] mb-2 font-medium">Message</label>
                    <textarea
                      rows={6}
                      required
                      placeholder="Please describe your product requirements, quantity, destination and any other relevant details."
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      className="w-full bg-white border border-[#D6CABB] px-4 py-3 text-[14px] text-[#1A1A18] focus:outline-none focus:border-[#2C4A3E] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-[#2C4A3E] text-white px-8 py-4 text-[14px] font-medium hover:bg-[#1f3529] transition-colors w-full md:w-auto"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
