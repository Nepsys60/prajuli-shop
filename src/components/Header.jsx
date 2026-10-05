import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Globe, 
  Menu, 
  X, 
  Sparkles
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Header({ lang, setLang, t }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'ne' : 'en');
  };

  const navLinks = [
    { href: '#collections', label: t.nav.collections },
    { href: '#calculator', label: t.nav.calculator },
    { href: '#experience', label: t.nav.experience },
    { href: '#location', label: t.nav.location },
  ];

  const whatsappUrl = `https://wa.me/${t.brand.whatsappNumber}?text=${encodeURIComponent(
    lang === 'en'
      ? "Hello Parajuli Fabric Store! I would like to inquire about your fabric collections and visit your store at Zero Km, Pokhara."
      : "नमस्ते पराजुली फेब्रिक स्टोर! म तपाईंको कपडा संकलनबारे सोधपुछ गर्न र जिरो किमी, पोखरास्थित स्टोर भ्रमण गर्न चाहन्छु।"
  )}`;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-header py-3 shadow-2xl' : 'bg-transparent py-5'
    }`}>
      {/* Top micro bar for physical presence */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:flex items-center justify-between pb-2 border-b border-[#C5A880]/15 text-xs text-[#A89E8D]">
          <div className="flex items-center space-x-6">
            <span className="flex items-center text-[#D4AF37] font-medium">
              <MapPin className="w-3.5 h-3.5 mr-1.5 text-[#C5A880]" />
              {t.brand.locationBadge}
            </span>
            <span className="flex items-center">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2 animate-pulse"></span>
              {t.brand.hours}
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a 
              href={`tel:${t.brand.phone}`} 
              className="hover:text-[#D4AF37] transition-colors flex items-center"
            >
              <Phone className="w-3 h-3 mr-1" />
              {t.brand.phone}
            </a>
            <span className="text-[#C5A880]/30">|</span>
            <span className="text-[#D4AF37]/90 italic">
              {lang === 'en' ? "Exclusive Fabrics & Sharee Atelier" : "विशिष्ट कपडा तथा सारी बुटिक"}
            </span>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="flex items-center justify-between pt-2">
          {/* Brand Logo */}
          <a href="#" className="flex flex-col group">
            <div className="flex items-center space-x-2">
              <span className="font-serif text-xl sm:text-2xl lg:text-3xl tracking-[0.14em] font-semibold text-white uppercase group-hover:text-[#D4AF37] transition-colors">
                {lang === 'en' ? "PARAJULI" : "पराजुली"}
              </span>
              <span className="font-serif text-xl sm:text-2xl lg:text-3xl tracking-[0.08em] font-light text-[#D4AF37] uppercase">
                {lang === 'en' ? "FABRIC STORE" : "फेब्रिक स्टोर"}
              </span>
              <Sparkles className="w-4 h-4 text-[#D4AF37] opacity-80" />
            </div>
            <span className="text-[9px] tracking-[0.35em] uppercase text-[#C5A880] font-sans -mt-0.5 font-medium">
              POKHARA • ZERO KM
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#D0C9BD] hover:text-[#D4AF37] tracking-wider transition-colors relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Action CTAs: Language Toggle & WhatsApp */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Bilingual Toggle Button */}
            <button
              onClick={toggleLanguage}
              aria-label="Switch Language"
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full border border-[#C5A880]/40 bg-[#161922]/80 hover:bg-[#1E2330] hover:border-[#D4AF37] text-xs font-medium text-white transition-all shadow-sm"
            >
              <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="tracking-wide">
                {lang === 'en' ? (
                  <>
                    <strong className="text-[#D4AF37]">EN</strong> / नेपाली
                  </>
                ) : (
                  <>
                    English / <strong className="text-[#D4AF37]">नेपाली</strong>
                  </>
                )}
              </span>
            </button>

            {/* WhatsApp Direct CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center space-x-2 px-4 py-2 rounded-full gold-gradient-bg text-black font-semibold text-xs tracking-wider uppercase hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-[#C5A880]/20"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>{t.nav.inquireWhatsApp}</span>
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-[#D0C9BD] hover:text-white hover:bg-white/5 focus:outline-none"
              aria-label="Open menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-header border-t border-[#C5A880]/20 mt-3 px-4 pt-4 pb-6 space-y-4 shadow-2xl animate-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#E0DCD3] hover:text-[#D4AF37] py-2 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col space-y-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl gold-gradient-bg text-black font-semibold text-sm uppercase tracking-wider shadow-md"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>{t.nav.inquireWhatsApp}</span>
            </a>
            
            <a
              href={`tel:${t.brand.phone}`}
              className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-xl border border-[#C5A880]/30 text-white text-xs"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{t.brand.phone} (Zero Km, Pokhara)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
