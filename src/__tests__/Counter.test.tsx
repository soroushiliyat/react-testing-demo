import { render, screen, fireEvent } from '@testing-library/react'
import Counter from '../components/Counter'

test('افزایش شمارنده با کلیک', () => {
  render(<Counter />)
  fireEvent.click(screen.getByText('افزایش'))
  expect(screen.getByText('Count: 1')).toBeInTheDocument()
})