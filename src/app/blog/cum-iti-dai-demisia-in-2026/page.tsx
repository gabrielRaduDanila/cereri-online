import type { Metadata } from 'next'
import Link from 'next/link'
import { getArticol } from '@/lib/articole'
import { buildArticleJsonLd } from '@/lib/structured-data'

const meta = getArticol('cum-iti-dai-demisia-in-2026')!

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
    intrebare: 'Pot să demisionez prin email sau WhatsApp?',
    raspuns:
      'Legal, demisia trebuie să fie în formă scrisă. Un email către angajator poate fi acceptat dacă poți dovedi că a fost primit (de exemplu, confirmarea de citire sau un răspuns). Totuși, cea mai sigură formă rămâne cererea semnată pe hârtie, cu număr de înregistrare de la angajator, sau trimisă prin poștă cu confirmare de primire.',
  },
  {
    intrebare: 'Ce se întâmplă dacă angajatorul refuză să-mi accepte demisia?',
    raspuns:
      'Angajatorul nu poate refuza demisia. Conform art. 81 din Codul Muncii, salariatul are dreptul unilateral să demisioneze, iar cererea nu are nevoie de acceptul angajatorului. Dacă refuză să înregistreze cererea, o poți trimite prin poștă recomandată cu confirmare de primire — data expedierii contează.',
  },
  {
    intrebare: 'Trebuie să-i spun motivul demisiei?',
    raspuns:
      'Nu. Codul Muncii nu obligă salariatul să menționeze motivul. Poți lăsa gol acest câmp în cerere. Singura excepție este demisia fără preaviz — în acest caz trebuie să invoci o cauză (de exemplu, nerespectarea obligațiilor de către angajator, cum ar fi salariul neplătit).',
  },
  {
    intrebare: 'Pot să anulez demisia după ce am depus-o?',
    raspuns:
      'Poți retrage demisia doar cu acordul angajatorului. Dacă acesta acceptă, se face un act adițional care revocă demisia. Dacă nu acceptă, contractul încetează la expirarea preavizului, așa cum este stabilit inițial.',
  },
  {
    intrebare:
      'Ce se întâmplă cu concediul de odihnă neefectuat sau bonusurile?',
    raspuns:
      'Angajatorul este obligat să-ți plătească indemnizația pentru zilele de concediu neefectuat, salariul restant și orice bonusuri sau prime la care ai dreptul până la ultima zi de muncă. Toate acestea trebuie achitate cel târziu cu ocazia ultimei plăți de salariu.',
  },
  {
    intrebare: 'Ce documente primesc de la angajator la plecare?',
    raspuns:
      'La încetarea contractului, angajatorul îți eliberează: (1) adeverința de vechime în muncă, (2) o copie a REVISAL-ului cu perioada lucrată, (3) fluturașul de salariu final. Cartea de muncă pe hârtie nu mai există de mult — totul este acum digital în REVISAL, gestionat de Inspecția Muncii.',
  },
  {
    intrebare:
      'Ce se întâmplă cu concediul medical primit în timpul preavizului?',
    raspuns:
      'Preavizul se suspendă pe perioada concediului medical și se reia imediat ce revii la lucru. Nu prelungește durata totală a preavizului decât cu zilele efective de concediu medical. Angajatorul nu poate concedia salariatul aflat în concediu medical.',
  },
]

export default function ArticolDemisie() {
  const jsonLd = buildArticleJsonLd(meta, intrebariFrecvente, 'Demisia în 2026')

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
        <span className="text-slate-700">Demisia în 2026</span>
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
          Vrei să-ți dai demisia dar nu ești sigur care sunt pașii legali, cât
          preaviz trebuie să respecți sau ce documente ai dreptul să primești?
          Acest ghid îți explică tot ce trebuie să știi despre demisie în
          România, conform Codului Muncii — plus un model de cerere PDF pe
          care-l poți completa în 2 minute.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-md">
          <p className="text-sm text-slate-700">
            <strong className="text-blue-900">Pe scurt:</strong> demisia este
            dreptul tău unilateral. Angajatorul nu poate să refuze. Trebuie să
            respecți un preaviz (max 20 zile lucrătoare pentru execuție, 45
            pentru conducere). Nu ești obligat să spui motivul.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Ce înseamnă demisia din punct de vedere legal
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Demisia este actul unilateral prin care salariatul îi comunică
          angajatorului decizia de a înceta contractul individual de muncă.
          Este reglementată de <strong>articolul 81 din Codul Muncii</strong>{' '}
          (Legea 53/2003, republicată).
        </p>
        <p className="text-slate-700 leading-relaxed">
          Trei aspecte esențiale de reținut:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>
            <strong>E dreptul tău.</strong> Nu ai nevoie de acordul
            angajatorului.
          </li>
          <li>
            <strong>Trebuie în scris.</strong> Verbal nu produce efecte legale.
          </li>
          <li>
            <strong>Nu trebuie să menționezi motivul</strong> (cu excepția
            demisiei fără preaviz).
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Termenul de preaviz — cât ești obligat să mai lucrezi
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Preavizul este perioada dintre depunerea demisiei și data efectivă a
          încetării contractului. Este stabilit prin contract sau contract
          colectiv de muncă și nu poate depăși:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>
            <strong>20 de zile lucrătoare</strong> — pentru salariații cu
            funcții de execuție
          </li>
          <li>
            <strong>45 de zile lucrătoare</strong> — pentru salariații cu
            funcții de conducere (director, manager, șef de departament etc.)
          </li>
        </ul>
        <p className="text-slate-700 leading-relaxed">
          Dacă în contract nu este specificat preavizul, se aplică termenul
          maxim legal. Preavizul curge de la data următoare depunerii cererii,
          nu de la data cererii.
        </p>
        <p className="text-slate-700 leading-relaxed">
          <strong>Important:</strong> preavizul poate fi renunțat total sau
          parțial de angajator. Dacă acesta acceptă să pleci mai devreme,
          scrieți asta în același document sau într-un act adițional.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Pașii concreți pentru a demisiona corect
        </h2>

        <h3 className="text-xl font-semibold text-slate-900 pt-2">
          Pasul 1 — Redactează cererea în scris
        </h3>
        <p className="text-slate-700 leading-relaxed">
          Cererea trebuie să conțină: numele tău complet, CNP-ul, funcția,
          angajatorul, data plecării (după preaviz) și semnătura. Nu trebuie să
          menționezi motivul, dar poți dacă vrei.
        </p>
        <div className="bg-blue-700 text-white rounded-lg p-5 my-4">
          <p className="font-semibold mb-2">
            🚀 Generează cererea de demisie în 2 minute
          </p>
          <p className="text-sm text-blue-50 mb-3">
            Completează formularul, previzualizezi PDF-ul, semnezi cu mouse-ul
            și-l descarci. Gratuit, fără cont.
          </p>
          <Link
            href="/cereri/demisie"
            className="inline-block bg-white text-blue-700 font-medium px-4 py-2 rounded-md hover:bg-slate-100 transition"
          >
            Deschide generatorul →
          </Link>
        </div>

        <h3 className="text-xl font-semibold text-slate-900 pt-2">
          Pasul 2 — Depune cererea cu confirmare de primire
        </h3>
        <p className="text-slate-700 leading-relaxed">
          Ai două variante sigure:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>
            <strong>Predare directă:</strong> depui cererea la secretariat /
            HR și ceri un număr de înregistrare pe copia ta (cu ștampilă și
            data primirii)
          </li>
          <li>
            <strong>Prin poștă recomandată cu confirmare de primire:</strong>{' '}
            cel mai sigur dacă angajatorul refuză să înregistreze cererea. Data
            expedierii contează
          </li>
        </ul>
        <p className="text-slate-700 leading-relaxed">
          Nu accepta să depui cererea „pe email" fără nicio confirmare — dacă
          apar probleme, nu poți dovedi când s-a primit.
        </p>

        <h3 className="text-xl font-semibold text-slate-900 pt-2">
          Pasul 3 — Respectă preavizul
        </h3>
        <p className="text-slate-700 leading-relaxed">
          În perioada preavizului trebuie să continui să lucrezi normal.
          Angajatorul îți poate cere să predai atribuțiile, să instruiești
          înlocuitorul sau să închei proiecte în derulare — dar nu are dreptul
          să te concedieze sau să-ți schimbe atribuțiile major.
        </p>

        <h3 className="text-xl font-semibold text-slate-900 pt-2">
          Pasul 4 — Predă bunurile companiei
        </h3>
        <p className="text-slate-700 leading-relaxed">
          Laptop, telefon, badge, mașină, uniformă, chei — tot ce ai primit
          pentru a-ți face treaba. Cere un proces-verbal de predare-primire cu
          semnătura angajatorului, ca dovadă că totul e OK.
        </p>

        <h3 className="text-xl font-semibold text-slate-900 pt-2">
          Pasul 5 — Ridică documentele finale
        </h3>
        <p className="text-slate-700 leading-relaxed">
          În ultima zi (sau imediat după), primești:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>
            <strong>Adeverință de vechime</strong> (pentru dosarul de pensie
            sau viitorul angajator)
          </li>
          <li>
            <strong>Copie REVISAL</strong> cu perioada lucrată
          </li>
          <li>
            <strong>Fluturașul de salariu final</strong> cu toate calculele
          </li>
          <li>
            <strong>Contravaloarea concediului neefectuat</strong>, salariul
            restant și eventuale bonusuri
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Drepturile tale la plecare
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Multe persoane nu știu că au dreptul, la încetarea contractului, la:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>
            <strong>Indemnizația pentru concediul neefectuat</strong> — pentru
            fiecare zi de concediu de odihnă la care aveai dreptul dar nu ai
            ieșit
          </li>
          <li>
            <strong>Bonusuri și prime</strong> stabilite prin contract sau
            regulament intern (bonus de performanță, prime trimestriale, tichete
            de masă restante etc.)
          </li>
          <li>
            <strong>Salariul integral</strong> pentru zilele efectiv lucrate
            din ultima lună
          </li>
          <li>
            <strong>Adeverințe pentru orice scop</strong> (bancă, viza, dosar
            șomaj) — angajatorul e obligat să le emită la cerere
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Demisia fără preaviz — când este legală
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Poți pleca imediat, fără să respecți preavizul, dacă angajatorul nu-și
          îndeplinește obligațiile. Cele mai frecvente cauze acceptate legal:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>Nu ți-a plătit salariul la termen</li>
          <li>Nu a virat contribuțiile la stat (CAS, sănătate)</li>
          <li>
            Te-a supus la condiții de muncă periculoase fără echipament de
            protecție
          </li>
          <li>Te hărțuiește sau discriminează</li>
          <li>Îți schimbă unilateral funcția sau locul muncii</li>
        </ul>
        <p className="text-slate-700 leading-relaxed">
          În aceste cazuri, cererea trebuie să menționeze explicit motivul.
          Recomand să ai dovezi (fluturași fără plată, sesizări la ITM, martori
          etc.) pentru orice eventualitate.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Greșeli frecvente pe care să le eviți
        </h2>
        <ol className="list-decimal pl-6 space-y-3 text-slate-700">
          <li>
            <strong>Demisie verbală.</strong> Nu produce efecte legale. Dacă
            angajatorul refuză să-ți dea salariul apoi, nu ai cu ce dovedi.
          </li>
          <li>
            <strong>Cerere fără număr de înregistrare.</strong> Fără dovada
            primirii, preavizul nu începe să curgă.
          </li>
          <li>
            <strong>Plecare înainte de expirarea preavizului</strong> (fără
            acordul angajatorului). Poate fi calificată drept absență
            nemotivată și dă dreptul angajatorului la concediere disciplinară,
            care apare în REVISAL.
          </li>
          <li>
            <strong>Semnare de acte în ultima zi fără să citești.</strong> Unele
            angajatori încearcă să te facă să semnezi „acord de confidențialitate
            extinsă" sau „renunțare la drepturi" — ai voie să refuzi.
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
          Ai înțeles pașii. Acum poți completa cererea în 2 minute — vezi
          PDF-ul actualizat în timp real pe măsură ce scrii, semnezi cu mouse-ul
          sau degetul, și-l descarci gata de imprimat sau trimis. Nu-ți salvăm
          datele nicăieri.
        </p>
        <Link
          href="/cereri/demisie"
          className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-medium px-6 py-3 rounded-md transition"
        >
          Generează cererea de demisie →
        </Link>

        <hr className="border-slate-200 my-8" />

        <p className="text-sm text-slate-500">
          <strong>Notă:</strong> Acest articol are scop informativ și acoperă
          situațiile uzuale conform Codului Muncii din România (Legea 53/2003,
          republicată). Pentru cazuri speciale (contracte de management,
          conflicte în instanță, situații atipice), consultă un avocat
          specializat în dreptul muncii.
        </p>
      </article>
    </div>
  )
}
