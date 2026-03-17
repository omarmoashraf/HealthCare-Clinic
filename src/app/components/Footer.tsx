import { Heart, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t, i18n } = useTranslation();
  const currentYear = new Date().getFullYear();

  const isAr = i18n.language === "ar";

  return (
    <footer className="bg-gray-900 text-gray-300" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-[#2563eb] p-2 rounded-2xl group-hover:scale-105 transition-transform">
                <Heart className="size-6 text-white" fill="white" />
              </div>
              <span className="text-xl font-semibold text-white">{t("nav.brand")}</span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              {t("footer.desc")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t("footer.quickLinks")}</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-[#2563eb] transition-colors">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <a href="/#services" className="hover:text-[#2563eb] transition-colors">
                  {t("nav.services")}
                </a>
              </li>
              <li>
                <a href="/#about" className="hover:text-[#2563eb] transition-colors">
                  {t("nav.about")}
                </a>
              </li>
              <li>
                <Link to="/booking" className="hover:text-[#2563eb] transition-colors">
                  {t("nav.bookAppt")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t("footer.servicesTitle")}</h3>
            <ul className="space-y-3">
              <li className="hover:text-[#2563eb] transition-colors cursor-pointer">{t("services.items.general.title")}</li>
              <li className="hover:text-[#2563eb] transition-colors cursor-pointer">{t("services.items.surgery.title")}</li>
              <li className="hover:text-[#2563eb] transition-colors cursor-pointer">{t("services.items.cardio.title")}</li>
              <li className="hover:text-[#2563eb] transition-colors cursor-pointer">{t("services.items.peds.title")}</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t("footer.contactTitle")}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="size-5 text-[#14b8a6] flex-shrink-0 mt-0.5" />
                <a href="tel:+201270532076" className="hover:text-[#2563eb] transition-colors" dir="ltr">
                  +20 127 053 2076
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="size-5 text-[#14b8a6] flex-shrink-0 mt-0.5" />
                <a href="mailto:contact@healthcareplus.com" className="hover:text-[#2563eb] transition-colors">
                  contact@healthcareplus.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="size-5 text-[#14b8a6] flex-shrink-0 mt-0.5" />
                <span>{t("contact.addressVal1")}, {t("contact.addressVal2")}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Branch Locations — Local SEO (Egypt) */}
        <div className="mb-8 pt-6 border-t border-gray-800">
          <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-gray-500">
            <MapPin className="size-4 text-[#14b8a6]" />
            <span>{isAr ? "فروعنا:" : "Our Branches:"}</span>
            <span className="text-gray-400">{isAr ? "التجمع الخامس" : "Fifth Settlement"}</span>
            <span className="text-gray-600">•</span>
            <span className="text-gray-400">{isAr ? "الشيخ زايد" : "Sheikh Zayed"}</span>
            <span className="text-gray-600">•</span>
            <span className="text-gray-400">{isAr ? "المهندسين" : "Mohandessin"}</span>
            <span className="text-gray-600">•</span>
            <span className="text-gray-400">{isAr ? "وسط البلد" : "Downtown Cairo"}</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400 text-center sm:text-start mb-2 sm:mb-0">
              © {currentYear} {t("nav.brand")}. {t("footer.copyright")}
            </p>
            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 sm:gap-6 text-xs sm:text-sm">
              <a href="#" className="hover:text-[#2563eb] transition-colors">
                {t("footer.privacy")}
              </a>
              <a href="#" className="hover:text-[#2563eb] transition-colors">
                {t("footer.terms")}
              </a>
              <a href="#" className="hover:text-[#2563eb] transition-colors">
                {t("footer.hipaa")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

