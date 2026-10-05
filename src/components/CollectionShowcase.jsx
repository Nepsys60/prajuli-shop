import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Sparkles, 
  Eye, 
  Scissors
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { products } from '../data/products';

export default function CollectionShowcase({ lang, t, onSelectProduct }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const isEn = lang === 'en';

  const categoryTabs = [
    { id: 'all', label: t.categories.all },
    { id: 'sharees', label: t.categories.sharees },
    { id: 'fabrics', label: t.categories.fabrics },
    { id: 'readymade', label: t.categories.readymade },
    { id: 'suiting', label: t.categories.suiting },
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const titleMatches = (item.titleEn + ' ' + item.titleNe).toLowerCase().includes(query);
      const descMatches = (item.descEn + ' ' + item.descNe).toLowerCase().includes(query);
      const materialMatches = (item.materialEn + ' ' + item.materialNe).toLowerCase().includes(query);
      const badgeMatches = (item.badgeEn + ' ' + item.badgeNe).toLowerCase().includes(query);

      return matchesCategory && (titleMatches || descMatches || materialMatches || badgeMatches);
    });
  }, [activeCategory, searchQuery]);

  const getWhatsAppProductUrl = (item) => {
    const title = isEn ? item.titleEn : item.titleNe;
    const price = isEn ? item.priceRangeEn : item.priceRangeNe;
    const msg = isEn
      ? `Hello Parajuli Fabric Store Pokhara! I am inquiring about "${title}" (${price}). Is it available in your Zero Km boutique?`
      : `नमस्ते पराजुली फेब्रिक स्टोर पोखरा! म "${title}" (${price}) बारे सोधपुछ गर्न चाहन्छु। यो जिरो किमी स्टोरमा उपलब्ध छ?`;
    return `https://wa.me/${t.brand.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="collections" className="py-24 relative overflow-hidden bg-[#0A0B0F]">
      {/* Subtle backdrop luxury glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3/4 h-96 bg-[radial-gradient(ellipse_at_center,rgba(197,168,128,0.06),transparent_70%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isEn ? "The Parajuli Fabric Catalog" : "पराजुली फेब्रिक क्याटलग"}</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-serif text-white leading-tight mb-4">
            {t.sectionHeaders.collectionsTitle}
          </h2>
          
          <p className="text-sm sm:text-base text-[#B3ACA0] font-light leading-relaxed">
            {t.sectionHeaders.collectionsSubtitle}
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
          {/* Category Tabs */}
          <div className="flex items-center space-x-2 overflow-x-auto w-full lg:w-auto py-1 scrollbar-none">
            {categoryTabs.map((tab) => {
              const count = tab.id === 'all' 
                ? products.length 
                : products.filter(p => p.category === tab.id).length;
              const isActive = activeCategory === tab.id;
              
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all flex items-center space-x-2 ${
                    isActive
                      ? 'gold-gradient-bg text-black font-semibold shadow-lg shadow-[#D4AF37]/20 scale-102'
                      : 'bg-[#141720] text-[#CBC5B8] hover:text-white hover:bg-[#1E2330] border border-white/5'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive ? 'bg-black/20 text-black font-bold' : 'bg-white/10 text-[#C5A880]'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 text-[#A89E8D] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isEn ? "Search silk, pashmina, suit..." : "सिल्क, पश्मिना, सुटिङ खोज्नुहोस्..."}
              className="w-full pl-10 pr-4 py-2 rounded-full bg-[#13161F] border border-white/10 text-xs text-white placeholder-[#78746D] focus:outline-none focus:border-[#D4AF37] transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#A89E8D] hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-[#131620]/40 rounded-3xl border border-white/5">
            <p className="text-[#A89E8D] text-sm">
              {isEn ? "No items found matching your search. Please try another term." : "तपाईंको खोजी अनुसार कुनै सामग्री भेटिएन।"}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((item) => {
              const title = isEn ? item.titleEn : item.titleNe;
              const desc = isEn ? item.descEn : item.descNe;
              const badge = isEn ? item.badgeEn : item.badgeNe;
              const price = isEn ? item.priceRangeEn : item.priceRangeNe;
              const unit = isEn ? item.unitEn : item.unitNe;

              return (
                <div
                  key={item.id}
                  className="group rounded-3xl overflow-hidden glass-panel border border-white/10 hover:border-[#C5A880]/50 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                >
                  {/* Card Image with Hover Zoom */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-black/40">
                    <img
                      src={item.image}
                      alt={title}
                      loading="lazy"
                      decoding="async"
                      width="800"
                      height="600"
                      className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0C0E14] via-transparent to-black/30"></div>

                    {/* Top Badges */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide gold-gradient-bg text-black shadow-md">
                        {badge}
                      </span>
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-black/60 backdrop-blur-md text-emerald-400 border border-emerald-500/30 flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5"></span>
                        {t.card.inStock}
                      </span>
                    </div>

                    {/* Quick View Button overlay on hover */}
                    <button
                      onClick={() => onSelectProduct(item)}
                      className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110 shadow-xl"
                      aria-label="View fabric details"
                    >
                      <Eye className="w-5 h-5 text-[#D4AF37]" />
                    </button>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Price & Unit Line */}
                      <div className="flex items-baseline justify-between mb-2">
                        <span className="text-lg sm:text-xl font-serif text-[#D4AF37] font-semibold">
                          {price}
                        </span>
                        <span className="text-[11px] text-[#A89E8D] uppercase tracking-wider">
                          {unit}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg sm:text-xl font-serif text-white font-medium mb-2 group-hover:text-[#D4AF37] transition-colors line-clamp-1">
                        {title}
                      </h3>

                      {/* Short Description */}
                      <p className="text-xs sm:text-sm text-[#CBC5B8] font-light leading-relaxed mb-4 line-clamp-2">
                        {desc}
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4 border-t border-white/5 space-y-2.5">
                      {/* Button 1: WhatsApp Inquiry */}
                      <a
                        href={getWhatsAppProductUrl(item)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-xl gold-gradient-bg text-black font-semibold text-xs uppercase tracking-wider hover:brightness-110 active:scale-98 transition-all shadow-md"
                      >
                        <WhatsAppIcon className="w-3.5 h-3.5" />
                        <span>{t.card.inquireWhatsApp}</span>
                      </a>

                      {/* Button 2: Check In-Store / Quick Details */}
                      <button
                        onClick={() => onSelectProduct(item)}
                        className="w-full py-2 rounded-xl border border-white/10 hover:border-[#C5A880]/40 text-[#CBC5B8] hover:text-white text-xs font-medium transition-colors flex items-center justify-center space-x-1.5"
                      >
                        <Scissors className="w-3 h-3 text-[#D4AF37]" />
                        <span>{t.card.checkAvailability}</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
