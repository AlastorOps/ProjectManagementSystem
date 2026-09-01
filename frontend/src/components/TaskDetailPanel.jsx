import { useState } from 'react'
import {
  X,
  CalendarDays,
  Flag,
  FolderKanban,
  Paperclip,
  CheckSquare,
  Square,
  Send,
} from 'lucide-react'
import { Avatar } from './ui/Avatar'
import { Badge } from './ui/Badge'
import { getMember } from '../data/mockData'
import './TaskDetailPanel.css'

const defaultSubtasks = [
  { id: 's1', label: 'Gather requirements', done: true },
  { id: 's2', label: 'Draft initial version', done: true },
  { id: 's3', label: 'Get stakeholder feedback', done: false },
  { id: 's4', label: 'Finalize and ship', done: false },
]

const defaultComments = [
  { id: 'c1', user: 'u3', text: 'Left a few notes on the latest draft, looks great overall.', time: '2h ago' },
  { id: 'c2', user: 'u1', text: 'Thanks! Will address those before Friday.', time: '1h ago' },
]

export function TaskDetailPanel({ task, onClose }) {
  const [subtasks, setSubtasks] = useState(defaultSubtasks)
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState(defaultComments)

  if (!task) return null

  const assignee = getMember(task.assignee)
  const doneCount = subtasks.filter((s) => s.done).length

  const toggleSubtask = (id) => {
    setSubtasks((prev) => prev.map((s) => (s.id === id ? { ...s, done: !s.done } : s)))
  }

  const submitComment = (e) => {
    e.preventDefault()
    if (!comment.trim()) return
    setComments((prev) => [...prev, { id: `c${Date.now()}`, user: 'u1', text: comment.trim(), time: 'Just now' }])
    setComment('')
  }

  return (
    <div className="task-panel-backdrop" onClick={onClose}>
      <aside className="task-panel" onClick={(e) => e.stopPropagation()}>
        <div className="task-panel__header">
          <span className="task-panel__eyebrow">Task</span>
          <button className="icon-btn" onClick={onClose} aria-label="Close panel">
            <X size={18} />
          </button>
        </div>

        <div className="task-panel__body">
          <h2 className="task-panel__title">{task.name || task.title}</h2>

          <div className="task-panel__meta">
            <Badge tone={task.status || 'To Do'}>{task.status || 'To Do'}</Badge>
            <Badge tone={task.priority || 'Medium'}>{task.priority || 'Medium'}</Badge>
          </div>

          <div className="task-panel__fields">
            <div className="task-panel__field">
              <span className="task-panel__field-label"><CalendarDays size={14} /> Due date</span>
              <span className="task-panel__field-value">{task.due}</span>
            </div>
            <div className="task-panel__field">
              <span className="task-panel__field-label"><FolderKanban size={14} /> Project</span>
              <span className="task-panel__field-value">{task.project}</span>
            </div>
            <div className="task-panel__field">
              <span className="task-panel__field-label"><Flag size={14} /> Priority</span>
              <span className="task-panel__field-value">{task.priority || 'Medium'}</span>
            </div>
            <div className="task-panel__field">
              <span className="task-panel__field-label">Assignee</span>
              {assignee ? (
                <span className="task-panel__assignee">
                  <Avatar initials={assignee.initials} color={assignee.color} size={22} />
                  {assignee.name}
                </span>
              ) : (
                <span className="task-panel__field-value">Unassigned</span>
              )}
            </div>
          </div>

          <div className="task-panel__section">
            <h4>Description</h4>
            <p className="task-panel__description">
              Work on <strong>{task.name || task.title}</strong> for the {task.project} project. Keep the team
              posted on progress and flag any blockers early so the timeline stays on track.
            </p>
          </div>

          <div className="task-panel__section">
            <div className="task-panel__section-head">
              <h4>Subtasks</h4>
              <span className="task-panel__count">{doneCount}/{subtasks.length}</span>
            </div>
            <div className="task-panel__subtasks">
              {subtasks.map((s) => (
                <button key={s.id} className="subtask-row" onClick={() => toggleSubtask(s.id)}>
                  {s.done ? <CheckSquare size={17} /> : <Square size={17} />}
                  <span className={s.done ? 'subtask-row__done' : ''}>{s.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="task-panel__section">
            <h4>Attachments</h4>
            <div className="attachment-row">
              <Paperclip size={14} />
              <span>homepage-wireframe-v3.fig</span>
            </div>
          </div>

          <div className="task-panel__section">
            <h4>Comments</h4>
            <div className="comment-list">
              {comments.map((c) => {
                const user = getMember(c.user)
                return (
                  <div key={c.id} className="comment-row">
                    {user && <Avatar initials={user.initials} color={user.color} size={28} />}
                    <div className="comment-row__body">
                      <div className="comment-row__head">
                        <span className="comment-row__name">{user?.name}</span>
                        <span className="comment-row__time">{c.time}</span>
                      </div>
                      <p>{c.text}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <form className="task-panel__footer" onSubmit={submitComment}>
          <input
            type="text"
            placeholder="Add a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button type="submit" className="icon-btn" aria-label="Send comment">
            <Send size={16} />
          </button>
          <button type="button" className="btn btn-primary task-panel__save">Save</button>
        </form>
      </aside>
    </div>
  )
}
