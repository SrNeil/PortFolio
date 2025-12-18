
import { Section } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Send, Linkedin } from "lucide-react";
import { getTranslations } from "next-intl/server";

// Simple Input Component
function SimpleInput({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
            {...props}
        />
    );
}

// Simple Textarea Component
function SimpleTextarea({ className, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
    return (
        <textarea
            className={`flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
            {...props}
        />
    );
}

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
                                        <a href="#" className="text-lg font-semibold hover:text-primary transition-colors">
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
                                <form className="space-y-4">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">{t('form.name')}</label>
                                        <SimpleInput id="name" placeholder={t('form.namePlaceholder')} />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">{t('form.email')}</label>
                                        <SimpleInput id="email" type="email" placeholder={t('form.emailPlaceholder')} />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">{t('form.message')}</label>
                                        <SimpleTextarea id="message" placeholder={t('form.messagePlaceholder')} className="min-h-[120px]" />
                                    </div>
                                    <Button className="w-full">
                                        <Send className="mr-2 h-4 w-4" /> {t('form.submit')}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </Section>
        </div>
    );
}
