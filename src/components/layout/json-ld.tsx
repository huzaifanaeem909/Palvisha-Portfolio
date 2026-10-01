import { siteConfig } from "@/data/site";

const personData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  url: siteConfig.url,
  jobTitle: siteConfig.title,
  email: siteConfig.email,
  address: { "@type": "PostalAddress", addressLocality: siteConfig.location },
  sameAs: siteConfig.socials.map((social) => social.url),
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(personData).replace(/</g, "\\u003c"),
      }}
    />
  );
}
