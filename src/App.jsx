import React, { useState, useEffect } from 'react';
import { translations } from './data/translations';
import Header from './components/Header';
import Hero from './components/Hero';
import CollectionShowcase from './components/CollectionShowcase';
import FabricCalculator from './components/FabricCalculator';
import BoutiqueExperience from './components/BoutiqueExperience';
import DriveToStore from './components/DriveToStore';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';
import ChatbotWidget from './components/ChatbotWidget';

export default function App() {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('parajuli_lang') || 'en';
  });

  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    localStorage.setItem('parajuli_lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const t = translations[lang] || translations.en;

  return (
    <div className="min-h-screen bg-[#08090C] text-[#DED9CD] selection:bg-[#C5A880] selection:text-black">
      {/* Top Header */}
      <Header lang={lang} setLang={setLang} t={t} />

      {/* Main Content */}
      <main>
        {/* 1. Hero Section */}
        <Hero lang={lang} t={t} />

        {/* 2. Collections & Products Showcase (All 4 categories + search + availability) */}
        <CollectionShowcase 
          lang={lang} 
          t={t} 
          onSelectProduct={(product) => setSelectedProduct(product)} 
        />

        {/* 3. Interactive Fabric Meter Calculator (Bespoke Feature) */}
        <FabricCalculator lang={lang} t={t} />

        {/* 4. Boutique Experience (Physical Touch & Feel, Handloom, Styling Lounge) */}
        <BoutiqueExperience lang={lang} t={t} />

        {/* 5. Sales-Oriented Drive-to-Store (Zero Km, Pokhara Directions, Map, Hours) */}
        <DriveToStore lang={lang} t={t} />

        {/* 6. Pokhara Customer Testimonials */}
        <Reviews lang={lang} t={t} />
      </main>

      {/* Footer */}
      <Footer lang={lang} t={t} />

      {/* Modals & Overlays */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          lang={lang}
          t={t}
        />
      )}

      {/* Integrated Antigravity Style Assistant Chatbot */}
      <ChatbotWidget lang={lang} t={t} />
    </div>
  );
}
