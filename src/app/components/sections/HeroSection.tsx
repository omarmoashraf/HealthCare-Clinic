import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router";
import { ArrowRight, ChevronLeft, ChevronRight, Star, ShieldCheck, BadgeCheck } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { useTranslation } from "react-i18next";

const getSlides = (t: any) => [
  {
    id: 1,
    src: "/images/hero/hero-1.jpg",
    alt: "Modern dental clinic",
    label: t("hero.slides.reception"),
  },
  {
    id: 2,
    src: "/images/hero/hero-2.jpg",
    alt: "Dental treatment room",
    label: t("hero.slides.exams"),
  },
  {
    id: 3,
    src: "/images/hero/hero-3.jpg",
    alt: "Dental team",
    label: t("hero.slides.team"),
  },
];

const getTrustBadges = (t: any) => [
  { icon: Star, label: t("hero.badges.rating"), color: "text-amber-500", bg: "bg-amber-50", border: "border-amber-100" },
  { icon: BadgeCheck, label: t("hero.badges.specialists"), color: "text-[#0D9488]", bg: "bg-teal-50", border: "border-teal-100" },
  { icon: ShieldCheck, label: t("hero.badges.accredited"), color: "text-[#2563EB]", bg: "bg-blue-50", border: "border-blue-100" },
];

export default function HeroSection() {
  const { t, i18n } = useTranslation();
  const SLIDES = getSlides(t);
  const TRUST_BADGES = getTrustBadges(t);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", direction: i18n.dir() });
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const next = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const goTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setCurrent(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const timer = setInterval(() => next(), 5000);
    return () => clearInterval(timer);
  }, [emblaApi, next]);

  const scrollToAbout = () => {
    const el = document.getElementById("about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #F0F9FF 0%, #ffffff 55%)" }}
    >
      {/* Subtle decorative blobs */}
      <div
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-30 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #bfdbfe 0%, transparent 70%)",
          transform: "translate(-30%, -30%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #99f6e4 0%, transparent 70%)",
          transform: "translate(30%, 30%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ─── LEFT: Conversion Content ─── */}
          <div className="flex flex-col gap-7 sm:gap-8 relative z-10">

            {/* Eyebrow pill */}
            <div className="flex items-center gap-2.5 w-fit px-4 py-2 rounded-full bg-blue-100/70 border border-blue-200/50 shadow-sm">
              <span
                className="size-2 rounded-full bg-[#2563EB] animate-pulse"
                style={{ boxShadow: "0 0 6px #2563EB" }}
              />
              <span
                className="text-sm text-[#2563EB]"
                style={{ fontFamily: "inherit", fontWeight: 600, letterSpacing: "0.01em" }}
              >
                {t("hero.acceptingNew")}
              </span>
            </div>

            {/* Main Headline — Playfair Display */}
            <h1
              className="text-4xl sm:text-[2.6rem] md:text-5xl lg:text-[3.4rem] text-[#1E293B] leading-[1.18]"
              style={{ fontFamily: i18n.language === 'ar' ? 'inherit' : "'Playfair Display', Georgia, serif", fontWeight: 700 }}
            >
              {t("hero.title1")}
              <br />
              <span
                className="italic"
                style={{ color: "#2563EB" }}
              >
                {t("hero.title2")}
              </span>
              <br />
              {t("hero.title3")}
            </h1>

            {/* Sub-headline */}
            <p
              className="text-lg sm:text-xl text-[#475569] max-w-lg leading-relaxed"
              style={{ fontFamily: "inherit", fontWeight: 400 }}
            >
              {t("hero.subtitle1")}{" "}
              <span className="text-[#1E293B]" style={{ fontWeight: 500 }}>
                {t("hero.subtitle2")}
              </span>
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3">
              {TRUST_BADGES.map(({ icon: Icon, label, color, bg, border }) => (
                <div
                  key={label}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border ${bg} ${border} shadow-sm`}
                >
                  <Icon className={`size-4 ${color}`} strokeWidth={2.2} />
                  <span
                    className={`text-sm ${color}`}
                    style={{ fontFamily: "inherit", fontWeight: 600 }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-1 w-full sm:w-auto">
              <Link to="/booking" className="w-full sm:w-auto">
                <button
                  className="w-full sm:w-auto group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] min-h-[48px]"
                  style={{
                    background: "linear-gradient(135deg, #2563EB 0%, #1d4ed8 100%)",
                    boxShadow: "0 8px 24px rgba(37,99,235,0.30), 0 2px 6px rgba(37,99,235,0.15)",
                    fontFamily: "inherit",
                    fontWeight: 600,
                    fontSize: "1rem",
                  }}
                >
                  {t("hero.scheduleNow")}
                  <ArrowRight
                    className={`size-5 transition-transform duration-200 ${i18n.language === 'ar' ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`}
                    strokeWidth={2.5}
                  />
                </button>
              </Link>

              <button
                onClick={scrollToAbout}
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border-2 border-[#E2E8F0] bg-white/80 text-[#1E293B] hover:border-[#2563EB] hover:text-[#2563EB] hover:bg-blue-50/50 transition-all duration-200"
                style={{ fontFamily: "inherit", fontWeight: 600, fontSize: "1rem" }}
              >
                {t("hero.meetTeam")}
              </button>
            </div>
          </div>

          {/* ─── RIGHT: Image Slider ─── */}
          <div className="relative group z-10">

            {/* Slider Frame */}
            <div
              className="relative overflow-hidden cursor-grab active:cursor-grabbing"
              style={{ borderRadius: "20px", boxShadow: "0 24px 60px rgba(30,41,59,0.14), 0 4px 12px rgba(30,41,59,0.06)" }}
              ref={emblaRef}
            >
              <div className="flex h-[450px] sm:h-[500px] lg:h-[580px] bg-[#F0F9FF]">
                {SLIDES.map((slide, slideIdx) => (
                  <div
                    key={slide.id}
                    className="relative flex-[0_0_100%] min-w-0"
                  >
                    <ImageWithFallback
                      src={slide.src}
                      alt={slide.alt}
                      className="w-full h-full object-cover"
                      loading={slideIdx === 0 ? "eager" : "lazy"}
                      fetchPriority={slideIdx === 0 ? "high" : "auto"}
                    />
                    {/* Subtle gradient overlay bottom */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(15,23,42,0.45) 0%, rgba(15,23,42,0.08) 40%, transparent 70%)",
                      }}
                    />
                    {/* Slide label */}
                    <div className="absolute bottom-16 left-5 right-5">
                      <span
                        className="inline-block text-sm text-white/90 px-3 py-1 rounded-full"
                        style={{
                          background: "rgba(255,255,255,0.15)",
                          backdropFilter: "blur(8px)",
                          fontFamily: "inherit",
                          fontWeight: 500,
                          border: "1px solid rgba(255,255,255,0.2)",
                        }}
                      >
                        {slide.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Prev / Next Arrows — appear on hover */}
              <button
                onClick={prev}
                aria-label="Previous slide"
                className="absolute left-4 top-1/2 -translate-y-1/2 size-10 rounded-full flex items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95 z-20"
                style={{ background: "rgba(255,255,255,0.20)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.3)" }}
              >
                <ChevronLeft className="size-5 text-white" strokeWidth={2.5} />
              </button>
              <button
                onClick={next}
                aria-label="Next slide"
                className="absolute right-4 top-1/2 -translate-y-1/2 size-10 rounded-full flex items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95 z-20"
                style={{ background: "rgba(255,255,255,0.20)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.3)" }}
              >
                <ChevronRight className="size-5 text-white" strokeWidth={2.5} />
              </button>

              {/* Dot Navigation */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {SLIDES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goTo(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className="transition-all duration-300 min-h-[24px] min-w-[24px] flex items-center justify-center p-2"
                  >
                    <div
                      style={{
                        width: idx === current ? "24px" : "8px",
                        height: "8px",
                        borderRadius: "4px",
                        background: idx === current ? "#ffffff" : "rgba(255,255,255,0.45)",
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Decorative accent ring */}
            <div
              className="absolute -top-4 -right-4 size-28 rounded-full opacity-40 pointer-events-none"
              style={{ background: "radial-gradient(circle, #bfdbfe 0%, transparent 70%)", filter: "blur(12px)" }}
            />
            <div
              className="absolute -bottom-8 right-8 size-20 rounded-full opacity-30 pointer-events-none"
              style={{ background: "radial-gradient(circle, #99f6e4 0%, transparent 70%)", filter: "blur(10px)" }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
