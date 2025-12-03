import { Section } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Rocket, Target } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-[calc(100vh-4rem)]">
            <Section className="space-y-8">
                <div className="max-w-3xl mx-auto text-center space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight">Sobre Mim</h1>
                    <p className="text-xl text-muted-foreground">
                        Engenheiro de Software • Fullstack • Visionário
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="prose prose-invert max-w-none">
                        <p className="text-lg leading-relaxed text-muted-foreground">
                            Sou um engenheiro de software apaixonado por criar tecnologia que eleva pessoas, melhora processos e impulsiona negócios através da automação. Sou curioso, aprendo rápido e estou sempre estudando tecnologias novas para me tornar um desenvolvedor fullstack completo.
                        </p>
                        <p className="text-lg leading-relaxed text-muted-foreground mt-4">
                            Tenho experiência com desenvolvimento web, mobile, suporte técnico e soluções empresariais. Minha jornada inclui participação em projetos inovadores, como empresas na Sandbox do Banco de Moçambique, onde pude aplicar meus conhecimentos em um ambiente regulado e desafiador.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <Card>
                            <CardHeader>
                                <Brain className="h-8 w-8 text-primary mb-2" />
                                <CardTitle>Filosofia</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">
                                    Acredito que a tecnologia deve ser acessível e simplificar a vida. Programar é a arte de resolver problemas complexos da forma mais simples possível.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <Target className="h-8 w-8 text-primary mb-2" />
                                <CardTitle>Foco</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">
                                    Especializado em Automação, Chatbots e Sistemas de Gestão. Meu objetivo é transformar processos manuais em fluxos digitais eficientes.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <Rocket className="h-8 w-8 text-primary mb-2" />
                                <CardTitle>Visão</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">
                                    Impulsionar a transformação digital de empresas, criando ecossistemas conectados que geram valor real e crescimento sustentável.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </Section>
        </div>
    );
}
