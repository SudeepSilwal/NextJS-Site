import Link from 'next/link'
import Image from 'next/image'

import { formatDate } from '@/lib/utils'
import MDXContent from '@/components/mdx-content'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import { getProjectBySlug, getProjects } from '@/lib/projects'
import { notFound } from 'next/navigation'

// GitHub Icon SVG
const GitHubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
)

export async function generateStaticParams() {
  const projects = await getProjects()
  const slugs = projects.map(project => ({ slug: project.slug }))

  return slugs
}

export default async function Project({
  params
}: {
  params: { slug: string }
}) {
  const { slug } = params
  const project = await getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const { metadata, content } = project
  const { title, image, author, publishedAt } = metadata

  return (
    <section className='pb-24 pt-32'>
      <div className='container max-w-3xl'>
        <Link
          href='/projects'
          className='mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground'
        >
          <ArrowLeftIcon className='h-5 w-5' />
          <span>Back to projects</span>
        </Link>

        {image && (
          <div className='relative mb-6 h-96 w-full overflow-hidden rounded-lg'>
            <Image
              src={image}
              alt={title || ''}
              className='object-cover'
              fill
            />
          </div>
        )}

        <header>
          <h1 className='title'>{title}</h1>
          <p className='mt-3 text-xs text-muted-foreground'>
            {author} / {formatDate(publishedAt ?? '')}
          </p>
        </header>

        <main className='prose mt-16 dark:prose-invert'>
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
