import { Section } from "@/components/ui/section";
import { Timeline } from "@/components/ui/timeline";
import { useTranslations } from "next-intl";

export default function ExperiencePage() {
    const t = useTranslations('Experience');

    const experienceItems = [
        {
            year: "2024 - Presente",
            title: t('items.freelancer.title'),
            company: t('items.freelancer.company'),
            description: [
                t('items.freelancer.desc.1'),
                t('items.freelancer.desc.2'),
                t('items.freelancer.desc.3'),
                t('items.freelancer.desc.4'),
            ],
        },
        {
            year: "2022 - 2024",
            title: t('items.volet.title'),
            company: "VOLET",
            description: [
                t('items.volet.desc.1'),
                t('items.volet.desc.2'),
                t('items.volet.desc.3'),
            ],
        },
        {
            year: "2022",
            title: t('items.nidjula.title'),
            company: "Nidjula",
            description: [
                t('items.nidjula.desc.1'),
                t('items.nidjula.desc.2'),
                t('items.nidjula.desc.3'),
            ],
        },
        {
            year: "2021 - 2022",
            title: t('items.greenprint.title'),
            company: "GreenPrint",
            description: [
                t('items.greenprint.desc.1'),
                t('items.greenprint.desc.2'),
            ],
        },
        {
            year: "2018 - 2019",
            title: t('items.ucl.title'),
            company: "Universos Carga e Logística (UCL)",
            description: [
                t('items.ucl.desc.1'),
                t('items.ucl.desc.2'),
            ],
        },
    ];

    return (
        <div className="flex flex-col min-h-[calc(100vh-4rem)]">
            <Section className="space-y-8">
                <div className="text-center space-y-4 mb-12">
                    <h1 className="text-4xl font-bold tracking-tight">{t('title')}</h1>
                    <p className="text-xl text-muted-foreground">
                        {t('subtitle')}
                    </p>
                </div>

                <Timeline items={experienceItems} />
            </Section>
        </div>
    );
}
