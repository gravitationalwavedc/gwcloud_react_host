import React from "react";
import {Container, Grid, Header, Menu} from "semantic-ui-react";
import HarnessRouter from "./UpdatableResolver";
import {Route} from 'found'
import Layout from "./Layout";
import RemoteComponent from "./RemoteComponent";
import Home from "./Home";


class GWCloudApp extends React.Component {
    render() {
        return (
            <HarnessRouter routes={
                <Route
                    path="/"
                    Component={Layout}
                >
                    <Route Component={Home}/>
                    <Route path="auth"
                           Component={() => (
                                   <RemoteComponent _module_url="http://localhost:3001/main.js"
                                                    _component_name="SimpleComponent"/>
                           )}
                    >
                    </Route>
                </Route>
            }/>
        )
    }
}

export default GWCloudApp;