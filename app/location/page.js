import React from 'react'
import Hero from '../components/ui/Hero'
import Container from '../components/ui/Container';
import Section from '../components/ui/Section'
import Card from '../components/ui/Card'
import Image from 'next/image'
  import ShowMoreGrid from '../components/ui/ShowMoreGrid';
export const metadata = { title: "Location - MySite" }

const goaHotels = [
  { name: "Beachside Resort Goa", image: "https://images.unsplash.com/photo-1501117716987-c8e6a3a6e7a4?auto=format&fit=crop&w=1200&q=80" },
  { name: "Sunset Villa Resort", image: "https://images.unsplash.com/photo-1503216593878-6f5f5f6f6f6f?auto=format&fit=crop&w=1200&q=80" },
  { name: "Palm Grove Hotel", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80" },
  { name: "Seaview Suites", image: "https://images.unsplash.com/photo-1505691723518-36a3b3e14e77?auto=format&fit=crop&w=1200&q=80" },
  { name: "Coral Bay Inn", image: "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&w=1200&q=80" },
  { name: "Lagoon View Hotel", image: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=1200&q=80" },
  { name: "Tropic Paradise", image: "https://images.unsplash.com/photo-1501117716987-c8e6a3a6e7a4?auto=format&fit=crop&w=1200&q=80" },
  { name: "Coconut Grove Lodge", image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80" },
]

const metroCities = [
  { name: "Mumbai", slug: "mumbai", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80" },
  { name: "Delhi", slug: "delhi", image: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&w=1200&q=80" },
  { name: "Bengaluru", slug: "bengaluru", image: "https://images.unsplash.com/photo-1488747279002-c8523379faaa?auto=format&fit=crop&w=1200&q=80" },
  { name: "Chennai", slug: "chennai", image: "https://images.unsplash.com/photo-1526481280698-0b3d1a7d0a7a?auto=format&fit=crop&w=1200&q=80" },
  { name: "Kolkata", slug: "kolkata", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80" },
  { name: "Hyderabad", slug: "hyderabad", image: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=1200&q=80" },
  { name: "Pune", slug: "pune", image: "https://images.unsplash.com/photo-1549888834-6b1a5f38f6d3?auto=format&fit=crop&w=1200&q=80" },
  { name: "Ahmedabad", slug: "ahmedabad", image: "https://images.unsplash.com/photo-1543163521-1bf539c55f04?auto=format&fit=crop&w=1200&q=80" },
  { name: "Jaipur", slug: "jaipur", image: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=1200&q=80" },
  { name: "Goa", slug: "goa", image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80" },
]

export default function Page() {
  return (
    <div>
      <Hero
        title="Find providers by location"
        subtitle="Explore hotels in Goa and India's major metro areas"
        image="/hero.jpeg"
      />

      <main className="py-12">
        <Container>
          <Section title="Top Hotels in Goa">
            <ShowMoreGrid items={goaHotels} variant="hotel" initial={4} />
          </Section>

          <Section title="Cities & Metro Areas">
            <ShowMoreGrid items={metroCities} variant="city" initial={6} />
          </Section>
        </Container>
      </main>
    </div>
  )
}
