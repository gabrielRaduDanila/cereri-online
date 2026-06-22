'use client'

import { useState, FormEvent } from 'react'

const ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? '65625f56-c84a-4cd7-b528-1b981469b37d'

type Stare = 'idle' | 'trimit' | 'succes' | 'eroare'

export default function FeedbackForm() {
  const [stare, setStare] = useState<Stare>('idle')
  const [mesajEroare, setMesajEroare] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStare('trimit')
    setMesajEroare('')

    const form = e.currentTarget
    const data = new FormData(form)
    data.append('access_key', ACCESS_KEY)
    data.append('subject', 'Feedback de pe model-cerere.ro')
    data.append('from_name', 'Cereri Online')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      })
      const json = await res.json()
      if (res.ok && json.success) {
        setStare('succes')
        form.reset()
      } else {
        setStare('eroare')
        setMesajEroare(json.message || 'A apărut o eroare. Încearcă din nou.')
      }
    } catch {
      setStare('eroare')
      setMesajEroare('Nu am putut trimite mesajul. Verifică conexiunea.')
    }
  }

  if (stare === 'succes') {
    return (
      <div className="rounded-lg border border-green-200 bg-green-50 p-5 text-green-900">
        <p className="font-semibold">Mesajul a fost trimis. Mulțumesc!</p>
        <p className="mt-1 text-sm">
          Am primit feedback-ul tău și-l voi citi cât de curând.
        </p>
        <button
          type="button"
          onClick={() => setStare('idle')}
          className="mt-3 text-sm text-green-800 underline"
        >
          Trimite alt mesaj
        </button>
      </div>
    )
  }

  const comun =
    'mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600'

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="fb-nume" className="block text-sm font-medium text-slate-700">
          Nume (opțional)
        </label>
        <input
          id="fb-nume"
          name="nume"
          type="text"
          placeholder="Cum te numești?"
          className={comun}
          disabled={stare === 'trimit'}
        />
      </div>

      <div>
        <label htmlFor="fb-email" className="block text-sm font-medium text-slate-700">
          Email (opțional)
        </label>
        <input
          id="fb-email"
          name="email"
          type="email"
          placeholder="ca să-ți pot răspunde, dacă vrei"
          className={comun}
          disabled={stare === 'trimit'}
        />
        <p className="mt-1 text-xs text-slate-500">
          Lasă gol dacă vrei feedback anonim.
        </p>
      </div>

      <div>
        <label htmlFor="fb-tip" className="block text-sm font-medium text-slate-700">
          Tip feedback <span className="text-red-600">*</span>
        </label>
        <select
          id="fb-tip"
          name="tip"
          required
          defaultValue=""
          className={comun}
          disabled={stare === 'trimit'}
        >
          <option value="" disabled>
            — alege —
          </option>
          <option value="Bug / problemă tehnică">Bug / problemă tehnică</option>
          <option value="Cerere lipsă (vreau o cerere nouă)">
            Cerere lipsă (vreau o cerere nouă)
          </option>
          <option value="Sugestie de îmbunătățire">
            Sugestie de îmbunătățire
          </option>
          <option value="Eroare în textul unei cereri">
            Eroare în textul unei cereri
          </option>
          <option value="Altceva">Altceva</option>
        </select>
      </div>

      <div>
        <label htmlFor="fb-mesaj" className="block text-sm font-medium text-slate-700">
          Mesaj <span className="text-red-600">*</span>
        </label>
        <textarea
          id="fb-mesaj"
          name="mesaj"
          required
          rows={5}
          placeholder="Spune-mi ce te-ar ajuta sau ce nu merge…"
          className={comun}
          disabled={stare === 'trimit'}
        />
      </div>

      {/* honeypot anti-spam */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      {stare === 'eroare' && (
        <p className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800">
          {mesajEroare}
        </p>
      )}

      <button
        type="submit"
        disabled={stare === 'trimit'}
        className="w-full rounded-md bg-blue-700 px-4 py-3 font-medium text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-slate-400"
      >
        {stare === 'trimit' ? 'Se trimite…' : 'Trimite feedback'}
      </button>
    </form>
  )
}
