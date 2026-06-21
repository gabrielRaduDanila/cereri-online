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

  utilitati: string
  preaviz: string
  inventar: string

  oras: string
  dataDocument: string
  semnPropDataUrl?: string | null
  semnChirDataUrl?: string | null
}

export default function ContractInchirierePDF({
  data,
}: {
  data: ContractInchiriereData
}) {
  return (
    <Document>
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
        </Text>

        <Text style={stiluriComune.subtitlu}>III. CHIRIA ȘI GARANȚIA</Text>
        <Text style={stiluriComune.paragraf}>
          Chiria lunară este de {gol(data.chirieLunara, 6)} lei, plătibilă până
          în ziua de {gol(data.ziuaScadenta, 2)} a fiecărei luni. Locatarul
          depune o garanție de {gol(data.garantie, 6)} lei, restituibilă la
          încetarea contractului, după acoperirea eventualelor pagube și a
          utilităților neachitate.
        </Text>

        <Text style={stiluriComune.subtitlu}>IV. UTILITĂȚI ȘI CHELTUIELI</Text>
        <Text style={stiluriComune.paragraf}>
          Cheltuielile cu utilitățile (energie electrică, gaze, apă, salubritate,
          internet etc.) sunt în sarcina {gol(data.utilitati, 10)}.
        </Text>

        <Text style={stiluriComune.subtitlu}>V. ÎNCETAREA CONTRACTULUI</Text>
        <Text style={stiluriComune.paragraf}>
          Oricare dintre părți poate solicita încetarea contractului cu un
          preaviz de {gol(data.preaviz, 2)} zile, notificat în scris.
          Contractul încetează de drept la expirarea perioadei stabilite, dacă
          părțile nu convin în scris prelungirea.
        </Text>

        <Text style={stiluriComune.subtitlu}>VI. STAREA IMOBILULUI / INVENTAR</Text>
        <Text style={stiluriComune.paragraf}>
          {data.inventar && data.inventar.trim()
            ? data.inventar
            : 'Imobilul se predă chiriașului în starea constatată la data semnării, conform proces-verbal de predare-primire anexat.'}
        </Text>

        <Text style={stiluriComune.paragraf}>
          Întocmit la {gol(data.oras, 15)}, în data de{' '}
          {fmtData(data.dataDocument)}, în două exemplare originale, câte unul
          pentru fiecare parte.
        </Text>

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
      </Page>
    </Document>
  )
}
