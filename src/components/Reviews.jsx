import React from 'react';
import { Star, Quote, Sparkles } from 'lucide-react';
import { reviews } from '../data/products';

export default function Reviews({ lang, t }) {
  const isEn = lang === 'en';

  return (
    <section className="py-20 bg-[#07080B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isEn ? "Customer Trust & Heritage" : "ग्राहक सन्तुष्टि र विश्वास"}</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif text-white leading-tight mb-4">
            {t.sectionHeaders.reviewsTitle}
          </h2>

          <p className="text-sm sm:text-base text-[#B3ACA0] font-light leading-relaxed">
            {t.sectionHeaders.reviewsSubtitle}
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((rev) => {
            const name = isEn ? rev.nameEn : rev.nameNe;
            const location = isEn ? rev.locationEn : rev.locationNe;
            const text = isEn ? rev.textEn : rev.textNe;
            const date = isEn ? rev.dateEn : rev.dateNe;

            return (
              <div
                key={rev.id}
                className="p-7 rounded-3xl glass-panel border border-white/5 hover:border-[#C5A880]/40 transition-all flex flex-col justify-between shadow-lg relative group"
              >
                <div>
                  {/* Rating Stars & Quote Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-[#C5A880]/20 group-hover:text-[#D4AF37]/40 transition-colors" />
                  </div>

                  {/* Review Text */}
                  <p className="text-xs sm:text-sm text-[#CBC5B8] font-light leading-relaxed mb-6 italic">
                    "{text}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-serif text-white font-medium">
                      {name}
                    </h4>
                    <span className="text-xs text-[#A89E8D] block">
                      {location}
                    </span>
                  </div>
                  <span className="text-[10px] text-[#D4AF37] bg-[#D4AF37]/10 px-2 py-1 rounded-full border border-[#D4AF37]/20 font-medium">
                    {date}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
