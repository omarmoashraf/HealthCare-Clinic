import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ContactSection() {
  const { t } = useTranslation();
  const branches = [
    { name: t("contact.branch1"), addr: t("contact.branch1Addr") },
    { name: t("contact.branch2"), addr: t("contact.branch2Addr") },
    { name: t("contact.branch3"), addr: t("contact.branch3Addr") },
  ];

  return (
    <section id="contact" className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t("contact.title1")} <span className="text-[#2563eb]">{t("contact.title2")}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-6">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t("contact.infoTitle")}</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-2xl flex-shrink-0">
                    <Phone className="size-6 text-[#2563eb]" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">{t("contact.phone")}</div>
                    <div className="text-gray-600" dir="ltr">
                      <a href="tel:+201270532076" className="hover:text-[#2563eb] transition-colors">
                        +20 127 053 2076
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-2xl flex-shrink-0">
                    <Mail className="size-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">{t("contact.email")}</div>
                    <div className="text-gray-600">
                      <a href="mailto:info@healthcareplus-eg.com" className="hover:text-[#2563eb] transition-colors">
                        info@healthcareplus-eg.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-pink-100 p-3 rounded-2xl flex-shrink-0">
                    <Clock className="size-6 text-pink-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">{t("contact.hoursTitle")}</div>
                    <div className="text-gray-600 space-y-1">
                      <div>{t("contact.hours1")}</div>
                      <div>{t("contact.hours2")}</div>
                      <div>{t("contact.hours3")}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-red-100">
              <div className="flex items-center gap-3 mb-2">
                <div className="size-3 bg-red-500 rounded-full animate-pulse" />
                <h4 className="font-bold text-gray-900">{t("contact.emergencyTitle")}</h4>
              </div>
              <p className="text-gray-700">{t("contact.emergencyDesc")}</p>
              <a
                href="https://wa.me/201270532076"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold"
              >
                <MessageCircle className="size-5" />
                +20 127 053 2076
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{t("contact.branchesTitle")}</h3>
            <div className="flex flex-col gap-4">
              {branches.map((branch, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="bg-blue-100 p-3 rounded-2xl flex-shrink-0">
                    <MapPin className="size-6 text-[#2563eb]" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">{branch.name}</div>
                    <div className="text-gray-600">{branch.addr}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
