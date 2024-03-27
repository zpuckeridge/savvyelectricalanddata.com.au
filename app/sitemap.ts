import { MetadataRoute } from "next";

const baseUrl = "https://savvyelectricalanddata.com.au"
  ? `https://savvyelectricalanddata.com.au`
  : "http://localhost:3000";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routesMap = [""].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routesMap];
}
