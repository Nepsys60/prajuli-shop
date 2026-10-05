import React, { useState, useRef, useEffect } from 'react';
import { 
  MessageCircle, 
  X, 
  Send, 
  Sparkles, 
  ExternalLink 
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { chatbotResponses } from '../data/chatbotData';

export default function ChatbotWidget({ lang, t }) {
  const [isOpen, setIsOpen] = useState(false);
  const isEn = lang === 'en';
  const chatData = isEn ? chatbotResponses.en : chatbotResponses.ne;

  const [conversation, setConversation] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [hasUnread, setHasUnread] = useState(true);
  const messagesEndRef = useRef(null);
  const counterRef = useRef(1);

  // Derived messages: starts with current language welcome message, followed by conversation
  const displayedMessages = [
    {
      id: 'welcome-msg',
      sender: 'bot',
      text: chatData.welcome,
      time: '10:00 AM',
    },
    ...conversation,
  ];

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [conversation, isOpen]);

  const handleOpen = () => {
    setIsOpen(!isOpen);
    setHasUnread(false);
  };

  const handleSend = (textToSend) => {
    const text = (textToSend || inputValue).trim();
    if (!text) return;

    counterRef.current += 1;
    const currentId = `msg-${counterRef.current}`;

    const userMsg = {
      id: currentId,
      sender: 'user',
      text: text,
      time: 'Just now',
    };

    setConversation((prev) => [...prev, userMsg]);
    setInputValue('');

    // Process response
    setTimeout(() => {
      counterRef.current += 1;
      const botId = `bot-${counterRef.current}`;
      const lower = text.toLowerCase();
      const matched = chatData.keywords.find(k => 
        k.tokens.some(token => lower.includes(token.toLowerCase()))
      );

      const botReply = {
        id: botId,
        sender: 'bot',
        text: matched ? matched.response : chatData.defaultReply,
        actionUrl: matched ? matched.actionUrl : null,
        actionText: matched ? matched.actionText : null,
        time: 'Just now',
      };

      setConversation((prev) => [...prev, botReply]);
    }, 450);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const directWhatsAppUrl = `https://wa.me/${t.brand.whatsappNumber}?text=${encodeURIComponent(
    isEn
      ? "Hello Parajuli Fabric Store Stylist! I was chatting with the Style Assistant and would like to speak directly with an in-store consultant in Pokhara."
      : "नमस्ते पराजुली फेब्रिक स्टोर स्टाइलिस्ट! म वेबसाइटको फेसन सहयोगी मार्फत जिरो किमी स्टोरका सल्लाहकारसँग प्रत्यक्ष कुरा गर्न चाहन्छु।"
  )}`;

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Collapsed Floating Trigger */}
      {!isOpen && (
        <button
          onClick={handleOpen}
          aria-label="Open Parajuli Style Assistant"
          className="relative group p-4 rounded-full gold-gradient-bg text-black shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer"
        >
          {/* Pulsing halo */}
          <span className="absolute -inset-1 rounded-full bg-[#D4AF37] opacity-40 blur group-hover:opacity-75 animate-pulse transition duration-1000"></span>
          
          <div className="relative flex items-center space-x-2">
            <MessageCircle className="w-6 h-6 fill-black" />
            <span className="hidden sm:inline font-semibold text-xs tracking-wider uppercase pr-1">
              {t.chatbot.title}
            </span>
          </div>

          {/* Unread indicator */}
          {hasUnread && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 border-2 border-[#090A0E] rounded-full animate-bounce"></span>
          )}
        </button>
      )}

      {/* Expanded Chat Widget Window */}
      {isOpen && (
        <div className="w-[92vw] sm:w-96 h-[540px] max-h-[85vh] rounded-3xl glass-panel border border-[#C5A880]/40 shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden animate-in slide-in-from-bottom-6 duration-300">
          
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-[#171A25] via-[#1F2433] to-[#171A25] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-9 h-9 rounded-full gold-gradient-bg flex items-center justify-center text-black font-serif font-bold text-base shadow">
                  A
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-[#171A25]"></span>
              </div>
              <div>
                <h4 className="text-sm font-serif text-white font-medium flex items-center space-x-1.5">
                  <span>{t.chatbot.title}</span>
                  <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                </h4>
                <p className="text-[10px] text-[#A89E8D]">
                  {t.chatbot.subtitle}
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full hover:bg-white/10 text-[#CBC5B8] hover:text-white transition-colors cursor-pointer"
              aria-label="Close assistant"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Prompts Carousel */}
          <div className="px-3 py-2 bg-[#0F121A] border-b border-white/5 overflow-x-auto flex space-x-2 scrollbar-none">
            {t.chatbot.quickPrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(prompt)}
                className="text-[11px] whitespace-nowrap px-3 py-1 rounded-full bg-white/[0.04] hover:bg-[#D4AF37]/20 border border-white/10 hover:border-[#D4AF37]/50 text-[#CBC5B8] hover:text-[#D4AF37] transition-all flex items-center space-x-1 cursor-pointer"
              >
                <span>{prompt}</span>
              </button>
            ))}
          </div>

          {/* Message History */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-gradient-to-b from-[#0A0B10] to-[#0F121A]">
            {displayedMessages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3.5 rounded-2xl text-xs leading-relaxed ${
                    msg.sender === 'user'
                      ? 'gold-gradient-bg text-black font-medium rounded-tr-none shadow-md'
                      : 'bg-[#181B26] text-[#E0DCD3] border border-white/10 rounded-tl-none shadow-sm'
                  }`}
                >
                  <p>{msg.text}</p>

                  {/* Optional Action Link inside bot message */}
                  {msg.actionUrl && (
                    <a
                      href={msg.actionUrl}
                      onClick={() => setIsOpen(false)}
                      className="mt-2.5 inline-flex items-center space-x-1 text-[11px] text-[#D4AF37] hover:underline font-semibold"
                    >
                      <span>{msg.actionText}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
                <span className="text-[9px] text-[#78746D] mt-1 px-1">
                  {msg.time}
                </span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Human Stylist Connect Banner */}
          <div className="px-3 py-1.5 bg-[#12151F] border-t border-white/5 flex items-center justify-between text-[11px]">
            <span className="text-[#A89E8D] text-[10px]">
              {isEn ? "Need live personal advice?" : "प्रत्यक्ष स्टाइलिस्ट चाहिन्छ?"}
            </span>
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#25D366] hover:text-emerald-300 font-medium flex items-center space-x-1"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span>{t.chatbot.humanButton}</span>
            </a>
          </div>

          {/* Text Input Footer */}
          <div className="p-3 bg-[#151824] border-t border-white/10 flex items-center space-x-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder={t.chatbot.placeholder}
              className="flex-1 px-3.5 py-2.5 rounded-full bg-[#0D0F16] border border-white/10 text-xs text-white placeholder-[#78746D] focus:outline-none focus:border-[#D4AF37]"
            />
            <button
              onClick={() => handleSend()}
              disabled={!inputValue.trim()}
              className="p-2.5 rounded-full gold-gradient-bg text-black disabled:opacity-40 hover:brightness-110 active:scale-95 transition-all shadow cursor-pointer"
              aria-label="Send message"
            >
              <Send className="w-4 h-4 fill-black" />
            </button>
          </div>

        </div>
      )}
    </div>
  );
}
