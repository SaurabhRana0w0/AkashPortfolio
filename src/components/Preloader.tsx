"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);
    const containerRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        // Stairs animation
        tl.to(".stair", {
            height: "0%",
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.inOut",
            delay: 0.5,
        }).to(containerRef.current, {
            display: "none",
            duration: 0,
        });

        // Optional: Add a text reveal or logo animation before the stairs open
        // For now, we just keep it simple as requested "stairs preloader"

        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Fallback

        return () => clearTimeout(timer);
    }, []);

    if (!isLoading) return null;

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[9999] flex pointer-events-none"
        >
            {[...Array(5)].map((_, i) => (
                <div
                    key={i}
                    className="stair w-1/5 h-full bg-neutral-900 dark:bg-neutral-100 relative"
                    style={{ transformOrigin: "top" }}
                />
            ))}
        </div>
    );
}
