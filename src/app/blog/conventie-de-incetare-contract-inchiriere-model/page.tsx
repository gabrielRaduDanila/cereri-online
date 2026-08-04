import type { Metadata } from 'next'
import Link from 'next/link'
import { getArticol } from '@/lib/articole'
import { buildArticleJsonLd } from '@/lib/structured-data'

const meta = getArticol('conventie-de-incetare-contract-inchiriere-model')!

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
      'Care e diferența între convenția de încetare și notificarea de reziliere?',
    raspuns:
      'Convenția e AMIABILĂ — ambele părți semnează un act comun prin care închid contractul. Notificarea de reziliere e UNILATERALĂ — o parte anunță pe cealaltă, cu respectarea preavizului. Convenția e mai rapidă și evită litigii; notificarea o folosești când cealaltă parte nu vrea să coopereze sau când există motive de reziliere clare.',
  },
  {
    intrebare: 'Convenția trebuie autentificată la notar?',
    raspuns:
      'Nu, cu excepția cazurilor în care contractul inițial a fost autentificat notarial și clauzele lui prevăd expres această obligație. Pentru majoritatea contractelor sub semnătură privată, convenția semnată de ambele părți e suficientă. Recomandat: 2 exemplare, câte unul pentru fiecare parte.',
  },
  {
    intrebare: 'Trebuie să menționăm data efectivă de încetare?',
    raspuns:
      'Da, obligatoriu. Data încetării e cel mai important element juridic al convenției — de la ea încep să curgă obligațiile de predare a imobilului, restituire a garanției și încetare a plății chiriei. Fără dată clară, apar ambiguități și posibile litigii.',
  },
  {
    intrebare: 'Ce se întâmplă dacă chiriașul are datorii la utilități?',
    raspuns:
      'Se rețin din garanție, iar suma restituită scade în consecință. Convenția trebuie să menționeze explicit garanția inițială și suma efectiv restituită, cu justificarea reținerii (facturi neplătite, chirie restantă). Pentru orice reținere trebuie prezentate documente doveditoare, nu simple estimări.',
  },
  {
    intrebare: 'Convenția înlocuiește procesul-verbal de predare?',
    raspuns:
      'Nu neapărat. Convenția stabilește CE convin părțile (încetare, garanție, dată); procesul-verbal descrie CUM se predă imobilul (starea, contoare, chei, inventar). Ideal: le semnezi pe amândouă, în aceeași zi. Pentru situații simple, unele clauze din proces-verbal pot fi incluse direct în convenție.',
  },
]

export default function ArticolConventieIncetare() {
  const jsonLd = buildArticleJsonLd(
    meta,
    intrebariFrecvente,
    'Convenție încetare închiriere'
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
        <span className="text-slate-700">Convenție încetare închiriere</span>
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
          Când vrei să închei un contract de închiriere de comun acord — nu
          unilateral, cu notificare — instrumentul potrivit e convenția de
          încetare. E semnată de ambele părți, are efect imediat, elimină
          preavizul și blochează orice pretenție ulterioară legată de
          contract. Iată exact ce conține și când e mai bună decât rezilierea.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Când folosești convenția în loc de reziliere
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Cele două acte rezolvă situații diferite. Convenția e potrivită
          când:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>
            Ambele părți vor să închidă contractul — nu e conflict, doar
            circumstanțe schimbate (mutare, cumpărare imobil propriu,
            proprietarul vrea să locuiască el)
          </li>
          <li>
            Vrei să eviți preavizul de 30-60 zile prevăzut în contract —
            convenția are efect la data pe care o alegi tu
          </li>
          <li>
            Vrei o „linie clară" între părți — după semnare, nimeni nu mai
            poate cere nimic (chirie retroactivă, daune, penalizări)
          </li>
          <li>
            Ai negociat modificări (garanție parțial reținută, plata unei
            luni suplimentare, transfer de bunuri) și vrei să le pui pe hârtie
          </li>
        </ul>
        <p className="text-slate-700 leading-relaxed">
          Rezilierea prin notificare rămâne varianta corectă când cealaltă
          parte nu vrea să semneze, când există motive juridice clare
          (neplată, deteriorări) sau când vrei să documentezi o poziție
          unilaterală pentru instanță.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Ce conține o convenție corectă
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Structura standard, în ordine:
        </p>
        <ol className="list-decimal pl-6 space-y-2 text-slate-700">
          <li>
            <strong>Antetul cu data încheierii convenției și localitatea</strong>
          </li>
          <li>
            <strong>Identificarea completă a părților</strong> — nume, CNP,
            CI, domiciliu, calitatea în contract (proprietar/chiriaș)
          </li>
          <li>
            <strong>Referința la contractul care se închide</strong> — data
            încheierii, adresa imobilului, eventual numărul dacă e
            înregistrat la ANAF
          </li>
          <li>
            <strong>Data efectivă de încetare</strong> — obligatorie, e
            cheia juridică a convenției
          </li>
          <li>
            <strong>Situația garanției</strong> — sumă inițială, sumă
            restituită, eventuale rețineri justificate
          </li>
          <li>
            <strong>Predarea imobilului și cheilor</strong> — numărul de chei,
            data predării, confirmarea că imobilul e liber de bunurile
            chiriașului
          </li>
          <li>
            <strong>Regularizarea utilităților</strong> — cine plătește ce, pe
            ce perioadă
          </li>
          <li>
            <strong>Clauză de renunțare reciprocă</strong> — părțile declară
            că nu mai au pretenții una față de cealaltă
          </li>
          <li>
            <strong>Data, semnătura ambelor părți, două exemplare</strong>
          </li>
        </ol>

        <div className="bg-blue-700 text-white rounded-lg p-5 my-4">
          <p className="font-semibold mb-2">
            🚀 Generează convenția în 2 minute
          </p>
          <p className="text-sm text-blue-50 mb-3">
            Completezi datele ambelor părți, garanția, data încetării.
            Semnați amândoi cu mouse-ul și descărcați PDF-ul final — un
            exemplar pentru fiecare.
          </p>
          <Link
            href="/cereri/conventie-incetare-inchiriere"
            className="inline-block bg-white text-blue-700 font-medium px-4 py-2 rounded-md hover:bg-slate-100 transition"
          >
            Deschide generatorul →
          </Link>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Clauza de renunțare reciprocă — de ce e importantă
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Cel mai valoros element al convenției nu e închiderea contractului
          — e clauza prin care ambele părți declară că nu mai au pretenții.
          Fără ea, proprietarul poate reveni peste 3 luni cu „factura de
          gaze de 800 lei rămasă neplătită" sau chiriașul poate cere „ultima
          zi din chirie care nu s-a folosit". Cu ea, orice pretenție
          ulterioară e nulă.
        </p>
        <p className="text-slate-700 leading-relaxed">
          Excepție: pretențiile care apar din vicii ascunse (probleme
          descoperite după predare) sau din fraudă (una din părți a ascuns
          intenționat ceva). Restul se sting cu convenția.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Cum eviți litigii ulterioare
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Fotografiază imobilul în ziua predării, cu telefonul, ca dovadă a
          stării — chiar dacă convenția o menționează. Fotografiile datate
          sunt cel mai simplu argument în orice dispută viitoare.
        </p>
        <p className="text-slate-700 leading-relaxed">
          Cere chitanțe pentru garanția restituită și pentru orice sumă
          transferată. „Am dat 3000 lei cash" nu se poate proba dacă apare
          o dispută.
        </p>
        <p className="text-slate-700 leading-relaxed">
          Anunță ANAF dacă contractul era înregistrat — chiriașul are
          obligația să depună declarație de încetare, ca să nu mai fie
          considerat contribuabil pentru chirie inexistentă.
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
          href="/cereri/conventie-incetare-inchiriere"
          className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-medium px-6 py-3 rounded-md transition mt-6"
        >
          Generează convenția de încetare →
        </Link>

        <hr className="border-slate-200 my-8" />

        <p className="text-sm text-slate-500">
          <strong>Notă:</strong> Convenția e valabilă pentru contracte
          simple, sub semnătură privată. Pentru contracte autentificate
          notarial sau situații complexe (moștenire, indiviziune, litigii
          preexistente), consultă un avocat sau notar înainte să semnezi.
        </p>
      </article>
    </div>
  )
}
