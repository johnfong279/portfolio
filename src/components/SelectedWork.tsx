import { projects } from '../data/content'
import ProjectCard from './ProjectCard'
import SectionHeading from './SectionHeading'

function SelectedWork() {
  return (
    <div>
      <SectionHeading
        eyebrow="Selected work"
        title="Projects I've built"
        subtitle="Full-stack applications covering trading analytics, regulatory compliance, and booking systems."
      />

      <div className="mt-14 space-y-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} reverse={index % 2 === 1} />
        ))}
      </div>
    </div>
  )
}

export default SelectedWork
