"use client"
import React, { useState } from 'react'

export default function ContactPage(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [consent, setConsent] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e){
    e.preventDefault()
    if(!consent){
      alert('Please accept the privacy policy to continue')
      return
    }
    const subject = encodeURIComponent(`Contact from ${name || 'Guest'}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:contact@mysite.example?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen py-12 px-4 text-black">
      <div className="max-w-6xl mx-auto">
        <section className="mb-10">
          <div className="rounded-2xl card-lux p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl font-serif text-(--lux-gold) mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Contact & Bookings</h1>
              <p className="text-(--lux-muted) mb-4">Reach out for private bookings, enquiries, or bespoke experiences. We value your privacy — see our policy below.</p>

              <div className="space-y-3 text-(--lux-muted)">
                <div>
                  <div className="text-sm">Phone</div>
                  <a href="tel:+918433522673" className="block mt-1 text-(--lux-foreground) font-semibold">+91 84335 22673</a>
                </div>

                <div>
                  <div className="text-sm">WhatsApp</div>
                  <a href="https://wa.me/918433522673" target="_blank" rel="noreferrer" className="block mt-1 text-(--lux-foreground) font-semibold">Chat on WhatsApp</a>
                </div>

                <div>
                  <div className="text-sm">Email</div>
                  <a href="mailto:contact@mysite.example" className="block mt-1 text-(--lux-foreground) font-semibold">contact@mysite.example</a>
                </div>

                <div>
                  <div className="text-sm">Address</div>
                  <div className="mt-1 text-(--lux-muted)">123 Luxe Street, Panaji, Goa</div>
                </div>
              </div>

            </div>

            {/* <div>
              <form onSubmit={handleSubmit} className="space-y-4 border-2 rounded-xl  p-4">
                <div>
                  <label className="block text-sm text-(--lux-muted)">Your name</label>
                  <input value={name} onChange={e => setName(e.target.value)} className="mt-1 w-full rounded-md px-3 py-2 bg-transparent border border-[rgba(255,255,255,0.06)] text-(--lux-foreground) outline-none" placeholder="Jane Doe" />
                </div>

                <div>
                  <label className="block text-sm text-(--lux-muted)">Email</label>
                  <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="mt-1 w-full rounded-md px-3 py-2 bg-transparent border border-[rgba(255,255,255,0.06)] text-(--lux-foreground) outline-none" placeholder="you@domain.com" />
                </div>

                <div>
                  <label className="block text-sm text-(--lux-muted)">Message</label>
                  <textarea value={message} onChange={e => setMessage(e.target.value)} rows={4} className="mt-1 w-full rounded-md px-3 py-2 bg-transparent border border-[rgba(255,255,255,0.06)] text-(--lux-foreground) outline-none" placeholder="Tell us what you'd like to arrange" />
                </div>

                <div className="flex items-start gap-3">
                  <input id="consent" type="checkbox" checked={consent} onChange={e => setConsent(e.target.checked)} className="mt-1" />
                  <label htmlFor="consent" className="text-sm text-(--lux-muted)">I consent to the processing of my data for contact purposes (Privacy policy)</label>
                </div>

                <div>
                  <button type="submit" className="btn-lux px-6 py-3">Send message</button>
                </div>

                {submitted && <div className="text-green-400">Thank you — your message has been opened in your email client.</div>}
              </form>
            </div> */}
          </div>
        </section>

        <section className="mb-8">
          <div className="rounded-2xl overflow-hidden">
            <iframe title="map" src="https://maps.google.com/maps?q=Panaji,Goa&t=&z=13&ie=UTF8&iwloc=&output=embed" className="w-full h-64 border-0" />
          </div>
        </section>

        <section>
          <div className="rounded-2xl card-lux p-6">
            <h3 className="text-2xl font-semibold mb-3">Privacy & Safety</h3>
            <p className="text-(--lux-muted)">We respect your privacy. We do not share your contact details with third parties. All communications are between you and the provider. For added safety, consider meeting in public spaces first and confirming identity. If you collect payments, prefer secure, traceable methods.</p>
          </div>
        </section>

      </div>
    </div>
  )
}
