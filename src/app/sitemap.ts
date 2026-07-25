import type { MetadataRoute } from 'next'
import { CERERI } from '@/lib/cereri'
import { ARTICOLE } from '@/lib/articole'

const BASE = 'https://model-cerere.ro'

export default function sitemap(): MetadataRoute.Sitemap {
  const acum = new Date()
  const cereri = CERERI.map((c) => ({
    url: `${BASE}/cereri/${c.slug}`,
    lastModified: acum,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))
  const articole = ARTICOLE.map((a) => ({
    url: `${BASE}/blog/${a.slug}`,
    lastModified: new Date(a.dataPublicare),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))
  return [
    {
      url: BASE,
      lastModified: acum,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE}/blog`,
      lastModified: acum,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE}/despre`,
      lastModified: acum,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    ...cereri,
    ...articole,
  ]
}
