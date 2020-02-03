import React from "react";
import {redirect, UpdatableResolver} from "./UpdatableResolver";
import {Route} from 'found'
import Layout from "./Layout";
import RemoteModule from "./RemoteModule";
import Home from "./Home";
import NotFound from "./NotFound";
import Modules from './Modules'
import * as Enumerable from "linq";
import {IS_DEV} from "./Utils";
import {graphql} from "react-relay";
import HarnessApi from "./HarnessApi";
import {getEnvironment} from "./Environment";

class GWCloudApp extends React.Component {
    render() {
        let modules = Enumerable.from(Modules).select((e, i) => (
            <Route key={i}
                   path={e.key + "*"}
                   Component={props => (
                       <RemoteModule
                           _module_url={IS_DEV ? e.value.dev_bundle_url : e.value.bundle_url}
                           _path={e.key}
                           {...props}
                       />
                   )}
            />
        )).toArray();

        modules = [
            (<Route Component={Home} key="home"/>),
            ...modules,
            (<Route path="*" key="notfound" Component={NotFound}/>)
        ];

        return (
            <UpdatableResolver routes={
                <Route
                    path="/"
                    Component={Layout}
                    environment={getEnvironment('auth')}
                    query={graphql`
                       query App_UserDetails_Query {
                         gwclouduser {
                           username
                           firstName
                           lastName
                         }
                       }
                    `}
                    render={({Component, props, retry, error}) => {
                        if (!Component || !props)
                            return <div>Loading...</div>;

                        HarnessApi.retryHarnessUserDetails = retry;

                        return <Component {...props}/>
                    }}
                >
                    {
                        modules
                    }

                </Route>
            }/>
        )
    }
}

export default GWCloudApp;