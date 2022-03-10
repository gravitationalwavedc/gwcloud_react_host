import React from 'react';
import { createMockEnvironment, MockPayloadGenerator } from 'relay-test-utils';
import { QueryRenderer } from 'react-relay';
import { render, screen } from '@testing-library/react';
import { mockLocationHostName } from './testUtils';
import HarnessApi from '../HarnessApi';
import Layout from '../Layout';

jest.mock('found', () => ({
    Link: ({...component}) => {
        delete component.exact;
        return <a {...component}>{component.children}</a>;
    }
}));

describe('layout component', () => {
    const environment = createMockEnvironment();
    const TestRenderer = () => (
        <QueryRenderer
            environment={environment}
            query={graphql`
                query LayoutUserNotSetTestQuery @relay_test_operation {
                    gwclouduser {
                        ...Layout_gwclouduser
                    }
                }
              `}
            variables={{}}
            render={({error, props}) => {
                if (props) {
                    return <Layout {...props} match={{location: {pathname: '/'}}}/>;
                } else if (error) {
                    return error.message;
                }
                return 'Loading...';
            }}
        />
    );

    const mockUser = {
        UserDetails() {
            return {
                userId: 4,
                username: 'billnye',
                firstName: 'Bill',
                lastName: 'Nye',
                isLigoUser: false
            };
        }
    };

    it('renders for gwcloud', () => {
        expect.hasAssertions();
        mockLocationHostName('gwcloud.org.au');
        render(<TestRenderer/>);
        environment.mock.resolveMostRecentOperation(operation =>
            MockPayloadGenerator.generate(operation, mockUser),
        );
        expect(screen.queryByTestId('GWCloudLogo')).toBeInTheDocument();
    });

    it('renders for gwlab', () => {
        expect.hasAssertions();
        mockLocationHostName('gwlab.org.au');
        render(<TestRenderer/>);
        environment.mock.resolveMostRecentOperation(operation =>
            MockPayloadGenerator.generate(operation, mockUser),
        );
        expect(screen.queryByTestId('GWLabLogo')).toBeInTheDocument();
    });

    it('renders for gwlandscape', () => {
        expect.hasAssertions();
        mockLocationHostName('gwlandscape.org.au');
        render(<TestRenderer/>);
        environment.mock.resolveMostRecentOperation(operation =>
            MockPayloadGenerator.generate(operation, mockUser),
        );
        expect(screen.queryByTestId('GWLandscapeLogo')).toBeInTheDocument();
    });
        
    it('renders a secondary menu if present in HarnessApi', () => {
        expect.hasAssertions();
        mockLocationHostName('gwlandscape.org.au');
        HarnessApi.getSecondaryMenu = () => () => <div>Test Secondary Menu</div>;
        render(<TestRenderer/>);
        environment.mock.resolveMostRecentOperation(operation =>
            MockPayloadGenerator.generate(operation, mockUser),
        );
        expect(screen.queryByText('Test Secondary Menu')).toBeInTheDocument();
    });
});
