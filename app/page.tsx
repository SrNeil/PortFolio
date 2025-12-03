import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { ArrowRight, Code, Bot, Zap, LayoutDashboard } from "lucide-react";
import { DigitalTransformationCard } from "@/components/DigitalTransformationCard";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <Section className="flex-1 flex flex-col justify-center items-center text-center space-y-8">
        <div className="space-y-6 max-w-4xl animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            Transformo processos manuais em soluções digitais automatizadas e escaláveis.
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl leading-relaxed">
            Construo sistemas inteligentes, chatbots e automações que reduzem custos e aceleram operações.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90 shadow-[0_0_15px_rgba(124,58,237,0.5)] transition-all hover:scale-105">
            <Link href="/projects">
              Ver Portfólio <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/contact">
              Falar Comigo
            </Link>
          </Button>
        </div>
      </Section>

      {/* Social Proof / Technologies */}
      <Section className="py-8 border-y border-white/5 bg-black/20">
        <p className="text-center text-sm text-muted-foreground mb-6">TECNOLOGIAS E PLATAFORMAS QUE UTILIZO</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Simple Text Logos for now, ideally SVGs */}
          <span className="text-xl font-bold text-white">Stripe</span>
          <span className="text-xl font-bold text-white">Supabase</span>
          <span className="text-xl font-bold text-white">Next.js</span>
          <span className="text-xl font-bold text-white">PostgreSQL</span>
          <span className="text-xl font-bold text-white">Docker</span>
          <span className="text-xl font-bold text-white">OpenAI</span>
        </div>
      </Section>

      {/* Highlights Section */}
      <Section className="bg-muted/50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center space-y-2 p-4 rounded-lg hover:bg-background/50 transition-colors">
            <div className="p-3 bg-primary/10 rounded-full text-primary">
              <Code className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Fullstack Dev</h3>
            <p className="text-sm text-muted-foreground">Desenvolvimento web e mobile completo e escalável.</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-2 p-4 rounded-lg hover:bg-background/50 transition-colors">
            <div className="p-3 bg-primary/10 rounded-full text-primary">
              <Bot className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Chatbots</h3>
            <p className="text-sm text-muted-foreground">Automação de atendimento e vendas inteligentes.</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-2 p-4 rounded-lg hover:bg-background/50 transition-colors">
            <div className="p-3 bg-primary/10 rounded-full text-primary">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Automação</h3>
            <p className="text-sm text-muted-foreground">Otimização de processos e fluxos de trabalho.</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-2 p-4 rounded-lg hover:bg-background/50 transition-colors">
            <div className="p-3 bg-primary/10 rounded-full text-primary">
              <LayoutDashboard className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Sistemas</h3>
            <p className="text-sm text-muted-foreground">Soluções robustas para gestão empresarial.</p>
          </div>
        </div>
      </Section>

      {/* Why Work With Me Section */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">O que posso fazer pelo seu negócio?</h2>
            <p className="text-muted-foreground text-lg">
              Combino conhecimento técnico com visão de negócios. Não apenas escrevo código, mas crio soluções que resolvem problemas reais e trazem retorno.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <div className="mr-2 h-2 w-2 rounded-full bg-primary" />
                <span>Foco em resultados e eficiência</span>
              </li>
              <li className="flex items-center">
                <div className="mr-2 h-2 w-2 rounded-full bg-primary" />
                <span>Comunicação clara e transparente</span>
              </li>
              <li className="flex items-center">
                <div className="mr-2 h-2 w-2 rounded-full bg-primary" />
                <span>Tecnologias modernas e performáticas</span>
              </li>
              <li className="flex items-center">
                <div className="mr-2 h-2 w-2 rounded-full bg-primary" />
                <span>Suporte e manutenção contínuos</span>
              </li>
            </ul>
            <div className="pt-4">
              <Button asChild>
                <Link href="/about">Saiba mais sobre mim</Link>
              </Button>
            </div>
          </div>
          <div className="w-full">
            <DigitalTransformationCard />
          </div>
        </div>
      </Section>
    </div>
  );
}
