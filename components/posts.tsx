import Image from "next/image"
import { Post } from "@/lib/posts"
import { formatDate } from "@/lib/utils"
import { BLOG_URL } from "@/lib/constants"

export default function Posts({ posts }: { posts: Post[] }) {
  return (
    <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      {posts.map((post, index) => (
        <li
          key={post.slug}
          className="last:sm:col-span-2"
        >
          
           <a href={`${BLOG_URL}/posts/${post.slug}`}
            className="group block overflow-hidden rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            {/* Image */}
            {post.image && (
              <div
                className={`relative overflow-hidden ${
                  index === posts.length - 1
                    ? "aspect-[2.5/1]"
                    : "aspect-[16/9]"
                }`}
              >
                <Image
                  src={post.image}
                  alt={post.imageAlt || post.title || ""}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  // First card is the likely LCP element on this page —
                  // load it eagerly, keep the rest lazy (Next's default).
                  priority={index === 0}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Category */}
                {post.category && (
                  <span className="absolute bottom-3 left-3 rounded-full bg-black/50 px-2.5 py-1 text-xs text-white backdrop-blur-sm">
                    {post.category}
                  </span>
                )}
              </div>
            )}

            {/* Content */}
            <div className="p-4">
              <h3 className="line-clamp-2 text-base font-semibold">
                {post.title}
              </h3>

              {post.excerpt && (
                <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">
                  {post.excerpt}
                </p>
              )}

              <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                {post.date && <span>{formatDate(post.date)}</span>}

                {post.readingTime && (
                  <span>{post.readingTime}</span>
                )}
              </div>
            </div>
          </a>
        </li>
      ))}
    </ul>
  )
}