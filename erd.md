# Database ERD — Task & Project Management System

This document defines the database schema for the project. It is split into two phases:

- **Phase 1 — Core tables**: required before Backend/API development can start (per project sequencing rule: Database Design → Backend Development).
- **Phase 2 — Supporting tables**: comments, attachments, work logs, notifications, activity logs. These plug into the core tables and can be built in parallel once Phase 1 is stable.

---

## Phase 1: Core Entities

```mermaid
erDiagram
  ROLES ||--o{ USERS : has
  ROLES ||--o{ ROLE_PERMISSIONS : grants
  PERMISSIONS ||--o{ ROLE_PERMISSIONS : included_in
  USERS ||--o{ PROJECTS : manages
  PROJECTS ||--o{ PROJECT_MEMBERS : has
  USERS ||--o{ PROJECT_MEMBERS : joins_as
  PROJECTS ||--o{ MILESTONES : has
  PROJECTS ||--o{ TASKS : contains
  MILESTONES ||--o{ TASKS : groups
  TASKS ||--o{ TASK_ASSIGNEES : has
  USERS ||--o{ TASK_ASSIGNEES : assigned_to
  TASKS ||--o{ TASK_DEPENDENCIES : is_blocked_by
  TASKS ||--o{ TASK_DEPENDENCIES : blocks

  ROLES {
    int role_id PK
    string role_name
  }
  PERMISSIONS {
    int permission_id PK
    string action_name
  }
  ROLE_PERMISSIONS {
    int role_id FK
    int permission_id FK
  }
  USERS {
    int user_id PK
    string full_name
    string email
    string username
    string password_hash
    int role_id FK
    string account_status
  }
  PROJECTS {
    int project_id PK
    string project_name
    string project_code
    date start_date
    date end_date
    int project_manager_id FK
    string priority
    string status
    int progress
  }
  PROJECT_MEMBERS {
    int project_member_id PK
    int project_id FK
    int user_id FK
    string project_role
  }
  MILESTONES {
    int milestone_id PK
    int project_id FK
    string title
    date due_date
    string status
  }
  TASKS {
    int task_id PK
    int project_id FK
    int milestone_id FK
    string title
    date start_date
    date due_date
    string priority
    string status
    int progress
    int created_by FK
    date completion_date
  }
  TASK_ASSIGNEES {
    int task_assignee_id PK
    int task_id FK
    int user_id FK
  }
  TASK_DEPENDENCIES {
    int dependency_id PK
    int task_id FK
    int depends_on_task_id FK
  }
```

### Notes on Phase 1

- **ROLE_PERMISSIONS** is a pure junction table for the many-to-many between roles and permissions.
- **PROJECT_MEMBERS** and **TASK_ASSIGNEES** are junction tables that let a project or task have multiple people attached, each with their own role.
- **TASK_DEPENDENCIES** is self-referencing on TASKS — a task can block other tasks and be blocked by others (`task_id` = dependent task, `depends_on_task_id` = prerequisite task).

---

## Phase 2: Supporting Entities

```mermaid
erDiagram
  TASKS ||--o{ SUBTASKS : has
  TASKS ||--o{ CHECKLIST_ITEMS : has
  USERS ||--o{ SUBTASKS : assigned_to
  TASKS ||--o{ COMMENTS : has
  USERS ||--o{ COMMENTS : writes
  TASKS ||--o{ ATTACHMENTS : has
  USERS ||--o{ ATTACHMENTS : uploads
  TASKS ||--o{ WORK_LOGS : logs
  USERS ||--o{ WORK_LOGS : records
  USERS ||--o{ NOTIFICATIONS : receives
  USERS ||--o{ ACTIVITY_LOGS : performs

  SUBTASKS {
    int subtask_id PK
    int task_id FK
    string title
    int assignee_id FK
    date due_date
    string status
  }
  CHECKLIST_ITEMS {
    int checklist_item_id PK
    int task_id FK
    string title
    bool is_completed
  }
  COMMENTS {
    int comment_id PK
    int task_id FK
    int user_id FK
    int parent_comment_id FK
    string message
    datetime created_at
  }
  ATTACHMENTS {
    int attachment_id PK
    int task_id FK
    int project_id FK
    string file_url
    int uploaded_by FK
    datetime uploaded_at
  }
  WORK_LOGS {
    int work_log_id PK
    int task_id FK
    int user_id FK
    date work_date
    float hours_worked
  }
  NOTIFICATIONS {
    int notification_id PK
    int user_id FK
    string type
    string message
    bool is_read
    datetime created_at
  }
  ACTIVITY_LOGS {
    int activity_log_id PK
    int user_id FK
    string action_type
    string entity_type
    int entity_id
    datetime created_at
  }
```

### Notes on Phase 2

- **ATTACHMENTS** can belong to either a task or a project — both FKs should be nullable, with app-level logic enforcing that exactly one is set.
- **COMMENTS.parent_comment_id** is self-referencing, used for reply threads.
- **WORK_LOGS** rows are summed to calculate "actual time" against `TASKS.estimated_time`.
- **NOTIFICATIONS** and **ACTIVITY_LOGS** use `entity_type` + `entity_id` as a loose reference instead of a dedicated FK column per possible linked table (keeps the schema from needing a column explosion).

---

## Branch / Delivery Plan

| Order | Branch | Contents |
|---|---|---|
| 1 | `database/erd-design` | This document (Phase 1 + Phase 2 ERD) |
| 2 | `database/schema-users-roles` | USERS, ROLES, PERMISSIONS, ROLE_PERMISSIONS |
| 3 | `database/schema-projects-tasks` | PROJECTS, PROJECT_MEMBERS, MILESTONES, TASKS, TASK_ASSIGNEES, TASK_DEPENDENCIES |
| 4 | `database/schema-collab-tracking` | SUBTASKS, CHECKLIST_ITEMS, COMMENTS, ATTACHMENTS, WORK_LOGS, NOTIFICATIONS, ACTIVITY_LOGS |

Branches 2 and 3 gate Backend/API work and should be prioritized. Branch 4 can trail slightly behind but shouldn't lag too long since Frontend needs it for comments/attachments/notifications UI.
