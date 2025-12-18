import { Section } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, MessageSquare, Globe, Smartphone, TrendingUp } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ServicesPage() {
    const t = useTranslations('Pages.Services');
    const tData = useTranslations('ServicesData.items');

    const services = [
        {
            key: "systems",
            icon: Code,
        },
        {
            key: "chatbots",
            icon: MessageSquare,
        },
        {
            key: "websites",
            icon: Globe,
        },
        {
            key: "apps",
            icon: Smartphone,
        },
        {
            key: "consulting",
            icon: TrendingUp,
        },
    ];

    return (
        <div className="flex flex-col min-h-[calc(100vh-4rem)]">
            <Section className="space-y-8">
                <div className="text-center space-y-4 mb-12">
                    <h1 className="text-4xl font-bold tracking-tight">{t('title')}</h1>
                    <p className="text-xl text-muted-foreground">
                        {t('subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <Card key={index} className="hover:border-primary transition-colors group">
                            <CardHeader>
                                <service.icon className="h-10 w-10 text-primary mb-2 group-hover:scale-110 transition-transform" />
                                <CardTitle>{tData(`${service.key}.title`)}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    {tData(`${service.key}.description`)}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Section>
        </div>
    );
}
