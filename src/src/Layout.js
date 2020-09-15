import React from "react";
import {createFragmentContainer} from "react-relay";
import Menu from "./components/Menu";
import HarnessApi from "./HarnessApi";

const noMenuURLs = [
  "/auth/"
];

const setUser = (user) => {
  // Update the current user
  HarnessApi.currentUser = user;
  return user;
};

const Layout = ({gwclouduser, children, match}) => {
    const user = setUser(gwclouduser);
    const name = user ? `${user.firstName} ${user.lastName}` : null;
    const showMenu= !noMenuURLs.includes(match.location.pathname);
    return (
      <React.Fragment>
        <header>
          {showMenu && <Menu name={name}/>}
        </header>
        <main style={{paddingTop: '56px'}}>
          {children}
        </main>
      </React.Fragment>
    )
}

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
