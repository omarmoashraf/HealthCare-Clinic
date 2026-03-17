import { useTranslation } from "react-i18next";
import { Clock, ShieldCheck, Stethoscope } from "lucide-react";

export default function WhyUsSection() {
  const { t } = useTranslation();

  const features = [
    {
      icon: Clock,
      title: t("whyUs.zeroWait"),
      description: t("whyUs.zeroWaitDesc"),
      color: "text-blue-500",
      bg: "bg-blue-50"
    },
    {
      icon: ShieldCheck,
      title: t("whyUs.modernTools"),
      description: t("whyUs.modernToolsDesc"),
      color: "text-emerald-500",
      bg: "bg-emerald-50"
    },
    {
      icon: Stethoscope,
      title: t("whyUs.expertConsultants"),
      description: t("whyUs.expertConsultantsDesc"),
      color: "text-purple-500",
      bg: "bg-purple-50"
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1E293B] mb-4">
            {t("whyUs.title1")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#0D9488]">
              {t("whyUs.title2")}
            </span>
          </h2>
          <p className="text-lg text-[#64748B]">
            {t("whyUs.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div 
                key={idx}
                className="p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 group"
              >
                <div className={`size-14 rounded-xl flex items-center justify-center mb-6 ${feature.bg} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`size-7 ${feature.color}`} strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-[#1E293B] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#64748B] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
