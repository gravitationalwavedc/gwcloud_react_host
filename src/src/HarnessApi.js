import React, {
    useState,
    useEffect,
    useContext,
    useReducer,
    useCallback,
    useMemo,
    useRef,
    useImperativeHandle,
    useLayoutEffect,
    useDebugValue
} from "react";
import {getEnvironment} from "./Environment";
import readContext from "react-relay/lib/readContext"
import getContext from "react-relay/lib/ReactRelayContext"
import {isGwLab} from "./utils";

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
    // When using fragments, you must use this context and reader
    relayContext: getContext,
    readContext: context => readContext(context),
    reactHooks: {
        useState: useState,
        useEffect: useEffect,
        useContext: useContext,
        useReducer: useReducer,
        useCallback: useCallback,
        useMemo: useMemo,
        useRef: useRef,
        useImperativeHandle: useImperativeHandle,
        useLayoutEffect: useLayoutEffect,
        useDebugValue: useDebugValue
    },
    // Returns true if the site is currently rendering GWLab, otherwise false
    isGwLab: isGwLab
};

export default HarnessApi;
 
 
