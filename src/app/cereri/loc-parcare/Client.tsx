'use client'

import BuilderCerere from '@/components/BuilderCerere'
import { Camp } from '@/components/FormularCerere'
import LocParcarePDF, { LocParcareData } from '@/components/pdf/LocParcarePDF'

const campuri: Camp[] = [
  {
    nume: 'gen',
    eticheta: 'Gen',
    tip: 'select',
    obligatoriu: true,
    optiuni: [
      { valoare: 'M', text: 'Masculin' },
      { valoare: 'F', text: 'Feminin' },
    ],
  },
  { nume: 'numeSolicitant', eticheta: 'Numele tău complet', tip: 'text', obligatoriu: true },
  { nume: 'cnp', eticheta: 'CNP', tip: 'text', obligatoriu: true, ajutor: '13 cifre' },
  { nume: 'adresa', eticheta: 'Adresa de domiciliu', tip: 'text', obligatoriu: true, placeholder: 'Str. Exemplu nr. 1, bl. A, sc. 1, ap. 2' },
  { nume: 'primarie', eticheta: 'Către ce primărie', tip: 'text', obligatoriu: true, placeholder: 'Primăria Municipiului Iași' },
  { nume: 'marcaModel', eticheta: 'Marcă și model auto', tip: 'text', obligatoriu: true, placeholder: 'Dacia Logan' },
  { nume: 'numarAuto', eticheta: 'Număr înmatriculare', tip: 'text', obligatoriu: true, placeholder: 'IS-12-ABC' },
  { nume: 'oras', eticheta: 'Localitatea', tip: 'text', obligatoriu: true },
  { nume: 'dataDocument', eticheta: 'Data documentului', tip: 'date', obligatoriu: true },
]

const initiale: Record<string, string> = {
  gen: '',
  numeSolicitant: '',
  cnp: '',
  adresa: '',
  primarie: '',
  marcaModel: '',
  numarAuto: '',
  oras: '',
  dataDocument: new Date().toISOString().slice(0, 10),
}

export default function Client() {
  return (
    <BuilderCerere<LocParcareData>
      config={{
        campuri,
        initiale,
        construiesteData: (v, semnatura) => ({
          gen: (v.gen as 'M' | 'F' | '') || '',
          numeSolicitant: v.numeSolicitant,
          cnp: v.cnp,
          adresa: v.adresa,
          primarie: v.primarie,
          marcaModel: v.marcaModel,
          numarAuto: v.numarAuto,
          oras: v.oras,
          dataDocument: v.dataDocument,
          semnaturaDataUrl: semnatura,
        }),
        randeazaPDF: (data) => <LocParcarePDF data={data} />,
        numeFisier: 'cerere-loc-parcare.pdf',
      }}
    />
  )
}
