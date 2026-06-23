import type { Metadata } from 'next'
import Link from 'next/link'
import FeedbackForm from '@/components/FeedbackForm'

export const metadata: Metadata = {
  title: 'Despre — Cereri Online',
  description:
    'Cereri Online este un generator gratuit de cereri și acte oficiale în format PDF. Datele tale rămân doar în browser-ul tău, nu sunt salvate nicăieri.',
}

export default function PaginaDespre() {
  return (
    <div className="max-w-3xl mx-auto space-y-10">
      <header>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
          Despre Cereri Online
        </h1>
        <p className="mt-3 text-lg text-slate-600">
          Un generator gratuit de cereri și acte oficiale în format PDF — pentru
          oamenii care nu vor să piardă timpul căutând modele vechi.
        </p>
      </header>

      <section className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-blue-900 mb-3">
          Datele tale rămân doar la tine
        </h2>
        <p className="text-slate-700 mb-4">
          Acesta este principiul nostru fundamental. Completezi un formular cu
          date cu caracter personal (nume, CNP, adresă) — dar:
        </p>
        <ul className="space-y-2 text-slate-700">
          <li className="flex gap-2">
            <span className="text-blue-700 font-bold">✓</span>
            <span>
              <strong>Zero salvare pe server.</strong> Datele tale nu ajung
              niciodată pe serverul nostru. Tot ce introduci rămâne în
              browser-ul tău, pe calculatorul tău.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-blue-700 font-bold">✓</span>
            <span>
              <strong>Zero cookies de tracking, zero profil personal.</strong>{' '}
              Folosim doar statistici anonime agregate (câți vizitatori avem
              într-o zi, ce pagini sunt cele mai vizitate) — niciodată
              identificat pe persoană, niciodată conectat cu CNP-ul sau alte
              date din formular. Nu avem cont, nu îți cerem email.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-blue-700 font-bold">✓</span>
            <span>
              <strong>PDF-ul se generează local în browser-ul tău.</strong>{' '}
              Cererea ta nu călătorește pe internet — apare direct pe ecranul
              tău și o descarci pe calculator.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-blue-700 font-bold">✓</span>
            <span>
              <strong>Închizi tab-ul = totul dispare.</strong> Nu există
              istoric, nu există backup. Dacă vrei să refaci cererea mâine,
              completezi din nou.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-blue-700 font-bold">✓</span>
            <span>
              <strong>Poți descărca cererea fără să completezi tot.</strong>{' '}
              Dacă lași unele câmpuri goale, PDF-ul apare cu linii punctate
              (`______`) acolo, ca să le completezi de mână mai târziu.
            </span>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900 mb-3">
          Cum funcționează
        </h2>
        <ol className="space-y-3 text-slate-700">
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-700 text-white text-sm font-bold flex items-center justify-center">
              1
            </span>
            <span>
              <strong>Alegi tipul de cerere</strong> de pe pagina principală — 9
              documente disponibile (demisie, concediu, reziliere telefonie,
              adeverințe, contract de închiriere etc.).
            </span>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-700 text-white text-sm font-bold flex items-center justify-center">
              2
            </span>
            <span>
              <strong>Completezi formularul</strong> cu datele tale. Vezi în
              dreapta cum arată PDF-ul în timp real, pe măsură ce scrii.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-700 text-white text-sm font-bold flex items-center justify-center">
              3
            </span>
            <span>
              <strong>Semnezi cu mouse-ul sau degetul</strong> (opțional), apoi
              apeși „Descarcă PDF". Documentul îl salvezi pe calculator și-l
              poți tipări sau trimite pe email.
            </span>
          </li>
        </ol>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900 mb-3">
          De ce am făcut acest site
        </h2>
        <p className="text-slate-700">
          Când cauți pe Google „model cerere demisie" sau „cerere reziliere
          contract", găsești de cele mai multe ori PDF-uri vechi din 2015,
          scanate strâmb, pe care trebuie să le tipărești și să le completezi de
          mână. Acest site rezolvă această problemă: un formular curat, un PDF
          frumos, gata în 2 minute.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900 mb-3">
          Important de știut
        </h2>
        <p className="text-slate-700">
          Modelele de cereri sunt informative și acoperă situațiile uzuale din
          România. Pentru cazuri speciale (litigii, sume mari, situații
          complicate), recomandăm să consulți un avocat sau un specialist.
          Pentru contracte cu valoare mare, ia în considerare și autentificarea
          la notar.
        </p>
      </section>

      <section className="pt-6 border-t border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900 mb-2">
          Feedback și sugestii
        </h2>
        <p className="text-slate-700 mb-5">
          Lipsește o cerere de care ai avea nevoie? Ai găsit o eroare în textul
          unui document? Ai o sugestie de îmbunătățire? Scrie-mi mai jos —
          mesajele vin direct pe email-ul meu și citesc fiecare.
        </p>
        <FeedbackForm />
      </section>

      <div className="pt-6 border-t border-slate-200">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-blue-700 hover:underline"
        >
          ← Înapoi la lista de cereri
        </Link>
      </div>
    </div>
  )
}
