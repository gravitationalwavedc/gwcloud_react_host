import React from "react";
import {logout} from '../Environment';
import {Link} from 'found';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const subMenu = (name) => {
  if(name){
    return (
      <Nav>
        <Navbar.Text className="justify-content-end">{name}</Navbar.Text>
        <Nav.Link onClick={() => logout()}>Logout</Nav.Link>
      </Nav>
    );
  };

  return (
    <Nav>
      <Link to="/auth/" exact>Login</Link>
    </Nav>
  );
}

const Menu = ({name}) => {
  const SubMenu = subMenu(name);
  return (
    <Navbar fixed="top">
      <Navbar.Brand className="mr-auto">
        <Link to="/" exact>GW Cloud</Link>
      </Navbar.Brand>
      {SubMenu}
    </Navbar>
  );
}

export default Menu;
