import React from 'react';
import styled from 'styled-components';
import { Navbar, Nav } from 'react-bootstrap';

import mediaConf from 'configure/mediaConfig';

import Logo from 'resource/Image/ImgLogo.svg';

import BtnTrial from './Images/BtnFloating.svg';

export default function Menu() {
  return (
    <Styled.Section>
      <Styled.Container>
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
      </Styled.Container>
    </Styled.Section>
  );
}

const Styled = {};

Styled.Section = styled.section`
  position: absolute;
  top: 0;
  left: 0;
`;

Styled.Container = styled.div`
  width: 100vw;

  .menu-wrap {
    margin: 0 auto;

    .menu-bar {
      position: relative;

      z-index: ${mediaConf.LAYOUT_DEFAULT_Z_INDEX};

      width: 100vw;
      height: 8vh;

      padding: 2vh 3vw 0vh 3vw;
      margin: 0 auto;

      .menu-bar-brand {
        float: left;
      }

      .menu-bar-logo {
        width: 88px;
      }

      .menu-bar-btn-trial {
        width: 128px;
      }

      .menu-bar-items {
        display: flex;

        float: right;
        vertical-align: middle;

        .menu-bar-item {
          margin-left: 5vw;
        }
      }
    }
  }
`;
