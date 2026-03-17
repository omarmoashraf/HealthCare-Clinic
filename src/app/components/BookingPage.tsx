import { useState } from "react";
import { format, addDays, startOfToday } from "date-fns";
import { Calendar, Clock, User, Phone, FileText, MessageCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import Footer from "./Footer";
import { useTranslation } from "react-i18next";
import { useSEO } from "../hooks/useSEO";

const getServices = (t: any) => [
  t("services.items.general.title"),
  t("services.items.surgery.title"),
  t("services.items.cardio.title"),
  t("services.items.neuro.title"),
  t("services.items.ophthal.title"),
  t("services.items.peds.title"),
];

const timeSlots = {
  morning: ["09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM"],
  afternoon: ["02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM"],
  evening: ["05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
};

export default function BookingPage() {
  const { t, i18n } = useTranslation();
  const services = getServices(t);
  const today = startOfToday();
  const [selectedDate, setSelectedDate] = useState<Date>(today);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [selectedService, setSelectedService] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [activeTimeSection, setActiveTimeSection] = useState<"morning" | "afternoon" | "evening">("morning");

  useSEO({
    title: t("seo.bookingTitle"),
    description: t("seo.bookingDesc"),
  });

  // Generate next 14 days for date picker
  const availableDates = Array.from({ length: 14 }, (_, i) => addDays(today, i));

  const handleBooking = () => {
    if (!fullName || !phoneNumber || !selectedDate || !selectedTime || !selectedService) {
      alert(t("booking.fillAll"));
      return;
    }

    const formattedDate = format(selectedDate, "MMMM dd, yyyy");
    const message = t("booking.waMessage", {
      name: fullName,
      phone: phoneNumber,
      service: selectedService,
      date: formattedDate,
      time: selectedTime,
    });

    const whatsappUrl = `https://wa.me/+201270532076?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/50 to-white pt-16 sm:pt-20">
      {/* Back Button */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-[#2563eb] transition-colors">
          <ArrowLeft className={`size-5 ${i18n.language === 'ar' ? 'rotate-180' : ''}`} />
          <span className="font-medium">{t("booking.backHome")}</span>
        </Link>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 sm:pb-24 w-full overflow-hidden sm:overflow-visible">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t("booking.title1")} <span className="text-[#2563eb]">{t("booking.title2")}</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("booking.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 sm:gap-8 w-full max-w-full min-w-0">
          {/* Booking Form - Main Section */}
          <div className="lg:col-span-3 space-y-8 w-full max-w-full min-w-0">
            {/* Step 1: Select Service */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#2563eb] text-white size-8 rounded-full flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{t("booking.step1")}</h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {services.map((service) => (
                  <button
                    key={service}
                    onClick={() => setSelectedService(service)}
                    className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl border-2 text-start transition-all text-sm sm:text-base ${selectedService === service
                        ? "border-[#2563eb] bg-blue-50 shadow-md"
                        : "border-gray-200 hover:border-[#2563eb]/50 hover:bg-gray-50"
                      }`}
                  >
                    <div className="font-semibold text-gray-900">{service}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Select Date */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#2563eb] text-white size-8 rounded-full flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{t("booking.step2")}</h2>
              </div>

              {/* Horizontal Scrollable Date Picker */}
              <div className="relative w-full max-w-full overflow-hidden">
                <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide min-w-0 w-full snap-x">
                  {availableDates.map((date) => {
                    const isSelected = format(date, "yyyy-MM-dd") === format(selectedDate, "yyyy-MM-dd");
                    const isToday = format(date, "yyyy-MM-dd") === format(today, "yyyy-MM-dd");

                    return (
                      <button
                        key={date.toString()}
                        onClick={() => setSelectedDate(date)}
                        className={`snap-center flex-shrink-0 p-3 sm:p-4 rounded-xl sm:rounded-2xl border-2 min-w-[80px] sm:min-w-[100px] transition-all ${isSelected
                            ? "border-[#2563eb] bg-blue-50 shadow-md scale-105"
                            : "border-gray-200 hover:border-[#2563eb]/50 hover:bg-gray-50"
                          }`}
                      >
                        <div className={`text-xs font-medium mb-1 ${isSelected ? "text-[#2563eb]" : "text-gray-500"}`}>
                          {format(date, "EEE")}
                        </div>
                        <div className={`text-xl sm:text-2xl font-bold mb-1 ${isSelected ? "text-[#2563eb]" : "text-gray-900"}`}>
                          {format(date, "dd")}
                        </div>
                        <div className={`text-xs ${isSelected ? "text-[#2563eb]" : "text-gray-500"}`}>
                          {format(date, "MMM")}
                        </div>
                        {isToday && (
                          <div className="text-xs font-medium text-[#14b8a6] mt-1">{t("booking.today")}</div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Step 3: Select Time */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#2563eb] text-white size-8 rounded-full flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{t("booking.step3")}</h2>
              </div>

              {/* Time Section Tabs */}
              <div className="relative w-full max-w-full overflow-hidden mb-6">
                <div className="flex gap-1.5 sm:gap-2 overflow-x-auto pb-2 scrollbar-hide min-w-0 w-full snap-x">
                  {(["morning", "afternoon", "evening"] as const).map((section) => (
                    <button
                      key={section}
                      onClick={() => setActiveTimeSection(section)}
                      className={`snap-center flex-1 whitespace-nowrap py-2 sm:py-3 px-3 sm:px-4 rounded-xl sm:rounded-2xl font-medium capitalize transition-all text-sm sm:text-base ${activeTimeSection === section
                          ? "bg-[#2563eb] text-white shadow-md"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                    >
                      {t(`booking.${section}`)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Slots */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                {timeSlots[activeTimeSection].map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`p-2 sm:p-3 rounded-xl sm:rounded-2xl border-2 font-medium transition-all text-sm sm:text-base ${selectedTime === time
                        ? "border-[#2563eb] bg-blue-50 shadow-md"
                        : "border-gray-200 hover:border-[#2563eb]/50 hover:bg-gray-50"
                      }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Patient Information */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#2563eb] text-white size-8 rounded-full flex items-center justify-center font-bold text-sm">
                  4
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{t("booking.step4")}</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <Label htmlFor="fullName" className="flex items-center gap-2 mb-2">
                    <User className="size-4 text-gray-500" />
                    {t("booking.fullName")}
                  </Label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder={t("booking.fullNamePlaceholder")}
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="rounded-2xl border-gray-200 focus:border-[#2563eb] h-14 text-base min-h-[48px]"
                  />
                </div>

                <div>
                  <Label htmlFor="phoneNumber" className="flex items-center gap-2 mb-2">
                    <Phone className="size-4 text-gray-500" />
                    {t("booking.phone")}
                  </Label>
                  <Input
                    id="phoneNumber"
                    type="tel"
                    inputMode="tel"
                    placeholder={t("booking.phonePlaceholder")}
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="rounded-2xl border-gray-200 focus:border-[#2563eb] h-14 text-base min-h-[48px]"
                    dir="ltr"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Booking Summary - Sidebar */}
          <div className="lg:col-span-2 w-full max-w-full min-w-0">
            <div className="sticky top-20 sm:top-24 bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 shadow-2xl text-white">
              <h3 className="text-2xl font-bold mb-6">{t("booking.summary")}</h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <FileText className="size-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm text-blue-100 mb-1">{t("booking.service")}</div>
                    <div className="font-semibold break-words break-all sm:break-normal">
                      {selectedService || t("booking.notSelected")}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="size-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm text-blue-100 mb-1">{t("booking.date")}</div>
                    <div className="font-semibold">
                      {format(selectedDate, "MMMM dd, yyyy")}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="size-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm text-blue-100 mb-1">{t("booking.time")}</div>
                    <div className="font-semibold">
                      {selectedTime || t("booking.notSelected")}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <User className="size-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm text-blue-100 mb-1">{t("booking.patientName")}</div>
                    <div className="font-semibold break-words break-all sm:break-normal">
                      {fullName || t("booking.notProvided")}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="size-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm text-blue-100 mb-1">{t("booking.phone")}</div>
                    <div className="font-semibold break-words break-all sm:break-normal" dir="ltr">
                      {phoneNumber || t("booking.notProvided")}
                    </div>
                  </div>
                </div>
              </div>

              <Button
                onClick={handleBooking}
                className="hidden lg:flex w-full bg-white text-[#2563eb] hover:bg-blue-50 rounded-2xl py-6 text-lg font-bold shadow-lg hover:shadow-xl transition-all group min-h-[56px]"
              >
                <MessageCircle className={`size-5 ${i18n.language === 'ar' ? 'ml-2' : 'mr-2'}`} />
                {t("booking.confirmWhatsapp")}
                <ArrowLeft className={`size-5 ${i18n.language === 'ar' ? 'mr-2 rotate-0 group-hover:-translate-x-1' : 'ml-2 rotate-180 group-hover:translate-x-1'} transition-transform`} />
              </Button>

              <p className="text-sm text-blue-100 mt-4 text-center">
                {t("booking.redirectText")}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {/* Floating Action Bar for Mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] z-40 max-w-[100vw] overflow-hidden">
        <Button
          onClick={handleBooking}
          className="w-full bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white rounded-2xl py-6 text-lg font-bold shadow-lg hover:shadow-xl transition-all group min-h-[56px]"
        >
          <MessageCircle className={`size-5 ${i18n.language === 'ar' ? 'ml-2' : 'mr-2'}`} />
          {t("booking.confirmWhatsapp")}
          <ArrowLeft className={`size-5 ${i18n.language === 'ar' ? 'mr-2 rotate-0 group-hover:-translate-x-1' : 'ml-2 rotate-180 group-hover:translate-x-1'} transition-transform`} />
        </Button>
      </div>
    </div>
  );
}
