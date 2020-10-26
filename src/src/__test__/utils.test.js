import {describe, expect, it, test} from "@jest/globals";
import {isGwLab} from "../utils";
import {mockLocationHostName} from "./testUtils";

describe('isGwLab', () => {
    it('returns true if domain is gwlab.org.au', () => {
        mockLocationHostName("gwlab.org.au");
        expect(isGwLab()).toEqual(true);
    });

    it('returns true if domain is test.gwlab.org.au', () => {
        mockLocationHostName("test.gwlab.org.au");
        expect(isGwLab()).toEqual(true);
    });

    it('returns false if domain is gwcloud.org.au', () => {
        mockLocationHostName("gwcloud.org.au");
        expect(isGwLab()).toEqual(false);
    });

    it('returns false if domain is test.gwcloud.org.au', () => {
        mockLocationHostName("test.gwcloud.org.au");
        expect(isGwLab()).toEqual(false);
    });
});
