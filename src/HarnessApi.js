import getEnvironment from "./Environment";

function setAuthTokens(token, refreshToken) {
    localStorage.authToken = token;
    localStorage.authRefreshToken = refreshToken;
}

const HarnessApi = {
    getEnvironment: getEnvironment,
    setAuthTokens: setAuthTokens
};

export default HarnessApi;