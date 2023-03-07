import GWLabMenu from './components/gwlab/Menu';
import GWLabHelmet from './components/gwlab/Helmet';
import GWLandscapeMenu from './components/gwlandscape/Menu';
import GWCloudMenu from './components/gwcloud/Menu';
import GWLandscapeHelmet from './components/gwlandscape/Helmet';
import GWCloudHelmet from './components/gwcloud/GWCloudHelmet';

const IS_DEV = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
const FORCE_GWLAB = !process.env.NODE_ENV || process.env.FORCE_DOMAIN === 'gwlab';
const FORCE_GWCLOUD = !process.env.NODE_ENV || process.env.FORCE_DOMAIN === 'gwcloud';
const FORCE_GWLANDSCAPE = !process.env.NODE_ENV || process.env.FORCE_DOMAIN === 'gwlandscape';

const Projects = Object.freeze({
    GWLAB: {
        domainRegex: /(^|\.)gwlab\.org\.au$/,
        domain: 'gwlab',
        name: 'GWLab',
        menuPadding: '116px',
        menu: GWLabMenu,
        helmet: GWLabHelmet,
    },
    GWCLOUD: {
        domainRegex: /(^|\.)gwcloud\.org\.au$/,
        domain: 'gwcloud',
        name: 'GWCloud',
        theme: './assets/gwcloud/scss/theme.scss',
        menuPadding: '64px',
        menu: GWCloudMenu,
        helmet: GWCloudHelmet,
    },
    GWLANDSCAPE: {
        domainRegex: /(^|\.)gwlandscape\.org\.au$/,
        domain: 'gwlandscape',
        name: 'GWLandscape',
        theme: './assets/gwlandscape/scss/theme.scss',
        menuPadding: '64px',
        menu: GWLandscapeMenu,
        helmet: GWLandscapeHelmet,
    }
});

function currentProject() {
    if (FORCE_GWLAB) {
        return Projects.GWLAB;
    }

    if (FORCE_GWCLOUD) {
        return Projects.GWCLOUD;
    }

    if (FORCE_GWLANDSCAPE) {
        return Projects.GWLANDSCAPE;
    }

    // Match the host name against the domain regexs to match the project
    for (const project in Projects) {
        if (!Object.prototype.hasOwnProperty.call(Projects, project))
            continue;

        if (Projects[project].domainRegex.test(location.hostname))
            return Projects[project];
    }

    // Not found
    return null;
}

export {
    IS_DEV,
    currentProject,
    Projects
};
