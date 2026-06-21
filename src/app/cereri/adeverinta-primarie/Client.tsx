'use client'

import BuilderCerere from '@/components/BuilderCerere'
import { Camp } from '@/components/FormularCerere'
import AdevPrimariePDF, { AdevPrimarieData } from '@/components/pdf/AdevPrimariePDF'

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
  {
    nume: 'tipAdeverinta',
    eticheta: 'Tip adeverință',
    tip: 'select',
    obligatoriu: true,
    optiuni: [
      { valoare: 'de domiciliu', text: 'De domiciliu / reședință' },
      { valoare: 'de componență familie', text: 'De componență familie' },
      { valoare: 'de rol fiscal (de la registrul agricol)', text: 'De rol fiscal' },
      { valoare: 'fiscală (privind impozitele și taxele locale)', text: 'Fiscală (impozite locale)' },
    ],
  },
  { nume: 'numeSolicitant', eticheta: 'Numele tău complet', tip: 'text', obligatoriu: true },
  { nume: 'cnp', eticheta: 'CNP', tip: 'text', obligatoriu: true, ajutor: '13 cifre' },
  { nume: 'adresa', eticheta: 'Adresa completă', tip: 'text', obligatoriu: true, placeholder: 'Str. Exemplu nr. 1, Iași' },
  { nume: 'primarie', eticheta: 'Către ce primărie', tip: 'text', obligatoriu: true, placeholder: 'Primăria Municipiului Iași' },
  { nume: 'scop', eticheta: 'Scopul adeverinței', tip: 'text', obligatoriu: true, placeholder: 'dosar burse, alocație, instituții publice etc.' },
  { nume: 'oras', eticheta: 'Localitatea', tip: 'text', obligatoriu: true },
  { nume: 'dataDocument', eticheta: 'Data documentului', tip: 'date', obligatoriu: true },
]

const initiale: Record<string, string> = {
  gen: '',
  tipAdeverinta: '',
  numeSolicitant: '',
  cnp: '',
  adresa: '',
  primarie: '',
  scop: '',
  oras: '',
  dataDocument: new Date().toISOString().slice(0, 10),
}

export default function Client() {
  return (
    <BuilderCerere<AdevPrimarieData>
      config={{
        campuri,
        initiale,
        construiesteData: (v, semnatura) => ({
          gen: (v.gen as 'M' | 'F' | '') || '',
          tipAdeverinta: v.tipAdeverinta,
          numeSolicitant: v.numeSolicitant,
          cnp: v.cnp,
          adresa: v.adresa,
          primarie: v.primarie,
          scop: v.scop,
          oras: v.oras,
          dataDocument: v.dataDocument,
          semnaturaDataUrl: semnatura,
        }),
        randeazaPDF: (data) => <AdevPrimariePDF data={data} />,
        numeFisier: 'cerere-adeverinta-primarie.pdf',
      }}
    />
  )
}
