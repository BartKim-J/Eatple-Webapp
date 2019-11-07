import React from 'react';
import styled from 'styled-components';
import { Navbar, Nav } from 'react-bootstrap';

import mediaConf from 'configure/mediaConfig';

import Logo from 'resource/Image/ImgLogo.svg';

import BtnTrial from './Images/BtnFloating.svg';

function MenuBar() {
  return (
    <Styled.Section>
      <Styled.Container>
        <Navbar>
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
      </Styled.Container>
    </Styled.Section>
  );
}

function MobileMenuBar() {
  return (
    <StyledMobile.Section>
      <StyledMobile.Container>
        <Navbar>
          <Navbar.Brand href="/">
            <img
              alt="Logo"
              src={Logo}
              className="d-inline-block align-top menu-bar-logo"
              draggable="false"
            />
          </Navbar.Brand>
        </Navbar>
      </StyledMobile.Container>
    </StyledMobile.Section>
  );
}

export default function Menu() {
  return (
    <>
      <MenuBar />
      <MobileMenuBar />
    </>
  );
}

const Styled = {};

Styled.Section = styled.section`
  position: absolute;
  top: 0;
  left: 0;

  width: 100vw;
  height: 8vh;

  @media all and (max-width: ${mediaConf.MEDIA_WIDTH_MOBILE_MAX}) {
    display: none;
  }

  @media all and (max-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT}) {
    padding: 0 ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT_PADDING};
  }

  z-index: ${mediaConf.LAYOUT_DEFAULT_Z_INDEX};
`;

Styled.Container = styled.div`
  position: relative;

  max-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT};
  height: 100%;

  margin: 0 auto;
  padding: 2% 0;

  img {
    width: 100%;
  }

  .menu-bar-logo {
    width: 6vw;
    max-width: 88px;
  }

  .menu-bar-btn-trial {
    width: 8vw;
    max-width: 128px;
  }

  .menu-bar-items {
    display: flex;

    float: right;
    vertical-align: middle;

    .menu-bar-item {
      margin-left: 5vw;
    }
  }
`;

const StyledMobile = {};

StyledMobile.Section = styled.section`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 8vh;

  padding: 0 ${mediaConf.MEDIA_WIDTH_MOBILE_CONTENT_PADDING};

  @media all and (min-width: ${mediaConf.MEDIA_WIDTH_MOBILE_MAX}) {
    display: none;
  }

  z-index: ${mediaConf.LAYOUT_DEFAULT_Z_INDEX};
`;

StyledMobile.Container = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  margin: 0 auto;

  padding: 4% 0;

  img {
    width: 100%;
  }

  .menu-bar-logo {
    width: 13vw;
    max-width: 68px;
  }

  .menu-bar-btn-trial {
    width: 8vw;
    max-width: 128px;
  }

  .menu-bar-items {
    display: flex;

    float: right;
    vertical-align: middle;

    .menu-bar-item {
      margin-left: 5vw;
    }
  }
`;
