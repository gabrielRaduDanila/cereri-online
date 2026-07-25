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
    intrebare: 'Când pot rezilia contractul fără penalizări?',
    raspuns:
      'Fără penalizări poți rezilia la expirarea perioadei minime contractuale (12 sau 24 de luni, în funcție de abonament), cu preaviz de 30 de zile. De asemenea, poți rezilia oricând fără costuri dacă operatorul își modifică unilateral condițiile contractului (creșterea prețului, schimbarea serviciilor) — ai la dispoziție 30 de zile de la notificare.',
  },
  {
    intrebare: 'Cât costă rezilierea anticipată?',
    raspuns:
      'Depinde de contract. De obicei, plătești: (1) valoarea restului lunilor rămase din angajament (chiar dacă nu mai folosești serviciile), și/sau (2) diferența dintre prețul telefonului primit la ofertă și prețul retail. Costul exact e specificat în contract la secțiunea „Reziliere anticipată" sau „Beneficii de fidelizare".',
  },
  {
    intrebare: 'Ce se întâmplă cu telefonul primit la abonament?',
    raspuns:
      'Dacă ai primit un telefon cu discount pentru un angajament pe 24 de luni și reziliezi înainte, în general păstrezi telefonul dar plătești diferența de preț (discountul primit) sau valoarea rămasă de amortizare. Telefonul rămâne al tău — nu ești obligat să-l returnezi. Verifică contractul pentru suma exactă.',
  },
  {
    intrebare: 'Pot să-mi portez numărul la alt operator fără să reziliez separat?',
    raspuns:
      'Da. Cererea de portare număr se face la NOUL operator, iar acesta gestionează automat rezilierea contractului cu vechiul operator. Numărul îți rămâne, portarea se face în 1-3 zile lucrătoare. Atenție: dacă ești în angajament activ, plătești penalizările stabilite în contract, indiferent că portezi sau nu.',
  },
  {
    intrebare: 'Cum trimit cererea de reziliere ca să am dovadă?',
    raspuns:
      'Ai două variante sigure: (1) prin poștă recomandată cu confirmare de primire — cel mai sigur, data expedierii contează, sau (2) prin depunere directă în magazinul operatorului cu semnătură pe o copie ca dovadă. Rezilierea prin email sau chat online funcționează dar e mai greu de dovedit în caz de dispută.',
  },
  {
    intrebare: 'Cât durează efectiv rezilierea?',
    raspuns:
      'Preavizul standard este de 30 de zile calendaristice de la data primirii cererii de operator. În această perioadă continui să plătești abonamentul, apoi contractul încetează. Operatorul îți emite factura finală în maxim 30 de zile după încetare.',
  },
  {
    intrebare: 'Ce se întâmplă dacă operatorul refuză să-mi accepte cererea?',
    raspuns:
      'Operatorii sunt obligați legal să accepte cererea de reziliere. Dacă refuză, poți face plângere la ANCOM (Autoritatea Națională pentru Administrarea și Reglementarea în Comunicații — ancom.ro), care are autoritate de sancționare. De asemenea, poți sesiza ANPC pentru practici comerciale incorecte.',
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
          Vrei să pleci de la actualul operator de telefonie mobilă dar nu știi
          dacă plătești penalizări sau ce se întâmplă cu numărul și telefonul?
          Acest ghid îți explică pas cu pas cum reziliezi contractul, când e
          gratis, când costă, și cum îți portezi numărul la alt operator.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-md">
          <p className="text-sm text-slate-700">
            <strong className="text-blue-900">Pe scurt:</strong> reziliezi
            oricând, dar dacă ești în perioada de angajament (12/24 luni),
            plătești penalizări. Preaviz 30 zile. Numărul îți rămâne dacă
            faci portare. Cererea trebuie în scris, cu dovadă de primire.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Când poți rezilia fără penalizări
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Există trei situații în care rezilierea nu-ți costă nimic:
        </p>
        <ol className="list-decimal pl-6 space-y-3 text-slate-700">
          <li>
            <strong>La expirarea angajamentului.</strong> Dacă ai contract pe 12
            sau 24 luni și au trecut deja acele luni, contractul se transformă
            automat în perioadă nedeterminată. Poți rezilia oricând cu preaviz
            de 30 zile, fără costuri suplimentare.
          </li>
          <li>
            <strong>Când operatorul își modifică unilateral condițiile.</strong>{' '}
            Dacă crește tariful abonamentului, schimbă gigii de internet sau
            elimină servicii incluse, ai la dispoziție 30 zile de la notificare
            să reziliezi gratis — indiferent dacă ești sau nu în angajament.
          </li>
          <li>
            <strong>Când operatorul își încalcă obligațiile.</strong> Servicii
            constant nefuncționale, facturare greșită sistematică, refuz de a
            rezolva probleme raportate — sunt motive valide de reziliere fără
            penalizări. Ai nevoie de dovezi (sesizări scrise, capturi, martori).
          </li>
        </ol>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Când plătești penalizări (reziliere anticipată)
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Dacă reziliezi înainte de expirarea angajamentului, operatorul are
          dreptul să ceară:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>
            <strong>Costul rămas al angajamentului.</strong> Adică sumele
            lunare pentru lunile rămase din contract, chiar dacă nu mai
            folosești serviciul.
          </li>
          <li>
            <strong>Diferența de preț pentru telefonul primit la ofertă.</strong>{' '}
            Dacă ai luat un telefon la 1 leu în schimbul angajamentului, plătești
            diferența dintre prețul retail al telefonului și cât ai plătit
            efectiv.
          </li>
          <li>
            <strong>Bonusuri de fidelizare returnate.</strong> Dacă ai primit
            luni gratis, cadouri, etc. în schimbul angajamentului, valoarea lor
            este retrasă.
          </li>
        </ul>
        <p className="text-slate-700 leading-relaxed">
          <strong>Sfat practic:</strong> înainte să reziliezi, cere-i
          operatorului pe email sau chat un calcul exact al sumei de plată. Așa
          eviți surprizele și poți decide dacă merită să aștepți expirarea
          angajamentului.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Pașii concreți pentru a rezilia
        </h2>

        <h3 className="text-xl font-semibold text-slate-900 pt-2">
          Pasul 1 — Verifică statusul angajamentului
        </h3>
        <p className="text-slate-700 leading-relaxed">
          Intră în aplicația operatorului sau contul online și verifică:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>Perioada minimă contractuală (12 sau 24 luni)</li>
          <li>Data de start a angajamentului</li>
          <li>Câte luni au trecut</li>
          <li>
            Costul estimat de reziliere anticipată (uneori afișat direct în cont)
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-slate-900 pt-2">
          Pasul 2 — Redactează cererea de reziliere
        </h3>
        <p className="text-slate-700 leading-relaxed">
          Cererea trebuie să conțină: numele complet, CNP-ul, adresa, numărul
          contractului (îl găsești pe factură sau în aplicație), tipul de
          serviciu (telefonie mobilă, internet, TV etc.), data de la care
          dorești încetarea și semnătura.
        </p>
        <div className="bg-blue-700 text-white rounded-lg p-5 my-4">
          <p className="font-semibold mb-2">
            🚀 Generează cererea de reziliere în 2 minute
          </p>
          <p className="text-sm text-blue-50 mb-3">
            Completează formularul, previzualizezi PDF-ul, semnezi cu mouse-ul
            și-l descarci. Gratuit, fără cont, valabil pentru toți operatorii.
          </p>
          <Link
            href="/cereri/reziliere-telefonie"
            className="inline-block bg-white text-blue-700 font-medium px-4 py-2 rounded-md hover:bg-slate-100 transition"
          >
            Deschide generatorul →
          </Link>
        </div>

        <h3 className="text-xl font-semibold text-slate-900 pt-2">
          Pasul 3 — Depune cererea cu dovadă de primire
        </h3>
        <p className="text-slate-700 leading-relaxed">
          Ai trei opțiuni:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>
            <strong>Poștă recomandată cu confirmare de primire</strong> — cel
            mai sigur. Data expedierii contează, ai dovadă indiscutabilă.
          </li>
          <li>
            <strong>Magazin fizic al operatorului</strong> — cere număr de
            înregistrare și copie semnată/ștampilată.
          </li>
          <li>
            <strong>Email către departamentul suport</strong> — cere confirmare
            de primire. Mai comod, dar poate fi greu de dovedit legal.
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-slate-900 pt-2">
          Pasul 4 — Așteaptă preavizul de 30 de zile
        </h3>
        <p className="text-slate-700 leading-relaxed">
          Contractul se închide la 30 de zile de la data primirii cererii. În
          această perioadă folosești în continuare serviciile normal, plătești
          factura ca de obicei.
        </p>

        <h3 className="text-xl font-semibold text-slate-900 pt-2">
          Pasul 5 — Verifică factura finală
        </h3>
        <p className="text-slate-700 leading-relaxed">
          După încetare, operatorul emite factura finală în maxim 30 zile. Aici
          apar eventualele penalizări de reziliere anticipată. Verifică dacă
          suma corespunde estimării inițiale. Dacă e diferență semnificativă,
          poți contesta la operator sau la ANPC.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Portarea numărului: rezilierea automată
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Dacă vrei să treci la alt operator dar să-ți păstrezi numărul, procesul
          e mult mai simplu:
        </p>
        <ol className="list-decimal pl-6 space-y-2 text-slate-700">
          <li>Alegi noul operator și abonamentul dorit</li>
          <li>Completezi cererea de portare la noul operator (în magazin sau online)</li>
          <li>
            Noul operator gestionează AUTOMAT rezilierea cu vechiul — nu mai
            trimiți tu nicio cerere separată
          </li>
          <li>În 1-3 zile lucrătoare, numărul e activ la noul operator</li>
        </ol>
        <p className="text-slate-700 leading-relaxed">
          <strong>Atenție:</strong> dacă ești în angajament la vechiul operator,
          plătești penalizările stabilite — indiferent că portezi sau reziliezi
          direct. Portarea nu te scutește de penalizări.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Greșeli frecvente pe care să le eviți
        </h2>
        <ol className="list-decimal pl-6 space-y-3 text-slate-700">
          <li>
            <strong>Renunțare doar prin telefon la call-center.</strong> Fără
            dovadă scrisă, operatorul poate spune că nu a primit cererea și
            continuă să te factureze.
          </li>
          <li>
            <strong>Neplata facturilor „pentru că vrei să reziliezi".</strong>{' '}
            Restanțele se cumulează, ești raportat la Biroul de Credite. Chiar
            dacă ești nemulțumit, plătește la termen, apoi trimite cererea.
          </li>
          <li>
            <strong>Ignorarea perioadei de angajament.</strong> Rezilierea în
            prima lună a unui contract de 24 luni te poate costa 500-2000 lei.
            Verifică ÎNAINTE.
          </li>
          <li>
            <strong>Nu verifici factura finală.</strong> Operatorii pot include
            costuri greșite. Compară cu estimarea inițială și cu contractul.
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
          Ai înțeles procedura. Acum poți completa cererea în 2 minute — alegi
          operatorul, tipul de serviciu, semnezi cu mouse-ul și descarci
          PDF-ul. Îl trimite prin poștă sau depune-l la magazin. Nu-ți salvăm
          datele nicăieri.
        </p>
        <Link
          href="/cereri/reziliere-telefonie"
          className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-medium px-6 py-3 rounded-md transition"
        >
          Generează cererea de reziliere →
        </Link>

        <hr className="border-slate-200 my-8" />

        <p className="text-sm text-slate-500">
          <strong>Notă:</strong> Acest articol acoperă situațiile uzuale
          conform Codului Consumului (OG 21/1992) și reglementărilor ANCOM
          privind serviciile de comunicații electronice. Pentru dispute
          complexe sau sume mari contestate, consultă un avocat sau contactează
          direct ANPC / ANCOM.
        </p>
      </article>
    </div>
  )
}
