import React from "react";
import {expect} from "@jest/globals";
import TestRenderer from 'react-test-renderer';
import NotFound from "../NotFound";

test('Test Not Found', () => {
    const renderer = TestRenderer.create(<NotFound />);
    expect(renderer).toMatchSnapshot();
});

