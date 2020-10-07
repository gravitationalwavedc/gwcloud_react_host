import React from "react";
import {updateRoutes} from "./UpdatableResolver";
import HarnessApi from "./HarnessApi";
import Loading from "./components/Loading";

const module_map = {};

class RemoteModule extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // Check if this module is current loading
        if (module_map[this.props._module_url] === "loading")
            // Don't do anything, we've been remounted during the loading of the specified module
            return;

        if (this.props._module_url in module_map)
            this.loadModule(module_map[this.props._module_url]);
        else {
            // Make this module as loading
            module_map[this.props._module_url] = "loading";

            const p = new Promise((resolve, reject) => {
                const request = new XMLHttpRequest();

                request.onload = () => {
                    if (request.status >= 200 && request.status < 400) {
                        const src = request.responseText;
                        const module = window.eval(src);

                        // Remove window ref if one exists
                        if (window.RemoteModule)
                            delete window.RemoteModule;

                        // Resolve the promise
                        return resolve(module);
                    } else {
                        return reject();
                    }
                };

                request.open('GET', this.props._module_url);
                request.send();
            });

            p.then(m => {
                module_map[this.props._module_url] = m;

                this.loadModule(m);
            }).catch(e => {
                console.log("Error loading external component", e)
            });
        }
    }

    loadModule(m) {
        // Check if this module consumes any api from the harness and set the pointer
        if ('setHarnessApi' in m)
            m['setHarnessApi'](HarnessApi);

        // Get the routes from the module and then update the parent routes
        updateRoutes(this.props._path, m['getRoutes']());
    }

    render() {
        return (
          <Loading/>
        );
    }
}

export default RemoteModule;
