'use client'

import { Document, Page, Text, View, Image } from '@react-pdf/renderer'
import { inregistreazaFonturi } from './fonts'
import { stiluriComune, fmtData, gol, subsemnat, domiciliatGen } from './comun'

inregistreazaFonturi()

export type CerereGeneralaData = {
  gen: 'M' | 'F' | ''
  numeSolicitant: string
  cnp: string
  adresa: string
  telefon: string
  email: string
  destinatarInstitutie: string
  destinatarPersoana: string
  obiectCerere: string
  motivare: string
  anexe: string
  oras: string
  dataDocument: string
  semnaturaDataUrl?: string | null
}

export default function CerereGeneralaPDF({
  data,
}: {
  data: CerereGeneralaData
}) {
  return (
    <Document>
      <Page size="A4" style={stiluriComune.page}>
        <View style={stiluriComune.antet}>
          <Text>Către,</Text>
          <Text>{gol(data.destinatarInstitutie, 30)}</Text>
          {data.destinatarPersoana && data.destinatarPersoana.trim() ? (
            <Text>{data.destinatarPersoana}</Text>
          ) : null}
        </View>

        <Text style={stiluriComune.titlu}>CERERE</Text>

        <Text style={stiluriComune.paragraf}>
          {subsemnat(data.gen)} {gol(data.numeSolicitant, 30)}, având CNP{' '}
          {gol(data.cnp, 13)}, {domiciliatGen(data.gen)} în{' '}
          {gol(data.adresa, 40)}
          {data.telefon && data.telefon.trim()
            ? `, telefon ${data.telefon}`
            : ''}
          {data.email && data.email.trim() ? `, e-mail ${data.email}` : ''},
          prin prezenta vă rog să {gol(data.obiectCerere, 50)}.
        </Text>

        {data.motivare && data.motivare.trim() ? (
          <Text style={stiluriComune.paragraf}>
            Motivarea cererii: {data.motivare}
          </Text>
        ) : null}

        {data.anexe && data.anexe.trim() ? (
          <>
            <Text style={stiluriComune.subtitlu}>Anexe:</Text>
            <Text style={stiluriComune.paragraf}>{data.anexe}</Text>
          </>
        ) : null}

        <Text style={stiluriComune.paragraf}>
          Vă mulțumesc anticipat pentru soluționarea favorabilă a cererii și
          rămân la dispoziția dumneavoastră pentru orice clarificări
          suplimentare.
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
