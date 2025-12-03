"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const sectionRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            contentRef.current,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse",
                },
            }
        );
    }, []);

    const skills = [
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Figma",
        "Typography",
        "Branding",
        "Layout Design",
    ];

    return (
        <section
            id="about"
            ref={sectionRef}
            className="py-24 px-4 md:px-8 max-w-4xl mx-auto"
        >
            <div ref={contentRef} className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
                <div className="prose dark:prose-invert max-w-none text-lg text-neutral-600 dark:text-neutral-400">
                    <p>
                        Hello! I'm Akash Yadav, a 17-year-old Graphic Designer Student based
                        in India. I have a passion for creating minimal, clean, and
                        interactive designs that leave a lasting impression.
                    </p>
                    <p>
                        My journey in design started with a curiosity for how things look and
                        feel. I specialize in crafting visual identities, user interfaces,
                        and digital experiences that are both beautiful and functional.
                    </p>
                </div>

                <div className="mt-12">
                    <h3 className="text-xl font-semibold mb-4">Skills</h3>
                    <div className="flex flex-wrap gap-3">
                        {skills.map((skill) => (
                            <span
                                key={skill}
                                className="px-4 py-2 rounded-full bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 text-sm font-medium border border-neutral-200 dark:border-neutral-800 hover:scale-105 transition-transform cursor-default"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
