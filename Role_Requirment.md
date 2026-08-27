# Task & Project Management System — Team Responsibilities

### Frontend

**Main job: Build what the user sees and interacts with.**

- User Management
- Role & Permission UI
- Project Management UI
- Task Management UI
- Team Collaboration UI
- Milestone UI
- Deadline Display
- Kanban Board
- Calendar
- Gantt Chart
- Time Tracking UI
- Workload Dashboard
- Notifications UI
- Reports UI
- KPI Dashboard

---

### Backend

**Main job: Build the system logic and rules.**

- User Authentication & Authorization
- User & Role Management
- Project Business Logic
- Task Business Logic
- Team & Permission Logic
- Milestone Management Logic
- Deadline & Overdue Detection
- Task Status & Dependencies
- Time Tracking Logic
- Workload Calculation
- Notification Logic
- Report Generation
- KPI Calculation
- Data Validation

---

### API

**Main job: Connect Frontend with Backend.**

- Design REST API
- User APIs
- Authentication APIs
- Project APIs
- Task APIs
- Team APIs
- Milestone APIs
- Calendar APIs
- Kanban APIs
- Gantt APIs
- Time Tracking APIs
- Notification APIs
- Report APIs
- KPI APIs

---

### Database

**Main job: Store and organize all system data.**

- Design Database / ERD
- Users
- Roles & Permissions
- Projects
- Project Members
- Tasks
- Task Assignees
- Task Dependencies
- Subtasks & Checklists
- Milestones
- Comments
- Attachments
- Work Logs
- Notifications
- Activity Logs

### Main Application Workflow

+ The application should support the complete workflow from:
- User Registration → Login → Authentication → Project Creation → Team Member Assignment → Milestone Creation → Task Creation → Task Assignment → Task Progress Update → Task Completion → Project Progress Tracking → Project Completion → Report Generation

1. User Registration
- User creates an account with basic information.
- System validates the information and creates the user account.
- User is assigned an appropriate role.

2. Login & Authentication
- User logs in using their credentials.
- System verifies the credentials.
- After successful login, the user can access the system based on their role and permissions.

3. Project Creation
- Project Manager creates a new project.
- Project information includes project name, description, start date, deadline, and status.
- The project is saved in the system.

4. Team Member Assignment
- Project Manager or Team Leader selects members for the project.
- Members are added to the project team.
- Each member can be assigned an appropriate responsibility.

5. Milestone Creation
- Project Manager or Team Leader creates milestones for the project.
- Each milestone represents an important stage or target of the project.
- Milestones have deadlines and progress status.

6. Task Creation
- Tasks are created under the project or milestone.
- Each task contains information such as title, description, priority, and deadline.
- Tasks are stored and displayed in the project.

7. Task Assignment
- Project Manager or Team Leader assigns tasks to team members.
- Assigned tasks appear in the member's task list.
- The assigned member can view and work on the task.

8. Task Progress Update
- Team members update their task status as they work.
- Task status can change from To Do → In Progress → Completed.
- Project Managers and Team Leaders can monitor the progress.

9. Task Completion
- When a team member finishes a task, the task is marked as completed.
- The system updates the task status and completion information.
- The completed task contributes to the milestone and project progress.

10. Project Progress Tracking
- The system tracks the progress of tasks and milestones.
- Overall project progress is updated based on completed work.
- Project Managers and Team Leaders can monitor whether the project is on schedule.

11. Project Completion
- When all required tasks and milestones are completed, the project can be marked as completed.
- The system records the project's completion status and date.

12. Report Generation
- After or during the project, the system can generate reports.
- Reports can show project progress, completed tasks, deadlines, and overall project status.
- Project Managers can use the reports to review project performance.

### User Management & Authentication

+ The application should manage the following user information:
- User ID
- Full Name
- Gender
- Date of Birth
- Phone Number
- Email
- Profile Photo
- Position
- Department
- Role
- Account Status
- User Functions

+ Users should be able to:
- View Profile
- Edit Profile
- Change Password
- Logout

+ The application must support registration and login using a Username or Email and Password.
- Authentication & Authorization
- Authentication verifies the user's identity when they register or log in to the system.
- Authorization determines what actions a user is allowed to perform based on their role and permissions.

+ Available actions may include:
- View
- Create
- Edit
- Delete
- Assign
- Approve
- Generate Reports
- User Roles

+ The application should support the following roles:
- Administrator
- Project Manager
- Team Leader
- Team Member

* Each role should have different permissions so users can access and perform only the functions authorized for their role.

### Dashboard

+ The dashboard should display:
- Total Projects
- Active Projects
- Completed Projects
- Delayed Projects
- Total Tasks
- Pending Tasks
- In Progress Tasks
- Completed Tasks
- Overdue Tasks

+ It may also display:
- Project Progress
- Task Statistics
- Team Workload
- Recent Activities

### Project Management

+ The application should manage:
- Project ID
- Project Name
- Project Code
- Description
- Start Date
- End Date
- Project Manager
- Priority
- Status
- Progress
- Created Date

+ Project Managers should be able to:
- Create Projects
- View Projects
- Edit Projects
- Manage the Project Lifecycle from Planning to Completion

### Project Status

- Planning
- In Progress
- On Hold
- Completed
- Cancelled

### Project Priority

- Low
- Medium
- High
- Critical

### Project Team

+ Project Managers should be able to:
- Add Team Members
- Remove Team Members
- Assign roles to project members

* A project may contain a Project Manager, Team Leader, and multiple Team Members.
* The application should allow a Project Manager or Team Leader to be assigned as the person responsible for a project.

+ Project Managers should be able to view:
- Project Progress
- Team Workload
- Task Status
- Project Deadlines

### Project Detail Screen

+ The Project Detail screen should display:
- Project Name
- Description
- Start Date
- End Date
- Project Manager
- Team Members
- Project Status
- Priority
- Milestones
- Tasks
- Progress
- Deadline

### Project Timeline

+ The timeline should include:
- Project Start Date
- Project End Date
- Milestone Dates
- Task Start Dates
- Task Due Dates

### Project Progress

- Project Progress should be calculated as a percentage based on completed tasks compared with total tasks.
- When a task status changes, Project Progress should update according to the application's Business Logic.

### Task Management

+ The application should manage:
- Task ID
- Task Title
- Description
- Project
- Assignee
- Start Date
- Due Date
- Priority
- Status
- Progress
- Estimated Time
- Created Date

* Project Managers or Team Leaders should be able to create tasks and assign them to Team Members.
* Each task must belong to a project and may have one or more assignees depending on the application's design.

### Task Status

- To Do
- In Progress
- In Review
- Completed
- Cancelled

### Task Workflow

**To Do → In Progress → In Review → Completed**

### Task Priority

- Low
- Medium
- High
- Urgent

* Each task should have a Start Date and Due Date.

+ Due Dates should be used to identify:
- Upcoming Tasks
- Tasks Near Deadline
- Overdue Tasks

### Overdue Task Detection

+ A task whose Due Date has passed and whose status is not Completed should be marked as Overdue automatically or according to the application's Business Logic.

### My Tasks & Team Tasks

+ My Tasks should display all tasks assigned to the currently logged-in user:
- Today's Tasks
- Upcoming Tasks
- In Progress Tasks
- Completed Tasks
- Overdue Tasks

+ Team Tasks should allow Project Managers and Team Leaders to view all Team Member tasks and track:
- What each member is working on
- Task Progress
- Task Status

### Subtasks & Checklists

* A large task can be divided into smaller subtasks.

+ A subtask may contain:
- Title
- Assignee
- Due Date
- Status
- Completion Status

+ Users should be able to create small checklist items inside a task and mark them as:
- Completed
- Pending

* Checklist Progress may be used as part of the overall Task Progress.

### Milestone Management

+ Milestones represent important project phases, such as:
- Requirements Complete
- Design Complete
- Development Complete
- Testing Complete
- Project Launch

+ A milestone may contain:
- Milestone ID
- Title
- Description
- Due Date
- Status
- Progress

### Milestone Status

- Pending
- In Progress
- Completed

* Milestone Progress should be displayed so Project Managers can track each project phase.

### Kanban Board

**To Do | In Progress | In Review | Done**

* Users may move tasks between columns as a prototype to demonstrate Task Status changes.

### Task List View

+ The Task List should support:
- Search
- Filter
- Sort

### Calendar View

+ The Calendar should display Tasks, Due Dates, and Milestones using:
- Daily View
- Weekly View
- Monthly View

### Gantt Chart Prototype

+ The application may include a Gantt Chart Prototype showing:
- Project Timeline
- Task Duration
- Start Date
- End Date
- Task Dependencies

* The Gantt Chart can help Project Managers identify schedules and overlapping tasks.

### Task Dependencies

* The application should support Task Dependencies.
* A dependent task should not start until its required previous task has been completed.

**Database Design → Backend Development**

* Database Design must be completed before Backend Development can start.
* Business Rule Validation should prevent dependent tasks from being Started or Completed out of order unless the required conditions are satisfied.

### Project Search

+ Projects should be searchable by:
- Project Name
- Project Manager
- Status
- Date

### Task Search

+ Tasks should be searchable by:
- Task Name
- Assignee
- Project
- Priority
- Status
- Due Date

### Project Filters

- Active
- Completed
- On Hold
- Priority
- Project Manager

### Task Filters

- Status
- Priority
- Assignee
- Project
- Due Date

### Task Sorting

+ Tasks should be sortable by:
- Latest
- Due Date
- Priority
- Progress
- Status

### Comments & Discussion

+ Comment Management should allow Team Members to:
- Discuss Tasks
- Update Progress
- Ask Questions
- Provide Additional Information

+ A comment may contain:
- User
- Message
- Date/Time
- Reply

* The application may support Task Discussion so users can Comment, Reply, and continue discussions within a task instead of relying on external communication channels.

### File & Document Management

+ The application should support File Attachments for:
- Documents
- Images
- Requirement Files
- Design Files
- Supporting Documents

* Files may be attached to Projects or Tasks.

+ The application may also include Document Management for:
- Requirement Documents
- Design Documents
- Meeting Documents
- Testing Documents
- Project Reports

* Documents may be linked to related Projects or Tasks.

### Activity Log

+ The Activity Log should record important actions such as:
- Project Created
- Project Updated
- Task Created
- Task Assigned
- Task Status Changed
- Comment Added
- File Uploaded
- Task Completed

### Audit Log

+ The application may record:
- Which User performed an action
- What action was performed
- When it happened
- Which Project or Task was affected

* This demonstrates Tracking, Accountability, and the Audit Trail concept.

### Notifications

+ The application should support notifications for:
- Task Assignment
- Task Status Change
- Comments
- Project Updates
- Upcoming Deadlines
- Overdue Tasks
- Milestone Updates

+ A task assignment notification should include:
- Task Name
- Project
- Due Date
- Assigned By

### Deadline Reminder

* Users should receive reminders before a Task, Milestone, or Project reaches its deadline.

+ Example reminder periods:
- 1 Day Before
- 3 Days Before
- Other Prototype Options

### Overdue Notification

* An Overdue Notification should appear when a task passes its Due Date but has not been Completed.

### Time Tracking & Work Logs

* The application may support Time Tracking so Team Members can record time spent on tasks.

+ Users may:
- Start Timer
- Stop Timer
- Enter Work Log Manually

+ A Work Log should contain:
- Work Date
- User
- Task
- Hours Worked
- Work Description

* Work Logs can be used to calculate the Actual Time spent on a task.

+ Estimated vs. Actual Time:
- **Estimated Time:** Expected hours or days required for the task
- **Actual Time:** Actual time spent on the task

### Team Workload

+ The application should display Team Workload based on:
- Assigned Tasks
- Active Tasks
- Overdue Tasks
- Estimated Hours
- Actual Hours

* Workload Analysis should help identify which Team Members have more or fewer tasks.

+ This information can help Project Managers with:
- Resource Allocation
- Task Assignment

### Project Progress Dashboard

+ The dashboard should show:
- Completed Tasks
- Pending Tasks
- In Progress Tasks
- Overdue Tasks
- Project Completion Percentage
- Team Performance

### Task Statistics

- Total Tasks
- To Do Tasks
- In Progress Tasks
- Completed Tasks
- Overdue Tasks

### Project Statistics

- Total Projects
- Active Projects
- Completed Projects
- Delayed Projects
- Average Project Completion Rate

### KPIs

+ The application may calculate:
- Project Completion Rate
- Task Completion Rate
- Overdue Rate
- Average Task Completion Time
- On-Time Completion Rate

### Team Performance

+ Team Performance may be based on:
- Assigned Tasks
- Completed Tasks
- In Progress Tasks
- Overdue Tasks
- Completion Rate
- Average Completion Time

### Reports

+ The application should generate:
- Project Report
- Task Report
- Project Status Report
- Task Completion Report
- Overdue Task Report
- Team Performance Report
- Workload Report

### Project Status Report

+ Projects should be shown by:
- Planning
- In Progress
- On Hold
- Completed
- Cancelled
- Delayed

### Task Completion Report

+ The report should show Completed Tasks and Completion Percentage by:
- Project
- Team Member
- Date Range

### Overdue Task Report

+ The report should show:
- Task Name
- Project
- Assignee
- Due Date
- Days Overdue
- Current Status

### Team Performance Report

+ The report should show:
- Assigned Tasks
- Completed Tasks
- Pending Tasks
- Overdue Tasks
- Completion Rate

* The application may support exporting reports as **PDF or Excel** as a prototype to demonstrate Reporting and Data Export concepts.

### Security & Access

+ The application should consider:
- Authentication
- Authorization
- Session Management
- Secure Access

* Users should only be able to view Projects and Tasks for which they have permission.
* Administrators should be able to manage Users, Roles, Permissions, Projects, and Reports according to their assigned permissions.

### Session Management

+ The application should support:
- Login Session
- Logout
- Auto Logout Prototype

### Form Validation

+ Required fields should be validated before saving data, including:
- Project Name
- Start Date
- End Date
- Task Title
- Project
- Assignee
- Due Date
- Status
- Priority

### Date Validation

+ The application should ensure:
- Project End Date is not earlier than Project Start Date
- Task Due Dates follow valid date rules

### Business Rule Validation

+ The application should ensure:
- A Task Due Date should not exceed the Project End Date.
- Every Task must belong to a Project.
- A Completed Task must have a Completion Date.
- Task Dependencies must be completed in the required order.

### State Management

* State Management should keep Data State and UI State consistent.

+ For example, when a Task is Completed, the application should update:
- Task Status
- Project Progress
- Dashboard Statistics
- Team Performance
- Activity Log

### Data Model

+ The application should define models for:
- User Model
- Role Model
- Permission Model
- Project Model
- Project Member Model
- Task Model
- Subtask Model
- Checklist Model
- Milestone Model
- Comment Model
- Attachment Model
- Notification Model
- Work Log Model

### CRUD Operations

+ CRUD means:
- Create
- Read
- Update
- Delete

+ CRUD operations should be implemented for:
- User
- Project
- Task
- Milestone
- Comment
- Attachment

* Operations must follow the user's permissions.

### Project Business Logic

+ Project Business Logic should manage:
- Project Status
- Project Priority
- Team Assignment
- Timeline
- Project Progress
- Deadline
- Project Completion

### Task Business Logic

+ Task Business Logic should manage:
- Task Assignment
- Task Status
- Task Priority
- Task Dependency
- Due Date
- Overdue Detection
- Progress
- Completion

### Navigation & Responsive UI

* The application should provide clear navigation.

**Login → Dashboard → Projects → Project Detail → Tasks → Task Detail → Update Progress**

* Users should be able to return to the previous screen and move between modules clearly.

+ The UI should be responsive and work well on:
- Mobile
- Tablet
- Desktop

* The selected platform depends on the students' development choice.

### UI States

+ The UI should display:
- Loading Indicators while data is loading or being processed
- Empty States when there are no Projects, Tasks, Notifications, or Reports
- Success Messages
- Error Messages
- Warning Messages
- Confirmation Dialogs
- Retry Actions

### Error Handling

+ The application should handle:
- Login Failed
- Invalid User
- Project Not Found
- Task Not Found
- Invalid Date
- Invalid Permission
- File Upload Failed
- Data Save Failed
- Network Error

### Functional Testing

+ Important functions should be tested, including:
- Login
- User Management
- Project Creation
- Task Creation
- Task Assignment
- Task Status Update
- Project Progress
- Report Generation

### Project CRUD Testing

+ Test:
- Create Project
- View Project
- Edit Project
- Delete Project

### Task CRUD Testing

+ Test:
- Create Task
- View Task
- Edit Task
- Delete Task
- Task Assignment

### Task Workflow Testing

**To Do → In Progress → In Review → Completed**

* Verify that status updates work correctly.

### Deadline Testing

+ Test:
- Upcoming Task Detection
- Overdue Detection
- Deadline Reminder
- Date Validation

### Permission Testing

+ Verify that the following roles can use only the functions they are authorized to access:
- Administrator
- Project Manager
- Team Leader
- Team Member

### Project Progress Testing

+ Verify that Project Progress updates correctly when a Task is:
- Created
- Completed
- Reopened
- Deleted

### Notification Testing

+ Test:
- Task Assignment Notification
- Deadline Reminder
- Overdue Notification
- Project Update Notification
- Task Status Notification

### UI & Navigation Testing

+ Test:
- Screens
- Forms
- Buttons
- Menus
- Search
- Filters
- Navigation Between Modules

### End-to-End Testing

* Test the complete workflow:

**Login → Create Project → Add Team Members → Create Milestones → Create Tasks → Assign Tasks → Update Task Status → Complete Tasks → Update Project Progress → Complete Project → Generate Report**

### Debugging

+ Debugging should be performed to find and fix issues involving:
- Project Data
- Task Data
- Permissions
- Validation
- Navigation
- State Management
- Business Logic

### Project Documentation

+ The project documentation should include:
- Problem Statement
- Objectives
- Scope
- Requirements
- User Roles
- Functional Requirements
- Non-Functional Requirements
- User Flow
- Project Workflow
- Task Workflow
- UI/UX Design
- Data Model
- Application Architecture
- Test Cases

### Final Presentation

+ The Final Presentation should explain:
- Problem Statement
- Objectives
- System Features
- User Roles
- Project Workflow
- Task Workflow
- UI/UX
- Data Model
- Application Architecture
- Business Logic
- Testing

### Live Demo

* The Live Demo should demonstrate the complete workflow:

**Login → Create Project → Add Team Members → Create Milestone → Create Task → Assign Task → Update Task Progress → Complete Task → Track Project Progress → Complete Project → Generate Report**

### Core Workflow

**Login → Dashboard → Create Project → Add Team Members → Create Milestones → Create Tasks → Assign Tasks → Update Task Status → Track Progress → Complete Tasks → Complete Project → Generate Reports**

### Required Functions

1. Login & Authentication
2. User Profile
3. User & Role Management
4. Role & Permission
5. Dashboard
6. Project Management
7. Create/Edit Project
8. Project Team Management
9. Project Status & Priority
10. Project Progress
11. Task Management
12. Create/Edit Task
13. Task Assignment
14. Task Priority
15. Task Status
16. Task Due Date
17. Subtask & Checklist
18. Milestone Management
19. Kanban Board
20. Calendar View
21. My Tasks
22. Team Tasks
23. Search, Filter & Sorting
24. Comment & Discussion
25. File Attachment
26. Notification
27. Deadline Reminder
28. Overdue Task Detection
29. Time Tracking / Work Log
30. Team Workload
31. KPI & Dashboard
32. Reports
33. Activity Log
34. State Management
35. Validation & Error Handling
36. Functional Testing
37. End-to-End Testing
38. Project Documentation
39. Final Presentation
40. Live Demo