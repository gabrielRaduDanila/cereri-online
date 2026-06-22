import Link from 'next/link'
import { CERERI } from '@/lib/cereri'

export default function Home() {
  return (
    <div>
      <section className="text-center py-10 sm:py-16">
        <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">
          Cereri Online
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          Completează un formular și descarcă instant cererea ta oficială, în
          format PDF curat și pregătit pentru tipărire. Gratuit.
        </p>
      </section>

      <section
        aria-label="Notă privind confidențialitatea"
        className="mb-8 flex items-start gap-3 rounded-lg border border-blue-200 bg-blue-50 px-4 py-3 text-sm text-slate-700"
      >
        <span
          aria-hidden="true"
          className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-700 text-xs font-bold text-white"
        >
          🔒
        </span>
        <p className="leading-snug">
          <strong className="text-blue-900">
            Datele tale nu sunt salvate nicăieri.
          </strong>{' '}
          Tot ce completezi rămâne doar în browser-ul tău, până închizi
          fereastra. Zero cookies de tracking, zero cont, zero email cerut.{' '}
          <Link
            href="/despre"
            className="underline decoration-blue-400 underline-offset-2 hover:text-blue-700"
          >
            Cum funcționează →
          </Link>
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900 mb-4">
          Alege tipul de cerere
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {CERERI.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/cereri/${c.slug}`}
                className="block bg-white border border-slate-200 rounded-lg p-5 hover:border-blue-500 hover:shadow-sm transition"
              >
                <h3 className="font-semibold text-blue-700">{c.titlu}</h3>
                <p className="mt-1 text-sm text-slate-600">
                  {c.descriereScurta}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
