'use client'

import { Document, Page, Text, View, Image } from '@react-pdf/renderer'
import { inregistreazaFonturi } from './fonts'
import { stiluriComune, fmtData, gol, subsemnat, angajatGen } from './comun'

inregistreazaFonturi()

export type ConcediuData = {
  gen: 'M' | 'F' | ''
  tipConcediu: string
  numeAngajat: string
  cnp: string
  functie: string
  numeAngajator: string
  dataStart: string
  dataSfarsit: string
  numarZile: string
  motiv: string
  oras: string
  dataDocument: string
  semnaturaDataUrl?: string | null
}

export default function ConcediuPDF({ data }: { data: ConcediuData }) {
  return (
    <Document>
      <Page size="A4" style={stiluriComune.page}>
        <View style={stiluriComune.antet}>
          <Text>Către,</Text>
          <Text>{gol(data.numeAngajator, 30)}</Text>
        </View>

        <Text style={stiluriComune.titlu}>CERERE DE CONCEDIU</Text>

        <Text style={stiluriComune.paragraf}>
          {subsemnat(data.gen)} {gol(data.numeAngajat, 30)}, având CNP{' '}
          {gol(data.cnp, 13)}, {angajatGen(data.gen)} în cadrul{' '}
          {gol(data.numeAngajator, 30)} pe funcția de {gol(data.functie, 20)},
          prin prezenta vă rog să îmi aprobați un concediu{' '}
          {gol(data.tipConcediu, 15)} pe perioada {fmtData(data.dataStart)} —{' '}
          {fmtData(data.dataSfarsit)}, însumând {gol(data.numarZile, 3)} zile
          lucrătoare.
        </Text>

        {data.motiv && data.motiv.trim() ? (
          <Text style={stiluriComune.paragraf}>
            Motivul solicitării: {data.motiv}.
          </Text>
        ) : null}

        <Text style={stiluriComune.paragraf}>
          Vă mulțumesc pentru înțelegere.
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
