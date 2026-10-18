import type { Metadata } from 'next'
import Link from 'next/link'
import { getArticol } from '@/lib/articole'
import { buildArticleJsonLd } from '@/lib/structured-data'

const meta = getArticol('cerere-restituire-bani-produs-defect-garantie')!

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
      'Vânzătorul îmi spune că trebuie să mă adresez direct producătorului. Are dreptate?',
    raspuns:
      'Nu. Potrivit Legii 449/2003 (art. 9-10), vânzătorul este cel direct răspunzător față de consumator pentru conformitatea produsului, pe toată perioada garanției legale de 2 ani. „Trimiterea" la producător este o practică comercială abuzivă pe care ANPC o sancționează regulat. Vânzătorul poate ulterior recupera de la producător, dar asta îl privește pe el, nu pe tine.',
  },
  {
    intrebare:
      'Pot cere direct restituirea banilor, sau trebuie să trec întâi prin reparație?',
    raspuns:
      'Legea prevede o ierarhie, dar nu rigidă. Întâi se încearcă repararea sau înlocuirea, în termen rezonabil (uzual 15-30 zile). Dacă reparația nu e posibilă, dacă durează disproporționat, sau dacă defectul reapare după reparație, poți cere direct rezoluțiunea contractului (restituirea banilor). La defecte majore descoperite imediat după cumpărare (produs nefuncțional la deschidere), poți cere direct restituirea.',
  },
  {
    intrebare: 'Am pierdut bonul fiscal. Îmi pot face reclamația?',
    raspuns:
      'Da. Dovada cumpărării nu înseamnă obligatoriu bon fiscal. Extrasul de card, factura, SMS-ul de confirmare a comenzii online, emailul de la vânzător, chiar și o fotografie veche cu bonul — toate funcționează. Vânzătorii care îți spun „fără bon fiscal, nu facem nimic" încalcă art. 70 din OUG 21/1992 privind protecția consumatorilor.',
  },
  {
    intrebare:
      'Produsul s-a defectat după 14 luni. Mai pot cere ceva, dacă garanția comercială era doar 12 luni?',
    raspuns:
      'Da, și e un punct important de confuzie. Garanția COMERCIALĂ (12 luni, în exemplul tău) e cea oferită voluntar de vânzător sau producător. Dar peste ea există garanția LEGALĂ, de 2 ani, care te acoperă pentru orice defect de conformitate, indiferent ce scrie în certificatul comercial. În practică: după 12 luni, vânzătorul îți poate cere o expertiză pentru a dovedi că defectul exista de la cumpărare, dar NU poate refuza din principiu intervenția.',
  },
  {
    intrebare: 'Am cumpărat online și vreau să mă răzgândesc. În cât timp?',
    raspuns:
      'Pentru cumpărăturile online de la profesioniști, OUG 34/2014 (art. 9) îți acordă 14 zile calendaristice de retragere, fără să trebuiască să dai motiv. Termenul curge de la data livrării. Vânzătorul e obligat să îți returneze toți banii, inclusiv transportul inițial standard, în 14 zile de la primirea notificării. Excepție importantă: produsele personalizate, sigilate și desigilate (igienă), produse perisabile, software descărcat.',
  },
]

export default function ArticolRestituireBani() {
  const jsonLd = buildArticleJsonLd(
    meta,
    intrebariFrecvente,
    'Cerere restituire bani'
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
        <span className="text-slate-700">Cerere restituire bani</span>
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
          Diferența între consumatorul care își primește banii înapoi și cel
          care renunță după „trei drumuri la magazin" nu este dreptul legal —
          îl aveți amândoi. Diferența este formularea cererii și cunoașterea
          articolelor concrete pe care te bazezi. Un vânzător care primește
          „aș vrea să-mi dați banii" răspunde altfel decât unul care citește
          „în temeiul art. 11 din Legea 449/2003, solicit rezoluțiunea
          contractului". Primul discurs e negociere. Al doilea e procedură.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Garanția legală vs. garanția comercială — distincția care schimbă tot
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Această confuzie e cea mai costisitoare pentru consumatori. Când un
          vânzător îți spune „produsul are garanție 12 luni, a trecut
          termenul", îți vorbește despre garanția COMERCIALĂ — cea voluntară,
          oferită de el sau de producător. E un angajament comercial, nu
          limita drepturilor tale.
        </p>
        <p className="text-slate-700 leading-relaxed">
          Peste ea există garanția LEGALĂ, prevăzută în Legea 449/2003 (acum
          completată prin OUG 140/2021 care transpune Directiva UE 771/2019).
          Termen: <strong>2 ani de la livrare</strong>, pentru orice defect
          de conformitate. Pentru produsele cu elemente digitale (televizoare
          smart, telefoane, electrocasnice conectate), termenul se poate
          extinde până la perioada rezonabilă de funcționare a software-ului.
        </p>
        <p className="text-slate-700 leading-relaxed">
          Un detaliu tehnic esențial: în primele 12 luni, se prezumă că
          defectul exista de la cumpărare — vânzătorul trebuie să dovedească
          contrariul. După 12 luni, povara probei trece la consumator. Asta
          înseamnă că o expertiză devine necesară, dar nu înseamnă că
          pierzi dreptul.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Cele trei remedii — și ordinea lor corectă
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Legea nu îți dă dreptul să alegi direct ce vrei (bani înapoi). Îți
          oferă o ierarhie de remedii, dar cu excepții clare care îți permit
          să sari peste etape.
        </p>
        <p className="text-slate-700 leading-relaxed">
          <strong>1. Reparația sau înlocuirea</strong> (prima opțiune). Fără
          costuri pentru tine, în termen rezonabil — jurisprudența ANPC
          plafonează acest „rezonabil" la 15 zile pentru electronice uzuale
          și 30 zile pentru electrocasnice mari. Peste aceste termene, poți
          invoca neconformitatea remediului.
        </p>
        <p className="text-slate-700 leading-relaxed">
          <strong>2. Reducerea prețului</strong> (dacă acceptați produsul în
          starea actuală). Rar folosită în practică, dar e opțiunea legală.
        </p>
        <p className="text-slate-700 leading-relaxed">
          <strong>3. Rezoluțiunea contractului</strong> — restituirea
          integrală a banilor. Poți cere direct această variantă în trei
          situații: defectul e major (produs practic inutilizabil), reparația
          nu e posibilă sau durează disproporționat, defectul reapare după o
          reparație. Nu trebuie să aștepți „trei reparații eșuate" cum
          vehiculează unele magazine — e un mit comercial, nu un articol de
          lege.
        </p>

        <div className="bg-blue-700 text-white rounded-lg p-5 my-4">
          <p className="font-semibold mb-2">
            🚀 Generează cererea în 2 minute
          </p>
          <p className="text-sm text-blue-50 mb-3">
            Model universal de cerere, cu temei legal corect. Completezi
            datele vânzătorului, obiectul concret (reparație / restituire),
            semnezi și depui la magazin sau trimiți prin poștă cu AR.
          </p>
          <Link
            href="/cereri/cerere-generala"
            className="inline-block bg-white text-blue-700 font-medium px-4 py-2 rounded-md hover:bg-slate-100 transition"
          >
            Deschide generatorul →
          </Link>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Cum arată o cerere care funcționează
        </h2>
        <p className="text-slate-700 leading-relaxed">
          O cerere de restituire pe care vânzătorul o ia în serios conține
          obligatoriu cinci elemente, în ordine:
        </p>
        <p className="text-slate-700 leading-relaxed">
          <strong>Identificarea precisă a tranzacției.</strong> Numărul
          bonului fiscal sau al facturii, data cumpărării, numele produsului
          cu codul lui (SKU, cod intern), prețul plătit. Fără aceste date,
          cererea e tratată ca „plângere generică".
        </p>
        <p className="text-slate-700 leading-relaxed">
          <strong>Descrierea factuală a defectului.</strong> Fără emoții,
          fără acuzații. „Produsul nu se mai aprinde", „apare mesajul X la
          pornire", „componenta Y s-a desprins fizic". Dacă ai fotografii sau
          înregistrări video — menționează-le explicit și atașează-le.
        </p>
        <p className="text-slate-700 leading-relaxed">
          <strong>Temeiul legal.</strong> Aici se face diferența. Formulări
          care funcționează: „În temeiul art. 11 alin. (4) lit. c) din Legea
          449/2003 privind vânzarea produselor și garanțiile asociate, având
          în vedere imposibilitatea reparării în termen rezonabil, solicit
          rezoluțiunea contractului și restituirea integrală a sumei de X lei."
          Vânzătorul care primește o astfel de cerere știe că se vorbește
          serios.
        </p>
        <p className="text-slate-700 leading-relaxed">
          <strong>Termenul de soluționare.</strong> Impune un termen explicit:
          „Vă rog să-mi comunicați decizia în termen de 15 zile de la
          înregistrarea prezentei cereri." Peste termen, ai dreptul să
          escaladezi la ANPC fără alte formalități.
        </p>
        <p className="text-slate-700 leading-relaxed">
          <strong>Modalitatea preferată de contact și IBAN-ul.</strong>
          Pregătit pentru caz că acceptă restituirea rapid. Dacă nu-l ceri,
          îți vor cere date suplimentare și vor câștiga 1-2 săptămâni.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Cum o depui — alegerea care contează
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Depunerea la ghișeul magazinului e cea mai rapidă, dar nu
          întotdeauna cea mai sigură. Angajații de la casa de marcat refuză
          uneori să înregistreze oficial o reclamație — „duceți-vă la Service".
          Dacă se întâmplă asta, insistă pentru înregistrare în registrul
          unic de reclamații al magazinului (obligatoriu prin lege, art. 71
          OUG 21/1992), cu număr și dată.
        </p>
        <p className="text-slate-700 leading-relaxed">
          Alternativa sigură: poșta cu confirmare de primire (AR) către
          sediul social al vânzătorului (nu către magazin). ANAF publică
          sediile sociale pe site, le găsești în 2 minute după CUI. Termenul
          legal curge de la data primirii confirmată prin AR. Costă 15-25 lei
          dar îți elimină orice ambiguitate.
        </p>
        <p className="text-slate-700 leading-relaxed">
          Pentru cumpărături online, varianta digitală funcționează la fel —
          e-mail la adresa oficială publicată pe site, cu confirmare de
          citire activată. Multe magazine au formular online dedicat pentru
          reclamații; folosește-l DAR trimite și e-mailul separat ca
          back-up probatoriu.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Când vânzătorul refuză — pașii următori
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Un refuz nemotivat sau peste termenul legal nu te lasă fără
          soluții. Prima escaladare: <strong>ANPC</strong> (Autoritatea
          Națională pentru Protecția Consumatorilor). Reclamație online pe
          anpc.ro — gratuită, răspuns în 30 zile. ANPC poate aplica amenzi
          între 2.000 și 20.000 lei, și, mai important pentru tine, poate
          dispune soluționarea cererii.
        </p>
        <p className="text-slate-700 leading-relaxed">
          A doua opțiune: <strong>SAL-Fin</strong> (pentru servicii
          financiare) sau <strong>centrele europene ale consumatorilor</strong>
          {' '}(pentru cumpărături transfrontaliere). Rezoluție alternativă a
          litigiilor, fără instanță, fără costuri.
        </p>
        <p className="text-slate-700 leading-relaxed">
          Ultima soluție — <strong>instanța de judecată</strong>, de obicei
          cerere de valoare redusă (sub 10.000 lei, procedură simplificată).
          Taxa de timbru pentru astfel de cereri e de 50 lei. Realitatea
          practică: 95% din litigiile de consum se rezolvă până aici, prin
          ANPC. Instanța rămâne pentru sume mari sau cazuri cu vicii ascunse
          complexe.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Trei greșeli care îți reduc șansele
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Peste zecile de cazuri care eșuează, se repetă aceleași tipare.
          Primul: aștepți prea mult. După 2 ani de la cumpărare, garanția
          legală dispare — chiar dacă defectul exista cu luni înainte. Nu
          lăsa „să mai încercăm" să mănânce timpul.
        </p>
        <p className="text-slate-700 leading-relaxed">
          Al doilea: accepți compensații verbale fără document scris. „Vă
          trimitem alt produs săptămâna viitoare" dispare dacă nu ai un
          răspuns scris la cererea ta inițială. Insistă pentru răspuns în
          scris, cu număr de înregistrare.
        </p>
        <p className="text-slate-700 leading-relaxed">
          Al treilea: te mulțumești cu voucher în loc de bani. Mulți
          vânzători ofera „voucher valoare dublă" ca să evite restituirea
          cash. E opțiunea TA dacă îl accepți — dar amintește-ți că legea îți
          dă dreptul la banii înapoi, nu la credit comercial.
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
          Generează cererea cu temei legal corect →
        </Link>

        <hr className="border-slate-200 my-8" />

        <p className="text-sm text-slate-500">
          <strong>Notă:</strong> Articolul reflectă legislația românească și
          europeană aplicabilă la data publicării. Pentru litigii cu valoare
          mare, produse cu regim special (medical, auto, imobiliar) sau
          cazuri complexe (vicii ascunse, răspundere a producătorului),
          consultarea unui avocat specializat în protecția consumatorului
          rămâne recomandată. Nu reprezintă consultanță juridică
          personalizată.
        </p>
      </article>
    </div>
  )
}
