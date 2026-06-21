'use client'

import { useRef } from 'react'
import SignatureCanvas from 'react-signature-canvas'

type Props = {
  onChange: (dataUrl: string | null) => void
}

export default function SemnaturaCanvas({ onChange }: Props) {
  const ref = useRef<SignatureCanvas | null>(null)

  const handleEnd = () => {
    const sig = ref.current
    if (!sig) return
    if (sig.isEmpty()) {
      onChange(null)
      return
    }
    onChange(sig.toDataURL('image/png'))
  }

  const handleClear = () => {
    ref.current?.clear()
    onChange(null)
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-slate-600">Semnează aici cu mouse-ul sau degetul</span>
        <button
          type="button"
          onClick={handleClear}
          className="text-sm text-blue-700 hover:underline"
        >
          Șterge
        </button>
      </div>
      <div className="border border-slate-300 rounded-md bg-white">
        <SignatureCanvas
          ref={ref}
          penColor="#0f172a"
          canvasProps={{
            width: 500,
            height: 160,
            className: 'rounded-md w-full',
          }}
          onEnd={handleEnd}
        />
      </div>
    </div>
  )
}
