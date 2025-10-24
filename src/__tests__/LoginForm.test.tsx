import { render, screen, fireEvent } from '@testing-library/react'
import LoginForm from '../components/LoginForm'

test('نمایش ارور برای ایمیل نامعتبر', () => {
  render(<LoginForm />)
  fireEvent.change(screen.getByPlaceholderText('ایمیل'), {
    target: { value: 'soroush' },
  })
  fireEvent.click(screen.getByText('ورود'))
  expect(screen.getByRole('alert')).toHaveTextContent('ایمیل معتبر نیست')
})