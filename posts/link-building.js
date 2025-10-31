import React from 'react'

export const meta = {
  slug: 'local-link-building',
  title: 'Local Link Building for Small Businesses',
  description: 'Tactics to build relevant local links and partnerships that help search visibility.',
  date: '2025-10-29'
}

export default function Post(){
  return (
    <article className="prose max-w-none">
      <h1>{meta.title}</h1>
      <p>{meta.description}</p>

      <h2>Local partnerships</h2>
      <p>Partner with local blogs, directories, and businesses for co-marketing and link opportunities.</p>

      <h2>Events and sponsorships</h2>
      <p>Sponsor local events and get listed on event pages — these are strong local signals.</p>
    </article>
  )
}
