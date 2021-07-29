import React from "react";
import {expect, jest} from "@jest/globals";
import TestRenderer from 'react-test-renderer';
import Layout from "../Layout";
import {createMockEnvironment, MockPayloadGenerator} from "relay-test-utils";
import {QueryRenderer} from 'react-relay';
import {mockLocationHostName} from "./testUtils";

jest.mock('found', () => ({
    Link: component => <a {...component}>{component.children}</a>
}))

test('Layout renders login if user is not set', () => {
    mockLocationHostName("gwlab.org.au");

    const environment = createMockEnvironment();
    const MyTestRenderer = () => (
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

    const renderer = TestRenderer.create(<MyTestRenderer/>);
    environment.mock.resolveMostRecentOperation(operation =>
        MockPayloadGenerator.generate(operation, {
            gwclouduser() {
                return {
                    userId: null,
                    username: null,
                    firstName: null,
                    lastName: null
                }
            }
        }),
    );

    // todo: Check that login is in the document
    expect(renderer).toMatchSnapshot();
});

test('Layout renders login if user is set', () => {
    mockLocationHostName("gwlab.org.au");

    const environment = createMockEnvironment();
    const MyTestRenderer = () => (
        <QueryRenderer
            environment={environment}
            query={graphql`
                query LayoutUserSetTestQuery @relay_test_operation {
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

    const renderer = TestRenderer.create(<MyTestRenderer/>);
    environment.mock.resolveMostRecentOperation(operation =>
        MockPayloadGenerator.generate(operation, {
            gwclouduser() {
                return {
                    userId: 4,
                    username: "billnye",
                    firstName: "Bill",
                    lastName: "Nye"
                }
            }
        }),
    );

    // todo: Check that the user name and logout is in the document
    expect(renderer).toMatchSnapshot();
});
