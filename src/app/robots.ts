import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://model-cerere.ro/sitemap.xml',
    host: 'https://model-cerere.ro',
  }
}
