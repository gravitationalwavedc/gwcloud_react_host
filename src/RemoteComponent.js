import React from "react";

const module_map = {};

class RemoteComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            component: module_map[props._module_url + props._component_name] || null
        }
    }

    componentDidMount() {
        if (this.state.component)
            return;

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

            request.open('GET', this.props._module_url);
            request.send();
        });

        p.then(m => {
            module_map[this.props._module_url + this.props._component_name] = m[this.props._component_name];
            this.setState({component: m[this.props._component_name]})
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

export default RemoteComponent;