import React from 'react'
import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'
import ShowMoreGrid from '../../components/ui/ShowMoreGrid'
import Link from 'next/link'

// ✅ City-wise hotels
const hotelsByCity = {
  mumbai: [
    { name: 'Marine Bay Hotel', image: 'https://images.unsplash.com/photo-1551882547-ff9c4a5b7f5f?auto=format&fit=crop&w=1200&q=80' },
    { name: 'Gateway Grand', image: 'https://images.unsplash.com/photo-1483794344563-d27a8d7f8a8a?auto=format&fit=crop&w=1200&q=80' },
    { name: 'Colaba Suites', image: 'https://images.unsplash.com/photo-1501117716987-c8e6a3a6e7a4?auto=format&fit=crop&w=1200&q=80' },
  ],
  delhi: [
    { name: 'Central Delhi Hotel', image: 'https://images.unsplash.com/photo-1505691723518-36a3b3e14e77?auto=format&fit=crop&w=1200&q=80' },
    { name: 'Connaught Place Inn', image: 'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&w=1200&q=80' },
  ],
  bengaluru: [
    { name: 'Silicon Valley Retreat', image: 'https://images.unsplash.com/photo-1488747279002-c8523379faaa?auto=format&fit=crop&w=1200&q=80' },
    { name: 'Garden City Hotel', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80' },
  ],
  chennai: [
    { name: 'Bayfront Chennai', image: 'https://images.unsplash.com/photo-1526481280698-0b3d1a7d0a7a?auto=format&fit=crop&w=1200&q=80' },
  ],
  kolkata: [
    { name: 'Hooghly Riverside', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80' },
  ],
  hyderabad: [
    { name: 'Pearl City Suites', image: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=1200&q=80' },
  ],
  pune: [
    { name: 'Pune Retreat', image: 'https://images.unsplash.com/photo-1549888834-6b1a5f38f6d3?auto=format&fit=crop&w=1200&q=80' },
  ],
  ahmedabad: [
    { name: 'Heritage Ahmedabad', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55f04?auto=format&fit=crop&w=1200&q=80' },
  ],
  jaipur: [
    { name: 'Pink City Palace Hotel', image: 'https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=1200&q=80' },
  ],
  goa: [
    { name: 'Beachside Resort Goa', image: 'https://images.unsplash.com/photo-1501117716987-c8e6a3a6e7a4?auto=format&fit=crop&w=1200&q=80' },
    { name: 'Seaview Suites', image: 'https://images.unsplash.com/photo-1505691723518-36a3b3e14e77?auto=format&fit=crop&w=1200&q=80' },
  ],
}

// ✅ Generate SEO metadata safely
export async function generateMetadata({ params }) {
  const { city } = await params
  const displayName = city.charAt(0).toUpperCase() + city.slice(1)
  return {
    title: `${displayName} Hotels - MySite`,
  }
}

// ✅ Dynamic City Page Component
export default async function CityPage({ params }) {
  const { city } = await params // ✅ Properly awaited

  const cityParam = city.toLowerCase().trim()
  const cityKey = Object.keys(hotelsByCity).find(
    (key) => key.toLowerCase() === cityParam
  )

  const hotels = cityKey ? hotelsByCity[cityKey] : []
  const displayName = cityKey
    ? cityKey.charAt(0).toUpperCase() + cityKey.slice(1)
    : 'Unknown'

  return (
    <main className="py-12 text-black">
      <Container>
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-semibold">
            Hotels in {displayName}
          </h1>
          <Link href="/location" className="text-sm text-yellow-300 underline">
            Back to locations
          </Link>
        </div>

        <Section>
          {hotels.length > 0 ? (
            <ShowMoreGrid items={hotels} variant="hotel" initial={8} />
          ) : (
            <div className="p-8 text-center">
              <p className="text-slate-300">
                No hotels found for{' '}
                {displayName !== 'Unknown' ? (
                  <strong>{displayName}</strong>
                ) : (
                  'this city'
                )}
                {' '}yet.
              </p>
            </div>
          )}
        </Section>
      </Container>
    </main>
  )
}
