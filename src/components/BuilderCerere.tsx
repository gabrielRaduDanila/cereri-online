'use client'

import { useState, useMemo, ReactElement } from 'react'
import dynamic from 'next/dynamic'
import FormularCerere, { Camp } from './FormularCerere'
import SemnaturaCanvas from './SemnaturaCanvas'

const PreviewPDF = dynamic(() => import('./PreviewPDF'), {
  ssr: false,
  loading: () => (
    <div className="border border-slate-200 rounded-md bg-slate-100 h-[70vh] flex items-center justify-center text-slate-500">
      Se încarcă previzualizarea PDF...
    </div>
  ),
})

const PDFDownloadLink = dynamic(
  () => import('@react-pdf/renderer').then((m) => m.PDFDownloadLink),
  { ssr: false }
)

export type ConfigCerere<T> = {
  campuri: Camp[]
  initiale: Record<string, string>
  construiesteData: (
    valori: Record<string, string>,
    semnatura: string | null
  ) => T
  randeazaPDF: (data: T) => ReactElement
  numeFisier: string
}

export default function BuilderCerere<T>({
  config,
}: {
  config: ConfigCerere<T>
}) {
  const [valori, setValori] = useState<Record<string, string>>(config.initiale)
  const [semnatura, setSemnatura] = useState<string | null>(null)

  const data = useMemo(
    () => config.construiesteData(valori, semnatura),
    [valori, semnatura, config]
  )

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="space-y-6">
        <section className="bg-white border border-slate-200 rounded-lg p-5">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">
            Completează datele
          </h2>
          <FormularCerere
            campuri={config.campuri}
            valoriInitiale={config.initiale}
            onChange={setValori}
          />
        </section>

        <section className="bg-white border border-slate-200 rounded-lg p-5">
          <h2 className="text-lg font-semibold text-slate-900 mb-3">Semnătura</h2>
          <SemnaturaCanvas onChange={setSemnatura} />
        </section>

        <PDFDownloadLink
          document={config.randeazaPDF(data)}
          fileName={config.numeFisier}
          className="block w-full text-center bg-blue-700 hover:bg-blue-800 text-white font-medium px-4 py-3 rounded-md transition"
        >
          {({ loading }) => (loading ? 'Se pregătește PDF...' : 'Descarcă PDF')}
        </PDFDownloadLink>
      </div>

      <div className="lg:sticky lg:top-4 lg:self-start">
        <h2 className="text-lg font-semibold text-slate-900 mb-3">
          Previzualizare PDF
        </h2>
        <PreviewPDF>{config.randeazaPDF(data)}</PreviewPDF>
      </div>
    </div>
  )
}
