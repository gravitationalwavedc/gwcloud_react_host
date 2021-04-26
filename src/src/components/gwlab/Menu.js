import React from 'react';
import {logout} from '../../Environment';
import {Link} from 'found';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import GWLabLogo from '../../assets/gwlab/images/logo.svg';

const subMenu = (name) => {
    if (name) {
        return (
            <>
                <Nav className="mr-auto">
                    <Nav.Link>Home</Nav.Link>
                    <Nav.Link>Experiments</Nav.Link>
                    <Nav.Link>New Experiment</Nav.Link>
                </Nav>
                <Nav>
                    <Navbar.Text className="justify-content-end mr-3 nav-username">
                        {name}
                    </Navbar.Text>
                    <Nav.Link onClick={() => logout()}>
                    Logout
                    </Nav.Link>
                </Nav>
            </>
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
        <Navbar fixed="top">
            <Navbar.Brand>
                <Link to="/" exact className="navbar-brand-link">
                    <img src={GWLabLogo} />
                </Link>
            </Navbar.Brand>
            {SubMenu}
        </Navbar>
    );
};

export default Menu;
