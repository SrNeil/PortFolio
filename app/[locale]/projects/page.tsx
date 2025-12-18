import { Link } from '@/i18n/routing';
import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { getTranslations } from "next-intl/server";

export default async function ProjectsPage() {
    const t = await getTranslations('Pages.Projects');
    const tData = await getTranslations('ProjectsData');

    return (
        <div className="flex flex-col min-h-[calc(100vh-4rem)]">
            <Section className="space-y-8">
                <div className="text-center space-y-4 mb-12">
                    <h1 className="text-4xl font-bold tracking-tight">{t('title')}</h1>
                    <p className="text-xl text-muted-foreground">
                        {t('subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <Card key={project.slug} className="flex flex-col h-full hover:border-primary transition-colors">
                            <div className="h-48 bg-muted/50 w-full relative overflow-hidden group">
                                <Image
                                    src={project.image}
                                    alt={tData(`${project.slug}.title`)}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                            <CardHeader>
                                <CardTitle className="text-2xl">{tData(`${project.slug}.title`)}</CardTitle>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {project.technologies.map((tech) => (
                                        <span key={tech} className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <p className="text-muted-foreground line-clamp-3">
                                    {tData(`${project.slug}.summary`)}
                                </p>
                            </CardContent>
                            <CardFooter>
                                <Button asChild className="w-full">
                                    <Link href={`/projects/${project.slug}`}>
                                        {t('viewDetails')} <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </Section>
        </div>
    );
}
