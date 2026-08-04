export type CerereMeta = {
  slug: string
  titlu: string
  descriereScurta: string
  descriereSEO: string
  titluSEO?: string
  descriereMetaSEO?: string
}

export const CERERI: CerereMeta[] = [
  {
    slug: 'demisie',
    titlu: 'Cerere de demisie',
    descriereScurta:
      'Model oficial de demisie cu preaviz, conform Codului Muncii.',
    descriereSEO:
      'Generează gratuit o cerere de demisie corectă, completată cu datele tale și descărcabilă instant ca PDF.',
    titluSEO: 'Cerere Demisie 2026 — Model PDF gratuit, preaviz 20 zile',
    descriereMetaSEO:
      'Model cerere demisie 2026 conform Codului Muncii: preaviz 20 zile, complet, semnat cu mouse-ul, PDF instant. Fără cont, fără date salvate.',
  },
  {
    slug: 'contract-inchiriere',
    titlu: 'Contract de închiriere',
    descriereScurta:
      'Contract complet între proprietar și chiriaș, cu chirie, garanție și anexă proces-verbal.',
    descriereSEO:
      'Generează un contract de închiriere complet între proprietar și chiriaș, cu datele imobilului, perioada, chiria, garanția și anexa de proces-verbal de predare-primire.',
    titluSEO:
      'Contract Închiriere Apartament 2026 — Model PDF gratuit + Anexă',
    descriereMetaSEO:
      'Contract închiriere apartament 2026: chirie, garanție, anexă proces-verbal predare-primire. PDF gratuit, semnat de ambele părți, descărcare instant.',
  },
  {
    slug: 'reziliere-telefonie',
    titlu: 'Cerere reziliere contract telefonie/internet',
    descriereScurta:
      'Notificare de reziliere pentru Digi, Orange, Vodafone sau Telekom.',
    descriereSEO:
      'Model de cerere reziliere contract telefonie sau internet, valid pentru toți operatorii din România.',
  },
  {
    slug: 'concediu',
    titlu: 'Cerere de concediu',
    descriereScurta:
      'Cerere de concediu de odihnă sau fără plată, către angajator.',
    descriereSEO:
      'Generează gratuit o cerere de concediu de odihnă sau fără plată, conformă cu Codul Muncii.',
  },
  {
    slug: 'adeverinta-angajator',
    titlu: 'Cerere adeverință de la angajator',
    descriereScurta:
      'Solicitare adeverință de salariat, venit sau vechime în muncă.',
    descriereSEO:
      'Model de cerere pentru eliberarea unei adeverințe de la angajator (salariat, venit, vechime).',
  },
  {
    slug: 'adeverinta-primarie',
    titlu: 'Cerere adeverință de la primărie',
    descriereScurta:
      'Solicitare adeverință de la primăria de domiciliu sau reședință.',
    descriereSEO:
      'Generează cerere pentru o adeverință de la primărie (domiciliu, rol fiscal, componență familie).',
  },
  {
    slug: 'loc-parcare',
    titlu: 'Cerere loc de parcare',
    descriereScurta:
      'Cerere pentru atribuirea unui loc de parcare de reședință.',
    descriereSEO:
      'Model de cerere pentru obținerea unui loc de parcare de reședință de la primărie.',
  },
  {
    slug: 'reziliere-chirie',
    titlu: 'Notificare reziliere contract de chirie',
    descriereScurta:
      'Notificare de reziliere a contractului de închiriere către proprietar.',
    descriereSEO:
      'Model notificare de reziliere a contractului de chirie, cu preaviz, către proprietar sau chiriaș.',
  },
  {
    slug: 'cerere-primarie',
    titlu: 'Cerere generală către primărie',
    descriereScurta:
      'Model general de cerere către primărie, adaptabil pentru orice solicitare.',
    descriereSEO:
      'Model general de cerere către primărie, completabil pentru orice tip de solicitare.',
    titluSEO:
      'Cerere către Primărie 2026 — Model PDF gratuit, descarci în 2 min',
    descriereMetaSEO:
      'Model cerere către primărie 2026: completezi datele, obiectul și motivarea, semnezi cu mouse-ul și descarci PDF-ul. Gratis, fără cont, fără date salvate.',
  },
]

export function getCerere(slug: string): CerereMeta | undefined {
  return CERERI.find((c) => c.slug === slug)
}
