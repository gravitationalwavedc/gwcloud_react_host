import {describe, expect, it} from '@jest/globals';
import {mockLocationHostName} from './testUtils';
import modules from '../modules';

describe('modules based on gwlab.org.au, gwcloud.org.au and gwlandscape.org.au', () => {
    it('makes sure auth and viterbi are in the list of modules if domain is gwlab.org.au', () => {
        expect.hasAssertions();
        mockLocationHostName('gwlab.org.au');
        const _modules = modules();
        expect('auth' in _modules).toBeTruthy();
        expect('viterbi' in _modules).toBeTruthy();
        expect('bilby' in _modules).toBeFalsy();
        expect('compas' in _modules).toBeFalsy();
    });

    it('makes sure auth and bilby are in the list of modules if domain is gwcloud.org.au', () => {
        expect.hasAssertions();
        mockLocationHostName('gwcloud.org.au');
        const _modules = modules();
        expect('auth' in _modules).toBeTruthy();
        expect('bilby' in _modules).toBeTruthy();
        expect('viterbi' in _modules).toBeFalsy();
        expect('compas' in _modules).toBeFalsy();
    });

    it('makes sure auth and compas are in the list of modules if domain is gwlandscape.org.au', () => {
        expect.hasAssertions();
        mockLocationHostName('gwlandscape.org.au');
        const _modules = modules();
        expect('auth' in _modules).toBeTruthy();
        expect('bilby' in _modules).toBeFalsy();
        expect('viterbi' in _modules).toBeFalsy();
        expect('compas' in _modules).toBeTruthy();
    });
});
