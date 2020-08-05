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
    }
 };
  
 export default HarnessApi;
 
 