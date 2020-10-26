import React from 'react'
import {BrowserProtocol, queryMiddleware} from "farce";
import {createRender, makeRouteConfig,} from 'found';
import getEnvironment from "./Environment";
import Enumerable from 'linq'
import {gwCloudCreateFarceRouter, replaceRouteConfig} from "./farce/GWCloudCreateFarceRouter";
import Resolver from "./router/Resolver";

let updateRoutes = () => {
};

class UpdatableResolver extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            router: null,
            resolver: this.createResolver()
        };

        updateRoutes = (path, routes) => this.updateRoutes(path, routes);
    }

    updateRoutes(path, routes) {
        // Clone the parent routes, find the route with the specified path, and update it's children to the new routes
        let keyCounter = 0;

        function copyChildren(r) {
            const children = Enumerable.from(r).select(c => {

                if (c.props && c.props.path === path + "*") {
                    const props = {...c.props};
                    props.path = path;
                    props.Component = null;
                    return React.cloneElement(c, {key: keyCounter++, ...props}, routes);
                }

                return React.cloneElement(c, {key: keyCounter++, ...c.props}, copyChildren(c.props.children))
            }).toArray();

            if (!children.length)
                return null;

            return children;
        }

        const t = React.cloneElement(this.props.routes, this.props.routes.props, copyChildren(this.props.routes.props.children));

        replaceRouteConfig(
            makeRouteConfig(t)
        );

        // Trigger a redraw
        this.setState({
                ...this.state
            }
        )
    }

    createResolver() {
        return new Resolver();
    }

    createRouter(routes) {
        return gwCloudCreateFarceRouter({
            historyProtocol: new BrowserProtocol(),
            historyMiddlewares: [queryMiddleware],
            routeConfig: makeRouteConfig(
                routes
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

export {
    UpdatableResolver,
    updateRoutes
};