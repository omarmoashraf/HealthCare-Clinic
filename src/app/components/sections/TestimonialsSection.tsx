import { Star, Quote } from "lucide-react";
import { useTranslation } from "react-i18next";

const getTestimonials = (t: any) => [
  {
    name: "Ahmed Osama",
    role: t("testimonials.roles.exec"),
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    content: t("testimonials.reviews.1"),
    rating: 5,
  },
  {
    name: "Omar Ashraf",
    role: t("testimonials.roles.teacher"),
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    content: t("testimonials.reviews.2"),
    rating: 5,
  },
  {
    name: "Khaled Mostafa",
    role: t("testimonials.roles.engineer"),
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    content: t("testimonials.reviews.3"),
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const { t, i18n } = useTranslation();
  const testimonials = getTestimonials(t);
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t("testimonials.title1")} <span className="text-[#2563eb]">{t("testimonials.title2")}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("testimonials.subtitle")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-blue-100 relative group hover:-translate-y-1 mt-4 sm:mt-0"
            >
              {/* Quote Icon */}
              <div className={`absolute -top-4 ${i18n.language === 'ar' ? 'right-8' : 'left-8'} bg-[#2563eb] p-3 rounded-2xl shadow-lg group-hover:scale-110 transition-transform`}>
                <Quote className="size-6 text-white" fill="white" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="size-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-blue-100">
                <img
                  src={testimonial.image}
                  alt={`Patient testimonial photo - ${testimonial.name}`}
                  className="size-12 rounded-full object-cover ring-2 ring-blue-100"
                  loading="lazy"
                  decoding="async"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 px-4 py-4 sm:px-6 sm:py-4 bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl border border-blue-100 max-w-full">
            <div className="flex -space-x-2 shrink-0">
              {testimonials.map((t, i) => (
                <img
                  key={i}
                  src={t.image}
                  alt={`Happy patient ${t.name} - HealthCare+ clinic`}
                  className="size-10 rounded-full border-2 border-white object-cover"
                  loading="lazy"
                  decoding="async"
                />
              ))}
            </div>
            <div className="text-center sm:text-start">
              <div className="font-semibold text-gray-900 text-sm sm:text-base leading-tight mb-0.5 sm:mb-0">{t("testimonials.join")}</div>
              <div className="text-xs sm:text-sm text-gray-600">{t("testimonials.rated")}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
