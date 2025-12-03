import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// Correctly typing params for Next.js 15
export default async function ProjectPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const project = projects.find((p) => p.id === id);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-neutral-50 dark:bg-neutral-950 py-24 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
                <Link
                    href="/#work"
                    className="inline-flex items-center gap-2 text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 mb-8 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" /> Back to Work
                </Link>

                <div className="mb-12">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white mb-4 ${project.color}`}>
                        {project.category}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-neutral-900 dark:text-white">
                        {project.title}
                    </h1>
                    <p className="text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {project.fullDescription}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 border-y border-neutral-200 dark:border-neutral-800 py-8">
                    <div>
                        <h3 className="text-sm font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-2">
                            Client
                        </h3>
                        <p className="text-lg font-medium text-neutral-900 dark:text-white">{project.client}</p>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-2">
                            Timeline
                        </h3>
                        <p className="text-lg font-medium text-neutral-900 dark:text-white">{project.timeline}</p>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-2">
                            Role
                        </h3>
                        <p className="text-lg font-medium text-neutral-900 dark:text-white">{project.role}</p>
                    </div>
                </div>

                <div className="space-y-8">
                    {/* Placeholder for project images - in a real app these would be actual images */}
                    <div className="aspect-video bg-neutral-200 dark:bg-neutral-800 rounded-2xl flex items-center justify-center">
                        <p className="text-neutral-400">Project Image 1</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="aspect-square bg-neutral-200 dark:bg-neutral-800 rounded-2xl flex items-center justify-center">
                            <p className="text-neutral-400">Project Image 2</p>
                        </div>
                        <div className="aspect-square bg-neutral-200 dark:bg-neutral-800 rounded-2xl flex items-center justify-center">
                            <p className="text-neutral-400">Project Image 3</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id,
    }));
}
