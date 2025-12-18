"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

interface ProjectGalleryProps {
    images: string[];
    title: string;
}

export function ProjectGallery({ images, title }: ProjectGalleryProps) {
    const t = useTranslations('Components.ProjectGallery');
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openLightbox = (index: number) => {
        setCurrentIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    const nextImage = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    }, [images.length]);

    const prevImage = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }, [images.length]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!lightboxOpen) return;

            switch (e.key) {
                case "Escape":
                    closeLightbox();
                    break;
                case "ArrowRight":
                    nextImage();
                    break;
                case "ArrowLeft":
                    prevImage();
                    break;
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [lightboxOpen, nextImage, prevImage]);

    // Prevent scrolling when lightbox is open
    useEffect(() => {
        if (lightboxOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [lightboxOpen]);

    if (!images || images.length === 0) return null;

    return (
        <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">{t('title')}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {images.map((img, i) => (
                    <div
                        key={i}
                        className="relative aspect-video bg-muted rounded-lg overflow-hidden border border-border cursor-pointer group"
                        onClick={() => openLightbox(i)}
                    >
                        <Image
                            src={img}
                            alt={`${title} - Imagem ${i + 1}`}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            sizes="(max-width: 768px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <ZoomIn className="text-white h-8 w-8 drop-shadow-md" />
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox Overlay */}
            {lightboxOpen && (
                <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center animate-in fade-in duration-200">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-4 right-4 text-white/70 hover:text-white hover:bg-white/10 z-50 rounded-full"
                        onClick={closeLightbox}
                    >
                        <X className="h-6 w-6" />
                    </Button>

                    <div className="relative w-full h-full flex items-center justify-center p-4">
                        {images.length > 1 && (
                            <>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="absolute left-4 text-white/70 hover:text-white hover:bg-white/10 z-50 h-12 w-12 rounded-full"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        prevImage();
                                    }}
                                >
                                    <ChevronLeft className="h-8 w-8" />
                                </Button>

                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="absolute right-4 text-white/70 hover:text-white hover:bg-white/10 z-50 h-12 w-12 rounded-full"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        nextImage();
                                    }}
                                >
                                    <ChevronRight className="h-8 w-8" />
                                </Button>
                            </>
                        )}

                        <div className="relative w-full h-full max-w-7xl max-h-[90vh]">
                            <Image
                                src={images[currentIndex]}
                                alt={`${title} - Fullscreen ${currentIndex + 1}`}
                                fill
                                className="object-contain"
                                quality={100}
                                priority
                            />
                        </div>

                        <div className="absolute bottom-4 left-0 right-0 text-center text-white/50 text-sm">
                            {t('imageCount', { current: currentIndex + 1, total: images.length })}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
