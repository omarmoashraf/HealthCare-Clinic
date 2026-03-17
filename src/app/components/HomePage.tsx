import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ServicesSection from "./sections/ServicesSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./Footer";
import WhyUsSection from "./sections/WhyUsSection";
import FaqSection from "./sections/FaqSection";
import { useSEO } from "../hooks/useSEO";
import { useTranslation } from "react-i18next";

export default function HomePage() {
  const { t } = useTranslation();

  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": t("nav.brand") || "HealthCare Clinic",
    "image": "https://images.unsplash.com/photo-1698742164676-47d49e62a8ac?auto=format&fit=crop&q=80&w=1080",
    "@id": "https://example.com",
    "url": "https://example.com",
    "telephone": "+201000000000",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "المهندسين",
      "addressLocality": "Cairo",
      "postalCode": "12345",
      "addressCountry": "EG"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "10500"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
        "opens": "08:00",
        "closes": "20:00"
      }
    ],
    "medicalSpecialty": [
      "InternalMedicine",
      "Cardiovascular",
      "Neurologic",
      "Pediatric"
    ]
  };

  useSEO({
    title: t("seo.homeTitle"),
    description: t("seo.homeDesc"),
    keywords: t("seo.homeKeywords"),
    schema: schema
  });

  return (
    <main className="pt-16 sm:pt-20">
      <HeroSection />
      <WhyUsSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
