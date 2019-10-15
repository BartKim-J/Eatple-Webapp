import React, { Component } from 'react';

import { Navbar, Nav } from 'react-bootstrap';

import Logo from 'resource/Image/ImgLogo.png';
import TrialBtn from '../Images/Menu/btn-trial@3x.png';

import './Menu.scss';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="nav_var-wrap">
        <Navbar className="nav_var">
          <Navbar.Brand href="/">
            <img alt="MealKok" src={Logo} className="d-inline-block align-top nav_menu-logo" />
          </Navbar.Brand>
          <Nav className="mr-auto nav_menu-items">
            <Nav.Link className="nav_menu-item" href="/">
              멤버쉽
            </Nav.Link>
            <Nav.Link className="nav_menu-item" href="/">
              <div className="trial-btn-box">
                <img className="btn" src={TrialBtn} alt="" />
              </div>
            </Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}


export default Menu;
