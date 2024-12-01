import Link from 'next/link';
import Image from 'next/image';
import { formatDate } from '@/lib/utils';
import MDXContent from '@/components/mdx-content';
import { getPosts, getPostBySlug } from '@/lib/posts';
import { ArrowLeftIcon } from '@radix-ui/react-icons';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import type { Metadata } from 'next';

// Dynamic metadata function
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Page Not Found | sudeepsilwal.com.np',
      description: 'The requested page could not be found.',
    };
  }

  return {
    title: `${post.metadata.title} by ${post.metadata.author}` || 'sudeepsilwal.com.np',
    description: post.metadata.summary || 'Personal portfolio site of Sudeep Silwal',
  };
}

// Pre-generate static paths for dynamic slugs
export async function generateStaticParams() {
  const posts = await getPosts();
  const slugs = posts.map(post => ({ slug: post.slug }));
  return slugs;
}

// TypeScript interface for post data
interface PostMetadata {
  title: string;
  image: string;
  author: string;
  publishedAt: string;
  description?: string;
}

interface Post {
  metadata: PostMetadata;
  content: string;
}

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { metadata, content } = post;
  const { title, image, author, publishedAt } = metadata;

  return (
    <Suspense fallback={<div>Loading post...</div>}>
      <section className='pb-24 pt-32'>
        <div className='container max-w-3xl'>
          <Link
            href='/posts'
            className='mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground'
          >
            <ArrowLeftIcon className='h-5 w-5' />
            <span>Back to posts</span>
          </Link>

          {image && (
            <div className='relative mb-6 h-96 w-full overflow-hidden rounded-lg'>
              <Image
                src={image}
                alt={title || ''}
                className='object-cover'
                fill
                priority // Preloads the image
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

          {process.env.NEXT_PUBLIC_NEWSLETTER_ENABLED === 'true' && (
            <footer className='mt-16'>
              {/* Uncomment this if you have the NewsletterForm component */}
              {/* <NewsletterForm /> */}
            </footer>
          )}
        </div>
      </section>
    </Suspense>
  );
}
