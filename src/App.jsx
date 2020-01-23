import React from "react";
import {Container, Grid, Header, Menu} from "semantic-ui-react";
import {UpdatableResolver} from "./UpdatableResolver";
import {Route} from 'found'
import Layout from "./Layout";
import RemoteModule from "./RemoteModule";
import Home from "./Home";


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
                    >
                    </Route>
                </Route>
            }/>
        )
    }
}

export default GWCloudApp;