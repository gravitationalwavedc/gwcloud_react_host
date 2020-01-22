import React from "react";

class RemoteComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            component: null
        }
    }

    componentDidMount() {
        const p = new Promise((resolve, reject) => {
            const request = new XMLHttpRequest();

            request.onload = () => {
                if (request.status >= 200 && request.status < 400) {
                    const src = request.responseText;
                    const module = window.eval(src);
                    return resolve(module);
                } else {
                    return reject();
                }
            };

            request.open('GET', this.props.module_url);
            request.send();
        });

        p.then(m => {
            this.setState({component: m[this.props.name]})
        }).catch(e => {
            console.log("Error loading external component", e)
        });
    }

    render() {
        if (!this.state.component)
            return (
                <div>Loading...</div>
            );
        return React.createElement(this.state.component, {children: []});
    }
}

class GWCloudApp extends React.Component {
    render() {
        return (
            <div>
                hello!
                <RemoteComponent module_url="http://localhost:8081/main.js" name="SimpleComponent"/>
            </div>
        )
    }
}

// var loadApp = function(children) {
//     React.render(
//         React.createElement(MainComponent, {children: children}),
//         document.getElementById('main')
//     );
// };

// http://localhost:8081/main.js

export default GWCloudApp;