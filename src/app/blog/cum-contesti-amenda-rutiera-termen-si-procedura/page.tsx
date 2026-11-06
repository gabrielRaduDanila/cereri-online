import type { Metadata } from 'next'
import Link from 'next/link'
import { getArticol } from '@/lib/articole'
import { buildArticleJsonLd } from '@/lib/structured-data'

const meta = getArticol('cum-contesti-amenda-rutiera-termen-si-procedura')!

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
      'Am plătit amenda în 48 de ore cu jumătate din minim. Mai pot contesta?',
    raspuns:
      'Nu. Plata în termen de 15 zile (jumătate din minimul special — nu „48 de ore", e o confuzie des întâlnită) echivalează cu recunoașterea contravenției. Dacă vrei să contești, nu plăti. Dacă plătești și apoi contești, judecătorul va respinge plângerea pe motiv că ai acceptat sancțiunea. Alege de la început: contestezi SAU plătești redus. Nu amândouă.',
  },
  {
    intrebare: 'Procesul-verbal îmi pare complet eronat. Pot cere nulitatea?',
    raspuns:
      'Da, și sunt două tipuri. Nulitatea ABSOLUTĂ (art. 17 OG 2/2001) apare la lipsa unor mențiuni obligatorii: numele contravenientului, fapta descrisă, data și locul faptei, semnătura agentului. Judecătorul o constată din oficiu, chiar dacă nu o invoci. Nulitatea RELATIVĂ apare la alte vicii (descriere vagă, probe insuficiente) — trebuie invocată expres în plângere și dovedită că ți-a produs o vătămare.',
  },
  {
    intrebare: 'Am refuzat să semnez procesul-verbal. E valabil?',
    raspuns:
      'Da. Refuzul de semnătură se consemnează de agent și e menționat în procesul-verbal, cu prezența eventuală a unui martor (sau fără, dacă nu se găsește unul). Procesul-verbal rămâne valabil. În practică, refuzul semnăturii nu te ajută cu nimic și îți închide posibilitatea să adaugi mențiuni („am fost oprit la 100 m după indicator", „nu funcționa semaforul") care te-ar putea ajuta la judecată.',
  },
  {
    intrebare:
      'Am primit amenda prin poștă, fără să fiu oprit în trafic. De când curge termenul de 15 zile?',
    raspuns:
      'De la data COMUNICĂRII, nu a emiterii procesului-verbal. Pentru amenzile transmise prin poștă (radare, camere de supraveghere), termenul curge de la data la care semnezi confirmarea de primire sau, dacă refuzi/nu ridici, de la expirarea termenului de păstrare la poștă (uzual 10-15 zile). Verifică plicul: ștampila poștei de pe recipisă e documentul decisiv.',
  },
  {
    intrebare: 'Unde depun plângerea — la Poliție sau la judecătorie?',
    raspuns:
      'La JUDECĂTORIE, nu la Poliție. Mai exact, la judecătoria în a cărei rază teritorială s-a săvârșit contravenția (nu la cea de domiciliu). Pentru o amendă primită pe DN2 în Buzău, plângerea se depune la Judecătoria Buzău, chiar dacă locuiești în Iași. Taxa de timbru e 20 lei, pe care o plătești înainte sau la depunere. O depunere greșită, la Poliție, nu întrerupe termenul de 15 zile — rămâne depunerea la judecătorie.',
  },
]

export default function ArticolContestareAmenda() {
  const jsonLd = buildArticleJsonLd(
    meta,
    intrebariFrecvente,
    'Contestare amendă rutieră'
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
        <span className="text-slate-700">Contestare amendă rutieră</span>
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
          Majoritatea plângerilor împotriva proceselor-verbale rutiere nu
          pierd pe fond — pierd pe formă. Termenul depășit cu o zi,
          judecătoria greșită, taxa de timbru neplătită, mențiuni omise.
          Statisticile arată că aproximativ 20-25% din contestații sunt
          admise în cauză, dar procentul real al celor BINE FORMULATE care
          câștigă e substanțial mai mare. Diferența o face procedura. Iată
          exact ce ai de făcut dacă ai primit o amendă și crezi că e eronată.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Termenul de 15 zile — de când curge și cum îl pierzi
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Potrivit art. 31 din OG 2/2001 privind regimul juridic al
          contravențiilor, ai 15 zile de la data comunicării procesului-verbal
          să depui plângerea. Cuvântul-cheie e „comunicării", nu „emiterii".
          Sunt două scenarii distincte.
        </p>
        <p className="text-slate-700 leading-relaxed">
          Dacă ai fost oprit în trafic și ai semnat procesul-verbal, termenul
          curge de a doua zi. Primești un exemplar pe loc — asta e comunicarea.
          Dacă procesul-verbal a fost întocmit în lipsa ta (depistat prin
          radar, cameră de supraveghere, Poliția Rutieră), termenul curge de
          la data confirmării de primire semnate de tine, respectiv de la
          expirarea termenului de păstrare la poștă dacă nu l-ai ridicat.
        </p>
        <p className="text-slate-700 leading-relaxed">
          Confuzia cea mai costisitoare: pliconul nu-l ridici în 15 zile de la
          anunț, credezi că „l-am pierdut, deci nu s-a comunicat", iar între
          timp Poliția consideră comunicarea îndeplinită. Termenul curge și
          expiră fără să știi. Verificarea pe site-ul poștei (urmăriți
          numărul AR) e singura dovadă obiectivă.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Alegerea strategică — contești SAU plătești redus
        </h2>
        <p className="text-slate-700 leading-relaxed">
          În primele 15 zile poți plăti jumătate din minimul special al
          sancțiunii (art. 28 alin. 1 OG 2/2001). Mulți conducători auto cred
          că pot plăti ca „măsură de precauție" și contesta ulterior „ca să
          recupereze banii". E o greșeală care închide definitiv contestarea.
        </p>
        <p className="text-slate-700 leading-relaxed">
          Plata în termen de 15 zile echivalează cu recunoașterea contravenției
          — jurisprudența Înaltei Curți de Casație și Justiție e constantă pe
          acest punct. Dacă depui plângere după ce ai plătit, judecătorul o
          va respinge ca neîntemeiată, fără să examineze fondul. Alegerea
          trebuie făcută de la început.
        </p>
        <p className="text-slate-700 leading-relaxed">
          Când alegi contestarea, plângerea suspendă executarea amenzii până
          la rămânerea definitivă a hotărârii. Dacă pierzi, ai 30 de zile să
          plătești suma integrală (nu jumătatea). Dacă câștigi, amenda se
          anulează.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Ce poți contesta — motivele care funcționează
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Judecătoriile române admit cel mai frecvent patru categorii de
          motive de contestare:
        </p>
        <p className="text-slate-700 leading-relaxed">
          <strong>1. Nulitatea procesului-verbal</strong> pentru lipsa unor
          mențiuni obligatorii (art. 17 OG 2/2001): numele contravenientului,
          locul și data faptei, descrierea concretă a contravenției (nu „a
          depășit viteza legală", ci „depășire cu X km/h în localitate, limită
          50 km/h"), semnătura agentului constatator. Lipsa acestor mențiuni
          atrage nulitatea absolută, constatată din oficiu de judecător.
        </p>
        <p className="text-slate-700 leading-relaxed">
          <strong>2. Probe insuficiente.</strong> Pentru abaterile dovedite cu
          mijloace tehnice (radar, etilotest, cameră video), lipsa dovezilor
          concrete în dosar (ștampila certificării aparatului, data expirării
          verificării metrologice, imaginea cu placa de înmatriculare) poate
          duce la admiterea plângerii. Verificarea metrologică a radarelor
          expiră anual — un radar neverificat recent produce probe inutilizabile.
        </p>
        <p className="text-slate-700 leading-relaxed">
          <strong>3. Confuzia de persoană.</strong> Pentru amenzile transmise
          proprietarului mașinii pentru abateri săvârșite de alt conducător,
          proprietarul poate declara în termen de 30 de zile persoana reală a
          conducătorului (art. 1091 OUG 195/2002). Dacă termenul s-a depășit,
          amenda rămâne a proprietarului, dar o poți contesta pe fond.
        </p>
        <p className="text-slate-700 leading-relaxed">
          <strong>4. Starea de necesitate sau cazul fortuit.</strong> Rar
          invocate cu succes, dar posibile: depășire în localitate pentru a
          evita impact iminent, trecere pe culoare galben intermitent (nu
          roșu), semnalistică defectă sau acoperită (confirmată cu fotografii
          la data faptei).
        </p>

        <div className="bg-blue-700 text-white rounded-lg p-5 my-4">
          <p className="font-semibold mb-2">
            🚀 Generează cererea de contestare
          </p>
          <p className="text-sm text-blue-50 mb-3">
            Model universal, cu toate câmpurile cerute de judecătorie.
            Completezi datele procesului-verbal, obiectul, motivarea,
            semnezi, imprimi și depui.
          </p>
          <Link
            href="/cereri/cerere-generala"
            className="inline-block bg-white text-blue-700 font-medium px-4 py-2 rounded-md hover:bg-slate-100 transition"
          >
            Deschide generatorul →
          </Link>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Cum se formulează plângerea
        </h2>
        <p className="text-slate-700 leading-relaxed">
          O plângere contravențională nu e o cerere ca oricare alta. Trebuie
          să conțină strict șase elemente, în această ordine:
        </p>
        <p className="text-slate-700 leading-relaxed">
          <strong>Antetul cu judecătoria competentă.</strong> „Către
          Judecătoria [locul contravenției] — Secția Civilă". Identifici
          judecătoria pe portaljust.ro, după locul faptei (nu al domiciliului
          tău).
        </p>
        <p className="text-slate-700 leading-relaxed">
          <strong>Datele petentului.</strong> Nume complet, CNP, adresa de
          domiciliu, serie și număr CI, telefon și e-mail pentru
          comunicări procedurale.
        </p>
        <p className="text-slate-700 leading-relaxed">
          <strong>Identificarea procesului-verbal contestat.</strong> Numărul
          și seria procesului-verbal, data emiterii, data comunicării (cu
          dovadă — recipisa AR sau exemplarul semnat în trafic), agentul
          constatator (nume și funcție) și cuantumul amenzii.
        </p>
        <p className="text-slate-700 leading-relaxed">
          <strong>Obiectul plângerii.</strong> „Anularea procesului-verbal de
          constatare și sancționare a contravenției nr. X/data Y, emis de Z,
          cu exonerarea subsemnatului de plata amenzii de K lei." Formularea
          precisă e importantă — cereri vagi primesc respingere pe formă.
        </p>
        <p className="text-slate-700 leading-relaxed">
          <strong>Motivele de fapt și de drept.</strong> Enumeri concret ce
          contesti: nulitate (cu articolele), probe insuficiente, confuzie de
          persoană etc. Fiecare motiv argumentat în 2-5 rânduri, cu trimitere
          la textul de lege.
        </p>
        <p className="text-slate-700 leading-relaxed">
          <strong>Probele.</strong> Enumeri ce atașezi: copie proces-verbal,
          recipisa AR, fotografii de la locul faptei (dacă au relevanță),
          declarație martor dacă e cazul, extrase din registrul auto pentru
          verificarea metrologică a radarului.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Depunerea și taxa de timbru
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Plângerea se depune în trei exemplare (unul rămâne la judecătorie,
          două sunt comunicate Poliției și agentului constatator) la
          registratura judecătoriei competente. Taxa de timbru e de 20 lei,
          plătibilă pe anaf.ro sau la trezoreria statului, cu dovada
          atașată la plângere.
        </p>
        <p className="text-slate-700 leading-relaxed">
          Opțiuni de depunere: direct la ghișeul judecătoriei (primești
          număr de înregistrare pe loc), prin poștă cu confirmare de primire
          (data poștei se consideră data depunerii — art. 183 Cod procedură
          civilă), sau electronic prin portaljust.ro (dacă judecătoria oferă
          serviciul, variază).
        </p>
        <p className="text-slate-700 leading-relaxed">
          Termenul se consideră respectat dacă plângerea e depusă în ultima
          zi, până la ora închiderii registraturii. Depunerea prin poștă pe
          data limită e validă chiar dacă judecătoria o primește după.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Ce se întâmplă la termenul de judecată
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Primul termen e fixat uzual în 2-4 luni de la depunere. Prezența
          ta e recomandată dar nu obligatorie — poți trimite reprezentant
          sau cere judecarea în lipsă. Agentul constatator sau un reprezentant
          al Poliției e citat ca pârât.
        </p>
        <p className="text-slate-700 leading-relaxed">
          În ședință, instanța verifică mai întâi aspectele formale (termen,
          competență, taxa de timbru, mențiuni obligatorii din procesul-verbal).
          Dacă trece de ele, se discută fondul: probele părților, martori
          dacă s-au cerut, expertize tehnice dacă se impun.
        </p>
        <p className="text-slate-700 leading-relaxed">
          Soluția poate fi: admiterea plângerii (anularea procesului-verbal),
          respingerea ca neîntemeiată, sau modificarea sancțiunii (reducerea
          amenzii, înlocuirea cu avertisment). Hotărârea e pronunțată uzual
          în 1-2 săptămâni după ultimul termen.
        </p>
        <p className="text-slate-700 leading-relaxed">
          Împotriva hotărârii primei instanțe se poate formula apel în 30
          de zile de la comunicare. Taxa de timbru la apel e tot 20 lei.
          Decizia instanței de apel e definitivă.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Greșeli frecvente care duc la respingere
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Primul vinovat al respingerilor nu e dreptul material, ci forma.
          Depunerea la o judecătorie greșită (cea de domiciliu în loc de cea
          a locului faptei) — plângerea se declină, dar termenul original e
          pierdut și ajungi cu depunere tardivă la judecătoria corectă.
          Lipsa taxei de timbru — anulează cererea.
        </p>
        <p className="text-slate-700 leading-relaxed">
          Pe fond, cea mai dăunătoare greșeală e invocarea unor motive
          vagi: „nu mi se pare corect", „mi s-a părut că agentul a fost
          agresiv", „nu am depășit intenționat". Judecătorii analizează
          fapte, probe și texte de lege. Argumentele subiective sau
          emoționale slăbesc plângerea pe fond.
        </p>
        <p className="text-slate-700 leading-relaxed">
          Alte erori frecvente: nu enumeri probele pe care le atașezi în
          corpul cererii, nu descrii specific ce motiv de nulitate invoci
          (doar „procesul-verbal e eronat"), uiți să ceri cheltuielile de
          judecată (20 lei taxa pe care ai plătit-o e recuperabilă dacă
          câștigi).
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
          Generează plângerea de contestare →
        </Link>

        <hr className="border-slate-200 my-8" />

        <p className="text-sm text-slate-500">
          <strong>Notă:</strong> Procedura descrisă se aplică
          proceselor-verbale rutiere emise în temeiul OUG 195/2002 și OG
          2/2001. Pentru contravenții cu regim special (amenzi vamale,
          contravenții la legislația financiară) sau pentru amenzi cu
          valoare semnificativă, consultarea unui avocat cu experiență în
          drept contravențional rămâne recomandată. Articolul nu
          înlocuiește consultanța juridică personalizată.
        </p>
      </article>
    </div>
  )
}
