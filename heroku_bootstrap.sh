#!/usr/bin/env bash
app=basename "$PWD"
echo "DATABASE_URL=postgres://localhost/$app" > ./.env
echo "web: gunicorn $app.wsgi --log-file -" > ./Procfile
echo "For whitenoise static file serving:"

# output sample file content:
echo "change wsgi.py"
echo "change settings"