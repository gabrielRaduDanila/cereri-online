'use client'

import { Document, Page, Text, View, Image } from '@react-pdf/renderer'
import { inregistreazaFonturi } from './fonts'
import { stiluriComune, fmtData, gol, subsemnat, angajatGen } from './comun'

inregistreazaFonturi()

export type DemisieData = {
  gen: 'M' | 'F' | ''
  numeAngajat: string
  cnp: string
  functie: string
  numeAngajator: string
  dataPlecare: string
  motiv: string
  oras: string
  dataDocument: string
  semnaturaDataUrl?: string | null
}

export default function DemisiePDF({ data }: { data: DemisieData }) {
  return (
    <Document>
      <Page size="A4" style={stiluriComune.page}>
        <View style={stiluriComune.antet}>
          <Text>Către,</Text>
          <Text>{gol(data.numeAngajator, 30)}</Text>
        </View>

        <Text style={stiluriComune.titlu}>CERERE DE DEMISIE</Text>

        <Text style={stiluriComune.paragraf}>
          {subsemnat(data.gen)} {gol(data.numeAngajat, 30)}, având CNP{' '}
          {gol(data.cnp, 13)}, {angajatGen(data.gen)} în cadrul{' '}
          {gol(data.numeAngajator, 30)} pe funcția de {gol(data.functie, 20)},
          prin prezenta vă aduc la cunoștință decizia mea de a demisiona din
          funcția deținută, începând cu data de {fmtData(data.dataPlecare)}.
        </Text>

        <Text style={stiluriComune.paragraf}>
          {data.motiv && data.motiv.trim()
            ? `Motivul demisiei: ${data.motiv}.`
            : 'Demisia este înaintată cu respectarea termenului legal de preaviz, conform Codului Muncii.'}
        </Text>

        <Text style={stiluriComune.paragraf}>
          Vă mulțumesc pentru colaborare și pentru oportunitățile oferite pe
          parcursul activității mele în cadrul companiei.
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
