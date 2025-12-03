export interface Project {
    slug: string;
    title: string;
    summary: string;
    technologies: string[];
    problem: string;
    solution: string;
    benefits: string[];
    image: string; // Placeholder for now
}

export const projects: Project[] = [
    {
        slug: "restaurant-automation",
        title: "Sistema de Automação para Restaurantes",
        summary: "Gestão completa de pedidos, estoque e impressão automática.",
        technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
        problem: "Restaurantes sofrem com erros em pedidos manuais, demora no atendimento e falta de controle de estoque em tempo real.",
        solution: "Desenvolvi um sistema integrado com cardápio digital (QR Code), painel de cozinha (KDS) e gestão de estoque. O sistema envia pedidos diretamente para a cozinha e bar, com impressão automática.",
        benefits: [
            "Redução de 30% no tempo de atendimento",
            "Eliminação de erros de anotação",
            "Controle preciso de estoque",
            "Relatórios de vendas em tempo real"
        ],
        image: "/images/restaurant-mockup.jpg"
    },
    {
        slug: "academic-management",
        title: "Sistema de Gestão Académica",
        summary: "Plataforma para escolas com gestão de alunos, notas e pagamentos.",
        technologies: ["Next.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
        problem: "Escolas com dificuldade em gerir matrículas, pagamentos de mensalidades e lançamento de notas, muitas vezes usando planilhas desconectadas.",
        solution: "Criei uma plataforma centralizada onde secretária, professores e alunos têm acessos específicos. Gestão financeira automatizada com emissão de recibos e portal do aluno para consulta de notas.",
        benefits: [
            "Automatização de matrículas e pagamentos",
            "Acesso fácil a notas e histórico escolar",
            "Redução da inadimplência com lembretes automáticos",
            "Organização total da secretaria"
        ],
        image: "/images/academic-mockup.jpg"
    },
    {
        slug: "business-platform",
        title: "Plataforma de Negócios",
        summary: "Marketplace multi-lojas com gestão de produtos e integrações.",
        technologies: ["Vue.js", "Firebase", "Stripe API", "Node.js"],
        problem: "Pequenos negócios precisavam de uma presença online profissional sem o custo de um e-commerce dedicado.",
        solution: "Desenvolvi uma plataforma SaaS onde lojistas podem criar suas lojas virtuais em minutos, gerenciar catálogo e receber pagamentos integrados.",
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
        benefits: [
            "Entrega imediata e automatizada",
            "Segurança nas transações",
            "Variedade de produtos em um só lugar",
            "Histórico de compras e reenvio fácil"
        ],
        image: "/images/giftcard-mockup.jpg"
    }
];
