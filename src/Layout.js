import {Grid, Menu} from "semantic-ui-react";
import React from "react";
import Link from 'found/lib/Link';

function Layout(props) {
    console.log(props)
    return (
        <div>
            <Menu fixed={'top'}>
                {/*<Container>*/}
                <Menu.Item as='a' header>
                    GW-Cloud
                </Menu.Item>
                <Menu.Item as='div'><Link to="/" activeClassName="selected" exact>Home</Link></Menu.Item>
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