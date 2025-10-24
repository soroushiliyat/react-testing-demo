import { useState } from 'react'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.includes('@')) {
      setError('ایمیل معتبر نیست')
    } else {
      setError('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="ایمیل"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">ورود</button>
      {error && <p role="alert">{error}</p>}
    </form>
  )
}