import type { Metadata } from 'next'
import Link from 'next/link'
import { getArticol } from '@/lib/articole'
import { buildArticleJsonLd } from '@/lib/structured-data'

const meta = getArticol('adeverinta-de-la-primarie-tipuri-si-cum-le-obtii')!

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
    intrebare: 'Cât durează eliberarea unei adeverințe de la primărie?',
    raspuns:
      'Pentru majoritatea adeverințelor uzuale (domiciliu, componență familie), termenul e de 3-7 zile lucrătoare. La primăriile mari cu digitalizare bună poți primi documentul chiar în ziua depunerii cererii. Adeverințele care implică verificări în registrul agricol sau fiscal pot dura până la 30 zile.',
  },
  {
    intrebare: 'Costă ceva sau sunt gratuite?',
    raspuns:
      'Depinde de tip. Adeverințele de domiciliu și componență familie sunt de obicei GRATUITE. Adeverințele fiscale (rol fiscal, impozite locale) au taxă de timbru de 2-10 lei, plătibilă la casieria primăriei sau online. Adeverințele pentru instituții specifice (bancă, notar) pot avea taxe suplimentare.',
  },
  {
    intrebare: 'Le pot cere online?',
    raspuns:
      'Da, tot mai multe primării permit solicitarea online prin platforma ghiseul.ro sau prin propriul portal. Ai nevoie de cont ghiseul.ro (verificat cu buletin) sau semnătură electronică. Ridicarea documentului se face fie prin poștă, fie de la ghișeu, în funcție de opțiunea primăriei.',
  },
  {
    intrebare: 'De ce documente am nevoie când solicit o adeverință?',
    raspuns:
      'În general: actul de identitate în original și copie. Pentru adeverințe fiscale pot cere și rolul fiscal, iar pentru componență familie — actele copiilor. Dacă adeverința e pentru altă persoană (părinte, rudă), ai nevoie de procură notarială.',
  },
  {
    intrebare: 'Ce e „adeverința de rol fiscal" și când o folosesc?',
    raspuns:
      'Rolul fiscal e evidența pe care primăria o ține despre bunurile tale impozabile (imobile, terenuri, mașini). Adeverința de rol fiscal atestă că nu ai datorii sau că ești proprietarul unor bunuri specifice. E cerută mai des pentru: dosare de vânzare imobil, moștenire, credite ipotecare, dosare de subvenții agricole.',
  },
]

export default function ArticolAdeverintaPrimarie() {
  const jsonLd = buildArticleJsonLd(
    meta,
    intrebariFrecvente,
    'Adeverințe primărie'
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
        <span className="text-slate-700">Adeverințe primărie</span>
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
          Faci dosar pentru o bursă, o alocație, un credit sau doar te muți în
          altă parte — și cineva îți cere „o adeverință de la primărie". Sunt
          mai multe tipuri, cu scopuri diferite, iar dacă ceri greșit, pierzi
          drumul. Iată harta scurtă a celor mai uzuale patru.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Adeverință de domiciliu sau reședință
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Cea mai cerută. Atestă că ești înregistrat cu domiciliul (sau
          reședința temporară) la o anumită adresă din localitate. E cerută la:
          înscriere școală/grădiniță (locuri prioritare pe circumscripție),
          dosar burse, alocație de stat, dosar șomaj, unele credite, chiar și
          pentru portare număr de telefon la un operator care nu te are pe
          adresa curentă.
        </p>
        <p className="text-slate-700 leading-relaxed">
          E emisă pe baza înregistrării din Registrul de Evidență a Populației
          — deci trebuie să ai buletinul actualizat cu adresa. E gratuită, se
          eliberează de obicei în 1-3 zile.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Adeverință de componență familie
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Confirmă cine locuiește la aceeași adresă cu tine (soț/soție, copii,
          alți membri). Cerută pentru: alocație de stat pentru copii, alocație
          de susținere a familiei, ajutor social, dosar de subvenție locuință,
          uneori la instituții pentru gestionarea drepturilor familiei.
        </p>
        <p className="text-slate-700 leading-relaxed">
          Ai nevoie de actele de identitate ale tuturor membrilor familiei
          (sau certificate de naștere pentru copiii minori) și, uneori,
          declarație pe propria răspundere. E gratuită, se eliberează în
          câteva zile.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Adeverință de rol fiscal
        </h2>
        <p className="text-slate-700 leading-relaxed">
          E din registrul agricol al primăriei, care ține evidența bunurilor
          impozabile (imobile, terenuri, mașini). Adeverința atestă situația
          fiscală: ce proprietăți figurezi că ai, dacă ai datorii, dacă figurezi
          ca „lipsă bunuri". Cerută pentru: dosare de vânzare imobile, dosare
          de moștenire, credite ipotecare, dosare de subvenții agricole (APIA),
          dovada situației la ANAF.
        </p>
        <p className="text-slate-700 leading-relaxed">
          Are taxă de timbru (2-10 lei), se eliberează în 3-7 zile la primării
          medii, mai rapid la cele digitalizate.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Adeverință fiscală (impozite locale)
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Atestă că ești la zi cu plata impozitelor și taxelor locale (impozit
          pe clădiri, teren, auto, salubrizare). E cerută cel mai frecvent
          pentru: vânzare imobil (obligatoriu la notar), înscriere autoturism
          la Registrul Auto Român, dosare la instituțiile publice care
          verifică statusul de bun-platnic.
        </p>
        <p className="text-slate-700 leading-relaxed">
          <strong>Atenție:</strong> dacă ai datorii, primăria nu emite
          adeverința decât după ce le achiți. Verifică situația în avans,
          eventual online pe portalul primăriei sau la casierie.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Cum ceri o adeverință
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Ai două variante. La ghișeu depui o cerere scrisă (unele primării au
          formulare tip la avizier sau pe site) împreună cu actul de identitate
          și, dacă e cazul, dovada plății taxei de timbru. Primești o
          confirmare cu data la care revii pentru ridicare.
        </p>
        <p className="text-slate-700 leading-relaxed">
          Online — prin ghiseul.ro sau portalul primăriei tale. Ai nevoie de
          cont activ (verificat cu buletin la un ghișeu ANAF sau prin
          videoidentificare) sau semnătură electronică. Poți alege să primești
          documentul digital sau prin poștă la adresă.
        </p>

        <div className="bg-blue-700 text-white rounded-lg p-5 my-4">
          <p className="font-semibold mb-2">
            🚀 Generează cererea în 2 minute
          </p>
          <p className="text-sm text-blue-50 mb-3">
            Alegi tipul adeverinței, scrii scopul, semnezi cu mouse-ul,
            descarci PDF-ul. Îl depui la primărie sau îl atașezi la cererea
            online.
          </p>
          <Link
            href="/cereri/adeverinta-primarie"
            className="inline-block bg-white text-blue-700 font-medium px-4 py-2 rounded-md hover:bg-slate-100 transition"
          >
            Deschide generatorul →
          </Link>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Sfaturi înainte să te duci la ghișeu
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Sună mai întâi la primărie sau uită-te pe site — programul de
          lucru cu publicul e adesea diferit de programul general (dimineața
          are frecvent 2-3 ore dedicate cetățenilor). Ai actele originale ȘI
          copii — unele primării cer amândouă. Dacă adeverința e pentru altă
          persoană (părinte, rudă), pregătește procura notarială. Și verifică
          la instituția care ți-o cere care e termenul de valabilitate al
          adeverinței — de obicei 30-90 zile.
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
          href="/cereri/adeverinta-primarie"
          className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-medium px-6 py-3 rounded-md transition mt-6"
        >
          Generează cererea de adeverință →
        </Link>

        <hr className="border-slate-200 my-8" />

        <p className="text-sm text-slate-500">
          <strong>Notă:</strong> Procedurile pot varia ușor de la o primărie
          la alta, în funcție de gradul de digitalizare și de regulamentul
          intern. Pentru situații atipice (adrese nerezolvate în registru,
          conflicte de proprietate, cazuri speciale), interesează-te direct la
          primăria de domiciliu.
        </p>
      </article>
    </div>
  )
}
