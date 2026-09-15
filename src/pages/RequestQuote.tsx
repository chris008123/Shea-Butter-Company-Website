import { useState } from "react";
import { Link } from "react-router";

export default function RequestQuote() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    product: "", grade: "", quantity: "", unit: "MT", destination: "", shipping: "", deadline: "",
    firstName: "", lastName: "", company: "", email: "", phone: "", country: "", notes: "", privacy: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (key: string, val: string | boolean) => setForm(f => ({ ...f, [key]: val }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-[#FAF8F3] min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-lg mx-auto px-6 text-center">
          <div className="w-16 h-16 rounded-full bg-[#2C4A3E] flex items-center justify-center mx-auto mb-6">
            <svg width="24" height="24" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>
          </div>
          <h1 className="font-serif text-3xl text-[#1A1A18] mb-4">Enquiry Received</h1>
          <p className="text-[15px] text-[#6B6356] mb-8">Thank you for your enquiry. Our team will review your requirements and contact you shortly to discuss further.</p>
          <Link to="/" className="inline-block bg-[#2C4A3E] text-white px-7 py-3.5 text-[14px] font-medium hover:bg-[#1f3529] transition-colors">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FAF8F3]">
      <section className="pt-36 pb-16 bg-[#1A1A18]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-[#B8860B]" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#B8860B]">Quote Request</span>
          </div>
          <h1 className="font-serif text-4xl lg:text-6xl text-white mb-4">Request a Quote</h1>
          <p className="text-[15px] text-white/60">Complete the form below and our team will respond with pricing and availability information.</p>
          {/* Progress */}
          <div className="flex items-center gap-4 mt-8">
            {[1, 2, 3].map(s => (
              <div key={s} className="flex items-center gap-3">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[12px] font-medium transition-colors ${step >= s ? "bg-[#B8860B] text-white" : "bg-white/10 text-white/40"}`}>{s}</div>
                <span className={`text-[12px] transition-colors ${step >= s ? "text-white/80" : "text-white/30"}`}>
                  {s === 1 ? "Product" : s === 2 ? "Logistics" : "Contact"}
                </span>
                {s < 3 && <div className={`w-8 h-px ${step > s ? "bg-[#B8860B]" : "bg-white/20"}`} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-2xl mx-auto px-6">
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="font-serif text-2xl text-[#1A1A18] mb-8">What product are you looking for?</h2>
                <div>
                  <label className="block text-[12px] uppercase tracking-widest text-[#6B6356] mb-3 font-medium">Product *</label>
                  <div className="grid grid-cols-2 gap-3">
                    {["Unrefined Shea Butter", "Shea Nuts (Kernels)"].map(p => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => update("product", p)}
                        className={`p-4 border text-left text-[14px] transition-colors ${form.product === p ? "border-[#2C4A3E] bg-[#2C4A3E] text-white" : "border-[#D6CABB] text-[#1A1A18] hover:border-[#2C4A3E]"}`}
                      >{p}</button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-[12px] uppercase tracking-widest text-[#6B6356] mb-3 font-medium">Grade</label>
                  <div className="grid grid-cols-3 gap-3">
                    {["Organic", "Conventional", "Either"].map(g => (
                      <button key={g} type="button" onClick={() => update("grade", g)}
                        className={`p-3 border text-[13px] transition-colors ${form.grade === g ? "border-[#2C4A3E] bg-[#2C4A3E] text-white" : "border-[#D6CABB] text-[#1A1A18] hover:border-[#2C4A3E]"}`}
                      >{g}</button>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[12px] uppercase tracking-widest text-[#6B6356] mb-2 font-medium">Quantity *</label>
                    <input required type="number" min="0" step="any" value={form.quantity} onChange={e => update("quantity", e.target.value)}
                      className="w-full bg-white border border-[#D6CABB] px-4 py-3 text-[14px] text-[#1A1A18] focus:outline-none focus:border-[#2C4A3E]" />
                  </div>
                  <div>
                    <label className="block text-[12px] uppercase tracking-widest text-[#6B6356] mb-2 font-medium">Unit</label>
                    <select value={form.unit} onChange={e => update("unit", e.target.value)}
                      className="w-full bg-white border border-[#D6CABB] px-4 py-3 text-[14px] text-[#1A1A18] focus:outline-none focus:border-[#2C4A3E] appearance-none">
                      {["MT", "KG", "Cartons"].map(u => <option key={u}>{u}</option>)}
                    </select>
                  </div>
                </div>
                <button type="button" onClick={() => setStep(2)} disabled={!form.product || !form.quantity}
                  className="w-full bg-[#2C4A3E] text-white py-4 text-[14px] font-medium hover:bg-[#1f3529] transition-colors disabled:opacity-40">
                  Continue to Logistics →
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h2 className="font-serif text-2xl text-[#1A1A18] mb-8">Delivery & logistics details</h2>
                <div>
                  <label className="block text-[12px] uppercase tracking-widest text-[#6B6356] mb-2 font-medium">Destination Country *</label>
                  <input required type="text" value={form.destination} onChange={e => update("destination", e.target.value)}
                    placeholder="e.g. Germany, United States, UAE"
                    className="w-full bg-white border border-[#D6CABB] px-4 py-3 text-[14px] text-[#1A1A18] focus:outline-none focus:border-[#2C4A3E]" />
                </div>
                <div>
                  <label className="block text-[12px] uppercase tracking-widest text-[#6B6356] mb-3 font-medium">Shipping Preference</label>
                  <div className="grid grid-cols-3 gap-3">
                    {["Sea Freight", "Air Freight", "Open to advice"].map(s => (
                      <button key={s} type="button" onClick={() => update("shipping", s)}
                        className={`p-3 border text-[13px] transition-colors ${form.shipping === s ? "border-[#2C4A3E] bg-[#2C4A3E] text-white" : "border-[#D6CABB] text-[#1A1A18] hover:border-[#2C4A3E]"}`}
                      >{s}</button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-[12px] uppercase tracking-widest text-[#6B6356] mb-2 font-medium">Required Delivery Date</label>
                  <input type="date" value={form.deadline} onChange={e => update("deadline", e.target.value)}
                    className="w-full bg-white border border-[#D6CABB] px-4 py-3 text-[14px] text-[#1A1A18] focus:outline-none focus:border-[#2C4A3E]" />
                </div>
                <div className="flex gap-3">
                  <button type="button" onClick={() => setStep(1)} className="flex-1 border border-[#D6CABB] py-4 text-[14px] text-[#6B6356] hover:border-[#1A1A18] transition-colors">← Back</button>
                  <button type="button" onClick={() => setStep(3)} disabled={!form.destination}
                    className="flex-1 bg-[#2C4A3E] text-white py-4 text-[14px] font-medium hover:bg-[#1f3529] transition-colors disabled:opacity-40">
                    Continue to Contact →
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <h2 className="font-serif text-2xl text-[#1A1A18] mb-8">Your contact details</h2>
                <div className="grid grid-cols-2 gap-4">
                  {[["firstName", "First Name"], ["lastName", "Last Name"]].map(([k, l]) => (
                    <div key={k}>
                      <label className="block text-[12px] uppercase tracking-widest text-[#6B6356] mb-2 font-medium">{l} *</label>
                      <input required type="text" value={String((form as Record<string, unknown>)[k] ?? "")} onChange={e => update(k, e.target.value)}
                        className="w-full bg-white border border-[#D6CABB] px-4 py-3 text-[14px] text-[#1A1A18] focus:outline-none focus:border-[#2C4A3E]" />
                    </div>
                  ))}
                </div>
                {[["company", "Company Name", "text", true], ["email", "Work Email", "email", true], ["phone", "Phone Number", "tel", false], ["country", "Country", "text", true]].map(([k, l, t, req]) => (
                  <div key={k as string}>
                    <label className="block text-[12px] uppercase tracking-widest text-[#6B6356] mb-2 font-medium">{l as string} {req ? "*" : ""}</label>
                    <input required={req as boolean} type={t as string} value={String((form as Record<string, unknown>)[k as string] ?? "")} onChange={e => update(k as string, e.target.value)}
                      className="w-full bg-white border border-[#D6CABB] px-4 py-3 text-[14px] text-[#1A1A18] focus:outline-none focus:border-[#2C4A3E]" />
                  </div>
                ))}
                <div>
                  <label className="block text-[12px] uppercase tracking-widest text-[#6B6356] mb-2 font-medium">Additional Requirements</label>
                  <textarea rows={4} value={form.notes} onChange={e => update("notes", e.target.value)}
                    placeholder="Packaging preferences, certifications required, incoterms, or any other details."
                    className="w-full bg-white border border-[#D6CABB] px-4 py-3 text-[14px] text-[#1A1A18] focus:outline-none focus:border-[#2C4A3E] resize-none" />
                </div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input required type="checkbox" checked={form.privacy} onChange={e => update("privacy", e.target.checked)} className="mt-1 accent-[#2C4A3E]" />
                  <span className="text-[13px] text-[#6B6356]">I agree to the company's privacy policy and consent to my data being used to process this enquiry. *</span>
                </label>
                <div className="flex gap-3">
                  <button type="button" onClick={() => setStep(2)} className="flex-1 border border-[#D6CABB] py-4 text-[14px] text-[#6B6356] hover:border-[#1A1A18] transition-colors">← Back</button>
                  <button type="submit" className="flex-1 bg-[#B8860B] text-white py-4 text-[14px] font-medium hover:bg-[#9A7209] transition-colors">Submit Enquiry</button>
                </div>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
