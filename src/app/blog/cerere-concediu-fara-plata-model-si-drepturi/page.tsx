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
    intrebare: 'Angajatorul poate refuza cererea de concediu fără plată?',
    raspuns:
      'Da. Spre deosebire de concediul de odihnă (pe care nu-l poate refuza), concediul fără plată este acordat de angajator la solicitarea salariatului. Angajatorul poate refuza dacă absența ta afectează activitatea companiei. Nu ești în drept legal să pleci fără aprobarea scrisă.',
  },
  {
    intrebare: 'Cât timp maxim pot fi în concediu fără plată?',
    raspuns:
      'Codul Muncii nu stabilește un termen maxim general. Durata se negociază între tine și angajator, în funcție de motiv și de politica firmei. În practică, perioadele uzuale sunt: 1-3 zile pentru evenimente familiale, 1-2 săptămâni pentru situații personale, până la câteva luni pentru studii/motive medicale. Contractul colectiv de muncă poate stabili limite.',
  },
  {
    intrebare: 'Pierd vechimea în muncă dacă iau concediu fără plată?',
    raspuns:
      'Nu. Vechimea în muncă se calculează pe toată durata contractului, indiferent dacă ai fost sau nu în concediu fără plată. Ceea ce se afectează sunt contribuțiile la asigurări sociale (pensie, sănătate, șomaj) — nu se plătesc pe perioada în care nu ai salariu.',
  },
  {
    intrebare: 'Ce se întâmplă cu asigurarea de sănătate?',
    raspuns:
      'Pe perioada concediului fără plată nu se plătesc contribuțiile la sănătate. Riști să pierzi calitatea de asigurat după 3 luni consecutive de nedecontare. Ca să nu-ți pierzi asigurarea, poți plăti singur contribuția la sănătate (aproximativ 300 lei/lună la nivelul de referință), prin declarația 212 la ANAF.',
  },
  {
    intrebare: 'Cererea trebuie să conțină motivul?',
    raspuns:
      'Da, spre deosebire de demisie. Concediul fără plată nu e un drept unilateral — angajatorul trebuie să evalueze motivul. Ești obligat să menționezi o cauză plauzibilă: studii (examene, cursuri), motive familiale (nuntă, deces, îngrijire copil), motive medicale (proceduri programate), călătorie personală. Motivul influențează deseori decizia angajatorului.',
  },
  {
    intrebare: 'Se acordă concediu fără plată pentru îngrijirea copilului?',
    raspuns:
      'Da, dar există și opțiuni mai bune. Pentru îngrijirea copilului până la 2 ani (sau 3 pentru copii cu dizabilități) există concediul pentru creșterea copilului, cu indemnizație plătită de stat. Pentru situații ocazionale (copil bolnav), există concediul medical pentru îngrijirea copilului bolnav, plătit. Concediul fără plată e ultima opțiune, când celelalte nu se aplică.',
  },
  {
    intrebare: 'Ce se întâmplă dacă mă întorc mai devreme din concediu?',
    raspuns:
      'Doar cu acordul angajatorului. Concediul fără plată e un act cu termen precis, aprobat de ambele părți. Dacă vrei să te întorci mai devreme, trimiți o cerere scrisă, iar angajatorul poate accepta sau nu (în funcție de organizarea activității). Recomandat: anunță cu minim 5-7 zile înainte.',
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
          Ai nevoie de câteva zile sau săptămâni libere fără salariu — poate
          pentru studii, o situație familială sau o călătorie. Concediul fără
          plată e opțiunea potrivită, dar are reguli clare: nu-l poți lua pe
          drept, angajatorul poate refuza, și afectează asigurările. Iată tot
          ce trebuie să știi.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-md">
          <p className="text-sm text-slate-700">
            <strong className="text-blue-900">Pe scurt:</strong> concediul fără
            plată nu e drept unilateral — angajatorul trebuie să aprobe. Nu
            pierzi vechimea, dar nu plătești asigurări. Cererea trebuie
            motivată. Durata: negociabilă cu angajatorul.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Ce este concediul fără plată
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Concediul fără plată este perioada de timp în care ești în continuare
          angajat, dar nu lucrezi și nu primești salariu. Este reglementat de{' '}
          <strong>articolul 153 din Codul Muncii</strong> (Legea 53/2003,
          republicată).
        </p>
        <p className="text-slate-700 leading-relaxed">
          Diferența față de alte tipuri de concediu:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>
            <strong>Concediu de odihnă:</strong> drept unilateral al
            salariatului, plătit, minim 20 zile/an. Angajatorul nu poate
            refuza (doar programa).
          </li>
          <li>
            <strong>Concediu fără plată:</strong> se acordă LA CEREREA
            salariatului, cu APROBAREA angajatorului. Neplătit.
          </li>
          <li>
            <strong>Concediu medical:</strong> pe baza certificatului medical,
            plătit din FNUASS (nu de angajator direct).
          </li>
          <li>
            <strong>Concediu creștere copil:</strong> pentru părinți cu copil
            sub 2 ani, indemnizație de la stat.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Când poți cere concediu fără plată
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Legea nu limitează motivele, dar în practică, cererile aprobate în
          mod obișnuit sunt pentru:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>
            <strong>Studii:</strong> examene la facultate, master, cursuri de
            calificare, doctorat
          </li>
          <li>
            <strong>Evenimente familiale:</strong> nuntă, deces, botez,
            aniversări speciale
          </li>
          <li>
            <strong>Motive medicale:</strong> proceduri programate, recuperare
            după intervenții, tratamente
          </li>
          <li>
            <strong>Îngrijire familiară:</strong> părinți vârstnici, copii
            bolnavi (când nu se aplică alte concedii specifice)
          </li>
          <li>
            <strong>Călătorii personale:</strong> vacanțe lungi care depășesc
            zilele de concediu de odihnă rămase
          </li>
          <li>
            <strong>Proiecte personale:</strong> mutare, renovări, alte
            situații majore
          </li>
        </ul>
        <p className="text-slate-700 leading-relaxed">
          Cu cât motivul e mai clar și mai puțin evitabil (ex: examen la
          facultate cu o singură dată posibilă), cu atât șansele de aprobare
          cresc.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Ce se întâmplă pe perioada concediului
        </h2>

        <h3 className="text-xl font-semibold text-slate-900 pt-2">
          Contractul rămâne activ
        </h3>
        <p className="text-slate-700 leading-relaxed">
          Nu ești concediat, nu-ți dai demisia. Contractul de muncă este
          suspendat temporar. La sfârșitul perioadei aprobate, te întorci pe
          același post, cu aceleași drepturi.
        </p>

        <h3 className="text-xl font-semibold text-slate-900 pt-2">
          Vechimea în muncă continuă să curgă
        </h3>
        <p className="text-slate-700 leading-relaxed">
          Perioada de concediu fără plată se contorizează integral la vechimea
          în muncă. Pentru calculul concediului de odihnă sau al pensiei
          (partea de stagiu de cotizare), lucrurile sunt mai nuanțate — vezi
          punctul următor.
        </p>

        <h3 className="text-xl font-semibold text-slate-900 pt-2">
          Asigurările sociale se opresc
        </h3>
        <p className="text-slate-700 leading-relaxed">
          Pe perioada concediului fără plată:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>
            <strong>Pensie (CAS):</strong> nu se plătește. Nu se ia la stagiul
            de cotizare. Poți pierde ani utili pentru pensie.
          </li>
          <li>
            <strong>Sănătate:</strong> nu se plătește. După 3 luni consecutive,
            pierzi calitatea de asigurat.
          </li>
          <li>
            <strong>Șomaj:</strong> nu se plătește. Nu contează pentru dreptul
            la ajutor de șomaj.
          </li>
        </ul>
        <p className="text-slate-700 leading-relaxed">
          Poți plăti singur contribuțiile pentru a-ți menține drepturile —
          prin declarația 212 la ANAF. Costul mediu: 300-500 lei/lună pentru
          sănătate + pensie facultativ.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Pașii concreți pentru a obține aprobarea
        </h2>

        <h3 className="text-xl font-semibold text-slate-900 pt-2">
          Pasul 1 — Discută mai întâi verbal
        </h3>
        <p className="text-slate-700 leading-relaxed">
          Înainte de cererea oficială, discută cu șeful direct sau cu HR-ul.
          Explică situația, ascultă răspunsul, întreabă dacă e nevoie de o
          formulare anume. O cerere depusă „la rece" fără discuție prealabilă
          e mai des refuzată.
        </p>

        <h3 className="text-xl font-semibold text-slate-900 pt-2">
          Pasul 2 — Redactează cererea scrisă
        </h3>
        <p className="text-slate-700 leading-relaxed">
          Cererea trebuie să conțină: numele complet, CNP-ul, funcția,
          departamentul, perioada exactă (data început — data sfârșit),
          numărul de zile lucrătoare, motivul concediului și semnătura.
        </p>
        <div className="bg-blue-700 text-white rounded-lg p-5 my-4">
          <p className="font-semibold mb-2">
            🚀 Generează cererea de concediu în 2 minute
          </p>
          <p className="text-sm text-blue-50 mb-3">
            Alegi tipul (concediu fără plată, de odihnă, evenimente familiale),
            completezi perioada, semnezi cu mouse-ul, descarci PDF-ul. Gratuit.
          </p>
          <Link
            href="/cereri/concediu"
            className="inline-block bg-white text-blue-700 font-medium px-4 py-2 rounded-md hover:bg-slate-100 transition"
          >
            Deschide generatorul →
          </Link>
        </div>

        <h3 className="text-xl font-semibold text-slate-900 pt-2">
          Pasul 3 — Depune cererea cu preaviz rezonabil
        </h3>
        <p className="text-slate-700 leading-relaxed">
          Recomandat: depune cererea cu minim 5-7 zile lucrătoare înainte de
          perioada dorită (pentru zile scurte) sau 2-4 săptămâni pentru
          perioade lungi. Așa lași timp angajatorului să organizeze activitatea
          în lipsa ta.
        </p>

        <h3 className="text-xl font-semibold text-slate-900 pt-2">
          Pasul 4 — Așteaptă aprobarea scrisă
        </h3>
        <p className="text-slate-700 leading-relaxed">
          Aprobarea trebuie să fie în scris (rezoluție pe cerere, act adițional
          sau decizie). NU pleca în concediu fără aprobare — asta ar fi
          absență nemotivată și te expune la sancțiuni disciplinare, chiar
          concediere pentru abateri repetate.
        </p>

        <h3 className="text-xl font-semibold text-slate-900 pt-2">
          Pasul 5 — Predă atribuțiile
        </h3>
        <p className="text-slate-700 leading-relaxed">
          Înainte să pleci, predă cu grijă atribuțiile: transmite proiectele
          în curs unui coleg, lasă informații de contact pentru urgențe (dacă
          e cazul), programează întâlnirile importante după întoarcere. E în
          interesul tău să nu găsești haos la revenire.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Dacă angajatorul refuză
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Refuzul angajatorului trebuie să fie motivat (ex: „activitatea nu
          poate fi acoperită în absența ta"). Ce poți face:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>
            <strong>Negociază alternative:</strong> perioada mai scurtă, alte
            date, revenirea mai devreme etc.
          </li>
          <li>
            <strong>Verifică zilele de concediu de odihnă rămase.</strong>{' '}
            Poate poți acoperi perioada dorită cu zile plătite, în loc de fără
            plată
          </li>
          <li>
            <strong>Munca de acasă (dacă postul permite).</strong> Poate
            angajatorul acceptă să lucrezi remote pentru câteva zile în loc de
            concediu total
          </li>
        </ul>
        <p className="text-slate-700 leading-relaxed">
          Nu poți contesta legal refuzul unui concediu fără plată. E la
          latitudinea angajatorului. Singura excepție: pentru studii — legea
          permite până la 30 zile/an pentru pregătirea și susținerea
          examenelor, dar tot cu aprobarea angajatorului.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Greșeli frecvente pe care să le eviți
        </h2>
        <ol className="list-decimal pl-6 space-y-3 text-slate-700">
          <li>
            <strong>Absență fără aprobare scrisă.</strong> Chiar dacă ai
            discutat verbal, fără document înregistrat nu ai dovadă. Angajatorul
            te poate concedia pentru absență nemotivată.
          </li>
          <li>
            <strong>Nu-ți plătești contribuția la sănătate pe perioade
            lungi.</strong> Riști să pierzi asigurarea, cu implicații pentru
            servicii medicale (nu se acordă gratuit, plătești integral).
          </li>
          <li>
            <strong>Cerere fără motiv precis.</strong> „Vreau să iau
            concediu fără plată" fără justificare are șanse mari de refuz.
            Explică situația specifică.
          </li>
          <li>
            <strong>Cerere cu 1 zi înainte.</strong> Pentru majoritatea
            situațiilor, un preaviz decent (5-7 zile) e diferența dintre
            aprobare și refuz.
          </li>
        </ol>

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

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Următorul pas: generează cererea acum
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Ai înțeles cum stă treaba. Deschide generatorul, alegi tipul
          „Concediu fără plată", completezi perioada și motivul, semnezi și
          descarci PDF-ul. Îl printezi și-l depui la HR sau la șeful direct.
          Nu-ți salvăm datele nicăieri.
        </p>
        <Link
          href="/cereri/concediu"
          className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-medium px-6 py-3 rounded-md transition"
        >
          Generează cererea de concediu →
        </Link>

        <hr className="border-slate-200 my-8" />

        <p className="text-sm text-slate-500">
          <strong>Notă:</strong> Acest articol acoperă situațiile uzuale
          conform Codului Muncii (Legea 53/2003, art. 153). Pentru situații
          speciale (angajați din administrația publică, contracte cu clauze
          particulare, boli grave prelungite), consultă un avocat sau serviciul
          resurse umane al companiei.
        </p>
      </article>
    </div>
  )
}
