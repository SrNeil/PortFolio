import { Section } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Rocket, Target, MapPin, GraduationCap, Calendar, User } from "lucide-react";
import { getTranslations } from "next-intl/server";

export default async function AboutPage() {
    const t = await getTranslations('About');
    const currentYear = new Date().getFullYear();
    const birthYear = 2003;
    const age = currentYear - birthYear;

    return (
        <div className="flex flex-col min-h-[calc(100vh-4rem)]">
            <Section className="space-y-12">
                {/* Hero Section with Photo */}
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-[auto_1fr] gap-8 items-center">
                        <div className="relative">
                            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl mx-auto bg-muted flex items-center justify-center">
                                <User className="w-24 h-24 text-muted-foreground/50" />
                            </div>
                        </div>
                        <div className="space-y-4 text-center md:text-left">
                            <h1 className="text-5xl font-bold tracking-tight">Neil Michael</h1>
                            <p className="text-2xl text-primary font-medium">
                                {t('role')}
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center md:justify-start text-muted-foreground">
                                <div className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4" />
                                    <span>{t('years', { count: age })}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin className="h-4 w-4" />
                                    <span>{t('location')}</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-2 p-4 bg-primary/10 rounded-lg border border-primary/20">
                                <GraduationCap className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                <div className="text-left">
                                    <p className="font-semibold text-foreground">{t('education.title')}</p>
                                    <p className="text-sm text-muted-foreground">{t('education.institution')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* About Text */}
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold">{t('title')}</h2>
                        <div className="prose prose-invert max-w-none">
                            <p className="text-lg leading-relaxed text-muted-foreground">
                                {t('description.p1')}
                            </p>
                            <p className="text-lg leading-relaxed text-muted-foreground mt-4">
                                {t('description.p2')}
                            </p>
                        </div>
                    </div>

                    {/* Philosophy Cards */}
                    <div className="grid md:grid-cols-3 gap-6">
                        <Card>
                            <CardHeader>
                                <Brain className="h-8 w-8 text-primary mb-2" />
                                <CardTitle>{t('cards.philosophy.title')}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">
                                    {t('cards.philosophy.description')}
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <Target className="h-8 w-8 text-primary mb-2" />
                                <CardTitle>{t('cards.focus.title')}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">
                                    {t('cards.focus.description')}
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <Rocket className="h-8 w-8 text-primary mb-2" />
                                <CardTitle>{t('cards.vision.title')}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">
                                    {t('cards.vision.description')}
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </Section>
        </div>
    );
}
