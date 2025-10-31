import * as post1 from './seo-for-escorts'
import * as post2 from './local-seo-basics'
import * as post3 from './image-optimization'
import * as post4 from './schema-markup'
import * as post5 from './mobile-seo'
import * as post6 from './content-strategy'
import * as post7 from './keyword-research'
import * as post8 from './onpage-seo'
import * as post9 from './link-building'
import * as post10 from './reviews-trust'
import * as post11 from './local-marketing-channels'

export const posts = [
  { slug: post1.meta.slug, title: post1.meta.title, description: post1.meta.description, date: post1.meta.date || null, component: post1 },
  { slug: post2.meta.slug, title: post2.meta.title, description: post2.meta.description, date: post2.meta.date || null, component: post2 },
  { slug: post3.meta.slug, title: post3.meta.title, description: post3.meta.description, date: post3.meta.date || null, component: post3 },
  { slug: post4.meta.slug, title: post4.meta.title, description: post4.meta.description, date: post4.meta.date || null, component: post4 },
  { slug: post5.meta.slug, title: post5.meta.title, description: post5.meta.description, date: post5.meta.date || null, component: post5 },
  { slug: post6.meta.slug, title: post6.meta.title, description: post6.meta.description, date: post6.meta.date || null, component: post6 },
  { slug: post7.meta.slug, title: post7.meta.title, description: post7.meta.description, date: post7.meta.date || null, component: post7 },
  { slug: post8.meta.slug, title: post8.meta.title, description: post8.meta.description, date: post8.meta.date || null, component: post8 },
  { slug: post9.meta.slug, title: post9.meta.title, description: post9.meta.description, date: post9.meta.date || null, component: post9 },
  { slug: post10.meta.slug, title: post10.meta.title, description: post10.meta.description, date: post10.meta.date || null, component: post10 },
  { slug: post11.meta.slug, title: post11.meta.title, description: post11.meta.description, date: post11.meta.date || null, component: post11 },
]

export function getPostBySlug(slug){
  return posts.find(p => p.slug === slug) || null
}

export default posts
