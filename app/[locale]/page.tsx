import { Link } from '@/i18n/routing';
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { ArrowRight, Code, Bot, Zap, LayoutDashboard } from "lucide-react";
import { DigitalTransformationCard } from "@/components/DigitalTransformationCard";
import { getTranslations } from "next-intl/server";

export default async function Home() {
  const tHero = await getTranslations('Hero');
  const tSocial = await getTranslations('Social');
  const tHighlights = await getTranslations('Highlights');
  const tWhyMe = await getTranslations('WhyMe');

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <Section className="flex-1 flex flex-col justify-center items-center text-center space-y-8">
        <div className="space-y-6 max-w-4xl animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            {tHero('title')}
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl leading-relaxed">
            {tHero('subtitle')}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90 shadow-[0_0_15px_rgba(124,58,237,0.5)] transition-all hover:scale-105">
            <Link href="/projects">
              {tHero('ctaPortfolio')} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/contact">
              {tHero('ctaContact')}
            </Link>
          </Button>
        </div>
      </Section>

      {/* Social Proof / Technologies */}
      <Section className="py-8 border-y border-white/5 bg-black/20">
        <p className="text-center text-sm text-muted-foreground mb-6">{tSocial('title')}</p>
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
            <h3 className="text-xl font-bold">{tHighlights('fullstackTitle')}</h3>
            <p className="text-sm text-muted-foreground">{tHighlights('fullstackDesc')}</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-2 p-4 rounded-lg hover:bg-background/50 transition-colors">
            <div className="p-3 bg-primary/10 rounded-full text-primary">
              <Bot className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">{tHighlights('chatbotsTitle')}</h3>
            <p className="text-sm text-muted-foreground">{tHighlights('chatbotsDesc')}</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-2 p-4 rounded-lg hover:bg-background/50 transition-colors">
            <div className="p-3 bg-primary/10 rounded-full text-primary">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">{tHighlights('automationTitle')}</h3>
            <p className="text-sm text-muted-foreground">{tHighlights('automationDesc')}</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-2 p-4 rounded-lg hover:bg-background/50 transition-colors">
            <div className="p-3 bg-primary/10 rounded-full text-primary">
              <LayoutDashboard className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">{tHighlights('systemsTitle')}</h3>
            <p className="text-sm text-muted-foreground">{tHighlights('systemsDesc')}</p>
          </div>
        </div>
      </Section>

      {/* Why Work With Me Section */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{tWhyMe('title')}</h2>
            <p className="text-muted-foreground text-lg">
              {tWhyMe('desc')}
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <div className="mr-2 h-2 w-2 rounded-full bg-primary" />
                <span>{tWhyMe('points.1')}</span>
              </li>
              <li className="flex items-center">
                <div className="mr-2 h-2 w-2 rounded-full bg-primary" />
                <span>{tWhyMe('points.2')}</span>
              </li>
              <li className="flex items-center">
                <div className="mr-2 h-2 w-2 rounded-full bg-primary" />
                <span>{tWhyMe('points.3')}</span>
              </li>
              <li className="flex items-center">
                <div className="mr-2 h-2 w-2 rounded-full bg-primary" />
                <span>{tWhyMe('points.4')}</span>
              </li>
            </ul>
            <div className="pt-4">
              <Button asChild>
                <Link href="/about">{tWhyMe('cta')}</Link>
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
