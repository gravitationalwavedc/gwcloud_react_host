import React from 'react';
import Menu from '../components/gwcloud/Menu';
import renderer from 'react-test-renderer';


jest.mock('found', () => ({
    Link: component => <a {...component}>{component.children}</a>
}));

describe('the menu component', () => {
    it('displays correctly when logged out', () => {
        expect.hasAssertions();
        const menu = renderer
            .create(<Menu />)
            .toJSON();
        expect(menu).toMatchSnapshot();
    });

    it('displays correctly when logged in', () => {
        expect.hasAssertions();
        const menu = renderer
            .create(<Menu name={'Buffy Summers'} />)
            .toJSON();
        expect(menu).toMatchSnapshot();
    });
});
