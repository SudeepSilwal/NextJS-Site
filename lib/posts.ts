import { BLOG_URL } from '@/lib/constants'

const API_URL = `${BLOG_URL}/api/v1/blog/posts`

export type Post = {
  id?: number
  title?: string
  imageAlt?: string
  slug: string
  excerpt?: string
  content?: string
  category?: string
  tags?: string[]
  date?: string
  modifiedDate?: string
  readingTime?: string
  image?: string
  youtubeId?: string
  featured?: boolean
}

export async function getPosts(limit?: number): Promise<Post[]> {
  const response = await fetch(API_URL, {
    next: { revalidate: 60 },
  })

  if (!response.ok) {
    throw new Error('Failed to fetch posts')
  }

  const posts: Post[] = await response.json()

  const sortedPosts = posts.sort((a, b) => {
    return (
      new Date(b.date ?? '').getTime() -
      new Date(a.date ?? '').getTime()
    )
  })

  return limit ? sortedPosts.slice(0, limit) : sortedPosts
}

export async function getPostBySlug(
  slug: string
): Promise<Post | null> {
  const posts = await getPosts()

  return posts.find(post => post.slug === slug) ?? null
}