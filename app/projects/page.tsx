import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
    return (
        <div className="flex flex-col min-h-[calc(100vh-4rem)]">
            <Section className="space-y-8">
                <div className="text-center space-y-4 mb-12">
                    <h1 className="text-4xl font-bold tracking-tight">Projetos</h1>
                    <p className="text-xl text-muted-foreground">
                        Alguns dos trabalhos que desenvolvi
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <Card key={project.slug} className="flex flex-col h-full hover:border-primary transition-colors">
                            <div className="h-48 bg-muted/50 w-full relative overflow-hidden group">
                                {/* Placeholder for image */}
                                <div className="absolute inset-0 flex items-center justify-center bg-secondary/20 text-muted-foreground">
                                    <span className="text-lg font-medium">Imagem do Projeto</span>
                                </div>
                            </div>
                            <CardHeader>
                                <CardTitle className="text-2xl">{project.title}</CardTitle>
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
                                    {project.summary}
                                </p>
                            </CardContent>
                            <CardFooter>
                                <Button asChild className="w-full">
                                    <Link href={`/projects/${project.slug}`}>
                                        Ver Detalhes <ArrowRight className="ml-2 h-4 w-4" />
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
