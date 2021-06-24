
import React from "react";
import { Navbar, Nav, NavItem, Image,NavDropdown } from "react-bootstrap";
import {Link} from 'react-router-dom'
function CustomNavbar() {
    return (
      <Navbar >
      <Link to="/"> <Navbar.Header>
        <Navbar.Brand>
          Hammad
        </Navbar.Brand>

      </Navbar.Header></Link>
      <Nav pullRight>
        <NavItem eventKey={1}  href="/about" to="/about" style={{ textAlign: 'right'}}>
          Book a session
     </NavItem>  </Nav>

    </Navbar>
    );
}
export default CustomNavbar;