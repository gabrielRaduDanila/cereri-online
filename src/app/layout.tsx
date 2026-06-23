import type { Metadata } from 'next'
import Link from 'next/link'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cereri Online — Generator gratuit de cereri și acte oficiale',
  description:
    'Generează gratuit cereri oficiale completate, actualizate și pregătite pentru tipărire: demisie, concediu, adeverințe, reziliere contracte și altele.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ro">
      <body className="min-h-screen bg-slate-50 text-slate-800 antialiased flex flex-col">
        <header className="bg-white border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link
              href="/"
              className="text-xl font-bold text-blue-700 tracking-tight"
            >
              Cereri Online
            </Link>
            <nav className="flex gap-6 text-sm font-medium">
              <Link href="/" className="hover:text-blue-700">
                Cereri
              </Link>
              <Link href="/despre" className="hover:text-blue-700">
                Despre
              </Link>
            </nav>
          </div>
        </header>

        <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-8">
          {children}
        </main>

        <footer className="border-t border-slate-200 bg-white">
          <div className="max-w-5xl mx-auto px-4 py-6 text-sm text-slate-500 flex flex-col sm:flex-row gap-2 sm:gap-4 justify-between">
            <span>© {new Date().getFullYear()} Cereri Online</span>
            <span>
              Modelele sunt informative. Verifică legislația aplicabilă.
            </span>
          </div>
        </footer>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
