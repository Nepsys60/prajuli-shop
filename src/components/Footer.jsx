import React from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Sparkles, 
  ArrowUp
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Footer({ lang, t }) {
  const isEn = lang === 'en';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${t.brand.whatsappNumber}?text=${encodeURIComponent(
    isEn
      ? "Namaste Parajuli Fabric Store! I'm reaching out from your website to connect with your Zero Km, Pokhara store."
      : "नमस्ते पराजुली फेब्रिक स्टोर! म वेबसाइट मार्फत जिरो किमी, पोखरा स्टोरसँग सम्पर्क गर्न चाहन्छु।"
  )}`;

  return (
    <footer id="contact" className="bg-[#050608] border-t border-[#C5A880]/20 pt-16 pb-12 relative text-[#CBC5B8]">
      {/* Upper Footer: Call to Action Card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#141722] via-[#1C202F] to-[#141722] border border-[#C5A880]/30 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="flex items-center space-x-2 text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isEn ? "Direct Concierge & Orders" : "प्रत्यक्ष अर्डर तथा सोधपुछ"}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif text-white font-medium mb-2">
              {isEn ? "Have a fabric specification or bridal inquiry?" : "विवाहको सारी वा कपडाबारे केही सोध्न चाहनुहुन्छ?"}
            </h3>
            <p className="text-xs sm:text-sm text-[#A89E8D] max-w-xl">
              {isEn
                ? "Chat directly with our Zero Km boutique specialists. We provide instant fabric availability, high-res drape photos, and personal styling support."
                : "हाम्रा जिरो किमी विशेषज्ञहरूसँग ह्वाट्सएपमा सिधै कुरा गर्नुहोस्। कपडाको फोटो, स्टक र स्टाइलिङ जानकारी तुरुन्त उपलब्ध गराइनेछ।"}
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2.5 px-8 py-4 rounded-full gold-gradient-bg text-black font-semibold text-xs tracking-wider uppercase whitespace-nowrap hover:brightness-110 active:scale-95 transition-all shadow-xl"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>{isEn ? "Connect on WhatsApp (+977 9856025496)" : "ह्वाट्सएप सम्पर्क (+९७७ ९८५६०२५४९६)"}</span>
          </a>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl tracking-[0.14em] font-semibold text-white uppercase">
                {isEn ? "PARAJULI FABRIC STORE" : "पराजुली फेब्रिक स्टोर"}
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#C5A880] font-sans -mt-0.5 font-medium">
                POKHARA • ZERO KM
              </span>
            </div>
            <p className="text-xs text-[#A89E8D] leading-relaxed font-light">
              {t.footer.about}
            </p>
            <div className="flex items-center space-x-3 pt-2">
              {/* Instagram SVG */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#D4AF37]/20 border border-white/10 hover:border-[#D4AF37] flex items-center justify-center text-white hover:text-[#D4AF37] transition-all"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              {/* Facebook SVG */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#D4AF37]/20 border border-white/10 hover:border-[#D4AF37] flex items-center justify-center text-white hover:text-[#D4AF37] transition-all"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              {/* WhatsApp SVG */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#25D366]/20 border border-white/10 hover:border-[#25D366] flex items-center justify-center text-[#25D366] transition-all"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37] mb-4">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#collections" className="hover:text-[#D4AF37] transition-colors">
                  {t.nav.collections}
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-[#D4AF37] transition-colors">
                  {t.nav.calculator}
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#D4AF37] transition-colors">
                  {t.nav.experience}
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#D4AF37] transition-colors">
                  {t.nav.location}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Categories */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37] mb-4">
              {t.footer.categories}
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A89E8D]">
              <li>{t.categories.sharees} (Katan, Organza, Chanderi)</li>
              <li>{t.categories.fabrics} (Cashmere, Raw Silk, Linen)</li>
              <li>{t.categories.readymade} (Kurtha Sets, Dhaka Waistcoats)</li>
              <li>{t.categories.suiting} (Italian 140s Wool, Giza Cotton)</li>
            </ul>
          </div>

          {/* Col 4: Store Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37] mb-4">
              {t.footer.contactUs}
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span>{t.brand.address}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <a href={`tel:${t.brand.phone}`} className="hover:text-white transition-colors">
                  {t.brand.phone}
                </a>
              </div>
              <div className="flex items-start space-x-2.5">
                <Clock className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span>{t.brand.hours}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#78746D] gap-4">
          <p>{t.footer.rights}</p>
          <div className="flex items-center space-x-4">
            <span className="text-[#A89E8D] italic">{t.footer.nepalPride}</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/5 hover:bg-[#D4AF37]/20 text-[#A89E8D] hover:text-[#D4AF37] transition-all"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
