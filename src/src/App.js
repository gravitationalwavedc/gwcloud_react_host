import React from 'react';
import {UpdatableResolver} from './UpdatableResolver';
import {Route, Redirect} from 'found';
import Layout from './Layout';
import RemoteModule from './RemoteModule';
import NotFound from './NotFound';
import modules from './modules';
import * as Enumerable from 'linq';
import {IS_DEV, currentProject, Projects} from './utils';
import {graphql} from 'react-relay';
import HarnessApi from './HarnessApi';
import {getEnvironment} from './Environment';

class GWCloudApp extends React.Component {
    render() {
        let _modules = Enumerable.from(modules()).select((e, i) => (
            <Route key={i}
                path={e.key + '*'}
                Component={props => (
                    <RemoteModule
                        _module_url={IS_DEV ? e.value.dev_bundle_url : e.value.bundle_url}
                        _path={e.key}
                        {...props}
                    />
                )}
            />
        )).toArray();

        _modules = [
            ..._modules,
            (<Route path="*" key="notfound" Component={NotFound}/>)
        ];

        if (currentProject() === Projects.GWLAB) {
            _modules = [
                ..._modules,
                (<Redirect key="redirectToViterbi" from="/" to="/viterbi/" status={302} />)
            ];
        } else if (currentProject() === Projects.GWCLOUD) {
            _modules = [
                ..._modules,
                (<Redirect key="redirectToBilby" from="/" to="/bilby/" status={302} />)
            ];
        } else if (currentProject() === Projects.GWLANDSCAPE) {
            _modules = [
                ..._modules,
                (<Redirect key="redirectToCompas" from="/" to="/compas/" status={302} />)
            ];
        }

        return (
            <UpdatableResolver routes={
                <Route
                    path="/"
                    Component={Layout}
                    environment={getEnvironment('auth')}
                    query={graphql`
                       query App_UserDetails_Query {
                         gwclouduser {
                           ...Layout_gwclouduser
                         }                         
                       }
                    `}
                    render={({Component, props, retry }) => {
                        if (!Component || !props)
                            return <div/>;

                        HarnessApi.retryHarnessUserDetails = retry;

                        return <Component {...props} />;
                    }}
                    on
                >
                    {
                        _modules
                    }

                </Route>
            }/>
        );
    }
}

export default GWCloudApp;
