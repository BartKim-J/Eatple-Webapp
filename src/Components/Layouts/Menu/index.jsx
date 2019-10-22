import React, { Component } from 'react';

import { Navbar, Nav } from 'react-bootstrap';

import Logo from 'resource/Image/ImgLogo.png';
import TrialBtn from '../Images/Menu/btn-trial@3x.png';

import './index.scss';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="menu-section">
        <div className="menu-inner">
          <div className="menu-wrap">
            <Navbar className="menu-bar">
              <Navbar.Brand href="/">
                <img alt="Logo" src={Logo} className="d-inline-block align-top menu-bar-logo" />
              </Navbar.Brand>
              <Nav className="mr-auto menu-bar-items">
                {/* <Nav.Link className="menu-bar-item" href="/"></Nav.Link> */}
              </Nav>
            </Navbar>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
