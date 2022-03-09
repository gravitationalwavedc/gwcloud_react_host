import React from 'react';
import { render, screen } from '@testing-library/react';

import Menu from '../Menu';

jest.mock('found', () => ({
    Link: ({exact, ...component}) => <a {...component}>{component.children}</a>
}));

describe('the gwlandscape menu component', () => {
    it('renders logout when provided a name', () => {
        expect.hasAssertions();
        render(<Menu name='Test Name'/>);
        expect(screen.queryByTestId('GWLandscapeLogo')).toBeInTheDocument();
        expect(screen.queryByText('Test Name')).toBeInTheDocument();
        expect(screen.queryByText('Logout')).toBeInTheDocument();
        expect(screen.queryByText('Login')).not.toBeInTheDocument();
    });

    it('renders login when not provided a name', () => {
        expect.hasAssertions();
        render(<Menu/>);
        expect(screen.queryByTestId('GWLandscapeLogo')).toBeInTheDocument();
        expect(screen.queryByText('Test Name')).not.toBeInTheDocument();
        expect(screen.queryByText('Logout')).not.toBeInTheDocument();
        expect(screen.queryByText('Login')).toBeInTheDocument();
    });
});