import { CalendarDays } from 'lucide-react'
import { AvatarGroup } from './ui/Avatar'
import { ProgressBar } from './ui/ProgressBar'
import { Badge } from './ui/Badge'
import './ProjectCard.css'

export function ProjectCard({ project }) {
  return (
    <div className="card card--hoverable project-card">
      <div className="project-card__top">
        <div>
          <h3 className="project-card__name">{project.name}</h3>
          <p className="project-card__desc">{project.description}</p>
        </div>
        <Badge tone={project.status}>{project.status}</Badge>
      </div>

      <div className="project-card__progress">
        <div className="project-card__progress-label">
          <span>Progress</span>
          <span className="project-card__progress-value">{project.progress}%</span>
        </div>
        <ProgressBar percent={project.progress} />
      </div>

      <div className="project-card__footer">
        <AvatarGroup memberIds={project.members} size={28} />
        <span className="project-card__due">
          <CalendarDays size={14} />
          Due {project.due}
        </span>
      </div>
    </div>
  )
}
