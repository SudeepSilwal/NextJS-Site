import { BLOG_URL } from '@/lib/constants'

const API_URL = `${BLOG_URL}/api/v1/blog/projects`

export type Project = {
  id?: number
  title?: string
  draft?: boolean
  imageAlt?: string
  slug: string
  excerpt?: string
  description?: string
  content?: string
  category?: string
  tags?: string[]
  date?: string
  readingTime?: string
  image?: string
  github?: string
  demo?: string
  featured?: boolean
}

export async function getProjects(limit?: number): Promise<Project[]> {
  const response = await fetch(API_URL, {
    next: { revalidate: 60 },
  })

  if (!response.ok) {
    throw new Error('Failed to fetch projects')
  }

  const projects: Project[] = await response.json()

  // Draft projects should never render on the main site, whether or not
  // they're also marked featured.
  const publishedProjects = projects.filter((project) => !project.draft)

  const sortedProjects = publishedProjects.sort((a, b) => {
    return (
      new Date(b.date ?? '').getTime() -
      new Date(a.date ?? '').getTime()
    )
  })

  return limit ? sortedProjects.slice(0, limit) : sortedProjects
}

export async function getProjectBySlug(
  slug: string
): Promise<Project | null> {
  const projects = await getProjects()

  return projects.find(project => project.slug === slug) ?? null
}