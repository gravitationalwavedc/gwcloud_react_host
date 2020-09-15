import React from "react";
import Link from "found/lib/Link";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

class Home extends React.Component {
    render() {
        return (
          <Container>
            <Card body>
                <Link as={Button} to="/bilby/" exact>
                    Bilby
                </Link>
            </Card>
          </Container>
        );
    }
}

export default Home;
