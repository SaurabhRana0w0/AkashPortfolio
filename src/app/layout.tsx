import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/Preloader";
import { Providers } from "@/components/Providers";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Akash Yadav | Graphic Designer",
    description: "Portfolio of Akash Yadav, a Graphic Designer Student.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth" suppressHydrationWarning>
            <body className={`${inter.className} bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50 antialiased`}>
                <Providers>
                    <Preloader />
                    <SmoothScroll />
                    {children}
                </Providers>
            </body>
        </html>
    );
}
