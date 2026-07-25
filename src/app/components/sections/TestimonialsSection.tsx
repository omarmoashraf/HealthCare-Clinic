import { Smile, Award, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function TestimonialsSection() {
  const { t } = useTranslation();

  const stats = [
    {
      icon: Smile,
      value: t("trust.stats.smiles.value"),
      label: t("trust.stats.smiles.label"),
      desc: t("trust.stats.smiles.desc"),
      color: "text-[#2563eb]",
      bg: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: Award,
      value: t("trust.stats.expertise.value"),
      label: t("trust.stats.expertise.label"),
      desc: t("trust.stats.expertise.desc"),
      color: "text-[#0D9488]",
      bg: "bg-teal-50",
      iconColor: "text-teal-600",
    },
    {
      icon: MapPin,
      value: t("trust.stats.branches.value"),
      label: t("trust.stats.branches.label"),
      desc: t("trust.stats.branches.desc"),
      color: "text-purple-600",
      bg: "bg-purple-50",
      iconColor: "text-purple-600",
    },
  ];

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t("trust.title1")} <span className="text-[#2563eb]">{t("trust.title2")}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t("trust.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="relative bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#2563eb]/20 hover:-translate-y-1 text-center group"
              >
                <div className={`size-16 sm:size-20 mx-auto rounded-2xl ${stat.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className={`size-8 sm:size-10 ${stat.iconColor}`} strokeWidth={1.5} />
                </div>
                <div className={`text-4xl sm:text-5xl font-bold mb-2 ${stat.color}`} style={{ fontFamily: "'Playfair Display', serif" }}>
                  {stat.value}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                  {stat.label}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
