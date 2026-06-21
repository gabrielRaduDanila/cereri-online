'use client'

import BuilderCerere from '@/components/BuilderCerere'
import { Camp } from '@/components/FormularCerere'
import AdevAngajatorPDF, {
  AdevAngajatorData,
} from '@/components/pdf/AdevAngajatorPDF'

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
      { valoare: 'de salariat', text: 'De salariat' },
      { valoare: 'de venit', text: 'De venit' },
      { valoare: 'de vechime în muncă', text: 'De vechime în muncă' },
      { valoare: 'de salariat și venit', text: 'De salariat și venit' },
    ],
  },
  { nume: 'numeAngajat', eticheta: 'Numele tău complet', tip: 'text', obligatoriu: true },
  { nume: 'cnp', eticheta: 'CNP', tip: 'text', obligatoriu: true, ajutor: '13 cifre' },
  { nume: 'functie', eticheta: 'Funcția', tip: 'text', obligatoriu: true },
  { nume: 'numeAngajator', eticheta: 'Numele angajatorului', tip: 'text', obligatoriu: true },
  { nume: 'scop', eticheta: 'Scopul adeverinței', tip: 'text', obligatoriu: true, placeholder: 'credit bancar, viză, dosar pensie etc.' },
  { nume: 'oras', eticheta: 'Localitatea', tip: 'text', obligatoriu: true },
  { nume: 'dataDocument', eticheta: 'Data documentului', tip: 'date', obligatoriu: true },
]

const initiale: Record<string, string> = {
  gen: '',
  tipAdeverinta: '',
  numeAngajat: '',
  cnp: '',
  functie: '',
  numeAngajator: '',
  scop: '',
  oras: '',
  dataDocument: new Date().toISOString().slice(0, 10),
}

export default function Client() {
  return (
    <BuilderCerere<AdevAngajatorData>
      config={{
        campuri,
        initiale,
        construiesteData: (v, semnatura) => ({
          gen: (v.gen as 'M' | 'F' | '') || '',
          tipAdeverinta: v.tipAdeverinta,
          numeAngajat: v.numeAngajat,
          cnp: v.cnp,
          functie: v.functie,
          numeAngajator: v.numeAngajator,
          scop: v.scop,
          oras: v.oras,
          dataDocument: v.dataDocument,
          semnaturaDataUrl: semnatura,
        }),
        randeazaPDF: (data) => <AdevAngajatorPDF data={data} />,
        numeFisier: 'cerere-adeverinta-angajator.pdf',
      }}
    />
  )
}
