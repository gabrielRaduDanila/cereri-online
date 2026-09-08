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
// Textul e ținut la zi și în aplicație, la `aplicatie_unity/app/docs/confidentialitate.md`.
// Sunt două copii ale aceluiași lucru, iar cea care contează legal e ASTA, fiindcă asta o
// citește lumea.
//
// ⚠ 8 SEPTEMBRIE 2026: pagina asta a luat locul celei care spunea „Ce se trimite în afara
// telefonului: Nimic". Ea a fost adevărată până azi, cât timp Firebase nu era configurat.
//
// ⚠ DE CE SE POATE PUBLICA ÎNAINTEA PACHETULUI CARE TRIMITE. Ciorna avea scris în cap că cele
// trei — configurarea, Data safety și pagina — se fac ÎN ACEEAȘI ZI, altfel spun lucruri
// diferite despre aceeași aplicație. Regula aia a picat pe 8 septembrie, când userul a cerut
// „varianta adevărată în amândouă zilele": pagina spune acum de la ce VERSIUNE încolo
// funcționează clasamentul. Cine are o versiune mai veche citește negru pe alb că de pe
// telefonul lui nu pleacă nimic — deci pagina e adevărată și în zilele dintre publicare și
// pachet. Versiunea promisă e păzită de aplicație: `src/firebase/ordineaPublicarii.test.js` nu
// lasă norul să se aprindă pe un pachet mai vechi decât cel numit aici.
//
// Lista de la punctul 3 e aceeași cu CAMPURI_TRIMISE din aplicație
// (aplicatie_unity/app/src/engine/randulMeu.js) și e păzită de page.test.tsx.
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
          Junglio este o aplicație educativă pentru copii de 6-11 ani, cu jocuri făcute după
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
          Junglio este realizată de <strong>Radu-Gabriel Dănilă și Angela Dănilă</strong>. De
          datele din aplicație răspunde <strong>Angela Dănilă</strong>, titulara contului de
          dezvoltator Google Play. Contact:{' '}
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
        {/* ⚠ ADEVĂRAT ÎN AMÂNDOUĂ ZILELE. Politica se publică înaintea pachetului care trimite,
            deci există câteva zile în care pagina descrie ceva ce aplicația instalată încă nu
            face. Rândul ăsta o face adevărată și atunci: cine are o versiune mai veche știe că
            de pe telefonul lui nu pleacă nimic. Cerut de user, 8 septembrie. */}
        <p className="rounded-lg border-l-4 border-emerald-600 bg-emerald-50 px-4 py-3">
          <strong>Clasamentul online funcționează începând cu versiunea 1.35.0 a aplicației.</strong>{' '}
          În versiunile de dinainte, nimic din ce urmează nu se trimite: totul rămâne pe telefon.
          Versiunea instalată se vede în Setări → Aplicații → Junglio.
        </p>
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
            <strong>bossul tribului</strong> — copilul care răspunde corect la toate întrebările
            grele devine boss, iar <strong>numele lui de junglă</strong> și ziua în care a câștigat
            sunt văzute de tot tribul, până când îl învinge altcineva.
          </li>
        </ul>
        <p>
          Ca astea să fie cu putință, de pe telefon pleacă <strong>exact cinci lucruri</strong>, și
          nimic altceva:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>un identificator anonim</strong> — un cod pe care serviciul Google Firebase
            îl dă instalării aplicației de pe telefonul acela. Nu e legat de niciun cont, de nicio
            adresă de email și de niciun nume: nu spune nimic despre persoană. Dacă aplicația e
            dezinstalată, codul se pierde și copilul primește altul;
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
          e celălalt copil, unde stă, ce clasă face sau cum îl cheamă.
        </p>
        <p>
          Cele cinci date sunt păstrate la <strong>Google</strong>, în serviciul Firebase
          (Firestore), pe <strong>servere din Uniunea Europeană</strong>. Google le prelucrează
          doar ca să le păstreze pentru noi. Nu le vindem, nu le dăm nimănui și nu le folosim
          pentru reclame.
        </p>
      </Sectiune>

      {/* ⚠ SECȚIUNE CERUTĂ DE GOOGLE, nu doar bine de avut. La „Delete data URL" din Data safety
          scrie limpede ce trebuie să conțină pagina de la capătul linkului:
            • să numească aplicația sau dezvoltatorul;
            • să arate LA VEDERE pașii pe care îi face omul ca să ceară ștergerea;
            • să spună ce date se șterg, ce rămâne, și dacă mai există vreo perioadă de păstrare.
          Politica pomenea ștergerea într-o singură propoziție — adică prima condiție era
          îndeplinită, celelalte două nu. Scris pe 8 septembrie 2026. */}
      <Sectiune titlu="4. Cum ștergi datele copilului">
        <p className="font-semibold">Din aplicație, în trei pași:</p>
        <ol className="list-decimal pl-6 space-y-1">
          <li>
            Pe hartă, apeși <strong>„Pentru părinți”</strong>.
          </li>
          <li>
            Se deschide <strong>„Doar pentru părinți”</strong>, cu o înmulțire de rezolvat — e acolo ca
            să nu ajungă copilul singur în zona ta. O rezolvi și apeși <strong>„Verifică”</strong>.
          </li>
          <li>
            În raport, jos de tot, apeși <strong>„Scoate copilul din clasament”</strong>.
          </li>
        </ol>
        <p>
          <strong>Ce se șterge, imediat și definitiv:</strong> rândul copilului de pe server —
          identificatorul anonim, numele de junglă, avatarul, punctele săptămânii și tribul. Dacă
          tocmai el era bossul tribului, titlul se eliberează și numele lui dispare de acolo. Din
          clipa aceea nu se mai trimite nimic.
        </p>
        <p>
          <strong>Ce rămâne:</strong> tot ce era oricum pe telefon — numele scris de tine, clasa,
          progresul, monedele, jungla construită. Alea n-au plecat niciodată de acolo și nu sunt
          atinse: copilul joacă mai departe exact ca înainte, doar că nu mai apare în clasament.
        </p>
        <p>
          <strong>Nu ținem nimic după ștergere.</strong> Nu există copie, arhivă sau perioadă de
          păstrare în plus.
        </p>
        <p>
          <strong>Dacă ai dezinstalat deja aplicația</strong>, butonul nu mai există, iar rândul
          rămas pe server nu poate fi legat de o persoană — el conține doar un nume de animal și
          niște puncte. Dacă vrei totuși să-l ștergem, scrie la{' '}
          <a className="text-blue-700 underline" href="mailto:junglio.app@gmail.com">
            junglio.app@gmail.com
          </a>{' '}
          cu numele de junglă al copilului (cel afișat în clasament), și îl ștergem în cel mult 30
          de zile.
        </p>
      </Sectiune>

      <Sectiune titlu="5. Microfonul">
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

      <Sectiune titlu="6. Ce NU face aplicația">
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

      <Sectiune titlu="7. Cumpărături în aplicație">
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

      <Sectiune titlu="8. Copiii">
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

      <Sectiune titlu="9. Cât ținem datele">
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

      <Sectiune titlu="10. Schimbări">
        <p>
          Dacă politica se schimbă, data de sus se actualizează, iar schimbările importante se
          anunță în aplicație.
        </p>
      </Sectiune>
    </div>
  )
}
