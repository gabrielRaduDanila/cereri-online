import type { Metadata } from 'next'

// POLITICA DE CONFIDENȚIALITATE A APLICAȚIEI JUNGLIO.
//
// Stă pe model-cerere.ro fiindcă Google Play cere un LINK PUBLIC la politica de
// confidențialitate înainte de orice publicare, chiar și pentru un test închis — iar aici e
// singurul domeniu propriu care există deja.
//
// ⚠ `robots: noindex`: pagina trebuie să fie PUBLICĂ (o deschide oricine are linkul, inclusiv
// verificatorul de la Google), dar n-are ce căuta în căutările despre cereri și acte oficiale,
// care e subiectul site-ului. Din același motiv nu intră nici în sitemap.
//
// Textul e ținut la zi în aplicație, la `aplicatie_unity/app/docs/confidentialitate.md`. Când
// se schimbă acolo, se schimbă și aici — sunt două copii ale aceluiași lucru, iar cea care
// contează legal e asta, fiindcă asta o citește lumea.
export const metadata: Metadata = {
  title: 'Politica de confidențialitate — Junglio',
  description:
    'Cum tratează aplicația Junglio datele copiilor: fără cont, fără reclame, fără urmăritori. Aproape tot rămâne pe telefon.',
  alternates: { canonical: '/junglio-confidentialitate' },
  robots: { index: false, follow: false },
}

function Sectiune({ titlu, children }: { titlu: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold text-slate-900">{titlu}</h2>
      <div className="space-y-3 text-slate-700">{children}</div>
    </section>
  )
}

export default function PoliticaJunglio() {
  return (
    <div className="max-w-3xl mx-auto space-y-10">
      <header>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
          Politica de confidențialitate — Junglio
        </h1>
        <p className="mt-2 text-sm text-slate-500">Ultima actualizare: 16 august 2026</p>
        <p className="mt-4 text-lg text-slate-600">
          Junglio este o aplicație educativă pentru copii de 4-10 ani, cu jocuri făcute după
          programa școlară din România.
        </p>
      </header>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <p className="text-slate-800">
          <strong>Pe scurt:</strong> aplicația nu cere cont, nu cere email, nu are reclame și nu
          are urmăritori. Aproape tot ce știe despre copil rămâne pe telefon.
        </p>
      </div>

      <Sectiune titlu="1. Cine răspunde de aplicație">
        <p>
          Junglio este realizată de Radu-Gabriel Dănilă. Contact:{' '}
          <a className="text-blue-700 underline" href="mailto:junglio.app@gmail.com">
            junglio.app@gmail.com
          </a>
          .
        </p>
        <p>
          Pentru orice întrebare despre date, scrie la adresa de mai sus. Răspundem în cel mult
          30 de zile.
        </p>
      </Sectiune>

      <Sectiune titlu="2. Ce rămâne pe telefon și nu pleacă nicăieri">
        <p>Aplicația salvează local, pe telefonul copilului:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>prenumele scris la început (poate fi orice, chiar și o poreclă);</li>
          <li>clasa aleasă și avatarul;</li>
          <li>progresul în joc: stele, monede, jocuri terminate, zonele construite.</li>
        </ul>
        <p>
          <strong>Nimic din lista asta nu se trimite nicăieri.</strong> Datele stau în memoria
          aplicației și dispar când aplicația e dezinstalată. Dacă telefonul are activată copia
          de siguranță Android, ele pot ajunge în contul Google al proprietarului telefonului —
          asta e o funcție a sistemului Android, nu a noastră.
        </p>
      </Sectiune>

      <Sectiune titlu="3. Ce se trimite, pentru clasament">
        <p>
          Aplicația are un clasament săptămânal, în care copilul se vede alături de alți copii
          din aceeași ligă. Pentru el se trimit <strong>doar</strong>:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            un <strong>identificator anonim</strong>, făcut la întâmplare la prima pornire (nu e
            legat de telefon, de contul Google sau de vreo persoană);
          </li>
          <li>
            un <strong>nume de junglă</strong> ales de aplicație dintr-o listă închisă („Tigrul
            Curajos", „Bufnița Isteață") — copilul nu poate scrie text liber;
          </li>
          <li>avatarul ales din listă;</li>
          <li>numărul de puncte din săptămâna curentă.</li>
        </ul>
        <p>
          <strong>Numele adevărat al copilului nu se trimite niciodată.</strong> Nici clasa, nici
          vârsta, nici progresul. Datele astea sunt găzduite de Google Firebase (Firestore).
        </p>
      </Sectiune>

      <Sectiune titlu="4. Microfonul">
        <p>
          <strong>Aplicația nu cere permisiune de microfon și nu poate înregistra sunet.</strong>{' '}
          La exercițiile de citire, copilul citește cu voce tare și apasă singur „Am citit".
        </p>
      </Sectiune>

      <Sectiune titlu="5. Ce NU face aplicația">
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Nu are reclame.</strong> Deloc.</li>
          <li>Nu are cont, nu cere email, nu cere parolă.</li>
          <li>
            Nu are urmăritori și nu face analiză de comportament (fără Google Analytics, fără
            Facebook SDK, fără nimic asemănător).
          </li>
          <li>Nu cere localizarea, nu citește agenda, pozele sau fișierele.</li>
          <li>Nu are chat, mesaje sau vreun fel în care copiii să comunice între ei.</li>
          <li>Nu vindem și nu dăm date nimănui. Nu avem ce.</li>
        </ul>
      </Sectiune>

      <Sectiune titlu="6. Cumpărături în aplicație">
        <p>
          Aplicația e gratuită. O parte din conținut se poate debloca printr-o cumpărare unică,
          făcută prin Google Play. <strong>Plata o gestionează integral Google</strong> — noi nu
          vedem și nu păstrăm numărul cardului sau vreun alt detaliu de plată. Cumpărarea e
          legată de contul Google al cumpărătorului, deci se restaurează singură pe alt telefon.
        </p>
        <p>
          Cumpărarea se face în spatele unei porți pentru părinți (o întrebare la care un copil
          mic nu poate răspunde), ca să nu poată fi făcută de copil singur.
        </p>
      </Sectiune>

      <Sectiune titlu="7. Copiii">
        <p>
          Aplicația e făcută pentru copii și respectă politica Google Play pentru familii. Nu
          colectăm date personale de la copii: nu cerem nume real verificat, adresă, email,
          telefon sau vreun identificator care să ducă la o persoană.
        </p>
        <p>
          Dacă ești părinte și vrei ca datele legate de dispozitivul copilului să fie șterse din
          clasament, scrie la{' '}
          <a className="text-blue-700 underline" href="mailto:junglio.app@gmail.com">
            junglio.app@gmail.com
          </a>{' '}
          cu numele de junglă afișat în aplicație și le ștergem.
        </p>
      </Sectiune>

      <Sectiune titlu="8. Cât ținem datele">
        <ul className="list-disc pl-6 space-y-1">
          <li>Datele de pe telefon: până la dezinstalare, ori până la ștergerea datelor aplicației.</li>
          <li>Rândul din clasament: până la 12 luni de la ultima jucare, apoi se șterge.</li>
        </ul>
      </Sectiune>

      <Sectiune titlu="9. Schimbări">
        <p>
          Dacă politica se schimbă, data de sus se actualizează, iar schimbările importante se
          anunță în aplicație.
        </p>
      </Sectiune>
    </div>
  )
}
