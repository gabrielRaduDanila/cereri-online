'use client'

import BuilderCerere from '@/components/BuilderCerere'
import { Camp } from '@/components/FormularCerere'
import CererePrimariePDF, { CererePrimarieData } from '@/components/pdf/CererePrimariePDF'

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
  { nume: 'adresa', eticheta: 'Adresa de domiciliu', tip: 'text', obligatoriu: true },
  { nume: 'telefon', eticheta: 'Telefon de contact (opțional)', tip: 'text' },
  { nume: 'primarie', eticheta: 'Către ce primărie', tip: 'text', obligatoriu: true, placeholder: 'Primăria Municipiului Iași' },
  {
    nume: 'obiectCerere',
    eticheta: 'Ce solicitați (obiectul cererii)',
    tip: 'textarea',
    obligatoriu: true,
    placeholder: 'eliberați o copie a certificatului de naștere / aprobați...',
    ajutor: 'Scrie clar și concis ce ceri. Se va încadra în propoziția: „Vă rog să..."',
  },
  { nume: 'motivare', eticheta: 'Motivare (opțional)', tip: 'textarea', placeholder: 'Explică pe scurt de ce ai nevoie de acest lucru.' },
  { nume: 'oras', eticheta: 'Localitatea', tip: 'text', obligatoriu: true },
  { nume: 'dataDocument', eticheta: 'Data documentului', tip: 'date', obligatoriu: true },
]

const initiale: Record<string, string> = {
  gen: '',
  numeSolicitant: '',
  cnp: '',
  adresa: '',
  telefon: '',
  primarie: '',
  obiectCerere: '',
  motivare: '',
  oras: '',
  dataDocument: new Date().toISOString().slice(0, 10),
}

export default function Client() {
  return (
    <BuilderCerere<CererePrimarieData>
      config={{
        campuri,
        initiale,
        construiesteData: (v, semnatura) => ({
          gen: (v.gen as 'M' | 'F' | '') || '',
          numeSolicitant: v.numeSolicitant,
          cnp: v.cnp,
          adresa: v.adresa,
          telefon: v.telefon,
          primarie: v.primarie,
          obiectCerere: v.obiectCerere,
          motivare: v.motivare,
          oras: v.oras,
          dataDocument: v.dataDocument,
          semnaturaDataUrl: semnatura,
        }),
        randeazaPDF: (data) => <CererePrimariePDF data={data} />,
        numeFisier: 'cerere-primarie.pdf',
      }}
    />
  )
}
