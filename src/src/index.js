// Get the container to mount the react application in
import React from "react";
import ReactDOM from "react-dom"

// Assets
import 'semantic-ui-css/semantic.min.css'
import GWCloudApp from "./App";

const container = document.getElementById('gwcloud_container');

// The container was found, mount the application
ReactDOM.render(<GWCloudApp/>, container);