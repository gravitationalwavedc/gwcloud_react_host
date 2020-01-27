import React from "react";
import {UpdatableResolver} from "./UpdatableResolver";
import {Route} from 'found'
import Layout from "./Layout";
import RemoteModule from "./RemoteModule";
import Home from "./Home";
import NotFound from "./NotFound";

class GWCloudApp extends React.Component {
    render() {
        return (
            <UpdatableResolver routes={
                <Route
                    path="/"
                    Component={Layout}
                >
                    <Route Component={Home}/>

                    <Route path="auth*"
                           Component={props => (
                               <RemoteModule
                                   _module_url="http://localhost:3001/main.js"
                                   _path="auth"
                                   {...props}
                               />
                           )}
                    />
                    <Route path="*"
                        Component={NotFound}
                    />
                </Route>
            }/>
        )
    }
}

export default GWCloudApp;