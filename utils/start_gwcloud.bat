# Recreate the graphql schema
cd gwcloud_auth
venv\Scripts\python development-manage.py graphql_schema

cd ..\gwcloud_react_host
set /p nodeversion=<.nvmrc
nvm install %nodeversion%
nvm use %nodeversion%
timeout /t 2 /nobreak > nul
cmd /C npm run relay
start /B npm run start

cd ..\gwcloud_auth\react
set /p nodeversion=<.nvmrc
nvm install %nodeversion%
nvm use %nodeversion%
timeout /t 2 /nobreak > nul
cmd /C npm run relay
start /B npm run start

cd ..
venv\Scripts\python development-manage.py runserver