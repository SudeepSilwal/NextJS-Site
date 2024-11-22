import Image from "next/image";
import Link from "next/link";
import { ProjectMetadata } from "@/lib/projects";
import { formatDate } from "@/lib/utils";
import { SVGProps } from "react";

// Eye Icon SVG
const EyeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12 4.5c-7 0-10 7.5-10 7.5s3 7.5 10 7.5 10-7.5 10-7.5-3-7.5-10-7.5zm0 13c-4.142 0-7.41-3.223-8.637-5.5 1.227-2.277 4.495-5.5 8.637-5.5 4.142 0 7.41 3.223 8.637 5.5-1.227 2.277-4.495 5.5-8.637 5.5zm0-10c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5-2-4.5-4.5-4.5zm0 7a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
  </svg>
);

// GitHub Icon SVG
const GitHubIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
);

export default function Projects({
  projects = [], // Default to an empty array if no projects are passed
}: {
  projects: ProjectMetadata[] | undefined; // Allow for undefined
}) {
  if (!projects || projects.length === 0) {
    return (
      <div>No projects available.</div> // Display a message if no projects are found
    );
  }

  return (
    <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2">
      {projects.map((project) => (
        <li key={project.slug} className="group relative">
          <Link href={`/projects/${project.slug}`} passHref>
            {project.image && (
              <div className="h-72 w-full overflow-hidden bg-muted sm:h-60">
                <Image
                  src={project.image}
                  alt={project.title || ""}
                  fill
                  className="rounded-lg object-cover object-center transition-transform duration-500 scale-105 group-hover:scale-100"
                />
              </div>
            )}

            <div className="absolute inset-[1px] rounded-lg bg-background/60 opacity-100 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="absolute inset-x-0 bottom-0 px-6 py-5 translate-y-0 opacity-100 transition-all duration-500 group-hover:translate-y-2 group-hover:opacity-0">
              <h2 className="text-xl line-clamp-1 no-underline">{project.title}</h2>
              <p className="text-sm text-muted-foreground line-clamp-1">
                {project.summary}
              </p>
              <p className="text-xs font-light text-muted-foreground">
                {formatDate(project.publishedAt ?? "")}
              </p>
            </div>
          </Link>

          {/* Eye Icon and GitHub Icon Side by Side with Hover Animation */}
          <div className="absolute inset-0 flex items-center justify-center space-x-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <a
              href={`/projects/${project.slug}`}
              rel="noopener"
              aria-label="View Project"
            >
            <EyeIcon className="h-12 w-12 text-white bg-black/100 p-2 rounded-full border-[1px] border-black transition-all duration-300 ease-in-out hover:scale-105 hover:bg-white/40 hover:text-black hover:border-black" />
            </a>
            <a
              href={`https://github.com/sudeepsilwal`}
              target="_blank"
              rel="noopener"
              aria-label="GitHub Profile"
            >
              <GitHubIcon className="h-12 w-12 text-white bg-black/100 p-2 rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-white/40 hover:text-black border-[1px] border-black" />
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
}
