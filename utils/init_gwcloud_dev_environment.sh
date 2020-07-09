#!/bin/bash

echo Clone Repos
git clone https://phab.gw-cloud.org/source/gwcloud_react_host.git
git clone https://phab.gw-cloud.org/source/gwcloud_auth.git

export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

echo Pulling latest code
cd gwcloud_react_host
git pull
cd ../gwcloud_auth
git pull

echo Set up npm for the react host
cd ../gwcloud_react_host/src
nvm install $(cat .nvmrc)
nvm use $(cat .nvmrc)
npm install

echo Set up npm for the auth module
cd ../../gwcloud_auth/src/react
nvm install $(cat .nvmrc)
nvm use $(cat .nvmrc)
npm install

echo Set up python virtual env for auth module
cd ..
virtualenv -p python3.8 venv

venv/bin/pip install -r requirements.txt

venv/bin/python development-manage.py migrate

echo Creating auth superuser \(CTRL+C if you\'ve already created a superuser\)
venv/bin/python development-manage.py createsuperuser

