import { Outlet } from "react-router";
import Navigation from "./Navigation";
import ScrollToTop from "./ScrollToTop";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export default function Root() {
  const { i18n } = useTranslation();

  // Dynamically update <html> lang and dir attributes for SEO + accessibility
  useEffect(() => {
    const lang = i18n.language;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Navigation />
      <Outlet />
    </div>
  );
}
