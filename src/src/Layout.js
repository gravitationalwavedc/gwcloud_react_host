import {Button, Dropdown, Grid, Menu} from "semantic-ui-react";
import React from "react";
import Link from 'found/lib/Link';
import {logout} from './Environment';
import {createFragmentContainer} from "react-relay"
import HarnessApi from "./HarnessApi";

function Layout(props) {
    // Update the current user
    HarnessApi.currentUser = props.gwclouduser;

    return (
        <div>
            <Menu fixed={'top'}>
                {/*<Container>*/}
                <Menu.Item as='a' header>
                    GW Cloud
                </Menu.Item>
                <Menu.Item as='div'><Link to="/" activeClassName="selected" exact>Home</Link></Menu.Item>
                <Menu.Menu position='right'>{
                    props.gwclouduser ?
                        <Dropdown floating item text={props.gwclouduser.firstName + " " + props.gwclouduser.lastName}>
                            <Dropdown.Menu>
                                <Menu.Item onClick={() => {logout()}}>Logout</Menu.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    : <Menu.Item as='div'>
                        <Link to="/auth/" activeClassName="selected" exact>Login</Link>
                        </Menu.Item>
                }</Menu.Menu>
                {/*</Container>*/}
            </Menu>
            <Grid columns={1}>
                <Grid.Column>
                    {props.children}
                </Grid.Column>
            </Grid>
        </div>
    )
}

export default createFragmentContainer(Layout, {
    gwclouduser: graphql`
        fragment Layout_gwclouduser on UserDetails {
          username
          firstName
          lastName
        }
    `
});