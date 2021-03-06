import React from 'react';
import {createFragmentContainer} from 'react-relay';
import Menu from './components/Menu';
import HarnessApi from './HarnessApi';

// regex list to match urls where the menu should be hidden.
const noMenuURLs = [
    /\/auth\/.*/ 
];

const setUser = (user) => {
    HarnessApi.currentUser = user;
    return user;
};

const Layout = ({gwclouduser, children, match}) => {
    const user = setUser(gwclouduser);
    const name = user ? `${user.firstName} ${user.lastName}` : null;
    const showMenu = !noMenuURLs.some(regex => regex.test(match.location.pathname));

    return (
        <React.Fragment>
            <header>
                {showMenu && <Menu name={name}/>}
            </header>
            <main className="h-100" style={showMenu ? {marginTop: '56px'} : null}>
                {children}
            </main>
        </React.Fragment>
    );
};

export default createFragmentContainer(Layout, {
    gwclouduser: graphql`
        fragment Layout_gwclouduser on UserDetails {
          userId
          username
          firstName
          lastName
        }
    `
});
