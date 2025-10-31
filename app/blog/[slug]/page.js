import React from 'react'

export async function generateStaticParams(){
  const { posts } = await import('../../../posts')
  return posts.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }){
  const { slug } = await params
  const { posts } = await import('../../../posts')
  const p = posts.find(x => x.slug === slug)
  if(!p) return {}
  return {
    title: p.title,
    description: p.description,
    openGraph: {
      title: p.title,
      description: p.description,
      url: `/blog/${p.slug}`
    }
  }
}

export default async function PostPage({ params }){
  const { slug } = await params
  const { posts } = await import('../../../posts')
  const p = posts.find(x => x.slug === slug)
  if(!p) return <div className="p-6">Post not found</div>

  const PostComponent = p.component.default || p.component

  // SEO structured data
  const ld = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": p.title,
    "description": p.description,
    "datePublished": p.date || undefined,
    "author": { "@type": "Organization", "name": "MySite" },
    "mainEntityOfPage": { "@type": "WebPage", "@id": `/blog/${p.slug}` }
  }

  // Blog image (use p.image if present, fallback to a default)
  const imageUrl = p.image || '/blog-default.jpg'

  return (
    <div className="max-w-3xl mx-auto text-black px-4 py-12">
      <article className="rounded-2xl card-lux shadow-xl overflow-hidden">
        {imageUrl && (
          <div className="w-full h-64 relative mb-6">
            <img src={imageUrl} alt={p.title + ' image'} className="object-cover w-full h-full rounded-t-2xl" loading="lazy" />
          </div>
        )}
        <div className="px-6 pb-6">
          <h1 className="text-4xl font-bold font-serif text-(--lux-gold) mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{p.title}</h1>
          <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-(--lux-muted)">
            {p.date && <span>Posted on {new Date(p.date).toLocaleDateString()} {new Date(p.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>}
            <span>by <span className="font-semibold text-(--lux-gold)">MySite</span></span>
          </div>
          <div className="prose prose-lg text-(--lux-foreground) font-sans">
            <PostComponent />
          </div>
        </div>
      </article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </div>
  )
}
