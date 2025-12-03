import { Heart, Linkedin, Instagram, Twitter, Github } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    const quickLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Work", href: "#work" },
        { name: "Contact", href: "#contact" },
    ];

    const socialLinks = [
        { name: "LinkedIn", href: "https://linkedin.com", icon: <Linkedin className="w-5 h-5" /> },
        { name: "Instagram", href: "https://instagram.com", icon: <Instagram className="w-5 h-5" /> },
        { name: "Twitter", href: "https://twitter.com", icon: <Twitter className="w-5 h-5" /> },
        { name: "GitHub", href: "https://github.com", icon: <Github className="w-5 h-5" /> },
    ];

    return (
        <footer className="bg-white dark:bg-neutral-900 border-t border-neutral-100 dark:border-neutral-800 pt-16 pb-8">
            <div className="max-w-6xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">Akash Yadav</h2>
                        <p className="text-neutral-500 dark:text-neutral-400 max-w-sm">
                            Crafting digital experiences with minimal aesthetics and meaningful interactions. Open for collaborations and new opportunities.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-4">Connect</h3>
                        <div className="flex gap-4">
                            {socialLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    target="_blank"
                                    className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                                    aria-label={link.name}
                                >
                                    {link.icon}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-neutral-100 dark:border-neutral-800 pt-8 text-center">
                    <p className="flex items-center justify-center gap-1 text-sm text-neutral-500 dark:text-neutral-400">
                        Made by SaurabhRana0w0 with{" "}
                        <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse cursor-pointer hover:scale-110 transition-transform" />
                    </p>
                    <p className="mt-2 text-xs opacity-50 text-neutral-400 dark:text-neutral-500">
                        &copy; {new Date().getFullYear()} Akash Yadav. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
