import {Environment, Network, RecordSource, Store,} from 'relay-runtime';

const ENVIRONMENTS = {
    auth: {
        url: "http://localhost:8000/graphql",
    }
};

const environment_map = {};

function getEnvironment(name) {
    if (name in environment_map)
        return environment_map[name]

    // Create a network layer from the fetch function
    const network = Network.create((operation, variables) => {
        return fetch(ENVIRONMENTS[name].url, {
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

    const store = new Store(new RecordSource())
    environment_map[name] = new Environment({
        network,
        store
    });
}

export default getEnvironment;