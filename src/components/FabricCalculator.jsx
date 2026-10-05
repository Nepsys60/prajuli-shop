import React, { useState } from 'react';
import { 
  Ruler, 
  Info
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { fabricCalculatorData } from '../data/products';

export default function FabricCalculator({ lang, t }) {
  const [selectedGarmentId, setSelectedGarmentId] = useState('kurtha_suruwal');
  const [selectedFit, setSelectedFit] = useState('standard'); // standard, slim, grand

  const isEn = lang === 'en';
  const garments = fabricCalculatorData.garments;
  const currentGarment = garments.find(g => g.id === selectedGarmentId) || garments[0];

  let calculatedMeters = currentGarment.defaultMeters;
  if (selectedFit === 'slim') calculatedMeters = currentGarment.slimMeters;
  if (selectedFit === 'grand') calculatedMeters = currentGarment.grandMeters;

  const garmentName = isEn ? currentGarment.nameEn : currentGarment.nameNe;
  const recommendedFabric = isEn ? currentGarment.recommendedFabricEn : currentGarment.recommendedFabricNe;
  const approxPrice = isEn ? currentGarment.approxPriceEn : currentGarment.approxPriceNe;

  const fitName = selectedFit === 'slim' 
    ? t.calculator.slimFit 
    : selectedFit === 'grand' 
      ? t.calculator.grandFit 
      : t.calculator.standardFit;

  const whatsappText = t.calculator.whatsappPreText
    .replace('{meters}', `${calculatedMeters} ${isEn ? 'meters' : 'मिटर'}`)
    .replace('{garment}', garmentName)
    .replace('{fit}', fitName);

  const whatsappUrl = `https://wa.me/${t.brand.whatsappNumber}?text=${encodeURIComponent(whatsappText)}`;

  return (
    <section id="calculator" className="py-20 relative bg-[#090A0E] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37] mb-3">
            <Ruler className="w-3.5 h-3.5" />
            <span>{isEn ? "Precision Atelier Tool" : "सटिक कपडा नाप उपकरण"}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif text-white leading-tight mb-4">
            {t.sectionHeaders.calculatorTitle}
          </h2>

          <p className="text-sm sm:text-base text-[#B3ACA0] font-light leading-relaxed">
            {t.sectionHeaders.calculatorSubtitle}
          </p>
        </div>

        {/* Main Interactive Calculator Card */}
        <div className="max-w-4xl mx-auto glass-panel rounded-3xl p-6 sm:p-10 border border-[#C5A880]/30 shadow-2xl relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Controls (Inputs) */}
            <div className="md:col-span-7 space-y-6">
              {/* Step 1: Select Garment */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#A89E8D] mb-3">
                  {t.calculator.selectGarment}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {garments.map((g) => {
                    const isSelected = g.id === selectedGarmentId;
                    return (
                      <button
                        key={g.id}
                        type="button"
                        onClick={() => setSelectedGarmentId(g.id)}
                        className={`text-left p-3 rounded-xl border text-xs transition-all ${
                          isSelected
                            ? 'gold-gradient-bg text-black font-semibold border-transparent shadow-md'
                            : 'bg-[#141722] text-[#D0C9BD] border-white/5 hover:border-[#C5A880]/30 hover:bg-[#1A1F2C]'
                        }`}
                      >
                        <div className="truncate">{isEn ? g.nameEn : g.nameNe}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Tailoring Fit */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#A89E8D] mb-3">
                  {t.calculator.selectFit}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'slim', label: t.calculator.slimFit },
                    { id: 'standard', label: t.calculator.standardFit },
                    { id: 'grand', label: t.calculator.grandFit },
                  ].map((fit) => (
                    <button
                      key={fit.id}
                      type="button"
                      onClick={() => setSelectedFit(fit.id)}
                      className={`py-2.5 px-2 rounded-xl text-center text-xs transition-all ${
                        selectedFit === fit.id
                          ? 'bg-[#D4AF37] text-black font-semibold shadow-md'
                          : 'bg-[#141722] text-[#A89E8D] hover:text-white border border-white/5'
                      }`}
                    >
                      {fit.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Advice Note */}
              <div className="flex items-start space-x-2 text-xs text-[#A89E8D] bg-white/[0.03] p-3.5 rounded-xl border border-white/5">
                <Info className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span>{t.calculator.widthAdvice}</span>
              </div>
            </div>

            {/* Right Display (Results & WhatsApp CTA) */}
            <div className="md:col-span-5 bg-gradient-to-br from-[#171A25] to-[#10121A] p-6 rounded-2xl border border-[#C5A880]/30 flex flex-col justify-between space-y-6 text-center">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
                  {t.calculator.estimatedRequirement}
                </span>

                {/* Big Meter Badge */}
                <div className="my-4">
                  <div className="text-5xl sm:text-6xl font-serif font-bold text-white tracking-tight">
                    {calculatedMeters}
                    <span className="text-xl sm:text-2xl text-[#D4AF37] font-sans ml-2 font-normal">
                      {isEn ? "Meters" : "मिटर"}
                    </span>
                  </div>
                  <div className="text-xs text-[#A89E8D] mt-1 font-light">
                    {isEn ? `Cut precisely for ${garmentName}` : `${garmentName} को लागि सटिक नाप`}
                  </div>
                </div>

                {/* Fabric Recommendation */}
                <div className="text-left bg-black/40 p-4 rounded-xl border border-white/5 space-y-2 mb-4">
                  <div className="text-[11px] text-[#A89E8D] uppercase tracking-wider font-semibold">
                    {t.calculator.recommendedFabrics}:
                  </div>
                  <div className="text-xs text-[#EAE6DF] font-medium leading-relaxed">
                    {recommendedFabric}
                  </div>
                  <div className="pt-2 border-t border-white/5 flex justify-between items-center text-xs">
                    <span className="text-[#A89E8D]">{isEn ? "Est. Fabric Cost:" : "अनुमानित लागत:"}</span>
                    <span className="text-[#D4AF37] font-semibold">{approxPrice}</span>
                  </div>
                </div>
              </div>

              {/* Inquiry Action */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 py-3.5 rounded-xl gold-gradient-bg text-black font-semibold text-xs uppercase tracking-wider hover:brightness-110 active:scale-98 transition-all shadow-lg"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>{t.calculator.inquireWithSpec}</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
