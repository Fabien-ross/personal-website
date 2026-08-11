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

# The workdir name appears in the compose.yml
WORKDIR /app

# Define pip cache / mount requirement in the source / install requirements with pip
RUN --mount=type=cache,target=/root/.cache/pip \
    --mount=type=bind,source=requirements.txt,target=requirements.txt \
    python -m pip install --upgrade pip -r requirements.txt

# Copy application (backend/ -> app/)
# COPY . /app/ -> same thing since WORKDIR is there!
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

FROM python:${PYTHON_VERSION}-slim AS production

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

RUN useradd --create-home --system appuser

RUN apt-get update \
    && apt-get install -y --no-install-recommends gosu \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY --from=base /usr/local/lib/python3.12/site-packages \
    /usr/local/lib/python3.12/site-packages

COPY --from=base /usr/local/bin \
    /usr/local/bin

COPY --chown=appuser:appuser . .

COPY entrypoint.sh /entrypoint.sh
# Gives to the file the right to be executed
RUN chmod +x /entrypoint.sh

EXPOSE 8000

# ENTRYPOINT is mandatory here to generate and transmit static files during the runtime
# because the build doesn't have access to the .env variables which raises an error.
ENTRYPOINT ["/entrypoint.sh"] 
CMD ["gunicorn", "config.wsgi:application", "--bind", "0.0.0.0:8000", "--access-logfile", "-", "--error-logfile", "-", "--log-level", "debug"]