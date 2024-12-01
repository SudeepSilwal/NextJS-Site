import Link from 'next/link'
import Image from 'next/image'
import { formatDate } from '@/lib/utils'
import MDXContent from '@/components/mdx-content'
import GitHubIcon from '@/components/ui/GitHubIcon';
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import { getProjectBySlug, getProjects } from '@/lib/projects'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

// Dynamic metadata function
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug)

  if (!project) {
    return {
      title: 'Project Not Found | sudeepsilwal.com.np',
      description: 'The requested project could not be found.',
    }
  }

  return {
    title: `${project.metadata.title} by ${project.metadata.author}` || 'sudeepsilwal.com.np',
    description: project.metadata.summary || 'Personal portfolio site of Sudeep Silwal',
  }
}

// Pre-generate static paths for dynamic slugs
export async function generateStaticParams() {
  const projects = await getProjects()
  const slugs = projects.map(project => ({ slug: project.slug }))
  return slugs
}

export default async function Project({ params }: { params: { slug: string } }) {
  const { slug } = params
  const project = await getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const { metadata, content } = project
  const { title, image, author, publishedAt } = metadata

  return (
    <section className="pb-24 pt-32">
      <div className="container max-w-3xl">
        <Link
          href="/projects"
          className="mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeftIcon className="h-5 w-5" />
          <span>Back to projects</span>
        </Link>

        {image && (
          <div className="relative mb-6 h-96 w-full overflow-hidden rounded-lg">
            <Image src={image} alt={title || ''} className="object-cover" fill />
          </div>
        )}

        <header>
          <h1 className="title">{title}</h1>
          <p className="mt-3 text-xs text-muted-foreground">
            {author} / {formatDate(publishedAt ?? '')}
          </p>
        </header>

        <main className="prose mt-16 dark:prose-invert">
          <MDXContent source={content} />
        </main>
      </div>

      {/* GitHub Icon with hover effect positioned at bottom-right */}
      <div className="fixed bottom-8 right-8 z-20">
        <Link href={`https://github.com/SudeepSilwal/${slug}`} target="_blank">
          <div className="group relative">
            <GitHubIcon className="h-12 w-12 text-black bg-white p-2 rounded-full transition-transform duration-300 transform group-hover:scale-110 group-hover:z-10 hover:rotate-45" />
          </div>
        </Link>
      </div>
    </section>
  )
}
