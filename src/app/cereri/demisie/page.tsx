import type { Metadata } from 'next'
import { getCerere } from '@/lib/cereri'
import DemisieClient from './DemisieClient'

const meta = getCerere('demisie')!

export const metadata: Metadata = {
  title: `${meta.titlu} — model PDF gratuit | Cereri Online`,
  description: meta.descriereSEO,
}

export default function PaginaDemisie() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
          {meta.titlu}
        </h1>
        <p className="mt-2 text-slate-600">{meta.descriereSEO}</p>
      </header>
      <DemisieClient />
    </div>
  )
}
