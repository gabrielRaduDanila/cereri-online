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
  { nume: 'zileRestituireGarantie', eticheta: 'Zile pentru restituire garanție', tip: 'number', obligatoriu: true, placeholder: '30', ajutor: 'De la încetarea contractului. Uzual: 15-30 zile.' },

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

  // anexa - proces verbal
  { nume: 'citireElectricitate', eticheta: 'Anexă — Citire energie electrică (kWh)', tip: 'text', placeholder: 'ex: 12534' },
  { nume: 'citireGazNaturale', eticheta: 'Anexă — Citire gaze naturale (mc)', tip: 'text', placeholder: 'ex: 4521' },
  { nume: 'citireApaRece', eticheta: 'Anexă — Citire apă rece (mc)', tip: 'text', placeholder: 'ex: 287' },
  { nume: 'citireApaCalda', eticheta: 'Anexă — Citire apă caldă (mc)', tip: 'text', placeholder: 'ex: 142' },
  { nume: 'numarChei', eticheta: 'Anexă — Număr chei predate', tip: 'number', placeholder: '2' },
  { nume: 'starePereti', eticheta: 'Anexă — Stare pereți și zugrăveală', tip: 'textarea', placeholder: 'ex: Zugrăvire albă recentă, fără defecte vizibile.' },
  { nume: 'starePardoseala', eticheta: 'Anexă — Stare pardoseală', tip: 'textarea', placeholder: 'ex: Parchet laminat în stare bună, mici zgârieturi în bucătărie.' },
  { nume: 'mobilier', eticheta: 'Anexă — Inventar mobilier', tip: 'textarea', placeholder: 'ex: Canapea 3 locuri, masă living, 4 scaune, dulap dormitor, pat dublu cu saltea, birou, scaun birou, comodă hol.' },
  { nume: 'electrocasnice', eticheta: 'Anexă — Inventar electrocasnice', tip: 'textarea', placeholder: 'ex: Frigider Beko, mașină de spălat Whirlpool, aragaz cu cuptor electric, microunde, hotă, fier de călcat.' },
  { nume: 'observatii', eticheta: 'Anexă — Observații (opțional)', tip: 'textarea', placeholder: 'ex: Mic defect estetic ușa dulap dormitor, zgârietură geam baie. Restul în stare bună.' },

  { nume: 'oras', eticheta: 'Localitatea', tip: 'text', obligatoriu: true },
  { nume: 'dataDocument', eticheta: 'Data semnării contractului', tip: 'date', obligatoriu: true },
]

const initiale: Record<string, string> = {
  propNume: '', propCnp: '', propCi: '', propAdresa: '',
  chirNume: '', chirCnp: '', chirCi: '', chirAdresa: '',
  imobAdresa: '', imobTip: '', imobSuprafata: '', imobCamere: '',
  dataStart: '', dataSfarsit: '', chirieLunara: '', ziuaScadenta: '', garantie: '',
  zileRestituireGarantie: '30',
  utilitati: '', preaviz: '30',
  citireElectricitate: '', citireGazNaturale: '', citireApaRece: '', citireApaCalda: '',
  numarChei: '', starePereti: '', starePardoseala: '',
  mobilier: '', electrocasnice: '', observatii: '',
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
      zileRestituireGarantie: valori.zileRestituireGarantie,
      utilitati: valori.utilitati, preaviz: valori.preaviz,
      citireElectricitate: valori.citireElectricitate,
      citireGazNaturale: valori.citireGazNaturale,
      citireApaRece: valori.citireApaRece,
      citireApaCalda: valori.citireApaCalda,
      numarChei: valori.numarChei,
      starePereti: valori.starePereti,
      starePardoseala: valori.starePardoseala,
      mobilier: valori.mobilier,
      electrocasnice: valori.electrocasnice,
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
            Completează datele contractului
          </h2>
          <p className="text-sm text-slate-600 mb-4">
            Câmpurile marcate cu „Anexă —" apar în Pagina 2 a PDF-ului
            (proces-verbal de predare-primire). Le poți lăsa goale dacă vrei să
            le completezi de mână mai târziu.
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
          document={<ContractInchirierePDF data={data} />}
          fileName="contract-inchiriere.pdf"
          className="block w-full text-center bg-blue-700 hover:bg-blue-800 text-white font-medium px-4 py-3 rounded-md transition"
        >
          {({ loading }) => (loading ? 'Se pregătește PDF...' : 'Descarcă PDF (2 pagini: contract + anexă)')}
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
