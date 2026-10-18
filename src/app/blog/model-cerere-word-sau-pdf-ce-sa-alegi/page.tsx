import type { Metadata } from 'next'
import Link from 'next/link'
import { getArticol } from '@/lib/articole'
import { buildArticleJsonLd } from '@/lib/structured-data'

const meta = getArticol('model-cerere-word-sau-pdf-ce-sa-alegi')!

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
    intrebare: 'De ce instituțiile preferă PDF-ul?',
    raspuns:
      'PDF-ul nu poate fi modificat accidental (sau intenționat) după semnare. Arată identic pe orice dispozitiv — telefon, laptop, imprimanta de la ghișeu. Nu depinde de versiunea de Word a destinatarului. În plus, poate fi semnat electronic cu validitate juridică (semnătură calificată).',
  },
  {
    intrebare: 'Când am totuși nevoie de Word?',
    raspuns:
      'Când cineva îți cere expres un format editabil ca să îl completezi direct cu datele altei persoane (de obicei în HR-ul firmei, când secretariatul pre-completează cererile angajaților). Sau când e un formular tip al unei instituții care îți cere să îl descarci, completezi și reîncarci.',
  },
  {
    intrebare: 'Pot converti un PDF în Word?',
    raspuns:
      'Da, cu Google Docs (gratuit) sau servicii online precum SmallPDF, ILovePDF, Adobe Acrobat online. Rezultatul: nu e perfect — layoutul se poate schimba, mai ales la documente cu tabele sau semnături. Pentru cereri simple cu text liniar, conversia e acceptabilă.',
  },
  {
    intrebare: 'Cum convertesc Word în PDF?',
    raspuns:
      'În Word, mergi la File → Save As → alege „PDF" la Save as type. Sau File → Export → Create PDF/XPS. Pe Google Docs: File → Download → PDF Document. Pe Mac: File → Export As → PDF. Pentru majoritatea cererilor, conversia păstrează perfect formatarea.',
  },
  {
    intrebare: 'Semnătura electronică din Word e valabilă?',
    raspuns:
      'Doar dacă e semnătură electronică calificată (eIDAS), nu doar o imagine lipită. În practică, pentru cererile uzuale către instituții publice, soluția universală e: generezi PDF-ul, îl printezi, semnezi olograf, scanezi, depui. Sau mai simplu — folosești un generator care îți permite să semnezi cu mouse-ul direct în PDF.',
  },
]

export default function ArticolWordVsPdf() {
  const jsonLd = buildArticleJsonLd(
    meta,
    intrebariFrecvente,
    'Model cerere Word sau PDF'
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
        <span className="text-slate-700">Model cerere Word sau PDF</span>
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
          Cauți „model cerere Word" sau „model cerere PDF" — ambele sunt
          formate potrivite, dar nu interschimbabile. Instituțiile românești
          au preferințe clare: pentru cererile pe care le DEPUI, PDF-ul e
          standardul; pentru formularele pe care le COMPLETEZI tip, Word-ul
          e mai practic. Iată când folosești fiecare.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Când folosești PDF (recomandat în 90% din cazuri)
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Format standard pentru orice cerere pe care o depui la o instituție
          publică sau privată. Motivele sunt practice:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>
            <strong>Nu poate fi modificat accidental</strong> după semnare —
            protecție juridică
          </li>
          <li>
            <strong>Arată identic</strong> pe orice dispozitiv, orice imprimantă
          </li>
          <li>
            <strong>Nu depinde de versiunea</strong> de Word a destinatarului
            (Word 2007 vs. 365 face diferențe de formatare)
          </li>
          <li>
            <strong>Acceptat universal</strong> pe toate platformele online
            (ghiseul.ro, portaluri instituționale, e-mail)
          </li>
          <li>
            <strong>Permite semnătura</strong> electronică calificată, cu
            validitate juridică
          </li>
        </ul>
        <p className="text-slate-700 leading-relaxed">
          Instituții care cer explicit PDF: ANAF, Casa de Pensii, AJPIS,
          majoritatea primăriilor cu portal online, băncile, operatorii de
          telefonie, companiile de utilități.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Când ai nevoie de Word
        </h2>
        <p className="text-slate-700 leading-relaxed">
          În cazurile specifice:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>
            <strong>Formulare tip ale instituției</strong> — îți cer să le
            descarci, completezi și reîncarci. Rar, dar există
          </li>
          <li>
            <strong>Cereri pre-completate de secretariat HR</strong> — unele
            firme au șabloane Word pe care le completează cu datele tale,
            apoi tu doar semnezi
          </li>
          <li>
            <strong>Cereri care necesită modificări repetate</strong> —
            dacă trebuie să trimiți aceeași cerere către 10 instituții cu
            adrese diferite, Word e mai ușor de editat
          </li>
          <li>
            <strong>Când cineva îți cere expres</strong> format editabil
          </li>
        </ul>

        <div className="bg-blue-700 text-white rounded-lg p-5 my-4">
          <p className="font-semibold mb-2">
            🚀 Generator PDF — 11 modele oficiale
          </p>
          <p className="text-sm text-blue-50 mb-3">
            Completezi datele, semnezi cu mouse-ul, descarci PDF-ul gata de
            depus. Dacă ai nevoie de versiunea Word, o convertești în 30
            secunde (vezi mai jos).
          </p>
          <Link
            href="/"
            className="inline-block bg-white text-blue-700 font-medium px-4 py-2 rounded-md hover:bg-slate-100 transition"
          >
            Vezi toate modelele →
          </Link>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Cum convertești PDF → Word
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Gratuit și rapid, cu Google Docs (recomandat pentru acuratețe):
        </p>
        <ol className="list-decimal pl-6 space-y-2 text-slate-700">
          <li>Mergi la drive.google.com și încarcă PDF-ul</li>
          <li>Click dreapta pe PDF → „Deschide cu" → „Google Docs"</li>
          <li>Google convertește automat — poți edita textul</li>
          <li>File → Download → Microsoft Word (.docx)</li>
        </ol>
        <p className="text-slate-700 leading-relaxed">
          Alternative: SmallPDF, ILovePDF, Adobe Acrobat online. Pentru
          cereri simple cu text liniar, orice variantă merge. Pentru
          documente cu tabele sau semnături, Google Docs păstrează cel mai
          bine formatarea.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Cum convertești Word → PDF
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Mult mai simplu — toate programele moderne o fac nativ:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>
            <strong>Microsoft Word:</strong> File → Save As → alege „PDF" la
            Save as type
          </li>
          <li>
            <strong>Google Docs:</strong> File → Download → PDF Document
          </li>
          <li>
            <strong>LibreOffice:</strong> File → Export As → Export as PDF
          </li>
          <li>
            <strong>Mac Pages:</strong> File → Export To → PDF
          </li>
          <li>
            <strong>Online (fără instalare):</strong> SmallPDF, ILovePDF —
            încarci fișierul, descarci PDF-ul
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-900 pt-4">
          Recomandarea finală
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Pentru majoritatea cererilor către instituții românești, PDF-ul e
          alegerea corectă. E formatul care protejează pe amândoi: pe tine
          (nimeni nu poate modifica cererea după ce ai semnat-o) și pe
          instituție (document stabil, imprimabil, arhivabil).
        </p>
        <p className="text-slate-700 leading-relaxed">
          Folosește Word doar când instituția cere expres sau când e un
          formular tip pe care îl completezi. Pentru toate celelalte situații
          — generezi direct în PDF, semnezi, depui. Economisești un pas
          (conversia) și eviți probleme de compatibilitate.
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
          href="/"
          className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-medium px-6 py-3 rounded-md transition mt-6"
        >
          Vezi toate modelele de cereri →
        </Link>

        <hr className="border-slate-200 my-8" />

        <p className="text-sm text-slate-500">
          <strong>Notă:</strong> Pentru cereri cu valoare juridică mare
          (contracte, moșteniri, acte notariale), format-ul alege-l la
          recomandarea avocatului sau notarului. Pentru restul (cereri uzuale,
          adeverințe, reclamații), PDF-ul rămâne alegerea sigură.
        </p>
      </article>
    </div>
  )
}
