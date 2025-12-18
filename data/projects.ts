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
        title: "Restaurante Management System (RMS)",
        summary: "Ecossistema digital completo para restaurantes com pedidos ominicanal (Mesa, Kiosk, Delivery), KDS em tempo real e gestão financeira integrada com M-Pesa/e-Mola.",
        technologies: ["Next.js 14", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL", "Socket.io", "Docker"],
        problem: "Ineficiência no fluxo de pedidos, erros de comunicação entre atendimento e cozinha, e complexidade na reconciliação financeira de múltiplos métodos de pagamento (M-Pesa, e-Mola, Cash) em restaurantes moçambicanos.",
        solution: "Desenvolvi um sistema Web Progressivo (PWA) 'Mobile-First' que integra todo o fluxo do restaurante. Inclui cardápio digital QR Code, Kiosks de autoatendimento, gestão de entregas e um Kitchen Display System (KDS) em tempo real. O backend processa pagamentos móveis automaticamente e gera relatórios de rentabilidade detalhados.",
        challenges: "Garantir a sincronização em tempo real (milissegundos) entre o pedido na mesa e o ecrã da cozinha (KDS) usando Socket.io, e implementar uma arquitetura financeira a prova de falhas com transações ACID no PostgreSQL para reconciliação de pagamentos.",
        results: "Redução drástica no tempo de atendimento, eliminação de erros de pedidos ('folhas de papel'), e controle financeiro total com reconciliação automática de caixas.",
        benefits: [
            "Pedidos instantâneos da mesa para a cozinha (sem garçom anotando)",
            "KDS (Ecrã de Cozinha) que substitui impressoras e organiza a produção",
            "Gestão financeira com reconciliação automática de M-Pesa/e-Mola",
            "Atualização de stock e disponibilidade de produtos em tempo real",
            "Relatórios de rentabilidade líquida e impostos (IVA)"
        ],
        targetAudience: "Restaurantes médios e grandes, Fast-food chains e estabelecimentos com alto volume de Take-away/Delivery que necessitam de controle rigoroso.",
        features: [
            "Fluxo Ominicanal: Dine-in, Kiosk, Take-away e Delivery num só lugar",
            "KDS (Kitchen Display System): Painel de cozinha em tempo real com alertas sonoros",
            "Gestão de Mesas: Status de ocupação e pedidos por mesa",
            "Pagamentos Digitais: Integração e reconciliação de pagamentos móveis",
            "Controle de Stock: Gestão de disponibilidade imediata (86 items)",
            "Impressão: Suporte a impressoras térmicas (arquitetura pronta)",
            "Permissões RBAC: Admin, Gerente, Garçom, Cozinha, Entregador",
            "Relatórios Avançados: Vendas por canal, pratos mais vendidos, performance financeira"
        ],
        techStackDetails: [
            "Frontend: Next.js 14, TypeScript, Tailwind CSS, Recharts",
            "Backend: Node.js, Express.js (Raw SQL queries para performance)",
            "Database: PostgreSQL 15 (Transações ACID)",
            "Real-time: Socket.io (Bi-directional communication)",
            "Security: JWT Auth, Bcrypt, Zod Validation, Helmet"
        ],
        differentials: "Desenhado especificamente para o mercado moçambicano com integrações nativas de pagamento. UX Premium que foge do padrão 'software corporativo', oferecendo uma experiência fluida e moderna para staff e clientes.",
        projectStatus: "Beta Avançado (Demo Funcional). 50% das funcionalidades core totalmente operacionais.",
        commercialGoal: "Modernizar a restauração em Moçambique, reduzindo custos operacionais e fraudes através da digitalização total do fluxo de pedidos e pagamentos.",
        image: "/projects/restaurant-automation/hero.png",
        gallery: [
            "/projects/restaurant-automation/hero.png",
            "/projects/restaurant-automation/client_menu_1.png",
            "/projects/restaurant-automation/client_menu_2.png",
            "/projects/restaurant-automation/kds_display.png",
            "/projects/restaurant-automation/kds_kitchen.png",
            "/projects/restaurant-automation/admin_dashboard_1.png",
            "/projects/restaurant-automation/admin_dashboard_2.png",
            "/projects/restaurant-automation/admin_finance.png",
            "/projects/restaurant-automation/admin_users.png",
            "/projects/restaurant-automation/admin_config.png",
            "/projects/restaurant-automation/staff_pos.png",
            "/projects/restaurant-automation/staff_reports.png"
        ]
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
