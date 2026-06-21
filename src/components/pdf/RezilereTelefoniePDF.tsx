'use client'

import { Document, Page, Text, View, Image } from '@react-pdf/renderer'
import { inregistreazaFonturi } from './fonts'
import { stiluriComune, fmtData, gol, subsemnat, domiciliatGen } from './comun'

inregistreazaFonturi()

export type RezilereTelefonieData = {
  gen: 'M' | 'F' | ''
  operator: string
  numeAbonat: string
  cnp: string
  adresa: string
  numarContract: string
  dataReziliere: string
  tipServiciu: string
  motiv: string
  oras: string
  dataDocument: string
  semnaturaDataUrl?: string | null
}

export default function RezilereTelefoniePDF({
  data,
}: {
  data: RezilereTelefonieData
}) {
  return (
    <Document>
      <Page size="A4" style={stiluriComune.page}>
        <View style={stiluriComune.antet}>
          <Text>Către,</Text>
          <Text>{gol(data.operator, 20)}</Text>
        </View>

        <Text style={stiluriComune.titlu}>
          NOTIFICARE DE REZILIERE A CONTRACTULUI
        </Text>

        <Text style={stiluriComune.paragraf}>
          {subsemnat(data.gen)} {gol(data.numeAbonat, 30)}, având CNP{' '}
          {gol(data.cnp, 13)}, {domiciliatGen(data.gen)} în{' '}
          {gol(data.adresa, 40)}, în calitate de abonat/client al{' '}
          {gol(data.operator, 15)}, titular al contractului nr.{' '}
          {gol(data.numarContract, 12)}, prin prezenta vă notific decizia de a
          rezilia contractul de furnizare {gol(data.tipServiciu, 20)} începând
          cu data de {fmtData(data.dataReziliere)}.
        </Text>

        <Text style={stiluriComune.paragraf}>
          {data.motiv && data.motiv.trim()
            ? `Motivul rezilierii: ${data.motiv}.`
            : 'Rezilierea se solicită conform prevederilor contractuale și legale aplicabile.'}
        </Text>

        <Text style={stiluriComune.paragraf}>
          Vă rog să confirmați primirea prezentei notificări, să procedați la
          încetarea contractului la termenul indicat, să emiteți factura finală
          și să închideți eventualele servicii recurente. Solicit, de asemenea,
          deblocarea oricăror echipamente și confirmarea în scris a încetării
          relației contractuale.
        </Text>

        <View style={stiluriComune.semnaturaRand}>
          <View style={stiluriComune.semnaturaCol}>
            <Text style={stiluriComune.semnaturaEticheta}>Data:</Text>
            <Text>{fmtData(data.dataDocument)}</Text>
            <Text style={{ marginTop: 10 }}>
              Localitatea: {gol(data.oras, 15)}
            </Text>
          </View>
          <View style={stiluriComune.semnaturaCol}>
            <Text style={stiluriComune.semnaturaEticheta}>Semnătura,</Text>
            {data.semnaturaDataUrl ? (
              <Image
                src={data.semnaturaDataUrl}
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
