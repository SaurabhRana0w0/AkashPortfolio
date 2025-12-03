"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Linkedin, Instagram, FileText, Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Work", href: "#work" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out flex justify-center pt-4",
                scrolled ? "pt-2" : "pt-6"
            )}
        >
            <nav
                className={cn(
                    "flex items-center justify-between px-6 py-3 rounded-full backdrop-blur-md border transition-all duration-300 w-[90%] md:w-auto",
                    scrolled
                        ? "bg-white/70 border-neutral-200/50 shadow-sm dark:bg-neutral-900/70 dark:border-neutral-800/50"
                        : "bg-transparent border-transparent"
                )}
            >
                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-neutral-600 dark:text-neutral-400"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

                <div className="hidden md:block h-4 w-px bg-neutral-300 dark:bg-neutral-700 mx-4" />

                {/* Actions */}
                <div className="flex items-center gap-4">
                    {/* Theme Toggle */}
                    {mounted && (
                        <button
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                        >
                            {theme === "dark" ? (
                                <Sun className="w-5 h-5 text-neutral-400 hover:text-yellow-500" />
                            ) : (
                                <Moon className="w-5 h-5 text-neutral-600 hover:text-blue-500" />
                            )}
                        </button>
                    )}

                    <div className="hidden md:flex items-center gap-4">
                        <Link
                            href="https://linkedin.com"
                            target="_blank"
                            className="text-neutral-600 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400 transition-colors"
                        >
                            <Linkedin className="w-5 h-5" />
                        </Link>
                        <Link
                            href="https://instagram.com"
                            target="_blank"
                            className="text-neutral-600 hover:text-pink-600 dark:text-neutral-400 dark:hover:text-pink-400 transition-colors"
                        >
                            <Instagram className="w-5 h-5" />
                        </Link>
                        <Link
                            href="/resume.pdf"
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-xs font-bold hover:opacity-90 transition-opacity"
                        >
                            <FileText className="w-3 h-3" /> Resume
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-20 left-4 right-4 bg-white dark:bg-neutral-900 rounded-3xl p-6 shadow-2xl border border-neutral-100 dark:border-neutral-800 md:hidden flex flex-col gap-4"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-lg font-medium text-neutral-800 dark:text-neutral-200 py-2 border-b border-neutral-100 dark:border-neutral-800 last:border-0"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="flex gap-4 mt-4 justify-center">
                            <Link
                                href="https://linkedin.com"
                                target="_blank"
                                className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                            >
                                <Linkedin className="w-5 h-5" />
                            </Link>
                            <Link
                                href="https://instagram.com"
                                target="_blank"
                                className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                            >
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/resume.pdf"
                                className="flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-bold"
                            >
                                <FileText className="w-4 h-4" /> Resume
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
