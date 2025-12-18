import { notFound } from "next/navigation";
import { Link } from '@/i18n/routing';
import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, Github, Globe } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectGallery } from "@/components/ProjectGallery";
import { getTranslations } from "next-intl/server";

import { routing } from "@/i18n/routing";

interface ProjectPageProps {
    params: Promise<{
        slug: string;
        locale: string;
    }>;
}

export function generateStaticParams() {
    return routing.locales.flatMap((locale) =>
        projects.map((project) => ({
            locale,
            slug: project.slug,
        }))
    );
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
    const { slug, locale } = await params;

    // Defensive check for projects data
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    const t = await getTranslations({ locale, namespace: 'Pages.ProjectDetail' });
    const tData = await getTranslations({ locale, namespace: 'ProjectsData' });
    const projectTitle = tData(`${project.slug}.title`);

    if (project.isComingSoon) {
        return (
            <div className="flex flex-col min-h-[calc(100vh-4rem)] items-center justify-center p-8 text-center bg-gradient-to-b from-background to-muted/20">
                <Section className="max-w-xl space-y-8 animate-in fade-in zoom-in duration-500">
                    <div className="relative w-23 h-23 mx-auto mb-6">
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
                        <CheckCircle2 className="h-24 w-24 text-primary relative z-10 mx-auto" strokeWidth={1} />
                    </div>

                    <div className="space-y-4">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                            {t('status.inDevelopment')}
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                            {projectTitle}
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed whitespace-pre-line">
                            {t('status.comingSoon')}
                        </p>
                    </div>

                    <div className="pt-8">
                        <Button variant="outline" size="lg" asChild className="rounded-full px-8 hover:bg-primary/5 border-primary/20">
                            <Link href="/projects">
                                <ArrowLeft className="mr-2 h-4 w-4" /> {t('backToProjects')}
                            </Link>
                        </Button>
                    </div>
                </Section>
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-[calc(100vh-4rem)]">
            <Section className="space-y-8">
                <Button variant="ghost" asChild className="mb-8">
                    <Link href="/projects">
                        <ArrowLeft className="mr-2 h-4 w-4" /> {t('backToProjects')}
                    </Link>
                </Button>

                <div className="grid lg:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <h1 className="text-4xl font-bold tracking-tight">{projectTitle}</h1>

                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                                <span key={tech} className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="prose prose-invert max-w-none space-y-6">
                            <div>
                                <h3 className="text-xl font-semibold text-foreground mb-2">{t('labels.problem')}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {project.problem}
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-foreground mb-2">{t('labels.solution')}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {project.solution}
                                </p>
                            </div>

                            {project.challenges && (
                                <div>
                                    <h3 className="text-xl font-semibold text-foreground mb-2">{t('labels.challenges')}</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {project.challenges}
                                    </p>
                                </div>
                            )}
                        </div>

                        <div className="space-y-4 pt-4">
                            <h3 className="text-xl font-semibold text-foreground">{t('labels.benefits')}</h3>
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
                                <h3 className="text-xl font-semibold text-foreground">{t('labels.targetAudience')}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {project.targetAudience}
                                </p>
                            </div>
                        )}

                        {project.features && project.features.length > 0 && (
                            <div className="space-y-4 pt-4">
                                <h3 className="text-xl font-semibold text-foreground">{t('labels.features')}</h3>
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
                                <h3 className="text-xl font-semibold text-foreground">{t('labels.techStack')}</h3>
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
                                <h3 className="text-xl font-semibold text-foreground">{t('labels.differentials')}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {project.differentials}
                                </p>
                            </div>
                        )}

                        {(project.projectStatus || project.commercialGoal) && (
                            <div className="grid md:grid-cols-2 gap-4 pt-4">
                                {project.projectStatus && (
                                    <div className="space-y-2 p-4 rounded-lg bg-card border border-border">
                                        <h4 className="text-sm font-semibold text-foreground">{t('labels.projectStatus')}</h4>
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            {project.projectStatus}
                                        </p>
                                    </div>
                                )}
                                {project.commercialGoal && (
                                    <div className="space-y-2 p-4 rounded-lg bg-card border border-border">
                                        <h4 className="text-sm font-semibold text-foreground">{t('labels.commercialGoal')}</h4>
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
                                alt={t('mockupAlt', { title: projectTitle })}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                            />
                        </div>

                        {project.gallery && project.gallery.length > 0 && (
                            <ProjectGallery images={project.gallery} title={projectTitle} />
                        )}

                        <div className="flex gap-4">
                            {project.githubUrl && (
                                <Button variant="outline" className="flex-1" asChild>
                                    <Link href={project.githubUrl} target="_blank">
                                        <Github className="mr-2 h-4 w-4" /> {t('labels.viewCode')}
                                    </Link>
                                </Button>
                            )}
                            {project.demoUrl && (
                                <Button className="flex-1" asChild>
                                    <Link href={project.demoUrl} target="_blank">
                                        <Globe className="mr-2 h-4 w-4" /> {t('labels.viewDemo')}
                                    </Link>
                                </Button>
                            )}
                        </div>

                        {project.results && (
                            <div className="bg-card border border-border rounded-xl p-6 space-y-4">
                                <h3 className="text-lg font-semibold">{t('labels.results')}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {project.results}
                                </p>
                            </div>
                        )}

                        <div className="bg-card border border-border rounded-xl p-6 space-y-4">
                            <h3 className="text-lg font-semibold">{t('labels.similarProject')}</h3>
                            <p className="text-muted-foreground text-sm">
                                {t('labels.similarProjectDesc')}
                            </p>
                            <Button className="w-full" asChild>
                                <Link href="/contact">{t('labels.requestQuote')}</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}
