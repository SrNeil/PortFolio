// Simulated Chatbot Knowledge Base - Enhanced Version
// Pre-defined responses with suggestions for better UX

export interface ChatbotResponse {
    reply: string;
    type: string;
    confidence: number;
    suggestions?: string[];
}

// Comprehensive knowledge base with all Q&A scenarios
export const knowledgeBase: Record<string, ChatbotResponse> = {
    // Profile & About
    profile: {
        reply: "Sou Neil Michael, engenheiro de software Fullstack com foco em automação, chatbots, e desenvolvimento web e mobile.",
        type: "profile",
        confidence: 1.0,
        suggestions: ["Quais as tuas especializações?", "Onde trabalhaste?", "Que tecnologias usas?"]
    },
    specializations: {
        reply: "Especializado em Automação de Processos, Chatbots Inteligentes, Sistemas de Gestão Empresarial e Desenvolvimento Web/Mobile.",
        type: "specializations",
        confidence: 1.0,
        suggestions: ["O que é o SIGA?", "Que tecnologias usas?", "Mostrar projectos"]
    },
    location: {
        reply: "Estou baseado em Maputo, Moçambique. Trabalho remotamente com clientes locais e internacionais.",
        type: "location",
        confidence: 1.0,
        suggestions: ["Como posso contactar?", "Ofereces consultoria?"]
    },
    age: {
        reply: `Tenho ${new Date().getFullYear() - 2003} anos e sou finalista em Engenharia Informática e de Telecomunicações no Instituto Superior Politécnico.`,
        type: "education",
        confidence: 1.0,
        suggestions: ["Onde trabalhaste?", "Que projectos desenvolveste?"]
    },
    sandbox: {
        reply: "O Sandbox do Banco de Moçambique é um ambiente regulado de testes para inovações fintech. Participei através da VOLET desenvolvendo soluções financeiras com supervisão do regulador.",
        type: "experience:sandbox",
        confidence: 1.0,
        suggestions: ["Conta mais sobre o VOLET", "Que tecnologias usaste?", "Outros projectos fintech"]
    },

    // Experience
    experience: {
        reply: "Experiência em UCL (2018-2019), GreenPrint (2021-2022), Nidjula (2022) e VOLET (2022–Presente). Atualmente também desenvolvedor freelancer.",
        type: "experience",
        confidence: 1.0,
        suggestions: ["Conta mais sobre o VOLET", "O que fizeste na Nidjula?", "Que projectos desenvolveste?"]
    },
    volet: {
        reply: "Na VOLET desenvolvi aplicações financeiras usando NuxtJS, React Native e Flutter, participando no projeto Sandbox do Banco de Moçambique (Inovação Fintech).",
        type: "experience:volet",
        confidence: 1.0,
        suggestions: ["O que é o Sandbox do BM?", "Que outras empresas?", "Que tecnologias usas?"]
    },
    nidjula: {
        reply: "Na Nidjula fiz implementação de sistemas de segurança CCTV, desenvolvimento de ferramentas internas e otimização de infraestrutura de rede.",
        type: "experience:nidjula",
        confidence: 1.0,
        suggestions: ["Experiência completa", "Que projectos tens?"]
    },

    // Projects - SIGA
    siga: {
        reply: "SIGA é um Sistema Integrado de Gestão Académica: gestão de alunos, matrículas, notas, pagamentos, relatórios e portais para docentes e estudantes.",
        type: "project:siga",
        confidence: 1.0,
        suggestions: ["Quais as funcionalidades do SIGA?", "Que tecnologias usaste no SIGA?", "Quanto tempo para implementar?"]
    },
    sigaFeatures: {
        reply: "SIGA tem: gestão de estudantes, matrículas com validação de pré-requisitos, pagamentos e multas, emissão de recibos, gestão de turmas, portais para estudantes e docentes, lançamento de notas, histórico escolar, sistema RBAC e dashboards com KPIs.",
        type: "project:siga:features",
        confidence: 1.0,
        suggestions: ["Que tecnologias usaste no SIGA?", "Quanto custa implementar?", "Posso ver uma demo?"]
    },
    sigaTech: {
        reply: "SIGA usa Next.js 14 (front), React, TypeScript, Tailwind CSS, Shadcn/ui para UI, MSW para mock API, Playwright para testes E2E.",
        type: "project:siga:tech",
        confidence: 0.95,
        suggestions: ["Por que Next.js?", "Como importar dados existentes?", "Tem API pública?"]
    },
    sigaStatus: {
        reply: "SIGA está em desenvolvimento/protótipo funcional. O frontend está completo com fluxos simulados, pronto para integração com backend real.",
        type: "project:siga:status",
        confidence: 0.9,
        suggestions: ["Posso ver uma demo?", "Quanto tempo para produção?", "Que funcionalidades faltam?"]
    },
    sigaTime: {
        reply: "Estimativa para MVP do SIGA numa escola: 4–8 semanas para setup básico, 12–16 semanas para versão completa com integrações.",
        type: "project:siga:timeline",
        confidence: 0.35,
        suggestions: ["Quanto custa?", "Ofereces suporte?", "Como pedir orçamento?"]
    },

    // Projects - Restaurant
    restaurant: {
        reply: "Sistema de Automação para Restaurantes com gestão de pedidos, cardápio digital via QR Code, painel de cozinha (KDS) e controle de estoque em tempo real.",
        type: "project:restaurant",
        confidence: 1.0,
        suggestions: ["Como funcionam os pedidos?", "Que tecnologias usaste?", "Suporta impressoras térmicas?"]
    },
    restaurantFlow: {
        reply: "No Sistema de Restaurantes, um pedido é criado no POS, vai para a cozinha via WebSocket em tempo real e gera impressão automática ESC/POS.",
        type: "project:restaurant:flow",
        confidence: 0.9,
        suggestions: ["Como funciona a impressão?", "Suporta impressoras térmicas?", "Que mais podes desenvolver?"]
    },
    restaurantTech: {
        reply: "Sistema de Restaurantes usa React, Node.js, Socket.io para tempo real e MongoDB para base de dados.",
        type: "project:restaurant:tech",
        confidence: 1.0,
        suggestions: ["Por que Socket.io?", "Outros projectos", "Como pedir demo?"]
    },

    // Projects - Business Platform
    business: {
        reply: "Plataforma de Negócios é um marketplace multi-lojas com gestão de produtos, pagamentos integrados (Stripe) e onboarding automático de lojistas.",
        type: "project:business",
        confidence: 1.0,
        suggestions: ["Que tecnologias usaste?", "Como funciona o pagamento?", "Outros projectos"]
    },
    businessTech: {
        reply: "Business Platform usa Vue.js/Nuxt, Firebase para backend, Stripe API para pagamentos e Node.js.",
        type: "project:business:tech",
        confidence: 1.0,
        suggestions: ["Por que Vue.js?", "Como integras Stripe?", "Ver todos os projectos"]
    },

    // Projects - Gift Cards
    giftcard: {
        reply: "Loja de Gift Cards permite comprar cartões presente de diversos serviços com entrega digital automática por email após confirmação de pagamento.",
        type: "project:giftcard",
        confidence: 1.0,
        suggestions: ["Que tecnologias usaste?", "Como funciona a entrega?", "Outros projectos"]
    },
    giftcardTech: {
        reply: "Loja de Gift Cards usa Next.js, Supabase, Tailwind CSS e Stripe para pagamentos seguros.",
        type: "project:giftcard:tech",
        confidence: 1.0,
        suggestions: ["Por que Supabase?", "Como proteges os códigos?", "Ver projectos"]
    },

    // Technologies & Stack
    tech: {
        reply: "Stack típica: Next.js/Nuxt, React, React Native, Flutter, Node.js, PHP, MySQL/Postgres, Tailwind, Git, Figma.",
        type: "tech",
        confidence: 1.0,
        suggestions: ["Por que Next.js?", "Que DB escolhes?", "Usas TypeScript?"]
    },
    whyNextjs: {
        reply: "Escolho Next.js pelo SSR/SSG, excelente performance, SEO otimizado, App Router moderno e ecossistema React robusto.",
        type: "tech:nextjs",
        confidence: 0.85,
        suggestions: ["Por que Tailwind?", "Usas TypeScript?", "Que projectos usam Next.js?"]
    },
    whyTailwind: {
        reply: "Tailwind CSS permite desenvolvimento rápido, design consistente, customização fácil e bundle otimizado. Ideal para produtividade.",
        type: "tech:tailwind",
        confidence: 0.85,
        suggestions: ["Usas componentes prontos?", "Por que Next.js?", "Como garantes acessibilidade?"]
    },
    database: {
        reply: "Para multi-tenant recomendo PostgreSQL com schemas isolados ou MongoDB com coleções por tenant. Depende da complexidade dos dados.",
        type: "tech:database",
        confidence: 0.7,
        suggestions: ["Como fazes backups?", "Usas ORMs?", "Que tecnologias usas?"]
    },
    typescript: {
        reply: "Sim, uso TypeScript em todos os projectos modernos. Garante type-safety, menos bugs e melhor DX (Developer Experience).",
        type: "tech:typescript",
        confidence: 1.0,
        suggestions: ["Que outras tecnologias?", "Usas testes automatizados?"]
    },

    // Authentication & Security
    auth: {
        reply: "Suporto JWT para APIs stateless, Sessions para apps tradicionais e OAuth2 para login social (Google, GitHub). Depende do caso de uso.",
        type: "tech:auth",
        confidence: 0.7,
        suggestions: ["Como proteges dados sensíveis?", "Usas 2FA?", "Que tecnologias usas?"]
    },
    security: {
        reply: "Protejo dados com SSL/TLS, hashing de senhas (bcrypt/argon2), backups encriptados, sistema RBAC para permissões e validação rigorosa de inputs.",
        type: "security",
        confidence: 0.8,
        suggestions: ["Como fazes backups?", "É compatível com GDPR?", "Usas testes de segurança?"]
    },
    gdpr: {
        reply: "Para conformidade GDPR recomendo: consentimento explícito, política de privacidade clara, direito ao esquecimento e exports de dados pessoais.",
        type: "security:gdpr",
        confidence: 0.5,
        suggestions: ["Como proteges dados?", "Ofereces consultoria GDPR?"]
    },

    // Payments & Integrations
    payments: {
        reply: "Integro Stripe para pagamentos internacionais e gateways locais (M-Pesa, e-Mola) para Moçambique. APIs seguras com webhooks.",
        type: "integrations:payments",
        confidence: 0.7,
        suggestions: ["Como integras M-Pesa?", "Suportas pagamentos recorrentes?", "Que outras integrações?"]
    },
    integrations: {
        reply: "Integrações comuns: Email (SMTP/SendGrid), SMS (Twilio), Pagamentos (Stripe/M-Pesa), Impressão (ESC/POS), APIs REST/GraphQL.",
        type: "integrations",
        confidence: 0.7,
        suggestions: ["Como integras email?", "Tens API pública?", "Ofereces desenvolvimento de APIs?"]
    },
    api: {
        reply: "Sim, desenvolvo APIs RESTful e GraphQL com documentação OpenAPI/Swagger. Incluo autenticação, rate limiting e versionamento.",
        type: "integrations:api",
        confidence: 0.8,
        suggestions: ["Que tecnologias usas para APIs?", "Ofereces manutenção de APIs?"]
    },

    // Design & UX
    design: {
        reply: "Foco em design SaaS moderno com dark mode, glassmorphism, animações suaves (Framer Motion) e UX intuitiva. Priorizo acessibilidade e responsividade.",
        type: "design",
        confidence: 0.9,
        suggestions: ["Por que dark mode?", "Como garantes acessibilidade?", "Usas Figma?"]
    },
    accessibility: {
        reply: "Implemento ARIA labels, navegação por teclado, contraste adequado e suporte a screen readers. Acessibilidade é prioridade em todos os projectos.",
        type: "design:accessibility",
        confidence: 0.7,
        suggestions: ["Que padrões segues?", "Testes de acessibilidade?"]
    },

    // Deployment & Hosting
    deployment: {
        reply: "Para deploy recomendo Vercel (Next.js), Railway/Render para backends, DigitalOcean/AWS para controle total. Uso CI/CD com GitHub Actions.",
        type: "deployment",
        confidence: 0.75,
        suggestions: ["Como configuro Vercel?", "Preciso de CI/CD?", "Ofereces deploy?"]
    },
    backups: {
        reply: "Recomendo backups automáticos diários para produção, semanais para dev. Exports em SQL/CSV, armazenados encriptados em cloud (S3/Backblaze).",
        type: "deployment:backups",
        confidence: 0.6,
        suggestions: ["Como restaurar backups?", "Quanto custa storage?"]
    },

    // Testing & Quality
    testing: {
        reply: "Uso testes unitários (Jest/Vitest), E2E (Playwright/Cypress), CI com GitHub Actions e code review rigoroso. TDD quando aplicável.",
        type: "testing",
        confidence: 0.6,
        suggestions: ["Que coverage almejas?", "Como testo mobile?", "Ofereces QA?"]
    },
    performance: {
        reply: "Optimização: caching (Redis), CDN (Cloudflare), índices de DB, lazy loading, code splitting e monitorização (Sentry/LogRocket).",
        type: "performance",
        confidence: 0.7,
        suggestions: ["Como monitorizas performance?", "Usas CDN?"]
    },

    // Services & Consulting
    consulting: {
        reply: "Sim, ofereço consultoria técnica, implementação de sistemas customizados, automação de processos e desenvolvimento de chatbots.",
        type: "services:consulting",
        confidence: 1.0,
        suggestions: ["Como pedir orçamento?", "Que serviços ofereces?", "Contactar"]
    },
    support: {
        reply: "Ofereço suporte e manutenção mensal ou por hora. Inclui: bug fixes, updates de segurança, backups, monitorização e novas features.",
        type: "services:support",
        confidence: 0.3,
        suggestions: ["Quanto cobra por manutenção?", "Como pedir orçamento?"]
    },
    pricing: {
        reply: "Pricing varia por projeto. SIGA pode ser licença única (10k–30k USD) ou SaaS (50–200 USD/mês por instituição). Contacta para orçamento personalizado.",
        type: "services:pricing",
        confidence: 0.3,
        suggestions: ["Como pedir orçamento?", "Ofereces descontos?", "Contactar"]
    },

    // Documentation & Demo
    demo: {
        reply: "Podes ver screenshots e detalhes dos projectos em /projects. Para demo ao vivo ou acesso ao sistema, contacta via /contact.",
        type: "demo",
        confidence: 1.0,
        suggestions: ["Ver projectos", "Contactar", "Que imagens tens?"]
    },
    demoRequest: {
        reply: "Para agendar uma demonstração personalizada, preenche o formulário em /contact ou envia email. Responderei em 24-48h.",
        type: "demo_request",
        confidence: 1.0,
        suggestions: ["Abrir formulário de contacto", "Ver projectos antes"]
    },
    assets: {
        reply: "Para portfolio enviar: Dashboard (1-2 imgs), Painel docente (1), Painel estudante (1), Matrículas (1), Pagamentos (1), Login (1), Logo e vídeo 20-40s dos fluxos principais.",
        type: "assets",
        confidence: 1.0,
        suggestions: ["Que formato de imagens?", "Enviar screenshots", "Preciso de logo?"]
    },

    // Mobile & Multilingual
    mobile: {
        reply: "Desenvolvo apps mobile nativas com React Native e Flutter. Todos os sistemas web são responsivos (mobile-first). PWA disponível quando aplicável.",
        type: "mobile",
        confidence: 0.8,
        suggestions: ["Qual a diferença RN vs Flutter?", "Quanto custa app mobile?"]
    },
    pwa: {
        reply: "PWA (Progressive Web App) permite instalar o site como app, funcionar offline e receber notificações. Ótimo custo-benefício vs app nativa.",
        type: "mobile:pwa",
        confidence: 0.5,
        suggestions: ["Que projectos têm PWA?", "PWA vs App nativa?"]
    },
    multilingual: {
        reply: "Sistemas suportam PT/EN com i18n (next-intl/i18next). Outros idiomas podem ser adicionados facilmente. Locale detection automático.",
        type: "multilingual",
        confidence: 0.4,
        suggestions: ["Como adicionar novo idioma?", "Suportas tradução automática?"]
    },

    // Open Source & License
    opensource: {
        reply: "Alguns projectos pessoais são open-source (GitHub). Projectos comerciais são proprietários, mas posso licenciar código-fonte aos clientes.",
        type: "license",
        confidence: 0.4,
        suggestions: ["Ver GitHub", "Como licenciar código?"]
    },

    // Navigation & Site Info
    navigation: {
        reply: "Podes ver Projectos em /projects, Skills em /skills, Experiência em /experience, Serviços em /services e Contacto em /contact.",
        type: "navigation",
        confidence: 1.0,
        suggestions: ["Ver projectos", "Ver skills", "Contactar"]
    },
    contact: {
        reply: "Contacta via formulário em /contact, pelo email disponível no site ou pelo GitHub @SrNeil.",
        type: "contact",
        confidence: 1.0,
        suggestions: ["Abrir formulário", "Ver GitHub", "Ver LinkedIn"]
    },
    site: {
        reply: "Este portfólio foi criado por Neil Michael usando Next.js, Tailwind CSS, Framer Motion e TypeScript. Mostra projectos, experiência e serviços.",
        type: "site-info",
        confidence: 1.0,
        suggestions: ["Como foi feito o chatbot?", "Ver tecnologias usadas", "Ver projectos"]
    },
    chatbot: {
        reply: "Este chatbot é uma versão simulada com respostas pré-definidas. No futuro será integrado com IA real (Gemini/OpenAI) para conversas mais naturais.",
        type: "site-info:chatbot",
        confidence: 1.0,
        suggestions: ["Quem criou este site?", "Que tecnologias usas?"]
    },

    // Greeting
    greeting: {
        reply: "Olá! Sou o assistente virtual do portfólio do Neil Michael. Como posso ajudar?",
        type: "greeting",
        confidence: 1.0,
        suggestions: ["Quem é o Neil Michael?", "O que é o SIGA?", "Ver projectos", "Contactar"]
    },

    // Fallback
    fallback: {
        reply: "Não tenho uma resposta específica para isso na versão simulada. Aqui ficam algumas perguntas que podes fazer:",
        type: "unknown",
        confidence: 0.2,
        suggestions: [
            "Quem é o Neil Michael?",
            "O que é o SIGA?",
            "Que tecnologias usas?",
            "Como pedir uma demonstração?",
            "Onde posso ver os projectos?",
            "Ofereces suporte e manutenção?",
            "Quanto tempo implementar o SIGA?",
            "Como posso contactar?"
        ]
    }
};

// Enhanced intent detection with more patterns
export function detectIntent(message: string): ChatbotResponse {
    const lowercaseMsg = message.toLowerCase().trim();

    // Greeting
    if (/^(olá|ola|oi|hey|hello|hi|bom dia|boa tarde|boa noite)$/i.test(lowercaseMsg)) {
        return knowledgeBase.greeting;
    }

    // Profile & About
    if (/(quem és|quem é|quem e|sobre ti|sobre você|sobre voce|perfil|neil michael|desenvolvedor|dev|apresenta-te)/i.test(lowercaseMsg)) {
        return knowledgeBase.profile;
    }

    if (/(especializa|especializações|especializacoes|foco|o que fazes|o que faz|área|area)/i.test(lowercaseMsg)) {
        return knowledgeBase.specializations;
    }

    if (/(onde está|onde esta|localização|localizacao|baseado|cidade|país|pais|moçambique|mocambique|maputo)/i.test(lowercaseMsg)) {
        return knowledgeBase.location;
    }

    if (/(idade|anos|quantos anos|nascimento|data de nascimento)/i.test(lowercaseMsg)) {
        return knowledgeBase.age;
    }

    // Experience
    if (/(experiência|experiencia|trabalhou|trabalho|onde trabalha|empresas|histórico|historico profissional|carreira)/i.test(lowercaseMsg)) {
        return knowledgeBase.experience;
    }

    if (/volet/i.test(lowercaseMsg)) {
        return knowledgeBase.volet;
    }

    if (/nidjula/i.test(lowercaseMsg)) {
        return knowledgeBase.nidjula;
    }

    if (/(sandbox|banco de moçambique|banco de mocambique|bm|regulador|fintech.*moçambique|fintech.*mocambique)/i.test(lowercaseMsg)) {
        return knowledgeBase.sandbox;
    }

    // SIGA Project - check before general patterns
    if (/(o que é o siga|o que e o siga|siga\?|sobre o siga|para que serve o siga|sistema.*académica|sistema.*academica)/i.test(lowercaseMsg) && !/(restaurant|business|gift)/i.test(lowercaseMsg)) {
        return knowledgeBase.siga;
    }

    if (/(funcionalidades do siga|features do siga|módulos do siga|modulos do siga|o que o siga faz)/i.test(lowercaseMsg)) {
        return knowledgeBase.sigaFeatures;
    }

    if (/(tecnologias do siga|stack do siga|tech do siga|como foi feito o siga)/i.test(lowercaseMsg)) {
        return knowledgeBase.sigaTech;
    }

    if (/(estado do siga|status do siga|siga.*produção|siga.*producao|siga.*pronto)/i.test(lowercaseMsg)) {
        return knowledgeBase.sigaStatus;
    }

    if (/(quanto tempo.*siga|tempo.*implementar.*siga|prazo.*siga|deadline.*siga)/i.test(lowercaseMsg)) {
        return knowledgeBase.sigaTime;
    }

    // Restaurant Project
    if (/(restaurante|pedidos|automação restaurante|automacao restaurante|cozinha|cardápio|cardapio|qr code|pos)/i.test(lowercaseMsg) && !/(business|gift|siga)/i.test(lowercaseMsg)) {
        return knowledgeBase.restaurant;
    }

    if (/(como.*pedidos|fluxo.*pedidos|pedidos.*funciona)/i.test(lowercaseMsg)) {
        return knowledgeBase.restaurantFlow;
    }

    if (/(tecnologias.*restaurante|stack.*restaurante|tech.*restaurante)/i.test(lowercaseMsg)) {
        return knowledgeBase.restaurantTech;
    }

    // Business Platform
    if (/(business|plataforma.*negócios|plataforma.*negocios|marketplace|lojas|produtos|e-commerce|ecommerce)/i.test(lowercaseMsg) && !/(restaurant|gift|siga)/i.test(lowercaseMsg)) {
        return knowledgeBase.business;
    }

    if (/(tecnologias.*business|stack.*business|tech.*business|tecnologias.*plataforma)/i.test(lowercaseMsg)) {
        return knowledgeBase.businessTech;
    }

    // Gift Cards
    if (/(gift card|cartão presente|cartao presente|loja.*gift|gift.*store)/i.test(lowercaseMsg)) {
        return knowledgeBase.giftcard;
    }

    if (/(tecnologias.*gift|stack.*gift|tech.*gift)/i.test(lowercaseMsg)) {
        return knowledgeBase.giftcardTech;
    }

    // Technologies - general (should come after specific project tech questions)
    if (/(tecnologias|stack|tech|linguagens|framework|ferramentas|tools)/i.test(lowercaseMsg) && !/siga|restaurant|business|gift/.test(lowercaseMsg)) {
        return knowledgeBase.tech;
    }

    if (/(por que next|porque next|why next|next\.?js)/i.test(lowercaseMsg)) {
        return knowledgeBase.whyNextjs;
    }

    if (/(por que tailwind|porque tailwind|why tailwind)/i.test(lowercaseMsg)) {
        return knowledgeBase.whyTailwind;
    }

    // Database - check after Sandbox to avoid conflicts
    if (/(database|base de dados|db|qual.*db|postgres|mysql|mongodb)/i.test(lowercaseMsg) && !/sandbox/.test(lowercaseMsg)) {
        return knowledgeBase.database;
    }

    if (/(typescript|ts\?|usas typescript)/i.test(lowercaseMsg)) {
        return knowledgeBase.typescript;
    }

    // Auth & Security
    if (/(autenticação|autenticacao|auth|login|jwt|oauth|session)/i.test(lowercaseMsg)) {
        return knowledgeBase.auth;
    }

    if (/(segurança|seguranca|security|proteges dados|proteger|ssl|hashing)/i.test(lowercaseMsg)) {
        return knowledgeBase.security;
    }

    if (/(gdpr|privacidade|consentimento|dados pessoais)/i.test(lowercaseMsg)) {
        return knowledgeBase.gdpr;
    }

    // Payments & Integrations
    if (/(pagamento|payment|stripe|m-pesa|e-mola|gateway)/i.test(lowercaseMsg)) {
        return knowledgeBase.payments;
    }

    if (/(integrações|integracoes|integrations|api|email|sms)/i.test(lowercaseMsg) && !/(api pública|api publica)/.test(lowercaseMsg)) {
        return knowledgeBase.integrations;
    }

    if (/(api pública|api publica|rest|graphql|desenvolver.*api)/i.test(lowercaseMsg)) {
        return knowledgeBase.api;
    }

    // Design
    if (/(design|ui|ux|interface|dark mode|glassmorphism|animações|animacoes)/i.test(lowercaseMsg)) {
        return knowledgeBase.design;
    }

    if (/(acessibilidade|accessibility|aria|screen reader)/i.test(lowercaseMsg)) {
        return knowledgeBase.accessibility;
    }

    // Deployment
    if (/(deploy|deployment|hosting|vercel|aws|railway|render|digitalocean)/i.test(lowercaseMsg)) {
        return knowledgeBase.deployment;
    }

    if (/(backup|backups|restore|recuperação|recuperacao)/i.test(lowercaseMsg)) {
        return knowledgeBase.backups;
    }

    // Testing
    if (/(teste|test|testing|qa|qualidade|jest|playwright|cypress)/i.test(lowercaseMsg)) {
        return knowledgeBase.testing;
    }

    if (/(performance|optimização|optimizacao|caching|cdn|velocidade)/i.test(lowercaseMsg)) {
        return knowledgeBase.performance;
    }

    // Services
    if (/(consultoria|consulting|implementação|implementacao|desenvolvimento customizado)/i.test(lowercaseMsg)) {
        return knowledgeBase.consulting;
    }

    if (/(suporte|manutenção|manutencao|support|maintenance)/i.test(lowercaseMsg)) {
        return knowledgeBase.support;
    }

    if (/(preço|preco|pricing|custo|quanto custa|orçamento|orcamento|valor)/i.test(lowercaseMsg)) {
        return knowledgeBase.pricing;
    }

    // Demo & Assets
    if (/(demo|demonstração|demonstracao|ver.*funcionar|testar|acesso)/i.test(lowercaseMsg) && !/(pedir|agendar|quero)/.test(lowercaseMsg)) {
        return knowledgeBase.demo;
    }

    if (/(pedir.*demo|quero.*demo|agendar.*demo|marcar.*demo)/i.test(lowercaseMsg)) {
        return knowledgeBase.demoRequest;
    }

    if (/(imagens|screenshots|assets|fotos|vídeos|videos|enviar|portfolio)/i.test(lowercaseMsg) && /(enviar|preciso|quais|que)/.test(lowercaseMsg)) {
        return knowledgeBase.assets;
    }

    // Mobile & Multilingual
    if (/(mobile|app|react native|flutter|ios|android|smartphone)/i.test(lowercaseMsg) && !/pwa/.test(lowercaseMsg)) {
        return knowledgeBase.mobile;
    }

    if (/(pwa|progressive web app)/i.test(lowercaseMsg)) {
        return knowledgeBase.pwa;
    }

    if (/(multilingual|idiomas|línguas|linguas|tradução|traducao|pt\/en|i18n)/i.test(lowercaseMsg)) {
        return knowledgeBase.multilingual;
    }

    // Open Source
    if (/(open source|código aberto|codigo aberto|github|licença|licenca)/i.test(lowercaseMsg) && !/(ver github|abrir github)/.test(lowercaseMsg)) {
        return knowledgeBase.opensource;
    }

    // Contact
    if (/(contacto|contato|contact|email|telefone|falar|conversar|linkedin)/i.test(lowercaseMsg)) {
        return knowledgeBase.contact;
    }

    // Navigation
    if (/(navegar|páginas|paginas|onde.*ver|site|portfólio|portfolio|mostrar)/i.test(lowercaseMsg) && !/(este site|este portfólio|este portfolio)/.test(lowercaseMsg)) {
        return knowledgeBase.navigation;
    }

    // Site Info
    if (/(este site|este portfólio|este portfolio|quem criou|como foi feito)/i.test(lowercaseMsg) && !/(chatbot)/.test(lowercaseMsg)) {
        return knowledgeBase.site;
    }

    if (/(este chatbot|como.*chatbot|chatbot.*funciona)/i.test(lowercaseMsg)) {
        return knowledgeBase.chatbot;
    }

    // Fallback
    return knowledgeBase.fallback;
}
