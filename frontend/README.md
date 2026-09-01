# Frontend

React + Vite UI for the Task & Project Management System — dashboards, task/project views, Kanban board, calendar, team, and reports.

## Stack

- React 19 + React Router 7
- Vite 8
- Recharts (charts) + lucide-react (icons)
- ESLint

## Getting Started

```bash
npm install
npm run dev       # starts the dev server with HMR
```

Other scripts:

```bash
npm run build      # production build
npm run preview    # preview the production build locally
npm run lint        # run ESLint
```

## Project Structure

```
src/
  components/     # shared UI components (StatCard, ProjectCard, TaskDetailPanel, ui/)
  layout/         # app shell — Sidebar, TopBar, AppLayout, layout context
  pages/          # routed pages (Dashboard, Tasks, Projects, Kanban, Calendar, Team, Reports)
  data/           # mock data (placeholder until wired to the backend API)
  styles/         # global styles and theme tokens
```

## Routes

| Path | Page |
|---|---|
| `/` | Dashboard |
| `/tasks` | Tasks |
| `/projects` | Projects |
| `/kanban` | Kanban |
| `/calendar` | Calendar |
| `/team` | Team |
| `/reports` | Reports |

## Status

Currently built against mock data in `src/data/mockData.js`. Integration with the backend REST API is pending — see the [API README](../api/README.md) and [Backend README](../backend/README.md).

## Contributing

See the root [README](../README.md) and [Contributing.md](../Contributing.md) for branch naming and workflow.
