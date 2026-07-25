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
]

export function getArticol(slug: string): ArticolMeta | undefined {
  return ARTICOLE.find((a) => a.slug === slug)
}
