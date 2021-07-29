import {describe, expect, it, test} from "@jest/globals";
import {currentProject, Projects} from "../utils";
import {mockLocationHostName} from "./testUtils";

describe('currentProject', () => {
    it('returns Projects.GWLAB if domain is gwlab.org.au', () => {
        mockLocationHostName("gwlab.org.au");
        expect(currentProject()).toEqual(Projects.GWLAB);
    });

    it('returns Projects.GWLAB if domain is test.gwlab.org.au', () => {
        mockLocationHostName("test.gwlab.org.au");
        expect(currentProject()).toEqual(Projects.GWLAB);
    });

    it('returns Projects.GWCLOUD if domain is gwcloud.org.au', () => {
        mockLocationHostName("gwcloud.org.au");
        expect(currentProject()).toEqual(Projects.GWCLOUD);
    });

    it('returns Projects.GWCLOUD if domain is test.gwcloud.org.au', () => {
        mockLocationHostName("test.gwcloud.org.au");
        expect(currentProject()).toEqual(Projects.GWCLOUD);
    });

    it('returns Projects.GWLANDSCAPE if domain is gwlandscape.org.au', () => {
        mockLocationHostName("gwlandscape.org.au");
        expect(currentProject()).toEqual(Projects.GWLANDSCAPE);
    });

    it('returns Projects.GWLANDSCAPE if domain is test.gwlandscape.org.au', () => {
        mockLocationHostName("test.gwlandscape.org.au");
        expect(currentProject()).toEqual(Projects.GWLANDSCAPE);
    });

    it('returns null if domain is test.org.au', () => {
        mockLocationHostName("test.org.au");
        expect(currentProject()).toEqual(null);
    });
});
