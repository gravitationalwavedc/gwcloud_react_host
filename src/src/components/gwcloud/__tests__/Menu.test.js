import React from 'react';
import { render, screen } from '@testing-library/react';

import Menu from '../Menu';

jest.mock('found', () => ({
    Link: ({...component}) => {
        delete component.exact;
        return <a {...component}>{component.children}</a>;
    }
}));

describe('the gwcloud menu component', () => {
    it('renders logout when provided a name', () => {
        expect.hasAssertions();
        render(<Menu name='Test Name'/>);
        expect(screen.queryByTestId('GWCloudLogo')).toBeInTheDocument();
        expect(screen.queryByText('Test Name')).toBeInTheDocument();
        expect(screen.queryByText('Logout')).toBeInTheDocument();
        expect(screen.queryByText('Login')).not.toBeInTheDocument();
    });

    it('renders login when not provided a name', () => {
        expect.hasAssertions();
        render(<Menu/>);
        expect(screen.queryByTestId('GWCloudLogo')).toBeInTheDocument();
        expect(screen.queryByText('Test Name')).not.toBeInTheDocument();
        expect(screen.queryByText('Logout')).not.toBeInTheDocument();
        expect(screen.queryByText('Login')).toBeInTheDocument();
    });
});
