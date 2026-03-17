import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ContactSection() {
  const { t } = useTranslation();
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
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t("contact.infoTitle")}</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-2xl flex-shrink-0">
                    <MapPin className="size-6 text-[#2563eb]" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">{t("contact.addressTitle")}</div>
                    <div className="text-gray-600">
                      {t("contact.addressVal1")}
                      <br />
                      {t("contact.addressVal2")}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-teal-100 p-3 rounded-2xl flex-shrink-0">
                    <Phone className="size-6 text-[#14b8a6]" />
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
                      <a href="mailto:contact@healthcareplus.com" className="hover:text-[#2563eb] transition-colors">
                        contact@healthcareplus.com
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

            {/* Emergency Contact */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-red-100">
              <div className="flex items-center gap-3 mb-2">
                <div className="size-3 bg-red-500 rounded-full animate-pulse" />
                <h4 className="font-bold text-gray-900">{t("contact.emergencyTitle")}</h4>
              </div>
              <p className="text-gray-700">
                {t("contact.emergencyDesc")}{" "}
                <a href="tel:123" className="font-bold text-red-600 hover:text-red-700" dir="ltr">
                  123
                </a>{" "}
                {t("contact.emergencyDesc2")}
              </p>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="relative w-full h-full min-h-[300px] sm:min-h-[400px] lg:min-h-[600px]">
              {/* Google Maps Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-teal-50 to-blue-50 flex items-center justify-center">
                <div className="text-center p-6 sm:p-8">
                  <MapPin className="size-12 sm:size-16 text-[#2563eb] mx-auto mb-4" />
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{t("contact.mapTitle")}</h3>
                  <p className="text-gray-600 max-w-xs">
                    {t("contact.mapDesc")}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-white rounded-2xl shadow-md">
                    <MapPin className="size-4 text-[#2563eb]" />
                    <span className="text-sm font-medium text-gray-700">{t("contact.addressVal1")}, {t("contact.addressVal2")}</span>
                  </div>
                </div>
              </div>

              {/* You can replace this with an actual Google Maps embed:
              <iframe
                src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Healthcare+ Location"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
