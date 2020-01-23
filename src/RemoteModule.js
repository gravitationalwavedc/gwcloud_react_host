import React from "react";
import {updateRoutes} from "./UpdatableResolver";

const module_map = {};

class RemoteModule extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            module: props._module_url in module_map ? module_map[props._module_url]: null
        }
    }

    componentDidMount() {
        if (this.props._module_url in module_map)
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
            module_map[this.props._module_url] = m;

            updateRoutes(this.props._path, m['getRoutes']());

            this.setState({module: m})
        }).catch(e => {
            console.log("Error loading external component", e)
        });
    }

    render() {
        if (!this.state.module)
            return (
                <div>Loading...</div>
            );
        console.log(this.props.children)
        return this.props.children || null;
    }
}

export default RemoteModule;