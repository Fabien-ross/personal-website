#!/bin/sh
set -e

chown -R appuser:appuser /app/staticfiles

gosu appuser python manage.py collectstatic --noinput

exec gosu appuser "$@"