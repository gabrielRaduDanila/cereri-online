import type { Metadata } from 'next'
import Link from 'next/link'
import { getArticol } from '@/lib/articole'
import { buildArticleJsonLd } from '@/lib/structured-data'

const meta = getArticol('cum-reziliezi-contractul-de-telefonie-mobila')!

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
    intrebare: 'Când pot rezilia fără penalizări?',
    raspuns:
      'La expirarea perioadei minime contractuale (12/24 luni), cu preaviz de 30 zile. Sau oricând, gratis, dacă operatorul își modifică unilateral condițiile (crește tariful, schimbă serviciile) — ai 30 zile de la notificare să reziliezi.',
  },
  {
    intrebare: 'Cât costă rezilierea anticipată?',
    raspuns:
      'Depinde de contract. De obicei: valoarea lunilor rămase din angajament + diferența de preț pentru telefonul primit la ofertă (dacă e cazul). Costul exact e specificat în contract la „Reziliere anticipată" — cere-l pe email operatorului înainte să reziliezi.',
  },
  {
    intrebare: 'Ce se întâmplă cu telefonul primit la abonament?',
    raspuns:
      'Îl păstrezi. Dar dacă reziliezi înainte să se termine angajamentul, plătești diferența dintre prețul retail al telefonului și cât ai plătit efectiv (discountul primit). Telefonul rămâne al tău, nu-l returnezi.',
  },
  {
    intrebare: 'Pot porta numărul la alt operator fără să reziliez separat?',
    raspuns:
      'Da. Cererea de portare număr se face la NOUL operator, care gestionează automat rezilierea la vechiul. Portarea durează 1-3 zile lucrătoare. Atenție: dacă ești în angajament, plătești oricum penalizările, indiferent că portezi sau reziliezi direct.',
  },
  {
    intrebare: 'Dacă operatorul refuză cererea?',
    raspuns:
      'Operatorii sunt obligați legal să accepte rezilierea. Dacă refuză, faci plângere la ANCOM (ancom.ro) — are autoritate de sancționare. Poți sesiza și ANPC pentru practici comerciale incorecte.',
  },
]

export default function ArticolRezilereTelefonie() {
  const jsonLd = buildArticleJsonLd(
    meta,
    intrebariFrecvente,
    'Reziliere telefonie mobilă'
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
        <span className="text-slate-700">Reziliere telefonie mobilă</span>
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
          Vrei să scapi de operatorul actual — o ofertă mai bună la altul, un
          serviciu prost, sau pur și simplu vrei să dai jos abonamentul. Poți
          face asta oricând, dar dacă ești în perioada de angajament, plătești
          penalizări. Iată cum decurg lucrurile.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-md">
          <p className="text-sm text-slate-700">
            <strong className="text-blue-900">Pe scurt:</strong> reziliezi
            oricând, dar în perioada de angajament (12/24 luni) plătești
            penalizări. Preaviz 30 zile. Numărul îți rămâne prin portare.
            Cererea trebuie în scris, cu dovadă de primire.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Când plătești ZERO penalizări
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Sunt trei situații în care rezilierea nu-ți costă nimic:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>
            <strong>La expirarea angajamentului.</strong> Dacă au trecut cele
            12 sau 24 luni, contractul devine automat pe perioadă
            nedeterminată. Reziliezi oricând cu preaviz de 30 zile, fără costuri.
          </li>
          <li>
            <strong>Când operatorul schimbă unilateral condițiile.</strong>{' '}
            Crește tariful abonamentului, elimină servicii — ai 30 zile de la
            notificare să reziliezi gratis, indiferent unde ești cu
            angajamentul.
          </li>
          <li>
            <strong>Când operatorul își încalcă obligațiile.</strong> Servicii
            nefuncționale sistematic, facturare greșită repetat, refuz de a
            rezolva probleme. Ai nevoie de dovezi (sesizări, capturi, martori).
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Cât te costă dacă ești în angajament
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Dacă reziliezi înainte de expirarea celor 12/24 luni, operatorul
          poate cere: sumele lunare pentru lunile rămase din contract (chiar
          dacă nu mai folosești serviciul), diferența de preț pentru telefonul
          primit la ofertă (dacă e cazul), și eventuale bonusuri de fidelizare
          retrase.
        </p>
        <p className="text-slate-700 leading-relaxed">
          Înainte să acționezi, cere operatorului pe email sau chat un calcul
          exact al sumei de plată. Așa eviți surprizele și poți decide dacă
          merită să mai aștepți câteva luni până la expirarea angajamentului.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Cum reziliezi corect
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Începi cu o verificare în aplicația operatorului sau contul online —
          uită-te la perioada minimă contractuală, data de start și cât mai ai
          de plătit dacă reziliezi acum. Unele conturi afișează direct costul
          estimat.
        </p>
        <p className="text-slate-700 leading-relaxed">
          Redactezi apoi cererea de reziliere. Trebuie să conțină numele
          complet, CNP-ul, adresa, numărul contractului (îl găsești pe
          factură), tipul de serviciu, data de la care dorești încetarea și
          semnătura.
        </p>
        <div className="bg-blue-700 text-white rounded-lg p-5 my-4">
          <p className="font-semibold mb-2">
            🚀 Generează cererea în 2 minute
          </p>
          <p className="text-sm text-blue-50 mb-3">
            Alegi operatorul, tipul serviciului, semnezi cu mouse-ul,
            descarci PDF-ul. Valabil pentru toți operatorii.
          </p>
          <Link
            href="/cereri/reziliere-telefonie"
            className="inline-block bg-white text-blue-700 font-medium px-4 py-2 rounded-md hover:bg-slate-100 transition"
          >
            Deschide generatorul →
          </Link>
        </div>
        <p className="text-slate-700 leading-relaxed">
          Depui cererea într-una din trei moduri, în ordinea siguranței: prin
          poștă recomandată cu confirmare de primire (cel mai sigur, data
          expedierii contează), în magazinul operatorului cu ștampilă pe
          copie, sau prin email către suport cu confirmare de primire (mai
          comod, mai greu de dovedit în caz de dispută).
        </p>
        <p className="text-slate-700 leading-relaxed">
          După 30 zile calendaristice de la primirea cererii, contractul e
          închis. Verifică factura finală — dacă apar costuri neașteptate,
          contești la operator sau ANPC.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Portarea numărului
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Dacă vrei să pleci la alt operator dar să-ți păstrezi numărul,
          procesul e mult mai simplu: alegi noul operator, completezi cererea
          de portare la EL (nu la vechiul), iar el gestionează automat
          rezilierea. În 1-3 zile lucrătoare numărul e activ la noul operator.
          Nu mai trebuie să faci nicio cerere separată de reziliere.
        </p>
        <p className="text-slate-700 leading-relaxed">
          <strong>Atenție:</strong> portarea nu te scutește de penalizări dacă
          ești în angajament la vechiul operator. Plătești oricum sumele
          stabilite.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Greșeli de evitat
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Trei probleme frecvente: <strong>renunțare doar prin
          call-center</strong> (fără dovadă scrisă, operatorul poate spune
          că nu a primit cererea), <strong>neplata facturilor „ca protest"</strong>{' '}
          (restanțele te trimit la Biroul de Credite — plătește la termen,
          apoi trimite cererea), și <strong>ignorarea perioadei de
          angajament</strong> (rezilierea în primele luni ale unui contract de
          24 luni poate costa 500-2000 lei).
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
          href="/cereri/reziliere-telefonie"
          className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-medium px-6 py-3 rounded-md transition mt-6"
        >
          Generează cererea de reziliere →
        </Link>

        <hr className="border-slate-200 my-8" />

        <p className="text-sm text-slate-500">
          <strong>Notă:</strong> Acest articol acoperă situațiile uzuale
          conform Codului Consumului (OG 21/1992) și reglementărilor ANCOM.
          Pentru dispute complexe sau sume mari, contactează ANPC sau ANCOM.
        </p>
      </article>
    </div>
  )
}
