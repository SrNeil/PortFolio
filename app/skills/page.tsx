import { Section } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
    return (
        <div className="flex flex-col min-h-[calc(100vh-4rem)]">
            <Section className="space-y-8">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight">Minhas Skills</h1>
                    <p className="text-xl text-muted-foreground">
                        Tecnologias e ferramentas que domino
                    </p>
                </div>

                {/* Tech Stack Atual - Highlight */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-6 flex items-center">
                        <span className="bg-primary h-8 w-1 mr-3 rounded-full"></span>
                        Tech Stack Atual (Uso Diário)
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card className="border-primary/20 bg-primary/5">
                            <CardHeader>
                                <CardTitle>Core Stack</CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-wrap gap-2">
                                {["Next.js 14", "React", "TypeScript", "TailwindCSS", "Node.js", "PostgreSQL"].map((skill) => (
                                    <SkillBadge key={skill}>{skill}</SkillBadge>
                                ))}
                            </CardContent>
                        </Card>
                        <Card className="border-primary/20 bg-primary/5">
                            <CardHeader>
                                <CardTitle>Ferramentas & Infra</CardTitle>
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
                    Conhecimento Geral & Outras Tecnologias
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Front-end</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-wrap gap-2">
                            {skills.frontend.map((skill) => (
                                <SkillBadge key={skill}>{skill}</SkillBadge>
                            ))}
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Back-end</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-wrap gap-2">
                            {skills.backend.map((skill) => (
                                <SkillBadge key={skill}>{skill}</SkillBadge>
                            ))}
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Mobile</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-wrap gap-2">
                            {skills.mobile.map((skill) => (
                                <SkillBadge key={skill}>{skill}</SkillBadge>
                            ))}
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>APIs & Integrações</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-wrap gap-2">
                            {["Telegram Bot API", "WhatsApp Business API", "Stripe", "REST", "GraphQL"].map((skill) => (
                                <SkillBadge key={skill}>{skill}</SkillBadge>
                            ))}
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Extra & Estudos</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-wrap gap-2">
                            {skills.extra.map((skill) => (
                                <SkillBadge key={skill}>{skill}</SkillBadge>
                            ))}
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Idiomas</CardTitle>
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
