import { useTranslation } from "react-i18next";

const photos = [
  { id: 1, src: "/images/gallery/implants-after.png", label: "beforeAfter.case1" },
  { id: 2, src: "/images/gallery/veneers-after.png", label: "beforeAfter.case2" },
  { id: 3, src: "/images/gallery/fullmouth-after.webp", label: "beforeAfter.case3" },
  { id: 4, src: "/images/gallery/whitening-after.webp", label: "beforeAfter.case4" },
  { id: 5, src: "/images/gallery/implants-before.webp", label: "beforeAfter.case5" },
  { id: 6, src: "/images/gallery/veneers-before.png", label: "beforeAfter.case6" },
  { id: 7, src: "/images/gallery/fullmouth-before.webp", label: "beforeAfter.case7" },
  { id: 8, src: "/images/gallery/ortho-after.png", label: "beforeAfter.case8" },
];

export default function BeforeAfterSection() {
  const { t } = useTranslation();

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t("beforeAfter.title1")} <span className="text-[#2563eb]">{t("beforeAfter.title2")}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("beforeAfter.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {photos.map((p) => (
            <div key={p.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={p.src}
                  alt={t(p.label)}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-3 sm:p-4 text-center border-t border-gray-100">
                <p className="text-gray-900 font-semibold text-sm sm:text-base">{t(p.label)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
