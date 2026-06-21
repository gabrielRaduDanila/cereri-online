'use client'

import { Document, Page, Text, View, Image } from '@react-pdf/renderer'
import { inregistreazaFonturi } from './fonts'
import { stiluriComune, fmtData, gol, subsemnat } from './comun'

inregistreazaFonturi()

export type RezilereChirieData = {
  gen: 'M' | 'F' | ''
  expediator: string
  expediatorCnp: string
  destinatar: string
  destinatarCalitate: string
  imobAdresa: string
  dataContract: string
  dataReziliere: string
  motiv: string
  oras: string
  dataDocument: string
  semnaturaDataUrl?: string | null
}

export default function RezilereChiriePDF({ data }: { data: RezilereChirieData }) {
  return (
    <Document>
      <Page size="A4" style={stiluriComune.page}>
        <View style={stiluriComune.antet}>
          <Text>Către,</Text>
          <Text>{gol(data.destinatar, 25)}</Text>
          <Text>(în calitate de {gol(data.destinatarCalitate, 12)})</Text>
        </View>

        <Text style={stiluriComune.titlu}>
          NOTIFICARE DE REZILIERE A CONTRACTULUI DE ÎNCHIRIERE
        </Text>

        <Text style={stiluriComune.paragraf}>
          {subsemnat(data.gen)} {gol(data.expediator, 30)}, având CNP{' '}
          {gol(data.expediatorCnp, 13)}, parte în contractul de închiriere
          având ca obiect imobilul situat la adresa {gol(data.imobAdresa, 40)},
          încheiat la data de {fmtData(data.dataContract)}, prin prezenta vă
          notific decizia mea de a rezilia contractul menționat începând cu
          data de {fmtData(data.dataReziliere)}.
        </Text>

        <Text style={stiluriComune.paragraf}>
          {data.motiv && data.motiv.trim()
            ? `Motivul rezilierii: ${data.motiv}.`
            : 'Rezilierea se solicită cu respectarea termenului de preaviz prevăzut în contract.'}
        </Text>

        <Text style={stiluriComune.paragraf}>
          Vă rog să confirmați primirea prezentei notificări și să procedați
          la încheierea formalităților legate de încetarea contractului:
          regularizarea utilităților, restituirea garanției și predarea-primirea
          imobilului la data convenită.
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
