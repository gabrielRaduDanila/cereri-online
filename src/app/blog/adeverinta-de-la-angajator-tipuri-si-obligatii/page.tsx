import type { Metadata } from 'next'
import Link from 'next/link'
import { getArticol } from '@/lib/articole'
import { buildArticleJsonLd } from '@/lib/structured-data'

const meta = getArticol('adeverinta-de-la-angajator-tipuri-si-obligatii')!

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
    intrebare: 'În câte zile e obligat angajatorul să-mi dea adeverința?',
    raspuns:
      'Nu există un termen fix reglementat, dar practica și jurisprudența spun că e „un termen rezonabil" — uzual 3-5 zile lucrătoare. Dacă întârzie mai mult de 15 zile fără motiv, poți sesiza Inspecția Muncii (ITM).',
  },
  {
    intrebare: 'Poate angajatorul să refuze să-mi dea adeverință?',
    raspuns:
      'Nu. Este obligația legală a angajatorului să elibereze adeverințe la cererea salariatului, atât timp cât informațiile sunt reale și te privesc pe tine. Refuzul e sancționabil de ITM.',
  },
  {
    intrebare: 'Adeverința de venit trebuie ștampilată?',
    raspuns:
      'Da, în cele mai multe cazuri (bancă, viza, dosar șomaj). Trebuie ștampilă, semnătură conducere sau HR, și număr de înregistrare. Fără acestea, unele instituții o pot refuza.',
  },
  {
    intrebare: 'Cât timp e valabilă adeverința?',
    raspuns:
      'Depinde de cine o cere. Băncile o vor de obicei emisă în ultimele 30 zile. Ambasadele pentru viză — ultimele 15-30 zile. Instituțiile publice — până la 6 luni. Verifică cerințele exacte ale destinatarului înainte să o ceri.',
  },
  {
    intrebare: 'Pot cere adeverință și după ce am plecat de la firma?',
    raspuns:
      'Da. Angajatorul e obligat să elibereze adeverințe și pentru foști salariați (pentru dosarul de pensie, credit, sau alte scopuri). Se cere prin cerere scrisă către departamentul HR sau, dacă firma nu mai există, la Arhivele Naționale.',
  },
]

export default function ArticolAdeverintaAngajator() {
  const jsonLd = buildArticleJsonLd(
    meta,
    intrebariFrecvente,
    'Adeverință angajator'
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
        <span className="text-slate-700">Adeverință angajator</span>
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
          Te-ai lovit sigur de asta măcar o dată: banca cere adeverință de
          venit pentru un credit, ambasada cere adeverință de salariat pentru
          viză, sau HR-ul de la un nou angajator vrea adeverință de vechime.
          Angajatorul e obligat să ți-o dea — dar trebuie să știi ce ceri și
          cum ceri.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Ce tipuri de adeverință există
        </h2>
        <p className="text-slate-700 leading-relaxed">
          În practică sunt patru variante uzuale:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>
            <strong>Adeverință de salariat</strong> — confirmă doar că ești
            angajat, funcția și data de la care lucrezi. Cerută de ambasade,
            uneori de școli sau administrații.
          </li>
          <li>
            <strong>Adeverință de venit</strong> — arată salariul brut/net pe
            ultimele luni (uzual 3-6, uneori 12). Cerută mai ales de bănci
            pentru credit sau card.
          </li>
          <li>
            <strong>Adeverință de vechime în muncă</strong> — confirmă
            perioada exactă pe care ai lucrat la firmă și funcția deținută.
            Cerută pentru dosarul de pensie sau la angajatori noi.
          </li>
          <li>
            <strong>Adeverință de salariat și venit</strong> — combinația
            primelor două. Cel mai comun tip cerut de bănci.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Ce trebuie să conțină
        </h2>
        <p className="text-slate-700 leading-relaxed">
          O adeverință corectă are: antetul firmei, denumirea și CUI-ul
          companiei, numele tău complet și CNP, funcția, data angajării, tipul
          contractului (perioadă determinată/nedeterminată), informația
          specifică cerută (salariu, vechime etc.), scopul pentru care s-a
          emis, data emiterii, număr de înregistrare, semnătura persoanei
          responsabile și ștampila companiei.
        </p>
        <p className="text-slate-700 leading-relaxed">
          <strong>Sfat practic:</strong> întreabă destinatarul (bancă,
          ambasadă) exact ce trebuie să conțină. Unele au formulare-tip
          proprii pe care le poți duce direct la HR.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Cum o ceri
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Cererea trebuie să fie în scris, adresată HR-ului sau conducerii, cu
          menționarea tipului de adeverință și a scopului (bancă, viză, dosar
          pensie etc.). Un pas care ține de tine, un pas care ține de firmă:
        </p>
        <ol className="list-decimal pl-6 space-y-2 text-slate-700">
          <li>Depui cererea la HR cu număr de înregistrare pe copie</li>
          <li>
            Aștepți 3-5 zile lucrătoare — în general acesta e termenul
            uzual
          </li>
          <li>
            Dacă nu primești nimic în 10-15 zile, insistă în scris (email cu
            confirmare de citire)
          </li>
          <li>
            Dacă tot te ignoră, sesizează la ITM (Inspecția Muncii) — angajatorul
            riscă amendă
          </li>
        </ol>

        <div className="bg-blue-700 text-white rounded-lg p-5 my-4">
          <p className="font-semibold mb-2">
            🚀 Generează cererea în 2 minute
          </p>
          <p className="text-sm text-blue-50 mb-3">
            Alegi tipul adeverinței, scrii scopul, semnezi cu mouse-ul,
            descarci PDF-ul. Îl duci direct la HR.
          </p>
          <Link
            href="/cereri/adeverinta-angajator"
            className="inline-block bg-white text-blue-700 font-medium px-4 py-2 rounded-md hover:bg-slate-100 transition"
          >
            Deschide generatorul →
          </Link>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Ce faci dacă angajatorul refuză
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Se întâmplă, mai rar dar se întâmplă. Pași concreți:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>
            <strong>Cere scrisă motivarea refuzului.</strong> De obicei, doar
            faptul că ceri lucrurile în scris rezolvă situația.
          </li>
          <li>
            <strong>Sesizează Inspecția Muncii (ITM).</strong> Poți face
            sesizare online la <em>inspectiamuncii.ro</em>, cu copie după
            cererea depusă. ITM verifică și poate aplica amendă între 1500 și
            3000 lei.
          </li>
          <li>
            <strong>Ca ultimă opțiune — instanță.</strong> Rar, dar posibil,
            mai ales pentru foști angajați cu vechime lungă și adeverințe
            critice pentru pensie.
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

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Următorul pas
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Ai idei clare. Deschide generatorul, completezi câmpurile în 2
          minute, semnezi cu mouse-ul, descarci PDF-ul. Îl printezi sau îl
          trimiți direct pe email către HR.
        </p>
        <Link
          href="/cereri/adeverinta-angajator"
          className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-medium px-6 py-3 rounded-md transition"
        >
          Generează cererea →
        </Link>

        <hr className="border-slate-200 my-8" />

        <p className="text-sm text-slate-500">
          <strong>Notă:</strong> Adeverințele emise de angajator sunt
          reglementate de Codul Muncii (Legea 53/2003) și de contractul
          colectiv de muncă aplicabil. Pentru situații atipice (litigii cu
          angajatorul, firme închise), consultă ITM sau un avocat.
        </p>
      </article>
    </div>
  )
}
