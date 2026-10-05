import React from 'react';
import { 
  ArrowRight, 
  MapPin
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Hero({ lang, t }) {
  const whatsappUrl = `https://wa.me/${t.brand.whatsappNumber}?text=${encodeURIComponent(
    lang === 'en'
      ? "Namaste Parajuli Fabric Store Pokhara! I'm interested in viewing your exclusive fabrics and sharee collection. Please share details."
      : "नमस्ते पराजुली फेब्रिक स्टोर पोखरा! म तपाईंको विशेष कपडा तथा सारी संकलन हेर्न चाहन्छु। जानकारी पाउँ।"
  )}`;

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Image with bespoke luxury vignette overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_boutique.webp"
          alt="Parajuli Fabric Store Boutique Interior Pokhara"
          fetchPriority="high"
          decoding="async"
          width="1600"
          height="900"
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000"
        />
        {/* Multilayered dark espresso & charcoal gradients for extreme legibility and cinematic depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#08090C] via-[#08090C]/85 to-[#08090C]/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090C] via-transparent to-[#08090C]/80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(212,175,55,0.08),transparent_50%)]"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8">
        <div className="max-w-3xl">
          {/* Location & Heritage Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-[#C5A880]/30 bg-[#141722]/80 backdrop-blur-md mb-6 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping"></span>
            <span className="text-xs sm:text-sm font-medium tracking-wide text-[#E8D39E]">
              {t.hero.badge}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-light text-white leading-[1.1] tracking-tight mb-6">
            <span>{t.hero.titleMain}</span>
            <br />
            <span className="gold-gradient-text font-normal italic">
              {t.hero.titleAccent}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-[#CBC5B8] leading-relaxed mb-8 max-w-2xl font-light">
            {t.hero.subtitle}
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-10">
            {/* CTA 1: Explore Collections */}
            <a
              href="#collections"
              className="inline-flex items-center justify-center space-x-3 px-7 py-3.5 rounded-full gold-gradient-bg text-black font-semibold text-sm tracking-wider uppercase hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:brightness-110 active:scale-95 transition-all"
            >
              <span>{t.hero.ctaExplore}</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </a>

            {/* CTA 2: WhatsApp Chat */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2.5 px-6 py-3.5 rounded-full border border-[#C5A880]/50 bg-[#161923]/80 hover:bg-[#202534] hover:border-[#D4AF37] text-white font-medium text-sm tracking-wider transition-all backdrop-blur-sm"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>{t.hero.ctaWhatsApp}</span>
            </a>

            {/* CTA 3: Visit Zero Km Boutique */}
            <a
              href="#location"
              className="inline-flex items-center justify-center space-x-2 px-5 py-3.5 rounded-full text-xs text-[#C5A880] hover:text-white transition-colors"
            >
              <MapPin className="w-4 h-4 text-[#D4AF37]" />
              <span className="underline underline-offset-4 decoration-[#C5A880]/40">
                {t.hero.ctaVisit}
              </span>
            </a>
          </div>

          {/* Drive-to-Store Golden Notice Strip */}
          <div className="p-4 sm:p-5 rounded-2xl glass-panel border border-[#C5A880]/25 relative overflow-hidden mb-12">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#D4AF37]"></div>
            <div className="flex items-start sm:items-center space-x-3 text-xs sm:text-sm text-[#EAE6DF]">
              <MapPin className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5 sm:mt-0" />
              <span className="leading-snug">
                <strong className="text-[#D4AF37] font-semibold">
                  {lang === 'en' ? "Flagship Boutique: " : "फ्ल्यागशिप बुटिक: "}
                </strong>
                {t.hero.notice}
              </span>
            </div>
          </div>
        </div>

        {/* 4-Item Luxury Statistics Ribbon */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-[#C5A880]/20">
          {t.hero.stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="p-4 rounded-xl bg-[#11131A]/60 border border-white/5 backdrop-blur-sm hover:border-[#C5A880]/40 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-serif text-[#D4AF37] font-semibold mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-[#A89E8D] uppercase tracking-wider font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
