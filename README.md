# gw_cloud_react_host
GWCloud React Host (Harness for mounting children applications)



Expected changes in child modules:

<Route> must pass through an `environment` prop for the `query` prop if one is supplied.

Environments can be fetched via the harness API's `getEnvironment(name)` function. `name` must be a string representing the module key/url path in the `Modules.js` file.

Child modules must export a function called `getRoutes()` which returns a <Route> component with the modules <Route>'s as the children.  ie

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

