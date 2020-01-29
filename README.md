# gw_cloud_react_host
GWCloud React Host (Harness for mounting children applications)



Expected changes in child modules:

`<Route>` must pass through an `environment` prop for the `query` prop if one is supplied.

Environments can be fetched via the harness API's `getEnvironment(name)` function. `name` must be a string representing the module key/url path in the `Modules.js` file.

Child modules must export a function called `getRoutes()` which returns a `<Route>` component with the modules `<Route>`'s as the children.  ie

```
function getRoutes() {
    return (
        <Route>
            <Route Component={Login}/>
            <Route path="register" Component={Register}/>
            <Route path="verify" Component={Verify}/>
        </Route>
    )
}
```

Child modules may also export a `setHarnessApi(api)` function which will be called when the module is loaded so that the child may consume harness API's.



## Setting up for development

There are some convenience scripts in the `utils` directory that can help with the initializing and keeping up to date the basic development environment for GW Cloud. The scripts will:-

* Clone this repo and the auth repo
* Install the required versions of nodejs using NVM
* Set up the javascript packages using NPM
* Create a super user

Running the init script again after the project has been set up will pull the latest code and update the harness and auth projects.



It is important that the directory structure be correct between the projects as they share some files (graphql schemas). For that reason manual set up is discouraged.

### For Linux

Make sure that you have the required dependencies installed:-

* Git
* Python 3.8 + virtualenv
* Node Version Manager https://github.com/nvm-sh/nvm

Download the init script from here https://github.com/gravitationalwavedc/gwcloud_react_host/blob/master/utils/init_gwcloud_dev_environment.sh

Move the init script to the directory where you want the repository folders to be stored, eg `~/Documents/Projects/`

Run the script in this directory and check for any errors.

```
# cd ~/Documents/Projects
# bash init_gwcloud_dev_environment.sh
```



### For Windows

Make sure that you have the required dependencies installed:-

* Git
* Python 3.8 + pip
* Node Version Manager for Windows https://github.com/coreybutler/nvm-windows

NB: Make sure you can open a terminal and run `git`, `python3.8`, `pip3` and `nvm`

Download the init script from here https://github.com/gravitationalwavedc/gwcloud_react_host/blob/master/utils/init_gwcloud_dev_environment.bat

Move the init script to the root directory where you want the repository folders to be stored, eg `Documents\Projects\`

Run the script in this directory by double clicking it or `cd`ing to this directory in `cmd` and running it.



## Starting the Dev server

There are three servers that must be started for minimal development:-

* The harness react server  `npm run start` - port 3000
* The auth react server `npm run start` - port 3001
* The auth django server `python development-manage.py runserver` - port 8000

There are helper scripts in the utils directory of this repo, move the relevant `start_gwcloud` script to the repository root directory (ie where `gwcloud_react_host` and `gwcloud_auth` are), and run the `start_gwcloud` script.