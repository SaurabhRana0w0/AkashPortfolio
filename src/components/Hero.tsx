"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowDown, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    const heroRef = useRef(null);
    const textRef = useRef(null);
    const subTextRef = useRef(null);
    const ctaRef = useRef(null);
    const shapesRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo(
            textRef.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 2.2 } // Delay for preloader
        )
            .fromTo(
                subTextRef.current,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: -0.5 }
            )
            .fromTo(
                ctaRef.current,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: -0.5 }
            )
            .fromTo(
                ".abstract-shape",
                { scale: 0, opacity: 0 },
                { scale: 1, opacity: 1, duration: 1.5, ease: "elastic.out(1, 0.5)", stagger: 0.2, delay: -1 }
            );

        // Floating animation for shapes
        gsap.to(".abstract-shape", {
            y: 20,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            stagger: {
                each: 0.5,
                from: "random",
            },
        });
    }, []);

    return (
        <section
            id="home"
            ref={heroRef}
            className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden"
        >
            <div className="z-10 max-w-4xl mx-auto">
                <h1
                    ref={textRef}
                    className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-500 dark:from-neutral-100 dark:to-neutral-500"
                >
                    Akash Yadav
                </h1>
                <p
                    ref={subTextRef}
                    className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 font-light tracking-wide mb-10 max-w-2xl mx-auto"
                >
                    Crafting digital experiences with minimal aesthetics and meaningful interactions.
                </p>

                <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                        href="#work"
                        className="px-8 py-4 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-medium text-lg hover:scale-105 transition-transform flex items-center gap-2"
                    >
                        View Work <ArrowDown className="w-4 h-4" />
                    </Link>
                    <Link
                        href="#contact"
                        className="px-8 py-4 rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white font-medium text-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors flex items-center gap-2"
                    >
                        Hire Me <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>

            {/* Abstract Visuals */}
            <div ref={shapesRef} className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
                {/* Circle 1 */}
                <div className="abstract-shape absolute top-[15%] left-[10%] w-32 h-32 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-2xl" />
                {/* Circle 2 */}
                <div className="abstract-shape absolute bottom-[20%] right-[10%] w-64 h-64 rounded-full bg-gradient-to-tr from-orange-400/20 to-red-400/20 blur-3xl" />
                {/* Circle 3 */}
                <div className="abstract-shape absolute top-[40%] right-[20%] w-24 h-24 rounded-full bg-neutral-200/50 dark:bg-neutral-800/50 blur-xl" />
                {/* Circle 4 */}
                <div className="abstract-shape absolute bottom-[30%] left-[20%] w-48 h-48 rounded-full bg-gradient-to-bl from-green-400/10 to-teal-400/10 blur-2xl" />
            </div>
        </section>
    );
}
