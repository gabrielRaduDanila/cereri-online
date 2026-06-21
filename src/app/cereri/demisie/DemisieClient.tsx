'use client'

import BuilderCerere from '@/components/BuilderCerere'
import { Camp } from '@/components/FormularCerere'
import DemisiePDF, { DemisieData } from '@/components/pdf/DemisiePDF'

const campuri: Camp[] = [
  {
    nume: 'gen',
    eticheta: 'Gen',
    tip: 'select',
    obligatoriu: true,
    optiuni: [
      { valoare: 'M', text: 'Masculin (Subsemnatul, angajat)' },
      { valoare: 'F', text: 'Feminin (Subsemnata, angajată)' },
    ],
  },
  {
    nume: 'numeAngajat',
    eticheta: 'Numele tău complet',
    tip: 'text',
    obligatoriu: true,
    placeholder: 'Ion Popescu',
  },
  {
    nume: 'cnp',
    eticheta: 'CNP',
    tip: 'text',
    obligatoriu: true,
    placeholder: '1860708xxxxxx',
    ajutor: '13 cifre',
  },
  {
    nume: 'functie',
    eticheta: 'Funcția deținută',
    tip: 'text',
    obligatoriu: true,
    placeholder: 'Inginer software',
  },
  {
    nume: 'numeAngajator',
    eticheta: 'Numele angajatorului (firma)',
    tip: 'text',
    obligatoriu: true,
    placeholder: 'SC Exemplu SRL',
  },
  {
    nume: 'dataPlecare',
    eticheta: 'Data plecării (ultima zi de lucru)',
    tip: 'date',
    obligatoriu: true,
  },
  {
    nume: 'oras',
    eticheta: 'Localitatea',
    tip: 'text',
    obligatoriu: true,
    placeholder: 'Iași',
  },
  {
    nume: 'dataDocument',
    eticheta: 'Data documentului',
    tip: 'date',
    obligatoriu: true,
  },
  {
    nume: 'motiv',
    eticheta: 'Motivul demisiei (opțional)',
    tip: 'textarea',
    placeholder: 'Schimbarea locului de muncă, motive personale etc.',
    ajutor: 'Poți lăsa gol — Codul Muncii nu obligă menționarea motivului.',
  },
]

const initiale: Record<string, string> = {
  gen: '',
  numeAngajat: '',
  cnp: '',
  functie: '',
  numeAngajator: '',
  dataPlecare: '',
  oras: '',
  dataDocument: new Date().toISOString().slice(0, 10),
  motiv: '',
}

export default function DemisieClient() {
  return (
    <BuilderCerere<DemisieData>
      config={{
        campuri,
        initiale,
        construiesteData: (valori, semnatura) => ({
          gen: (valori.gen as 'M' | 'F' | '') || '',
          numeAngajat: valori.numeAngajat,
          cnp: valori.cnp,
          functie: valori.functie,
          numeAngajator: valori.numeAngajator,
          dataPlecare: valori.dataPlecare,
          motiv: valori.motiv,
          oras: valori.oras,
          dataDocument: valori.dataDocument,
          semnaturaDataUrl: semnatura,
        }),
        randeazaPDF: (data) => <DemisiePDF data={data} />,
        numeFisier: 'cerere-demisie.pdf',
      }}
    />
  )
}
