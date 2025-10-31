import React from 'react'
import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
import ProfilesList from '../components/ui/ProfilesList'

export const metadata = { title: 'Profiles - MySite' }

const profiles = [
  { name: 'Anita K.', image: '/hero.jpeg', role: 'Premium provider', rating: 4.9, link: '/profile/anita-k', bio: 'Experienced professional offering bespoke services.', location: 'Goa' },
  { name: 'Riya S.', image: '/window.svg', role: 'Top rated', rating: 4.8, link: '/profile/riya-s', bio: 'Friendly, verified provider with excellent reviews.', location: 'Mumbai' },
  { name: 'Maya P.', image: '/file.svg', role: 'Verified', rating: 4.7, link: '/profile/maya-p', bio: 'Discreet and professional service for all occasions.', location: 'Delhi' },
  { name: 'Sonia R.', image: '/globe.svg', role: 'VIP', rating: 4.9, link: '/profile/sonia-r', bio: 'High-end experienced provider for VIP guests.', location: 'Bengaluru' },
  { name: 'Neha L.', image: '/next.svg', role: 'Experienced', rating: 4.6, link: '/profile/neha-l', bio: 'Warm and friendly, great for first-timers.', location: 'Chennai' },
  { name: 'Priya M.', image: '/vercel.svg', role: 'Recommended', rating: 4.7, link: '/profile/priya-m', bio: 'Consistent five-star service and punctual.', location: 'Hyderabad' },
  { name: 'Lina T.', image: '/hero.jpeg', role: 'Recommended', rating: 4.5, link: '/profile/lina-t', bio: 'Local specialist with great local knowledge.', location: 'Pune' },
  { name: 'Sara V.', image: '/window.svg', role: 'Top rated', rating: 4.8, link: '/profile/sara-v', bio: 'Friendly and approachable.', location: 'Jaipur' },
]

export default function Page(){
  return (
    <main className="py-12">
      <Container>
        <Section title="Profiles">
          <p className="text-slate-600 mb-4">Search and filter profiles. Click View to open details.</p>
          <ProfilesList profiles={profiles} />
        </Section>
      </Container>
    </main>
  )
}
