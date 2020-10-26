#!/bin/bash

export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

# Recreate the graphql schema
cd gwcloud-auth/src
venv/bin/python development-manage.py graphql_schema


cd ../../gwcloud-react-host/src
nvm use
npm run relay
npm run start_gwlab &

cd ../../gwcloud-auth/src/react
nvm use
npm run relay
npm run start &

cd ..
venv/bin/python development-manage.py runserver
