rem Clone Repos
git clone https://github.com/gravitationalwavedc/gwcloud_react_host.git
git clone https://github.com/gravitationalwavedc/gwcloud_auth.git

rem Pulling latest code
cd gwcloud_react_host
git pull
cd ..\gwcloud_auth
git pull

rem Set up npm for the react host
cd ..\gwcloud_react_host
set /p nodeversion=<.nvmrc
nvm install %nodeversion%
nvm use %nodeversion%
timeout /t 2 /nobreak > nul
cmd /C npm install

rem Set up npm for the auth module
cd ..\gwcloud_auth\react
set /p nodeversion=<.nvmrc
nvm install %nodeversion%
nvm use %nodeversion%
timeout /t 2 /nobreak > nul
cmd /C npm install

rem Set up python virtual env for auth module
cd ..
pip3 install virtualenv
virtualenv -p python3.8 venv

venv\Scripts\pip install -r requirements.txt

venv\Scripts\python development-manage.py migrate

rem Creating auth superuser (CTRL+C if you've already created a superuser)
venv\Scripts\python development-manage.py createsuperuser

pause