import {currentProject, Projects} from './utils';

function modules() {
    const _commonModules = {
        auth: {
            dev_graphql_url: 'http://localhost:8000/graphql',
            dev_bundle_url: 'http://localhost:3001/remoteEntry.js',

            graphql_url: '/auth/graphql',
            bundle_url: '/auth/static/remoteEntry.js'
        }
    };

    if (currentProject() === Projects.GWLAB) {
        // GWLab modules
        return {
            ..._commonModules,
            viterbi: {
                dev_graphql_url: 'http://localhost:8002/graphql',
                dev_bundle_url: 'http://localhost:3003/remoteEntry.js',

                graphql_url: '/viterbi/graphql',
                bundle_url: '/viterbi/static/remoteEntry.js'
            },
            cwfollowup: {
                dev_graphql_url: 'http://localhost:8004/graphql',
                dev_bundle_url: 'http://localhost:3005/remoteEntry.js',

                graphql_url: '/cwfollowup/graphql',
                bundle_url: '/cwfollowup/static/remoteEntry.js'
            }
        };
    } else if (currentProject() === Projects.GWCLOUD) {
        // GWCloud modules
        return {
            ..._commonModules,
            bilby: {
                dev_graphql_url: 'http://localhost:8001/graphql',
                dev_bundle_url: 'http://localhost:3002/remoteEntry.js',

                graphql_url: '/bilby/graphql',
                bundle_url: '/bilby/static/remoteEntry.js'
            }
        };
    } else if (currentProject() === Projects.GWLANDSCAPE) {
        // GWLandscape modules
        return {
            ..._commonModules,
            compas: {
                dev_graphql_url: 'http://localhost:8003/graphql',
                dev_bundle_url: 'http://localhost:3004/remoteEntry.js',

                graphql_url: '/compas/graphql',
                bundle_url: '/compas/static/remoteEntry.js'
            }
        };
    } else {
        return null;
    }
}

export default modules;
