#!/usr/bin/env bash
# call this with `source`
if [ ! -d "venv" ]; then
  virtualenv venv
fi
source venv/bin/activate
pip freeze > requirements.txt