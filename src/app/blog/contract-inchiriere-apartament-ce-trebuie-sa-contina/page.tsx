import type { Metadata } from 'next'
import Link from 'next/link'
import { getArticol } from '@/lib/articole'
import { buildArticleJsonLd } from '@/lib/structured-data'

const meta = getArticol('contract-inchiriere-apartament-ce-trebuie-sa-contina')!

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
    intrebare: 'Contractul de închiriere trebuie autentificat la notar?',
    raspuns:
      'Nu este obligatoriu prin lege — un contract sub semnătură privată e valid. Totuși, notariatul îți dă titlu executoriu (poți evacua chiriașul rău-platnic direct, fără proces), iar înregistrarea la ANAF asigură protecție fiscală. Pentru contracte pe termen lung sau chirii mari, notariatul e recomandat.',
  },
  {
    intrebare: 'Ce riscă proprietarul dacă nu declară chiria la ANAF?',
    raspuns:
      'Închirierea este activitate impozabilă (10% impozit pe venit din chirie, după deducerea a 40% cheltuieli). Nedeclararea atrage amendă între 500 și 4000 lei, plus dobânzi și penalități pe impozitul neachitat, plus recalcularea retroactivă a impozitului. Declararea se face în 30 zile de la semnare, prin fișa fiscală depusă la ANAF.',
  },
  {
    intrebare: 'Cât garanție e legal să cer chiriașului?',
    raspuns:
      'Legea nu limitează valoarea garanției — părțile stabilesc de comun acord. În practică, standardul este 1-2 chirii lunare. Garanția NU este avans pentru ultima lună — se restituie integral la finalul contractului dacă imobilul e predat în bună stare, utilitățile sunt plătite și nu există alte datorii.',
  },
  {
    intrebare: 'Cine plătește reparațiile în apartament?',
    raspuns:
      'Reparațiile locative (mici, cauzate de folosința normală: bec ars, robinet care picură, garnitură) sunt în sarcina chiriașului. Reparațiile majore (structurale, țevi ascunse, centrală termică defectă, izolație) sunt ale proprietarului. Distincția e clarificată în Codul Civil art. 1788-1789 și trebuie clar specificată în contract.',
  },
  {
    intrebare: 'Ce se întâmplă dacă chiriașul nu plătește?',
    raspuns:
      'Dacă contractul este autentificat la notar, ai titlu executoriu — poți cere evacuarea direct prin executor judecătoresc, fără proces (durează 2-4 luni). Fără autentificare, trebuie proces în instanță pentru rezilierea contractului și evacuare (6-12 luni). Recomandat: în orice caz, notifică oficial chiriașul (recomandată cu confirmare de primire) după 15-30 zile de restanță.',
  },
  {
    intrebare: 'Pot rezilia contractul înainte de termen?',
    raspuns:
      'Da, cu respectarea preavizului stabilit în contract (standard: 30-60 zile). Ambele părți au acest drept. Excepții pentru reziliere fără preaviz: neplata chiriei (proprietar), condiții de locuire periculoase (chiriaș), utilizare neautorizată a imobilului (proprietar). Rezilierea se notifică în scris, cu dovadă de primire.',
  },
  {
    intrebare: 'Contract pe perioadă nedeterminată sau determinată?',
    raspuns:
      'Contract pe perioadă determinată (ex: 12 luni) — expiră automat la termen, e mai clar pentru ambele părți. Contract nedeterminat — durează până una din părți notifică rezilierea. În practică, contract determinat de 12 luni cu prelungire automată dacă niciuna dintre părți nu solicită încetarea cu 30 zile înainte de expirare este cea mai flexibilă opțiune.',
  },
]

export default function ArticolContractInchiriere() {
  const jsonLd = buildArticleJsonLd(
    meta,
    intrebariFrecvente,
    'Contract închiriere apartament'
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
        <span className="text-slate-700">Contract închiriere apartament</span>
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
          Închiriezi un apartament — fie ca proprietar, fie ca chiriaș — și
          vrei să te asiguri că actul semnat te protejează? Un contract de
          închiriere bine făcut previne 90% din conflictele viitoare. Iată ce
          trebuie să conțină, ce e obligatoriu prin lege și ce clauze să nu
          uiți niciodată.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-md">
          <p className="text-sm text-slate-700">
            <strong className="text-blue-900">Pe scurt:</strong> contractul e
            valid și sub semnătură privată. Trebuie datele complete ale
            părților, obiectul, chiria, garanția, perioada și clauzele de
            reziliere. Proprietarul e OBLIGAT să declare chiria la ANAF în 30
            zile de la semnare.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Elemente obligatorii ale contractului
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Conform Codului Civil (art. 1777-1850, regimul locațiunii), un
          contract de închiriere valid trebuie să conțină obligatoriu:
        </p>

        <h3 className="text-xl font-semibold text-slate-900 pt-2">
          1. Identificarea completă a părților
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>
            <strong>Proprietar (locator):</strong> nume complet, CNP, serie și
            număr act identitate, domiciliul
          </li>
          <li>
            <strong>Chiriaș (locatar):</strong> nume complet, CNP, serie și
            număr act identitate, domiciliul
          </li>
          <li>
            Dacă e persoană juridică: denumire, CUI, sediu, reprezentant legal
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-slate-900 pt-2">
          2. Obiectul contractului
        </h3>
        <p className="text-slate-700 leading-relaxed">
          Descrierea exactă a imobilului: adresa completă, tipul (apartament,
          casă, garsonieră), numărul de camere, suprafața utilă, dotările
          incluse (mobilier, electrocasnice). Recomandat să menționezi numărul
          cadastral și de carte funciară — dovedește dreptul de proprietate.
        </p>

        <h3 className="text-xl font-semibold text-slate-900 pt-2">
          3. Perioada de închiriere
        </h3>
        <p className="text-slate-700 leading-relaxed">
          Data de început și de sfârșit (pentru contract determinat) sau
          mențiunea „perioadă nedeterminată". Pentru siguranța ambelor părți,
          recomand contract pe 12 luni cu opțiunea de prelungire automată.
        </p>

        <h3 className="text-xl font-semibold text-slate-900 pt-2">
          4. Chiria și modalitatea de plată
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>Suma exactă în lei (sau EUR cu specificarea cursului aplicabil)</li>
          <li>Data scadenței (ex: până în 5 ale fiecărei luni)</li>
          <li>Modalitatea (numerar, transfer bancar, cash cu chitanță)</li>
          <li>
            Consecințele întârzierii (penalizări zilnice, standard 0,1-0,5%
            din chirie/zi)
          </li>
          <li>
            Clauza de indexare (dacă chiria crește anual — de obicei cu rata
            inflației INS)
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-slate-900 pt-2">
          5. Garanția
        </h3>
        <p className="text-slate-700 leading-relaxed">
          Suma exactă, când se depune (la semnare), unde se ține (recomandat în
          cont bancar separat, nu se folosește pe parcurs), și — CRITIC —{' '}
          <strong>când și în ce condiții se restituie</strong>. Vezi mai jos
          detaliul despre garanție.
        </p>

        <h3 className="text-xl font-semibold text-slate-900 pt-2">
          6. Utilitățile
        </h3>
        <p className="text-slate-700 leading-relaxed">
          Cine plătește ce (curent, gaz, apă, salubritate, întreținere,
          internet). Standardul e ca chiriașul să plătească toate utilitățile
          de consum, iar proprietarul doar cheltuielile fixe de administrație
          (dacă e cazul). Trebuie clar specificat în contract.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Garanția: cea mai delicată clauză
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Garanția e sursa a peste 50% din disputele proprietar-chiriaș. Ca să
          eviți conflicte:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>
            <strong>Valoare rezonabilă:</strong> standardul este 1-2 chirii
            lunare
          </li>
          <li>
            <strong>Termen exact de restituire:</strong> 15-30 zile după
            predarea imobilului, nu „când va vrea proprietarul"
          </li>
          <li>
            <strong>Condiții clare pentru reținere:</strong> daune materiale
            documentate cu foto și facturi, utilități neplătite, alte datorii —
            NU pentru uzura normală
          </li>
          <li>
            <strong>Anexă cu proces-verbal de predare-primire</strong> care
            documentează starea imobilului la intrarea chiriașului (contoare,
            mobilier, defecte existente)
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Înregistrarea la ANAF — obligatorie pentru proprietar
        </h2>
        <p className="text-slate-700 leading-relaxed">
          <strong>Atenție proprietari:</strong> venitul din chirie este
          impozabil. Regimul fiscal:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>Impozit 10% pe venit din chirie</li>
          <li>Se aplică pe 60% din venit (40% cheltuieli forfetare deductibile)</li>
          <li>
            Se declară în 30 zile de la semnare prin fișa fiscală (formular la
            ANAF)
          </li>
          <li>
            Se depune declarația unică anuală (formular 212) până la 25 mai a
            anului următor
          </li>
        </ul>
        <p className="text-slate-700 leading-relaxed">
          <strong>Sancțiuni pentru nedeclarare:</strong> amendă 500-4000 lei +
          recalcularea impozitului pentru toți anii + dobânzi + penalități.
          ANAF verifică sistematic anunțurile de închiriat.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Proces-verbal de predare-primire (anexă obligatorie)
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Un document separat semnat la momentul mutării chiriașului în
          apartament, care conține:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>Citirile contoarelor la predare (electric, gaz, apă)</li>
          <li>Numărul de chei predate</li>
          <li>Starea zugrăvelii, pardoselei, ferestrelor</li>
          <li>Inventar mobilier și electrocasnice (dacă e mobilat)</li>
          <li>Defecte existente (esențial! evită să fii acuzat de daune)</li>
          <li>Fotografii ale imobilului (opțional dar recomandat)</li>
        </ul>
        <p className="text-slate-700 leading-relaxed">
          Acest proces-verbal e referința pentru restituirea garanției la
          final. Fără el, orice dispută devine „vorba lui vs vorba mea".
        </p>

        <div className="bg-blue-700 text-white rounded-lg p-5 my-4">
          <p className="font-semibold mb-2">
            🚀 Generează contractul complet în 3 minute
          </p>
          <p className="text-sm text-blue-50 mb-3">
            Formular structurat cu toate câmpurile importante + anexa
            proces-verbal de predare-primire pe pagina 2. Gratuit, cu 2
            semnături electronice.
          </p>
          <Link
            href="/cereri/contract-inchiriere"
            className="inline-block bg-white text-blue-700 font-medium px-4 py-2 rounded-md hover:bg-slate-100 transition"
          >
            Deschide generatorul →
          </Link>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Drepturile ambelor părți
        </h2>

        <h3 className="text-xl font-semibold text-slate-900 pt-2">
          Proprietarul are dreptul să:
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>Primească chiria la termen și în cuantumul stabilit</li>
          <li>
            Verifice imobilul cu preaviz rezonabil (24-48h), pentru controale
            programate sau reparații
          </li>
          <li>
            Rezilieze contractul pentru neplata chiriei sau utilizare
            necorespunzătoare a imobilului
          </li>
          <li>Rețină din garanție daunele documentate</li>
        </ul>

        <h3 className="text-xl font-semibold text-slate-900 pt-2">
          Chiriașul are dreptul să:
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>Folosească liniștit imobilul, fără intruziuni nejustificate</li>
          <li>
            Ceară reparațiile majore de la proprietar (Codul Civil art. 1788)
          </li>
          <li>
            Rezilieze contractul cu preaviz dacă imobilul devine impropriu de
            locuit
          </li>
          <li>
            Primească garanția înapoi în termenul stabilit, dacă a respectat
            condițiile
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Autentificarea la notar — costuri și beneficii
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Nu e obligatorie prin lege, dar recomandată pentru contracte
          importante. Avantaje:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>
            <strong>Titlu executoriu direct.</strong> Pentru neplata chiriei
            sau nepredarea imobilului la termen, mergi direct la executor
            judecătoresc — fără proces în instanță
          </li>
          <li>
            <strong>Validare identitate părți.</strong> Notarul verifică actele,
            capacitatea de contractare
          </li>
          <li>
            <strong>Cost:</strong> ~200-500 lei (împărțit între părți dacă
            convin), în funcție de valoarea contractului
          </li>
        </ul>
        <p className="text-slate-700 leading-relaxed">
          Pentru chirii sub 2000 lei/lună și relații de încredere, contract sub
          semnătură privată e suficient. Pentru chirii mari sau chiriași noi,
          notariatul se plătește singur.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Greșeli frecvente pe care să le eviți
        </h2>
        <ol className="list-decimal pl-6 space-y-3 text-slate-700">
          <li>
            <strong>Contract verbal sau „pe hârtie de carnet".</strong> Fără
            document scris cu toate clauzele, ești fără protecție legală. La
            primul conflict, pierzi.
          </li>
          <li>
            <strong>Fără proces-verbal de predare-primire.</strong> Chiriașul
            va spune că defectele existau înainte de mutare. Proprietarul va
            reține garanția pentru „daune". Nu poți dovedi nimic.
          </li>
          <li>
            <strong>Neplata impozitelor de proprietar.</strong> Chiar dacă
            chiriașul e ok, ANAF verifică. Amendă + recalculare + dobânzi = de
            multe ori mai mult decât ai câștigat.
          </li>
          <li>
            <strong>Garanție folosită pe parcurs pentru „reparații".</strong>{' '}
            La finalul contractului, chiriașul cere garanția înapoi și
            proprietarul nu mai are bani. Ține garanția separat, în cont
            bancar.
          </li>
          <li>
            <strong>Fără clauză de indexare pe chirii pe termen lung.</strong>{' '}
            Inflația poate reduce valoarea reală a chiriei cu 10-20% în 2 ani.
          </li>
        </ol>

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
          Următorul pas: generează contractul acum
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Ai acum harta completă. Deschide generatorul, completează câmpurile,
          descarcă PDF-ul cu 2 pagini (contractul + anexa proces-verbal), și-l
          semnezi cu chiriașul la momentul mutării. Nu-ți salvăm datele
          nicăieri.
        </p>
        <Link
          href="/cereri/contract-inchiriere"
          className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-medium px-6 py-3 rounded-md transition"
        >
          Generează contractul de închiriere →
        </Link>

        <hr className="border-slate-200 my-8" />

        <p className="text-sm text-slate-500">
          <strong>Notă:</strong> Acest articol acoperă situațiile uzuale
          conform Codului Civil (Legea 287/2009) și legislației fiscale
          aplicabile. Pentru contracte cu clauze speciale (subînchiriere,
          spații comerciale, contracte multianuale mari), consultă un avocat
          sau notar.
        </p>
      </article>
    </div>
  )
}
