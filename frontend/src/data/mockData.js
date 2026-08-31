export const currentUser = {
  name: 'Nikky Sharma',
  firstName: 'Nikky',
  role: 'Product Manager',
  initials: 'NS',
}

export const teamMembers = [
  { id: 'u1', name: 'Nikky Sharma', initials: 'NS', role: 'Product Manager', color: '#AEB9D2', email: 'nikky@taskflow.app', tasks: 14, projects: 4 },
  { id: 'u2', name: 'Owen Blake', initials: 'OB', role: 'Frontend Engineer', color: '#B9B0C8', email: 'owen@taskflow.app', tasks: 9, projects: 3 },
  { id: 'u3', name: 'Maya Chen', initials: 'MC', role: 'UI / UX Designer', color: '#DDE3F0', email: 'maya@taskflow.app', tasks: 11, projects: 5 },
  { id: 'u4', name: 'Ravi Patel', initials: 'RP', role: 'Backend Engineer', color: '#78A88A', email: 'ravi@taskflow.app', tasks: 7, projects: 2 },
  { id: 'u5', name: 'Sofia Ruiz', initials: 'SR', role: 'QA Engineer', color: '#D2A85A', email: 'sofia@taskflow.app', tasks: 6, projects: 3 },
  { id: 'u6', name: 'Leo Nguyen', initials: 'LN', role: 'DevOps Engineer', color: '#7E9FC4', email: 'leo@taskflow.app', tasks: 5, projects: 2 },
]

export const projects = [
  {
    id: 'p1',
    name: 'Website Redesign',
    description: 'Marketing website redesign',
    progress: 72,
    due: 'Apr 28',
    members: ['u1', 'u2', 'u3'],
    status: 'On Track',
  },
  {
    id: 'p2',
    name: 'Mobile Application',
    description: 'Build the new mobile experience',
    progress: 48,
    due: 'May 05',
    members: ['u2', 'u4', 'u5'],
    status: 'On Track',
  },
  {
    id: 'p3',
    name: 'Backend System',
    description: 'API platform migration to v2',
    progress: 31,
    due: 'May 19',
    members: ['u4', 'u6'],
    status: 'At Risk',
  },
  {
    id: 'p4',
    name: 'Design System',
    description: 'Unify components across products',
    progress: 88,
    due: 'Apr 12',
    members: ['u3', 'u1'],
    status: 'On Track',
  },
  {
    id: 'p5',
    name: 'Management',
    description: 'Internal ops and reporting tools',
    progress: 56,
    due: 'Jun 02',
    members: ['u1', 'u5', 'u6'],
    status: 'On Track',
  },
]

export const taskOverview = [
  { key: 'todo', label: 'To Do', count: 12, percent: 25, color: 'var(--text-muted)' },
  { key: 'inprogress', label: 'In Progress', count: 8, percent: 17, color: 'var(--status-info)' },
  { key: 'review', label: 'Review', count: 4, percent: 8, color: 'var(--status-warning)' },
  { key: 'completed', label: 'Completed', count: 24, percent: 50, color: 'var(--status-success)' },
]

export const upcomingTasks = [
  { id: 't1', name: 'Finalize homepage design', project: 'Website Redesign', priority: 'High', due: 'Today', assignee: 'u3', done: false },
  { id: 't2', name: 'Review API documentation', project: 'Backend System', priority: 'Medium', due: 'Tomorrow', assignee: 'u4', done: false },
  { id: 't3', name: 'Prepare project presentation', project: 'Management', priority: 'Low', due: 'Friday', assignee: 'u1', done: false },
  { id: 't4', name: 'QA pass on checkout flow', project: 'Mobile Application', priority: 'High', due: 'Friday', assignee: 'u5', done: false },
  { id: 't5', name: 'Set up CI pipeline', project: 'Backend System', priority: 'Medium', due: 'Next week', assignee: 'u6', done: true },
]

export const allTasks = [
  ...upcomingTasks,
  { id: 't6', name: 'Design settings page', project: 'Website Redesign', priority: 'Medium', due: 'Aug 25', assignee: 'u3', done: true, status: 'Done' },
  { id: 't7', name: 'Fix login redirect bug', project: 'Mobile Application', priority: 'High', due: 'Aug 26', assignee: 'u2', done: false, status: 'In Progress' },
  { id: 't8', name: 'Write onboarding copy', project: 'Website Redesign', priority: 'Low', due: 'Aug 29', assignee: 'u1', done: false, status: 'To Do' },
  { id: 't9', name: 'Migrate user table schema', project: 'Backend System', priority: 'High', due: 'Sep 02', assignee: 'u4', done: false, status: 'In Progress' },
  { id: 't10', name: 'Usability test round 2', project: 'Mobile Application', priority: 'Medium', due: 'Sep 04', assignee: 'u5', done: false, status: 'Review' },
].map((t) => ({ status: t.status || (t.done ? 'Done' : 'To Do'), ...t }))

export const kanbanColumns = [
  {
    id: 'backlog',
    title: 'Backlog',
    tasks: [
      { id: 'k1', title: 'Explore competitor dashboards', project: 'Website Redesign', due: 'Sep 10', assignee: 'u3' },
      { id: 'k2', title: 'Draft Q3 roadmap', project: 'Management', due: 'Sep 12', assignee: 'u1' },
    ],
  },
  {
    id: 'todo',
    title: 'To Do',
    tasks: [
      { id: 'k3', title: 'Write onboarding copy', project: 'Website Redesign', due: 'Aug 29', assignee: 'u1' },
      { id: 'k4', title: 'Set up analytics events', project: 'Mobile Application', due: 'Sep 01', assignee: 'u2' },
      { id: 'k5', title: 'Design empty states', project: 'Website Redesign', due: 'Sep 03', assignee: 'u3' },
    ],
  },
  {
    id: 'inprogress',
    title: 'In Progress',
    tasks: [
      { id: 'k6', title: 'Fix login redirect bug', project: 'Mobile Application', due: 'Aug 26', assignee: 'u2' },
      { id: 'k7', title: 'Migrate user table schema', project: 'Backend System', due: 'Sep 02', assignee: 'u4' },
    ],
  },
  {
    id: 'review',
    title: 'Review',
    tasks: [
      { id: 'k8', title: 'Usability test round 2', project: 'Mobile Application', due: 'Sep 04', assignee: 'u5' },
    ],
  },
  {
    id: 'done',
    title: 'Done',
    tasks: [
      { id: 'k9', title: 'Design settings page', project: 'Website Redesign', due: 'Aug 25', assignee: 'u3' },
      { id: 'k10', title: 'Set up CI pipeline', project: 'Backend System', due: 'Aug 20', assignee: 'u6' },
    ],
  },
]

export const weeklyReport = [
  { day: 'Mon', completed: 5, created: 7, overdue: 1 },
  { day: 'Tue', completed: 8, created: 6, overdue: 0 },
  { day: 'Wed', completed: 6, created: 9, overdue: 2 },
  { day: 'Thu', completed: 9, created: 5, overdue: 1 },
  { day: 'Fri', completed: 12, created: 8, overdue: 0 },
  { day: 'Sat', completed: 4, created: 2, overdue: 0 },
  { day: 'Sun', completed: 3, created: 3, overdue: 1 },
]

export const workDistribution = {
  completedPercent: 85,
  tasks: 42,
  projectsCount: 8,
  completed: 36,
}

export const statCards = [
  { key: 'total', label: 'Total Tasks', value: 48, delta: '+6 this week', tone: 'neutral' },
  { key: 'progress', label: 'In Progress', value: 8, delta: '+2 this week', tone: 'info' },
  { key: 'completed', label: 'Completed', value: 36, delta: '+9 this week', tone: 'success' },
  { key: 'overdue', label: 'Overdue', value: 3, delta: '-1 this week', tone: 'danger' },
]

export const activityFeed = [
  { id: 'a1', user: 'u3', action: 'completed', target: 'Design settings page', time: '2h ago' },
  { id: 'a2', user: 'u2', action: 'commented on', target: 'Fix login redirect bug', time: '3h ago' },
  { id: 'a3', user: 'u4', action: 'started', target: 'Migrate user table schema', time: '5h ago' },
  { id: 'a4', user: 'u1', action: 'created', target: 'Prepare project presentation', time: 'Yesterday' },
  { id: 'a5', user: 'u6', action: 'completed', target: 'Set up CI pipeline', time: 'Yesterday' },
]

export const productivityByMember = teamMembers.map((m) => ({
  name: m.name.split(' ')[0],
  completed: m.tasks,
}))

export const workloadByMember = teamMembers.map((m) => ({
  name: m.name.split(' ')[0],
  tasks: m.tasks,
  color: m.color,
}))

export function getMember(id) {
  return teamMembers.find((m) => m.id === id)
}
