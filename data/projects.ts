export interface Project {
    slug: string;
    title: string;
    summary: string;
    technologies: string[];
    problem: string;
    solution: string;
    benefits: string[];
    challenges?: string;
    results?: string;
    githubUrl?: string;
    demoUrl?: string;
    image: string;
    gallery?: string[];
    targetAudience?: string;
    features?: string[];
    techStackDetails?: string[];
    differentials?: string;
    projectStatus?: string;
    commercialGoal?: string;
}

export const projects: Project[] = [
    {
        slug: "restaurant-automation",
        title: "Sistema de Automação para Restaurantes",
        summary: "Gestão completa de pedidos, estoque e impressão automática.",
        technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
        problem: "Restaurantes sofrem com erros em pedidos manuais, demora no atendimento e falta de controle de estoque em tempo real.",
        solution: "Desenvolvi um sistema integrado com cardápio digital (QR Code), painel de cozinha (KDS) e gestão de estoque. O sistema envia pedidos diretamente para a cozinha e bar, com impressão automática.",
        challenges: "Implementar a comunicação em tempo real via Socket.io em um ambiente instável de internet.",
        results: "Redução de 30% no tempo de atendimento e eliminação quase total de erros de pedidos.",
        benefits: [
            "Redução de 30% no tempo de atendimento",
            "Eliminação de erros de anotação",
            "Controle preciso de estoque",
            "Relatórios de vendas em tempo real"
        ],
        image: "/images/restaurant-mockup.jpg"
    },
    {
        slug: "siga",
        title: "SIGA – Sistema Integrado de Gestão Académica",
        summary: "Plataforma completa para universidades e escolas, integrando gestão académica, financeira e portais para docentes e estudantes.",
        technologies: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "Shadcn/ui", "MSW", "Playwright"],
        problem: "O SIGA resolve a desorganização e ineficiência na gestão académica tradicional, eliminando: a descentralização de dados (informações espalhadas), a gestão manual propensa a erros de notas e pagamentos, a falta de transparência e a lentidão na emissão de documentos.",
        solution: "Criei uma plataforma centralizada com arquitetura orientada a papéis (RBAC). O sistema automatiza matrículas, pagamentos com reconciliação, emissão de documentos e oferece dashboards personalizados. Conta com funcionamento resiliente (offline/online) e feedback visual imediato.",
        challenges: "Desenvolver um sistema complexo com múltiplas permissões de acesso (RBAC) e garantir a integridade dos dados financeiros e académicos num ambiente simulado realista com MSW 2.0 e persistência em LocalStorage.",
        results: "Sistema robusto capaz de gerir todo o ciclo de vida do estudante, desde a matrícula até à graduação, com controle financeiro rigoroso.",
        benefits: [
            "Gestão financeira detalhada com reconciliação",
            "Portais dedicados para Estudantes e Docentes",
            "Automação de matrículas e lançamento de notas",
            "Funcionamento offline/online com resiliência"
        ],
        targetAudience: "Universidades, Institutos Superiores, Escolas Técnicas e Instituições de ensino privadas que necessitam de gestão financeira integrada.",
        features: [
            "Gestão de estudantes (Cadastro completo, documentos, histórico)",
            "Gestão de matrículas (Inscrição em disciplinas, validação de pré-requisitos)",
            "Gestão de pagamentos (Mensalidades, multas, reconciliação bancária)",
            "Geração de recibos/guias (Emissão automática de comprovativos)",
            "Gestão de disciplinas e Turmas (Alocação de docentes, horários, salas)",
            "Portal do Estudante (Acesso a notas, plano analítico, financeiro, horários)",
            "Portal do Docente (Gestão de turmas, lançamento de notas, pautas)",
            "Lançamento de notas (Sistema seguro com validação de pesos e datas)",
            "Histórico Escolar (Plano analítico detalhado com cálculo de médias e CH)",
            "Sistema de Permissões RBAC (Admin, Secretaria, Tesouraria, Coordenação, Docente, Estudante)",
            "Relatórios Financeiros (Conciliação, devedores, receitas)",
            "Dashboard com Estatísticas (KPIs em tempo real por função)"
        ],
        techStackDetails: [
            "Front-end: Next.js 14 (App Router), React, TypeScript",
            "Estilização: Tailwind CSS, Shadcn/ui, Lucide React",
            "Estado: React Context API, SWR (Data Fetching)",
            "Back-end (Simulado): MSW 2.0 com persistência em LocalStorage",
            "Testes: Playwright (E2E Testing)",
            "Outros: Date-fns, Zod"
        ],
        differentials: "UX/UI Premium com design limpo e moderno. Arquitetura orientada a papéis onde cada usuário vê apenas o que precisa. Feedback visual imediato com Toasts e Skeletons. Gestão financeira detalhada integrada ao bloqueio de serviços. Resiliência offline/online.",
        projectStatus: "Em Desenvolvimento / Protótipo Funcional. Frontend completo com fluxos simulados via MSW.",
        commercialGoal: "Demonstrar capacidade de arquitetar sistemas complexos com múltiplas regras de negócio e servir como base para um SaaS educacional.",
        image: "/projects/siga/dashboard_admin.png",
        gallery: [
            "/projects/siga/dashboard_admin.png",
            "/projects/siga/students_list.png",
            "/projects/siga/financial_1.png",
            "/projects/siga/financial_2.png",
            "/projects/siga/teacher_portal.png",
            "/projects/siga/student_portal_1.png",
            "/projects/siga/student_portal_2.png",
            "/projects/siga/student_portal_3.png",
            "/projects/siga/student_portal_4.png",
            "/projects/siga/student_portal_5.png",
            "/projects/siga/student_portal_6.png",
            "/projects/siga/overview_login.png"
        ]
    },
    {
        slug: "business-platform",
        title: "Plataforma de Negócios",
        summary: "Marketplace multi-lojas com gestão de produtos e integrações.",
        technologies: ["Vue.js", "Firebase", "Stripe API", "Node.js"],
        problem: "Pequenos negócios precisavam de uma presença online profissional sem o custo de um e-commerce dedicado.",
        solution: "Desenvolvi uma plataforma SaaS onde lojistas podem criar suas lojas virtuais em minutos, gerenciar catálogo e receber pagamentos integrados.",
        challenges: "Gerenciar o estado global de múltiplas lojas e garantir a segurança das transações Stripe.",
        results: "Plataforma escalável com onboarding automático de novos lojistas.",
        benefits: [
            "Lojas virtuais prontas em minutos",
            "Gestão centralizada de múltiplos negócios",
            "Integração com gateways de pagamento locais",
            "Dashboard administrativo completo"
        ],
        image: "/images/business-mockup.jpg"
    },
    {
        slug: "gift-card-store",
        title: "Loja de Gift Cards",
        summary: "E-commerce especializado na venda e gestão de cartões presente.",
        technologies: ["Next.js", "Supabase", "Tailwind", "Stripe"],
        problem: "Dificuldade em encontrar e comprar gift cards de diversos serviços em um único lugar com entrega digital imediata.",
        solution: "Implementei um e-commerce focado em produtos digitais, com entrega automática de códigos via email após confirmação de pagamento e gestão de estoque de códigos.",
        challenges: "Integração segura com provedores de gift cards e entrega via email confiável.",
        results: "Aumento na conversão de vendas devido à entrega imediata.",
        benefits: [
            "Entrega imediata e automatizada",
            "Segurança nas transações",
            "Variedade de produtos em um só lugar",
            "Histórico de compras e reenvio fácil"
        ],
        image: "/images/giftcard-mockup.jpg"
    }
];
