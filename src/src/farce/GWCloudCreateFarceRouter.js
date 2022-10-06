import FarceActions from 'farce/Actions';
import React from 'react';
import { Provider } from 'react-redux';

import createFarceStore from 'found/createFarceStore';
import createConnectedRouter from '../router/createConnectedRouter';

let replaceRouteConfig = () => {};

function gwCloudCreateFarceRouter({
    store,
    historyProtocol,
    historyMiddlewares,
    historyOptions,
    routeConfig,
    ...options
}) {
    const ConnectedRouter = createConnectedRouter(options);

    class FarceRouter extends React.Component {
        constructor(props) {
            super(props);

            this.store =
                store ||
                createFarceStore({
                    historyProtocol,
                    historyMiddlewares,
                    historyOptions,
                    routeConfig,
                });

            replaceRouteConfig = routeConfig => this.replaceRouteConfig(routeConfig);
        }

        replaceRouteConfig(routeConfig) {
            this.store.found.replaceRouteConfig(routeConfig);
        }

        componentWillUnmount() {
            this.store.dispatch(FarceActions.dispose());
        }

        render() {
            return (
                <Provider store={this.store}>
                    <ConnectedRouter {...this.props} />
                </Provider>
            );
        }
    }

    return FarceRouter;
}

export {
    gwCloudCreateFarceRouter,
    replaceRouteConfig
};