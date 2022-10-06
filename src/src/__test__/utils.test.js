import {describe, expect, it } from '@jest/globals';
import {currentProject, Projects} from '../utils';
import {mockLocationHostName} from './testUtils';

describe('currentProject', () => {
    it('returns Projects.GWLAB if domain is gwlab.org.au', () => {
        expect.assertions(1);
        mockLocationHostName('gwlab.org.au');
        expect(currentProject()).toStrictEqual(Projects.GWLAB);
    });

    it('returns Projects.GWLAB if domain is test.gwlab.org.au', () => {
        expect.assertions(1);
        mockLocationHostName('test.gwlab.org.au');
        expect(currentProject()).toStrictEqual(Projects.GWLAB);
    });

    it('returns Projects.GWCLOUD if domain is gwcloud.org.au', () => {
        expect.assertions(1);
        mockLocationHostName('gwcloud.org.au');
        expect(currentProject()).toStrictEqual(Projects.GWCLOUD);
    });

    it('returns Projects.GWCLOUD if domain is test.gwcloud.org.au', () => {
        expect.assertions(1);
        mockLocationHostName('test.gwcloud.org.au');
        expect(currentProject()).toStrictEqual(Projects.GWCLOUD);
    });

    it('returns Projects.GWLANDSCAPE if domain is gwlandscape.org.au', () => {
        expect.assertions(1);
        mockLocationHostName('gwlandscape.org.au');
        expect(currentProject()).toStrictEqual(Projects.GWLANDSCAPE);
    });

    it('returns Projects.GWLANDSCAPE if domain is test.gwlandscape.org.au', () => {
        expect.assertions(1);
        mockLocationHostName('test.gwlandscape.org.au');
        expect(currentProject()).toStrictEqual(Projects.GWLANDSCAPE);
    });

    it('returns null if domain is test.org.au', () => {
        expect.assertions(1);
        mockLocationHostName('test.org.au');
        expect(currentProject()).toBeNull();
    });
});
