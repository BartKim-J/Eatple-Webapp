import React from 'react';

import { Navbar, Nav } from 'react-bootstrap';

import Logo from 'resource/Image/ImgLogo.png';

import './index.scss';

import BtnTrial from './Images/BtnNav@3x.png';

export default function Menu() {
  return (
    <div className="menu-section">
      <div className="menu-inner">
        <div className="menu-wrap">
          <Navbar className="menu-bar">
            <Navbar.Brand href="/">
              <img
                alt="Logo"
                src={Logo}
                className="d-inline-block align-top menu-bar-logo"
                draggable="false"
              />
            </Navbar.Brand>
            <Nav className="mr-auto menu-bar-items">
              <Nav.Link className="menu-bar-item" href="/">
                <img
                  alt="Button Trial"
                  src={BtnTrial}
                  className="menu-bar-btn-trial"
                  draggable="false"
                />
              </Nav.Link>
            </Nav>
          </Navbar>
        </div>
      </div>
    </div>
  );
}
