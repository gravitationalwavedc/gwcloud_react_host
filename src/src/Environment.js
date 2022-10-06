import {Environment, RecordSource, Store,} from 'relay-runtime';
import modules from './modules';
import {IS_DEV} from './utils';
import HarnessApi from './HarnessApi';
import 'regenerator-runtime/runtime';
import {RelayNetworkLayer, urlMiddleware} from 'react-relay-network-modern/node8';
import authMiddleware from './AuthMiddleware';
import {router} from './router/createBaseRouter';

// Environment map singleton
let environment_map = {};

function logout(path) {
    // Reset all environments
    environment_map = {};

    // Clear the auth tokens and user
    HarnessApi.setAuthTokens('', '');
    HarnessApi.currentUser = null;

    // Update the header
    HarnessApi.retryHarnessUserDetails();

    // Redirect to the login page
    router.replace(path ? '/auth/?next=' + path : '/auth/');
}

function requestRefreshToken() {
    return fetch(IS_DEV ? modules()['auth'].dev_graphql_url : modules()['auth'].graphql_url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            query: `mutation EnvironmentRefreshTokenMutation($refreshToken: String!) {
              refreshToken(refreshToken: $refreshToken) {
                token
                refreshToken
                payload
              }
            }`,
            variables: {
                refreshToken: localStorage.authRefreshToken || ''
            },
        }),
    })
        .then(response => response.json())
        .then(json => {
            if ('errors' in json && 
                json['errors'].length && 
                json['errors'][0].message === 'Refresh token is expired') {
                logout(location.pathname);
                return null;
            }
            HarnessApi.setAuthTokens(json.data.refreshToken.token, json.data.refreshToken.refreshToken);
            return json.data.refreshToken.token;
        })
        .catch(() => {
            // Something has gone terribly wrong... Log out the user and redirect them to login
            logout(location.pathname);
        });
}

function getEnvironment(name) {
    // Check if the specified environment has been loaded yet
    if (name in environment_map)
        // It has so just return the already initialised environment
        return environment_map[name];

    // Create a network layer from the fetch function
    const network = new RelayNetworkLayer([
        urlMiddleware({
            url: () => IS_DEV ? modules()[name].dev_graphql_url : modules()[name].graphql_url
        }),
        authMiddleware({
            token: () => localStorage.authToken,
            prefix: 'JWT ',
            tokenRefreshPromise: () => requestRefreshToken()
        }),
        (next) => async (req) => {
            const res = await next(req);
            return res;
        },
    ], {
        noThrow: true
    });

    // Create the store
    const store = new Store(new RecordSource());

    // Create the environment and store it in the environment map singleton
    environment_map[name] = new Environment({
        network,
        store
    });

    return environment_map[name];
}

export {
    getEnvironment,
    logout
};
