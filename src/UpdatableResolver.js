import React from 'react'
import {BrowserProtocol, queryMiddleware} from "farce";
import {
    createFarceRouter,
    createRender,
    makeRouteConfig,
    Route,
} from 'found';
import {Resolver} from "found-relay";
import getEnvironment from "./Environment";

class UpdatableResolver extends React.Component {
    constructor() {
        super();

        this.state = {
            router: null,
            resolver: this.createResolver()
        }
    }

    updateRoutes() {

    }

    createResolver() {
        return new Resolver(getEnvironment("auth"));
    }

    createRouter() {
        return createFarceRouter({
            historyProtocol: new BrowserProtocol(),
            historyMiddlewares: [queryMiddleware],
            routeConfig: makeRouteConfig(
                this.props.routes
            ),

            render: createRender({}),
        });
    }

    render() {
        if (!this.state.router) {
            setTimeout(() => this.setState({
                    router: this.createRouter(this.props.routes),
                    resolver: this.createResolver()
                }
            ), 0);
            return null;
        }

        return React.createElement(this.state.router, {
            resolver: this.state.resolver,
            ...this.props
        });
    }
}

export default UpdatableResolver;