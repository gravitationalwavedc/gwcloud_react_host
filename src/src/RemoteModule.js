import React from 'react';
import {updateRoutes} from './UpdatableResolver';
import HarnessApi from './HarnessApi';
import Loading from './components/Loading';

const module_map = {};


// Taken from https://stackoverflow.com/a/39008859
function injectScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.addEventListener('load', resolve);
        script.addEventListener('error', e => reject(e.error));
        document.head.appendChild(script);
    });
}

class RemoteModule extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // Check if this module is current loading
        if (module_map[this.props._module_url] === 'loading')
            // Don't do anything, we've been remounted during the loading of the specified module
            return;

        // If the module is already fetched, it's safe to load the module
        if (this.props._module_url in module_map)
            this.loadModule(module_map[this.props._module_url]);
        else {
            // Mark this module as loading
            module_map[this.props._module_url] = 'loading';

            injectScript(this.props._module_url)
                .then(() => {
                    // This following block of code is straight magic. For "documentation" if you could call it that,
                    // have a read of https://webpack.js.org/concepts/module-federation/#dynamic-remote-containers

                    // Initializes the share scope.
                    // This fills it with known provided modules from this build and all remotes
                    __webpack_init_sharing__('default');
                    const container = window[this.props._path];

                    // Initialize the container, it may provide shared modules
                    container.init(__webpack_share_scopes__.default);

                    // Find the index module which has remote module exports
                    const p = container.get('index');

                    // Wait for the promise to resolve
                    p.then(module => {
                        // Get the index module and store it in the module map
                        module_map[this.props._module_url] = module();

                        // Now prepare and load the module
                        this.loadModule(module_map[this.props._module_url]);
                    });
                });
        }
    }

    loadModule(m) {
        HarnessApi.getSecondaryMenu = null;

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
