import type { Metadata } from 'next'

// POLITICA DE MÂINE — se publică ÎN ZIUA în care se aprinde clasamentul între copii, nu înainte.
//
// Politica de azi (page.tsx) spune „Ce se trimite în afara telefonului: Nimic", și e adevărat
// azi: Firebase nu e configurat, iar ecranul de clasament din aplicație arată un singur rând și
// scrie pe față că nu e pornit.
//
// ⚠ NU SE PUBLICĂ MAI DEVREME. O politică ce descrie date trimise când nu se trimite nimic e
// minciuna oglindă a celei curățate pe 2 septembrie 2026. În plus, Google compară politica exact
// cu formularul Data safety — care azi spune că nu se colectează nimic.
//
// ⚠ CELE TREI SE FAC ÎN ACEEAȘI ZI: configurația Firebase în aplicație, formularul Data safety
// în Play Console, și pagina asta pusă în locul lui page.tsx. Dacă una rămâne în urmă, cele trei
// spun lucruri diferite despre aceeași aplicație.
//
// Lista de la punctul 3 e aceeași cu CAMPURI_TRIMISE din aplicație
// (aplicatie_unity/app/src/engine/randulMeu.js) și e păzită de page.viitor.test.tsx.
export const metadata: Metadata = {
  title: 'Politica de confidențialitate — Junglio',
  description:
    'Cum tratează aplicația Junglio datele copiilor: fără cont, fără reclame, fără urmăritori. Din joc pleacă doar cinci lucruri, pentru întrecerile dintre copii.',
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
        <p className="mt-2 text-sm text-slate-500">Ultima actualizare: ZZ septembrie 2026</p>
        <p className="mt-4 text-lg text-slate-600">
          Junglio este o aplicație educativă pentru copii de 4-10 ani, cu jocuri făcute după
          programa școlară din România. Politica asta spune, pe scurt și fără ocolișuri, ce se
          întâmplă cu datele în aplicație.
        </p>
      </header>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <p className="text-slate-800">
          <strong>Pe scurt:</strong> aplicația nu cere cont, nu cere email, nu are reclame și nu
          are urmăritori. Aproape tot ce știe despre copil rămâne pe telefon. Singurele date care
          pleacă sunt cinci, pentru întreceri, iar între ele{' '}
          <strong>nu se află numele scris de părinte</strong>.
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

      <Sectiune titlu="2. Ce rămâne pe telefon">
        <p>Aplicația salvează local, pe telefonul copilului:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>prenumele scris la început (poate fi orice, chiar și o poreclă);</li>
          <li>clasa aleasă;</li>
          <li>progresul în joc: stele, monede, jocuri terminate, zonele construite.</li>
        </ul>
        <p>
          <strong>Numele scris de părinte nu pleacă niciodată de pe telefon.</strong> Se vede doar
          acolo, pe hartă. Datele stau în memoria aplicației și dispar când aplicația e
          dezinstalată. Dacă telefonul are activată copia de siguranță Android, ele pot ajunge în
          contul Google al proprietarului telefonului — asta e o funcție a sistemului Android, nu
          a noastră.
        </p>
      </Sectiune>

      <Sectiune titlu="3. Ce se trimite în afara telefonului">
        <p>
          Aplicația are <strong>trei întreceri</strong>, și toate trei sunt adevărate — adică arată
          copii care chiar joacă, nu jucători inventați de noi:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>clasamentul din interiorul tribului</strong> — copilul își vede locul printre
            ceilalți copii din tribul lui, după punctele strânse în săptămâna curentă;
          </li>
          <li>
            <strong>clasamentul între triburi</strong> — punctele tuturor copiilor dintr-un trib se
            adună la un loc, iar cele patru triburi se întrec între ele;
          </li>
          <li>
            <strong>bossul ligii</strong> — copilul care răspunde corect la toate întrebările grele
            devine boss, iar <strong>numele lui de junglă</strong> e văzut de tot tribul până când
            îl învinge altcineva.
          </li>
        </ul>
        <p>
          Ca astea să fie cu putință, de pe telefon pleacă <strong>exact cinci lucruri</strong>, și
          nimic altceva:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>un identificator anonim</strong> — un cod făcut o singură dată pe telefonul
            acela, care nu spune nimic despre persoană;
          </li>
          <li>
            <strong>numele de junglă</strong> — un nume ales de aplicație dintr-o listă închisă,
            de felul „Delfinul Isteț”. Nu e scris de copil și nu poate fi schimbat în text liber;
          </li>
          <li>
            <strong>avatarul</strong> — emoji-ul ales de copil dintr-o listă a noastră;
          </li>
          <li>
            <strong>punctele (XP) din săptămâna curentă</strong>;
          </li>
          <li>
            <strong>tribul</strong> — care din cele patru triburi și l-a ales copilul (Maimuțele,
            Panda, Tigrii, Girafele). Fără el nu se poate ști nici unde să-i așeze rândul, nici
            în dreptul cărui trib să-i socotească punctele.
          </li>
        </ul>
        <p>
          <strong>
            Nu pleacă: numele scris de părinte, clasa, vârsta, progresul, monedele, jungla
            construită — nimic din ce e la punctul 2.
          </strong>{' '}
          Un copil care se uită în clasament vede un nume de animal și niște puncte. Nu află cine
          e celălalt copil, unde stă, ce clasă face sau cum îl cheamă. La fel și la boss: se vede
          numele de junglă și ziua în care a câștigat, atât.
        </p>
        <p>
          Cele cinci date sunt păstrate la <strong>Google</strong>, în serviciul Firebase
          (Firestore). Google le prelucrează doar ca să le păstreze pentru noi. Nu le vindem, nu
          le dăm nimănui și nu le folosim pentru reclame.
        </p>
      </Sectiune>

      <Sectiune titlu="4. Microfonul">
        <p>
          <strong>Aplicația nu cere permisiune de microfon și nu poate înregistra sunet.</strong>{' '}
          La exercițiile de citire, copilul citește cu voce tare și apasă singur „Am citit”.
        </p>
        <p>
          Am avut o variantă care asculta cum citește copilul, ca să-l corecteze. Am scos-o:
          singurul fel în care ar fi mers fără ca vocea copilului să plece de pe telefon cerea un
          model de limbă românesc descărcat local, iar acela lipsește de pe aproape toate
          telefoanele. Am preferat să lipsească funcția decât să cerem o permisiune de microfon pe
          care aproape nimic n-o folosește.
        </p>
      </Sectiune>

      <Sectiune titlu="5. Ce NU face aplicația">
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Nu are reclame.</strong> Deloc.
          </li>
          <li>Nu are cont, nu cere email, nu cere parolă.</li>
          <li>
            Nu are urmăritori și nu face analiză de comportament (fără Google Analytics, fără
            Facebook SDK, fără nimic asemănător).
          </li>
          <li>Nu cere localizarea, nu citește agenda, pozele sau fișierele.</li>
          <li>
            Nu are chat și niciun fel în care copiii să-și scrie unul altuia. În clasament se văd
            doar nume alese de aplicație dintr-o listă închisă, deci un copil nu poate scrie ceva
            care să ajungă sub ochii altui copil.
          </li>
          <li>Nu vindem și nu dăm date nimănui.</li>
        </ul>
      </Sectiune>

      <Sectiune titlu="6. Cumpărături în aplicație">
        <p>
          Aplicația se poate folosi gratuit, cu o limită zilnică: <strong>5 jocuri pe zi</strong>.
          Limita se reînnoiește în fiecare zi.
        </p>
        <p>
          Jocul fără limită se obține printr-un <strong>abonament</strong> (lunar, pe trei luni
          sau anual), cumpărat prin Google Play.{' '}
          <strong>Plata o gestionează integral Google</strong> — noi nu vedem și nu păstrăm
          numărul cardului sau vreun alt detaliu de plată. Abonamentul e legat de contul Google al
          cumpărătorului, deci se restaurează singur pe alt telefon și se poate anula oricând din
          Google Play, de la „Abonamente”.
        </p>
        <p>
          Cumpărarea se face în spatele unei porți pentru părinți (o întrebare la care un copil
          mic nu poate răspunde), ca să nu poată fi făcută de copil singur. Aplicația nu îi cere
          copilului să cumpere și nici să roage pe altcineva să cumpere.
        </p>
      </Sectiune>

      <Sectiune titlu="7. Copiii">
        <p>
          Aplicația e făcută pentru copii și respectă politica Google Play pentru familii. Nu
          cerem nume real verificat, adresă, email, telefon sau vreun identificator care să ducă
          la o persoană. Singurul identificator care pleacă e cel anonim de la punctul 3.
        </p>
        <p>
          Dacă ești părinte și vrei să ștergem rândul copilului din clasament, scrie la{' '}
          <a className="text-blue-700 underline" href="mailto:junglio.app@gmail.com">
            junglio.app@gmail.com
          </a>{' '}
          și îl ștergem. Pentru datele de pe telefon e de ajuns să dezinstalezi aplicația sau să
          ștergi datele ei din setările telefonului.
        </p>
      </Sectiune>

      <Sectiune titlu="8. Cât ținem datele">
        <ul className="list-disc pl-6 space-y-1">
          <li>
            Datele de pe telefon: până la dezinstalare, ori până la ștergerea datelor aplicației.
          </li>
          <li>
            Rândul din clasament: cât timp aplicația e folosită, plus cel mult 12 luni de la
            ultimul joc. După aceea se șterge. Se poate șterge oricând, la cerere.
          </li>
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
