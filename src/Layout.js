import {Button, Dropdown, Grid, Menu} from "semantic-ui-react";
import React from "react";
import Link from 'found/lib/Link';
import {logout} from './Environment';

function Layout(props) {
    return (
        <div>
            <Menu fixed={'top'}>
                {/*<Container>*/}
                <Menu.Item as='a' header>
                    GW Cloud
                </Menu.Item>
                <Menu.Item as='div'><Link to="/" activeClassName="selected" exact>Home</Link></Menu.Item>
                <Menu.Item as='div' position='right'>{
                    props.gwclouduser ? 
                        <Dropdown item text={props.gwclouduser.firstName + " " + props.gwclouduser.lastName}>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => {logout()}}>Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    : (<Link to="/auth/" activeClassName="selected" exact>Login</Link>)
                }</Menu.Item>
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

export default Layout;