import { Font } from '@react-pdf/renderer'

let inregistrate = false

export function inregistreazaFonturi() {
  if (inregistrate) return
  Font.register({
    family: 'Roboto',
    fonts: [
      {
        src: 'https://cdn.jsdelivr.net/npm/roboto-font@0.1.0/fonts/Roboto/roboto-regular-webfont.ttf',
        fontWeight: 'normal',
      },
      {
        src: 'https://cdn.jsdelivr.net/npm/roboto-font@0.1.0/fonts/Roboto/roboto-bold-webfont.ttf',
        fontWeight: 'bold',
      },
    ],
  })
  inregistrate = true
}
