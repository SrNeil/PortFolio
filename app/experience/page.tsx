import { Section } from "@/components/ui/section";
import { Timeline } from "@/components/ui/timeline";

const experienceItems = [
    {
        year: "2024 - Presente",
        title: "Desenvolvedor Freelancer",
        company: "Autônomo",
        description: [
            "Sistemas customizados para empresas locais com foco em eficiência.",
            "Desenvolvimento de Chatbots e automações (Telegram / WhatsApp) para atendimento.",
            "Criação de soluções web e dashboards administrativos.",
            "Foco em redução de processos manuais e aumento de conversão.",
        ],
    },
    {
        year: "2022 - 2024",
        title: "Desenvolvedor Web e Mobile",
        company: "VOLET",
        description: [
            "Desenvolvimento de aplicações financeiras utilizando NuxtJS, React Native e Flutter.",
            "Participação em projeto Sandbox do Banco de Moçambique (Inovação Fintech).",
            "Implementação de arquitetura escalável para alto volume de transações.",
        ],
    },
    {
        year: "2022",
        title: "Suporte Informático + CCTV",
        company: "Nidjula",
        description: [
            "Implementação de sistemas de segurança e monitoramento.",
            "Desenvolvimento de ferramentas internas para gestão de chamados.",
            "Otimização de infraestrutura de rede e suporte técnico.",
        ],
    },
    {
        year: "2021 - 2022",
        title: "Suporte Informático",
        company: "GreenPrint",
        description: [
            "Gestão de manutenção de hardware e software corporativo.",
            "Implementação de políticas de segurança de dados.",
        ],
    },
    {
        year: "2018 - 2019",
        title: "Suporte Técnico",
        company: "Universos Carga e Logística (UCL)",
        description: [
            "Suporte técnico de nível 1 e 2 para infraestrutura crítica.",
            "Manutenção preventiva de servidores e estações de trabalho.",
        ],
    },
];

export default function ExperiencePage() {
    return (
        <div className="flex flex-col min-h-[calc(100vh-4rem)]">
            <Section className="space-y-8">
                <div className="text-center space-y-4 mb-12">
                    <h1 className="text-4xl font-bold tracking-tight">Minha Jornada</h1>
                    <p className="text-xl text-muted-foreground">
                        Experiência profissional e trajetória
                    </p>
                </div>

                <Timeline items={experienceItems} />
            </Section>
        </div>
    );
}
