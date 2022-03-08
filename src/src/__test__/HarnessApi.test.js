import {describe, expect, it} from '@jest/globals';
import HarnessApi from '../HarnessApi';
import {getEnvironment} from '../Environment';
import {currentProject} from '../utils';

describe('harnessAPI', () => {
    it('contains expected keys', () => {
        expect.hasAssertions();
        expect(HarnessApi).toMatchObject({getEnvironment: getEnvironment});
        expect(HarnessApi).toHaveProperty('setAuthTokens');
        expect(HarnessApi).toHaveProperty('retryHarnessUserDetails');
        expect(HarnessApi).toMatchObject({currentUser: null});
        expect(HarnessApi).toMatchObject({currentProject: currentProject});
        expect(HarnessApi).toMatchObject({getSecondaryMenu: null});
    });

    it('can set the auth tokens', () => {
        expect.hasAssertions();
        expect(localStorage.authToken).toBeUndefined();
        expect(localStorage.authRefreshToken).toBeUndefined();

        expect(HarnessApi.hasAuthToken()).toBeFalsy();

        HarnessApi.setAuthTokens('my_token', 'my_refresh_token');

        expect(HarnessApi.hasAuthToken()).toBeTruthy();

        expect(localStorage.authToken).toStrictEqual('my_token');
        expect(localStorage.authRefreshToken).toStrictEqual('my_refresh_token');
    });
});