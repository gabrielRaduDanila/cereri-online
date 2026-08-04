import type { Metadata } from 'next'
import Link from 'next/link'
import { getArticol } from '@/lib/articole'
import { buildArticleJsonLd } from '@/lib/structured-data'

const meta = getArticol('cerere-catre-primarie-cum-o-scrii-corect')!

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
    intrebare: 'În cât timp trebuie să-mi răspundă primăria?',
    raspuns:
      'Conform OG 27/2002, termenul legal e de 30 de zile de la data înregistrării cererii. Poate fi prelungit cu maxim 15 zile, cu notificare motivată. Dacă răspunsul nu vine sau e nemulțumitor, ai dreptul la plângere administrativă și, în ultimă instanță, la contencios administrativ.',
  },
  {
    intrebare: 'Ce fac dacă nu știu exact ce trebuie să cer?',
    raspuns:
      'Sună înainte la primărie sau intră pe site-ul instituției — majoritatea au listă cu tipurile de solicitări și documente necesare. Dacă nu găsești, poți formula o cerere generală în care descrii situația și lași funcționarul să încadreze corect solicitarea.',
  },
  {
    intrebare: 'Cui adresez cererea — primar, viceprimar sau secretar?',
    raspuns:
      'Cererea se adresează de regulă „Domnului Primar al Comunei/Orașului/Municipiului …". Dacă solicitarea vizează o direcție specifică (urbanism, taxe, asistență socială), poți menționa după antet și direcția respectivă. Registratura o direcționează intern către departamentul competent.',
  },
  {
    intrebare: 'Trebuie să plătesc taxă de timbru?',
    raspuns:
      'Depinde de tipul cererii. Adeverințele simple (domiciliu, componență familie) sunt gratuite. Solicitările care implică emisiune de documente fiscale, autorizații sau certificate au taxă de timbru între 2 și 100 lei, în funcție de complexitate. Verifică pe site-ul primăriei tale sau la casierie.',
  },
  {
    intrebare: 'Pot depune cererea prin e-mail sau doar la ghișeu?',
    raspuns:
      'Legal, primăria e obligată să accepte cereri depuse la registratură, prin poștă cu confirmare de primire, prin e-mail (dacă are adresă oficială publicată) sau prin ghiseul.ro. E-mailul funcționează dacă atașezi cererea semnată (scan sau PDF cu semnătură) și dovada de identitate.',
  },
]

export default function ArticolCererePrimarie() {
  const jsonLd = buildArticleJsonLd(
    meta,
    intrebariFrecvente,
    'Cerere către primărie'
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
        <span className="text-slate-700">Cerere către primărie</span>
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
          O cerere bine scrisă către primărie îți economisește drumuri, timp și
          nervi. O cerere scrisă prost sau incompletă se întoarce cu „completați
          și reveniți", uneori după săptămâni. Diferența nu e stilul — e
          structura. Iată exact ce trebuie să conțină și cum o depui ca să
          primești răspuns în termen legal.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Structura unei cereri corecte
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Orice cerere adresată unei autorități publice are aceleași șase
          elemente. Le respecți indiferent dacă ceri o adeverință, o autorizație
          sau semnalezi o problemă în cartier.
        </p>
        <ol className="list-decimal pl-6 space-y-3 text-slate-700">
          <li>
            <strong>Antetul cu destinatarul.</strong> Sus, aliniat la dreapta
            sau centrat: „Către Primăria Municipiului/Orașului/Comunei …", pe
            rândul următor „Domnului Primar" și, dacă e cazul, direcția
            specifică („Direcția Impozite și Taxe Locale").
          </li>
          <li>
            <strong>Datele tale de identificare.</strong> Nume complet, CNP,
            domiciliu, act de identitate (serie și număr), telefon și e-mail
            pentru contact. Fără CNP corect, cererea nu poate fi înregistrată
            oficial.
          </li>
          <li>
            <strong>Formula de deschidere.</strong> „Subsemnatul/Subsemnata …,
            având datele de mai sus, vă rog să-mi aprobați/eliberați …". Simplu
            și direct.
          </li>
          <li>
            <strong>Obiectul cererii.</strong> Ce ceri concret, într-o frază
            clară. Nu „aș dori să discutăm despre …", ci „solicit eliberarea
            unei adeverințe de …" sau „vă rog să dispuneți verificarea …".
          </li>
          <li>
            <strong>Motivarea.</strong> De ce ai nevoie de documentul respectiv
            sau ce situație descrii. Scurt și obiectiv — 2-4 rânduri. Evită
            emoții și digresiuni.
          </li>
          <li>
            <strong>Data, semnătura, anexele.</strong> Data completă, semnătura
            olografă și lista documentelor atașate (copie buletin, dovadă
            plată, alte cereri anterioare etc.).
          </li>
        </ol>

        <div className="bg-blue-700 text-white rounded-lg p-5 my-4">
          <p className="font-semibold mb-2">
            🚀 Generează cererea în 2 minute
          </p>
          <p className="text-sm text-blue-50 mb-3">
            Completezi obiectul, motivarea și datele tale. Semnezi cu mouse-ul,
            descarci PDF-ul și îl depui la primărie sau îl atașezi la platforma
            online.
          </p>
          <Link
            href="/cereri/cerere-primarie"
            className="inline-block bg-white text-blue-700 font-medium px-4 py-2 rounded-md hover:bg-slate-100 transition"
          >
            Deschide generatorul →
          </Link>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Formulele oficiale care fac diferența
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Limbajul administrativ românesc are câteva formule standard. Nu sunt
          obligatorii, dar te fac să pari „la locul tău" în ochii
          funcționarului — și, uneori, asta contează mai mult decât ai crede.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>
            <strong>„Vă rog să-mi aprobați …"</strong> — pentru orice
            solicitare care necesită acordul autorității (autorizație de
            construire, atribuire loc parcare, scutire de taxă).
          </li>
          <li>
            <strong>„Vă rog să-mi eliberați …"</strong> — pentru documente
            standard (adeverință, certificat, copie de pe un act din arhivă).
          </li>
          <li>
            <strong>„Vă rog să dispuneți …"</strong> — pentru semnalări și
            solicitări de intervenție (reparație stradă, curățenie, verificare
            o situație).
          </li>
          <li>
            <strong>„În temeiul …"</strong> — dacă cererea se bazează pe o lege
            specifică (Legea 544/2001 pentru informații publice, OG 27/2002
            pentru petiții), o menționezi la începutul motivării.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Ce să eviți
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Cele mai frecvente greșeli care întorc cererea sau o lasă fără
          răspuns:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>
            Cereri vagi, fără obiect clar. „Aș vrea să vorbesc cu cineva despre
            situația mea" nu e cerere, e o discuție — funcționarul nu are ce
            înregistra.
          </li>
          <li>
            Ton emoțional sau acuzator. „Sunt revoltat că …" reduce
            credibilitatea, chiar dacă ai dreptate. Descrie faptic, lasă
            evaluarea pentru destinatar.
          </li>
          <li>
            Lipsa CNP-ului sau a semnăturii. Fără ele cererea nu e valabilă
            juridic și nu se înregistrează.
          </li>
          <li>
            Anexe nemenționate. Dacă atașezi documente și nu le enumeri la
            final, se poate „pierde" un act important.
          </li>
          <li>
            Multe solicitări într-o singură cerere. Dacă ai nevoie de trei
            adeverințe diferite, depui trei cereri separate — se procesează
            mai rapid și de departamente diferite.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Cum o depui
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Ai patru variante și fiecare are avantaje diferite.
        </p>
        <p className="text-slate-700 leading-relaxed">
          <strong>La registratura primăriei</strong> — cea mai sigură. Primești
          număr de înregistrare pe loc, cu dată și oră. De la acea dată curge
          termenul de 30 de zile. Ai copia ta stampilată ca dovadă. Recomandat
          pentru cereri importante (autorizații, contestații, moșteniri).
        </p>
        <p className="text-slate-700 leading-relaxed">
          <strong>Prin poștă cu confirmare de primire</strong> — funcționează
          identic legal, dar termenul curge de la data la care primăria
          primește plicul (nu de la data expedierii). Păstrezi recipisa AR ca
          dovadă. Utilă dacă nu poți ajunge la ghișeu.
        </p>
        <p className="text-slate-700 leading-relaxed">
          <strong>Prin e-mail la adresa oficială</strong> — publicată pe
          site-ul primăriei. Atașezi cererea în PDF cu semnătură (scan sau
          semnătură digitală) plus copie buletin. Primești confirmare de
          înregistrare cu număr. Rapid, dar nu toate primăriile mici respectă
          termenele pentru cereri prin e-mail — verifică practic.
        </p>
        <p className="text-slate-700 leading-relaxed">
          <strong>Prin ghiseul.ro</strong> — dacă primăria e conectată la
          platformă. Ai nevoie de cont verificat (buletin scanat sau
          videoidentificare). Cel mai comod pentru cereri repetitive
          (adeverințe, impozite).
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Ce se întâmplă după depunere
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Cererea primește număr de înregistrare și e direcționată către
          departamentul competent. Funcționarul responsabil o analizează, cere
          eventuale clarificări sau documente suplimentare și emite răspunsul —
          o adeverință, o autorizație, un aviz sau o comunicare scrisă.
          Termenul standard e 30 de zile, prelungit cu maxim 15 dacă situația
          e complexă, cu notificare motivată.
        </p>
        <p className="text-slate-700 leading-relaxed">
          Dacă termenul expiră fără răspuns sau primești un răspuns
          nemulțumitor, ai dreptul la plângere prealabilă către conducătorul
          instituției (primar) în termen de 30 de zile. Dacă nici asta nu
          rezolvă, urmează contenciosul administrativ — o acțiune în instanță
          contra tăcerii sau refuzului nejustificat.
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
          href="/cereri/cerere-primarie"
          className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-medium px-6 py-3 rounded-md transition mt-6"
        >
          Generează cererea către primărie →
        </Link>

        <hr className="border-slate-200 my-8" />

        <p className="text-sm text-slate-500">
          <strong>Notă:</strong> Termenele și procedurile menționate se
          bazează pe OG 27/2002 privind reglementarea activității de
          soluționare a petițiilor. Procedurile specifice pot varia de la o
          primărie la alta, în funcție de gradul de digitalizare și de
          regulamentul intern.
        </p>
      </article>
    </div>
  )
}
