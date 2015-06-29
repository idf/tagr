#!/usr/bin/env bash
app=$(basename "$PWD")
echo "DATABASE_URL=postgres://localhost/$app" > ./.env
echo "web: gunicorn $app.wsgi --log-file -" > ./Procfile
echo "python-2.7.10" > runtime.txt
echo "For whitenoise static file serving, follow the quick start:"
echo "https://warehouse.python.org/project/whitenoise/"


# output sample file content:
echo "Change wsgi.py"
echo "=============BGN=================="
read -r -d '' VAR << EOM
import os
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "$app.settings")

from django.core.wsgi import get_wsgi_application
from whitenoise.django import DjangoWhiteNoise

application = get_wsgi_application()
application = DjangoWhiteNoise(application)
EOM
echo "$VAR"
echo "=============END=================>"


echo "Append settings.py:"
echo "=============BGN================="
read -r -d '' VAR << EOM
STATIC_ROOT = 'staticfiles'
STATICFILES_STORAGE = 'whitenoise.django.GzipManifestStaticFilesStorage'
WSGI_APPLICATION = '$app.wsgi.application'
ALLOWED_HOSTS = ["*"]
EOM
echo "$VAR"
echo "=============END================="