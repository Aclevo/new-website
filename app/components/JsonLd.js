import { config } from "../config";

export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: config.org.name,
    url: config.org.websiteUrl,
    logo: `${config.org.websiteUrl}/logo.png`,
    sameAs: [config.org.githubUrl, config.org.discordUrl],
    description: config.site.description,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
