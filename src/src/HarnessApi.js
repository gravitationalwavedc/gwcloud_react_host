import {getEnvironment} from "./Environment";
import readContext from "react-relay/lib/readContext"
import getContext from "react-relay/lib/ReactRelayContext"

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
    currentUser: null,
    // When using fragments, you must use this context and reader
    relayContext: getContext,
    readContext: context => readContext(context)
};

export default HarnessApi;