import { config } from "./config";

export default function sitemap() {
  return [
    {
      url: config.org.websiteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
