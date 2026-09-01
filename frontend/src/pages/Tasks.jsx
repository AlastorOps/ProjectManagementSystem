import { useState } from 'react'
import { Plus, SlidersHorizontal, ArrowUpDown, CheckCircle2, Circle, MoreHorizontal } from 'lucide-react'
import { TopBar } from '../layout/TopBar'
import { Avatar } from '../components/ui/Avatar'
import { Badge } from '../components/ui/Badge'
import { TaskDetailPanel } from '../components/TaskDetailPanel'
import { allTasks, getMember } from '../data/mockData'
import './Tasks.css'

export function Tasks() {
  const [tasks, setTasks] = useState(allTasks)
  const [activeTask, setActiveTask] = useState(null)

  const toggleDone = (id, e) => {
    e.stopPropagation()
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done, status: !t.done ? 'Done' : 'To Do' } : t))
    )
  }

  return (
    <div>
      <TopBar
        title="My Tasks"
        subtitle={`${tasks.length} tasks across all your projects`}
        actions={
          <>
            <button className="btn btn-secondary">
              <SlidersHorizontal size={15} /> Filter
            </button>
            <button className="btn btn-secondary">
              <ArrowUpDown size={15} /> Sort
            </button>
            <button className="btn btn-primary">
              <Plus size={16} /> New Task
            </button>
          </>
        }
      />

      <div className="card tasks-table-card">
        <div className="scroll-x">
          <table className="tasks-table">
            <thead>
              <tr>
                <th className="tasks-table__check"></th>
                <th>Task</th>
                <th>Project</th>
                <th>Assignee</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Due Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((t) => {
                const member = getMember(t.assignee)
                return (
                  <tr key={t.id} onClick={() => setActiveTask(t)} className="tasks-table__row">
                    <td onClick={(e) => toggleDone(t.id, e)}>
                      {t.done ? <CheckCircle2 size={18} color="var(--status-success)" /> : <Circle size={18} color="var(--text-muted)" />}
                    </td>
                    <td className={t.done ? 'tasks-table__name tasks-table__name--done' : 'tasks-table__name'}>
                      {t.name}
                    </td>
                    <td className="tasks-table__muted">{t.project}</td>
                    <td>
                      {member && (
                        <span className="tasks-table__assignee">
                          <Avatar initials={member.initials} color={member.color} size={26} />
                          {member.name}
                        </span>
                      )}
                    </td>
                    <td><Badge tone={t.priority}>{t.priority}</Badge></td>
                    <td><Badge tone={t.status}>{t.status}</Badge></td>
                    <td className="tasks-table__muted">{t.due}</td>
                    <td>
                      <button className="icon-btn" onClick={(e) => e.stopPropagation()} aria-label="More actions">
                        <MoreHorizontal size={16} />
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      {activeTask && <TaskDetailPanel task={activeTask} onClose={() => setActiveTask(null)} />}
    </div>
  )
}
