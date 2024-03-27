const baseUrl = "https://savvyelectricalanddata.com.au"
  ? `https://savvyelectricalanddata.com.au`
  : "http://localhost:3000";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
