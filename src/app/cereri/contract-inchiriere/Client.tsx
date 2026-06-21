'use client'

import { useState, useMemo } from 'react'
import dynamic from 'next/dynamic'
import FormularCerere, { Camp } from '@/components/FormularCerere'
import SemnaturaCanvas from '@/components/SemnaturaCanvas'
import ContractInchirierePDF, {
  ContractInchiriereData,
} from '@/components/pdf/ContractInchirierePDF'

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

  { nume: 'imobAdresa', eticheta: 'Imobil — Adresa completă', tip: 'text', obligatoriu: true },
  {
    nume: 'imobTip',
    eticheta: 'Imobil — Tip',
    tip: 'select',
    obligatoriu: true,
    optiuni: [
      { valoare: 'apartament', text: 'Apartament' },
      { valoare: 'casă', text: 'Casă' },
      { valoare: 'cameră', text: 'Cameră' },
      { valoare: 'garsonieră', text: 'Garsonieră' },
    ],
  },
  { nume: 'imobSuprafata', eticheta: 'Imobil — Suprafață (mp)', tip: 'number', obligatoriu: true },
  { nume: 'imobCamere', eticheta: 'Imobil — Număr camere', tip: 'number', obligatoriu: true },

  { nume: 'dataStart', eticheta: 'Data începere chirie', tip: 'date', obligatoriu: true },
  { nume: 'dataSfarsit', eticheta: 'Data sfârșit chirie', tip: 'date', obligatoriu: true },
  { nume: 'chirieLunara', eticheta: 'Chirie lunară (lei)', tip: 'number', obligatoriu: true },
  { nume: 'ziuaScadenta', eticheta: 'Ziua scadenței lunare', tip: 'number', obligatoriu: true, placeholder: '5', ajutor: 'Ex: 5 = până în data de 5 a lunii' },
  { nume: 'garantie', eticheta: 'Garanție (lei)', tip: 'number', obligatoriu: true, ajutor: 'Standard: 1-2 chirii' },

  {
    nume: 'utilitati',
    eticheta: 'Cine plătește utilitățile',
    tip: 'select',
    obligatoriu: true,
    optiuni: [
      { valoare: 'chiriașului', text: 'Chiriașului' },
      { valoare: 'proprietarului', text: 'Proprietarului' },
      { valoare: 'ambelor părți, conform anexei', text: 'Ambele părți (mixt)' },
    ],
  },
  { nume: 'preaviz', eticheta: 'Termen preaviz (zile)', tip: 'number', obligatoriu: true, placeholder: '30' },
  { nume: 'inventar', eticheta: 'Descriere stare imobil / inventar (opțional)', tip: 'textarea', placeholder: 'Mobilier, electrocasnice, stare zugrăveală etc.' },

  { nume: 'oras', eticheta: 'Localitatea', tip: 'text', obligatoriu: true },
  { nume: 'dataDocument', eticheta: 'Data semnării contractului', tip: 'date', obligatoriu: true },
]

const initiale: Record<string, string> = {
  propNume: '', propCnp: '', propCi: '', propAdresa: '',
  chirNume: '', chirCnp: '', chirCi: '', chirAdresa: '',
  imobAdresa: '', imobTip: '', imobSuprafata: '', imobCamere: '',
  dataStart: '', dataSfarsit: '', chirieLunara: '', ziuaScadenta: '', garantie: '',
  utilitati: '', preaviz: '30', inventar: '',
  oras: '',
  dataDocument: new Date().toISOString().slice(0, 10),
}

export default function Client() {
  const [valori, setValori] = useState<Record<string, string>>(initiale)
  const [semnProp, setSemnProp] = useState<string | null>(null)
  const [semnChir, setSemnChir] = useState<string | null>(null)

  const data: ContractInchiriereData = useMemo(
    () => ({
      propNume: valori.propNume, propCnp: valori.propCnp, propCi: valori.propCi, propAdresa: valori.propAdresa,
      chirNume: valori.chirNume, chirCnp: valori.chirCnp, chirCi: valori.chirCi, chirAdresa: valori.chirAdresa,
      imobAdresa: valori.imobAdresa, imobTip: valori.imobTip, imobSuprafata: valori.imobSuprafata, imobCamere: valori.imobCamere,
      dataStart: valori.dataStart, dataSfarsit: valori.dataSfarsit, chirieLunara: valori.chirieLunara, ziuaScadenta: valori.ziuaScadenta, garantie: valori.garantie,
      utilitati: valori.utilitati, preaviz: valori.preaviz, inventar: valori.inventar,
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
          <h2 className="text-lg font-semibold text-slate-900 mb-4">
            Completează datele contractului
          </h2>
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
          document={<ContractInchirierePDF data={data} />}
          fileName="contract-inchiriere.pdf"
          className="block w-full text-center bg-blue-700 hover:bg-blue-800 text-white font-medium px-4 py-3 rounded-md transition"
        >
          {({ loading }) => (loading ? 'Se pregătește PDF...' : 'Descarcă PDF')}
        </PDFDownloadLink>
      </div>

      <div className="lg:sticky lg:top-4 lg:self-start">
        <h2 className="text-lg font-semibold text-slate-900 mb-3">
          Previzualizare PDF
        </h2>
        <PreviewPDF>
          <ContractInchirierePDF data={data} />
        </PreviewPDF>
      </div>
    </div>
  )
}
