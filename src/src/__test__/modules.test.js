import {describe, expect, it} from "@jest/globals";
import {mockLocationHostName} from "./testUtils";
import modules from "../modules";

describe('Modules based on gwlab.org.au, gwcloud.org.au and gwlandscape.org.au', () => {
    it('Makes sure auth and viterbi are in the list of modules if domain is gwlab.org.au', () => {
        mockLocationHostName("gwlab.org.au");
        const _modules = modules();
        expect("auth" in _modules).toBeTruthy()
        expect("viterbi" in _modules).toBeTruthy()
        expect("bilby" in _modules).toBeFalsy()
        expect("compas" in _modules).toBeFalsy()
    });

    it('Makes sure auth and bilby are in the list of modules if domain is gwcloud.org.au', () => {
        mockLocationHostName("gwcloud.org.au");
        const _modules = modules();
        expect("auth" in _modules).toBeTruthy()
        expect("bilby" in _modules).toBeTruthy()
        expect("viterbi" in _modules).toBeFalsy()
        expect("compas" in _modules).toBeFalsy()
    });

    it('Makes sure auth and compas are in the list of modules if domain is gwlandscape.org.au', () => {
        mockLocationHostName("gwlandscape.org.au");
        const _modules = modules();
        expect("auth" in _modules).toBeTruthy()
        expect("bilby" in _modules).toBeFalsy()
        expect("viterbi" in _modules).toBeFalsy()
        expect("compas" in _modules).toBeTruthy()
    });
});
