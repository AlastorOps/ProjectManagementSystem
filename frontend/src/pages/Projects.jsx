import { Plus } from 'lucide-react'
import { TopBar } from '../layout/TopBar'
import { ProjectCard } from '../components/ProjectCard'
import { projects } from '../data/mockData'
import './Projects.css'

export function Projects() {
  return (
    <div>
      <TopBar
        title="Projects"
        subtitle={`${projects.length} active projects across your team`}
        actions={
          <button className="btn btn-primary">
            <Plus size={16} /> New Project
          </button>
        }
      />

      <div className="projects-grid">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  )
}
