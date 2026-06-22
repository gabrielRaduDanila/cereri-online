'use client'

import { Document, Page, Text, View, Image } from '@react-pdf/renderer'
import { inregistreazaFonturi } from './fonts'
import { stiluriComune, fmtData, gol } from './comun'

inregistreazaFonturi()

export type ContractInchiriereData = {
  propNume: string
  propCnp: string
  propCi: string
  propAdresa: string

  chirNume: string
  chirCnp: string
  chirCi: string
  chirAdresa: string

  imobAdresa: string
  imobTip: string
  imobSuprafata: string
  imobCamere: string

  dataStart: string
  dataSfarsit: string
  chirieLunara: string
  ziuaScadenta: string
  garantie: string
  zileRestituireGarantie: string

  utilitati: string
  preaviz: string

  // anexa - proces verbal
  citireElectricitate: string
  citireGazNaturale: string
  citireApaRece: string
  citireApaCalda: string
  numarChei: string
  starePereti: string
  starePardoseala: string
  mobilier: string
  electrocasnice: string
  observatii: string

  oras: string
  dataDocument: string
  semnPropDataUrl?: string | null
  semnChirDataUrl?: string | null
}

function Semnaturi({ data }: { data: ContractInchiriereData }) {
  return (
    <View style={stiluriComune.doiSemnatari}>
      <View style={stiluriComune.semnaturaCol}>
        <Text style={stiluriComune.semnaturaEticheta}>
          Proprietar (locator),
        </Text>
        <Text>{gol(data.propNume, 20)}</Text>
        {data.semnPropDataUrl ? (
          <Image
            src={data.semnPropDataUrl}
            style={stiluriComune.semnaturaImg}
          />
        ) : (
          <Text style={{ marginTop: 16 }}>____________________</Text>
        )}
      </View>
      <View style={stiluriComune.semnaturaCol}>
        <Text style={stiluriComune.semnaturaEticheta}>
          Chiriaș (locatar),
        </Text>
        <Text>{gol(data.chirNume, 20)}</Text>
        {data.semnChirDataUrl ? (
          <Image
            src={data.semnChirDataUrl}
            style={stiluriComune.semnaturaImg}
          />
        ) : (
          <Text style={{ marginTop: 16 }}>____________________</Text>
        )}
      </View>
    </View>
  )
}

export default function ContractInchirierePDF({
  data,
}: {
  data: ContractInchiriereData
}) {
  return (
    <Document>
      {/* PAGINA 1 - CONTRACTUL */}
      <Page size="A4" style={stiluriComune.page}>
        <Text style={stiluriComune.titlu}>CONTRACT DE ÎNCHIRIERE</Text>

        <Text style={stiluriComune.subtitlu}>I. PĂRȚILE CONTRACTANTE</Text>
        <Text style={stiluriComune.paragraf}>
          <Text style={{ fontWeight: 'bold' }}>Proprietar (locator):</Text>{' '}
          {gol(data.propNume, 25)}, CNP {gol(data.propCnp, 13)}, CI seria și nr.{' '}
          {gol(data.propCi, 10)}, cu domiciliul în {gol(data.propAdresa, 40)}.
        </Text>
        <Text style={stiluriComune.paragraf}>
          <Text style={{ fontWeight: 'bold' }}>Chiriaș (locatar):</Text>{' '}
          {gol(data.chirNume, 25)}, CNP {gol(data.chirCnp, 13)}, CI seria și nr.{' '}
          {gol(data.chirCi, 10)}, cu domiciliul în {gol(data.chirAdresa, 40)}.
        </Text>

        <Text style={stiluriComune.subtitlu}>II. OBIECTUL CONTRACTULUI</Text>
        <Text style={stiluriComune.paragraf}>
          Locatorul închiriază locatarului imobilul situat la adresa{' '}
          {gol(data.imobAdresa, 40)}, tip {gol(data.imobTip, 10)}, având o
          suprafață utilă de {gol(data.imobSuprafata, 5)} mp și{' '}
          {gol(data.imobCamere, 2)} camere, pe perioada{' '}
          {fmtData(data.dataStart)} — {fmtData(data.dataSfarsit)}.
          Starea imobilului la data predării, contoarele, inventarul mobilierului
          și al electrocasnicelor sunt consemnate în Anexa 1 — Proces-verbal de
          predare-primire, parte integrantă a prezentului contract.
        </Text>

        <Text style={stiluriComune.subtitlu}>III. CHIRIA</Text>
        <Text style={stiluriComune.paragraf}>
          Chiria lunară este de {gol(data.chirieLunara, 6)} lei, plătibilă până
          în ziua de {gol(data.ziuaScadenta, 2)} a fiecărei luni, prin
          virament bancar sau numerar, cu eliberarea unei dovezi de plată de
          către locator.
        </Text>

        <Text style={stiluriComune.subtitlu}>IV. GARANȚIA</Text>
        <Text style={stiluriComune.paragraf}>
          La semnarea prezentului contract, locatarul depune o garanție în
          valoare de {gol(data.garantie, 6)} lei. Garanția nu reprezintă plata
          anticipată a chiriei și nu se imputează automat asupra ultimei luni de
          chirie.
        </Text>
        <Text style={stiluriComune.paragraf}>
          Garanția se restituie integral locatarului în termen de maximum{' '}
          {gol(data.zileRestituireGarantie, 2)} zile de la încetarea
          contractului și predarea efectivă a imobilului, cu îndeplinirea
          cumulativă a următoarelor condiții:
        </Text>
        <Text style={{ ...stiluriComune.paragraf, marginLeft: 14 }}>
          a) chiria și toate utilitățile aferente perioadei de locațiune au fost
          achitate integral, inclusiv eventuale facturi emise după plecare
          pentru consum efectuat în perioada contractuală;{'\n'}
          b) imobilul, mobilierul și electrocasnicele se predau în starea
          consemnată în Anexa 1 — Proces-verbal de predare-primire, ținând cont
          de uzura normală corespunzătoare duratei locațiunii;{'\n'}
          c) toate cheile, telecomenzile și accesoriile primite la intrare se
          restituie integral locatorului;{'\n'}
          d) locatarul nu are alte obligații financiare neexecutate față de
          locator sau față de asociația de proprietari pentru perioada de
          locațiune.
        </Text>
        <Text style={stiluriComune.paragraf}>
          În caz de neîndeplinire parțială a condițiilor de mai sus, locatorul
          are dreptul să rețină din garanție contravaloarea daunelor produse,
          stabilită prin documente justificative (facturi, devize, fotografii),
          urmând să restituie diferența rămasă, dacă există. Locatorul nu poate
          reține din garanție pentru uzura normală a imobilului sau a bunurilor
          aferente.
        </Text>

        <Text style={stiluriComune.subtitlu}>V. UTILITĂȚI ȘI CHELTUIELI</Text>
        <Text style={stiluriComune.paragraf}>
          Cheltuielile cu utilitățile (energie electrică, gaze, apă, salubritate,
          internet, întreținere etc.) sunt în sarcina {gol(data.utilitati, 10)}.
          Citirile contoarelor la momentul predării sunt consemnate în Anexa 1.
        </Text>

        <Text style={stiluriComune.subtitlu}>VI. OBLIGAȚIILE PĂRȚILOR</Text>
        <Text style={stiluriComune.paragraf}>
          Locatorul se obligă să predea imobilul în stare bună de folosință, să
          asigure folosința liniștită și utilă a imobilului pe toată durata
          locațiunii și să efectueze reparațiile majore.
        </Text>
        <Text style={stiluriComune.paragraf}>
          Locatarul se obligă să folosească imobilul cu prudență și diligență,
          să plătească la termen chiria și utilitățile, să nu efectueze
          modificări fără acordul scris al locatorului și să predea imobilul la
          încetarea contractului în starea în care l-a primit, mai puțin uzura
          normală.
        </Text>

        <Text style={stiluriComune.subtitlu}>VII. ÎNCETAREA CONTRACTULUI</Text>
        <Text style={stiluriComune.paragraf}>
          Oricare dintre părți poate solicita încetarea contractului cu un
          preaviz de {gol(data.preaviz, 2)} zile, notificat în scris.
          Contractul încetează de drept la expirarea perioadei stabilite, dacă
          părțile nu convin în scris prelungirea.
        </Text>

        <Text style={stiluriComune.paragraf}>
          Întocmit la {gol(data.oras, 15)}, în data de{' '}
          {fmtData(data.dataDocument)}, în două exemplare originale, câte unul
          pentru fiecare parte.
        </Text>

        <Semnaturi data={data} />
      </Page>

      {/* PAGINA 2 - ANEXA 1 PROCES VERBAL */}
      <Page size="A4" style={stiluriComune.page}>
        <Text style={stiluriComune.titlu}>
          ANEXA 1 — PROCES-VERBAL DE PREDARE-PRIMIRE
        </Text>

        <Text style={stiluriComune.paragraf}>
          Încheiat astăzi, {fmtData(data.dataDocument)}, între{' '}
          {gol(data.propNume, 25)} (proprietar) și {gol(data.chirNume, 25)}{' '}
          (chiriaș), ca parte integrantă a Contractului de închiriere cu privire
          la imobilul situat la adresa {gol(data.imobAdresa, 40)}.
        </Text>

        <Text style={stiluriComune.subtitlu}>1. CITIRI CONTOARE LA PREDARE</Text>
        <Text style={stiluriComune.paragraf}>
          Energie electrică: {gol(data.citireElectricitate, 8)} kWh{'\n'}
          Gaze naturale: {gol(data.citireGazNaturale, 8)} mc{'\n'}
          Apă rece: {gol(data.citireApaRece, 8)} mc{'\n'}
          Apă caldă: {gol(data.citireApaCalda, 8)} mc
        </Text>

        <Text style={stiluriComune.subtitlu}>2. CHEI ȘI ACCESORII</Text>
        <Text style={stiluriComune.paragraf}>
          Locatorul predă, iar locatarul primește un număr de{' '}
          {gol(data.numarChei, 2)} chei, împreună cu telecomenzile și
          accesoriile aferente accesului în imobil (dacă este cazul).
        </Text>

        <Text style={stiluriComune.subtitlu}>3. STAREA IMOBILULUI</Text>
        <Text style={stiluriComune.paragraf}>
          Pereți și zugrăveală:{' '}
          {data.starePereti && data.starePereti.trim()
            ? data.starePereti
            : '_______________________________________________'}
        </Text>
        <Text style={stiluriComune.paragraf}>
          Pardoseală:{' '}
          {data.starePardoseala && data.starePardoseala.trim()
            ? data.starePardoseala
            : '_______________________________________________'}
        </Text>

        <Text style={stiluriComune.subtitlu}>4. INVENTAR MOBILIER</Text>
        <Text style={stiluriComune.paragraf}>
          {data.mobilier && data.mobilier.trim()
            ? data.mobilier
            : '_______________________________________________\n_______________________________________________\n_______________________________________________'}
        </Text>

        <Text style={stiluriComune.subtitlu}>5. INVENTAR ELECTROCASNICE</Text>
        <Text style={stiluriComune.paragraf}>
          {data.electrocasnice && data.electrocasnice.trim()
            ? data.electrocasnice
            : '_______________________________________________\n_______________________________________________\n_______________________________________________'}
        </Text>

        <Text style={stiluriComune.subtitlu}>6. OBSERVAȚII</Text>
        <Text style={stiluriComune.paragraf}>
          {data.observatii && data.observatii.trim()
            ? data.observatii
            : 'Părțile constată că nu există defecte sau deteriorări existente, cu excepția uzurii normale corespunzătoare vechimii bunurilor. Eventuale observații suplimentare: _______________________________________________'}
        </Text>

        <Text style={stiluriComune.paragraf}>
          Prezentul proces-verbal a fost încheiat în două exemplare, câte unul
          pentru fiecare parte, și constituie referința pentru restituirea
          garanției și constatarea eventualelor daune la încetarea contractului.
        </Text>

        <Semnaturi data={data} />
      </Page>
    </Document>
  )
}
