import React from 'react';
import { 
  Sparkles, 
  Hand, 
  Scissors, 
  HeartHandshake, 
  Crown, 
  CheckCircle,
  ArrowRight
} from 'lucide-react';

export default function BoutiqueExperience({ lang, t }) {
  const isEn = lang === 'en';

  const iconComponents = [Hand, Scissors, Crown, HeartHandshake];

  return (
    <section id="experience" className="py-24 relative bg-[#07080B] overflow-hidden">
      {/* Decorative gradient beam */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(212,175,55,0.05),transparent_60%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isEn ? "The In-Store Touch & Feel" : "स्पर्श र अनुभूतिको विशिष्टता"}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif text-white leading-tight mb-4">
            {t.sectionHeaders.experienceTitle}
          </h2>

          <p className="text-sm sm:text-base text-[#B3ACA0] font-light leading-relaxed">
            {t.sectionHeaders.experienceSubtitle}
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {t.features.map((feat, idx) => {
            const IconComponent = iconComponents[idx] || Sparkles;
            return (
              <div
                key={idx}
                className="p-7 rounded-3xl glass-panel border border-white/5 hover:border-[#C5A880]/40 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#181B26] border border-[#C5A880]/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#D4AF37] transition-all">
                  <IconComponent className="w-6 h-6 text-[#D4AF37]" />
                </div>

              <h3 className="text-lg font-serif text-white font-medium mb-3 group-hover:text-[#D4AF37] transition-colors">
                {feat.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#CBC5B8] leading-relaxed font-light">
                {feat.desc}
              </p>
            </div>
          );
        })}
      </div>

        {/* Sensory Showcase Banner */}
        <div className="rounded-3xl overflow-hidden glass-panel border border-[#C5A880]/30 p-8 sm:p-12 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37] block mb-2">
                {isEn ? "Why Physical Retail Still Reigns in Haute Couture" : "हातले छाम्नुको महत्व"}
              </span>
              <h3 className="text-2xl sm:text-4xl font-serif text-white mb-4 leading-snug">
                {isEn 
                  ? "Real silk breathes. Genuine cashmere whispers warmth. Some luxuries must be felt in person."
                  : "सिल्कको कोमलता, पश्मिनाको न्यानोपन र बनारसीको चमक आफैं छोएर मात्र थाहा हुन्छ।"}
              </h3>
              <p className="text-xs sm:text-sm text-[#CBC5B8] font-light leading-relaxed mb-6 max-w-2xl">
                {isEn
                  ? "At Parajuli Fabric Store Zero Km, we believe fabric selection is a sensory ritual. Unroll bolts under natural Himalayan daylight, test the drape along your silhouette, and select custom linings with our master stylists."
                  : "हाम्रो जिरो किमी स्टोरमा आएर थानका थान कपडाहरू आफ्नै अगाडि हेर्नुहोस्, आफ्नो शरीरमा ड्रेप गरेर सुहाउँछ-सुहाउँदैन जाँच्नुहोस् र उत्तम सिलाइ परामर्श लिनुहोस्।"}
              </p>
              
              <div className="flex flex-wrap gap-4 text-xs text-[#EAE6DF]">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
                  <span>{isEn ? "Complimentary Tea & Styling Consultation" : "निःशुल्क चिया तथा स्टाइलिङ सल्लाह"}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
                  <span>{isEn ? "Hassle-free parking at Zero Km" : "जिरो किमीमा सजिलो पार्किङ सुविधा"}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <a
                href="#location"
                className="inline-flex items-center space-x-3 px-6 py-4 rounded-full gold-gradient-bg text-black font-semibold text-xs tracking-wider uppercase hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] active:scale-95 transition-all"
              >
                <span>{isEn ? "Plan Your Store Visit" : "स्टोर भ्रमण योजना गर्नुहोस्"}</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
