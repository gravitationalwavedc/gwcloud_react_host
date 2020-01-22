// Get the container to mount the react application in
import GWCloudApp from "./App";
import React from "react";
import ReactDOM from "react-dom"

const container = document.getElementById('gwcloud_conainer');


// The container was found, mount the application
ReactDOM.render(<GWCloudApp/>, container);