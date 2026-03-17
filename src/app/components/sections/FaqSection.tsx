import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";

export default function FaqSection() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
    { q: t("faq.q5"), a: t("faq.a5") },
  ];

  // Inject FAQPage Schema (JSON-LD) for Google Rich Results
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a,
        },
      })),
    };

    const scriptId = "faq-schema";
    let script = document.getElementById(scriptId) as HTMLScriptElement;
    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(faqSchema);

    return () => {
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, [faqs]);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1E293B] mb-4">
            {t("faq.title1")}{" "}
            <span className="text-[#2563EB] relative inline-block">
              {t("faq.title2")}
              <div 
                className="absolute -bottom-2 right-0 h-1.5 w-full bg-[#93c5fd] rounded-full opacity-50"
              />
            </span>
          </h2>
          <p className="text-lg text-[#64748B]">
            {t("faq.subtitle")}
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen ? 'border-[#3b82f6] shadow-sm' : 'border-gray-200 hover:border-[#93c5fd]'}`}
              >
                <button
                  type="button"
                  onClick={() => handleToggle(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <h3 className={`text-lg font-semibold transition-colors ${isOpen ? 'text-[#2563EB]' : 'text-[#1E293B]'}`}>
                    {faq.q}
                  </h3>
                  <ChevronDown 
                    className={`size-5 flex-shrink-0 transition-transform duration-300 text-[#64748B] ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-[#475569] bg-white border-t border-gray-50">
                    <div className="py-2 leading-relaxed">
                      {faq.a}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
