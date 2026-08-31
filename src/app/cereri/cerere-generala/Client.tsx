'use client'

import BuilderCerere from '@/components/BuilderCerere'
import { Camp } from '@/components/FormularCerere'
import CerereGeneralaPDF, {
  CerereGeneralaData,
} from '@/components/pdf/CerereGeneralaPDF'

const campuri: Camp[] = [
  {
    nume: 'gen',
    eticheta: 'Genul solicitantului',
    tip: 'select',
    obligatoriu: true,
    optiuni: [
      { valoare: 'M', text: 'Masculin' },
      { valoare: 'F', text: 'Feminin' },
    ],
  },
  { nume: 'numeSolicitant', eticheta: 'Nume complet', tip: 'text', obligatoriu: true },
  { nume: 'cnp', eticheta: 'CNP', tip: 'text', obligatoriu: true, ajutor: '13 cifre' },
  { nume: 'adresa', eticheta: 'Adresa de domiciliu', tip: 'text', obligatoriu: true },
  { nume: 'telefon', eticheta: 'Telefon (opțional)', tip: 'text' },
  { nume: 'email', eticheta: 'E-mail (opțional)', tip: 'email' },
  {
    nume: 'destinatarInstitutie',
    eticheta: 'Instituția / firma destinatară',
    tip: 'text',
    obligatoriu: true,
    placeholder: 'ex: Ministerul Muncii, ANAF Sector 3, SC Exemplu SRL',
  },
  {
    nume: 'destinatarPersoana',
    eticheta: 'Persoana destinatară (opțional)',
    tip: 'text',
    placeholder: 'ex: Domnului Director General',
  },
  {
    nume: 'obiectCerere',
    eticheta: 'Obiectul cererii',
    tip: 'text',
    obligatoriu: true,
    placeholder: 'ex: îmi eliberați o adeverință care să ateste...',
    ajutor:
      'Ce ceri concret, într-o singură frază care începe cu un verb.',
  },
  {
    nume: 'motivare',
    eticheta: 'Motivarea cererii (opțional)',
    tip: 'textarea',
    placeholder: 'De ce ai nevoie de acest lucru. 2-4 rânduri, obiectiv.',
  },
  {
    nume: 'anexe',
    eticheta: 'Anexe (opțional)',
    tip: 'textarea',
    placeholder: 'ex: 1. Copie C.I.  2. Copie contract muncă  3. Dovadă plată taxă',
  },
  { nume: 'oras', eticheta: 'Localitatea', tip: 'text', obligatoriu: true },
  { nume: 'dataDocument', eticheta: 'Data documentului', tip: 'date', obligatoriu: true },
]

const initiale: Record<string, string> = {
  gen: '',
  numeSolicitant: '',
  cnp: '',
  adresa: '',
  telefon: '',
  email: '',
  destinatarInstitutie: '',
  destinatarPersoana: '',
  obiectCerere: '',
  motivare: '',
  anexe: '',
  oras: '',
  dataDocument: new Date().toISOString().slice(0, 10),
}

export default function Client() {
  return (
    <BuilderCerere<CerereGeneralaData>
      config={{
        campuri,
        initiale,
        construiesteData: (v, semnatura) => ({
          gen: (v.gen as 'M' | 'F' | '') || '',
          numeSolicitant: v.numeSolicitant,
          cnp: v.cnp,
          adresa: v.adresa,
          telefon: v.telefon,
          email: v.email,
          destinatarInstitutie: v.destinatarInstitutie,
          destinatarPersoana: v.destinatarPersoana,
          obiectCerere: v.obiectCerere,
          motivare: v.motivare,
          anexe: v.anexe,
          oras: v.oras,
          dataDocument: v.dataDocument,
          semnaturaDataUrl: semnatura,
        }),
        randeazaPDF: (data) => <CerereGeneralaPDF data={data} />,
        numeFisier: 'cerere-solicitare.pdf',
      }}
    />
  )
}
