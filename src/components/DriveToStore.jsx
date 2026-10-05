import React from 'react';
import { 
  MapPin, 
  Clock, 
  Phone, 
  Navigation, 
  Car, 
  Sparkles,
  ExternalLink,
  Mail,
  Award 
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function DriveToStore({ lang, t }) {
  const isEn = lang === 'en';

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=Zero+Km+Pokhara+5+Nepal`;
  
  const whatsappUrl = `https://wa.me/${t.brand.whatsappNumber}?text=${encodeURIComponent(
    isEn
      ? "Hello Parajuli Fabric Store! I'm planning to visit your boutique at Zero Km, Pokhara today. Are you open right now?"
      : "नमस्ते पराजुली फेब्रिक स्टोर! म आज जिरो किमी, पोखरास्थित तपाईंको पसल आउँदैछु। अहिले खुला छ?"
  )}`;

  return (
    <section id="location" className="py-24 relative bg-[#090A0E] overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.08),transparent_70%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Prominent High-Converting Banner as requested */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#171A24] via-[#1F2332] to-[#171A24] border border-[#D4AF37]/40 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full gold-gradient-bg"></div>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-2xl gold-gradient-bg flex items-center justify-center flex-shrink-0 shadow-lg text-black mt-1">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold block mb-1">
                  {t.storeVisit.badge}
                </span>
                <h3 className="text-lg sm:text-2xl font-serif text-white font-medium leading-snug">
                  "{t.storeVisit.bannerText}"
                </h3>
              </div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full gold-gradient-bg text-black font-semibold text-xs tracking-wider uppercase whitespace-nowrap hover:brightness-110 active:scale-95 transition-all shadow-md self-stretch sm:self-auto justify-center"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>{t.storeVisit.chatStore}</span>
            </a>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-serif text-white leading-tight mb-4">
            {t.sectionHeaders.locationTitle}
          </h2>
          <p className="text-sm sm:text-base text-[#B3ACA0] font-light leading-relaxed">
            {t.sectionHeaders.locationSubtitle}
          </p>
        </div>

        {/* Main Grid: Details on Left, Interactive Map on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Location details, hours, distances */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Address Card */}
            <div className="p-6 rounded-2xl glass-panel border border-white/10 hover:border-[#C5A880]/30 transition-all">
              <div className="flex items-start space-x-3.5">
                <MapPin className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#A89E8D] mb-1">
                    {t.storeVisit.addressTitle}
                  </h4>
                  <p className="text-sm sm:text-base text-white font-medium leading-relaxed">
                    {t.brand.address}
                  </p>
                  <p className="text-xs text-[#A89E8D] mt-1 font-light">
                    {isEn 
                      ? "Conveniently located right at Zero Km junction with dedicated customer parking." 
                      : "जिरो किमी चोकको मुख्य स्थानमा, निःशुल्क पार्किङ सुविधासहित।"}
                  </p>
                </div>
              </div>
            </div>

            {/* Timings Card */}
            <div className="p-6 rounded-2xl glass-panel border border-white/10 hover:border-[#C5A880]/30 transition-all">
              <div className="flex items-start space-x-3.5">
                <Clock className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#A89E8D] mb-1">
                    {t.storeVisit.hoursTitle}
                  </h4>
                  <p className="text-sm sm:text-base text-white font-medium">
                    {t.brand.hours}
                  </p>
                  <div className="flex items-center space-x-2 mt-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-xs text-emerald-400 font-medium">
                      {isEn ? "Open Now for In-Store Consultation" : "स्टोरमा कपडा हेर्न अहिले खुला छ"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Proprietorship & Contact Email Card */}
            <div className="p-6 rounded-2xl glass-panel border border-[#D4AF37]/35 hover:border-[#D4AF37] transition-all bg-gradient-to-br from-[#131622] via-[#171B2A] to-[#0F111A] shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.12),transparent_70%)] pointer-events-none"></div>
              <div className="flex items-start space-x-3.5 relative z-10">
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center flex-shrink-0 mt-0.5 text-[#D4AF37]">
                  <Award className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
                      {t.storeVisit.ownersCardTitle}
                    </h4>
                    <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-2 py-0.5 rounded-full font-medium">
                      {t.storeVisit.ownersCardRole}
                    </span>
                  </div>
                  <p className="text-base sm:text-lg text-white font-serif font-medium leading-snug">
                    {t.storeVisit.ownersCardSubtitle}
                  </p>
                  
                  {/* Contact Email & Note */}
                  <div className="mt-3 pt-3 border-t border-white/10 space-y-2">
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                      <a 
                        href={`mailto:${t.brand.email}`}
                        className="text-xs text-[#D4AF37] hover:text-white transition-colors underline underline-offset-2 break-all font-medium"
                      >
                        {t.brand.email}
                      </a>
                    </div>
                    <p className="text-[11px] text-[#A89E8D] font-light leading-relaxed">
                      {t.storeVisit.ownersCardNote}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Travel Times from Pokhara Landmarks */}
            <div className="p-6 rounded-2xl glass-panel border border-white/10">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#A89E8D] mb-4 flex items-center">
                <Car className="w-4 h-4 mr-2 text-[#D4AF37]" />
                {t.storeVisit.directionsTitle}
              </h4>
              <div className="grid grid-cols-2 gap-3 text-xs">
                {t.storeVisit.distances.map((dist, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-black/40 border border-white/5">
                    <div className="text-white font-medium truncate mb-0.5">{dist.from}</div>
                    <div className="text-[#D4AF37] text-[11px] font-semibold">{dist.time}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 py-3 px-4 rounded-xl border border-[#D4AF37]/50 bg-[#161A25] text-white hover:bg-[#1E2333] hover:border-[#D4AF37] text-xs font-medium transition-all shadow-md"
              >
                <Navigation className="w-4 h-4 text-[#D4AF37]" />
                <span>{t.storeVisit.openMaps}</span>
                <ExternalLink className="w-3 h-3 text-[#A89E8D]" />
              </a>

              <a
                href={`tel:${t.brand.phone}`}
                className="flex items-center justify-center space-x-2 py-3 px-4 rounded-xl gold-gradient-bg text-black font-semibold text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-md"
              >
                <Phone className="w-4 h-4 text-black" />
                <span>{t.storeVisit.callUs}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Embedded Interactive Map Container */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden glass-panel border border-[#C5A880]/30 shadow-2xl relative min-h-[420px] flex flex-col">
            {/* Map Top Bar */}
            <div className="p-4 bg-[#11131B] border-b border-white/10 flex items-center justify-between text-xs">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]"></span>
                <span className="text-white font-medium">Parajuli Fabric Store — Zero Km, Pokhara-5</span>
              </div>
              <span className="text-[#A89E8D] hidden sm:inline">28°13'N 83°58'E</span>
            </div>

            {/* Google Maps Iframe */}
            <div className="flex-1 w-full relative min-h-[360px]">
              <iframe
                title="Parajuli Fabric Store Location Zero Km Pokhara"
                src="https://maps.google.com/maps?q=Zero+Km,+Pokhara,+Nepal&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full min-h-[360px] border-0 filter contrast-105"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              {/* Floating Pin Card Over Map */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs p-3.5 rounded-2xl bg-[#0F1118]/90 backdrop-blur-md border border-[#C5A880]/40 shadow-xl text-xs">
                <div className="flex items-center space-x-2 text-[#D4AF37] font-semibold mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Parajuli Flagship</span>
                </div>
                <p className="text-[#E0DCD3] text-[11px] leading-tight">
                  Zero Km Chowk, Pokhara-5, Nepal. Tap to get turn-by-turn driving directions.
                </p>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center space-x-1 text-[11px] text-[#D4AF37] hover:underline font-semibold"
                >
                  <span>Open turn-by-turn navigation</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
