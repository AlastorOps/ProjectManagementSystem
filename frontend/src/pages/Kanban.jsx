import { useState } from 'react'
import { Plus, SlidersHorizontal } from 'lucide-react'
import { TopBar } from '../layout/TopBar'
import { Avatar } from '../components/ui/Avatar'
import { TaskDetailPanel } from '../components/TaskDetailPanel'
import { kanbanColumns, getMember } from '../data/mockData'
import './Kanban.css'

export function Kanban() {
  const [activeTask, setActiveTask] = useState(null)

  return (
    <div>
      <TopBar
        title="Kanban Board"
        subtitle="Drag tasks across stages to track progress"
        actions={
          <>
            <button className="btn btn-secondary">
              <SlidersHorizontal size={15} /> Filter
            </button>
            <button className="btn btn-primary">
              <Plus size={16} /> New Task
            </button>
          </>
        }
      />

      <div className="kanban-board scroll-x">
        {kanbanColumns.map((col) => (
          <div key={col.id} className="kanban-col">
            <div className="kanban-col__head">
              <span className="kanban-col__title">{col.title}</span>
              <span className="kanban-col__count">{col.tasks.length}</span>
            </div>
            <div className="kanban-col__list">
              {col.tasks.map((task) => {
                const member = getMember(task.assignee)
                return (
                  <button
                    key={task.id}
                    className="kanban-full-card"
                    onClick={() => setActiveTask({ ...task, status: col.title })}
                  >
                    <span className="kanban-full-card__project">{task.project}</span>
                    <p className="kanban-full-card__title">{task.title}</p>
                    <div className="kanban-full-card__footer">
                      <span className="kanban-full-card__due">{task.due}</span>
                      {member && <Avatar initials={member.initials} color={member.color} size={24} title={member.name} />}
                    </div>
                  </button>
                )
              })}
              <button className="kanban-col__add">
                <Plus size={14} /> Add task
              </button>
            </div>
          </div>
        ))}
      </div>

      {activeTask && <TaskDetailPanel task={activeTask} onClose={() => setActiveTask(null)} />}
    </div>
  )
}
