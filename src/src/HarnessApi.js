import {getEnvironment} from "./Environment";

function setAuthTokens(token, refreshToken) {
    localStorage.authToken = token;
    localStorage.authRefreshToken = refreshToken;
}

const HarnessApi = {
    getEnvironment: getEnvironment,
    setAuthTokens: setAuthTokens,
    // retryHarnessUserDetails is set in App.jsx when Layout is rendered
    retryHarnessUserDetails: () => {},
    // currentUser is set in App.jsx when Layout is rendered
    currentUser: null
};

export default HarnessApi;