'use client'

import BuilderCerere from '@/components/BuilderCerere'
import { Camp } from '@/components/FormularCerere'
import RezilereChiriePDF, { RezilereChirieData } from '@/components/pdf/RezilereChiriePDF'

const campuri: Camp[] = [
  {
    nume: 'gen',
    eticheta: 'Gen (al expeditorului)',
    tip: 'select',
    obligatoriu: true,
    optiuni: [
      { valoare: 'M', text: 'Masculin' },
      { valoare: 'F', text: 'Feminin' },
    ],
  },
  { nume: 'expediator', eticheta: 'Numele tău (cel care notifică)', tip: 'text', obligatoriu: true },
  { nume: 'expediatorCnp', eticheta: 'CNP-ul tău', tip: 'text', obligatoriu: true, ajutor: '13 cifre' },
  { nume: 'destinatar', eticheta: 'Către cine (numele celuilalt)', tip: 'text', obligatoriu: true },
  {
    nume: 'destinatarCalitate',
    eticheta: 'Cealaltă parte este',
    tip: 'select',
    obligatoriu: true,
    optiuni: [
      { valoare: 'proprietar', text: 'Proprietar' },
      { valoare: 'chiriaș', text: 'Chiriaș' },
    ],
  },
  { nume: 'imobAdresa', eticheta: 'Adresa imobilului închiriat', tip: 'text', obligatoriu: true },
  { nume: 'dataContract', eticheta: 'Data încheierii contractului', tip: 'date', obligatoriu: true },
  { nume: 'dataReziliere', eticheta: 'Data dorită de încetare', tip: 'date', obligatoriu: true },
  { nume: 'oras', eticheta: 'Localitatea', tip: 'text', obligatoriu: true },
  { nume: 'dataDocument', eticheta: 'Data documentului', tip: 'date', obligatoriu: true },
  { nume: 'motiv', eticheta: 'Motivul rezilierii (opțional)', tip: 'textarea' },
]

const initiale: Record<string, string> = {
  gen: '',
  expediator: '',
  expediatorCnp: '',
  destinatar: '',
  destinatarCalitate: '',
  imobAdresa: '',
  dataContract: '',
  dataReziliere: '',
  motiv: '',
  oras: '',
  dataDocument: new Date().toISOString().slice(0, 10),
}

export default function Client() {
  return (
    <BuilderCerere<RezilereChirieData>
      config={{
        campuri,
        initiale,
        construiesteData: (v, semnatura) => ({
          gen: (v.gen as 'M' | 'F' | '') || '',
          expediator: v.expediator,
          expediatorCnp: v.expediatorCnp,
          destinatar: v.destinatar,
          destinatarCalitate: v.destinatarCalitate,
          imobAdresa: v.imobAdresa,
          dataContract: v.dataContract,
          dataReziliere: v.dataReziliere,
          motiv: v.motiv,
          oras: v.oras,
          dataDocument: v.dataDocument,
          semnaturaDataUrl: semnatura,
        }),
        randeazaPDF: (data) => <RezilereChiriePDF data={data} />,
        numeFisier: 'reziliere-contract-chirie.pdf',
      }}
    />
  )
}
