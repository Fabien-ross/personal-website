# Python (with Django) and React : dev environment in Docker 

A minimal full-stack web application using Django for the backend, React for the frontend, PostgreSQL as the database, and Docker for the development environment. Download, and start coding!

---

## Table of Contents

1. [Technologies](#technologies)
2. [Prerequisites](#prerequisites)
3. [Installation and Setup](#installation-and-setup)
4. [Project Structure](#project-structure)
5. [Docker & Devcontainer](#docker--devcontainer)
6. [Usage](#usage)
8. [License](#license)

---

## Technologies

* Backend: Django (Python)
* Frontend: React (Vite)
* Database: PostgreSQL
* Containerization: Docker & Docker Compose
* VSCode Devcontainer

---

## Prerequisites

* [Docker](https://www.docker.com/get-started)
* [Docker Compose](https://docs.docker.com/compose/)
* [VSCode](https://code.visualstudio.com/) with **Remote - Containers** extension

---

## Installation and Setup

1. **Clone the repository**

```bash
git clone https://github.com/Fabien-ross/python-react-dev-project.git
cd projectname
```

2. **Open the project in VSCode**

   * VSCode will prompt to open in the devcontainer.
   * Or manually: `Ctrl+Shift+P` → *Remote-Containers: Reopen in Container*

3. **Apply Django migrations (optional)**

The code allows for a table 'MyModel' to be built. If you want to create such a table in the empty database, you can run the following lines:

```bash
python cd backend
python manage.py migrate
```

4. **Create a superuser (optional)**

```bash
docker-compose exec backend python manage.py createsuperuser
```

5. **Launch Django development server**

```bash
python cd backend
python manage.py runserver
```

6. **Access the application**

* Backend: `http://localhost:8000`
* Frontend: `http://localhost:5173`

CORS and connexions between backend and frontend inside the Docker environment have been treated. The URL `http://localhost:5173/test` allows to visualize a message sent by the backend.

---

## Project Structure

```
project/
├─ backend/             # Django
|  ├─ apps/             # Minimal app inside
|  ├─ config/
│  ├─ manage.py
│  ├─ Dockerfile        # backend Dockerfile
│  ├─ requirements.txt  # backend packages
│  └─ ...
├─ frontend/            # React
│  ├─ src/
│  ├─ Dockerfile        # frontend Dockerfile
│  ├─ package.json      # backend packages
│  └─ ...
├─ compose.yml          
├─ .devcontainer/    
└─ README.md
```

---

## Docker & Devcontainer

* `docker-compose.yml` defines 3 services: `server`, `frontend`, `db`
* `.devcontainer/devcontainer.json` configures the VSCode development environment:

---

## Usage

The frontend Dockerfile launches directly the devserver of the React project on port 5173. The only launch needed is the backend's.

## License

The code in this repository is released under the MIT license. Read more at the [Open Source Initiative](https://opensource.org/licenses/MIT).
