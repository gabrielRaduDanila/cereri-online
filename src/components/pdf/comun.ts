import { StyleSheet } from '@react-pdf/renderer'

export const stiluriComune = StyleSheet.create({
  page: {
    fontFamily: 'Roboto',
    fontSize: 12,
    paddingTop: 60,
    paddingBottom: 60,
    paddingHorizontal: 60,
    color: '#0f172a',
    lineHeight: 1.6,
  },
  antet: {
    textAlign: 'right',
    marginBottom: 30,
    fontSize: 11,
  },
  titlu: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitlu: {
    fontSize: 13,
    fontWeight: 'bold',
    marginTop: 14,
    marginBottom: 6,
  },
  paragraf: {
    marginBottom: 12,
    textAlign: 'justify',
  },
  semnaturaRand: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  semnaturaCol: {
    width: '45%',
  },
  semnaturaEticheta: {
    fontSize: 11,
    marginBottom: 6,
  },
  semnaturaImg: {
    width: 140,
    height: 60,
    objectFit: 'contain',
  },
  doiSemnatari: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

export function fmtData(iso: string) {
  if (!iso) return '__________'
  const [an, luna, zi] = iso.split('-')
  if (!an || !luna || !zi) return iso
  return `${zi}.${luna}.${an}`
}

export function gol(v: string | undefined, lung = 20) {
  return v && v.trim() ? v : '_'.repeat(lung)
}

export function subsemnat(gen: string) {
  return gen === 'F'
    ? 'Subsemnata'
    : gen === 'M'
      ? 'Subsemnatul'
      : 'Subsemnatul/Subsemnata'
}

export function angajatGen(gen: string) {
  return gen === 'F' ? 'angajată' : gen === 'M' ? 'angajat' : 'angajat(ă)'
}

export function domiciliatGen(gen: string) {
  return gen === 'F'
    ? 'domiciliată'
    : gen === 'M'
      ? 'domiciliat'
      : 'domiciliat(ă)'
}
