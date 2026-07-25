import { Crown, Wrench, CircleDot, ShieldCheck, Search, Puzzle, Syringe, Sparkles, Gem, Scan, ScanEye, Baby, ArrowLeftRight, Zap, Smile, Scissors, Orbit, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const getServices = (t: any) => [
  {
    icon: CircleDot,
    title: t("services.items.dentalImplants.title"),
    description: t("services.items.dentalImplants.desc"),
    image: "/images/services/dental-implants.jpg",
    color: "bg-blue-100 text-[#2563eb]",
  },
  {
    icon: Crown,
    title: t("services.items.crownBridges.title"),
    description: t("services.items.crownBridges.desc"),
    image: "/images/services/crown-bridges.jpg",
    color: "bg-amber-100 text-amber-600",
  },
  {
    icon: Gem,
    title: t("services.items.veneers.title"),
    description: t("services.items.veneers.desc"),
    image: "/images/services/veneers.jpg",
    color: "bg-pink-100 text-pink-600",
  },
  {
    icon: ArrowLeftRight,
    title: t("services.items.orthodontics.title"),
    description: t("services.items.orthodontics.desc"),
    image: "/images/services/orthodontics.png",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Syringe,
    title: t("services.items.rootCanal.title"),
    description: t("services.items.rootCanal.desc"),
    image: "/images/services/root-canal.jpg",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: Sparkles,
    title: t("services.items.scalingPolishing.title"),
    description: t("services.items.scalingPolishing.desc"),
    image: "/images/services/scaling-polishing.jpg",
    color: "bg-cyan-100 text-cyan-600",
  },
  {
    icon: Wrench,
    title: t("services.items.dentalFilling.title"),
    description: t("services.items.dentalFilling.desc"),
    image: "/images/services/dental-filling.jpg",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: ShieldCheck,
    title: t("services.items.preventiveTreatment.title"),
    description: t("services.items.preventiveTreatment.desc"),
    image: "/images/services/preventive-treatment.jpg",
    color: "bg-teal-100 text-teal-600",
  },
  {
    icon: Search,
    title: t("services.items.accurateDiagnosis.title"),
    description: t("services.items.accurateDiagnosis.desc"),
    image: "/images/services/accurate-diagnosis.jpg",
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    icon: Puzzle,
    title: t("services.items.removableDenture.title"),
    description: t("services.items.removableDenture.desc"),
    image: "/images/services/removable-denture.jpg",
    color: "bg-violet-100 text-violet-600",
  },
  {
    icon: Scan,
    title: t("services.items.digitalXray.title"),
    description: t("services.items.digitalXray.desc"),
    image: "/images/services/digital-xray.jpg",
    color: "bg-slate-100 text-slate-600",
  },
  {
    icon: ScanEye,
    title: t("services.items.panoramicXray.title"),
    description: t("services.items.panoramicXray.desc"),
    image: "/images/services/panoramic-xray.jpg",
    color: "bg-gray-100 text-gray-600",
  },
  {
    icon: Baby,
    title: t("services.items.pediatric.title"),
    description: t("services.items.pediatric.desc"),
    image: "/images/services/pediatric.jpg",
    color: "bg-rose-100 text-rose-600",
  },
  {
    icon: Zap,
    title: t("services.items.dentalLaser.title"),
    description: t("services.items.dentalLaser.desc"),
    image: "/images/services/dental-laser.png",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    icon: Smile,
    title: t("services.items.smileMakeover.title"),
    description: t("services.items.smileMakeover.desc"),
    image: "/images/services/smile-makeover.png",
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    icon: Scissors,
    title: t("services.items.minorSurgeries.title"),
    description: t("services.items.minorSurgeries.desc"),
    image: "/images/services/minor-surgeries.png",
    color: "bg-red-100 text-red-800",
  },
  {
    icon: Orbit,
    title: t("services.items.cbct.title"),
    description: t("services.items.cbct.desc"),
    image: "/images/services/cbct.jpg",
    color: "bg-sky-100 text-sky-600",
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
                className="group bg-white rounded-2xl sm:rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#2563eb]/20 hover:-translate-y-1 overflow-hidden"
              >
                <div className="relative h-48 sm:h-52 overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className={`absolute bottom-3 left-3 inline-flex p-2.5 rounded-xl ${service.color} shadow-lg`}>
                    <Icon className="size-5" />
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">
                    {service.description}
                  </p>

                  <Link to="/booking" className="inline-flex items-center text-[#2563eb] font-medium group-hover:gap-2 transition-all text-sm sm:text-base">
                    {t("services.learnMore")}
                    <ArrowRight className={`size-4 ${i18n.language === 'ar' ? 'mr-1 rotate-180 group-hover:-translate-x-1' : 'ml-1 group-hover:translate-x-1'} transition-transform`} />
                  </Link>
                </div>
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
