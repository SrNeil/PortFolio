import { Section } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, MessageSquare, Globe, Smartphone, TrendingUp } from "lucide-react";

const services = [
    {
        title: "Desenvolvimento de Sistemas",
        icon: Code,
        description: "Sistemas web robustos e escaláveis, feitos sob medida para as necessidades do seu negócio. Desde CRMs até ERPs personalizados.",
    },
    {
        title: "Chatbots e Automação",
        icon: MessageSquare,
        description: "Automatize o atendimento ao cliente e processos repetitivos com chatbots inteligentes que funcionam 24/7 no WhatsApp e Web.",
    },
    {
        title: "Websites Profissionais",
        icon: Globe,
        description: "Sites institucionais, landing pages e portfólios com design moderno, alta performance e otimizados para SEO.",
    },
    {
        title: "Apps Mobile",
        icon: Smartphone,
        description: "Aplicativos nativos e híbridos para Android e iOS, focados na melhor experiência do usuário (UX/UI).",
    },
    {
        title: "Consultoria Digital",
        icon: TrendingUp,
        description: "Análise e estratégia para a transformação digital da sua empresa. Identifico gargalos e proponho soluções tecnológicas.",
    },
];

export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-[calc(100vh-4rem)]">
            <Section className="space-y-8">
                <div className="text-center space-y-4 mb-12">
                    <h1 className="text-4xl font-bold tracking-tight">Serviços</h1>
                    <p className="text-xl text-muted-foreground">
                        Soluções tecnológicas para impulsionar seu negócio
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <Card key={index} className="hover:border-primary transition-colors group">
                            <CardHeader>
                                <service.icon className="h-10 w-10 text-primary mb-2 group-hover:scale-110 transition-transform" />
                                <CardTitle>{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    {service.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Section>
        </div>
    );
}
