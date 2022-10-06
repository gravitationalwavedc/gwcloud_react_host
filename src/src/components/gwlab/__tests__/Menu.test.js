import React from 'react';
import { render, screen } from '@testing-library/react';

import Menu from '../Menu';

/* global TestRouter */

describe('the gwlab menu component', () => {
    it('renders logout when provided a name', () => {
        expect.hasAssertions();
        render(<Menu name='Test Name' match={{location: {pathname: '/'}}}/>, {wrapper: TestRouter});
        expect(screen.queryByTestId('GWLabLogo')).toBeInTheDocument();
        expect(screen.queryByText('Test Name')).toBeInTheDocument();
        expect(screen.queryByText('Logout')).toBeInTheDocument();
        expect(screen.queryByText('Login')).not.toBeInTheDocument();
    });
    
    it('renders login when not provided a name', () => {
        expect.hasAssertions();
        render(<Menu match={{location: {pathname: '/'}}}/>, {wrapper: TestRouter});
        expect(screen.queryByTestId('GWLabLogo')).toBeInTheDocument();
        expect(screen.queryByText('Test Name')).not.toBeInTheDocument();
        expect(screen.queryByText('Logout')).not.toBeInTheDocument();
        expect(screen.queryByText('Login')).toBeInTheDocument();
    });

    it('renders module links', () => {
        expect.hasAssertions();
        render(<Menu name='Test Name' match={{location: {pathname: '/'}}}/>, {wrapper: TestRouter});
        expect(screen.queryByText('CWFollowup')).toBeInTheDocument();
        expect(screen.queryByText('Viterbi')).toBeInTheDocument();
    });
});
