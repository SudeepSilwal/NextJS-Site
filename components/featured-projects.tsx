import Projects from "@/components/projects"
import { getProjects } from "@/lib/projects"

export default async function FeaturedProjects() {
  const projects = await getProjects()

  const featuredProjects = projects.filter(
    (project) => project.featured
  )

  if (featuredProjects.length === 0) {
    return null
  }

  return (
    <section className="mt-16">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-semibold">
          Featured Projects
        </h2>

        <a
          href="/projects"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          View all →
        </a>
      </div>

      <Projects projects={featuredProjects} />
    </section>
  )
}