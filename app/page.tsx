import Intro from '@/components/intro';
import FeaturedPosts from '@/components/featured-posts';
import FeaturedProjects from '@/components/featured-projects';
import { SITE_URL } from '@/lib/constants';
import type { Metadata } from 'next';

// Title and description are intentionally NOT overridden here — they
// inherit the site-wide defaults from app/layout.tsx ("Sudeep Silwal —
// Personal Portfolio"), which already matches this page's target identity.
// Only the canonical needs to be set explicitly per page.
export const metadata: Metadata = {
  alternates: {
    canonical: SITE_URL,
  },
};

export default function Home() {
  return (
    <section className="py-24">
      <div className="container max-w-3xl">
        <Intro />

        <FeaturedPosts />

        <FeaturedProjects />
      </div>
    </section>
  );
}