import type { Metadata } from 'next'
import Link from 'next/link'
import { getArticol } from '@/lib/articole'
import { buildArticleJsonLd } from '@/lib/structured-data'

const meta = getArticol('loc-de-parcare-de-resedinta-cum-obtii')!

export const metadata: Metadata = {
  title: `${meta.titlu} | Cereri Online`,
  description: meta.descriere,
  alternates: { canonical: `/blog/${meta.slug}` },
  openGraph: {
    title: meta.titlu,
    description: meta.descriere,
    type: 'article',
    publishedTime: meta.dataPublicare,
    url: `https://model-cerere.ro/blog/${meta.slug}`,
  },
}

const intrebariFrecvente = [
  {
    intrebare: 'Câte locuri pot primi pentru un apartament?',
    raspuns:
      'De obicei, un loc per apartament, indiferent câte mașini deții. Cu excepții pentru familii numeroase sau situații speciale (persoane cu handicap) — verifică regulamentul primăriei tale. Nu poți acumula locuri „pentru soț" și „pentru soție" separat.',
  },
  {
    intrebare: 'Ce se întâmplă dacă mașina mea e închiriată în leasing?',
    raspuns:
      'Nu contează. Contează numărul de înmatriculare și adresa de domiciliu, nu proprietarul juridic al mașinii. Leasingul nu e obstacol. Trebuie doar să aduci copia contractului sau certificatul de înmatriculare pe numele tău.',
  },
  {
    intrebare: 'Pot cere loc dacă locuiesc în chirie?',
    raspuns:
      'Da, dacă ai reședința oficială (nu doar contractul) la acea adresă. Trebuie viza de flotant pe buletin sau înregistrare la evidența populației. Un contract de chirie simplu, fără reședință oficială, nu e suficient în majoritatea primăriilor.',
  },
  {
    intrebare: 'Ce se întâmplă la vânzarea mașinii?',
    raspuns:
      'Locul de parcare e legat de tine (proprietar) și de mașină (număr înmatriculare). Dacă vinzi mașina, trebuie să notifici primăria și să transferi/actualizezi locul pe noua mașină, dacă ai una. Locul nu se transferă cumpărătorului mașinii.',
  },
]

export default function ArticolLocParcare() {
  const jsonLd = buildArticleJsonLd(
    meta,
    intrebariFrecvente,
    'Loc parcare de reședință'
  )

  return (
    <div className="max-w-3xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav className="text-sm text-slate-500 mb-4">
        <Link href="/" className="hover:text-blue-700">
          Acasă
        </Link>
        {' › '}
        <Link href="/blog" className="hover:text-blue-700">
          Blog
        </Link>
        {' › '}
        <span className="text-slate-700">Loc parcare de reședință</span>
      </nav>

      <article className="space-y-6">
        <header>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
            {meta.titlu}
          </h1>
          <div className="mt-3 text-sm text-slate-500">
            {new Date(meta.dataPublicare).toLocaleDateString('ro-RO', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}{' '}
            · {meta.timpCitire}
          </div>
        </header>

        <p className="text-lg text-slate-700 leading-relaxed">
          Locul de parcare de reședință e opțiunea legală prin care primăria
          îți alocă un spațiu marcat aproape de casă, contra unei taxe anuale
          modice. Nu-l cumperi — îl închiriezi anual. Iată cum îl obții, cât
          costă și ce faci dacă nu ai loc disponibil în zonă.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Ce e locul de reședință și cu ce diferă de alte tipuri
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Un loc de parcare de reședință este un spațiu marcat pe domeniu
          public (stradă, alee, curte comună), atribuit exclusiv unui locatar
          din zonă, în general la maxim 30 de metri de bloc. Se închiriază
          anual de la primărie, se marchează cu numărul de mașină și e
          protejat de sancțiuni pentru ceilalți șoferi.
        </p>
        <p className="text-slate-700 leading-relaxed">
          Se deosebește de:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>
            <strong>Parcare publică cu plată</strong> (pe ore) — orice mașină
            poate opri, cu tarif orar
          </li>
          <li>
            <strong>Locul din curtea blocului (privat)</strong> — proprietatea
            asociației, se atribuie prin adunare generală, nu prin primărie
          </li>
          <li>
            <strong>Garaj (chirie sau proprietate)</strong> — spațiu închis,
            fără legătură cu primăria
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Cine are dreptul
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Persoanele fizice cu domiciliul sau reședința oficială în zona
          respectivă, care dețin (sau folosesc în baza unui contract) un
          autoturism înmatriculat pe numele lor. Persoanele juridice, în
          general, NU pot obține locuri de reședință — au reglementări
          separate pentru mașini de firmă.
        </p>
        <p className="text-slate-700 leading-relaxed">
          Prioritate la atribuire: persoanele cu handicap, familiile cu copii,
          veteranii de război, vârstnicii peste 65 ani. Regulamentul exact
          diferă de la oraș la oraș.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Cât costă
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Taxa anuală variază semnificativ în funcție de oraș și de zonă.
          Câteva repere orientative (2025-2026):
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>
            <strong>București:</strong> 400-1200 lei/an, în funcție de sector
            și zonă (zonele centrale sunt mai scumpe)
          </li>
          <li>
            <strong>Cluj-Napoca:</strong> 300-800 lei/an
          </li>
          <li>
            <strong>Timișoara, Iași, Constanța, Brașov:</strong> 200-500
            lei/an
          </li>
          <li>
            <strong>Orașe mici:</strong> 100-250 lei/an, dacă există regulament
            local
          </li>
        </ul>
        <p className="text-slate-700 leading-relaxed">
          Verifică suma exactă pe site-ul primăriei sau la casieria taxelor
          locale. Persoanele cu handicap sunt de obicei scutite.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Cum obții locul, pas cu pas
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Începi cu o cerere scrisă adresată primăriei de sector sau
          municipiu, care conține datele tale (nume, CNP, adresă), marca,
          modelul și numărul de înmatriculare al mașinii, și menționarea zonei
          în care soliciți locul.
        </p>
        <div className="bg-blue-700 text-white rounded-lg p-5 my-4">
          <p className="font-semibold mb-2">
            🚀 Generează cererea în 2 minute
          </p>
          <p className="text-sm text-blue-50 mb-3">
            Completezi datele, semnezi cu mouse-ul, descarci PDF-ul. Îl duci
            la primărie sau îl atașezi la cererea online.
          </p>
          <Link
            href="/cereri/loc-parcare"
            className="inline-block bg-white text-blue-700 font-medium px-4 py-2 rounded-md hover:bg-slate-100 transition"
          >
            Deschide generatorul →
          </Link>
        </div>
        <p className="text-slate-700 leading-relaxed">
          Atașezi copie după actul de identitate cu adresa vizibilă, copie
          după certificatul de înmatriculare al mașinii, iar dacă e cazul,
          documente pentru situații speciale (certificat de handicap,
          adeverință de familie numeroasă).
        </p>
        <p className="text-slate-700 leading-relaxed">
          Depui dosarul la registratura primăriei, primești un număr de
          înregistrare, apoi aștepți răspunsul. Termenul standard e 30 de
          zile lucrătoare. Dacă cererea e aprobată, plătești taxa anuală și
          primești numărul locului atribuit — echipa de marcaj vine, marchează
          spațiul cu numărul mașinii tale.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Ce faci dacă nu e loc disponibil
        </h2>
        <p className="text-slate-700 leading-relaxed">
          E o problemă frecventă în zonele dens populate. Câteva opțiuni:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>
            <strong>Solicită înscrierea pe lista de așteptare.</strong>{' '}
            Primăriile țin evidența cererilor și îți atribuie loc când unul
            devine disponibil (vecin mutat, decedat, renunțat).
          </li>
          <li>
            <strong>Cere loc într-o zonă adiacentă.</strong> Dacă în strada ta
            e plin, unele primării permit locuri până la 200-300m de casă, cu
            justificare.
          </li>
          <li>
            <strong>Verifică programul de amenajare parcări.</strong> Multe
            orașe fac anual expansiuni — vezi dacă strada ta e programată.
          </li>
          <li>
            <strong>Ultima soluție: parcare privată contra cost.</strong>{' '}
            Închirierea unui loc dintr-un garaj sau curte de bloc costă
            50-300 lei/lună, în funcție de zonă.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Reînnoirea și pierderea locului
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Locul se reînnoiește anual, cu plata taxei înainte de expirare. Dacă
          nu plătești la timp (uzual 60-90 zile după scadență), primăria
          poate atribui locul altcuiva de pe lista de așteptare. Pierzi locul
          și dacă îți muți domiciliul în altă zonă sau dacă renunți la mașina
          înmatriculată la acea adresă.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Întrebări frecvente
        </h2>
        <div className="space-y-6">
          {intrebariFrecvente.map((q, i) => (
            <div key={i}>
              <h3 className="text-lg font-semibold text-slate-900">
                {q.intrebare}
              </h3>
              <p className="mt-2 text-slate-700 leading-relaxed">{q.raspuns}</p>
            </div>
          ))}
        </div>

        <Link
          href="/cereri/loc-parcare"
          className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-medium px-6 py-3 rounded-md transition mt-6"
        >
          Generează cererea de loc de parcare →
        </Link>

        <hr className="border-slate-200 my-8" />

        <p className="text-sm text-slate-500">
          <strong>Notă:</strong> Regulamentele pentru atribuirea locurilor de
          parcare de reședință variază de la o primărie la alta. Verifică
          regulamentul specific pe site-ul primăriei tale sau la biroul de
          taxe locale înainte să depui cererea.
        </p>
      </article>
    </div>
  )
}
