import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { useTranslations } from "next-intl";

export function Footer() {
    const t = useTranslations('Footer');

    return (
        <footer className="bg-background border-t border-border py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-sm text-muted-foreground">
                            &copy; {new Date().getFullYear()} Neil Michael. {t('rights')}
                        </p>
                    </div>
                    <div className="flex space-x-6">
                        <Link href="https://github.com/SrNeil" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                            <Github className="h-5 w-5" />
                        </Link>
                        <Link href="https://www.linkedin.com/in/neil-michael-639b72231" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                            <Linkedin className="h-5 w-5" />
                        </Link>
                        <Link href="mailto:neilnisiofrancelinomichael@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                            <Mail className="h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
