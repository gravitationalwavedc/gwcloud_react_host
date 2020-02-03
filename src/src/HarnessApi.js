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
};

export default HarnessApi;