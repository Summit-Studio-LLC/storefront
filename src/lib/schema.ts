import { siteConfig } from '@/data/site';

type JsonLd = Record<string, unknown>;

const logoObject = {
  '@type': 'ImageObject',
  url: `${siteConfig.url}/logo.svg`,
};

export function getOrganizationSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: logoObject,
    email: siteConfig.email,
    description: siteConfig.description,
    areaServed: siteConfig.areaServed.map((area) => ({
      '@type': 'Place',
      name: area,
    })),
  };
}

export function getLocalBusinessSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: logoObject,
    email: siteConfig.email,
    description: siteConfig.description,
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      addressCountry: siteConfig.address.addressCountry,
    },
    areaServed: siteConfig.areaServed.map((area) => ({
      '@type': 'Place',
      name: area,
    })),
    priceRange: siteConfig.priceRange,
  };
}

export function getWebSiteSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

export function getFAQPageSchema(
  categories: { questions: { question: string; answer: string }[] }[]
): JsonLd {
  const allQuestions = categories.flatMap((cat) => cat.questions);
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allQuestions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  };
}

export function getServiceSchemas(
  services: { title: string; description: string; startingAt?: string }[]
): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: services.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Service',
        name: service.title,
        description: service.description,
        provider: {
          '@type': 'Organization',
          name: siteConfig.name,
          url: siteConfig.url,
        },
        areaServed: {
          '@type': 'Place',
          name: siteConfig.location,
        },
        ...(service.startingAt &&
          service.startingAt !== 'Varies' && {
            offers: {
              '@type': 'Offer',
              price: service.startingAt.replace(/[^0-9.]/g, ''),
              priceCurrency: 'USD',
            },
          }),
      },
    })),
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function getArticleSchema(article: {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
}): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    url: article.url,
    datePublished: article.datePublished ?? '2025-01-01',
    author: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
      logo: logoObject,
    },
  };
}
