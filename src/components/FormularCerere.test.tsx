import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FormularCerere, { Camp } from './FormularCerere'

const campuri: Camp[] = [
  { nume: 'numeAngajat', eticheta: 'Nume și prenume', tip: 'text', obligatoriu: true },
  { nume: 'functie', eticheta: 'Funcția', tip: 'text', obligatoriu: true },
  { nume: 'dataPlecare', eticheta: 'Data plecării', tip: 'date', obligatoriu: true },
]

describe('FormularCerere', () => {
  it('randează toate câmpurile definite', () => {
    render(<FormularCerere campuri={campuri} onChange={() => {}} />)
    expect(screen.getByLabelText(/nume și prenume/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/funcția/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/data plecării/i)).toBeInTheDocument()
  })

  it('apelează onChange la fiecare modificare cu valorile curente', async () => {
    const user = userEvent.setup()
    const onChange = jest.fn()
    render(<FormularCerere campuri={campuri} onChange={onChange} />)
    await user.type(screen.getByLabelText(/nume și prenume/i), 'Ion Popescu')
    const ultimul = onChange.mock.calls[onChange.mock.calls.length - 1][0]
    expect(ultimul.numeAngajat).toBe('Ion Popescu')
  })

  it('marchează vizual câmpurile obligatorii cu asterisc', () => {
    render(<FormularCerere campuri={campuri} onChange={() => {}} />)
    const labelNume = screen.getByText(/nume și prenume/i)
    expect(labelNume.textContent).toMatch(/\*/)
  })

  it('randează câmp select cu opțiunile date și emite valoarea selectată', async () => {
    const user = userEvent.setup()
    const onChange = jest.fn()
    const campuriCuSelect: Camp[] = [
      {
        nume: 'gen',
        eticheta: 'Gen',
        tip: 'select',
        obligatoriu: true,
        optiuni: [
          { valoare: 'M', text: 'Masculin' },
          { valoare: 'F', text: 'Feminin' },
        ],
      },
    ]
    render(<FormularCerere campuri={campuriCuSelect} onChange={onChange} />)
    const select = screen.getByLabelText(/gen/i)
    await user.selectOptions(select, 'F')
    const ultimul = onChange.mock.calls[onChange.mock.calls.length - 1][0]
    expect(ultimul.gen).toBe('F')
  })
})
