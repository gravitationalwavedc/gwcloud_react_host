import React from 'react';
import { render, screen } from '@testing-library/react';

import NotFound from '../NotFound';

describe('not found component', () => {
    it('renders', () => {
        expect.hasAssertions();
        render(<NotFound/>);
        expect(screen.queryByText('Page Not Found')).toBeInTheDocument();
    });
});

