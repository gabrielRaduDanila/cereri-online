import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SemnaturaCanvas from './SemnaturaCanvas'

describe('SemnaturaCanvas', () => {
  it('afișează zona de semnătură și butonul de ștergere', () => {
    render(<SemnaturaCanvas onChange={() => {}} />)
    expect(screen.getByText(/semnează aici/i)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /șterge/i })
    ).toBeInTheDocument()
  })

  it('apelează onChange cu null când utilizatorul apasă „Șterge"', async () => {
    const user = userEvent.setup()
    const onChange = jest.fn()
    render(<SemnaturaCanvas onChange={onChange} />)
    await user.click(screen.getByRole('button', { name: /șterge/i }))
    expect(onChange).toHaveBeenCalledWith(null)
  })
})
