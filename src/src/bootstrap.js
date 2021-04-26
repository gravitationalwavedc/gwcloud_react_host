// Get the container to mount the react application in
import React from 'react';
import ReactDOM from 'react-dom';
import { isGwLab } from './utils';

// Dynamically import styles.
(async () => {
    if(isGwLab()) {
        await import('./assets/gwlab/scss/theme.scss');
    } else {
        await import('./assets/gwcloud/scss/theme.scss');
    }
})();

// Assets
import GWCloudApp from './App';

const container = document.getElementById('gwdc_container');

// The container was found, mount the application
ReactDOM.render(<GWCloudApp/>, container);
