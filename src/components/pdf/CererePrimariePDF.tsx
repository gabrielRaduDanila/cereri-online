'use client'

import { Document, Page, Text, View, Image } from '@react-pdf/renderer'
import { inregistreazaFonturi } from './fonts'
import { stiluriComune, fmtData, gol, subsemnat, domiciliatGen } from './comun'

inregistreazaFonturi()

export type CererePrimarieData = {
  gen: 'M' | 'F' | ''
  numeSolicitant: string
  cnp: string
  adresa: string
  telefon: string
  primarie: string
  obiectCerere: string
  motivare: string
  oras: string
  dataDocument: string
  semnaturaDataUrl?: string | null
}

export default function CererePrimariePDF({ data }: { data: CererePrimarieData }) {
  return (
    <Document>
      <Page size="A4" style={stiluriComune.page}>
        <View style={stiluriComune.antet}>
          <Text>Către,</Text>
          <Text>{gol(data.primarie, 30)}</Text>
        </View>

        <Text style={stiluriComune.titlu}>CERERE</Text>

        <Text style={stiluriComune.paragraf}>
          {subsemnat(data.gen)} {gol(data.numeSolicitant, 30)}, având CNP{' '}
          {gol(data.cnp, 13)}, {domiciliatGen(data.gen)} în{' '}
          {gol(data.adresa, 40)}
          {data.telefon && data.telefon.trim()
            ? `, telefon ${data.telefon}`
            : ''}
          , prin prezenta vă rog să {gol(data.obiectCerere, 50)}.
        </Text>

        {data.motivare && data.motivare.trim() ? (
          <Text style={stiluriComune.paragraf}>
            Motivarea cererii: {data.motivare}
          </Text>
        ) : null}

        <Text style={stiluriComune.paragraf}>
          Vă mulțumesc anticipat pentru soluționarea favorabilă a cererii.
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
