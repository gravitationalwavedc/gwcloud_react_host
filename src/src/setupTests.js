import React from 'react';
import { createMockEnvironment } from 'relay-test-utils';
import { RouterContext } from 'found';

import '@testing-library/jest-dom/extend-expect';

global.router = {
    push: jest.fn(),
    replace: jest.fn(),
    go: jest.fn(),
    createHref: jest.fn(),
    createLocation: jest.fn(),
    isActive: jest.fn(),
    matcher: {
        match: jest.fn(),
        getRoutes: jest.fn(),
        isActive: jest.fn(),
        format: jest.fn()
    },
    addTransitionHook: jest.fn(),
    addNavigationListener: jest.fn(),
};

global.TestRouter = ({children}) => {
    const routerContext = {router: router, match: {}};
    return <RouterContext.Provider value={routerContext}>
        {children}
    </RouterContext.Provider>;
};

global.environment = createMockEnvironment();