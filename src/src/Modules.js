const Modules = {
    auth: {
        dev_graphql_url: "http://localhost:8000/graphql",
        dev_bundle_url: "http://localhost:3001/main.js",

        graphql_url: "/auth/graphql",
        bundle_url: "/auth/static/main.js"
    },
    bilby: {
        dev_graphql_url: "http://localhost:8001/graphql",
        dev_bundle_url: "http://localhost:3002/main.js",

        graphql_url: "/auth/graphql",
        bundle_url: "/auth/static/main.js"
    },
};

export default Modules;