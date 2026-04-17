import { Link } from 'react-router-dom'
import type { Project } from '../data/content'

type ProjectCardProps = {
  project: Project
  reverse?: boolean
}

function ProjectCard({ project, reverse = false }: ProjectCardProps) {
  return (
    <Link to={`/project/${project.slug}`} className="block no-underline">
      <article
        className={`group grid items-center gap-10 rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-soft transition-shadow hover:shadow-[0_20px_60px_rgba(28,25,23,0.12)] md:grid-cols-2 md:p-8 ${
          reverse ? 'md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1' : ''
        }`}
      >
        <div className="aspect-[16/11] min-h-[280px] w-full overflow-hidden rounded-[1.5rem] border border-neutral-200 bg-neutral-100">
          <img
            src={project.thumbnail}
            alt={`${project.name} screenshot`}
            className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent-500">
            {project.name}
          </p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900">
            {project.summary}
          </h3>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-700"
              >
                {tech}
              </span>
            ))}
          </div>

          <p className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-500">
            View project
            <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
          </p>
        </div>
      </article>
    </Link>
  )
}

export default ProjectCard
