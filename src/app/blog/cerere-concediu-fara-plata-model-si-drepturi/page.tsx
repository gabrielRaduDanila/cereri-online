import type { Metadata } from 'next'
import Link from 'next/link'
import { getArticol } from '@/lib/articole'
import { buildArticleJsonLd } from '@/lib/structured-data'

const meta = getArticol('cerere-concediu-fara-plata-model-si-drepturi')!

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
    intrebare: 'Angajatorul poate refuza cererea?',
    raspuns:
      'Da. Spre deosebire de concediul de odihnă, concediul fără plată nu e drept unilateral — se acordă LA CEREREA salariatului cu APROBAREA angajatorului. Refuzul e legal dacă absența afectează activitatea companiei. Nu pleca fără aprobare scrisă.',
  },
  {
    intrebare: 'Cât timp maxim pot lipsi?',
    raspuns:
      'Codul Muncii nu stabilește un termen maxim general — se negociază cu angajatorul. În practică: 1-3 zile pentru evenimente familiale, 1-2 săptămâni pentru situații personale, câteva luni pentru studii sau motive medicale. Contractul colectiv de muncă poate impune limite.',
  },
  {
    intrebare: 'Pierd vechimea în muncă?',
    raspuns:
      'Nu. Vechimea se calculează pe toată durata contractului, indiferent dacă ai fost sau nu în concediu fără plată. Se afectează doar contribuțiile la asigurări sociale (pensie, sănătate, șomaj) — nu se plătesc când nu ai salariu.',
  },
  {
    intrebare: 'Ce se întâmplă cu asigurarea de sănătate?',
    raspuns:
      'Nu se plătesc contribuții pe perioada concediului. După 3 luni consecutive fără plată, pierzi calitatea de asigurat. Ca să menții asigurarea, poți plăti singur contribuția (~300 lei/lună la nivelul de referință) prin declarația 212 la ANAF.',
  },
  {
    intrebare: 'Cererea trebuie să conțină motivul?',
    raspuns:
      'Da, spre deosebire de demisie. Angajatorul trebuie să evalueze motivul înainte să aprobe. Menționează o cauză plauzibilă: studii, motive familiale, motive medicale, călătorie personală. Motivul influențează deseori decizia.',
  },
]

export default function ArticolConcediuFaraPlata() {
  const jsonLd = buildArticleJsonLd(
    meta,
    intrebariFrecvente,
    'Concediu fără plată'
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
        <span className="text-slate-700">Concediu fără plată</span>
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
          Ai epuizat zilele de concediu de odihnă și îți mai trebuie o
          săptămână liberă pentru un examen, o mutare sau o situație
          familială. Concediul fără plată e opțiunea potrivită, dar nu
          funcționează ca cel de odihnă: nu-l poți lua pe drept, angajatorul
          poate refuza, iar asigurările se opresc.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-md">
          <p className="text-sm text-slate-700">
            <strong className="text-blue-900">Pe scurt:</strong> nu e drept
            unilateral, angajatorul trebuie să aprobe. Nu pierzi vechimea, dar
            nu plătești asigurări. Cererea trebuie motivată. Durata: negociabilă.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Ce e și cu ce diferă de alte concedii
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Concediul fără plată e perioada în care ești în continuare angajat,
          dar nu lucrezi și nu primești salariu. E reglementat de{' '}
          <strong>art. 153 din Codul Muncii</strong> (Legea 53/2003).
          Diferența față de alte tipuri:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>
            <strong>Concediu de odihnă</strong> — drept al salariatului,
            plătit, minim 20 zile/an. Angajatorul nu poate refuza, doar
            programa.
          </li>
          <li>
            <strong>Concediu fără plată</strong> — se acordă cu aprobarea
            angajatorului. Neplătit.
          </li>
          <li>
            <strong>Concediu medical</strong> — pe baza certificatului, plătit
            din FNUASS.
          </li>
          <li>
            <strong>Concediu creștere copil</strong> — pentru părinți cu copil
            sub 2 ani, indemnizație de la stat.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Când merită să ceri și când nu
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Motive care în general primesc aprobare: examene la facultate/master,
          proceduri medicale programate, evenimente familiale majore (nuntă,
          deces), îngrijire părinte vârstnic. Motive mai greu de aprobat:
          călătorii de plăcere lungi, mutare de locuință, „am nevoie de o
          pauză".
        </p>
        <p className="text-slate-700 leading-relaxed">
          Regula practică: cu cât motivul e mai concret și mai puțin evitabil,
          cu atât șansele de aprobare cresc. „Am examen pe data de X" e mai
          convingător decât „vreau două săptămâni libere".
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Ce se întâmplă cu tine pe durata concediului
        </h2>
        <p className="text-slate-700 leading-relaxed">
          <strong>Contractul rămâne activ.</strong> Nu ești concediat, nu-ți
          dai demisia — contractul e doar suspendat temporar. La finalul
          perioadei aprobate te întorci pe același post.
        </p>
        <p className="text-slate-700 leading-relaxed">
          <strong>Vechimea continuă să curgă.</strong> Perioada se contorizează
          integral la vechimea în muncă.
        </p>
        <p className="text-slate-700 leading-relaxed">
          <strong>Asigurările se opresc.</strong> Nu se plătesc CAS (pensie),
          CASS (sănătate) și șomaj. După 3 luni consecutive fără plată la
          sănătate, pierzi calitatea de asigurat. Poți menține asigurarea
          plătind singur prin declarația 212 la ANAF.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Cum obții aprobarea
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Cea mai bună abordare e o discuție verbală prealabilă cu șeful
          direct sau HR-ul. Explici situația, testezi terenul, întrebi dacă e
          nevoie de formulare speciale. O cerere depusă „la rece" fără
          discuție are mai multe șanse de refuz.
        </p>
        <p className="text-slate-700 leading-relaxed">
          Apoi depui cererea scrisă cu preaviz decent (5-7 zile pentru
          perioade scurte, 2-4 săptămâni pentru perioade lungi). Cererea
          trebuie să conțină perioada exactă, numărul de zile lucrătoare și
          motivul. Aștepți aprobarea în scris — NU pleca fără ea.
        </p>

        <div className="bg-blue-700 text-white rounded-lg p-5 my-4">
          <p className="font-semibold mb-2">
            🚀 Generează cererea de concediu în 2 minute
          </p>
          <p className="text-sm text-blue-50 mb-3">
            Alegi tipul (concediu fără plată, de odihnă, evenimente
            familiale), completezi perioada, semnezi cu mouse-ul, descarci
            PDF-ul.
          </p>
          <Link
            href="/cereri/concediu"
            className="inline-block bg-white text-blue-700 font-medium px-4 py-2 rounded-md hover:bg-slate-100 transition"
          >
            Deschide generatorul →
          </Link>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Greșeli de evitat
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Cele mai frecvente probleme se rezumă la trei:{' '}
          <strong>plecare fără aprobare scrisă</strong> (te expui la sancțiuni
          disciplinare, chiar concediere), <strong>fără preaviz decent</strong>{' '}
          (cererea făcută cu o zi înainte are șanse mari de refuz), și{' '}
          <strong>neplata contribuțiilor pe perioade lungi</strong> (pierzi
          asigurarea și acumulezi găuri în stagiul de cotizare pentru pensie).
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
          href="/cereri/concediu"
          className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-medium px-6 py-3 rounded-md transition mt-6"
        >
          Generează cererea de concediu →
        </Link>

        <hr className="border-slate-200 my-8" />

        <p className="text-sm text-slate-500">
          <strong>Notă:</strong> Acest articol acoperă situațiile uzuale
          conform Codului Muncii (art. 153). Pentru situații speciale
          (angajați din administrația publică, contracte cu clauze
          particulare, boli grave prelungite), consultă un avocat sau
          serviciul HR al companiei.
        </p>
      </article>
    </div>
  )
}
