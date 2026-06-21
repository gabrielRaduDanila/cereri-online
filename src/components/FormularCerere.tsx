'use client'

import { useState, ChangeEvent } from 'react'

export type TipCamp = 'text' | 'textarea' | 'date' | 'number' | 'email' | 'select'

export type OptiuneSelect = { valoare: string; text: string }

export type Camp = {
  nume: string
  eticheta: string
  tip: TipCamp
  obligatoriu?: boolean
  placeholder?: string
  ajutor?: string
  optiuni?: OptiuneSelect[]
}

type Props = {
  campuri: Camp[]
  valoriInitiale?: Record<string, string>
  onChange: (valori: Record<string, string>) => void
}

export default function FormularCerere({
  campuri,
  valoriInitiale = {},
  onChange,
}: Props) {
  const [valori, setValori] = useState<Record<string, string>>(() => {
    const init: Record<string, string> = {}
    for (const c of campuri) init[c.nume] = valoriInitiale[c.nume] ?? ''
    return init
  })

  const update = (nume: string, val: string) => {
    const noi = { ...valori, [nume]: val }
    setValori(noi)
    onChange(noi)
  }

  return (
    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      {campuri.map((c) => {
        const id = `camp-${c.nume}`
        const comun =
          'mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600'
        return (
          <div key={c.nume}>
            <label htmlFor={id} className="block text-sm font-medium text-slate-700">
              {c.eticheta}
              {c.obligatoriu && <span className="text-red-600 ml-0.5">*</span>}
            </label>
            {c.tip === 'textarea' ? (
              <textarea
                id={id}
                value={valori[c.nume]}
                placeholder={c.placeholder}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                  update(c.nume, e.target.value)
                }
                rows={4}
                className={comun}
              />
            ) : c.tip === 'select' ? (
              <select
                id={id}
                value={valori[c.nume]}
                onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                  update(c.nume, e.target.value)
                }
                className={comun}
              >
                <option value="">— alege —</option>
                {(c.optiuni ?? []).map((o) => (
                  <option key={o.valoare} value={o.valoare}>
                    {o.text}
                  </option>
                ))}
              </select>
            ) : (
              <input
                id={id}
                type={c.tip}
                value={valori[c.nume]}
                placeholder={c.placeholder}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  update(c.nume, e.target.value)
                }
                className={comun}
              />
            )}
            {c.ajutor && (
              <p className="mt-1 text-xs text-slate-500">{c.ajutor}</p>
            )}
          </div>
        )
      })}
    </form>
  )
}
