"use client"
import React from 'react'
import Hero from '../components/ui/Hero'
import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
import Card from '../components/ui/Card'
import ShowMoreGrid from '../components/ui/ShowMoreGrid'
import Accordion from '../components/ui/Accordion'
import ProfileCard from '../components/ui/ProfileCard'
import ProfileModal from '../components/ui/ProfileModal'
import Image from 'next/image'



const articles = [
  { title: 'Choosing the right provider', excerpt: 'A short guide to selecting the right provider for your needs and safety tips.', link: '/blog/seo-for-escorts' },
  { title: 'Top tips for bookings', excerpt: 'How to prepare for a booking and what to expect during the visit.', link: '/blog/local-seo-basics' },
  { title: 'Safety & privacy', excerpt: 'Simple steps to protect your privacy when contacting providers.', link: '/blog/image-optimization' },
]

const imageCards = [
  { name: 'Romantic Getaways', image: '/hero.jpeg' },
  { name: 'Beachside Experiences', image: '/window.svg' },
  { name: 'Nightlife Spots', image: '/file.svg' },
  { name: 'Luxury Retreats', image: '/globe.svg' },
  { name: 'Budget Stays', image: '/next.svg' },
  { name: 'Couples Specials', image: '/vercel.svg' },
  { name: 'Weekend Packages', image: '/hero.jpeg' },
]

const faqs = [
  { q: 'How do I book a provider?', a: 'Use the Book button on any listing to contact via WhatsApp. Provide the date, time and location.' },
  { q: 'Are the profiles verified?', a: 'We surface profiles with good reviews and recent activity. Always follow personal safety precautions.' },
  { q: 'How do payments work?', a: 'Payments terms are arranged between the provider and the client; we recommend cashless options where available.' },
]

const profiles = [
  { name: 'Anita K.', image: '/hero.jpeg', role: 'Premium provider', rating: 4.9, link: '/profile/anita-k' },
  { name: 'Riya S.', image: '/window.svg', role: 'Top rated', rating: 4.8, link: '/profile/riya-s' },
  { name: 'Maya P.', image: '/file.svg', role: 'Verified', rating: 4.7, link: '/profile/maya-p' },
  { name: 'Sonia R.', image: '/globe.svg', role: 'VIP', rating: 4.9, link: '/profile/sonia-r' },
  { name: 'Neha L.', image: '/next.svg', role: 'Experienced', rating: 4.6, link: '/profile/neha-l' },
  { name: 'Priya M.', image: '/vercel.svg', role: 'Recommended', rating: 4.7, link: '/profile/priya-m' },
]

export default function Page() {
  const [selected, setSelected] = React.useState(null)
  return (
    <div>
      <Hero title="Browse Categories" subtitle="Find curated articles, top providers and image galleries by category" image="/hero.jpeg" />

      <main className="py-12">
        <Container>

          <Section title="Image collections">
            <ShowMoreGrid items={imageCards} variant="city" initial={6} />
          </Section>


          <Section title="Top Profiles">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {profiles.map((p,i) => (
                <ProfileCard key={i} profile={p} onView={setSelected} />
              ))}
            </div>
            <div className="mt-6 text-center">
              <a href="/profiles" className="inline-flex items-center px-4 py-2 btn-nykaa rounded-md text-white">See all profiles</a>
            </div>
            {selected && <ProfileModal profile={selected} onClose={() => setSelected(null)} />}
          </Section>
  <Section>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <h3 className="text-xl text-black font-semibold mb-3">Featured articles</h3>
                <div className="space-y-4">
                  {articles.map((a,i) => (
                    <Card key={i} className="p-4">
                      <h4 className="font-semibold text-pink-500 ">{a.title}</h4>
                      <p className="text-sm text-slate-600 mt-2">{a.excerpt}</p>
                      <a href={a.link} className="mt-3 inline-block text-nykaa-deep text-blue-500 font-medium">Read article →</a>
                    </Card>
                  ))}
                </div>
              </div>

              <aside className="hidden lg:block">
                <h4 className="font-semibold text-black mb-3">Quick tips</h4>
                <div className="space-y-3 text-black">
                  <div className="p-4 bg-slate-50 rounded-md">Check ratings and recent reviews.</div>
                  <div className="p-4 bg-slate-50 rounded-md">Confirm time & location in advance.</div>
                  <div className="p-4 bg-slate-50 rounded-md">Use official contact buttons only.</div>
                </div>
              </aside>
            </div>
          </Section>

 <Section title="FAQs & Help">
            <Accordion items={faqs} />
          </Section>

          <Section>
            <Card className="p-6 text-center">
              <h3 className="text-lg font-semibold text-black">Can&apos;t find what you&apos;re looking for?</h3>
              <p className="text-sm text-slate-600 mt-2">Contact our support team for personalized help.</p>
              <div className="mt-4">
                <a href="/contact" className="inline-flex items-center px-4 py-2 btn-nykaa rounded-md text-white">Contact support</a>
              </div>
            </Card>
          </Section>

        </Container>
      </main>
    </div>
  )
}
