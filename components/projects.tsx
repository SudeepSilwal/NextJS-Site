import Image from "next/image"
import { Project } from "@/lib/projects"
import { formatDate } from "@/lib/utils"
import { BLOG_URL } from "@/lib/constants"
import { GitBranch, ExternalLink } from "lucide-react"

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      {projects.map((project, index) => {
        // Live demo = genuinely external, opens in a new tab.
        // No demo = falls back to the project's page on the blog
        // subdomain, which is still your site, so it opens in the same
        // tab like post links do.
        const isExternalDemo = Boolean(project.demo)
        const href =
          project.demo || `${BLOG_URL}/projects/${project.slug}`

        return (
          <li
            key={project.slug}
            className="last:sm:col-span-2"
          >
            <div className="group overflow-hidden rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

              {/* Project Link + Image */}
              <a
                href={href}
                {...(isExternalDemo
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {/* Image */}
                {project.image && (
                  <div
                    className={`relative overflow-hidden ${index === projects.length - 1
                        ? "aspect-[2.5/1]"
                        : "aspect-[16/9]"
                      }`}
                  >
                    <Image
                      src={project.image}
                      alt={project.imageAlt || project.title || ""}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      priority={index === 0}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                    {/* Category */}
                    {project.category && (
                      <span className="absolute bottom-3 left-3 rounded-full bg-black/50 px-2.5 py-1 text-xs text-white backdrop-blur-sm">
                        {project.category}
                      </span>
                    )}
                  </div>
                )}

                {/* Content */}
                <div className="p-4 pb-0">
                  <h3 className="line-clamp-2 text-base font-semibold">
                    {project.title}
                  </h3>

                  {(project.excerpt || project.description) && (
                    <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">
                      {project.excerpt || project.description}
                    </p>
                  )}

                  {/* Date + Reading Time */}
                  <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                    {project.date && (
                      <span>{formatDate(project.date)}</span>
                    )}

                    {project.readingTime && (
                      <span>{project.readingTime}</span>
                    )}
                  </div>
                </div>
              </a>

              {/* GitHub + Live Demo */}
              {(project.github || project.demo) && (
                <div className="flex gap-2 p-4 pt-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-xs font-medium transition-colors hover:bg-muted"
                    >
                      <GitBranch className="h-3.5 w-3.5" />
                      GitHub
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-md bg-foreground px-3 py-1.5 text-xs font-medium text-background transition-opacity hover:opacity-80"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Live Demo
                    </a>
                  )}
                </div>
              )}
            </div>
          </li>
        )
      })}
    </ul>
  )
}