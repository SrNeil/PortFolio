"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { Code, Cpu, Globe, Zap } from "lucide-react";

export function DigitalTransformationCard() {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        x.set(clientX - left);
        y.set(clientY - top);
    }

    const maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`;
    const style = { maskImage, WebkitMaskImage: maskImage };

    return (
        <div
            ref={ref}
            onMouseMove={onMouseMove}
            className="relative h-[400px] w-full rounded-xl overflow-hidden bg-neutral-950 border border-neutral-800 group"
        >
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/5 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Content Container */}
            <div className="relative h-full flex flex-col items-center justify-center z-10">
                {/* Floating Icons */}
                <motion.div
                    className="absolute top-1/4 left-1/4 text-primary/20"
                    animate={{ y: [0, -10, 0], opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                    <Cpu className="h-8 w-8" />
                </motion.div>
                <motion.div
                    className="absolute bottom-1/4 right-1/4 text-primary/20"
                    animate={{ y: [0, 10, 0], opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                    <Globe className="h-6 w-6" />
                </motion.div>

                {/* Main Icon with Glow */}
                <div className="relative mb-6 group-hover:scale-110 transition-transform duration-500">
                    <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full group-hover:bg-primary/40 transition-colors duration-500" />
                    <Code className="h-24 w-24 text-primary relative z-10 drop-shadow-[0_0_15px_rgba(124,58,237,0.5)]" />
                </div>

                {/* Text */}
                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-primary transition-colors duration-300">
                    Transformação Digital
                </h3>
                <p className="text-neutral-400 text-sm max-w-[200px] text-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    Inovação que impulsiona o futuro do seu negócio.
                </p>
            </div>

            {/* Spotlight Effect */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={style}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-purple-500/50 opacity-20 blur-lg" />
                <div className="absolute inset-0 border-2 border-primary/50 rounded-xl" />
            </motion.div>
        </div>
    );
}
