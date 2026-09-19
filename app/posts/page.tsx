import Posts from '@/components/posts';
import JsonLd from '@/components/json-ld';
import { getPosts } from '@/lib/posts';
import { SITE_URL, SITE_NAME } from '@/lib/constants';
import type { Metadata } from 'next';

const PAGE_URL = `${SITE_URL}/posts`;
const PAGE_TITLE = 'Blog Posts';
const PAGE_DESCRIPTION =
  "Articles and write-ups by Sudeep Silwal on software development, web projects, and technology.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: 'website',
    url: PAGE_URL,
    title: `${PAGE_TITLE} | ${SITE_NAME}`,
    description: PAGE_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${PAGE_TITLE} | ${SITE_NAME}`,
    description: PAGE_DESCRIPTION,
  },
};

export default async function PostsPage() {
  const posts = await getPosts();

  // CollectionPage schema genuinely represents this page: a hub listing
  // items whose full content lives elsewhere (the blog subdomain).
  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: PAGE_TITLE,
    url: PAGE_URL,
    description: PAGE_DESCRIPTION,
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  return (
    <main className="container mx-auto max-w-3xl px-5 pt-32 pb-16">
      <JsonLd data={collectionJsonLd} />

      <h1 className="mb-8 text-3xl font-bold">All Posts</h1>

      <Posts posts={posts} />
    </main>
  );
}