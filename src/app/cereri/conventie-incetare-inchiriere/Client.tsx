'use client'

import { useState, useMemo } from 'react'
import dynamic from 'next/dynamic'
import FormularCerere, { Camp } from '@/components/FormularCerere'
import SemnaturaCanvas from '@/components/SemnaturaCanvas'
import ConventieIncetareInchirierePDF, {
  ConventieIncetareInchiriereData,
} from '@/components/pdf/ConventieIncetareInchirierePDF'

const PreviewPDF = dynamic(() => import('@/components/PreviewPDF'), {
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

const campuri: Camp[] = [
  { nume: 'propNume', eticheta: 'Proprietar — Nume complet', tip: 'text', obligatoriu: true },
  { nume: 'propCnp', eticheta: 'Proprietar — CNP', tip: 'text', obligatoriu: true, ajutor: '13 cifre' },
  { nume: 'propCi', eticheta: 'Proprietar — CI serie + număr', tip: 'text', obligatoriu: true, placeholder: 'MX 123456' },
  { nume: 'propAdresa', eticheta: 'Proprietar — Adresa domiciliu', tip: 'text', obligatoriu: true },

  { nume: 'chirNume', eticheta: 'Chiriaș — Nume complet', tip: 'text', obligatoriu: true },
  { nume: 'chirCnp', eticheta: 'Chiriaș — CNP', tip: 'text', obligatoriu: true, ajutor: '13 cifre' },
  { nume: 'chirCi', eticheta: 'Chiriaș — CI serie + număr', tip: 'text', obligatoriu: true, placeholder: 'MX 654321' },
  { nume: 'chirAdresa', eticheta: 'Chiriaș — Adresa domiciliu', tip: 'text', obligatoriu: true },

  { nume: 'imobAdresa', eticheta: 'Adresa imobilului închiriat', tip: 'text', obligatoriu: true },
  { nume: 'dataContract', eticheta: 'Data încheierii contractului', tip: 'date', obligatoriu: true },
  { nume: 'dataIncetare', eticheta: 'Data efectivă de încetare', tip: 'date', obligatoriu: true },

  { nume: 'garantieInitiala', eticheta: 'Garanție depusă inițial (lei)', tip: 'number', obligatoriu: true },
  { nume: 'garantieRestituita', eticheta: 'Garanție restituită acum (lei)', tip: 'number', obligatoriu: true, ajutor: 'Poate fi mai mică decât cea inițială, dacă s-au reținut sume pentru daune, chirie sau utilități.' },
  { nume: 'cheiPredate', eticheta: 'Număr chei predate', tip: 'number', obligatoriu: true, placeholder: '2' },
  { nume: 'utilitatiRegularizate', eticheta: 'Situația utilităților (opțional)', tip: 'textarea', placeholder: 'ex: Facturi Enel, Digi și Apa Nova plătite până la 31.08.2026. Chiriașul predă bonurile.' },
  { nume: 'observatii', eticheta: 'Observații (opțional)', tip: 'textarea', placeholder: 'ex: Chiriașul lasă în locuință aragazul și frigiderul, contra sumei de 500 lei achitată azi.' },

  { nume: 'oras', eticheta: 'Localitatea', tip: 'text', obligatoriu: true },
  { nume: 'dataDocument', eticheta: 'Data semnării convenției', tip: 'date', obligatoriu: true },
]

const initiale: Record<string, string> = {
  propNume: '', propCnp: '', propCi: '', propAdresa: '',
  chirNume: '', chirCnp: '', chirCi: '', chirAdresa: '',
  imobAdresa: '', dataContract: '', dataIncetare: '',
  garantieInitiala: '', garantieRestituita: '', cheiPredate: '',
  utilitatiRegularizate: '', observatii: '',
  oras: '',
  dataDocument: new Date().toISOString().slice(0, 10),
}

export default function Client() {
  const [valori, setValori] = useState<Record<string, string>>(initiale)
  const [semnProp, setSemnProp] = useState<string | null>(null)
  const [semnChir, setSemnChir] = useState<string | null>(null)

  const data: ConventieIncetareInchiriereData = useMemo(
    () => ({
      propNume: valori.propNume, propCnp: valori.propCnp, propCi: valori.propCi, propAdresa: valori.propAdresa,
      chirNume: valori.chirNume, chirCnp: valori.chirCnp, chirCi: valori.chirCi, chirAdresa: valori.chirAdresa,
      imobAdresa: valori.imobAdresa, dataContract: valori.dataContract, dataIncetare: valori.dataIncetare,
      garantieInitiala: valori.garantieInitiala, garantieRestituita: valori.garantieRestituita,
      cheiPredate: valori.cheiPredate,
      utilitatiRegularizate: valori.utilitatiRegularizate,
      observatii: valori.observatii,
      oras: valori.oras, dataDocument: valori.dataDocument,
      semnPropDataUrl: semnProp,
      semnChirDataUrl: semnChir,
    }),
    [valori, semnProp, semnChir]
  )

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="space-y-6">
        <section className="bg-white border border-slate-200 rounded-lg p-5">
          <h2 className="text-lg font-semibold text-slate-900 mb-2">
            Completează datele convenției
          </h2>
          <p className="text-sm text-slate-600 mb-4">
            Convenția e un act bilateral: ambele părți (proprietar și chiriaș)
            trebuie să semneze. Se folosește când decizia de încetare e
            AMIABILĂ (spre deosebire de rezilierea unilaterală prin
            notificare).
          </p>
          <FormularCerere campuri={campuri} valoriInitiale={initiale} onChange={setValori} />
        </section>

        <section className="bg-white border border-slate-200 rounded-lg p-5">
          <h2 className="text-lg font-semibold text-slate-900 mb-3">
            Semnătura proprietar
          </h2>
          <SemnaturaCanvas onChange={setSemnProp} />
        </section>

        <section className="bg-white border border-slate-200 rounded-lg p-5">
          <h2 className="text-lg font-semibold text-slate-900 mb-3">
            Semnătura chiriaș
          </h2>
          <SemnaturaCanvas onChange={setSemnChir} />
        </section>

        <PDFDownloadLink
          document={<ConventieIncetareInchirierePDF data={data} />}
          fileName="conventie-incetare-inchiriere.pdf"
          className="block w-full text-center bg-blue-700 hover:bg-blue-800 text-white font-medium px-4 py-3 rounded-md transition"
        >
          {({ loading }) =>
            loading ? 'Se pregătește PDF...' : 'Descarcă PDF (convenție semnată de ambele părți)'
          }
        </PDFDownloadLink>
      </div>

      <div className="lg:sticky lg:top-4 lg:self-start">
        <h2 className="text-lg font-semibold text-slate-900 mb-3">
          Previzualizare PDF
        </h2>
        <PreviewPDF>
          <ConventieIncetareInchirierePDF data={data} />
        </PreviewPDF>
      </div>
    </div>
  )
}
