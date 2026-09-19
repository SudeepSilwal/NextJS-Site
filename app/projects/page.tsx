import Projects from '@/components/projects';
import JsonLd from '@/components/json-ld';
import { getProjects } from '@/lib/projects';
import { SITE_URL, SITE_NAME } from '@/lib/constants';
import type { Metadata } from 'next';

const PAGE_URL = `${SITE_URL}/projects`;
const PAGE_TITLE = 'Projects';
const PAGE_DESCRIPTION =
  'Development projects by Sudeep Silwal, including tools, apps, and experiments built while working toward Digital Nepal.';

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

export default async function ProjectsPage() {
  const projects = await getProjects();

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

      <h1 className="mb-8 text-3xl font-bold">All Projects</h1>

      <Projects projects={projects} />
    </main>
  );
}