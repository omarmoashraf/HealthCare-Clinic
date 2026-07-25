import { Link, useLocation, useNavigate } from "react-router";
import { Smile, Menu, X, Globe } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";

export default function Navigation() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/#services", label: t("nav.services") },
    { href: "/#about", label: t("nav.about") },
    { href: "/#gallery", label: t("nav.gallery") },
    { href: "/#testimonials", label: t("nav.testimonials") },
    { href: "/#contact", label: t("nav.contact") },
  ];

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ar" : "en");
  };

  const scrollToSection = (href: string) => {
    if (href.includes("#")) {
      const sectionId = href.split("#")[1];
      if (location.pathname !== "/") {
        navigate(href);
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      navigate(href);
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1.5 sm:gap-2 group">
            <div className="bg-[#2563eb] p-1.5 sm:p-2 rounded-xl sm:rounded-2xl group-hover:scale-105 transition-transform shrink-0">
              <Smile className="size-5 sm:size-6 text-white" />
            </div>
            <span className="text-lg sm:text-2xl font-semibold text-gray-900 truncate">{t("nav.brand")}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  if (link.href.includes("#")) {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }
                }}
                className="text-gray-600 hover:text-[#2563eb] transition-colors font-medium min-h-[48px] flex items-center"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right section: CTA & Mobile Menu Button */}
          <div className="flex items-center gap-1.5 sm:gap-4 shrink-0">
            <button
              onClick={toggleLanguage}
              className="hidden sm:flex items-center gap-2 text-gray-600 hover:text-[#2563eb] transition-colors font-medium px-2"
            >
              <Globe className="size-5" />
              {i18n.language === "en" ? "بالعربية" : "EN"}
            </button>
            <Link to="/booking">
              <Button className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white rounded-xl sm:rounded-2xl px-3 sm:px-6 min-h-[44px] sm:min-h-[48px] text-xs sm:text-base">
                {t("nav.bookAppt")}
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden flex items-center justify-center size-10 sm:size-12 rounded-xl hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="size-5 sm:size-6 text-gray-900" />
              ) : (
                <Menu className="size-5 sm:size-6 text-gray-900" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    if (link.href.includes("#")) {
                      e.preventDefault();
                      scrollToSection(link.href);
                    } else {
                      setIsMenuOpen(false);
                    }
                  }}
                  className="text-gray-600 hover:text-[#2563eb] transition-colors font-medium py-3 min-h-[48px] flex items-center px-4 rounded-xl hover:bg-gray-50"
                >
                  {link.label}
                </a>
              ))}
              <div className="px-2 mt-2 space-y-3">
                <button
                  onClick={() => {
                    toggleLanguage();
                    setIsMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-2xl min-h-[48px] text-base font-medium transition-colors"
                >
                  <Globe className="size-5" />
                  {i18n.language === "en" ? "التصفح بالعربية" : "Switch to English"}
                </button>
                <Link to="/booking" onClick={() => setIsMenuOpen(false)} className="block w-full">
                  <Button className="w-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white rounded-2xl min-h-[48px] text-base">
                    {t("nav.bookApptNow")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
