import {commitMutation, Environment, RecordSource, Store,} from 'relay-runtime';
import Modules from "./Modules";
import {IS_DEV} from "./Utils";
import {graphql} from "graphql";
import HarnessApi from "./HarnessApi";
import {RelayNetworkLayer, urlMiddleware} from "react-relay-network-modern";
import authMiddleware from "./AuthMiddleware";
import {router} from './router/createBaseRouter'

// Environment map singleton
let environment_map = {};

function logout(path) {
    console.log(path)
    // Reset all environments
    environment_map = {};

    // Clear the auth tokens
    HarnessApi.setAuthTokens("", "");

    // Redirect to the login page
    router.replace(path ? "/auth/?next=" + path : "/auth/");
}

function requestRefreshToken(name) {
    return fetch(IS_DEV ? Modules['auth'].dev_graphql_url : Modules['auth'].graphql_url, {
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
                refreshToken: localStorage.authRefreshToken || ""
            },
        }),
    })
        .then(response => response.json())
        .then(json => {
            if ('errors' in json && json['errors'].length && json['errors'][0].message === "Refresh token is expired") {
                logout(location.pathname);
                return null;
            }
            HarnessApi.setAuthTokens(json.data.refreshToken.token, json.data.refreshToken.refreshToken);
            return json.data.refreshToken.token;
        })
        .catch(err => {
            // Something has gone terribly wrong... Log out the user and redirect them to login
            console.log("Couldn't refresh token", err);
            logout(location.pathname);
        })
}

function getEnvironment(name) {
    // Check if the specified environment has been loaded yet
    if (name in environment_map)
        // It has so just return the already initialised environment
        return environment_map[name];

    // Create a network layer from the fetch function
    const network = new RelayNetworkLayer([
        urlMiddleware({
            url: () => IS_DEV ? Modules[name].dev_graphql_url : Modules[name].graphql_url
        }),
        authMiddleware({
            token: () => localStorage.authToken,
            prefix: "JWT ",
            tokenRefreshPromise: (req) => requestRefreshToken()
        }),
        (next) => async (req) => {
            console.log('RelayRequest', req);

            const res = await next(req);
            console.log('RelayResponse', res);

            return res;
        },
    ], {
        noThrow: true
    });

    // Create the store
    const store = new Store(new RecordSource())

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