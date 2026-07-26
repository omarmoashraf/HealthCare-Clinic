import { Award, Star, Users, ShieldCheck } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { useTranslation } from "react-i18next";

export default function AboutSection() {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t("about.title1")} <span className="text-[#2563eb]">{t("about.title2")}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("about.subtitle")}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-shadow">
            <div className="grid md:grid-cols-5 gap-0">
              {/* Doctor Image */}
              <div className="md:col-span-2 relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt={t("about.drName") + " - " + t("about.drRole")}
                  className="w-full h-full min-h-[300px] object-cover"
                />
                {/* 5-Star Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="size-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="text-xs text-gray-600 mt-1">{t("about.rating")}</div>
                </div>
              </div>

              {/* Doctor Info */}
              <div className="md:col-span-3 p-6 sm:p-8 lg:p-10">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-xl sm:text-3xl font-bold text-gray-900 mb-2">
                      {t("about.drName")}
                    </h3>
                    <p className="text-[#2563eb] font-medium mb-1">{t("about.drTitle")}</p>
                    <p className="text-gray-600">{t("about.drRole")}</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <Award className="size-5 text-[#14b8a6] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">{t("about.board")}</p>
                      <p className="text-sm text-gray-600">{t("about.boardSub")}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Users className="size-5 text-[#14b8a6] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">{t("about.exp")}</p>
                      <p className="text-sm text-gray-600">{t("about.expSub")}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="size-5 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">{t("about.board")}</p>
                      <p className="text-sm text-gray-600">{t("about.credentials")}</p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  {t("about.desc")}
                </p>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-50 text-[#2563eb] rounded-full text-sm font-medium">
                      {t("about.tags.cardio")}
                    </span>
                    <span className="px-3 py-1 bg-blue-50 text-[#2563eb] rounded-full text-sm font-medium">
                      {t("about.tags.internal")}
                    </span>
                    <span className="px-3 py-1 bg-blue-50 text-[#2563eb] rounded-full text-sm font-medium">
                      {t("about.tags.preventive")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
