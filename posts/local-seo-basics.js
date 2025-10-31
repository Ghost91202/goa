import React from 'react'

export const meta = {
  slug: 'local-seo-basics',
  title: 'Local SEO Basics for Service Providers',
  description: 'Quick actionable local SEO tactics to help small service businesses rank higher in local searches.',
  date: '2025-10-29'
}

export default function Post(){
  return (
    <article className="prose max-w-none">
      <h1>{meta.title}</h1>
      <p>{meta.description}</p>

      <h2>Claim and optimize your Google Business Profile</h2>
      <p>Make sure your Business Profile is claimed, has accurate hours, contact info, and high-quality photos.</p>

      <h2>Consistent NAP</h2>
      <p>Use consistent Name, Address, Phone across all directories to avoid confusion for search engines.</p>
    </article>
  )
}
