# A Personal Website Built with React and Django, Containerized with Docker

A reusable personal website template built with **React** and **Django**, fully containerized with **Docker**.

The project is designed to display **projects, writings, illustrations, and other personal content**. Its structure is intentionally modular and easy to customize for your own website.

The repository includes:

* A React frontend with Vite
* A Django backend
* A PostgreSQL database
* Docker-based development environment
* VS Code Dev Container configuration
* Development and mock data
* A structure prepared for web production using Caddy and Gunicorn
* Internationalization (i18n) support

---

## Table of Contents

1. [Technologies](#technologies)
2. [Prerequisites](#prerequisites)
3. [Installation and Setup](#installation-and-setup)
4. [Project Structure](#project-structure)
5. [Docker & Dev Container](#docker--dev-container)
6. [Internationalization](#internationalization)
7. [Usage](#usage)
8. [Production](#production)
9. [License](#license)

---

## Technologies

### Backend

* **Django** — Python web framework used for the backend and API.
* **Gunicorn** — WSGI application server used to run Django in production.

### Frontend

* **React** — JavaScript library used to build the user interface.
* **Vite** — Development server and build tool for the React application.

### Database

* **PostgreSQL** — Relational database used by Django.

### Infrastructure

* **Docker** — Containerization.
* **Docker Compose** — Management of the different development services.
* **Caddy** — Web server and reverse proxy for production.
* **VS Code Dev Containers** — Reproducible development environment.

---

## Prerequisites

You will need:

* [Docker](https://www.docker.com/get-started)
* [Docker Compose](https://docs.docker.com/compose/)
* [VS Code](https://code.visualstudio.com/)
* The **Dev Containers** extension for VS Code

The project was originally developed using **WSL2** on Windows. A working Docker installation is therefore required to run the complete development environment.

---

## Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/Fabien-ross/python-react-dev-project.git
cd python-react-dev-project
```

### 2. Open the project in VS Code

Open the cloned repository in VS Code.

If the Dev Container extension is installed, VS Code should detect the project configuration and suggest reopening the project inside the development container.

You can also do this manually:

**Ctrl + Shift + P** → **Dev Containers: Reopen in Container**

This will start the development environment defined in `.devcontainer/devcontainer.json`.

The project currently defines three main services:

* `server` — Django backend
* `frontend` — React/Vite frontend
* `db` — PostgreSQL database

### 3. Apply Django migrations

If you are using the provided Django models and database structure, apply the migrations:

```bash
cd backend
python manage.py migrate
```

The database structure is provided as an example based on the author's website.

Feel free to modify the Django models and database structure according to your own use case.

### 4. Access the application

Once the containers are running:

* **Frontend:** http://localhost:5173
* **Backend:** http://localhost:8000

The necessary CORS configuration and communication between the frontend and backend containers are already configured for development.

---

## Docker & Dev Container

### Docker Compose

The `docker-compose.yml` file defines the main development services:

```text
server    → Django backend
frontend  → React/Vite development server
db        → PostgreSQL
```

This allows the entire development environment to be run consistently without installing Python, Node.js, or PostgreSQL directly on the host system.

### Dev Container

The `.devcontainer/devcontainer.json` file configures the VS Code development environment.

Opening the project inside the Dev Container provides a consistent environment for development and avoids differences between host configurations.

---

## Internationalization

The project includes an **i18n (internationalization)** system to support multiple languages.

The current implementation can be found in:

```text
frontend/src/i18n/
```

Translation files are stored as JSON files.

For example:

```text
frontend/
└── src/
    └── i18n/
        ├── en.json
        └── fr.json
```

You can modify or add translation files to adapt the website to your own languages and content.

The existing translation files are based on the author's website and should therefore be considered examples/templates.

---

## Usage

During development, the React Docker container launches the **Vite development server** on port `5173`.

The Django backend runs on port `8000`.

In the standard development setup, the required containers are started through Docker Compose:

```bash
docker compose up
```

The frontend can then be accessed at:

```text
http://localhost:5173
```

and the Django backend at:

```text
http://localhost:8000
```

---

## Production

The repository also contains the structure required for a production deployment.

The intended production architecture is:

```text
                    ┌─────────────┐
                    │   Internet  │
                    └──────┬──────┘
                           │
                           ▼
                    ┌─────────────┐
                    │    Caddy    │
                    │ Web Server  │
                    │ Reverse     │
                    │ Proxy       │
                    └──────┬──────┘
                           │
                  ┌────────┴────────┐
                  │                 │
                  ▼                 ▼
            React static       Gunicorn
              files               │
                                  ▼
                               Django
                                  │
                                  ▼
                             PostgreSQL
```

In production:

* **Caddy** handles incoming HTTP/HTTPS traffic and serves the frontend.
* **Gunicorn** runs the Django application.
* **Django** handles backend logic and API requests.
* **PostgreSQL** stores persistent application data.

The production configuration is provided as a structure/template and may require additional configuration depending on the hosting environment.

---

## License

The code in this repository is released under the **MIT License**.

You are free to use, modify, and redistribute the code according to the terms of the license.

See the [MIT License](https://opensource.org/licenses/MIT) for more information.
