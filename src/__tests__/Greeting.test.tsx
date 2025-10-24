import { render, screen } from '@testing-library/react'
import Greeting from '../components/Greeting'

test('نمایش نام در greeting', () => {
  render(<Greeting name="سروش" />)
  expect(screen.getByText('Hello, سروش!')).toBeInTheDocument()
})