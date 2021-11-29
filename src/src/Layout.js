import React from 'react';
import {createFragmentContainer} from 'react-relay';
import HarnessApi from './HarnessApi';
import {currentProject} from './utils';

// regex list to match urls where the menu should be hidden.
const noMenuURLs = [
    /\/auth\/(?!api-token).*/ 
];

const setUser = (user) => {
    HarnessApi.currentUser = user;
    return user;
};

const Layout = ({gwclouduser, children, match}) => {
    const user = setUser(gwclouduser);
    const name = user ? `${user.firstName} ${user.lastName}` : null;
    const showMenu = !noMenuURLs.some(regex => regex.test(match.location.pathname));
    const Menu = currentProject().menu;
    const Helmet = currentProject().helmet;

    return (
        <React.Fragment>
            <Helmet />
            <header>
                {showMenu && <Menu name={name} match={match}/>}
            </header>
            <main className="h-100" style={showMenu ? {paddingTop: currentProject().menuPadding} : null}>
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
          isLigoUser
        }
    `
});
