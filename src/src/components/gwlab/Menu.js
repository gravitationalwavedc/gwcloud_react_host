import React from 'react';
import {logout} from '../../Environment';
import {Link} from 'found';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import GWLabLogo from '../../assets/gwlab/images/logo.svg';

const subMenu = (name) => {
    if (name) {
        return (
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Link className="nav-link" to="/viterbi/" exact>
                        Experiments
                    </Link>
                    <Link className="nav-link" to="/viterbi/job-form/" exact>
                        New Experiment
                    </Link>
                </Nav>
                <Nav>
                    <Navbar.Text className="justify-content-end mr-3 nav-username">
                        {name}
                    </Navbar.Text>
                    <Nav.Link onClick={() => logout()}>
                    Logout
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        );
    }

    return (
        <Nav>
            <Link to="/auth/" exact>Login</Link>
        </Nav>
    );
};

const Menu = ({name}) => {
    const SubMenu = subMenu(name);
    return (
        <Navbar collapseOnSelect expand="md" fixed="top">
            <Container>
                <Navbar.Brand>
                    <Link to="/" exact className="navbar-brand-link">
                        <img src={GWLabLogo} />
                    </Link>
                </Navbar.Brand>
                <h4 className="text-center d-md-none nav-title">Viterbi</h4>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                {SubMenu}
            </Container>
        </Navbar>
    );
};

export default Menu;
