import {getEnvironment} from "./Environment";
import {currentProject, Projects} from "./utils";

function setAuthTokens(token, refreshToken) {
    localStorage.authToken = token;
    localStorage.authRefreshToken = refreshToken;
}

function hasAuthToken() {
    return !(localStorage.getItem("authToken") === '' || localStorage.getItem("authToken") === null);
}

const HarnessApi = {
    getEnvironment: getEnvironment,
    setAuthTokens: setAuthTokens,
    hasAuthToken: hasAuthToken,
    // retryHarnessUserDetails is set in App.jsx when Layout is rendered
    retryHarnessUserDetails: () => {},
    // currentUser is set in App.jsx when Layout is rendered
    currentUser: null,
    // Returns the current project
    currentProject: currentProject,
    projects: Projects
};

export default HarnessApi;
 
 
