import { render, screen } from '@testing-library/react'
import Home from './page'
import { CERERI } from '@/lib/cereri'

describe('Homepage', () => {
  it('afișează titlul principal', () => {
    render(<Home />)
    expect(
      screen.getByRole('heading', { name: /cereri online/i, level: 1 })
    ).toBeInTheDocument()
  })

  it('afișează 9 tipuri de documente, fiecare cu link către pagina lui', () => {
    render(<Home />)
    expect(CERERI).toHaveLength(9)
    for (const c of CERERI) {
      const link = screen
        .getAllByRole('link')
        .find((el) => el.getAttribute('href') === `/cereri/${c.slug}`)
      expect(link).toBeDefined()
      expect(link).toHaveTextContent(c.titlu)
    }
  })
})
