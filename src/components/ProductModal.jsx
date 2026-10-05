import React from 'react';
import { 
  X, 
  MapPin, 
  Phone, 
  CheckCircle, 
  Sparkles, 
  Scissors, 
  Layers, 
  Compass
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function ProductModal({ product, onClose, lang, t }) {
  if (!product) return null;

  const isEn = lang === 'en';
  const title = isEn ? product.titleEn : product.titleNe;
  const desc = isEn ? product.descEn : product.descNe;
  const badge = isEn ? product.badgeEn : product.badgeNe;
  const price = isEn ? product.priceRangeEn : product.priceRangeNe;
  const unit = isEn ? product.unitEn : product.unitNe;
  const material = isEn ? product.materialEn : product.materialNe;
  const weave = isEn ? product.weaveEn : product.weaveNe;
  const origin = isEn ? product.originEn : product.originNe;

  const whatsappInquiryText = isEn
    ? `Hello Parajuli Fabric Store Pokhara! I would like to inquire about the availability of "${product.titleEn}" (${product.priceRangeEn}) at your Zero Km store.`
    : `नमस्ते पराजुली फेब्रिक स्टोर पोखरा! म "${product.titleNe}" (${product.priceRangeNe}) को उपलब्धता बारे बुझ्न चाहन्छु। के यो जिरो किमी स्टोरमा उपलब्ध छ?`;

  const whatsappUrl = `https://wa.me/${t.brand.whatsappNumber}?text=${encodeURIComponent(whatsappInquiryText)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl glass-panel rounded-3xl border border-[#C5A880]/30 shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white/80 hover:text-white border border-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Product Image */}
          <div className="relative h-64 md:h-full min-h-[300px] overflow-hidden bg-black/40">
            <img
              src={product.image}
              alt={title}
              loading="lazy"
              decoding="async"
              width="800"
              height="600"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#08090C] via-transparent to-transparent md:hidden"></div>
            
            {/* Top Tag */}
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full text-xs font-semibold gold-gradient-bg text-black shadow-md">
                {badge}
              </span>
            </div>

            {/* In-Store Badge */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center space-x-2 px-3 py-2 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 text-xs text-white">
                <MapPin className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <span className="truncate">
                  {isEn ? "Available for physical viewing at Zero Km, Pokhara" : "जिरो किमी, पोखरा स्टोरमा छामेर हेर्न उपलब्ध"}
                </span>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center space-x-2 text-xs text-[#D4AF37] font-medium uppercase tracking-widest mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{isEn ? "Atelier Curated Piece" : "बुटिक विशिष्ट संकलन"}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif text-white leading-snug mb-3">
                {title}
              </h2>

              <p className="text-sm text-[#CBC5B8] leading-relaxed mb-6 font-light">
                {desc}
              </p>

              {/* Price Tag */}
              <div className="p-3.5 rounded-xl bg-[#161922] border border-[#C5A880]/20 mb-6">
                <div className="text-xs text-[#A89E8D] uppercase tracking-wider mb-0.5">
                  {isEn ? "Estimated Price Guide" : "अनुमानित मूल्य दायरा"}
                </div>
                <div className="text-xl font-serif text-[#D4AF37] font-semibold">
                  {price}
                  <span className="text-xs text-[#E0DCD3]/70 font-sans ml-1.5 font-normal">
                    ({unit})
                  </span>
                </div>
              </div>

              {/* Specification Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs border-t border-b border-white/10 py-4 mb-6">
                <div>
                  <div className="text-[#A89E8D] flex items-center mb-1">
                    <Layers className="w-3.5 h-3.5 mr-1 text-[#C5A880]" />
                    {isEn ? "Material" : "कपडाको गुण"}
                  </div>
                  <div className="text-white font-medium">{material}</div>
                </div>

                <div>
                  <div className="text-[#A89E8D] flex items-center mb-1">
                    <Scissors className="w-3.5 h-3.5 mr-1 text-[#C5A880]" />
                    {isEn ? "Weave Technique" : "बुनाइ शैली"}
                  </div>
                  <div className="text-white font-medium">{weave}</div>
                </div>

                <div className="sm:col-span-2">
                  <div className="text-[#A89E8D] flex items-center mb-1">
                    <Compass className="w-3.5 h-3.5 mr-1 text-[#C5A880]" />
                    {isEn ? "Artisan Origin" : "उत्पत्ति तथा कालिगढ"}
                  </div>
                  <div className="text-white font-medium">{origin}</div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-3 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 py-3.5 rounded-2xl gold-gradient-bg text-black font-semibold text-sm uppercase tracking-wider hover:brightness-110 active:scale-98 transition-all shadow-lg"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>{isEn ? "Inquire on WhatsApp Now" : "ह्वाट्सएपमा तुरुन्त सोध्नुहोस्"}</span>
              </a>

              <div className="flex items-center justify-between text-xs text-[#A89E8D] px-1">
                <span className="flex items-center">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 mr-1.5" />
                  {isEn ? "100% Genuine Guaranteed" : "१००% असली ग्यारेन्टी"}
                </span>
                <a 
                  href={`tel:${t.brand.phone}`} 
                  className="hover:text-[#D4AF37] transition-colors flex items-center"
                >
                  <Phone className="w-3 h-3 mr-1" />
                  {t.brand.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
