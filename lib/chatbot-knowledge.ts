// Simulated Chatbot Knowledge Base - Enhanced & Localized
// Uses keys that match the translation files (e.g., messages/pt.json)

export interface ChatbotResponse {
    replyKey: string;
    type: string;
    confidence: number;
    suggestions?: string[]; // These can also be keys or localized queries
}

// Knowledge base mapping intent to translation keys
export const knowledgeBase: Record<string, ChatbotResponse> = {
    greeting: {
        replyKey: "greeting",
        type: "greeting",
        confidence: 1.0,
        suggestions: ["who", "siga", "projects", "contact"]
    },
    profile: {
        replyKey: "profile",
        type: "profile",
        confidence: 1.0,
        suggestions: ["specializations", "experience", "tech"]
    },
    specializations: {
        replyKey: "specializations",
        type: "specializations",
        confidence: 1.0,
        suggestions: ["siga", "tech", "projects"]
    },
    location: {
        replyKey: "location",
        type: "location",
        confidence: 1.0,
        suggestions: ["contact"]
    },
    age: {
        replyKey: "age",
        type: "education",
        confidence: 1.0
    },
    experience: {
        replyKey: "experience",
        type: "experience",
        confidence: 1.0,
        suggestions: ["volet", "siga"]
    },
    siga: {
        replyKey: "siga",
        type: "project:siga",
        confidence: 1.0,
        suggestions: ["projects"]
    },
    restaurant: {
        replyKey: "restaurant",
        type: "project:restaurant",
        confidence: 1.0,
        suggestions: ["projects"]
    },
    business: {
        replyKey: "business",
        type: "project:business",
        confidence: 1.0,
        suggestions: ["projects"]
    },
    giftcard: {
        replyKey: "giftcard",
        type: "project:giftcard",
        confidence: 1.0,
        suggestions: ["projects"]
    },
    projects: {
        replyKey: "projects",
        type: "projects",
        confidence: 1.0,
        suggestions: ["siga", "restaurant", "business", "giftcard"]
    },
    contact: {
        replyKey: "contact",
        type: "contact",
        confidence: 1.0,
        suggestions: ["contactButton"]
    },
    fallback: {
        replyKey: "fallback",
        type: "unknown",
        confidence: 0.2,
        suggestions: ["who", "siga", "projects", "contact"]
    }
};

/**
 * Detects the user's intent based on the message content.
 * Supports Portuguese, English, and Spanish keywords.
 */
export function detectIntent(message: string): ChatbotResponse {
    const lowercaseMsg = message.toLowerCase().trim();

    // 1. GREETINGS
    // PT: olá, oi, bom dia... | EN: hello, hi, hey... | ES: hola, buenos días...
    if (/^(olá|ola|oi|hey|hello|hi|hey|hola|buenos|buenas|bom dia|boa tarde|boa noite|good morning|afternoon|evening)$/i.test(lowercaseMsg)) {
        return knowledgeBase.greeting;
    }

    // 2. PROFILE & ABOUT
    // Who are you? / Quem é? / Quién es?
    if (/(quem é|quem e|who are you|quien eres|quién eres|sobre ti|sobre você|sobre voce|about you|perfil|profile|neil michael|desenvolvedor|dev|apresenta-te|introduce yourself)/i.test(lowercaseMsg)) {
        return knowledgeBase.profile;
    }

    // Specializations / O que faz? / Que haces?
    if (/(especializa|especializações|specializ|foco|focus|o que faz|what do you do|que haces|área|area)/i.test(lowercaseMsg)) {
        return knowledgeBase.specializations;
    }

    // Location / Onde está? / Where are you? / Donde estas?
    if (/(onde está|onde esta|where are you|donde estas|donde estás|localização|location|localizacion|baseado|based|cidade|city|país|country|moçambique|mozambique|maputo)/i.test(lowercaseMsg)) {
        return knowledgeBase.location;
    }

    // Age / Idade / Edad
    if (/(idade|age|edad|anos|years|quantos anos|how old|nascimento|birth)/i.test(lowercaseMsg)) {
        return knowledgeBase.age;
    }

    // 3. EXPERIENCE
    if (/(experiência|experiencia|experience|trabalhou|worked|work|onde trabalha|empresas|companies|histórico|history|career)/i.test(lowercaseMsg)) {
        return knowledgeBase.experience;
    }

    // 4. PROJECTS SPECIFIC
    // SIGA
    if (/(siga|académica|academica|academic|universidade|university|escola|school)/i.test(lowercaseMsg)) {
        return knowledgeBase.siga;
    }

    // Restaurant
    if (/(restaurante|restaurant|pedidos|orders|cozinha|kitchen|cardápio|menu|qr code|pos)/i.test(lowercaseMsg)) {
        return knowledgeBase.restaurant;
    }

    // Business Platform / Marketplace
    if (/(business|negócios|negocios|marketplace|lojas|store|shops|e-commerce|ecommerce)/i.test(lowercaseMsg)) {
        return knowledgeBase.business;
    }

    // Gift Cards
    if (/(gift card|cartão presente|cartao presente|tarjeta regalo)/i.test(lowercaseMsg)) {
        return knowledgeBase.giftcard;
    }

    // 5. GENERAL PROJECTS LISTING
    if (/(projectos|proyectos|projects|trabalhos|works|portfolio|portfólio|mostrar|show|lista)/i.test(lowercaseMsg)) {
        return knowledgeBase.projects;
    }

    // 6. CONTACT
    if (/(contacto|contato|contact|contáctame|contáctame|email|falar|talk|conversar|chat|linkedin|github)/i.test(lowercaseMsg)) {
        return knowledgeBase.contact;
    }

    // FALLBACK
    return knowledgeBase.fallback;
}
