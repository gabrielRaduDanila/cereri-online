'use client'

import BuilderCerere from '@/components/BuilderCerere'
import { Camp } from '@/components/FormularCerere'
import ConcediuPDF, { ConcediuData } from '@/components/pdf/ConcediuPDF'

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
    nume: 'tipConcediu',
    eticheta: 'Tip concediu',
    tip: 'select',
    obligatoriu: true,
    optiuni: [
      { valoare: 'de odihnă', text: 'Concediu de odihnă' },
      { valoare: 'fără plată', text: 'Concediu fără plată' },
      { valoare: 'pentru evenimente familiale', text: 'Pentru evenimente familiale' },
      { valoare: 'pentru îngrijirea copilului', text: 'Pentru îngrijirea copilului' },
    ],
  },
  { nume: 'numeAngajat', eticheta: 'Numele tău complet', tip: 'text', obligatoriu: true },
  { nume: 'cnp', eticheta: 'CNP', tip: 'text', obligatoriu: true, ajutor: '13 cifre' },
  { nume: 'functie', eticheta: 'Funcția', tip: 'text', obligatoriu: true },
  { nume: 'numeAngajator', eticheta: 'Numele angajatorului', tip: 'text', obligatoriu: true },
  { nume: 'dataStart', eticheta: 'Data începere concediu', tip: 'date', obligatoriu: true },
  { nume: 'dataSfarsit', eticheta: 'Data sfârșit concediu', tip: 'date', obligatoriu: true },
  { nume: 'numarZile', eticheta: 'Număr zile lucrătoare', tip: 'number', obligatoriu: true },
  { nume: 'oras', eticheta: 'Localitatea', tip: 'text', obligatoriu: true },
  { nume: 'dataDocument', eticheta: 'Data documentului', tip: 'date', obligatoriu: true },
  { nume: 'motiv', eticheta: 'Motivul (opțional)', tip: 'textarea', placeholder: 'Doar pentru concediu fără plată sau evenimente.' },
]

const initiale: Record<string, string> = {
  gen: '',
  tipConcediu: '',
  numeAngajat: '',
  cnp: '',
  functie: '',
  numeAngajator: '',
  dataStart: '',
  dataSfarsit: '',
  numarZile: '',
  oras: '',
  dataDocument: new Date().toISOString().slice(0, 10),
  motiv: '',
}

export default function Client() {
  return (
    <BuilderCerere<ConcediuData>
      config={{
        campuri,
        initiale,
        construiesteData: (v, semnatura) => ({
          gen: (v.gen as 'M' | 'F' | '') || '',
          tipConcediu: v.tipConcediu,
          numeAngajat: v.numeAngajat,
          cnp: v.cnp,
          functie: v.functie,
          numeAngajator: v.numeAngajator,
          dataStart: v.dataStart,
          dataSfarsit: v.dataSfarsit,
          numarZile: v.numarZile,
          motiv: v.motiv,
          oras: v.oras,
          dataDocument: v.dataDocument,
          semnaturaDataUrl: semnatura,
        }),
        randeazaPDF: (data) => <ConcediuPDF data={data} />,
        numeFisier: 'cerere-concediu.pdf',
      }}
    />
  )
}
