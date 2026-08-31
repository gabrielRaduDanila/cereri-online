import type { Metadata } from 'next'
import Link from 'next/link'
import { getArticol } from '@/lib/articole'
import { buildArticleJsonLd } from '@/lib/structured-data'

const meta = getArticol('model-cerere-solicitare-orice-institutie')!

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
    intrebare: 'Ce diferență e între o cerere generală și una specifică?',
    raspuns:
      'O cerere specifică (concediu, demisie, adeverință) folosește o formulă și cadru legal deja stabilit — poți lua modelul de-a gata. Cererea generală se scrie când solicitarea ta nu se încadrează într-un tipar cunoscut: o clarificare, o autorizație atipică, un răspuns la o notificare, o propunere adresată unei instituții. Structura e aceeași, doar obiectul diferă.',
  },
  {
    intrebare: 'În cât timp trebuie să primesc răspuns?',
    raspuns:
      'La instituții publice, termenul standard e 30 de zile de la data înregistrării, conform OG 27/2002 privind soluționarea petițiilor. Poate fi prelungit cu maxim 15 zile, cu notificare motivată. La firme private, termenul depinde de contract sau de politica internă — nu există un termen legal universal. Recomandat: să ceri explicit un termen în cererea ta („vă rog să-mi comunicați răspunsul în termen de X zile").',
  },
  {
    intrebare: 'Pot cere mai multe lucruri într-o singură cerere?',
    raspuns:
      'Tehnic da, dar nu e recomandat. Cererile cu obiect unic se procesează mai repede și de departamente potrivite. Dacă ai trei solicitări diferite, depui trei cereri separate — chiar dacă e aceeași instituție. Excepție: solicitări strâns legate între ele (adeverință + copie act din arhivă pentru același dosar).',
  },
  {
    intrebare: 'E obligatoriu să menționez CNP-ul?',
    raspuns:
      'Da, pentru toate cererile către instituții publice. Fără CNP corect, cererea nu poate fi înregistrată oficial și nu curge termenul legal. La instituții private (firme, ONG-uri), depinde — dar recomandat să-l pui pentru identificare fără ambiguitate. Excepție: dacă cererea vizează informații publice (Legea 544/2001), poți omite CNP-ul.',
  },
  {
    intrebare: 'Cum știu cui adresez cererea în cadrul instituției?',
    raspuns:
      'Verifică pe site-ul instituției — majoritatea au organigrama publicată sau, cel puțin, lista departamentelor cu contactele lor. Dacă nu găsești, adresezi cererea conducătorului instituției („Domnului Director General", „Domnului Ministru", „Domnului Primar") — registratura o direcționează intern către departamentul competent.',
  },
]

export default function ArticolCerereGenerala() {
  const jsonLd = buildArticleJsonLd(
    meta,
    intrebariFrecvente,
    'Model cerere solicitare'
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
        <span className="text-slate-700">Model cerere solicitare</span>
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
          Multe solicitări nu au un formular tip: o clarificare de la ANAF, o
          autorizație atipică, o propunere adresată unei firme, o cerere de
          informații publice. Pentru toate aceste situații funcționează
          același model universal — o cerere generală bine structurată. Iată
          exact cum arată și ce elemente o fac să nu fie întoarsă.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Când folosești o cerere generală
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Cererea generală e potrivită când solicitarea ta nu se încadrează
          într-un tipar deja stabilit. Exemple concrete:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>
            Cereri de clarificare de la ANAF, AJPIS, Casa de Pensii sau alte
            agenții
          </li>
          <li>
            Solicitări de eliberare a unor documente atipice din arhive
            (copii vechi, extrase de rol, situații istorice)
          </li>
          <li>
            Propuneri, sesizări sau observații adresate unei instituții
            publice (Legea 544/2001 pentru informații de interes public)
          </li>
          <li>
            Solicitări către firme private: reclamații, cereri de retragere
            din contract, cereri de rectificare a unei facturi
          </li>
          <li>
            Cereri de audiență, cereri de dialog, cereri de intervenție într-o
            situație particulară
          </li>
        </ul>
        <p className="text-slate-700 leading-relaxed">
          Pentru solicitări comune (demisie, concediu, adeverință, contract
          închiriere), folosește modelul dedicat — ai formulele și cadrul
          legal deja incluse.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Structura obligatorie
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Șapte elemente, în această ordine:
        </p>
        <ol className="list-decimal pl-6 space-y-3 text-slate-700">
          <li>
            <strong>Antetul cu destinatarul.</strong> „Către [numele complet
            al instituției/firmei]", pe rândul următor persoana adresată
            („Domnului Director General"), opțional și direcția/departamentul
            specific dacă îl cunoști.
          </li>
          <li>
            <strong>Datele tale.</strong> Nume complet, CNP, domiciliu,
            telefon și e-mail pentru contact. Fără CNP corect, cererea nu se
            înregistrează la instituții publice.
          </li>
          <li>
            <strong>Formula de deschidere.</strong> „Subsemnatul/Subsemnata …,
            având datele de mai sus, vă rog să …".
          </li>
          <li>
            <strong>Obiectul cererii — o singură frază.</strong> Ce ceri
            concret. Verb + rezultatul dorit. Nu „aș vrea să discutăm despre",
            ci „solicit eliberarea …", „vă rog să dispuneți …", „vă rog
            să-mi comunicați …".
          </li>
          <li>
            <strong>Motivarea.</strong> De ce ai nevoie. 2-4 rânduri
            obiective. Fără emoții, fără digresiuni, fără acuzații. Descrii
            faptic situația.
          </li>
          <li>
            <strong>Lista anexelor.</strong> Enumeri fiecare document
            atașat. Fără această listă, dacă „se pierde" un act, ești fără
            dovadă că l-ai depus.
          </li>
          <li>
            <strong>Data, semnătura, două exemplare.</strong> Data completă,
            semnătura olografă, un exemplar pentru instituție și unul pentru
            tine (cu numărul de înregistrare).
          </li>
        </ol>

        <div className="bg-blue-700 text-white rounded-lg p-5 my-4">
          <p className="font-semibold mb-2">
            🚀 Generează cererea în 2 minute
          </p>
          <p className="text-sm text-blue-50 mb-3">
            Completezi datele tale, instituția, obiectul și motivarea.
            Semnezi cu mouse-ul, descarci PDF-ul. Universal — pentru orice
            instituție publică sau privată.
          </p>
          <Link
            href="/cereri/cerere-generala"
            className="inline-block bg-white text-blue-700 font-medium px-4 py-2 rounded-md hover:bg-slate-100 transition"
          >
            Deschide generatorul →
          </Link>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Cum formulezi obiectul — cea mai importantă parte
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Obiectul e prima frază pe care o citește funcționarul și e ce
          decide dacă cererea ta e clară sau vagă. Reguli simple:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>
            <strong>Începe cu un verb concret</strong> care exprimă acțiunea
            cerută: eliberați, comunicați, aprobați, dispuneți, verificați,
            rectificați.
          </li>
          <li>
            <strong>Precizează rezultatul dorit</strong> — nu doar acțiunea.
            „Vă rog să verificați" e insuficient; „vă rog să verificați
            situația plății impozitului meu pe imobil pentru anul 2025 și
            să-mi comunicați soldul curent" e complet.
          </li>
          <li>
            <strong>O singură cerere pe frază.</strong> Dacă vrei două
            lucruri, două fraze — sau două cereri separate.
          </li>
          <li>
            <strong>Menționează temeiul legal dacă îl cunoști.</strong> „În
            temeiul Legii 544/2001", „conform art. X din Codul Muncii" —
            arată că știi contextul juridic și îngreunează refuzul nemotivat.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Anexele — ce să atașezi și cum
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Regula: atașezi tot ce sprijină cererea și e obligatoriu pentru
          soluționare, dar nimic în plus. Anexe standard, în funcție de tip
          cerere:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>
            <strong>Cerere de eliberare document</strong> — copie C.I.,
            dovada plății taxei de timbru (dacă e cazul)
          </li>
          <li>
            <strong>Cerere de verificare/clarificare</strong> — copiile
            documentelor la care faci referire (contract, factură, act
            anterior)
          </li>
          <li>
            <strong>Cerere de intervenție/sesizare</strong> — dovezi ale
            situației reclamate (fotografii, mesaje, procese-verbale)
          </li>
          <li>
            <strong>Cerere către instituție privată</strong> — copie
            contract, dovezi ale plăților, corespondența anterioară
          </li>
        </ul>
        <p className="text-slate-700 leading-relaxed">
          Enumeră fiecare anexă în cerere, cu titlu clar. Dacă lista lipsește
          și ceva „se pierde", nu poți dovedi ce ai depus efectiv.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Cum o depui
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Patru variante, ordonate după siguranța juridică:
        </p>
        <p className="text-slate-700 leading-relaxed">
          <strong>La registratura instituției/firmei.</strong> Primești
          număr de înregistrare pe loc, cu dată și oră. De la acea dată curge
          termenul de răspuns. Copia ta poartă ștampilă și număr. Cea mai
          sigură variantă.
        </p>
        <p className="text-slate-700 leading-relaxed">
          <strong>Prin poștă cu confirmare de primire (AR).</strong> Termenul
          curge de la data la care instituția primește plicul, nu de la
          expediere. Recipisa AR e dovada ta. Costă 15-25 lei.
        </p>
        <p className="text-slate-700 leading-relaxed">
          <strong>Prin e-mail la adresa oficială.</strong> Atașezi cererea în
          PDF (semnată digital sau scan) plus copie C.I. Instituțiile
          publice sunt obligate să accepte cereri prin e-mail, dar unele
          agenții mici o tratează cu întârziere.
        </p>
        <p className="text-slate-700 leading-relaxed">
          <strong>Prin ghiseul.ro sau portalul instituției.</strong> Comod,
          dar nu toate instituțiile sunt conectate.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Greșeli frecvente
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Cererile care primesc răspuns întârziat sau sunt returnate au
          aproape întotdeauna una din problemele astea:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>Obiect vag („o problemă", „situația mea", „o clarificare")</li>
          <li>Multiple cereri amestecate într-un singur text</li>
          <li>
            Ton emoțional sau acuzator care reduce credibilitatea, chiar când
            ai dreptate
          </li>
          <li>Lipsa CNP-ului sau a semnăturii</li>
          <li>
            Anexe atașate dar nemenționate — devin invizibile în caz de
            dispută
          </li>
          <li>
            Adresarea către persoana greșită (funcționarul de la registratură
            nu poate soluționa nimic)
          </li>
        </ul>

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
          Generează cererea de solicitare →
        </Link>

        <hr className="border-slate-200 my-8" />

        <p className="text-sm text-slate-500">
          <strong>Notă:</strong> Termenele și procedurile menționate se
          bazează pe OG 27/2002 privind soluționarea petițiilor și Legea
          544/2001 privind accesul la informații de interes public. Pentru
          situații complexe sau litigii, consultă un avocat sau un
          consultant specializat.
        </p>
      </article>
    </div>
  )
}
