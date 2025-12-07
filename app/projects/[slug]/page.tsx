import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, Github, Globe } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectGallery } from "@/components/ProjectGallery";

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

                            {project.challenges && (
                                <div>
                                    <h3 className="text-xl font-semibold text-foreground mb-2">Desafios & Aprendizados</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {project.challenges}
                                    </p>
                                </div>
                            )}
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

                        {project.targetAudience && (
                            <div className="space-y-4 pt-4">
                                <h3 className="text-xl font-semibold text-foreground">Público-Alvo</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {project.targetAudience}
                                </p>
                            </div>
                        )}

                        {project.features && project.features.length > 0 && (
                            <div className="space-y-4 pt-4">
                                <h3 className="text-xl font-semibold text-foreground">Principais Funcionalidades</h3>
                                <ul className="space-y-2">
                                    {project.features.map((feature, index) => (
                                        <li key={index} className="flex items-start">
                                            <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                            <span className="text-muted-foreground text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {project.techStackDetails && project.techStackDetails.length > 0 && (
                            <div className="space-y-4 pt-4">
                                <h3 className="text-xl font-semibold text-foreground">Stack Técnica Detalhada</h3>
                                <ul className="space-y-2">
                                    {project.techStackDetails.map((detail, index) => (
                                        <li key={index} className="text-muted-foreground text-sm">
                                            • {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {project.differentials && (
                            <div className="space-y-4 pt-4">
                                <h3 className="text-xl font-semibold text-foreground">Diferenciais</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {project.differentials}
                                </p>
                            </div>
                        )}

                        {(project.projectStatus || project.commercialGoal) && (
                            <div className="grid md:grid-cols-2 gap-4 pt-4">
                                {project.projectStatus && (
                                    <div className="space-y-2 p-4 rounded-lg bg-card border border-border">
                                        <h4 className="text-sm font-semibold text-foreground">Estado do Projeto</h4>
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            {project.projectStatus}
                                        </p>
                                    </div>
                                )}
                                {project.commercialGoal && (
                                    <div className="space-y-2 p-4 rounded-lg bg-card border border-border">
                                        <h4 className="text-sm font-semibold text-foreground">Objetivo Comercial</h4>
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            {project.commercialGoal}
                                        </p>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    <div className="space-y-6">
                        <div className="relative aspect-video bg-muted rounded-xl border border-border overflow-hidden group shadow-lg">
                            <Image
                                src={project.image}
                                alt={`Mockup do projeto ${project.title}`}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                            />
                        </div>

                        {project.gallery && project.gallery.length > 0 && (
                            <ProjectGallery images={project.gallery} title={project.title} />
                        )}

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

                        {project.results && (
                            <div className="bg-card border border-border rounded-xl p-6 space-y-4">
                                <h3 className="text-lg font-semibold">Resultados & Impacto</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {project.results}
                                </p>
                            </div>
                        )}

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
