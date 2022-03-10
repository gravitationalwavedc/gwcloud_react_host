import React from 'react';
import { render, screen } from '@testing-library/react';

import Menu from '../Menu';

describe('the gwlandscape menu component', () => {
    it('renders logout when provided a name', () => {
        expect.hasAssertions();
        render(<Menu name='Test Name'/>, {wrapper: TestRouter});
        expect(screen.queryByTestId('GWLandscapeLogo')).toBeInTheDocument();
        expect(screen.queryByText('Test Name')).toBeInTheDocument();
        expect(screen.queryByText('Logout')).toBeInTheDocument();
        expect(screen.queryByText('Login')).not.toBeInTheDocument();
    });

    it('renders login when not provided a name', () => {
        expect.hasAssertions();
        render(<Menu/>, {wrapper: TestRouter});
        expect(screen.queryByTestId('GWLandscapeLogo')).toBeInTheDocument();
        expect(screen.queryByText('Test Name')).not.toBeInTheDocument();
        expect(screen.queryByText('Logout')).not.toBeInTheDocument();
        expect(screen.queryByText('Login')).toBeInTheDocument();
    });
});
