import React from "react";
import Link from "found/lib/Link";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import blackHoleImg from ".assets/BlackHoleNeutronStar_OzGrav.jpg";
import {HiCheck} from "react-icons/hi";

const Home = () => {
  return (
    <Container>
      <Card style={{ marginTop: "100px", border: "none", boxShadow: " 0px 20px 25px rgba(0, 0, 0, 0.1)", boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.04)"}}>
        <Card.Img src={blackHoleImg} variant="top" style={{objectFit: "cover", maxHeight:"200px"}}/>
        <Card.Body>
          <Card.Title>GWCloud</Card.Title>
          <Card.Text>
            <ul style={{listStyleType: "none"}}>
              <li><HiCheck/> Perform inference on open-source or proprietary data.</li>
              <li><HiCheck/> Generate and analyse synthetic gravitational-wave observations.</li>
              <li><HiCheck/> Access a database of inferences runs.</li>
              <li><HiCheck/> Simple, fast and easy.</li>
              <li><HiCheck/> Powered by Bilby.</li>
            </ul>
          </Card.Text>
          <Link as={Button} to="/bilby/" exact className="btn btn-lg btn-primary">
            Go to GWCLoud
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Home;
