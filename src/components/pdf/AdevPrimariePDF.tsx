'use client'

import { Document, Page, Text, View, Image } from '@react-pdf/renderer'
import { inregistreazaFonturi } from './fonts'
import { stiluriComune, fmtData, gol, subsemnat, domiciliatGen } from './comun'

inregistreazaFonturi()

export type AdevPrimarieData = {
  gen: 'M' | 'F' | ''
  numeSolicitant: string
  cnp: string
  adresa: string
  primarie: string
  tipAdeverinta: string
  scop: string
  oras: string
  dataDocument: string
  semnaturaDataUrl?: string | null
}

export default function AdevPrimariePDF({ data }: { data: AdevPrimarieData }) {
  return (
    <Document>
      <Page size="A4" style={stiluriComune.page}>
        <View style={stiluriComune.antet}>
          <Text>Către,</Text>
          <Text>{gol(data.primarie, 30)}</Text>
        </View>

        <Text style={stiluriComune.titlu}>CERERE DE ELIBERARE ADEVERINȚĂ</Text>

        <Text style={stiluriComune.paragraf}>
          {subsemnat(data.gen)} {gol(data.numeSolicitant, 30)}, având CNP{' '}
          {gol(data.cnp, 13)}, {domiciliatGen(data.gen)} în{' '}
          {gol(data.adresa, 40)}, prin prezenta vă rog să-mi eliberați o
          adeverință {gol(data.tipAdeverinta, 25)}, necesară pentru{' '}
          {gol(data.scop, 30)}.
        </Text>

        <Text style={stiluriComune.paragraf}>
          Menționez că informațiile solicitate sunt destinate exclusiv scopului
          declarat mai sus.
        </Text>

        <Text style={stiluriComune.paragraf}>
          Vă mulțumesc pentru promptitudine.
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
