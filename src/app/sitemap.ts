import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://akashyadav.design", // Placeholder domain
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
    ];
}
