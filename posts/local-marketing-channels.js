import React from 'react'

export const meta = {
  slug: 'local-marketing-channels',
  title: 'Local Marketing Channels That Work',
  description: 'An overview of effective local marketing channels: search, social, listings, and referral networks.',
  date: '2025-10-29'
}

export default function Post(){
  return (
    <article className="prose max-w-none">
      <h1>{meta.title}</h1>
      <p>{meta.description}</p>

      <h2>Search and listings</h2>
      <p>Optimize search presence with local SEO and keep listings accurate across platforms.</p>

      <h2>Social and community</h2>
      <p>Use local social channels and community groups to share offers and attract nearby customers.</p>
    </article>
  )
}
