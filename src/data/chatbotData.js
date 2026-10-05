export const chatbotResponses = {
  en: {
    welcome: "Namaste! I am your Parajuli Fabric Store Concierge. Are you looking for heirloom bridal sharees, meter-wise cashmere pashmina, Italian suiting, or directions to our Zero Km boutique?",
    defaultReply: "Thank you for reaching out to Parajuli Fabric Store! We specialize in pure Banarasi silks, Himalayan cashmere pashminas, and Italian suiting cut to your exact meter. Would you like to view our collections or connect directly with our head stylist at Zero Km, Pokhara?",
    keywords: [
      {
        tokens: ["banarasi", "saree", "sharee", "wedding", "bridal", "marriage", "lehenga"],
        response: "Our bridal collection includes pure handloom Katan Banarasi sarees, gold zari kadhwa weaves, and pastel embroidered organzas (starting Rs. 16,500). Each piece is curated to be an heirloom. You can visit us at Zero Km to drape and feel the fabrics firsthand!",
        actionUrl: "#collections",
        actionText: "View Sharees Collection"
      },
      {
        tokens: ["pashmina", "cashmere", "meter", "meters", "wool", "winter", "fabric"],
        response: "We offer 100% authentic Himalayan Cashmere Pashmina cut meter-wise directly from rolls (48\" width) starting from Rs. 3,500/meter. We also have raw mulberry silk, Egyptian Giza cotton, and Belgian linen. Zero fabric waste!",
        actionUrl: "#calculator",
        actionText: "Open Fabric Meter Calculator"
      },
      {
        tokens: ["location", "address", "where", "directions", "zero km", "reach", "map"],
        response: "We are located prominently at Zero Km, Pokhara-5, Nepal (near the Zero Km intersection connecting Lakeside and Baglung Highway). It is just an 8-minute scenic drive from Lakeside! Open daily from 10:00 AM to 8:00 PM.",
        actionUrl: "#location",
        actionText: "Get Google Map Directions"
      },
      {
        tokens: ["suit", "suiting", "shirting", "daura", "suruwal", "coat", "blazer", "men"],
        response: "For gentlemen, we stock Super 140s Italian Merino wool, Egyptian long-staple Giza cotton, and heritage wool for national Daura Suruwal. We cut exact lengths for jackets, trousers, and 3-piece suits.",
        actionUrl: "#collections",
        actionText: "Explore Suiting"
      },
      {
        tokens: ["hours", "time", "open", "timing", "saturday"],
        response: "Parajuli Fabric Store is open 7 days a week, from 10:00 AM to 8:00 PM, including Saturdays. You are welcome anytime for a complimentary styling session and Himalayan tea!",
        actionUrl: "#location",
        actionText: "Store Timings"
      },
      {
        tokens: ["price", "cost", "rate", "discount"],
        response: "Our fabrics range from Rs. 950/m for micro-velvets, Rs. 1,450/m for European linen, Rs. 1,850/m for raw silk, up to Rs. 4,200/m for Italian virgin wool. Sharees start from Rs. 14,000 to Rs. 45,000+ for heirloom bridal pieces.",
        actionUrl: "#collections",
        actionText: "Browse Priced Catalog"
      },
      {
        tokens: ["owner", "owners", "proprietor", "proprietors", "founder", "founders", "janak", "sita", "parajuli", "poudel", "email", "mail", "contact email"],
        response: "Parajuli Fabric Store is proudly founded and owned by Janak Raj Parajuli & Sita Kumari Poudel. For direct inquiries, custom orders, or bridal appointments, you can email them directly at Parajulijanak34@gmail.com, call/WhatsApp at +977 9856025496, or meet them at our Zero Km, Pokhara-5 boutique!",
        actionUrl: "mailto:Parajulijanak34@gmail.com",
        actionText: "Email Parajulijanak34@gmail.com"
      },
    ]
  },

  ne: {
    welcome: "नमस्ते! म पराजुली फेब्रिक स्टोरको फेसन सहयोगी हुँ। तपाईंलाई विवाहको बनारसी सारी, मिटर अनुसारको हिमाली पश्मिना, सुटिङ कपडा वा जिरो किमी पसलको ठेगानामध्ये के चाहिएको छ?",
    defaultReply: "सोधपुछको लागि धन्यवाद! हामीसँग शुद्ध कतान बनारसी सारी, हिमाली पश्मिना, इटालियन ऊन र आफूलाई चाहिने नापमा काट्न मिल्ने कपडाहरू उपलब्ध छन्। हाम्रो संग्रह हेर्न वा जिरो किमीका स्टाइलिस्टसँग कुरा गर्न चाहनुहुन्छ?",
    keywords: [
      {
        tokens: ["सारी", "बनारसी", "विवाह", "बिहे", "दुलाहा", "दुलही", "sharee", "saree", "bridal"],
        response: "हाम्रो ब्राइडल संग्रहमा शुद्ध हातले बुनिएको कतान बनारसी, सुनौलो जरी बुट्टा र पार्टीवेयर अर्गान्जा सारीहरू उपलब्ध छन् (रु. १६,५०० बाट सुरु)। जिरो किमी स्टोरमा आएर कपडा छोएर रोज्न सक्नुहुन्छ!",
        actionUrl: "#collections",
        actionText: "सारी संकलन हेर्नुहोस्"
      },
      {
        tokens: ["पश्मिना", "मिटर", "कपडा", "कटन", "सिल्क", "fabric", "meter"],
        response: "हामीकहाँ १००% असली हिमाली पश्मिना (४८ इन्च पन्ना) रु. ३,५००/मिटरबाट सुरु हुन्छ। यसका साथै मलबेरी सिल्क, इजिप्सियन कटन र लिनेन पनि मिटर अनुसार काट्न मिल्छ।",
        actionUrl: "#calculator",
        actionText: "कपडा क्यालकुलेटर खोल्नुहोस्"
      },
      {
        tokens: ["ठेगाना", "कहाँ", "लोकेसन", "जिरो किमी", "बाटो", "location", "address", "map"],
        response: "हाम्रो बुटिक पोखरा-५, जिरो किमी चोक नजिकै अवस्थित छ (लेकसाइडबाट गाडीमा ८-१० मिनेट मात्र)। हप्ताको सातै दिन बिहान १०:०० देखि बेलुका ८:०० बजेसम्म खुला रहन्छ।",
        actionUrl: "#location",
        actionText: "गुगल म्यापमा हेर्नुहोस्"
      },
      {
        tokens: ["सुटिङ", "कोट", "दौरा", "सुरुवाल", "सर्ट", "पुरुष", "suit", "daura"],
        response: "दौरा-सुरुवाल र कोटको लागि इटालियन सुपर १४०एस मेरिनो ऊन, इजिप्सियन गिजा कटन र शुद्ध म्याट ऊन उपलब्ध छन्। सटिक नापमा कपडा काटिन्छ।",
        actionUrl: "#collections",
        actionText: "सुटिङ हेर्नुहोस्"
      },
      {
        tokens: ["समय", "कति बजे", "खुला", "शनिबार", "hours", "time"],
        response: "हाम्रो बुटिक शनिबारसहित हप्ताको सातै दिन बिहान १०:०० बजेदेखि बेलुका ८:०० बजेसम्म खुला रहन्छ। कुनै पनि समय पाल्न सक्नुहुन्छ!",
        actionUrl: "#location",
        actionText: "पसलको समय हेर्नुहोस्"
      },
      {
        tokens: ["मूल्य", "कति पर्छ", "भाउ", "दर", "price", "rate"],
        response: "कपडाको मूल्य रु. ९५०/मिटर (मखमली), रु. १,८५०/मिटर (रअ् सिल्क), रु. ३,५००/मिटर (पश्मिना) र सारीहरू रु. १४,००० देखि रु. ४५,००० सम्मका उपलब्ध छन्।",
        actionUrl: "#collections",
        actionText: "मूल्यसहित क्याटलग हेर्नुहोस्"
      },
      {
        tokens: ["सञ्चालक", "मालिक", "संस्थापक", "जनक", "सीता", "पराजुली", "पौडेल", "इमेल", "email", "owner", "proprietor"],
        response: "पराजुली फेब्रिक स्टोरका संस्थापक तथा सञ्चालकहरू जनक राज पराजुली र सीता कुमारी पौडेल हुनुहुन्छ। प्रत्यक्ष सम्पर्क वा विशेष अर्डरका लागि उहाँहरूलाई सिधै Parajulijanak34@gmail.com मा इमेल गर्न वा +९७७ ९८५६०२५४९६ मा ह्वाट्सएप/फोन गर्न सक्नुहुन्छ!",
        actionUrl: "mailto:Parajulijanak34@gmail.com",
        actionText: "इमेल पठाउनुहोस् (Parajulijanak34@gmail.com)"
      },
    ]
  }
};
