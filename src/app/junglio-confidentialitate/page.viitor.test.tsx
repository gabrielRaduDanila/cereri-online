import fs from 'fs'
import path from 'path'

// GARDĂ PENTRU POLITICA DE MÂINE — cea care se publică în ziua în care se aprinde clasamentul.
//
// Politica de azi (`page.tsx`) spune „Ce se trimite în afara telefonului: Nimic", și e adevărat:
// Firebase nu e configurat, iar clasamentul din aplicație arată un singur rând și scrie pe față
// că nu e pornit.
//
// În clipa în care copiii se văd între ei, propoziția aceea devine falsă. Textul păzit aici e
// înlocuitorul ei, ținut gata. NU se publică azi: o politică ce descrie date trimise când nu se
// trimite nimic e minciuna oglindă a celei curățate pe 2 septembrie, iar Google compară politica
// exact cu formularul Data safety, care azi spune „nu se colectează nimic".
//
// ⚠ CE PĂZEȘTE GARDA ASTA: că textul de mâine spune ADEVĂRUL ÎNTREG. Nu doar că nu minte, ci că
// nu tace: fiecare lucru care pleacă de pe telefon trebuie numit pe pagină. O politică din care
// lipsește un câmp e la fel de proastă ca una care inventează unul.
//
// ⚠ Se citește fără comentarii, ca la garda paginii de azi: comentariile de aici citează chiar
// propozițiile păzite.
const FISIER = process.env.POLITICA_VIITOR || path.join(__dirname, 'page.viitor.tsx')
const faraComentarii = (sursa: string): string => sursa.replace(/^\s*\/\/.*$/gm, '')

// Cele patru lucruri care pleacă de pe telefon, fiecare cu felul în care trebuie să apară pe
// pagină. Lista e aceeași cu `CAMPURI_TRIMISE` din aplicație (src/engine/randulMeu.js) — dacă
// aplicația găsește un al cincilea lucru de trimis, testul de mai jos îl cere și aici.
const CE_PLEACA: [string, RegExp, string][] = [
  ['id', /identificator anonim/i, 'un cod al telefonului, care nu spune nimic despre om'],
  ['nume', /numele? de jungl[ăa]/i, 'numele ales de aplicație dintr-o listă închisă'],
  ['avatar', /avatar/i, 'emoji-ul ales de copil dintr-o listă a noastră'],
  ['xp', /XP/, 'punctele din săptămâna curentă'],
  // ⚠ Al cincilea, adăugat pe 6 septembrie 2026, când userul a cerut ca și TRIBURILE să fie
  // adevărate: fără el nu se poate face nici clasamentul din trib, nici cel dintre triburi.
  ['trib', /trib/i, 'din ce trib e copilul — una din patru valori dintr-o listă închisă'],
]

// Ce trebuie spus limpede, dincolo de listă.
const CERUTE: [RegExp, string][] = [
  [/clasament/i, 'motivul pentru care pleacă ceva de pe telefon'],
  // ⚠ CELE TREI COMPETIȚII trebuie numite fiecare, nu înghesuite într-un „clasament". Un părinte
  // are dreptul să știe exact unde apare copilul lui și cine îl vede.
  [/în interiorul tribului|din tribul tău|din tribul lui|din același trib/i, 'clasamentul din interiorul tribului'],
  [/între triburi/i, 'clasamentul dintre triburi'],
  [/boss/i, 'bossul ligii — un nume văzut de tot tribul'],
  [/numele scris de p[ăa]rinte|numele adev[ăa]rat/i, 'trebuie spus anume ce NU pleacă'],
  [/r[ăa]m[âa]ne pe telefon/i, 'ce rămâne pe telefon se spune pe față, nu se lasă dedus'],
  [/Google/, 'unde ajung datele — Google, prin Firebase'],
  [/abonament/i, 'modelul de plată e abonamentul'],
  [/5 jocuri pe zi/i, 'limita zilnică din varianta gratuită'],
  [/Google Play/, 'plata trece prin Google Play'],
  [/nu cere permisiune de microfon/i, 'permisiunea de microfon a fost scoasă'],
]

// Ce n-are voie să rămână din textul de azi.
const INTERZISE: [RegExp, string][] = [
  [/[îi]n afara telefonului:?\s*<?[^>]*>?\s*Nimic/i, 'propoziția asta devine falsă când se aprinde clasamentul'],
  [/nu (se )?(trimite|colecteaz[ăa]) nimic/i, 'nu mai e adevărat: pleacă patru lucruri, numite mai sus'],
  [/cump[ăa]rare unic[ăa]/i, 'plata e abonament, nu cumpărare unică'],
]

describe('politica de mâine (se publică odată cu clasamentul, nu înainte)', () => {
  const cod = faraComentarii(fs.readFileSync(FISIER, 'utf8'))

  it.each(CE_PLEACA)('numește ce pleacă: %s (%s)', (_camp, tipar, motiv) => {
    expect({ motiv, gasit: tipar.test(cod) }).toEqual({ motiv, gasit: true })
  })

  it.each(CERUTE)('spune %s (%s)', (tipar, motiv) => {
    expect({ motiv, gasit: tipar.test(cod) }).toEqual({ motiv, gasit: true })
  })

  it.each(INTERZISE)('nu mai spune %s (%s)', (tipar, motiv) => {
    expect({ motiv, gasit: tipar.test(cod) }).toEqual({ motiv, gasit: false })
  })

  // ⚠ DATA E LĂSATĂ GOALĂ ANUME, cât timp textul e ciornă: nu se știe azi în ce zi se aprinde
  // clasamentul, iar o dată scrisă din burtă ar ajunge publicată așa.
  //
  // Cele două gărzi se prind una pe alta: aici se cere locul gol, iar garda paginii publicate
  // (page.test.tsx) cere o dată adevărată. Dacă cineva copiază ciorna peste page.tsx și uită să
  // pună data, pică acolo. Dacă pune data prea devreme, pică aici.
  it('cât timp e ciornă, data e un loc gol', () => {
    expect(cod).toMatch(/Ultima actualizare: ZZ /)
  })

  it('rămâne ascunsă din căutări, dar deschisă oricui are linkul', () => {
    expect(cod).toMatch(/robots:\s*\{\s*index:\s*false/)
  })

  // ⚠ LEGĂTURA CU APLICAȚIA. Lista de sus e scrisă de mână aici; dacă aplicația e pe disc, se
  // cere să fie ACEEAȘI cu `CAMPURI_TRIMISE` din engine/randulMeu.js. Fără cross-check, cineva
  // ar putea adăuga un al cincilea câmp în aplicație, iar pagina ar rămâne cu patru.
  it('lista de aici e aceeași cu cea din aplicație', () => {
    const caleApp = path.join(__dirname, '..', '..', '..', '..', '..', 'aplicatie_unity', 'app', 'src', 'engine', 'randulMeu.js')
    if (!fs.existsSync(caleApp)) {
      // Nu se sare în tăcere: se spune de ce n-a fost verificat.
      console.warn('randulMeu.js nu e pe disc — lista de câmpuri n-a putut fi confruntată cu aplicația')
      expect(CE_PLEACA.length).toBe(5)
      return
    }
    const sursa = fs.readFileSync(caleApp, 'utf8')
    const m = sursa.match(/CAMPURI_TRIMISE\s*=\s*\[([^\]]*)\]/)
    expect(m).not.toBeNull()
    const dinApp = (m as RegExpMatchArray)[1].split(',').map((s) => s.trim().replace(/^['"]|['"]$/g, '')).filter(Boolean)
    expect(dinApp.sort()).toEqual(CE_PLEACA.map(([c]) => c).sort())
  })
})
