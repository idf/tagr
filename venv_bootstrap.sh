#!/usr/bin/env bash
# call this with `source`
cur=$(pwd);
if [ ! -d "venv" ]; then
  virtualenv venv
fi
venv=$cur/venv/bin
source $venv/activate
pip freeze > requirements.txt

# functions
django_admin() {
    python $venv/django-admin.py "$@"
}