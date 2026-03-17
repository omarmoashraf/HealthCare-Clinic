import { Activity, Heart, Stethoscope, Baby, Eye, Brain, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

const getServices = (t: any) => [
  {
    icon: Stethoscope,
    title: t("services.items.general.title"),
    description: t("services.items.general.desc"),
    color: "bg-blue-100 text-[#2563eb]",
  },
  {
    icon: Activity,
    title: t("services.items.surgery.title"),
    description: t("services.items.surgery.desc"),
    color: "bg-teal-100 text-[#14b8a6]",
  },
  {
    icon: Heart,
    title: t("services.items.cardio.title"),
    description: t("services.items.cardio.desc"),
    color: "bg-red-100 text-red-600",
  },
  {
    icon: Brain,
    title: t("services.items.neuro.title"),
    description: t("services.items.neuro.desc"),
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Eye,
    title: t("services.items.ophthal.title"),
    description: t("services.items.ophthal.desc"),
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    icon: Baby,
    title: t("services.items.peds.title"),
    description: t("services.items.peds.desc"),
    color: "bg-pink-100 text-pink-600",
  },
];

export default function ServicesSection() {
  const { t, i18n } = useTranslation();
  const services = getServices(t);
  return (
    <section id="services" className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t("services.title1")} <span className="text-[#2563eb]">{t("services.title2")}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#2563eb]/20 hover:-translate-y-1"
              >
                <div className={`inline-flex p-4 rounded-2xl ${service.color} mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="size-8" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                <Link to="/booking" className="inline-flex items-center text-[#2563eb] font-medium group-hover:gap-2 transition-all">
                  {t("services.learnMore")}
                  <ArrowRight className={`size-4 ${i18n.language === 'ar' ? 'mr-1 rotate-180 group-hover:-translate-x-1' : 'ml-1 group-hover:translate-x-1'} transition-transform`} />
                </Link>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12 sm:mt-16 w-full">
          <Link to="/booking" className="block w-full sm:inline-block sm:w-auto">
            <Button className="w-full sm:w-auto bg-[#2563eb] hover:bg-[#1d4ed8] text-white rounded-xl sm:rounded-2xl px-6 py-4 sm:px-8 sm:py-6 text-base sm:text-lg min-h-[48px] sm:min-h-[56px] shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 transition-all">
              {t("services.bookBtn")}
              <ArrowRight className={`size-5 ${i18n.language === 'ar' ? 'mr-2 rotate-180' : 'ml-2'}`} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
