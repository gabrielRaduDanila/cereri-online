'use client'

import { Document, Page, Text, View, Image } from '@react-pdf/renderer'
import { inregistreazaFonturi } from './fonts'
import { stiluriComune, fmtData, gol } from './comun'

inregistreazaFonturi()

export type ConventieIncetareInchiriereData = {
  propNume: string
  propCnp: string
  propCi: string
  propAdresa: string
  chirNume: string
  chirCnp: string
  chirCi: string
  chirAdresa: string
  imobAdresa: string
  dataContract: string
  dataIncetare: string
  garantieInitiala: string
  garantieRestituita: string
  cheiPredate: string
  utilitatiRegularizate: string
  observatii: string
  oras: string
  dataDocument: string
  semnPropDataUrl?: string | null
  semnChirDataUrl?: string | null
}

export default function ConventieIncetareInchirierePDF({
  data,
}: {
  data: ConventieIncetareInchiriereData
}) {
  return (
    <Document>
      <Page size="A4" style={stiluriComune.page}>
        <Text style={stiluriComune.titlu}>
          CONVENȚIE DE ÎNCETARE A CONTRACTULUI DE ÎNCHIRIERE
        </Text>

        <Text style={stiluriComune.paragraf}>
          Încheiată astăzi, {fmtData(data.dataDocument)}, în{' '}
          {gol(data.oras, 15)}, între:
        </Text>

        <Text style={stiluriComune.subtitlu}>1. PROPRIETAR</Text>
        <Text style={stiluriComune.paragraf}>
          {gol(data.propNume, 30)}, având CNP {gol(data.propCnp, 13)},
          identificat cu CI seria/nr. {gol(data.propCi, 10)}, domiciliat în{' '}
          {gol(data.propAdresa, 40)}, în calitate de proprietar/locator, și
        </Text>

        <Text style={stiluriComune.subtitlu}>2. CHIRIAȘ</Text>
        <Text style={stiluriComune.paragraf}>
          {gol(data.chirNume, 30)}, având CNP {gol(data.chirCnp, 13)},
          identificat cu CI seria/nr. {gol(data.chirCi, 10)}, domiciliat în{' '}
          {gol(data.chirAdresa, 40)}, în calitate de chiriaș/locatar,
        </Text>

        <Text style={stiluriComune.paragraf}>
          denumiți în continuare împreună „părțile", au convenit de comun
          acord încetarea contractului de închiriere având ca obiect imobilul
          situat la adresa {gol(data.imobAdresa, 40)}, încheiat la data de{' '}
          {fmtData(data.dataContract)}, în următoarele condiții:
        </Text>

        <Text style={stiluriComune.subtitlu}>Art. 1 — Data încetării</Text>
        <Text style={stiluriComune.paragraf}>
          Părțile convin că raportul contractual încetează începând cu data
          de {fmtData(data.dataIncetare)}, dată de la care contractul își
          încetează efectele.
        </Text>

        <Text style={stiluriComune.subtitlu}>Art. 2 — Garanția</Text>
        <Text style={stiluriComune.paragraf}>
          Garanția depusă inițial de chiriaș a fost în cuantum de{' '}
          {gol(data.garantieInitiala, 8)} lei. La data prezentei convenții,
          proprietarul restituie chiriașului suma de{' '}
          {gol(data.garantieRestituita, 8)} lei, reprezentând garanția netă
          după deducerea eventualelor sume datorate (chirie, utilități,
          reparații).
        </Text>

        <Text style={stiluriComune.subtitlu}>Art. 3 — Predarea imobilului</Text>
        <Text style={stiluriComune.paragraf}>
          Chiriașul predă proprietarului imobilul și un număr de{' '}
          {gol(data.cheiPredate, 3)} chei aferente. Predarea se face liber de
          bunurile chiriașului, în starea corespunzătoare uzurii normale,
          conform proces-verbalului separat sau prezentei convenții.
        </Text>

        <Text style={stiluriComune.subtitlu}>Art. 4 — Utilități</Text>
        <Text style={stiluriComune.paragraf}>
          {data.utilitatiRegularizate && data.utilitatiRegularizate.trim()
            ? `Situația utilităților la data încetării: ${data.utilitatiRegularizate}.`
            : 'Părțile confirmă că utilitățile au fost regularizate la data încetării contractului, fiecare parte suportând contravaloarea consumurilor și taxelor aferente perioadei de folosință.'}
        </Text>

        <Text style={stiluriComune.subtitlu}>Art. 5 — Efecte</Text>
        <Text style={stiluriComune.paragraf}>
          Prezenta convenție reprezintă acordul deplin al părților privind
          încetarea contractului de închiriere menționat. Părțile declară că
          nu mai au pretenții una față de cealaltă în legătură cu contractul
          încetat, cu excepția celor prevăzute expres mai sus.
        </Text>

        {data.observatii && data.observatii.trim() ? (
          <>
            <Text style={stiluriComune.subtitlu}>Art. 6 — Observații</Text>
            <Text style={stiluriComune.paragraf}>{data.observatii}</Text>
          </>
        ) : null}

        <Text style={stiluriComune.paragraf}>
          Prezenta convenție a fost întocmită în 2 (două) exemplare, câte
          unul pentru fiecare parte.
        </Text>

        <View style={stiluriComune.doiSemnatari}>
          <View style={stiluriComune.semnaturaCol}>
            <Text style={stiluriComune.semnaturaEticheta}>PROPRIETAR</Text>
            <Text style={{ marginBottom: 6 }}>{gol(data.propNume, 20)}</Text>
            {data.semnPropDataUrl ? (
              <Image
                src={data.semnPropDataUrl}
                style={stiluriComune.semnaturaImg}
              />
            ) : (
              <Text>____________________</Text>
            )}
          </View>
          <View style={stiluriComune.semnaturaCol}>
            <Text style={stiluriComune.semnaturaEticheta}>CHIRIAȘ</Text>
            <Text style={{ marginBottom: 6 }}>{gol(data.chirNume, 20)}</Text>
            {data.semnChirDataUrl ? (
              <Image
                src={data.semnChirDataUrl}
                style={stiluriComune.semnaturaImg}
              />
            ) : (
              <Text>____________________</Text>
            )}
          </View>
        </View>
      </Page>
    </Document>
  )
}
