import type { Metadata } from 'next'
import Link from 'next/link'
import { getArticol } from '@/lib/articole'
import { buildArticleJsonLd } from '@/lib/structured-data'

const meta = getArticol('anexa-contract-inchiriere-apartament-proces-verbal')!

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
    intrebare: 'E obligatorie anexa de proces-verbal la contractul de închiriere?',
    raspuns:
      'Nu e obligatorie prin lege, dar este o practică esențială pentru ambele părți. Fără ea, în caz de dispută la ieșirea din chirie (daune, uzură, inventar), nimeni nu poate dovedi starea inițială a imobilului. Pentru proprietari e protecție împotriva daunelor, pentru chiriași e protecție împotriva reținerilor nejustificate din garanție.',
  },
  {
    intrebare: 'Trebuie să fac anexă și la ieșirea din chirie?',
    raspuns:
      'Da, obligatoriu. Un singur proces-verbal la intrare nu e suficient. La ieșirea din chirie se face un al doilea proces-verbal care compară starea actuală cu cea inițială. Ambele părți semnează. Dacă apar diferențe (deteriorări, piese lipsă din inventar), se consemnează explicit cu valoarea estimată.',
  },
  {
    intrebare: 'Ce fac dacă proprietarul refuză să semneze procesul-verbal?',
    raspuns:
      'Faci procesul-verbal unilateral, cu fotografii datate ale fiecărui element (contoare, pereți, mobilier, electrocasnice, chei). Trimiți o copie proprietarului prin poștă cu confirmare de primire. Fotografiile cu dată și dovada trimiterii îți oferă o poziție solidă dacă apare litigiu la restituirea garanției.',
  },
  {
    intrebare: 'Ce diferență e între „uzură normală" și „daună"?',
    raspuns:
      'Uzura normală: zgârieturi mici pe parchet după 2 ani, pete de calcar pe chiuvete, pereți ușor murdari lângă întrerupătoare, mici fisuri la zugrăveală. NU poate fi reținută din garanție. Daună: gaură în perete, obiect sanitar spart, parchet umflat de apă, mobilă stricată, geam spart. SE poate reține din garanție, cu dovezi (facturi, devize de reparație). Diferența o face vechimea contractului și intensitatea uzurii.',
  },
  {
    intrebare: 'Pot folosi același proces-verbal la mai multe chiriași?',
    raspuns:
      'Nu. Fiecare contract are nevoie de propria anexă, cu datele exacte la momentul intrării noului chiriaș. Contoarele au indexuri diferite, inventarul se poate schimba (electrocasnice noi, mobilă schimbată), starea se modifică. Un proces-verbal „refolosit" nu are valoare juridică.',
  },
]

export default function ArticolAnexaContract() {
  const jsonLd = buildArticleJsonLd(
    meta,
    intrebariFrecvente,
    'Anexa contract închiriere'
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
        <span className="text-slate-700">Anexa contract închiriere</span>
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
          Un contract de închiriere fără anexa de proces-verbal e ca un
          contract de vânzare fără dovada stării obiectului vândut: funcționează
          până apare un conflict, apoi ambele părți sunt în pierdere. Anexa de
          proces-verbal e cea care, în caz de dispută la ieșirea din chirie,
          decide cine are dreptate și cu cât.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Ce este anexa de proces-verbal
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Un document separat, semnat de ambele părți (proprietar și chiriaș)
          în aceeași zi cu contractul de închiriere, care descrie exact starea
          imobilului la momentul predării și listează toate elementele care
          se predau odată cu el. Nu înlocuiește contractul — îl completează.
        </p>
        <p className="text-slate-700 leading-relaxed">
          Juridic funcționează ca „situație de referință": orice modificare
          între starea descrisă în proces-verbal și starea de la ieșirea
          chiriașului se consideră consecință a chiriei. Fără acest document
          de referință, orice reținere din garanție poate fi contestată.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Ce trebuie să conțină
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Șase categorii obligatorii, în această ordine:
        </p>
        <ol className="list-decimal pl-6 space-y-3 text-slate-700">
          <li>
            <strong>Datele părților și identificarea contractului.</strong>{' '}
            Nume complet, CNP și CI pentru proprietar și chiriaș. Numărul și
            data contractului de închiriere la care anexa se referă.
            Adresa exactă a imobilului.
          </li>
          <li>
            <strong>Citirea contoarelor</strong> — cu valorile exacte la
            momentul predării: electricitate (kWh), gaze naturale (mc), apă
            rece (mc), apă caldă (mc), eventual gigacalorii dacă e încălzire
            centralizată. Fără aceste cifre, decontarea finală la ieșire
            devine o estimare.
          </li>
          <li>
            <strong>Numărul de chei predate</strong> — câte chei pentru ușa
            principală, cheia de la bloc/scară, telecomandă pentru parcare,
            cartelă interfon. Fiecare element contează.
          </li>
          <li>
            <strong>Starea pereților și pardoselii</strong> — zugrăveală
            recentă sau veche, zgârieturi vizibile, defecte structurale (dacă
            e cazul), tipul și starea parchetului/gresiei.
          </li>
          <li>
            <strong>Inventarul mobilierului și electrocasnicelor</strong> —
            lista completă a bunurilor care rămân în locuință pe durata
            chiriei. Pentru electrocasnice: marca, modelul (dacă e vizibil)
            și starea de funcționare.
          </li>
          <li>
            <strong>Observații speciale</strong> — defecte estetice preexistente
            (zgârieturi pe mobilă, pete pe pereți, geamuri cu probleme), pe
            care chiriașul nu trebuie să le repare la ieșire.
          </li>
        </ol>

        <div className="bg-blue-700 text-white rounded-lg p-5 my-4">
          <p className="font-semibold mb-2">
            🚀 Model complet gratuit — contract + anexa
          </p>
          <p className="text-sm text-blue-50 mb-3">
            Generatorul nostru produce PDF cu 2 pagini: contractul de închiriere
            + anexa proces-verbal, cu toate câmpurile prevăzute. Ambele
            semnături (proprietar + chiriaș), descărcare instant.
          </p>
          <Link
            href="/cereri/contract-inchiriere"
            className="inline-block bg-white text-blue-700 font-medium px-4 py-2 rounded-md hover:bg-slate-100 transition"
          >
            Deschide generatorul →
          </Link>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Fotografiile — asigurarea de rezervă
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Oricât de detaliat ai scrie procesul-verbal, textul nu poate
          descrie culoarea exactă a unui perete sau nuanța de zgârietură pe
          parchet. Fotografiile da. Fă 20-40 de poze în ziua predării, cu
          telefonul (data e stampată automat), de la:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>Fiecare perete al fiecărei camere, de la 1-2 metri distanță</li>
          <li>Fiecare obiect sanitar (chiuvete, WC, cadă/duș, baterii)</li>
          <li>
            Fiecare electrocasnic (plită, cuptor, frigider, mașină de spălat)
          </li>
          <li>Fiecare colț de mobilier mai vulnerabil (uși dulap, canapea)</li>
          <li>Contoarele cu displayul vizibil și numărul lor serial</li>
          <li>Pardoseala în zonele cu uzură (bucătărie, hol, intrare)</li>
        </ul>
        <p className="text-slate-700 leading-relaxed">
          Salvezi fotografiile în 2 locuri (telefon + cloud/email). Trimiți
          un email cu toate pozele către proprietar, cu titlu „Proces-verbal
          predare — [adresa] — [data]". E dovada ta de necontestat că
          imobilul arăta așa la intrare.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Al doilea proces-verbal — la ieșirea din chirie
        </h2>
        <p className="text-slate-700 leading-relaxed">
          La fel de important ca cel de la intrare. În ziua predării cheilor,
          reconstituiți împreună procesul: citiți contoarele (cu valorile
          finale), verificați inventarul (ce lipsește, ce e deteriorat),
          evaluați starea pereților și pardoselii.
        </p>
        <p className="text-slate-700 leading-relaxed">
          Pentru fiecare element modificat față de starea inițială, notați:
          natura modificării (zgârietură, pată, piesă lipsă), responsabilitatea
          (uzură normală sau daună a chiriașului), eventual valoarea estimată
          a reparației. Dacă nu există consens pe un punct, notați dezacordul
          explicit — „chiriașul susține X, proprietarul susține Y".
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Greșeli frecvente
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Cele mai dese probleme care duc la litigii:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>
            <strong>Anexa generică, fără detalii.</strong> „Apartament în
            stare bună, cu mobilă" nu înseamnă nimic juridic. Fiecare element
            trebuie listat cu stare specifică.
          </li>
          <li>
            <strong>Citiri de contoare lipsă.</strong> Fără aceste cifre,
            decontarea finală la ieșire se face „din amintire" — sursă clasică
            de conflict.
          </li>
          <li>
            <strong>Inventar vag.</strong> „Mobilier complet" vs. „Canapea 3
            locuri gri (defect mic pe cotieră dreapta), masă living cu 4
            scaune, dulap dormitor cu 2 uși, pat dublu cu saltea" — e
            diferența între litigiu și claritate.
          </li>
          <li>
            <strong>Un singur exemplar.</strong> Procesul-verbal se face în 2
            exemplare, unul pentru fiecare parte. Dacă proprietarul reține
            singurul exemplar, chiriașul rămâne fără dovadă.
          </li>
          <li>
            <strong>Fără proces-verbal la ieșire.</strong> Cea mai costisitoare
            greșeală pentru chiriași. Garanția poate fi reținută integral
            fără posibilitate de contestare.
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
          href="/cereri/contract-inchiriere"
          className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-medium px-6 py-3 rounded-md transition mt-6"
        >
          Generează contract + anexa proces-verbal →
        </Link>

        <hr className="border-slate-200 my-8" />

        <p className="text-sm text-slate-500">
          <strong>Notă:</strong> Modelele de proces-verbal sunt informative.
          Pentru contracte cu valoare mare, imobile de patrimoniu sau
          situații complexe (chirie comercială, închiriere parțială,
          indiviziune), consultă un notar sau avocat înainte de semnare.
        </p>
      </article>
    </div>
  )
}
