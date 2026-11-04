import { useState } from 'react'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (!name || !email || !message) {
      alert('Please fill in all fields.')
      return
    }

    fetch(`${import.meta.env.VITE_API_URL}/api/contact/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
    })
      .then((response) => response.json())
      .then(() => setSubmitted(true))
  }

  if (submitted) {
    return (
      <section id="contact" className="bg-gray-950 text-white py-20 px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Message Sent! 🎉</h2>
        <p className="text-gray-400">Thank you for reaching out. I'll get back to you soon.</p>
      </section>
    )
  }

  return (
    <section id="contact" className="bg-gray-950 text-white py-20 px-8">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-gray-800 text-white px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-800 text-white px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-gray-800 text-white px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact