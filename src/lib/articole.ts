export type ArticolMeta = {
  slug: string
  titlu: string
  descriere: string
  dataPublicare: string
  timpCitire: string
  cerereLegata?: string
}

export const ARTICOLE: ArticolMeta[] = [
  {
    slug: 'cum-iti-dai-demisia-in-2026',
    titlu: 'Cum îți dai demisia corect în 2026 — ghid complet cu model PDF',
    descriere:
      'Ghid pas cu pas pentru demisie în România: termenul de preaviz, drepturile tale, ce documente primești și cum eviți greșelile frecvente. Include model PDF gratuit.',
    dataPublicare: '2026-07-23',
    timpCitire: '8 minute',
    cerereLegata: 'demisie',
  },
  {
    slug: 'cum-reziliezi-contractul-de-telefonie-mobila',
    titlu:
      'Cum reziliezi contractul cu o companie de telefonie mobilă — ghid 2026',
    descriere:
      'Ghid complet pentru rezilierea contractului de telefonie mobilă: când poți pleca fără penalizări, cât costă rezilierea anticipată, cum îți portezi numărul și ce se întâmplă cu telefonul primit la abonament.',
    dataPublicare: '2026-07-23',
    timpCitire: '7 minute',
    cerereLegata: 'reziliere-telefonie',
  },
  {
    slug: 'contract-inchiriere-apartament-ce-trebuie-sa-contina',
    titlu: 'Contract de închiriere apartament: ce trebuie să conțină (2026)',
    descriere:
      'Ghid complet pentru contractul de închiriere valid în România: elemente obligatorii, chirie, garanție, utilități, drepturile ambelor părți, înregistrarea la ANAF și proces-verbal de predare-primire.',
    dataPublicare: '2026-07-23',
    timpCitire: '9 minute',
    cerereLegata: 'contract-inchiriere',
  },
  {
    slug: 'cerere-concediu-fara-plata-model-si-drepturi',
    titlu:
      'Cerere de concediu fără plată: model, motive acceptate și drepturile tale',
    descriere:
      'Ghid pentru concediul fără plată în România: când poți cere, ce se întâmplă cu vechimea și asigurările, cât poate refuza angajatorul și cum arată o cerere corectă. Include model PDF.',
    dataPublicare: '2026-07-23',
    timpCitire: '6 minute',
    cerereLegata: 'concediu',
  },
]

export function getArticol(slug: string): ArticolMeta | undefined {
  return ARTICOLE.find((a) => a.slug === slug)
}
