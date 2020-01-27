import {Environment, Network, RecordSource, Store,} from 'relay-runtime';
import Modules from "./Modules";
import {IS_DEV} from "./Utils";

// Environment map singleton
const environment_map = {};

function getEnvironment(name) {
    // Check if the specified environment has been loaded yet
    if (name in environment_map)
        // It has so just return the already initialised environment
        return environment_map[name];

    // Create a network layer from the fetch function
    const network = Network.create((operation, variables) => {
        return fetch(IS_DEV ? Modules[name].dev_url : Modules[name].url, {
            method: 'POST',
            headers: {
                // Add authentication and other headers here
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                query: operation.text, // GraphQL text from input
                variables,
            }),
        }).then(response => {
            return response.json();
        });
    });

    // Create the store
    const store = new Store(new RecordSource())

    // Create the environment and store it in the environment map singleton
    environment_map[name] = new Environment({
        network,
        store
    });
}

export default getEnvironment;