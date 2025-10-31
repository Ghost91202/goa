import React from 'react';
import Testimonials from './components/Testimonials';
import posts from '../posts';
import Link from 'next/link';
import Hero from './components/ui/Hero';
import Section from './components/ui/Section';
import Container from './components/ui/Container';
import Card from './components/ui/Card';
import Gallery from './components/ui/gallery';
import { FaArrowRight } from 'react-icons/fa';
import InfoSection from './components/ui/InfoSection';

export default function Page() {
  return (
    <div>
      <Hero
        title="Discover Local Services"
        subtitle="Browse profiles, view curated photos, and contact providers securely via WhatsApp or phone."
        image="/hero.jpeg"
      />
      <div className="text-center p-12 bg-pink-500">
        <h1 className="text-4xl font-bold ">Welcome to MySite</h1>
        <p className="mt-2 text-lg lg:mx-72 safe-center text-yellow-300 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quisquam? Itaque,
          obcaecati! Minima incidunt reprehenderit sapiente illo, consequuntur architecto, sunt vel
          quidem, praesentium blanditiis quae fugiat cupiditate sequi dolores? Veritatis.
        </p>

        <Link
          href="/gallery"
          className="inline-flex items-center px-5 py-3  btn-nyka bg-yellow-300 text-pink-500 font-bold text-xl rounded-2xl mx-2 lg:mx-10"
        >
          Book meeting
        </Link>
      </div>

      <InfoSection
  title="Discreet, Professional Escort Services"
  text="Our team offers luxury, privacy-focused experiences tailored to your needs. All providers are verified and uphold the highest standards."
  image="/images.jpg"/>
      <main className="py-12">
        <Container>


          {/* <Section title="Services ">
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-pink-500 font-bold">
              <Link href="/services/profile-listings" >
                <Card className="p-4 text-center flex flex-row justify-center align-middle  ">
                  Profile listings <FaArrowRight className=" flex justify-center align-middle "/>
                </Card>
              </Link>
              <Link href="/services/verified-photos">
                <Card className="p-4 text-center flex flex-row justify-center align-middle  ">
                  Verified photos <FaArrowRight className=" flex justify-center align-middle "/>
                </Card>
              </Link>
              <Link href="/services/fast-local-booking">
                <Card className="p-4 text-center flex flex-row justify-center align-middle  ">
                  Fast local booking <FaArrowRight className=" flex justify-center align-middle "/>
                </Card>
              </Link>
            </div>
          </Section> */}
          <Gallery />
<Section title="Featured blog posts">
            <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.slice(0, 6).map((p) => (
                <Card key={p.slug} className="p-6 text-left">
                  <h3 className="font-semibold text-lg text-pink-500">
                    <Link href={`/blog/${p.slug}`} className="hover:underline">
                      {p.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-slate-600 mt-2">{p.description}</p>
                </Card>
              ))}
            </div>
          </Section>
          <Testimonials />
        </Container>
      </main>
    </div>
  );
}
