import React from 'react';
import {logout} from '../../Environment';
import {Link} from 'found';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import GWLabLogo from '../../assets/gwlab/images/logo.svg';

const modules = [
    {domain: 'viterbi', name: 'Viterbi', homeLink: '/viterbi'},
    {domain: 'cwfollowup', name: 'CWFollowup', homeLink: '/cwfollowup'}
];

const moduleFromMatch = (match) => {
    const currentModule = modules.find(mod => match.location.pathname.includes(mod.domain));
    return currentModule || {name: null, homelink: '/'};
};

const subMenu = (name) => {
    if (name) {
        return (
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    {
                        modules.map(({name, homeLink}, index) => 
                            <Link key={index} className="nav-link" to={homeLink} exact>
                                {name}
                            </Link>
                        )
                    }
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

const Menu = ({name, match}) => {
    const moduleData = moduleFromMatch(match);

    const SubMenu = subMenu(name);
    return (
        <Navbar collapseOnSelect expand="md" fixed="top">
            <Container>
                <Navbar.Brand>
                    <Link to={moduleData.homeLink} exact className="navbar-brand-link" data-testid="GWLabLogo">
                        <img src={GWLabLogo} />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                {SubMenu}
            </Container>
        </Navbar>
    );
};

export default Menu;
