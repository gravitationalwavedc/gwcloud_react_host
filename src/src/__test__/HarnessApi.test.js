import {describe, expect, it} from "@jest/globals";
import HarnessApi from "../HarnessApi";
import {getEnvironment} from "../Environment";
import getContext from "react-relay/lib/ReactRelayContext";
import readContext from "react-relay/lib/readContext";
import React, {
    useCallback,
    useContext, useDebugValue,
    useEffect,
    useImperativeHandle, useLayoutEffect,
    useMemo,
    useReducer,
    useRef,
    useState
} from 'react';
import {isGwLab} from "../utils";

describe('HarnessAPI', () => {
    it('contains expected keys', () => {
        expect(HarnessApi).toMatchObject({getEnvironment: getEnvironment});
        expect(HarnessApi).toHaveProperty("setAuthTokens");
        expect(HarnessApi).toHaveProperty("retryHarnessUserDetails");
        expect(HarnessApi).toMatchObject({currentUser: null});
        expect(HarnessApi).toMatchObject({isGwLab: isGwLab})
    });

    it('can set the auth tokens', () => {
        expect(localStorage.authToken).toEqual(undefined);
        expect(localStorage.authRefreshToken).toEqual(undefined);

        expect(HarnessApi.hasAuthToken()).toBeFalsy();

        HarnessApi.setAuthTokens("my_token", "my_refresh_token");

        expect(HarnessApi.hasAuthToken()).toBeTruthy();

        expect(localStorage.authToken).toEqual("my_token");
        expect(localStorage.authRefreshToken).toEqual("my_refresh_token");
    });
})