import Link from "next/link";

import { PostMetadata } from "@/lib/posts";
import { formatDate } from "@/lib/utils";

export default function Posts({ posts }: { posts: PostMetadata[] }) {
  return (
    <ul className="flex flex-col gap-8">
      {posts.map((post) => (
        <li key={post.slug} className="border-2 py-10 px-5">
          <Link
            href={`/posts/${post.slug}`}
            className="flex flex-col justify-between gap-x-4 gap-y-1 sm:flex-row"
          >
            <div className="max-w-lg">
              <p className="text-lg font-semibold">{post.title}</p>
              <p className="mt-1 line-clamp-2 text-sm font-light text-muted-foreground">
                {post.summary}
              </p>
              <p className="mt-2 text-sm font-light italic">{post.author}</p>
            </div>
            <div className="flex items-center">
              {post.publishedAt && (
                <p className="mt-1 text-sm font-light">
                  {formatDate(post.publishedAt)}
                </p>
              )}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}