import { cn } from "@/lib/utils";

interface TimelineItemProps {
    year: string;
    title: string;
    company: string;
    description: string[];
    isLast?: boolean;
}

export function TimelineItem({ year, title, company, description, isLast }: TimelineItemProps) {
    return (
        <div className="relative pl-8 pb-8 sm:pl-72 sm:pb-16 group">
            {/* Line */}
            {!isLast && (
                <div className="absolute left-2 top-2 h-full w-[2px] bg-border group-hover:bg-primary/50 transition-colors sm:left-[15.5rem]" />
            )}

            {/* Dot */}
            <div className="absolute left-0 top-2 h-4 w-4 rounded-full border-2 border-primary bg-background sm:left-[15rem]" />

            {/* Date (Mobile: inline, Desktop: left) */}
            <div className="mb-3 text-sm font-medium text-muted-foreground sm:absolute sm:left-0 sm:mb-0 sm:w-56 sm:text-right sm:top-1.5">
                {year}
            </div>

            {/* Content */}
            <div className="flex flex-col sm:relative sm:top-0">
                <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                <span className="text-primary font-medium mb-2">{company}</span>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {description.map((item, index) => (
                        <li key={index} className="text-sm leading-relaxed">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export function Timeline({ items }: { items: TimelineItemProps[] }) {
    return (
        <div className="w-full max-w-3xl mx-auto">
            {items.map((item, index) => (
                <TimelineItem
                    key={index}
                    {...item}
                    isLast={index === items.length - 1}
                />
            ))}
        </div>
    );
}
