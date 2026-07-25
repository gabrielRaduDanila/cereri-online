import type { Metadata } from 'next'
import Link from 'next/link'
import { ARTICOLE } from '@/lib/articole'

export const metadata: Metadata = {
  title: 'Blog — ghiduri practice despre cereri și acte oficiale | Cereri Online',
  description:
    'Articole practice despre demisie, concediu, contracte, adeverințe și alte acte oficiale în România. Explicații simple, pas cu pas, cu modele PDF gratuite.',
  alternates: { canonical: '/blog' },
}

export default function PaginaBlog() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <header>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
          Blog
        </h1>
        <p className="mt-3 text-lg text-slate-600">
          Ghiduri practice despre acte oficiale, drepturile tale legale și cum
          să eviți greșelile frecvente.
        </p>
      </header>

      {ARTICOLE.length === 0 ? (
        <p className="text-slate-600">În curând primele articole.</p>
      ) : (
        <ul className="space-y-4">
          {ARTICOLE.map((a) => (
            <li key={a.slug}>
              <Link
                href={`/blog/${a.slug}`}
                className="block bg-white border border-slate-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-sm transition"
              >
                <div className="text-xs text-slate-500 mb-2">
                  {new Date(a.dataPublicare).toLocaleDateString('ro-RO', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}{' '}
                  · {a.timpCitire}
                </div>
                <h2 className="text-xl font-semibold text-blue-700">
                  {a.titlu}
                </h2>
                <p className="mt-2 text-slate-600">{a.descriere}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
