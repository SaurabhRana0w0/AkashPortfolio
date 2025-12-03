"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

import { projects } from "@/lib/data";

export default function Portfolio() {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            headingRef.current,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
            }
        );

        gsap.utils.toArray(".project-card").forEach((card: any, i) => {
            gsap.fromTo(
                card,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    delay: i * 0.1,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                    },
                }
            );
        });
    }, []);

    return (
        <section id="work" ref={sectionRef} className="py-24 px-4 md:px-8 max-w-6xl mx-auto">
            <h2 ref={headingRef} className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Selected Work
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <Link
                        key={index}
                        href={`/work/${project.id}`}
                        className="project-card group relative aspect-video rounded-3xl overflow-hidden cursor-pointer block"
                    >
                        <div
                            className={`absolute inset-0 ${project.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-neutral-300 text-6xl font-black opacity-10 group-hover:scale-110 transition-transform duration-500">
                                0{index + 1}
                            </span>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <div className="flex justify-between items-end">
                                <div>
                                    <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-2">
                                        {project.category}
                                    </p>
                                    <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {project.description}
                                    </p>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-white dark:bg-neutral-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                                    <ArrowUpRight className="w-5 h-5 text-neutral-900 dark:text-neutral-100" />
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
