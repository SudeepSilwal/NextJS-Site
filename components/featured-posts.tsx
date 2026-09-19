import Posts from "@/components/posts"
import { getPosts } from "@/lib/posts"

export default async function FeaturedPosts() {
  const posts = await getPosts()

  const featuredPosts = posts.filter((post) => post.featured)

  if (featuredPosts.length === 0) {
    return null
  }

  return (
    <section className="mt-16">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-semibold">
          Featured Posts
        </h2>

        <a
          href="/posts"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          View all →
        </a>
      </div>

      <Posts posts={featuredPosts} />
    </section>
  )
}