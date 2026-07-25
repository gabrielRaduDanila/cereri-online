import type { ArticolMeta } from './articole'

const BASE = 'https://model-cerere.ro'

export type Intrebare = { intrebare: string; raspuns: string }

export function buildArticleJsonLd(
  meta: ArticolMeta,
  intrebariFrecvente: Intrebare[],
  breadcrumbShort: string
) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${BASE}/blog/${meta.slug}#article`,
        headline: meta.titlu,
        description: meta.descriere,
        datePublished: meta.dataPublicare,
        dateModified: meta.dataPublicare,
        author: {
          '@type': 'Organization',
          name: 'Cereri Online',
          url: BASE,
        },
        publisher: {
          '@type': 'Organization',
          name: 'Cereri Online',
          url: BASE,
        },
        mainEntityOfPage: `${BASE}/blog/${meta.slug}`,
        inLanguage: 'ro-RO',
      },
      {
        '@type': 'FAQPage',
        '@id': `${BASE}/blog/${meta.slug}#faq`,
        mainEntity: intrebariFrecvente.map((q) => ({
          '@type': 'Question',
          name: q.intrebare,
          acceptedAnswer: {
            '@type': 'Answer',
            text: q.raspuns,
          },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Acasă', item: BASE },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Blog',
            item: `${BASE}/blog`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: breadcrumbShort,
            item: `${BASE}/blog/${meta.slug}`,
          },
        ],
      },
    ],
  }
}
