# syntax=docker/dockerfile:1

ARG PYTHON_VERSION=3.12

# ============================================================
# BASE
# ============================================================

FROM python:${PYTHON_VERSION}-slim AS base

# Clean installation (no .pyc)
ENV PYTHONDONTWRITEBYTECODE=1
# Allow direct logs from python (print, etc.)
ENV PYTHONUNBUFFERED=1          

WORKDIR /app

# Define pip cache / mount requirement in the source / install requirements with pip
RUN --mount=type=cache,target=/root/.cache/pip \
    --mount=type=bind,source=requirements.txt,target=requirements.txt \
    python -m pip install --upgrade pip -r requirements.txt

# Copy application (backend/ -> app/)
COPY . .


# ============================================================
# DEVELOPMENT
# ============================================================

FROM base AS development

EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
#CMD ["sleep", "infinity"]


# ============================================================
# PRODUCTION
# ============================================================

FROM base AS production

# Collect Django static files
RUN python manage.py collectstatic --noinput

EXPOSE 8000

# Run Django with Gunicorn
CMD ["gunicorn", "config.wsgi:application", "--bind", "0.0.0.0:8000"]