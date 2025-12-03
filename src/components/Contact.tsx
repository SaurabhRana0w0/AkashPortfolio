"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Send, MapPin, Mail, Clock } from "lucide-react";
import { sendEmail } from "@/app/actions";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
    const sectionRef = useRef(null);
    const formRef = useRef(null);
    const infoRef = useRef(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
            },
        });

        tl.fromTo(
            infoRef.current,
            { x: -50, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
        ).fromTo(
            formRef.current,
            { x: 50, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
            "-=0.8"
        );
    }, []);

    const handleSubmit = async (formData: FormData) => {
        setIsSubmitting(true);
        setStatus("idle");

        const result = await sendEmail(formData);

        if (result.success) {
            setStatus("success");
            // Reset form
            (document.getElementById("contact-form") as HTMLFormElement).reset();
        } else {
            setStatus("error");
        }
        setIsSubmitting(false);
    };

    return (
        <section
            id="contact"
            ref={sectionRef}
            className="py-24 px-4 md:px-8 max-w-6xl mx-auto"
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Contact Info */}
                <div ref={infoRef} className="space-y-8">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900 dark:text-white">
                            Let's Work Together
                        </h2>
                        <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            I'm currently available for freelance projects and open to full-time opportunities. If you have a project that needs some creative touch, I'd love to hear about it.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Email</h3>
                                <p className="text-neutral-600 dark:text-neutral-400">akashyadav@example.com</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Location</h3>
                                <p className="text-neutral-600 dark:text-neutral-400">India</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white">
                                <Clock className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Response Time</h3>
                                <p className="text-neutral-600 dark:text-neutral-400">Within 24 hours</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div
                    ref={formRef}
                    className="bg-white dark:bg-neutral-900 rounded-3xl p-8 md:p-10 shadow-xl border border-neutral-100 dark:border-neutral-800"
                >
                    <form id="contact-form" action={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={4}
                                className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                                placeholder="Tell me about your project..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-4 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50"
                        >
                            {isSubmitting ? (
                                "Sending..."
                            ) : (
                                <>
                                    Send Message <Send className="w-4 h-4" />
                                </>
                            )}
                        </button>

                        {status === "success" && (
                            <p className="text-green-500 text-center font-medium">Message sent successfully!</p>
                        )}
                        {status === "error" && (
                            <p className="text-red-500 text-center font-medium">Failed to send message. Please try again.</p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}
