import { Section } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";

// Let's create a simple inline Badge for now to avoid another file if possible, or just use standard Tailwind classes.
function SkillBadge({ children }: { children: React.ReactNode }) {
    return (
        <span className="inline-flex items-center rounded-md border border-border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
            {children}
        </span>
    );
}

const skills = {
    frontend: ["HTML", "CSS", "JavaScript", "Bootstrap", "NuxtJS", "React", "Next.js", "Tailwind CSS"],
    backend: ["Node.js", "PHP", "Supabase", "SQL"],
    mobile: ["React Native", "Flutter"],
    tools: ["Git", "GitHub", "Figma", "Adobe Suite", "VS Code"],
    extra: ["Cyber Security (Estudos)", "UI/UX Design", "Automação"],
    languages: ["Português (Nativo)", "Inglês (Técnico)"],
};

export default function SkillsPage() {
    const t = useTranslations('Skills');

    return (
        <div className="flex flex-col min-h-[calc(100vh-4rem)]">
            <Section className="space-y-8">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight">{t('title')}</h1>
                    <p className="text-xl text-muted-foreground">
                        {t('subtitle')}
                    </p>
                </div>

                {/* Tech Stack Atual - Highlight */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-6 flex items-center">
                        <span className="bg-primary h-8 w-1 mr-3 rounded-full"></span>
                        {t('currentStack.title')}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card className="border-primary/20 bg-primary/5">
                            <CardHeader>
                                <CardTitle>{t('currentStack.core')}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-wrap gap-2">
                                {["Next.js 14", "React", "TypeScript", "TailwindCSS", "Node.js", "PostgreSQL"].map((skill) => (
                                    <SkillBadge key={skill}>{skill}</SkillBadge>
                                ))}
                            </CardContent>
                        </Card>
                        <Card className="border-primary/20 bg-primary/5">
                            <CardHeader>
                                <CardTitle>{t('currentStack.tools')}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-wrap gap-2">
                                {["Supabase", "Prisma", "Docker", "Git", "Vercel", "Figma"].map((skill) => (
                                    <SkillBadge key={skill}>{skill}</SkillBadge>
                                ))}
                            </CardContent>
                        </Card>
                    </div>
                </div>

                <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <span className="bg-muted h-8 w-1 mr-3 rounded-full"></span>
                    {t('general.title')}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>{t('general.frontend')}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-wrap gap-2">
                            {skills.frontend.map((skill) => (
                                <SkillBadge key={skill}>{skill}</SkillBadge>
                            ))}
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>{t('general.backend')}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-wrap gap-2">
                            {skills.backend.map((skill) => (
                                <SkillBadge key={skill}>{skill}</SkillBadge>
                            ))}
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>{t('general.mobile')}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-wrap gap-2">
                            {skills.mobile.map((skill) => (
                                <SkillBadge key={skill}>{skill}</SkillBadge>
                            ))}
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>{t('general.apis')}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-wrap gap-2">
                            {["Telegram Bot API", "WhatsApp Business API", "Stripe", "REST", "GraphQL"].map((skill) => (
                                <SkillBadge key={skill}>{skill}</SkillBadge>
                            ))}
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>{t('general.extra')}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-wrap gap-2">
                            {skills.extra.map((skill) => (
                                <SkillBadge key={skill}>{skill}</SkillBadge>
                            ))}
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>{t('general.languages')}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-wrap gap-2">
                            {skills.languages.map((skill) => (
                                <SkillBadge key={skill}>{skill}</SkillBadge>
                            ))}
                        </CardContent>
                    </Card>
                </div>
            </Section>
        </div>
    );
}
