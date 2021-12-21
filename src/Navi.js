import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
} from "reactstrap";

export default class Navi extends Component {
  render() {
    return (
      <div>
        <Navbar expand="xl">
        <img src="amblem3.png" width="90" height="100" 
        href = "/"></img>
          <NavbarBrand>
            <Link to="/" className="nvbrd color">
             qrcode CG
            </Link> 
          </NavbarBrand>
          <Collapse navbar>
            <Nav>
              <NavItem>
                <Link to = "/about" className="about margin color">
                  ABOUT
                </Link>
              </NavItem>
              <NavItem>
                <Link to = "/chrome-app" className="color margin1 chrome-app">
                  Chrome APP
                </Link>
              </NavItem>
              <NavItem>
                <Link to = "/qrcode-apı" className="qrcode-apı margin2 color">
                QRCode API
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
