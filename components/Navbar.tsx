"use client";

import { useState } from "react";
import { Link } from '@/i18n/routing';
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const t = useTranslations('Navbar');

    const navItems = [
        { name: t('home'), href: "/" },
        { name: t('about'), href: "/about" },
        { name: t('skills'), href: "/skills" },
        { name: t('experience'), href: "/experience" },
        { name: t('projects'), href: "/projects" },
        { name: t('services'), href: "/services" },
        { name: t('contact'), href: "/contact" },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="text-xl font-bold text-primary">
                            Neil Michael
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="hidden md:flex items-center space-x-2">
                        <LanguageSwitcher />
                        <Button variant="ghost" size="icon" asChild>
                            <Link href="https://github.com/SrNeil" target="_blank">
                                <Github className="h-5 w-5" />
                            </Link>
                        </Button>
                        <Button variant="default" size="sm" asChild>
                            <Link href="/contact">
                                {t('contactButton')}
                            </Link>
                        </Button>
                    </div>
                    <div className="-mr-2 flex md:hidden space-x-2 items-center">
                        <LanguageSwitcher />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-primary focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={cn("md:hidden", isOpen ? "block" : "hidden")}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-b border-border">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-muted-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <div className="pt-4 flex space-x-2 px-3">
                        <Button variant="default" className="w-full" asChild>
                            <Link href="/contact">
                                {t('contactButton')}
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
