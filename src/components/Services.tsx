"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Palette, Layout, Smartphone, Monitor } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        icon: <Palette className="w-8 h-8" />,
        title: "Brand Identity",
        description: "Creating unique and memorable brand identities that resonate with your audience.",
    },
    {
        icon: <Layout className="w-8 h-8" />,
        title: "UI/UX Design",
        description: "Designing intuitive and aesthetically pleasing user interfaces for web and mobile.",
    },
    {
        icon: <Smartphone className="w-8 h-8" />,
        title: "App Design",
        description: "Crafting mobile application experiences that are both functional and beautiful.",
    },
    {
        icon: <Monitor className="w-8 h-8" />,
        title: "Web Design",
        description: "Building responsive and interactive websites that drive engagement.",
    },
];

export default function Services() {
    const sectionRef = useRef(null);

    useEffect(() => {
        gsap.utils.toArray(".service-card").forEach((card: any, i) => {
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
        <section ref={sectionRef} className="py-24 px-4 md:px-8 max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What I Offer</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="service-card p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
                    >
                        <div className="mb-6 p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-800 w-fit text-neutral-900 dark:text-white group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                            {service.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-neutral-900 dark:text-white">
                            {service.title}
                        </h3>
                        <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
