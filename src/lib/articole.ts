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
    timpCitire: '7 minute',
    cerereLegata: 'demisie',
  },
  {
    slug: 'cum-reziliezi-contractul-de-telefonie-mobila',
    titlu:
      'Cum reziliezi contractul cu o companie de telefonie mobilă — ghid 2026',
    descriere:
      'Ghid complet pentru rezilierea contractului de telefonie mobilă: când poți pleca fără penalizări, cât costă rezilierea anticipată, cum îți portezi numărul și ce se întâmplă cu telefonul primit la abonament.',
    dataPublicare: '2026-07-23',
    timpCitire: '5 minute',
    cerereLegata: 'reziliere-telefonie',
  },
  {
    slug: 'contract-inchiriere-apartament-ce-trebuie-sa-contina',
    titlu: 'Contract de închiriere apartament: ce trebuie să conțină (2026)',
    descriere:
      'Ghid complet pentru contractul de închiriere valid în România: elemente obligatorii, chirie, garanție, utilități, drepturile ambelor părți, înregistrarea la ANAF și proces-verbal de predare-primire.',
    dataPublicare: '2026-07-23',
    timpCitire: '7 minute',
    cerereLegata: 'contract-inchiriere',
  },
  {
    slug: 'cerere-concediu-fara-plata-model-si-drepturi',
    titlu:
      'Cerere de concediu fără plată: model, motive acceptate și drepturile tale',
    descriere:
      'Ghid pentru concediul fără plată în România: când poți cere, ce se întâmplă cu vechimea și asigurările, cât poate refuza angajatorul și cum arată o cerere corectă. Include model PDF.',
    dataPublicare: '2026-07-23',
    timpCitire: '5 minute',
    cerereLegata: 'concediu',
  },
  {
    slug: 'adeverinta-de-la-angajator-tipuri-si-obligatii',
    titlu: 'Adeverință de la angajator: tipuri, când o ceri și obligațiile firmei',
    descriere:
      'Cum ceri o adeverință de la angajator (salariat, venit, vechime), ce trebuie să conțină și în cât timp e obligat să ți-o dea. Cu model PDF.',
    dataPublicare: '2026-08-15',
    timpCitire: '4 minute',
    cerereLegata: 'adeverinta-angajator',
  },
  {
    slug: 'adeverinta-de-la-primarie-tipuri-si-cum-le-obtii',
    titlu: 'Adeverințe de la primărie: ce tipuri există și cum le obții',
    descriere:
      'Ghid despre adeverințele emise de primărie: domiciliu, componență familie, rol fiscal, fiscală. Pentru ce le folosești, cât costă, cât durează și cum le ceri online sau la ghișeu.',
    dataPublicare: '2026-08-22',
    timpCitire: '6 minute',
    cerereLegata: 'adeverinta-primarie',
  },
  {
    slug: 'loc-de-parcare-de-resedinta-cum-obtii',
    titlu: 'Loc de parcare de reședință: cum obții unul de la primărie',
    descriere:
      'Ghid despre locul de parcare de reședință: cine are dreptul, cât costă în funcție de oraș, ce documente îți trebuie, cum depui cererea și ce faci dacă ești refuzat.',
    dataPublicare: '2026-08-30',
    timpCitire: '5 minute',
    cerereLegata: 'loc-parcare',
  },
  {
    slug: 'cerere-catre-primarie-cum-o-scrii-corect',
    titlu: 'Cerere către primărie: cum o scrii corect și ce trebuie să conțină',
    descriere:
      'Ghid practic pentru redactarea unei cereri către primărie: structura obligatorie, formulele oficiale, ce să eviți, cum o depui și în cât timp primești răspuns.',
    dataPublicare: '2026-09-05',
    timpCitire: '6 minute',
    cerereLegata: 'cerere-primarie',
  },
  {
    slug: 'reziliere-contract-de-chirie-preaviz-si-garantie',
    titlu:
      'Reziliere contract de chirie: preaviz, garanție și cum eviți conflictele',
    descriere:
      'Ghid pentru rezilierea contractului de închiriere: cine poate rezilia și când, cum se calculează preavizul, ce se întâmplă cu garanția și cum eviți litigiile la ieșirea din chirie.',
    dataPublicare: '2026-09-14',
    timpCitire: '5 minute',
    cerereLegata: 'reziliere-chirie',
  },
  {
    slug: 'conventie-de-incetare-contract-inchiriere-model',
    titlu:
      'Convenție de încetare a contractului de închiriere — model și diferențe față de reziliere',
    descriere:
      'Când folosești convenția de încetare în loc de reziliere, ce trebuie să conțină, cum se semnează de ambele părți și cum eviți litigii ulterioare. Include model PDF gratuit.',
    dataPublicare: '2026-09-22',
    timpCitire: '5 minute',
    cerereLegata: 'conventie-incetare-inchiriere',
  },
]

export function getArticol(slug: string): ArticolMeta | undefined {
  return ARTICOLE.find((a) => a.slug === slug)
}
