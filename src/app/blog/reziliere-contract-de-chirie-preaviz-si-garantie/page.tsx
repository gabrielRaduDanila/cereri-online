import type { Metadata } from 'next'
import Link from 'next/link'
import { getArticol } from '@/lib/articole'
import { buildArticleJsonLd } from '@/lib/structured-data'

const meta = getArticol('reziliere-contract-de-chirie-preaviz-si-garantie')!

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
    intrebare: 'Cât e preavizul standard pentru rezilierea chiriei?',
    raspuns:
      'Preavizul se stabilește prin contract și e cel care se aplică. Dacă nu e prevăzut explicit, jurisprudența acceptă un termen rezonabil — de obicei 30 de zile pentru chiriaș și 60 de zile pentru proprietar. Verifică întotdeauna clauza din contractul tău înainte să transmiți notificarea.',
  },
  {
    intrebare: 'Proprietarul poate refuza să-mi returneze garanția?',
    raspuns:
      'Nu, dacă apartamentul e predat în starea inițială (uzura normală acceptabilă) și nu ai datorii la chirie sau utilități. Poate reține din garanție doar sumele documentate — chirie neplătită, facturi neachitate, reparații necesare pentru deteriorări dovedite. Trebuie să prezinte facturi sau devize, nu estimări.',
  },
  {
    intrebare: 'Trebuie să plătesc dacă plec înainte de expirarea contractului?',
    raspuns:
      'Depinde de contract. Multe contracte prevăd „penalizări" (o chirie sau două) dacă rezilierezi înainte de termen fără motiv temeinic. Dacă contractul nu prevede nimic, respecți doar preavizul și nu datorezi nimic în plus. Excepția: motivele temeinice (transfer serviciu, apartament impropriu locuirii) reduc sau elimină penalizările.',
  },
  {
    intrebare: 'Ce fac dacă proprietarul refuză să semneze procesul-verbal de predare?',
    raspuns:
      'Redactezi procesul-verbal unilateral, cu descrierea detaliată a stării apartamentului și fotografii datate. Trimiți o copie proprietarului prin poștă cu confirmare de primire. Absența semnăturii lui nu te absolvă de răspundere, dar dovada trimiterii îți oferă o poziție solidă dacă apare un litigiu ulterior.',
  },
  {
    intrebare: 'Notificarea de reziliere trebuie autentificată notarial?',
    raspuns:
      'Nu, cu excepția cazurilor în care contractul o cere expres. E suficient ca notificarea să fie scrisă, semnată și transmisă printr-un mijloc care lasă dovadă: predare directă cu semnătură de primire, poștă cu confirmare (AR) sau e-mail cu confirmare de citire. Recomandat: poșta cu AR — e cel mai greu de contestat.',
  },
]

export default function ArticolRezilierChirie() {
  const jsonLd = buildArticleJsonLd(
    meta,
    intrebariFrecvente,
    'Reziliere contract chirie'
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
        <span className="text-slate-700">Reziliere contract chirie</span>
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
          Rezilierea chiriei pare simplă până când proprietarul refuză să
          returneze garanția sau chiriașul dispare fără să lase cheile. Cele mai
          multe conflicte au aceeași cauză: notificarea scrisă lipsește, e
          neclară sau nu ajunge la timp. Iată cum faci corect fiecare pas.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Cine poate rezilia și în ce condiții
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Contractul de închiriere poate fi reziliat de oricare dintre părți,
          dar în condiții diferite:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>
            <strong>Chiriașul</strong> poate pleca oricând, respectând preavizul
            din contract. Nu-i trebuie motiv, dar dacă are unul temeinic
            (transfer, probleme de locuit), penalizările pot fi negociate sau
            evitate.
          </li>
          <li>
            <strong>Proprietarul</strong> poate cere plecarea chiriașului doar
            pentru cauze clare: neplata chiriei pe minim 2 luni consecutive,
            deteriorări majore, folosirea apartamentului contrar destinației
            (activitate comercială într-un spațiu declarat de locuit).
          </li>
          <li>
            <strong>Ambele părți</strong> pot rezilia amiabil, printr-un act
            adițional scris — cea mai curată variantă când e posibilă.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Preavizul: cum se calculează
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Termenul de preaviz e cel scris în contract. Dacă contractul nu
          spune nimic, se aplică un termen rezonabil — de regulă 30 de zile
          pentru chiriaș, 60 pentru proprietar (mai lung ca să dea timp
          chiriașului să găsească alt apartament).
        </p>
        <p className="text-slate-700 leading-relaxed">
          Preavizul curge de la data la care notificarea ajunge efectiv la
          cealaltă parte — nu de la data la care ai scris-o sau ai trimis-o.
          Deci, dacă ai preaviz 30 de zile și trimiți notificarea pe 1
          septembrie, iar cealaltă parte o primește pe 5 septembrie,
          contractul încetează pe 5 octombrie, nu 1 octombrie.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Cum arată o notificare corectă
        </h2>
        <p className="text-slate-700 leading-relaxed">
          O notificare validă conține câteva elemente obligatorii, altfel poate
          fi contestată:
        </p>
        <ol className="list-decimal pl-6 space-y-2 text-slate-700">
          <li>Datele complete ale părților (nume, CNP, adresă)</li>
          <li>
            Identificarea contractului — numărul, data încheierii, adresa
            imobilului
          </li>
          <li>
            Menționarea expresă a intenției de reziliere și temeiul (articol
            din contract sau motivul concret)
          </li>
          <li>Termenul de preaviz aplicabil și data efectivă de încetare</li>
          <li>
            Modalitatea de predare-primire a imobilului (dată, oră, adresă)
          </li>
          <li>Data, semnătura și, dacă e posibil, două exemplare</li>
        </ol>

        <div className="bg-blue-700 text-white rounded-lg p-5 my-4">
          <p className="font-semibold mb-2">
            🚀 Generează notificarea în 2 minute
          </p>
          <p className="text-sm text-blue-50 mb-3">
            Completezi datele contractului, alegi termenul de preaviz și
            motivul. Semnezi cu mouse-ul și descarci PDF-ul.
          </p>
          <Link
            href="/cereri/reziliere-chirie"
            className="inline-block bg-white text-blue-700 font-medium px-4 py-2 rounded-md hover:bg-slate-100 transition"
          >
            Deschide generatorul →
          </Link>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Cum o transmiți
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Trei variante recomandate, ordonate după siguranță juridică:
        </p>
        <p className="text-slate-700 leading-relaxed">
          <strong>Poștă cu confirmare de primire (AR).</strong> Cea mai sigură.
          Ai dovada scrisă a datei la care cealaltă parte a primit
          notificarea. De la acea dată curge preavizul. Costă 15-25 lei, dar
          te scutește de discuții în instanță.
        </p>
        <p className="text-slate-700 leading-relaxed">
          <strong>Predare directă cu semnătură de primire.</strong> Duci
          notificarea în două exemplare, cealaltă parte semnează pe copia ta
          cu data și mențiunea „am primit exemplarul original". La fel de
          validă, dar depinde de disponibilitatea celeilalte părți.
        </p>
        <p className="text-slate-700 leading-relaxed">
          <strong>E-mail cu confirmare de citire.</strong> Legală, dar mai
          slabă probatoriu. Utilă pentru relații deja tensionate, unde
          predarea directă e imposibilă. Trimite pe adresa oficială din
          contract (dacă e specificată) sau pe cea folosită curent în
          comunicare.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Ce se întâmplă cu garanția
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Garanția (de regulă o chirie sau două) trebuie returnată chiriașului
          la predarea apartamentului, mai puțin sumele pentru:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>Chirie neplătită la momentul plecării</li>
          <li>Facturi de utilități restante (curent, gaz, apă, internet)</li>
          <li>
            Reparații pentru deteriorări care depășesc uzura normală (perete
            spart, geam crăpat, obiecte sanitare defecte din vina chiriașului)
          </li>
        </ul>
        <p className="text-slate-700 leading-relaxed">
          <strong>Foarte important:</strong> reținerile trebuie documentate.
          Proprietarul e obligat să prezinte facturi, devize sau chitanțe
          pentru sumele reținute. „Estimările" verbale nu au valoare juridică.
        </p>
        <p className="text-slate-700 leading-relaxed">
          Uzura normală (pereți ușor mătăsiți după 2 ani, chiuvetă cu pete de
          calcar, parchet cu urme discrete) nu poate fi reținută din garanție.
          E riscul normal al proprietarului.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Procesul-verbal de predare la ieșire
        </h2>
        <p className="text-slate-700 leading-relaxed">
          La fel de important ca cel de intrare. Descrieți împreună starea
          apartamentului, cu accent pe: mobilă și electrocasnice (fotografii
          datate), pereți și pardoseală, obiecte sanitare, contoare cu
          indexuri și dată, chei predate. Ambele părți semnează, fiecare
          păstrează un exemplar.
        </p>
        <p className="text-slate-700 leading-relaxed">
          Dacă apar dispute despre starea unor elemente, notați-le explicit
          („chiriașul susține că zgârietura pe parchet exista la intrare,
          proprietarul susține că nu"). Un proces-verbal cu dispute e mai
          bun decât unul nesemnat sau inexistent.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Cum eviți conflictele
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Cele mai multe litigii apar din trei cauze pe care le poți neutraliza
          din start:
        </p>
        <p className="text-slate-700 leading-relaxed">
          Fotografiază apartamentul la intrare cu telefonul (data e stampată
          automat). Fă același lucru la ieșire. Compararea celor două seturi
          rezolvă 90% din discuțiile despre „stricăciuni".
        </p>
        <p className="text-slate-700 leading-relaxed">
          Plătește ultimele facturi înainte de predare și cere dovada
          plății. Un chiriaș care lasă restanțe pierde garanția și, uneori,
          ajunge dat în judecată.
        </p>
        <p className="text-slate-700 leading-relaxed">
          Predă cheile cu semnătură. Fără dovadă scrisă că le-ai predat,
          proprietarul poate pretinde că nu le-a primit și cere o zi în plus
          de chirie sau costul schimbării butucului.
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
          href="/cereri/reziliere-chirie"
          className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-medium px-6 py-3 rounded-md transition mt-6"
        >
          Generează notificarea de reziliere →
        </Link>

        <hr className="border-slate-200 my-8" />

        <p className="text-sm text-slate-500">
          <strong>Notă:</strong> Termenii concreți (preaviz, penalizări,
          modul de retur al garanției) depind de contractul tău. Verifică
          întotdeauna clauzele înainte să transmiți o notificare. Pentru
          litigii cu miză mare (sume peste 5.000 lei, imobile deteriorate
          grav), consultă un avocat.
        </p>
      </article>
    </div>
  )
}
