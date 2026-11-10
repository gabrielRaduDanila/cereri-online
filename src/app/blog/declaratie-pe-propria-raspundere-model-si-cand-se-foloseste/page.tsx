import type { Metadata } from 'next'
import Link from 'next/link'
import { getArticol } from '@/lib/articole'
import { buildArticleJsonLd } from '@/lib/structured-data'

const meta = getArticol(
  'declaratie-pe-propria-raspundere-model-si-cand-se-foloseste'
)!

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
    intrebare:
      'Trebuie autentificată la notar sau e suficientă semnătura olografă?',
    raspuns:
      'Pentru majoritatea situațiilor uzuale, semnătura olografă e suficientă. Autentificarea notarială se cere doar în două cazuri: când legea o prevede expres (unele declarații în materie succesorală, unele proceduri la Registrul Comerțului) sau când instituția beneficiară o impune contractual (bănci pentru credite mari, unele dosare consulare). Verifică cerința exactă a destinatarului înainte să cheltuiești 50-100 lei pe autentificare care nu-ți folosește.',
  },
  {
    intrebare: 'Ce se întâmplă dacă declar ceva fals?',
    raspuns:
      'Infracțiunea se cheamă fals în declarații, prevăzută de art. 326 Cod Penal. Pedeapsa: închisoare de la 3 luni la 2 ani sau amendă penală (nu contravențională — rămâne în cazier). Infracțiunea se consumă din momentul semnării, chiar dacă falsitatea nu a produs prejudiciu. Instituțiile publice fac verificări încrucișate (ANAF cu CAS, primăria cu baze de date interne) — detectarea falsurilor e mult mai probabilă decât cred mulți declaranți.',
  },
  {
    intrebare: 'Cât timp e valabilă o declarație pe propria răspundere?',
    raspuns:
      'Legea nu prevede un termen general. În practică, instituțiile acceptă declarații emise în ultimele 30-90 de zile pentru cele mai multe situații. Pentru declarații privind situații dinamice (venituri, locul de muncă, starea civilă), destinatarul poate cere declarație emisă în ultimele 10-15 zile. Întotdeauna mai bine să emiți o declarație nouă decât să riști respingerea pentru „perimată".',
  },
  {
    intrebare:
      'Pot semna o declarație pentru altcineva (soț, părinte, copil)?',
    raspuns:
      'Nu. Declarația pe propria răspundere se referă strict la fapte pe care le cunoști personal și pentru care îți asumi personal responsabilitatea penală. Pentru declarații în numele altei persoane ai nevoie de procură notarială specială. Excepție: pentru copilul minor, un părinte poate semna, menționând explicit calitatea („în calitate de părinte / reprezentant legal al minorului X").',
  },
  {
    intrebare: 'E valabilă o declarație scrisă la calculator și apoi semnată?',
    raspuns:
      'Da, integral. Cerința legală e doar existența unei semnături olografe (scrisă de mână) și, dacă e cazul, a datei. Textul propriu-zis poate fi dactilografiat. Pentru declarații importante (bancă, instanță), formatarea curată și imprimarea la calculator cresc profesionalismul perceput. Semnătura trebuie să fie identică cu cea de pe buletin, altfel declarația poate fi contestată pe grafologie.',
  },
]

export default function ArticolDeclaratie() {
  const jsonLd = buildArticleJsonLd(
    meta,
    intrebariFrecvente,
    'Declarație pe propria răspundere'
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
        <span className="text-slate-700">Declarație pe propria răspundere</span>
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
          Declarația pe propria răspundere este documentul administrativ pe
          care îl ceri sau îl ceri să-l dai probabil de mai multe ori pe an:
          la ANAF pentru declarații fiscale, la primărie pentru alocații, la
          bancă pentru credite, la angajator pentru beneficii, la școală pentru
          burse. Un document aparent simplu — dar cu greutate juridică reală,
          pentru că se bazează pe un articol din Codul Penal. Iată cum o scrii
          corect și unde o folosești.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Ce este, de fapt, o declarație pe propria răspundere
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Juridic, e o declarație unilaterală prin care o persoană afirmă
          anumite fapte, cunoscând că afirmațiile false atrag răspunderea
          penală potrivit art. 326 din Codul Penal. Nu are nevoie de martori,
          nu are nevoie de autentificare (în marea majoritate a cazurilor),
          dar produce efecte juridice complete.
        </p>
        <p className="text-slate-700 leading-relaxed">
          Diferă de cererea obișnuită prin presupunerea legală că declarantul
          cunoaște personal faptele declarate. Nu pot declara pe propria
          răspundere că „nu există litigii împotriva mea" dacă nu am făcut
          verificarea — teoretic poate exista un dosar deschis fără știrea mea.
          Elementul definitoriu este tocmai acceptarea conștientă a răspunderii
          pentru conținutul declarat.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Structura obligatorie — cele șase elemente
        </h2>
        <p className="text-slate-700 leading-relaxed">
          O declarație care rezistă verificării conține strict șase elemente,
          în această ordine:
        </p>
        <p className="text-slate-700 leading-relaxed">
          <strong>1. Titlul explicit.</strong> „Declarație pe propria
          răspundere", centrat sau aliniat la stânga, cu majuscule. Fără
          titlu, documentul se interpretează ca simplă cerere sau notă
          informativă.
        </p>
        <p className="text-slate-700 leading-relaxed">
          <strong>2. Datele de identificare complete.</strong> Nume și
          prenume conform actului de identitate, CNP, seria și numărul CI,
          adresa de domiciliu, data și locul nașterii. Pentru declarații
          importante (bancă, notar), telefonul și e-mailul sunt utile pentru
          contact.
        </p>
        <p className="text-slate-700 leading-relaxed">
          <strong>3. Formula introductivă.</strong> „Subsemnatul/Subsemnata
          [nume], având datele de mai sus, cunoscând dispozițiile art. 326
          Cod Penal privind falsul în declarații, declar pe propria răspundere
          următoarele:" — fraza completă e importantă. Multe instituții
          resping declarațiile care omit trimiterea explicită la art. 326.
        </p>
        <p className="text-slate-700 leading-relaxed">
          <strong>4. Conținutul declarat.</strong> Afirmațiile concrete, la
          persoana întâi, enumerate clar. Fiecare afirmație să fie verificabilă
          factual, nu subiectivă. „Nu am alte venituri în afara celor
          declarate" merge. „Sunt o persoană corectă" nu are sens juridic
          într-o declarație.
        </p>
        <p className="text-slate-700 leading-relaxed">
          <strong>5. Scopul declarației.</strong> „Dau prezenta declarație
          pentru a fi folosită la [instituția beneficiară], în vederea
          [obiectivul concret]." Scopul limitează utilizarea declarației —
          o declarație dată pentru un credit nu poate fi folosită de
          instituție pentru alt scop.
        </p>
        <p className="text-slate-700 leading-relaxed">
          <strong>6. Data, locul, semnătura olografă.</strong> Data completă
          (nu doar luna), localitatea, semnătura trasată de mână. Semnătura
          trebuie să corespundă cu cea de pe CI — contestarea pe grafologie
          e posibilă dar rară în practică.
        </p>

        <div className="bg-blue-700 text-white rounded-lg p-5 my-4">
          <p className="font-semibold mb-2">
            🚀 Generează declarația în 2 minute
          </p>
          <p className="text-sm text-blue-50 mb-3">
            Model universal, cu toate elementele cerute: trimitere la art.
            326 Cod Penal, scop limitat, semnătură cu mouse-ul, PDF gata de
            imprimat.
          </p>
          <Link
            href="/cereri/cerere-generala"
            className="inline-block bg-white text-blue-700 font-medium px-4 py-2 rounded-md hover:bg-slate-100 transition"
          >
            Deschide generatorul →
          </Link>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Situații uzuale în care e cerută
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Declarațiile pe propria răspundere apar ca cerință în zeci de
          proceduri administrative. Cele mai frecvente în practica curentă:
        </p>
        <p className="text-slate-700 leading-relaxed">
          <strong>La ANAF și autorități fiscale</strong> — declarații
          privind veniturile nedeclarate, calitatea de rezident fiscal,
          lipsa activităților impozabile în alte state, îndeplinirea
          condițiilor pentru deduceri sau facilități fiscale.
        </p>
        <p className="text-slate-700 leading-relaxed">
          <strong>La primărie</strong> — declarații pentru dosare de alocații
          (venituri din gospodărie, componența familiei), ajutoare sociale,
          declarații anti-mită pentru funcționari, declarații pentru
          atribuirea locurilor de parcare.
        </p>
        <p className="text-slate-700 leading-relaxed">
          <strong>La bancă</strong> — declarații privind originea fondurilor
          (pentru sume mari depuse), inexistența litigiilor, scopul
          creditului, calitatea de beneficiar real al operațiunilor.
        </p>
        <p className="text-slate-700 leading-relaxed">
          <strong>La angajator</strong> — declarații pentru beneficii
          salariale (copii în întreținere, soț/soție fără venituri),
          declarații de confidențialitate, declarații privind absența
          conflictelor de interese.
        </p>
        <p className="text-slate-700 leading-relaxed">
          <strong>La școală/universitate</strong> — declarații pentru dosare
          de bursă (venituri familiale, statutul altor membri), declarații
          pentru cămine (lipsa altei locuințe în localitate), declarații
          pentru taxe reduse.
        </p>
        <p className="text-slate-700 leading-relaxed">
          <strong>La examene auto</strong> — declarații privind starea de
          sănătate, lipsa interdicțiilor de conducere, absența tratamentelor
          medicamentoase incompatibile cu conducerea.
        </p>
        <p className="text-slate-700 leading-relaxed">
          <strong>Dosare consulare și de emigrare</strong> — declarații
          privind starea civilă, intențiile de ședere, inexistența
          condamnărilor.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Autentificarea notarială — când e necesară
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Majoritatea instituțiilor acceptă declarații sub semnătură privată
          (fără notar). Costă 0 lei și durează 2 minute. Dar există situații
          în care autentificarea notarială e obligatorie:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>
            Declarații în materie succesorală (acceptarea sau renunțarea la
            moștenire, declarații pentru dezbatere succesorală)
          </li>
          <li>
            Unele proceduri la Registrul Comerțului (declarația asociatului
            unic la înființarea SRL)
          </li>
          <li>
            Credite ipotecare mari — multe bănci solicită contractual
            autentificarea declarațiilor privind proprietatea
          </li>
          <li>
            Dosare consulare la multe ambasade (varianță mare, verifică
            site-ul specific)
          </li>
          <li>
            Proceduri în instanță cu caracter extraordinar
          </li>
        </ul>
        <p className="text-slate-700 leading-relaxed">
          Costul autentificării: între 30 și 150 lei, în funcție de notariat
          și de volumul declarației. Nu e scump, dar e inutil dacă nu e cerut.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Falsul în declarații — ce riști concret
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Articolul 326 Cod Penal (în forma în vigoare din 2014, cu
          actualizările ulterioare) sancționează falsul în declarații cu
          închisoare de la 3 luni la 2 ani sau amendă penală. Esențial:
          infracțiunea există chiar dacă falsitatea nu a produs prejudiciu
          — simpla atestare falsă, în condițiile prevăzute de lege, e
          suficientă.
        </p>
        <p className="text-slate-700 leading-relaxed">
          Pedepsele efective pronunțate în jurisprudență tind să fie amenzi
          penale (nu închisoare) în primă instanță, dar consecințele
          colaterale sunt grave: cazier judiciar activ (afectează angajare,
          credite, dosare consulare pentru 5 ani după executarea pedepsei),
          obligația de plată a prejudiciului dacă a existat, reputație
          profesională afectată.
        </p>
        <p className="text-slate-700 leading-relaxed">
          Riscul de detectare crește an după an. Instituțiile publice fac
          verificări încrucișate automatizate: ANAF cu CAS, primăria cu ANAF
          și Casa de Pensii, băncile cu Biroul de Credit. O declarație
          falsă despre venituri în 2020 poate fi descoperită în 2026 la
          verificarea unui alt dosar.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Greșeli frecvente care invalidează declarația
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Nu există consecințe penale pentru o declarație invalidă formal —
          dar o instituție care o respinge te obligă să revii. Cele mai
          frecvente motive de respingere:
        </p>
        <p className="text-slate-700 leading-relaxed">
          Lipsa trimiterii explicite la art. 326 Cod Penal. O declarație
          fără acea mențiune nu are în fața instituțiilor publice
          consecințele juridice ale unei declarații pe propria răspundere —
          devine o notă informativă fără greutate.
        </p>
        <p className="text-slate-700 leading-relaxed">
          Formulări vagi sau generale. „Îndeplinesc condițiile prevăzute de
          lege" e inutil — trebuie enumerate condițiile concrete. „Nu am
          probleme cu legea" nu înseamnă nimic — se cere formularea „nu am
          fost condamnat pentru infracțiuni de X, Y, Z".
        </p>
        <p className="text-slate-700 leading-relaxed">
          Omisiunea scopului declarației. O declarație „deschisă" (fără scop
          declarat) poate fi folosită împotriva ta în proceduri ulterioare
          pentru care nu intenționai. Limitarea scopului te protejează.
        </p>
        <p className="text-slate-700 leading-relaxed">
          Semnătura diferită de cea de pe CI. În cazuri de contestare,
          expertiza grafologică poate invalida declarația. Folosește
          consecvent aceeași semnătură.
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
          href="/cereri/cerere-generala"
          className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-medium px-6 py-3 rounded-md transition mt-6"
        >
          Generează declarația pe propria răspundere →
        </Link>

        <hr className="border-slate-200 my-8" />

        <p className="text-sm text-slate-500">
          <strong>Notă:</strong> Articolul prezintă cadrul general al
          declarațiilor pe propria răspundere în dreptul român. Pentru
          situații cu miză mare (declarații în proceduri succesorale,
          dosare penale, operațiuni financiare complexe), consultarea unui
          notar sau avocat este recomandată. Articolul nu înlocuiește
          consultanța juridică personalizată.
        </p>
      </article>
    </div>
  )
}
