# Task Manager: first evaluation and phased DevOps plan

## Today’s target

Prepare a GitHub repository with a clear README, a minimal working Task Manager, and meaningful commits you can demonstrate individually.

Today’s app will **add, list, complete, and delete tasks**, with SQLite persistence and a simple responsive page. Login and the remaining application features will follow before containerization.

Use **Node.js, Express, plain HTML/CSS/JavaScript, and SQLite**. This keeps the application small so the project can focus on DevOps.

## Build and commit step by step

Complete and check each step before making its commit. You will make the commits yourself.

| Step | What we prepare | Your commit message |
|---|---|---|
| 1 | Project README and `.gitignore` | `docs: add project overview and DevOps roadmap` |
| 2 | Node.js setup, Express server, start scripts, and health endpoint | `chore: initialize Express application` |
| 3 | SQLite database initialization and task REST endpoints | `feat: add persistent task CRUD API` |
| 4 | Responsive page with task creation, listing, editing, completion, and deletion | `feat: add task manager interface` |
| 5 | Input validation, useful errors, and API tests | `test: verify task CRUD and validation` |
| 6 | Setup instructions, screenshots, and evaluation checklist | `docs: add setup guide and first evaluation evidence` |

**Step 1 — README**

Use the title **Task Manager — End-to-End DevOps Capstone**. Include:

- Problem statement: users need a simple way to track tasks; developers need repeatable, automated delivery.
- Application objectives and the complete eleven-phase DevOps roadmap.
- Current progress, clearly separating implemented features from planned features.
- Intended architecture, tool choices, and local execution instructions as they become available.

Ignore dependencies, environment secrets, local databases, logs, and generated reports. Commit an example environment file with placeholder values.

**Step 2 — Starter application**

Create an Express server with `npm start` and a development script. `GET /health` returns HTTP 200 with a small JSON status response. Commit the dependency lockfile.

**Step 3 — Database and API**

A task contains an ID, title, completion flag, and creation timestamp. Initialize SQLite automatically on startup.

| Endpoint | Behavior |
|---|---|
| `GET /api/tasks` | List tasks, newest first |
| `POST /api/tasks` | Create a task |
| `PATCH /api/tasks/:id` | Edit its title or completion state |
| `DELETE /api/tasks/:id` | Delete a task |

Reject blank titles, use parameterized queries, and return appropriate success, validation, and missing-task responses.

**Step 4 — Interface**

Provide a title input, Add button, task list, completion checkbox, edit action, and Delete button. Include an empty-list message and visible error feedback. Serve the page from Express so there is one application to run.

**Step 5 — Verification**

Test creation, listing, editing, completion, deletion, blank-title rejection, and missing IDs using an isolated test database. Manually verify that tasks survive an application restart and that the page works at mobile width.

**Step 6 — Git evidence**

Develop steps 3–5 on `feature/task-crud`, then merge into `main` with a merge commit. Create a controlled README conflict on temporary branches, resolve it, and preserve the actual history and a screenshot as evidence. Push the completed repository to GitHub.

## What to demonstrate today

1. Open the README and explain the project objective and phases.
2. Show the GitHub repository, meaningful commits, feature branch, merge, and resolved conflict.
3. Start the application; create, edit, complete, and delete tasks.
4. Restart it and show that a remaining task persists.
5. Explain that today establishes Phase 1 and the initial application; later phases automate its delivery.

Save screenshots of the interface, commit history, and conflict resolution. Today’s Phase 1 deliverable is the **GitHub repository URL**.

## Remaining phases

| Phase | Planned work and evidence |
|---|---|
| Application completion | Add registration/login, password hashing, user-owned tasks, priority, and full error handling. |
| 2 — Jenkins | Automatically test and package after every push; document the trigger and successful build. |
| 3 — Docker | Add Dockerfile and Compose; move to PostgreSQL for later multi-replica deployment. |
| 4 — Kubernetes | Deployment, Service, ConfigMap, Secret, persistent database storage; demonstrate scaling, rolling update, and rollback. |
| 5 — Ansible | Automate Docker/Kubernetes installation, configuration, and deployment on a local Linux VM. |
| 6 — Terraform | Provision that local VM using variables, outputs, and a reusable module. |
| 7 — Monitoring | Prometheus and Grafana for CPU, memory, container health, and application metrics. |
| 8 — Logging | Fluentd with Elasticsearch/Kibana for application, container, and Kubernetes logs. |
| 9 — Security | SonarQube, protected credentials, secure images, secret management, and RBAC. |
| 10 — Deployment strategy | Blue-green deployment with demonstrated traffic switching. |
| 11 — GitOps | Argo CD reconciles Kubernetes configuration from Git; Jenkins builds images and updates deployment configuration. |
| Final submission | Architecture diagram, report of at most 20 pages, 10-minute presentation, and optional 10–15-minute video. |

## Defaults and boundaries

- Today’s deliverable is intentionally a small application with Git evidence, based on your revised priority.
- SQLite is the starter database. At Phase 3, replace it with PostgreSQL and recreate demonstration data; production data migration is outside this project.
- Later infrastructure runs locally. Check virtualization support and available resources before choosing the VM provider and running the heavier services.
- Use a supported Node.js LTS release compatible with Express 5. [Express documentation](https://expressjs.com/en/guide/migrating-5/)
- The README describes the final project honestly; planned phases are never presented as completed.
