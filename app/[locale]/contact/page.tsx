
import { Section } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { ContactForm } from "@/components/ContactForm";

export default async function ContactPage() {
    const t = await getTranslations('Pages.Contact');

    return (
        <div className="flex flex-col min-h-[calc(100vh-4rem)]">
            <Section className="space-y-8">
                <div className="text-center space-y-4 mb-8">
                    <h1 className="text-4xl font-bold tracking-tight">{t('title')}</h1>
                    <p className="text-xl text-muted-foreground">
                        {t('subtitle')}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <div className="space-y-8">
                        <Card>
                            <CardHeader>
                                <CardTitle>{t('channels.title')}</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10 mb-6">
                                    <p className="text-sm font-medium text-primary flex items-center">
                                        <span className="relative flex h-3 w-3 mr-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                        </span>
                                        {t('channels.availability')}
                                    </p>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="p-3 bg-primary/10 rounded-full text-primary">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-muted-foreground">{t('channels.email')}</p>
                                        <a href="mailto:neilnisiofrancelinomichael@gmail.com" className="text-lg font-semibold hover:text-primary transition-colors">
                                            neilnisiofrancelinomichael@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="p-3 bg-primary/10 rounded-full text-primary">
                                        <Phone className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-muted-foreground">{t('channels.phone')}</p>
                                        <a href="https://wa.me/258844298407" target="_blank" className="text-lg font-semibold hover:text-primary transition-colors">
                                            +258 84 429 8407
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="p-3 bg-primary/10 rounded-full text-primary">
                                        <Github className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-muted-foreground">{t('channels.github')}</p>
                                        <a href="https://github.com/SrNeil" target="_blank" className="text-lg font-semibold hover:text-primary transition-colors">
                                            github.com/SrNeil
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="p-3 bg-primary/10 rounded-full text-primary">
                                        <Linkedin className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-muted-foreground">{t('channels.linkedin')}</p>
                                        <a href="https://www.linkedin.com/in/neil-michael-639b72231" target="_blank" className="text-lg font-semibold hover:text-primary transition-colors">
                                            {t('channels.connectLinkedin')}
                                        </a>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="space-y-8">
                        <Card>
                            <CardHeader>
                                <CardTitle>{t('form.title')}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ContactForm />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </Section>
        </div>
    );
}
