import fs from 'fs'
import path from 'path'

// GARDĂ PENTRU POLITICA DE CONFIDENȚIALITATE A APLICAȚIEI JUNGLIO.
//
// De ce există: pagina asta e citită de verificatorul Google Play și comparată cu ce face
// pachetul. Pe 2 septembrie 2026 spunea două lucruri neadevărate — „cumpărare unică" (aplicația
// are abonament) și un clasament găzduit pe Firebase, care nu există în aplicație. O politică
// ce descrie date plecate de pe telefon când nu pleacă nimic e motiv de respingere.
//
// ⚠ Se citește codul FĂRĂ COMENTARII: comentariul de sus citează chiar textul interzis, ca să
// se știe de ce a fost scos. O gardă care se uită și la comentarii se împiedică de ea însăși.

// Implicit se uită la pagina adevărată. `POLITICA_FISIER` există ca să se poată dovedi că
// garda MUȘCĂ: se dă calea unei variante vechi (`git show HEAD:...`) și testele trebuie să pice.
// Așa nu se strică niciodată fișierul adevărat ca să se încerce garda.
const FISIER = process.env.POLITICA_FISIER || path.join(__dirname, 'page.tsx')

export function faraComentarii(sursa: string): string {
  return sursa.replace(/^\s*\/\/.*$/gm, '')
}

// Ce NU are voie să apară în pagina livrată, și motivul.
const INTERZISE: [RegExp, string][] = [
  [/Firebase/i, 'aplicația nu folosește Firebase — ar scrie că pleacă date de pe telefon'],
  [/Firestore/i, 'aplicația nu folosește Firestore'],
  [/cump[ăa]rare unic[ăa]/i, 'plata e abonament, nu cumpărare unică'],
  [/clasament/i, 'clasamentul nu există în aplicație'],
  [/identificator anonim/i, 'nu se trimite niciun identificator'],
  [/nume de jungl[ăa]/i, 'numele de junglă era doar pentru clasament'],
]

// Ce TREBUIE să apară, fiindcă așa se comportă aplicația.
const CERUTE: [RegExp, string][] = [
  [/abonament/i, 'modelul de plată e abonamentul'],
  [/5 jocuri pe zi/i, 'limita zilnică din varianta gratuită'],
  [/Google Play/, 'plata trece prin Google Play'],
  [/nu cere permisiune de microfon/i, 'permisiunea de microfon a fost scoasă'],
]

describe('politica de confidențialitate Junglio (pagina publicată)', () => {
  const cod = faraComentarii(fs.readFileSync(FISIER, 'utf8'))

  it.each(INTERZISE)('nu spune %s (%s)', (tipar, motiv) => {
    expect({ motiv, gasit: tipar.test(cod) }).toEqual({ motiv, gasit: false })
  })

  it.each(CERUTE)('spune %s (%s)', (tipar, motiv) => {
    expect({ motiv, gasit: tipar.test(cod) }).toEqual({ motiv, gasit: true })
  })

  it('are o dată de actualizare', () => {
    expect(cod).toMatch(/Ultima actualizare: \d{1,2} \p{L}+ \d{4}/u)
  })

  it('rămâne ascunsă din căutări, dar deschisă oricui are linkul', () => {
    expect(cod).toMatch(/robots:\s*\{\s*index:\s*false/)
  })

  // ⚠ PAGINA NU ARE VOIE SĂ ANUNȚE O ÎNTRECERE ÎNTRE TRIBURI CÂT TIMP TRIBURILE SUNT INVENTATE.
  //
  // Userul, 6 septembrie 2026: „triburile să fie și ele adevărate", și apoi, despre înlocuirea
  // punctelor simulate cu suma adevărată: „să nu uiți asta. Să o faci neapărat."
  //
  // Ca să nu depindă de ținerea mea de minte, stă aici: în clipa în care cineva copiază ciorna
  // (page.viitor.tsx) peste pagina publicată, testul ăsta se uită în aplicație și cade dacă
  // clasamentul echipelor mai vine din `simulatedTeamXp`. Adică pagina nu se poate publica
  // înainte ca triburile să fie chiar adevărate.
  it('dacă anunță întrecerea dintre triburi, triburile nu mai au voie să fie simulate', () => {
    if (!/între triburi/i.test(cod)) return // pagina de azi nu anunță nimic de felul ăsta
    const caleApp = path.join(__dirname, '..', '..', '..', '..', '..', 'aplicatie_unity', 'app', 'src', 'screens', 'ChampionshipScreen.js')
    if (!fs.existsSync(caleApp)) {
      throw new Error('pagina anunță întrecerea dintre triburi, dar aplicația nu e pe disc ca să pot verifica')
    }
    const ecran = fs.readFileSync(caleApp, 'utf8')
    expect({ ecran: 'ChampionshipScreen.js', foloseste_puncte_simulate: /standingsAcum|simulatedTeamXp/.test(ecran) })
      .toEqual({ ecran: 'ChampionshipScreen.js', foloseste_puncte_simulate: false })
  })
})
