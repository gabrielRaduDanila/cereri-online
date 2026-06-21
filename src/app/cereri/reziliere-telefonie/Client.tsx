'use client'

import BuilderCerere from '@/components/BuilderCerere'
import { Camp } from '@/components/FormularCerere'
import RezilereTelefoniePDF, {
  RezilereTelefonieData,
} from '@/components/pdf/RezilereTelefoniePDF'

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
    nume: 'operator',
    eticheta: 'Operator',
    tip: 'select',
    obligatoriu: true,
    optiuni: [
      { valoare: 'Digi România SA', text: 'Digi (RCS-RDS)' },
      { valoare: 'Orange România SA', text: 'Orange' },
      { valoare: 'Vodafone România SA', text: 'Vodafone' },
      { valoare: 'Telekom România Mobile Communications SA', text: 'Telekom' },
    ],
  },
  {
    nume: 'tipServiciu',
    eticheta: 'Tip serviciu',
    tip: 'select',
    obligatoriu: true,
    optiuni: [
      { valoare: 'telefonie mobilă', text: 'Telefonie mobilă' },
      { valoare: 'telefonie fixă', text: 'Telefonie fixă' },
      { valoare: 'internet', text: 'Internet' },
      { valoare: 'televiziune', text: 'Televiziune' },
      { valoare: 'abonament combinat (internet + TV + telefon)', text: 'Pachet combinat' },
    ],
  },
  { nume: 'numeAbonat', eticheta: 'Nume și prenume', tip: 'text', obligatoriu: true },
  { nume: 'cnp', eticheta: 'CNP', tip: 'text', obligatoriu: true, ajutor: '13 cifre' },
  { nume: 'adresa', eticheta: 'Adresa completă', tip: 'text', obligatoriu: true, placeholder: 'Str. Exemplu nr. 1, Iași' },
  { nume: 'numarContract', eticheta: 'Număr contract', tip: 'text', obligatoriu: true, ajutor: 'Îl găsești pe factură sau în aplicația operatorului' },
  { nume: 'dataReziliere', eticheta: 'Data dorită de încetare', tip: 'date', obligatoriu: true },
  { nume: 'oras', eticheta: 'Localitatea', tip: 'text', obligatoriu: true },
  { nume: 'dataDocument', eticheta: 'Data documentului', tip: 'date', obligatoriu: true },
  { nume: 'motiv', eticheta: 'Motivul rezilierii (opțional)', tip: 'textarea', placeholder: 'Mutare, schimbare furnizor, costuri etc.' },
]

const initiale: Record<string, string> = {
  gen: '',
  operator: '',
  tipServiciu: '',
  numeAbonat: '',
  cnp: '',
  adresa: '',
  numarContract: '',
  dataReziliere: '',
  oras: '',
  dataDocument: new Date().toISOString().slice(0, 10),
  motiv: '',
}

export default function Client() {
  return (
    <BuilderCerere<RezilereTelefonieData>
      config={{
        campuri,
        initiale,
        construiesteData: (v, semnatura) => ({
          gen: (v.gen as 'M' | 'F' | '') || '',
          operator: v.operator,
          tipServiciu: v.tipServiciu,
          numeAbonat: v.numeAbonat,
          cnp: v.cnp,
          adresa: v.adresa,
          numarContract: v.numarContract,
          dataReziliere: v.dataReziliere,
          oras: v.oras,
          dataDocument: v.dataDocument,
          motiv: v.motiv,
          semnaturaDataUrl: semnatura,
        }),
        randeazaPDF: (data) => <RezilereTelefoniePDF data={data} />,
        numeFisier: 'reziliere-contract-telefonie.pdf',
      }}
    />
  )
}
