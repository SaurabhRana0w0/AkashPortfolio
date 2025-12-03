import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },
        sitemap: "https://akashyadavdesigner.vercel.app/sitemap.xml", // Placeholder domain
    };
}
