import {isGwLab} from "./utils";

function modules() {
    const _commonModules = {
        auth: {
            dev_graphql_url: "http://localhost:8000/graphql",
            dev_bundle_url: "http://localhost:3001/remoteEntry.js",

            graphql_url: "/auth/graphql",
            bundle_url: "/auth/static/remoteEntry.js"
        }
    };

    if (isGwLab()) {
        // GWLab modules
        return {
            ..._commonModules,
            viterbi: {
                dev_graphql_url: "http://localhost:8002/graphql",
                dev_bundle_url: "http://localhost:3003/remoteEntry.js",

                graphql_url: "/viterbi/graphql",
                bundle_url: "/viterbi/static/remoteEntry.js"
            }
        }
    } else {
        // GWCloud modules
        return {
            ..._commonModules,
            bilby: {
                dev_graphql_url: "http://localhost:8001/graphql",
                dev_bundle_url: "http://localhost:3002/remoteEntry.js",

                graphql_url: "/bilby/graphql",
                bundle_url: "/bilby/static/remoteEntry.js"
            }
        }
    }
}

export default modules;