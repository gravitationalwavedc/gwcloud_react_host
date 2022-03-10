import React from 'react';
import {logout} from '../../Environment';
import {Link} from 'found';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { HiOutlineUserCircle, HiOutlineLogout } from 'react-icons/hi';
import GWLandscapeLogo from '../../assets/gwlandscape/images/logo.png';

const iconStyle = {
    height: '20px',
    margin: '-2px 2px 0 0'
};

const subMenu = (name) => {
    if(name){
        return (
            <Nav>
                <Navbar.Text className="justify-content-end mr-3">
                    <HiOutlineUserCircle style={iconStyle}/> {name}
                </Navbar.Text>
                <Nav.Link onClick={() => logout()}>
                    <HiOutlineLogout style={iconStyle}/> Logout
                </Nav.Link>
            </Nav>
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
            <Navbar.Brand className="mr-auto">
                <Link to="/" exact className="navbar-brand-link" data-testid="GWLandscapeLogo">
                    <img src={GWLandscapeLogo} style={iconStyle}/>GWLandscape
                </Link>
            </Navbar.Brand>
            {SubMenu}
        </Navbar>
    );
};

export default Menu;
