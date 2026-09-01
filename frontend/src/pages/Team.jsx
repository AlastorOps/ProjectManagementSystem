import { useState } from 'react'
import { UserPlus, Mail, FolderKanban, ListChecks, Search } from 'lucide-react'
import { TopBar } from '../layout/TopBar'
import { Avatar } from '../components/ui/Avatar'
import { projects, teamMembers, activityFeed } from '../data/mockData'
import './Team.css'

export function Team() {
  const [selectedId, setSelectedId] = useState(teamMembers[0].id)
  const [query, setQuery] = useState('')

  const selected = teamMembers.find((m) => m.id === selectedId)
  const memberProjects = projects.filter((p) => p.members.includes(selectedId))
  const memberActivity = activityFeed.filter((a) => a.user === selectedId)

  const filtered = teamMembers.filter((m) =>
    m.name.toLowerCase().includes(query.toLowerCase()) || m.role.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div>
      <TopBar
        title="Team"
        subtitle={`${teamMembers.length} members collaborating across projects`}
        showSearch={false}
        actions={
          <button className="btn btn-primary">
            <UserPlus size={16} /> Invite Member
          </button>
        }
      />

      <div className="team-layout">
        <section className="card team-list">
          <div className="team-list__search">
            <Search size={15} />
            <input
              type="text"
              placeholder="Search members"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="team-list__items">
            {filtered.map((m) => (
              <button
                key={m.id}
                className={`team-list__item ${m.id === selectedId ? 'team-list__item--active' : ''}`}
                onClick={() => setSelectedId(m.id)}
              >
                <Avatar initials={m.initials} color={m.color} size={38} />
                <span className="team-list__item-info">
                  <span className="team-list__item-name">{m.name}</span>
                  <span className="team-list__item-role">{m.role}</span>
                </span>
              </button>
            ))}
          </div>
        </section>

        {selected && (
          <section className="card team-detail">
            <div className="team-detail__header">
              <Avatar initials={selected.initials} color={selected.color} size={64} />
              <div>
                <h2 className="team-detail__name">{selected.name}</h2>
                <p className="team-detail__role">{selected.role}</p>
                <span className="team-detail__email">
                  <Mail size={13} /> {selected.email}
                </span>
              </div>
            </div>

            <div className="team-detail__stats">
              <div className="team-detail__stat">
                <ListChecks size={16} />
                <div>
                  <span className="team-detail__stat-value">{selected.tasks}</span>
                  <span className="team-detail__stat-label">Assigned Tasks</span>
                </div>
              </div>
              <div className="team-detail__stat">
                <FolderKanban size={16} />
                <div>
                  <span className="team-detail__stat-value">{selected.projects}</span>
                  <span className="team-detail__stat-label">Projects</span>
                </div>
              </div>
            </div>

            <div className="team-detail__section">
              <h4>Projects</h4>
              {memberProjects.length === 0 && <p className="team-detail__empty">No active projects.</p>}
              <div className="team-detail__project-list">
                {memberProjects.map((p) => (
                  <div key={p.id} className="team-detail__project-row">
                    <span>{p.name}</span>
                    <span className="team-detail__project-progress">{p.progress}%</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="team-detail__section">
              <h4>Recent Activity</h4>
              {memberActivity.length === 0 && <p className="team-detail__empty">No recent activity.</p>}
              <div className="team-detail__activity-list">
                {memberActivity.map((a) => (
                  <div key={a.id} className="team-detail__activity-row">
                    <span className="team-detail__activity-dot" />
                    <p>
                      {a.action} <strong>{a.target}</strong>
                    </p>
                    <span className="team-detail__activity-time">{a.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
