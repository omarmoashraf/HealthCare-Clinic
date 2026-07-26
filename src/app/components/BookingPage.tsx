import { useState } from "react";
import { format } from "date-fns";
import { MessageCircle, ArrowLeft, CalendarDays } from "lucide-react";
import { Link } from "react-router";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import Footer from "./Footer";
import { useTranslation } from "react-i18next";
import { useSEO } from "../hooks/useSEO";

const getServices = (t: any) => [
  t("services.items.dentalImplants.title"),
  t("services.items.crownBridges.title"),
  t("services.items.veneers.title"),
  t("services.items.orthodontics.title"),
  t("services.items.rootCanal.title"),
  t("services.items.scalingPolishing.title"),
  t("services.items.dentalFilling.title"),
  t("services.items.preventiveTreatment.title"),
  t("services.items.accurateDiagnosis.title"),
  t("services.items.removableDenture.title"),
  t("services.items.digitalXray.title"),
  t("services.items.panoramicXray.title"),
  t("services.items.pediatric.title"),
  t("services.items.dentalLaser.title"),
  t("services.items.smileMakeover.title"),
  t("services.items.minorSurgeries.title"),
  t("services.items.cbct.title"),
];

export default function BookingPage() {
  const { t, i18n } = useTranslation();
  const services = getServices(t);
  const [service, setService] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  useSEO({
    title: t("seo.bookingTitle"),
    description: t("seo.bookingDesc"),
  });

  const handleBooking = () => {
    if (!name || !phone || !service || !date || !time) {
      alert(t("booking.fillAll"));
      return;
    }

    const formattedDate = date ? format(new Date(date), "MMMM dd, yyyy") : "";
    const message = t("booking.waMessage", {
      name,
      phone,
      service,
      date: formattedDate,
      time,
    });

    const whatsappUrl = `https://wa.me/201270532076?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/50 to-white pt-16 sm:pt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-[#2563eb] transition-colors mb-8">
          <ArrowLeft className={`size-5 ${i18n.language === 'ar' ? 'rotate-180' : ''}`} />
          <span className="font-medium">{t("booking.backHome")}</span>
        </Link>

        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t("booking.title1")} <span className="text-[#2563eb]">{t("booking.title2")}</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("booking.subtitle")}
          </p>
        </div>

        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg border border-gray-100 max-w-xl mx-auto">
          <div className="space-y-6">
            <div>
              <Label htmlFor="service" className="text-base font-semibold text-gray-900 mb-2 block">
                {t("booking.service")}
              </Label>
              <Select value={service} onValueChange={setService}>
                <SelectTrigger id="service" className="rounded-2xl border-gray-200 h-14 text-base min-h-[48px]">
                  <SelectValue placeholder={t("booking.servicePlaceholder")} />
                </SelectTrigger>
                <SelectContent>
                  {services.map((s) => (
                    <SelectItem key={s} value={s} className="text-base py-3">{s}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="date" className="text-base font-semibold text-gray-900 mb-2 block">
                  {t("booking.date")}
                </Label>
                <div className="relative">
                  <Input
                    id="date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="rounded-2xl border-gray-200 h-14 text-base min-h-[48px] pr-10"
                    min={format(new Date(), "yyyy-MM-dd")}
                  />
                  <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div>
                <Label htmlFor="time" className="text-base font-semibold text-gray-900 mb-2 block">
                  {t("booking.time")}
                </Label>
                <Select value={time} onValueChange={setTime}>
                  <SelectTrigger id="time" className="rounded-2xl border-gray-200 h-14 text-base min-h-[48px]">
                    <SelectValue placeholder={t("booking.timePlaceholder")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={t("booking.morning")} className="text-base py-3">{t("booking.morning")}</SelectItem>
                    <SelectItem value={t("booking.afternoon")} className="text-base py-3">{t("booking.afternoon")}</SelectItem>
                    <SelectItem value={t("booking.evening")} className="text-base py-3">{t("booking.evening")}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name" className="text-base font-semibold text-gray-900 mb-2 block">
                  {t("booking.fullName")}
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder={t("booking.fullNamePlaceholder")}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="rounded-2xl border-gray-200 h-14 text-base min-h-[48px]"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-base font-semibold text-gray-900 mb-2 block">
                  {t("booking.phone")}
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  inputMode="tel"
                  placeholder={t("booking.phonePlaceholder")}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="rounded-2xl border-gray-200 h-14 text-base min-h-[48px]"
                  dir="ltr"
                />
              </div>
            </div>

            <Button
              onClick={handleBooking}
              className="w-full bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white rounded-2xl py-6 text-lg font-bold shadow-lg hover:shadow-xl transition-all group min-h-[56px]"
            >
              <MessageCircle className={`size-5 ${i18n.language === 'ar' ? 'ml-2' : 'mr-2'}`} />
              {t("booking.confirmWhatsapp")}
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
