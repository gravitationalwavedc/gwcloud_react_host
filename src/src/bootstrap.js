// Get the container to mount the react application in
import React from 'react';
import ReactDOM from 'react-dom';
import {currentProject, Projects} from './utils';

// Dynamically import styles.
(async () => {
    if (currentProject() === Projects.GWLAB)
        await import('./assets/gwlab/scss/theme.scss');
    else if (currentProject() === Projects.GWCLOUD)
        await import('./assets/gwcloud/scss/theme.scss');
    else if (currentProject() === Projects.GWLANDSCAPE)
        await import('./assets/gwlandscape/scss/theme.scss');
})();

// Assets
import GWCloudApp from './App';

const container = document.getElementById('gwdc_container');

// The container was found, mount the application
ReactDOM.render(<GWCloudApp/>, container);
