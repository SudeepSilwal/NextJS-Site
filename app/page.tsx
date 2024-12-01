import Intro from "@/components/intro";
import RecentPosts from "@/components/recent-posts";
import RecentProjects from "@/components/recent-projects";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home | Sudeep Silwal',
  description: 'Welcome to the personal portfolio of Sudeep Silwal. Explore my projects, skills, and experiences as I work toward transforming Digital Nepal.',
};

export default function Home() {

  return (
    <section className="py-24">
      <div className="container max-w-3xl">
        <Intro />
        <RecentPosts />
        <RecentProjects/>
      </div>
    </section>
  );
}
