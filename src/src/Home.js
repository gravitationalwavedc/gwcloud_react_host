import React from 'react'
import Link from 'found/lib/Link';
import {Button, Grid, Segment} from "semantic-ui-react";

class Home extends React.Component {
    render() {
        return (
            <Grid textAlign='center' style={{height: '100vh', marginTop: "2em"}} verticalAlign='top'>
                <Grid.Row>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Segment>
                            <Link as={Button} to="/auth/" activeClassName="selected" exact>
                                Login
                            </Link>
                        </Segment>
                        <Segment>
                            <Link as={Button} to="/bilby/" activeClassName="selected" exact>
                                Bilby
                            </Link>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default Home;