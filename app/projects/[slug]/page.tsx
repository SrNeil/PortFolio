import { notFound } from "next/navigation";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, Github, Globe } from "lucide-react";
import { projects } from "@/data/projects";

interface ProjectPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="flex flex-col min-h-[calc(100vh-4rem)]">
            <Section className="space-y-8">
                <Button variant="ghost" asChild className="mb-8">
                    <Link href="/projects">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Projetos
                    </Link>
                </Button>

                <div className="grid lg:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <h1 className="text-4xl font-bold tracking-tight">{project.title}</h1>

                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                                <span key={tech} className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="prose prose-invert max-w-none space-y-6">
                            <div>
                                <h3 className="text-xl font-semibold text-foreground mb-2">O Problema</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {project.problem}
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-foreground mb-2">A Solução</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {project.solution}
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-foreground mb-2">Desafios & Aprendizados</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {project.challenges}
                                </p>
                            </div>
                        </div>

                        <div className="space-y-4 pt-4">
                            <h3 className="text-xl font-semibold text-foreground">Principais Benefícios</h3>
                            <ul className="space-y-3">
                                {project.benefits.map((benefit, index) => (
                                    <li key={index} className="flex items-start">
                                        <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                        <span className="text-muted-foreground">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="aspect-video bg-muted rounded-xl border border-border flex items-center justify-center relative overflow-hidden group">
                            {/* Placeholder for detailed image */}
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                            <div className="text-center p-8 relative z-20">
                                <p className="text-muted-foreground font-medium text-lg">Mockup do Projeto</p>
                                <p className="text-sm text-muted-foreground/50">(GIF ou Vídeo Demo aqui)</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            {project.githubUrl && (
                                <Button variant="outline" className="flex-1" asChild>
                                    <Link href={project.githubUrl} target="_blank">
                                        <Github className="mr-2 h-4 w-4" /> Ver Código
                                    </Link>
                                </Button>
                            )}
                            {project.demoUrl && (
                                <Button className="flex-1" asChild>
                                    <Link href={project.demoUrl} target="_blank">
                                        <Globe className="mr-2 h-4 w-4" /> Ver Demo
                                    </Link>
                                </Button>
                            )}
                        </div>

                        <div className="bg-card border border-border rounded-xl p-6 space-y-4">
                            <h3 className="text-lg font-semibold">Resultados & Impacto</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {project.results}
                            </p>
                        </div>

                        <div className="bg-card border border-border rounded-xl p-6 space-y-4">
                            <h3 className="text-lg font-semibold">Interessado em um projeto similar?</h3>
                            <p className="text-muted-foreground text-sm">
                                Posso adaptar esta solução para o seu negócio ou criar algo totalmente novo.
                            </p>
                            <Button className="w-full" asChild>
                                <Link href="/contact">Solicitar Orçamento</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}
