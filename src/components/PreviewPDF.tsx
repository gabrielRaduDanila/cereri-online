'use client'

import { PDFViewer } from '@react-pdf/renderer'
import { ReactElement } from 'react'

type Props = {
  children: ReactElement
}

export default function PreviewPDF({ children }: Props) {
  return (
    <div className="border border-slate-200 rounded-md overflow-hidden bg-slate-100">
      <PDFViewer
        style={{ width: '100%', height: '70vh', border: 'none' }}
        showToolbar={false}
      >
        {children}
      </PDFViewer>
    </div>
  )
}
