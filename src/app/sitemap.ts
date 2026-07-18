import type { MetadataRoute } from "next";
import { createBuildClient } from "@/lib/supabase/build";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const supabase = createBuildClient();

  const [sectorsRes, newsRes] = await Promise.all([
    supabase.from("investment_sectors").select("slug"),
    supabase.from("news").select("slug, updated_at"),
  ]);

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bdi.gov.ng";

  const staticRoutes = [
    "",
    "/about/bsg",
    "/about/bdi",
    "/investments",
    "/projects",
    "/impact",
    "/media",
    "/media/news",
    "/media/gallery",
    "/careers",
    "/innovation",
    "/contact",
    "/privacy-policy",
    "/terms-of-use",
    // NEW FIRM ROUTES:
    "/firm/history",
    "/firm/team",
    "/faqs", 
  ];

  const sectorRoutes =
    sectorsRes.data?.map((s) => `/investments/${s.slug}`) || [];
  const newsRoutes =
    newsRes.data?.map((n) => ({
      url: `${baseUrl}/media/news/${n.slug}`,
      lastModified: new Date(n.updated_at || n.slug),
    })) || [];

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...sectorRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...newsRoutes.map((item) => ({
      ...item,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
  ];
}